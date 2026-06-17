"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, getDocs, collection, query, orderBy, limit, updateDoc, onSnapshot } from "firebase/firestore";
import { auth, db } from "./firebase";
import {
  Menu, Trophy, Flame, Bell, Search, Activity, Moon, Droplets,
  Timer, BrainCircuit, Calendar, Clipboard, Crown, BookOpen,
  Gamepad2, Radio, Gift, User, MessageSquare, Play, FileText,
  MessageCircleQuestion, Book, Users, Target, Bot, ChevronRight,
  Home, Dumbbell, Star, Shield, Zap, CheckCircle, ArrowRight
} from "lucide-react";

// --- REUSABLE COMPONENTS ---

const CircularProgress = ({ percentage, label, subLabel, color }) => {
  const radius = 35;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div style={styles.circularContainer}>
      <svg width="100" height="100" viewBox="0 0 100 100" style={{ transform: "rotate(-90deg)" }}>
        <circle cx="50" cy="50" r={radius} stroke="rgba(255,255,255,0.05)" strokeWidth="8" fill="none" />
        <circle 
          cx="50" cy="50" r={radius} 
          stroke={color} strokeWidth="8" fill="none" 
          strokeDasharray={circumference} 
          strokeDashoffset={strokeDashoffset} 
          strokeLinecap="round" 
          style={{ transition: "stroke-dashoffset 1s ease-out" }}
        />
      </svg>
      <div style={styles.circularContent}>
        <Activity color={color} size={18} style={{ marginBottom: 2 }} />
        <span style={{ fontSize: 22, fontWeight: "bold", color: "white" }}>{percentage}%</span>
        <span style={{ fontSize: 10, color: color, fontWeight: "bold", letterSpacing: 1 }}>{label}</span>
      </div>
      <p style={{ marginTop: 8, fontSize: 12, color: "#94a3b8" }}>{subLabel}</p>
    </div>
  );
};

const Sparkline = ({ color }) => (
  <svg width="100%" height="24" viewBox="0 0 100 24" preserveAspectRatio="none" style={{ marginTop: "auto" }}>
    <polyline 
      points="0,20 15,15 30,18 45,8 60,12 80,4 100,8" 
      fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
    />
  </svg>
);

const ALL_FEATURES = [
  { id: 'diet', title: 'Diet Planner', icon: <Droplets size={24}/>, color: '#39ff14', link: '/diet' },
  { id: 'progress', title: 'Progress', icon: <Activity size={24}/>, color: '#3ea6ff', link: '/progress' },
  { id: 'transform', title: 'Transformation', icon: <Activity size={24}/>, color: '#3ea6ff', link: '/transformation' },
  { id: 'sleep', title: 'Sleep', icon: <Moon size={24}/>, color: '#9d4edd', link: '/sleep' },
  { id: 'water', title: 'Water Tracker', icon: <Droplets size={24}/>, color: '#3ea6ff', link: '/water-tracker' },
  { id: 'timer', title: 'Workout Timer', icon: <Timer size={24}/>, color: '#3ea6ff', link: '/workout-timer' },
  { id: 'quiz', title: 'Quiz', icon: <BrainCircuit size={24}/>, color: '#ff4d88', link: '/quiz' },
  { id: 'schedule', title: 'Workout Schedule', icon: <Calendar size={24}/>, color: '#ff4d88', link: '/schedule' },
  { id: 'notes', title: 'Notes', icon: <Clipboard size={24}/>, color: '#ffaa00', link: '/notes' },
  { id: 'leaderboard', title: 'Leaderboard', icon: <Crown size={24}/>, color: '#ffd700', link: '/leaderboard' },
  { id: 'courses', title: 'Courses', icon: <BookOpen size={24}/>, color: '#3ea6ff', link: '/courses' },
  { id: 'tournaments', title: 'Tournaments', icon: <Trophy size={24}/>, color: '#ffd700', link: '/tournaments' },
  { id: 'match', title: 'Match Room', icon: <Gamepad2 size={24}/>, color: '#9d4edd', link: '/match-room' },
  { id: 'live', title: 'Live Match', icon: <Radio size={24}/>, color: '#ff4d88', link: '/live-match' },
  { id: 'rewards', title: 'Rewards', icon: <Gift size={24}/>, color: '#ffd700', link: '/rewards' },
  { id: 'profile', title: 'Athlete Profile', icon: <User size={24}/>, color: '#3ea6ff', link: '/athlete-profile' },
  { id: 'chat', title: 'Team Chat', icon: <MessageSquare size={24}/>, color: '#39ff14', link: '/team-chat' },
  { id: 'training', title: 'All Training', icon: <Play size={24}/>, color: '#9d4edd', link: '/training' },
  { id: 'tests', title: 'All Tests', icon: <FileText size={24}/>, color: '#ffaa00', link: '/tests' },
  { id: 'doubts', title: 'My Doubts', icon: <MessageCircleQuestion size={24}/>, color: '#3ea6ff', link: '/doubts' },
  { id: 'books', title: 'Sports Books', icon: <Book size={24}/>, color: '#ff7b00', link: '/books' },
  { id: 'community', title: 'Community', icon: <Users size={24}/>, color: '#39ff14', link: '/community' },
  { id: 'challenges', title: 'Challenges', icon: <Target size={24}/>, color: '#ff4d88', link: '/challenges' },
  { id: 'ai', title: 'AI Coach', icon: <Bot size={24}/>, color: '#00e5ff', link: '/ai-coach' }
];

