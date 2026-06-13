"use client";

import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { 
  Trophy, Flame, Zap, Droplets, Moon, Target, TrendingUp, 
  Award, Crown, Activity, Calendar, Clock, BarChart2, Shield, 
  Bell, Camera, Star, CheckCircle
} from "lucide-react";

// --- XP Growth Curve Engine ---
const calculateLevel = (totalXP) => {
  let level = 1;
  let xpRequired = 100;
  let remainingXP = totalXP || 0;
  
  // 20% increase in difficulty per level
  while (remainingXP >= xpRequired) {
    remainingXP -= xpRequired;
    level++;
    xpRequired = Math.floor(100 * Math.pow(1.2, level - 1));
  }
  return { level, currentLevelXP: remainingXP, xpForNext: xpRequired };
};

export default function EliteAnalyticsDashboard() {
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showNotification, setShowNotification] = useState(false);
  const [achievementAnim, setAchievementAnim] = useState(null);
  const [uploadingImage, setUploadingImage] = useState(false);

  // Core State
  const [userData, setUserData] = useState({
    name: "Elite Athlete", photoURL: "", xp: 0, wins: 0, currentStreak: 0,
    waterIntake: 0, waterGoal: 4, sleepHours: 0, sleepGoal: 8, sleepScore: 0, xpEarnedToday: 0,
    dailyLogs: [], // Array of { date, sleep, water, score, xp }
    achievements: [], notifications: [], isPublicForLeaderboard: true
  });

  // Calculated Analytics State
  const [analytics, setAnalytics] = useState({
    weeklyAvgSleep: 0, weeklyAvgWater: 0, weeklyAvgScore: 0, weeklyXP: 0,
    monthlyAvgSleep: 0, monthlyAvgWater: 0, monthlyXP: 0,
    bestSleepScore: 0, longestStreak: 0, highestWater: 0, highestXP: 0,
    totalSleep: 0, totalWater: 0, totalXP: 0, recoveryTrend: "Stable"
  });

  // Daily Missions
  const [missions, setMissions] = useState([
    { id: 1, title: "Hit Sleep Goal", done: false },
    { id: 2, title: "Drink 4L Water", done: false },
    { id: 3, title: "Log Data Before 10 AM", done: false }
  ]);

  useEffect(() => {
    const unsubAuth = onAuthStateChanged(auth, (user) => {
      if (user) setUserId(user.uid);
      else { setUserId(null); setLoading(false); }
    });
    return () => unsubAuth();
  }, []);

  // Sync Data & Run Analytics Engine
  useEffect(() => {
    if (!userId) return;
    const userRef = doc(db, "users", userId);
    
    const unsubDoc = onSnapshot(userRef, async (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setUserData(prev => ({ ...prev, ...data }));
        
        // --- AUTO ANALYTICS ENGINE ---
        if (data.dailyLogs && data.dailyLogs.length > 0) {
          const logs = data.dailyLogs;
          const now = new Date();
          
          // Filters
          const last7Days = logs.filter(l => (now - new Date(l.date)) / (1000 * 3600 * 24) <= 7);
          const last30Days = logs.filter(l => (now - new Date(l.date)) / (1000 * 3600 * 24) <= 30);
          
          // Averages & Totals
          const calcAvg = (arr, key) => arr.length ? (arr.reduce((acc, curr) => acc + (curr[key] || 0), 0) / arr.length).toFixed(1) : 0;
          const calcSum = (arr, key) => arr.reduce((acc, curr) => acc + (curr[key] || 0), 0);
          const calcMax = (arr, key) => arr.length ? Math.max(...arr.map(l => l[key] || 0)) : 0;

          const newAnalytics = {
            weeklyAvgSleep: calcAvg(last7Days, "sleep"),
            weeklyAvgWater: calcAvg(last7Days, "water"),
            weeklyAvgScore: Math.round(calcAvg(last7Days, "score")),
            weeklyXP: calcSum(last7Days, "xp"),
            monthlyAvgSleep: calcAvg(last30Days, "sleep"),
            monthlyAvgWater: calcAvg(last30Days, "water"),
            monthlyXP: calcSum(last30Days, "xp"),
            bestSleepScore: calcMax(logs, "score"),
            highestWater: calcMax(logs, "water"),
            highestXP: calcMax(logs, "xp"),
            totalSleep: calcSum(logs, "sleep").toFixed(1),
            totalWater: calcSum(logs, "water").toFixed(1),
            totalXP: data.xp || 0,
            longestStreak: data.longestStreak || data.currentStreak || 0, // Fallback
            recoveryTrend: calcAvg(last7Days, "score") > calcAvg(last30Days, "score") ? "Improving 🚀" : "Stable ⚡"
          };

          setAnalytics(newAnalytics);

          // Update Missions Dynamically
          setMissions([
            { id: 1, title: "Hit Sleep Goal", done: data.sleepHours >= data.sleepGoal },
            { id: 2, title: "Drink Daily Target", done: data.waterIntake >= data.waterGoal },
            { id: 3, title: "Maintain Streak", done: data.currentStreak > 0 }
          ]);
        }
      }
      setLoading(false);
    });
    return () => unsubDoc();
  }, [userId]);

  // Profile Image Upload handler
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file || !userId) return;
    setUploadingImage(true);
    try {
      const storage = getStorage();
      const storageRef = ref(storage, `profiles/${userId}`);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      await updateDoc(doc(db, "users", userId), { photoURL: url });
    } catch (error) {
      console.error("Upload failed", error);
      alert("Failed to upload image. Ensure Firebase Storage is enabled.");
    }
    setUploadingImage(false);
  };

  // UI Derivations
  const { level, currentLevelXP, xpForNext } = calculateLevel(userData.xp);
  const xpPercent = Math.min(100, (currentLevelXP / xpForNext) * 100);
  
  const getRank = (xp) => {
    if (xp >= 5000) return { title: "Legend", color: "#ffaa00" };
    if (xp >= 2500) return { title: "Elite Athlete", color: "#ff4d88" };
    if (xp >= 1000) return { title: "Pro Athlete", color: "#9d4edd" };
    if (xp >= 500) return { title: "Athlete", color: "#3ea6ff" };
    if (xp >= 100) return { title: "Beginner", color: "#39ff14" };
    return { title: "Rookie", color: "#aaa" };
  };
  const rank = getRank(userData.xp);

  // 7-Day Chart Generator
  const renderChart = (key, color, maxVal) => {
    const last7 = [...(userData.dailyLogs || [])].slice(-7);
    while(last7.length < 7) last7.unshift({ [key]: 0 }); // pad empty days

    return (
      <div style={s.chartBox}>
        {last7.map((log, i) => {
          const val = log[key] || 0;
          const h = maxVal ? `${(val/maxVal)*100}%` : '0%';
          return (
            <div key={i} style={s.chartCol}>
              <div style={{...s.chartBar, height: h, background: color}} title={`${val}`} />
            </div>
          );
        })}
      </div>
    );
  };

  if (loading) return <div style={s.center}><h2>Loading Analytics Engine...</h2></div>;

  return (
    <div style={s.page}>
      
      {/* ACHIEVEMENT ANIMATION OVERLAY */}
      {achievementAnim && (
        <div style={s.achievementOverlay}>
          <div style={s.achievementModal}>
            <Star color="#ffd700" size={50} style={{ animation: "spin 2s linear infinite" }} />
            <h2>Achievement Unlocked!</h2>
            <p style={{ color: "#39ff14", fontSize: "18px" }}>{achievementAnim}</p>
            <button style={s.btn} onClick={() => setAchievementAnim(null)}>Awesome</button>
          </div>
        </div>
      )}

      {/* TOP NAV & NOTIFICATIONS */}
      <div style={{...s.flexSB, marginBottom: "20px"}}>
        <h1 style={s.mainTitle}>Progress Engine</h1>
        <div style={{ position: "relative" }}>
          <button style={s.iconBtn} onClick={() => setShowNotification(!showNotification)}>
            <Bell size={24} color="#e2e8f0" />
            {(userData.notifications?.length || 0) > 0 && <span style={s.notifDot} />}
          </button>
          {showNotification && (
            <div style={s.notifDropdown}>
              <h4 style={{ margin: "0 0 10px", color:"white" }}>Alerts & Leaderboard</h4>
              {userData.notifications?.length > 0 ? 
                userData.notifications.map((n, i) => <p key={i} style={s.notifItem}>{n}</p>) : 
                <p style={s.notifItem}>You're all caught up!</p>
              }
              <div style={{...s.flexSB, marginTop:"10px", borderTop:"1px solid rgba(255,255,255,0.1)", paddingTop:"10px"}}>
                <span style={{fontSize:"12px", color:"#aaa"}}>Leaderboard Visibility</span>
                <span style={{color: userData.isPublicForLeaderboard ? "#39ff14" : "#aaa", fontSize:"12px"}}>{userData.isPublicForLeaderboard ? "Public" : "Private"}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 1. ATHLETE OVERVIEW & XP CURVE */}
      <div style={{ ...s.glass, ...s.flexSB, flexWrap: "wrap", borderTop: `4px solid ${rank.color}` }}>
        <div style={{...s.flexBox, position: "relative"}}>
          <div style={s.avatarContainer}>
            {userData.photoURL ? 
              <img src={userData.photoURL} alt="Profile" style={s.avatarImg} /> : 
              <div style={s.avatarImg}>{userData.name?.charAt(0) || "A"}</div>
            }
            <label style={s.uploadBtn}>
              <Camera size={14} />
              <input type="file" accept="image/*" onChange={handleImageUpload} style={{ display: "none" }} />
            </label>
          </div>
          <div>
            <h1 style={s.name}>{userData.name}</h1>
            <p style={{ color: rank.color, fontWeight: "bold", fontSize: "15px", display:"flex", alignItems:"center", gap:"5px" }}>
              <Crown size={18}/> {rank.title} | Level {level}
            </p>
          </div>
        </div>

        {/* XP Progress Bar */}
        <div style={{ width: "100%", maxWidth: "350px", marginTop: "15px" }}>
          <div style={s.flexSB}><span style={s.lbl}>Lvl {level} Progress</span><span style={{color:"#3ea6ff", fontWeight:"bold"}}>{Math.round(currentLevelXP)} / {xpForNext} XP</span></div>
          <div style={s.barBg}><div style={{...s.barFill, width: `${xpPercent}%`, background: "linear-gradient(90deg, #3ea6ff, #9d4edd)"}}/></div>
        </div>
      </div>

      <div style={s.grid2}>
        {/* 4. 7-DAY VISUAL CHARTS */}
        <div style={s.glass}>
          <h2 style={s.cardTitle}><Activity color="#3ea6ff"/> 7-Day Performance</h2>
          <p style={s.lbl}>Sleep Cycle (Target: {userData.sleepGoal}h)</p>
          {renderChart("sleep", "#9d4edd", 12)}
          
          <p style={{...s.lbl, marginTop:"15px"}}>Hydration (Target: {userData.waterGoal}L)</p>
          {renderChart("water", "#3ea6ff", 8)}
        </div>

        {/* 5. DAILY MISSIONS */}
        <div style={s.glass}>
          <h2 style={s.cardTitle}><Target color="#39ff14"/> Daily Missions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {missions.map(m => (
              <div key={m.id} style={{...s.missionBox, borderLeft: m.done ? "4px solid #39ff14" : "4px solid #334155"}}>
                <span style={{ color: m.done ? "white" : "#94a3b8" }}>{m.title}</span>
                {m.done && <CheckCircle size={18} color="#39ff14" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CORE ANALYTICS ENGINE DATA */}
      <h2 style={{ ...s.cardTitle, margin: "30px 0 15px" }}><BarChart2 color="#3ea6ff"/> Engine Analytics</h2>
      
      <div style={s.grid2}>
        {/* Weekly & Monthly Engine Averages */}
        <div style={s.glass}>
          <h3 style={{...s.lbl, marginBottom: "15px"}}>Averages (7D vs 30D)</h3>
          <div style={s.statGrid}>
            <StatBox title="Weekly Sleep" val={`${analytics.weeklyAvgSleep}h`} />
            <StatBox title="Monthly Sleep" val={`${analytics.monthlyAvgSleep}h`} />
            <StatBox title="Weekly Water" val={`${analytics.weeklyAvgWater}L`} />
            <StatBox title="Monthly Water" val={`${analytics.monthlyAvgWater}L`} />
            <StatBox title="Avg Score (7D)" val={analytics.weeklyAvgScore} color={analytics.weeklyAvgScore >= 80 ? "#39ff14" : "#ffaa00"} />
            <StatBox title="Trend" val={analytics.recoveryTrend} color="#3ea6ff" />
          </div>
        </div>

        {/* Personal Records & Lifetime Totals */}
        <div style={s.glass}>
          <h3 style={{...s.lbl, marginBottom: "15px"}}>Lifetime Records & Totals</h3>
          <div style={s.statGrid}>
            <StatBox title="Best Sleep Score" val={analytics.bestSleepScore} color="#ffaa00" />
            <StatBox title="Longest Streak" val={`${analytics.longestStreak} Days`} color="#ff4d88" />
            <StatBox title="Total Sleep Logged" val={`${analytics.totalSleep}h`} />
            <StatBox title="Total Water Mined" val={`${analytics.totalWater}L`} />
            <StatBox title="Highest Daily XP" val={analytics.highestXP} color="#ffd700" />
            <StatBox title="Total XP Earned" val={analytics.totalXP} color="#ffd700" />
          </div>
        </div>
      </div>

      {/* ACHIEVEMENTS LOCKER */}
      {userData.achievements?.length > 0 && (
        <div style={s.glass}>
          <div style={s.flexSB}>
            <h2 style={s.cardTitle}><Trophy color="#ffd700"/> Trophy Locker</h2>
            <span style={{ color: "#aaa", fontSize: "12px" }}>{userData.achievements.length} Badges</span>
          </div>
          <div style={s.achieveGrid}>
            {userData.achievements.map((ach, i) => (
              <div key={i} style={s.achieveCard}>{ach}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Mini Component for Stats
const StatBox = ({ title, val, color = "white" }) => (
  <div style={s.prBox}>
    <p style={s.lbl}>{title}</p>
    <h4 style={{ color: color, margin: "5px 0 0", fontSize: "18px" }}>{val}</h4>
  </div>
);

// ULTRA-MINIMIZED CSS (Zero Truncation Guarantee)
const flex = { display: "flex", alignItems: "center" };
const flexSB = { ...flex, justifyContent: "space-between" };
const gl = { background: "rgba(15, 23, 42, 0.6)", backdropFilter: "blur(12px)", padding: "24px", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.08)", marginBottom: "20px", boxShadow: "0 8px 32px rgba(0,0,0,0.3)" };

const s = {
  page: { minHeight: "100vh", background: "#020617", color: "white", padding: "20px", fontFamily: "sans-serif", maxWidth: "1000px", margin: "0 auto", position: "relative" },
  center: { ...flex, justifyContent: "center", minHeight: "100vh", background: "#020617", color: "white" },
  flexBox: { ...flex, gap: "15px" }, flexSB: flexSB, glass: gl,
  mainTitle: { fontSize: "28px", fontWeight: "900", margin: 0, background: "linear-gradient(90deg, #3ea6ff, #39ff14)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
  avatarContainer: { position: "relative", width: "70px", height: "70px" },
  avatarImg: { width: "100%", height: "100%", borderRadius: "50%", background: "linear-gradient(135deg, #3ea6ff, #9d4edd)", ...flex, justifyContent: "center", fontSize: "28px", fontWeight: "bold", border: "2px solid rgba(255,255,255,0.2)", objectFit: "cover" },
  uploadBtn: { position: "absolute", bottom: 0, right: 0, background: "#3ea6ff", padding: "5px", borderRadius: "50%", cursor: "pointer", display: "flex", color: "#020617" },
  name: { fontSize: "24px", margin: "0 0 5px 0", fontWeight: "900" },
  grid2: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "20px" },
  cardTitle: { ...flex, gap: "10px", fontSize: "18px", margin: "0 0 20px 0", color: "white", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px" },
  lbl: { fontSize: "13px", color: "#94a3b8", fontWeight: "bold" },
  barBg: { width: "100%", height: "10px", background: "rgba(0,0,0,0.5)", borderRadius: "10px", marginTop: "8px", overflow: "hidden" },
  barFill: { height: "100%", borderRadius: "10px", transition: "width 1s cubic-bezier(0.4, 0, 0.2, 1)" },
  missionBox: { background: "rgba(0,0,0,0.3)", padding: "14px 18px", borderRadius: "12px", ...flexSB, fontSize: "15px", fontWeight: "bold" },
  chartBox: { display: "flex", alignItems: "flex-end", height: "100px", gap: "8px", background: "rgba(0,0,0,0.2)", padding: "10px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.05)" },
  chartCol: { flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", height: "100%" },
  chartBar: { width: "100%", borderRadius: "4px 4px 0 0", transition: "height 0.8s ease" },
  statGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" },
  prBox: { background: "rgba(0,0,0,0.2)", padding: "12px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.03)" },
  achieveGrid: { display: "flex", flexWrap: "wrap", gap: "12px" },
  achieveCard: { background: "linear-gradient(135deg, rgba(255,215,0,0.1), rgba(0,0,0,0))", border: "1px solid rgba(255,215,0,0.3)", padding: "12px 18px", borderRadius: "12px", color: "#ffd700", fontWeight: "bold", fontSize: "13px" },
  iconBtn: { background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.1)", padding: "10px", borderRadius: "12px", cursor: "pointer", position: "relative" },
  notifDot: { position: "absolute", top: "5px", right: "5px", width: "10px", height: "10px", background: "#ff4d88", borderRadius: "50%", border: "2px solid #020617" },
  notifDropdown: { position: "absolute", top: "50px", right: 0, width: "250px", background: "rgba(15,23,42,0.95)", backdropFilter: "blur(15px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "16px", padding: "15px", zIndex: 100, boxShadow: "0 10px 40px rgba(0,0,0,0.5)" },
  notifItem: { fontSize: "13px", color: "#e2e8f0", background: "rgba(0,0,0,0.3)", padding: "10px", borderRadius: "8px", marginBottom: "8px" },
  achievementOverlay: { position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.8)", zIndex: 999, ...flex, justifyContent: "center", backdropFilter: "blur(5px)" },
  achievementModal: { background: "linear-gradient(145deg, #1e293b, #0f172a)", border: "2px solid #ffd700", padding: "40px", borderRadius: "24px", textAlign: "center", boxShadow: "0 0 50px rgba(255,215,0,0.2)" },
  btn: { marginTop: "20px", background: "#3ea6ff", color: "#020617", border: "none", padding: "12px 30px", borderRadius: "12px", fontWeight: "bold", fontSize: "16px", cursor: "pointer" }
};
        
