"use client";

import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { Moon, Sun, Zap, Flame, Trophy, Clock, Activity, Target, ShieldCheck, Award } from "lucide-react";

const sportData = {
  Cricket: { goal: 8.5, tip: "Moderate recovery needed for agility, reflexes, and prolonged focus." },
  Football: { goal: 9, tip: "High recovery requirement due to extreme cardiovascular endurance and sprint workload." },
  Basketball: { goal: 9, tip: "High impact on joints requires deep recovery for maximum vertical and stamina." },
  Athletics: { goal: 9.5, tip: "Maximum muscle repair and CNS recovery needed for explosive power." },
  Gym: { goal: 8, tip: "Strength-focused recovery. Crucial for muscle hypertrophy and tissue repair." },
  Boxing: { goal: 9, tip: "High intensity workload requiring deep sleep for reflexes and muscle recovery." },
  Tennis: { goal: 8.5, tip: "Agility and court sprint recovery requires consistent solid rest." },
  Other: { goal: 8, tip: "Standard baseline athlete recovery." }
};

export default function AdvancedSleepTracker() {
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Firestore Data States
  const [sport, setSport] = useState("Gym");
  const [sleepGoal, setSleepGoal] = useState(8);
  const [targetWake, setTargetWake] = useState("06:00");
  const [bedTime, setBedTime] = useState("22:00");
  const [wakeTime, setWakeTime] = useState("06:00");
  
  const [sleepHours, setSleepHours] = useState(0);
  const [sleepScore, setSleepScore] = useState(0);
  const [sleepXP, setSleepXP] = useState(0);
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [sleepStreak, setSleepStreak] = useState(0);
  const [recoveryStatus, setRecoveryStatus] = useState("😴 No Data");
  const [sleepHistory, setSleepHistory] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [insight, setInsight] = useState("Log your sleep to get insights.");

  useEffect(() => {
    const unsubAuth = onAuthStateChanged(auth, (user) => {
      if (user) setUserId(user.uid);
      else { setUserId(null); setLoading(false); }
    });
    return () => unsubAuth();
  }, []);

  useEffect(() => {
    if (!userId) return;
    const unsubDoc = onSnapshot(doc(db, "users", userId), (docSnap) => {
      if (docSnap.exists()) {
        const d = docSnap.data();
        if (d.sport) setSport(d.sport);
        if (d.sleepGoal) setSleepGoal(d.sleepGoal);
        if (d.targetWake) setTargetWake(d.targetWake);
        if (d.bedTime) setBedTime(d.bedTime);
        if (d.wakeTime) setWakeTime(d.wakeTime);
        if (d.sleepHours !== undefined) setSleepHours(d.sleepHours);
        if (d.sleepScore !== undefined) setSleepScore(d.sleepScore);
        if (d.sleepXP !== undefined) setSleepXP(d.sleepXP);
        if (d.xp !== undefined) setXp(d.xp);
        if (d.level !== undefined) setLevel(d.level);
        if (d.sleepStreak !== undefined) setSleepStreak(d.sleepStreak);
        if (d.recoveryStatus) setRecoveryStatus(d.recoveryStatus);
        if (d.sleepHistory) setSleepHistory(d.sleepHistory);
        if (d.achievements) setAchievements(d.achievements);
      }
      setLoading(false);
    });
    return () => unsubDoc();
  }, [userId]);

  const handleSportChange = (e) => {
    const s = e.target.value;
    setSport(s);
    setSleepGoal(sportData[s]?.goal || 8);
  };

  const calculateInsight = (score, hours, goal) => {
    if (score >= 95) return "Elite recovery! You're primed for peak performance today.";
    if (score >= 80) return "Great consistency! Your body is adapting well.";
    if (hours < goal - 1) return `Warning: You slept ${parseFloat((goal - hours).toFixed(1))}h less than required.`;
    return "Try matching your target wake time for a better score tomorrow.";
  };

  const getStatus = (score) => {
    if (score >= 95) return "🏆 Elite Recovery";
    if (score >= 80) return "🔥 Great Recovery";
    if (score >= 60) return "⚡ Average Recovery";
    return "😴 Poor Recovery";
  };

  const handleLogSleep = async () => {
    if (!userId) return alert("Please login!");
    setSaving(true);

    // 1. Hours Math
    let [bH, bM] = bedTime.split(':').map(Number);
    let [wH, wM] = wakeTime.split(':').map(Number);
    let bedTot = bH + bM / 60;
    let wakeTot = wH + wM / 60;
    if (wakeTot <= bedTot) wakeTot += 24;
    const hours = parseFloat((wakeTot - bedTot).toFixed(1));

    // 2. Score Math (60% Goal, 20% Wake Accuracy, 20% Streak)
    const goalDiff = Math.abs(hours - sleepGoal);
    const goalScore = Math.max(0, 60 - (goalDiff * 15)); // 60 max
    
    let [tH, tM] = targetWake.split(':').map(Number);
    let targetTot = tH + tM / 60;
    let actualWake = wH + wM / 60;
    const wakeDiff = Math.abs(actualWake - targetTot);
    const wakeScore = Math.max(0, 20 - (wakeDiff * 10)); // 20 max
    
    const streakScore = Math.min(20, sleepStreak * 2); // 20 max
    const finalScore = Math.min(100, Math.round(goalScore + wakeScore + streakScore));

    // 3. Status, XP & Level
    const status = getStatus(finalScore);
    const msg = calculateInsight(finalScore, hours, sleepGoal);
    const earnedXP = finalScore >= 90 ? 20 : finalScore >= 80 ? 15 : finalScore >= 70 ? 10 : 5;
    
    const newSleepXP = sleepXP + earnedXP;
    const newMainXP = xp + earnedXP;
    const newLevel = Math.floor(newMainXP / 100) + 1;
    const newStreak = finalScore >= 80 ? sleepStreak + 1 : 0;

    // 4. Achievements
    let newBadges = [...achievements];
    const addBadge = (b) => { if (!newBadges.includes(b)) newBadges.push(b); };
    if (finalScore === 100) addBadge("🏆 Perfect Sleep");
    if (newStreak >= 7) addBadge("🔥 Recovery Master");
    if (newStreak >= 14) addBadge("⚡ Consistent Athlete");
    if (newStreak >= 30) addBadge("🌙 Sleep Champion");

    // 5. History update
    const today = new Date().toLocaleDateString('en-GB');
    const newRecord = { date: today, hours, score: finalScore, sport, goal: sleepGoal, xpEarned: earnedXP, status };
    const newHistory = [newRecord, ...sleepHistory.filter(h => h.date !== today)].slice(0, 4);

    // Update States
    setSleepHours(hours); setSleepScore(finalScore); setRecoveryStatus(status);
    setInsight(msg); setSleepXP(newSleepXP); setXp(newMainXP); setLevel(newLevel);
    setSleepStreak(newStreak); setAchievements(newBadges); setSleepHistory(newHistory);

    // Save
    try {
      await setDoc(doc(db, "users", userId), {
        sport, sleepGoal, targetWake, bedTime, wakeTime,
        sleepHours: hours, sleepScore: finalScore,
        sleepXP: newSleepXP, xp: newMainXP, level: newLevel,
        sleepStreak: newStreak, recoveryStatus: status,
        sleepHistory: newHistory, achievements: newBadges
      }, { merge: true });
    } catch (err) { console.error(err); }
    
    setSaving(false);
  };

  if (loading) return <div style={s.center}><h2>Loading System...</h2></div>;

  const progWidth = Math.min((sleepHours / sleepGoal) * 100, 100) || 0;

  return (
    <div style={s.page}>
      
      {/* HEADER */}
      <div style={s.header}>
        <div>
          <h1 style={s.title}>Recovery Hub</h1>
          <p style={s.sub}>Level {level} Athlete | {xp} Total XP</p>
        </div>
        <div style={s.flex}>
          <div style={s.badge}><Flame color="#ff4d88" size={18}/> {sleepStreak} Day Streak</div>
          <div style={s.badge}><Zap color="#ffd700" size={18}/> {sleepXP} Sleep XP</div>
        </div>
      </div>

      {/* DAILY DASHBOARD */}
      <div style={{ ...s.glass, ...s.dashGrid }}>
        <div style={s.dashItem}>
          <p style={s.lbl}>Today's Score</p>
          <h1 style={{ ...s.val, color: sleepScore >= 80 ? "#39ff14" : sleepScore >= 60 ? "#ffd700" : "#ff4d88" }}>
            {sleepScore} <span style={{fontSize: "18px", color:"#94a3b8"}}>/100</span>
          </h1>
        </div>
        <div style={s.dashItem}>
          <p style={s.lbl}>Status</p>
          <h2 style={{color: "white", marginTop:"10px"}}>{recoveryStatus}</h2>
        </div>
        <div style={{ ...s.dashItem, gridColumn: "1 / -1", background: "rgba(62, 166, 255, 0.1)", border: "1px solid rgba(62,166,255,0.3)" }}>
          <p style={{ color: "#3ea6ff", fontSize: "15px", display: "flex", alignItems: "center", gap: "8px" }}>
            <Target size={18}/> {insight}
          </p>
        </div>
      </div>

      <div style={s.grid}>
        {/* SPORT & GOAL */}
        <div style={s.glass}>
          <h2 style={s.cardTitle}><Activity color="#3ea6ff" size={22}/> Protocol</h2>
          <label style={s.lbl}>Athlete Specialization</label>
          <select value={sport} onChange={handleSportChange} style={s.inp}>
            {Object.keys(sportData).map(sp => <option key={sp} value={sp}>{sp}</option>)}
          </select>

          <div style={s.recoBox}>
            <p style={{ color: "#39ff14", fontWeight: "bold" }}>🎯 Recommended: {sportData[sport]?.goal} hrs</p>
            <p style={{ color: "#aaa", fontSize: "13px", marginTop: "5px" }}>{sportData[sport]?.tip}</p>
          </div>

          <label style={s.lbl}>Manual Target Goal (Hrs)</label>
          <input type="number" step="0.5" value={sleepGoal} onChange={(e) => setSleepGoal(Number(e.target.value))} style={s.inp}/>
        </div>

        {/* TIME INPUTS */}
        <div style={s.glass}>
          <h2 style={s.cardTitle}><Clock color="#3ea6ff" size={22}/> Schedule</h2>
          
          <label style={s.lbl}><Target size={16}/> Target Wake Time (Accuracy Bonus)</label>
          <input type="time" value={targetWake} onChange={(e) => setTargetWake(e.target.value)} style={s.inp}/>

          <div style={s.flexSB}>
            <div style={{ width: "48%" }}>
              <label style={s.lbl}><Moon size={16}/> Bed</label>
              <input type="time" value={bedTime} onChange={(e) => setBedTime(e.target.value)} style={s.inp}/>
            </div>
            <div style={{ width: "48%" }}>
              <label style={s.lbl}><Sun size={16}/> Wake</label>
              <input type="time" value={wakeTime} onChange={(e) => setWakeTime(e.target.value)} style={s.inp}/>
            </div>
          </div>

          <button style={s.btn} onClick={handleLogSleep} disabled={saving}>
            {saving ? "Syncing..." : "Lock In Recovery"}
          </button>
        </div>
      </div>

      {/* PROGRESS BAR */}
      <div style={{ ...s.glass, marginBottom: "25px" }}>
        <div style={s.flexSB}>
          <h3 style={{ color: "#e2e8f0" }}>Recovery Progress</h3>
          <h3 style={{ color: "#3ea6ff" }}>{sleepHours} / {sleepGoal} hrs</h3>
        </div>
        <div style={s.barBg}>
          <div style={{ ...s.barFill, width: `${progWidth}%`, background: progWidth >= 100 ? "#39ff14" : "#3ea6ff" }}/>
        </div>
      </div>

      {/* ACHIEVEMENTS */}
      {achievements.length > 0 && (
        <>
          <h2 style={s.cardTitle}><Award color="#ffd700" size={22}/> Achievements</h2>
          <div style={s.achieveGrid}>
            {achievements.map((ach, i) => (
              <div key={i} style={s.achieveCard}>{ach}</div>
            ))}
          </div>
        </>
      )}

      {/* HISTORY */}
      <h2 style={{ ...s.cardTitle, marginTop: "30px" }}><ShieldCheck color="#39ff14" size={22}/> Recent Logs (4 Days)</h2>
      <div style={s.histGrid}>
        {sleepHistory.length === 0 ? <p style={{ color: "#aaa" }}>No data found.</p> : 
          sleepHistory.map((h, i) => (
            <div key={i} style={s.histCard}>
              <div style={s.flexSB}>
                <span style={{ color: "#94a3b8", fontSize: "13px" }}>{h.date}</span>
                <span style={{ color: "#ffd700", fontSize: "13px", fontWeight: "bold" }}>+{h.xpEarned} XP</span>
              </div>
              <h2 style={{ color: "white", margin: "10px 0" }}>{h.hours} hrs</h2>
              <div style={s.flexSB}>
                <span style={{ color: h.score >= 80 ? "#39ff14" : "#ff4d88", fontWeight: "bold" }}>Score: {h.score}</span>
                <span style={{ fontSize: "12px", background: "rgba(255,255,255,0.1)", padding: "3px 8px", borderRadius: "10px" }}>{h.sport}</span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

// ULTRA-MINIMIZED CSS (Zero Truncation Guarantee)
const fBox = { display: "flex", alignItems: "center" };
const fSB = { display: "flex", justifyContent: "space-between", alignItems: "center" };
const gl = { background: "rgba(15, 23, 42, 0.6)", backdropFilter: "blur(12px)", padding: "22px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.08)", marginBottom: "25px", boxShadow: "0 8px 32px rgba(0,0,0,0.3)" };

const s = {
  page: { minHeight: "100vh", background: "#020617", color: "white", padding: "20px", fontFamily: "sans-serif", maxWidth: "850px", margin: "0 auto" },
  center: { ...fBox, justifyContent: "center", minHeight: "100vh", background: "#020617", color: "white" },
  header: { ...fSB, flexWrap: "wrap", gap: "15px", marginBottom: "30px", marginTop: "10px" },
  title: { fontSize: "36px", fontWeight: "900", margin: 0, background: "linear-gradient(90deg, #3ea6ff, #39ff14)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
  sub: { color: "#94a3b8", margin: "5px 0 0 0", fontWeight: "bold", fontSize: "16px" },
  flex: { ...fBox, gap: "10px" },
  flexSB: fSB,
  badge: { ...fBox, gap: "6px", background: "rgba(15,23,42,0.8)", padding: "10px 16px", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.1)", fontWeight: "bold", fontSize: "14px" },
  glass: gl,
  dashGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "15px", padding: "20px" },
  dashItem: { background: "rgba(0,0,0,0.3)", padding: "18px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.05)", textAlign: "center" },
  lbl: { ...fBox, gap: "8px", color: "#94a3b8", fontSize: "13px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" },
  val: { fontSize: "48px", margin: "10px 0 0 0" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "25px" },
  cardTitle: { ...fBox, gap: "10px", fontSize: "20px", marginBottom: "22px", color: "white", fontWeight: "bold" },
  inp: { width: "100%", background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.1)", color: "white", padding: "14px", borderRadius: "14px", marginBottom: "20px", outline: "none", fontSize: "16px", transition: "border 0.3s" },
  recoBox: { background: "rgba(57, 255, 20, 0.05)", borderLeft: "4px solid #39ff14", padding: "15px", borderRadius: "0 12px 12px 0", marginBottom: "20px" },
  btn: { width: "100%", background: "linear-gradient(90deg, #3ea6ff, #2563eb)", color: "white", padding: "16px", borderRadius: "14px", border: "none", fontWeight: "bold", fontSize: "16px", cursor: "pointer", boxShadow: "0 4px 15px rgba(62,166,255,0.3)" },
  barBg: { width: "100%", height: "14px", background: "rgba(0,0,0,0.5)", borderRadius: "20px", marginTop: "15px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.05)" },
  barFill: { height: "100%", transition: "width 0.6s cubic-bezier(0.4, 0, 0.2, 1)", borderRadius: "20px" },
  achieveGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "15px", marginBottom: "30px" },
  achieveCard: { background: "linear-gradient(135deg, rgba(255,215,0,0.1), rgba(255,215,0,0.02))", border: "1px solid rgba(255,215,0,0.3)", padding: "15px", borderRadius: "16px", textAlign: "center", color: "#ffd700", fontWeight: "bold", fontSize: "14px" },
  histGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "15px" },
  histCard: { background: "rgba(0,0,0,0.4)", padding: "18px", borderRadius: "18px", border: "1px solid rgba(255,255,255,0.05)" }
};
            