export default function PremiumDashboard() {
  const [profileData, setProfileData] = useState(null);
  const [dailyChallenge, setDailyChallenge] = useState(null);
  const [todayWorkout, setTodayWorkout] = useState(null);
  const [leaderboard, setLeaderboard] = useState([]);
  const [upcomingEvent, setUpcomingEvent] = useState(null);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const [greeting, setGreeting] = useState("Good Evening");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning");
    else if (hour < 18) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");

    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        // Real-time Profile Listener
        onSnapshot(doc(db, "users", currentUser.uid), (docSnap) => {
          if (docSnap.exists()) setProfileData(docSnap.data());
        });

        // Fetch Daily Challenge
        const chalSnap = await getDocs(query(collection(db, "challenges"), limit(1)));
        if (!chalSnap.empty) setDailyChallenge({ id: chalSnap.docs[0].id, ...chalSnap.docs[0].data() });

        // Fetch Today's Workout
        const workSnap = await getDocs(query(collection(db, "workouts"), limit(1)));
        if (!workSnap.empty) setTodayWorkout({ id: workSnap.docs[0].id, ...workSnap.docs[0].data() });

        // Fetch Leaderboard (Top 3)
        const leadSnap = await getDocs(query(collection(db, "users"), orderBy("xp", "desc"), limit(3)));
        setLeaderboard(leadSnap.docs.map(d => ({ id: d.id, ...d.data() })));

        // Fetch Upcoming Event
        const eventSnap = await getDocs(query(collection(db, "events"), limit(1)));
        if (!eventSnap.empty) setUpcomingEvent({ id: eventSnap.docs[0].id, ...eventSnap.docs[0].data() });
      }
    });

    return () => unsubscribe();
  }, []);

  const handleWorkout = async () => {
    if (!auth.currentUser || !profileData) return;
    try {
      const newXP = (profileData.xp || 0) + 50;
      const newLevel = Math.floor(newXP / 1000) + 1;
      const newStreak = (profileData.streak || 0) + 1;
      await updateDoc(doc(db, "users", auth.currentUser.uid), {
        xp: newXP, level: newLevel, streak: newStreak
      });
      alert("Workout Session Logged! +50 XP");
    } catch (error) {
      console.error(error);
    }
  };

  const displayedFeatures = showAllFeatures ? ALL_FEATURES : ALL_FEATURES.slice(0, 12);

  return (
    <div style={styles.page}>
      
      {/* TOP NAVIGATION */}
      <div style={styles.topBar}>
        <div style={styles.flexCenter}>
          <Menu color="white" size={26} cursor="pointer" />
          <div style={styles.logoContainer}>
            <Zap size={24} color="#39ff14" fill="#39ff14" />
            <span style={styles.logoText}>SPORTS<br/>FIT ZONE</span>
          </div>
        </div>
        <div style={styles.topStats}>
          <div style={styles.statPill}><Trophy color="#ffd700" size={16} /><span style={{color:"#ffd700"}}>{profileData?.wins || 0}</span></div>
          <div style={styles.statPill}><Flame color="#ff7b00" size={16} /><span style={{color:"#ff7b00"}}>{profileData?.streak || 0}</span></div>
          <div style={styles.statPill}><span style={styles.xpIcon}>XP</span><span style={{color:"#39ff14"}}>{profileData?.xp || 0}</span></div>
          <div style={{ position: "relative", cursor: "pointer" }} onClick={() => setShowNotifications(!showNotifications)}>
            <Bell color="white" size={24} />
            <div style={styles.notificationDot}></div>
          </div>
        </div>
      </div>

      {/* SEARCH BAR */}
      <div style={styles.searchContainer}>
        <Search color="#94a3b8" size={20} />
        <input placeholder="Search workouts, plans, tournaments..." style={styles.searchInput} />
        <Activity color="#9d4edd" size={20} />
      </div>

      {/* NOTIFICATIONS DROPDOWN */}
      {showNotifications && (
        <div style={styles.notificationBox}>
          <h3 style={{ margin: "0 0 10px", color:"white", fontSize: 16 }}>Notifications</h3>
          <div style={styles.notifItem}>🔥 New Daily Challenge available!</div>
          <div style={styles.notifItem}>🏆 Leaderboard updated</div>
        </div>
      )}

      {/* MAIN HERO GRID */}
      <div style={styles.heroGrid}>
        
        {/* LEFT: GREETING & STATUS */}
        <div style={{...styles.glassCard, flex: 2, display: "flex", justifyContent: "space-between", overflow: "hidden", position: "relative", background: "linear-gradient(135deg, rgba(15,23,42,0.9), rgba(15,23,42,0.4))" }}>
          <div style={{ zIndex: 2, padding: "20px" }}>
            <p style={{ color: "#94a3b8", margin: 0, fontSize: 14 }}>{greeting},</p>
            <h1 style={{ color: "white", fontSize: 42, margin: "5px 0", textTransform: "uppercase", fontWeight: 900, letterSpacing: 1 }}>{profileData?.name || "ATHLETE"}</h1>
            <div style={{ display: "flex", alignItems: "center", gap: 5, background: "rgba(57,255,20,0.1)", padding: "4px 10px", borderRadius: 20, width: "max-content" }}>
              <span style={{ color: "white", fontSize: 12, fontWeight: "bold" }}>Elite Athlete</span>
              <CheckCircle size={14} color="#39ff14" />
            </div>
            <p style={{ color: "white", fontSize: 14, marginTop: 25, lineHeight: 1.5 }}>
              Discipline today,<br/><span style={{ color: "#39ff14", fontWeight: "bold" }}>Domination</span> tomorrow.
            </p>
            <div style={{ display: "flex", gap: 15, marginTop: 20 }}>
              <div style={styles.miniStat}><Flame color="#ff7b00" size={16}/><span>{profileData?.streak || 0}<br/><small>Day Streak</small></span></div>
              <div style={styles.miniStat}><Activity color="#39ff14" size={16}/><span>{profileData?.readiness || 0}%<br/><small>Readiness</small></span></div>
              <div style={styles.miniStat}><Droplets color="#3ea6ff" size={16}/><span>{profileData?.recovery || 0}%<br/><small>Recovery</small></span></div>
            </div>
          </div>
          <div style={{ zIndex: 2, padding: "20px" }}>
            <CircularProgress percentage={profileData?.readiness || 92} label="READINESS" subLabel="OPTIMAL. You are in the zone!" color="#39ff14" />
          </div>
          {/* Faded Background Image Overlay Simulation */}
          <div style={styles.heroImageOverlay}></div>
        </div>

        {/* RIGHT: RANK CARD */}
        <div style={{...styles.glassCard, flex: 1, background: "linear-gradient(180deg, rgba(30,15,50,0.8), rgba(15,23,42,0.9))", padding: "25px" }}>
          <div style={{ display: "flex", gap: 15, alignItems: "center", marginBottom: 20 }}>
            <div style={styles.rankShield}>
              <Shield size={40} color="#9d4edd" />
              <Star size={16} color="white" style={{ position: "absolute" }} />
            </div>
            <div>
              <p style={{ color: "#9d4edd", fontSize: 12, margin: 0, fontWeight: "bold", letterSpacing: 1 }}>YOUR RANK</p>
              <h2 style={{ color: "white", fontSize: 20, margin: "2px 0" }}>LEVEL {profileData?.level || 1} ATHLETE</h2>
              <p style={{ color: "#94a3b8", fontSize: 12, margin: 0 }}>Top 15% Among All Athletes</p>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "auto" }}>
            <div style={styles.rankCol}><span style={styles.rankLbl}>🌐 GLOBAL</span><span style={styles.rankVal}>#{profileData?.globalRank || 24}</span><span style={styles.rankSub}>Top 15%</span></div>
            <div style={styles.rankCol}><span style={styles.rankLbl}>🇮🇳 INDIA</span><span style={styles.rankVal}>#{profileData?.indiaRank || 5}</span><span style={styles.rankSub}>Top 5%</span></div>
            <div style={styles.rankCol}><span style={styles.rankLbl}>🏛️ ACADEMY</span><span style={styles.rankVal}>#{profileData?.academyRank || 1}</span><span style={{...styles.rankSub, color:"#ffd700"}}>Top 1%</span></div>
          </div>
        </div>
      </div>

      {/* SECONDARY GRID */}
      <div style={styles.secondaryGrid}>
        
        {/* DAILY CHALLENGE */}
        <div style={{...styles.glassCard, flex: 1, position: "relative", overflow: "hidden" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <p style={{ color: "#39ff14", fontSize: 12, fontWeight: "bold", margin: "0 0 5px" }}>DAILY CHALLENGE</p>
              <h2 style={{ color: "white", fontSize: 24, margin: 0 }}>{dailyChallenge?.title || "100 Pushups"} 💪</h2>
            </div>
            <Target color="#39ff14" size={40} opacity={0.8}/>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 25, marginBottom: 15 }}>
            <div style={{ flex: 1, background: "rgba(255,255,255,0.1)", height: 6, borderRadius: 3 }}>
              <div style={{ width: `${dailyChallenge?.progress || 80}%`, height: "100%", background: "#39ff14", borderRadius: 3 }}></div>
            </div>
            <span style={{ color: "white", fontSize: 14, fontWeight: "bold" }}>{dailyChallenge?.progress || 80}%</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ color: "#39ff14", fontSize: 14, fontWeight: "bold" }}>+{dailyChallenge?.xpReward || 50} XP <span style={{color:"#94a3b8"}}>Reward</span></span>
            <button style={styles.joinBtn}>Join Challenge</button>
          </div>
        </div>

        {/* TODAY'S PLAN */}
        <div style={{...styles.glassCard, flex: 2, background: "linear-gradient(90deg, rgba(15,23,42,0.9) 40%, rgba(0,0,0,0))", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <p style={{ color: "#3ea6ff", fontSize: 12, fontWeight: "bold", margin: "0 0 5px" }}>TODAY'S PLAN</p>
            <h2 style={{ color: "white", fontSize: 26, margin: 0 }}>{todayWorkout?.title || "Full Body Strength"}</h2>
            <div style={{ display: "flex", gap: 15, marginTop: 10 }}>
              <span style={styles.workoutMeta}><Timer size={14}/> {todayWorkout?.duration || "45 min"}</span>
              <span style={styles.workoutMeta}><Flame size={14}/> {todayWorkout?.calories || "420 kcal"}</span>
              <span style={styles.workoutMeta}><Activity size={14}/> {todayWorkout?.difficulty || "Advanced"}</span>
            </div>
          </div>
          <button onClick={handleWorkout} style={{...styles.joinBtn, background: "#39ff14", color: "#020617", width: "max-content", marginTop: 20, display: "flex", alignItems: "center", gap: 5 }}>
            Resume Workout <Play fill="#020617" size={14}/>
          </button>
        </div>

      </div>

      {/* HEALTH METRICS GRID */}
      <div style={styles.metricsGrid}>
        <MetricCard title="XP TODAY" value={profileData?.xpToday || 120} sub="+12%" color="#39ff14" icon={<span style={styles.xpIconMini}>XP</span>} />
        <MetricCard title="CALORIES" value={(profileData?.calories || 2450).toLocaleString()} sub="Goal: 2,800" color="#ff7b00" icon={<Flame size={20} color="#ff7b00"/>} />
        <MetricCard title="RECOVERY" value={`${profileData?.recovery || 85}%`} sub="Good" color="#39ff14" icon={<Activity size={20} color="#39ff14"/>} />
        <MetricCard title="SLEEP SCORE" value={profileData?.sleepScore || 78} sub="Good" color="#9d4edd" icon={<Moon size={20} color="#9d4edd"/>} />
        <MetricCard title="WATER INTAKE" value={`${profileData?.water || 2.6} L`} sub="Goal: 3.0 L" color="#3ea6ff" icon={<Droplets size={20} color="#3ea6ff"/>} />
        <MetricCard title="STREAK" value={profileData?.streak || 7} sub="Days" color="#ffaa00" icon={<Zap size={20} color="#ffaa00"/>} />
      </div>

      {/* BOTTOM WIDGETS GRID */}
      <div style={styles.widgetsGrid}>
        
        {/* AI COACH INSIGHT */}
        <div style={{...styles.glassCard, flex: 1, border: "1px solid rgba(62,166,255,0.3)"}}>
          <h3 style={{color: "#3ea6ff", fontSize: 14, margin: "0 0 15px", textTransform: "uppercase"}}>AI Coach Insight</h3>
          <div style={{display: "flex", gap: 15, alignItems: "center", marginBottom: 20}}>
            <Bot size={50} color="#3ea6ff" style={{opacity: 0.8}} />
            <p style={{color: "white", fontSize: 14, lineHeight: 1.5, margin: 0}}>
              Your recovery is excellent and energy is high.<br/><br/>
              <span style={{color:"#39ff14"}}>Perfect day to push your limits! 🚀</span>
            </p>
          </div>
          <button style={{...styles.outlineBtn, width: "100%", justifyContent: "space-between"}}>
            View Full Report <ChevronRight size={16}/>
          </button>
        </div>

        {/* LEADERBOARD TOP 3 */}
        <div style={{...styles.glassCard, flex: 1.5}}>
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20}}>
            <h3 style={{color: "#ffd700", fontSize: 14, margin: 0, textTransform: "uppercase"}}>Leaderboard Top 3</h3>
            <Link href="/leaderboard" style={{color: "#94a3b8", fontSize: 12, textDecoration: "none", display: "flex", alignItems: "center"}}>View All <ChevronRight size={14}/></Link>
          </div>
          <div style={{display: "flex", justifyContent: "space-around", alignItems: "flex-end", height: 120}}>
            {[1, 0, 2].map((i) => {
              const user = leaderboard[i];
              if(!user) return null;
              const isFirst = i === 0;
              const rank = i + 1;
              const badgeColor = rank === 1 ? "#ffd700" : rank === 2 ? "#c0c0c0" : "#cd7f32";
              return (
                <div key={user.id} style={{display: "flex", flexDirection: "column", alignItems: "center", position: "relative"}}>
                  <div style={{...styles.lbBadge, background: badgeColor}}>{rank}</div>
                  <div style={{width: isFirst ? 70 : 55, height: isFirst ? 70 : 55, borderRadius: "50%", border: `3px solid ${badgeColor}`, background: "#1e293b", overflow: "hidden", marginBottom: 10}}>
                     {user.profileImage ? <img src={user.profileImage} width="100%" height="100%" style={{objectFit:"cover"}}/> : <User size={isFirst?40:30} color={badgeColor} style={{margin:"10px auto"}}/>}
                  </div>
                  <span style={{color: "white", fontSize: isFirst ? 16 : 14, fontWeight: "bold"}}>{user.name || "Athlete"}</span>
                  <span style={{color: "#39ff14", fontSize: 12}}>{user.xp || 0} XP</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* UPCOMING EVENT */}
        <div style={{...styles.glassCard, flex: 1}}>
          <h3 style={{color: "#9d4edd", fontSize: 14, margin: "0 0 15px", textTransform: "uppercase"}}>Upcoming Event</h3>
          <div style={{textAlign: "center", marginBottom: 15}}>
            <Trophy size={50} color="#9d4edd" style={{filter: "drop-shadow(0 0 
