"use client";

import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "./firebase"; // Ensure correct firebase path
import Link from "next/link";
import {
  Menu, Trophy, Flame, Bell, Search, Settings2, Shield, Star, Target,
  Activity, Moon, Droplets, Droplet, Timer, Brain, CalendarDays,
  ClipboardList, Crown, GraduationCap, Gamepad2, Video, Gift, User,
  MessageSquare, PlaySquare, FileText, HelpCircle, Book, Users, Bot,
  Calendar, Home, Dumbbell, Play, ChevronRight
} from "lucide-react";

// --- REUSABLE UI COMPONENTS ---

// Circular Progress Bar
const CircularProgress = ({ percentage, color, title, subtitle, label }) => {
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ position: "relative", width: 100, height: 100 }}>
        <svg width="100" height="100" viewBox="0 0 100 100" style={{ transform: "rotate(-90deg)" }}>
          <circle cx="50" cy="50" r={radius} stroke="rgba(255,255,255,0.05)" strokeWidth="6" fill="none" />
          <circle cx="50" cy="50" r={radius} stroke={color} strokeWidth="6" fill="none"
            strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} strokeLinecap="round" />
        </svg>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <Activity size={16} color={color} style={{ marginBottom: 2 }} />
          <span style={{ color: "white", fontSize: 24, fontWeight: "bold", lineHeight: "1" }}>{percentage}%</span>
          <span style={{ color: color, fontSize: 9, fontWeight: "bold", letterSpacing: 1, marginTop: 2 }}>{title}</span>
        </div>
      </div>
      <p style={{ color: color, fontSize: 11, fontWeight: "bold", margin: "8px 0 2px" }}>{label}</p>
      <p style={{ color: "#94a3b8", fontSize: 10, margin: 0 }}>{subtitle}</p>
    </div>
  );
};

// Sparkline Graph for Stats
const Sparkline = ({ color }) => (
  <svg width="100%" height="25" viewBox="0 0 100 25" preserveAspectRatio="none" style={{ marginTop: "auto" }}>
    <polyline points="0,20 15,15 30,18 45,8 60,12 80,4 100,8" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Stat Card
const StatCard = ({ icon, title, value, subText, color, isPositive }) => (
  <div style={styles.statCard}>
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
      <div style={{ background: `${color}15`, padding: 6, borderRadius: 8, display: "flex", justifyContent: "center", alignItems: "center" }}>
        {icon}
      </div>
      <span style={{ color: "#94a3b8", fontSize: 11, fontWeight: "bold", letterSpacing: 0.5, textTransform: "uppercase" }}>{title}</span>
    </div>
    <h2 style={{ color: "white", fontSize: 24, margin: "0 0 4px", fontWeight: "bold" }}>{value}</h2>
    <p style={{ color: isPositive ? "#39ff14" : "#94a3b8", fontSize: 11, margin: 0, fontWeight: "500" }}>{subText}</p>
    <Sparkline color={color} />
  </div>
);

// All Features Data
const FEATURES_DATA = [
  { id: 'diet', title: 'Diet Planner', icon: <Droplets size={26}/>, color: '#39ff14', link: '/diet' },
  { id: 'progress', title: 'Progress', icon: <Activity size={26}/>, color: '#3ea6ff', link: '/progress' },
  { id: 'transform', title: 'Transformation', icon: <Activity size={26}/>, color: '#3ea6ff', link: '/transformation' },
  { id: 'sleep', title: 'Sleep', icon: <Moon size={26}/>, color: '#9d4edd', link: '/sleep' },
  { id: 'water', title: 'Water Tracker', icon: <Droplet size={26}/>, color: '#3ea6ff', link: '/water-tracker' },
  { id: 'timer', title: 'Workout Timer', icon: <Timer size={26}/>, color: '#3ea6ff', link: '/workout-timer' },
  { id: 'quiz', title: 'Quiz', icon: <Brain size={26}/>, color: '#ff4d88', link: '/quiz' },
  { id: 'schedule', title: 'Workout Schedule', icon: <CalendarDays size={26}/>, color: '#ff4d88', link: '/schedule' },
  { id: 'notes', title: 'Notes', icon: <ClipboardList size={26}/>, color: '#ffaa00', link: '/notes' },
  { id: 'leaderboard', title: 'Leaderboard', icon: <Crown size={26}/>, color: '#ffd700', link: '/leaderboard' },
  { id: 'courses', title: 'Courses', icon: <GraduationCap size={26}/>, color: '#3ea6ff', link: '/courses' },
  { id: 'tournaments', title: 'Tournaments', icon: <Trophy size={26}/>, color: '#ffd700', link: '/tournaments' },
  { id: 'match', title: 'Match Room', icon: <Gamepad2 size={26}/>, color: '#9d4edd', link: '/match-room' },
  { id: 'live', title: 'Live Match', icon: <Video size={26}/>, color: '#ff4d88', link: '/live-match' },
  { id: 'rewards', title: 'Rewards', icon: <Gift size={26}/>, color: '#ffd700', link: '/rewards' },
  { id: 'profile', title: 'Athlete Profile', icon: <User size={26}/>, color: '#3ea6ff', link: '/athlete-profile' },
  { id: 'chat', title: 'Team Chat', icon: <MessageSquare size={26}/>, color: '#39ff14', link: '/team-chat' },
  { id: 'training', title: 'All Training', icon: <PlaySquare size={26}/>, color: '#9d4edd', link: '/training' },
  { id: 'tests', title: 'All Tests', icon: <FileText size={26}/>, color: '#ffaa00', link: '/tests' },
  { id: 'doubts', title: 'My Doubts', icon: <HelpCircle size={26}/>, color: '#3ea6ff', link: '/doubts' },
  { id: 'books', title: 'Sports Books', icon: <Book size={26}/>, color: '#ff7b00', link: '/books' },
  { id: 'community', title: 'Community', icon: <Users size={26}/>, color: '#39ff14', link: '/community' },
  { id: 'challenges', title: 'Challenges', icon: <Target size={26}/>, color: '#ff4d88', link: '/challenges' },
  { id: 'ai', title: 'AI Coach', icon: <Bot size={26}/>, color: '#00e5ff', link: '/ai-coach' }
];

export default function HomePage() {
  const [profileData, setProfileData] = useState(null);
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const [greeting, setGreeting] = useState("Good Evening");

  // Authentication & Data Fetching
  useEffect(() => {
    // Dynamic Greeting
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning");
    else if (hour < 18) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");

    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        try {
          const docRef = doc(db, "users", currentUser.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setProfileData(docSnap.data());
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    });
    return () => unsubscribe();
  }, []);

  // Update Firebase XP
  const handleWorkout = async () => {
    try {
      if (!auth.currentUser || !profileData) return;
      const newXP = (profileData.xp || 0) + 50;
      const newLevel = Math.floor(newXP / 1000) + 1;
      const newStreak = (profileData.streak || 0) + 1;
      
      await updateDoc(doc(db, "users", auth.currentUser.uid), {
        xp: newXP, level: newLevel, streak: newStreak
      });
      
      setProfileData({ ...profileData, xp: newXP, level: newLevel, streak: newStreak });
      alert("Workout Resumed! System logged +50 XP");
    } catch (error) {
      alert("Error updating: " + error.message);
    }
  };

  const displayedFeatures = showAllFeatures ? FEATURES_DATA : FEATURES_DATA.slice(0, 16); // Shown 16 initially like a grid

  return (
    <div style={styles.page}>
      
      {/* HEADER */}
      <header style={styles.header}>
        <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
          <Menu color="white" size={28} style={{ cursor: "pointer" }} />
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {/* Logo placeholder */}
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
              <span style={{ color: "white", fontSize: 16, fontWeight: 900, fontStyle: "italic", letterSpacing: 1 }}>SPORTS</span>
              <span style={{ color: "#39ff14", fontSize: 16, fontWeight: 900, fontStyle: "italic", letterSpacing: 1 }}>FIT ZONE</span>
            </div>
          </div>
        </div>

        <div style={styles.headerStats}>
          <div style={styles.statPill}><Trophy color="#ffd700" size={16} /><span style={{ color: "#ffd700" }}>{profileData?.wins || 12}</span></div>
          <div style={styles.statPill}><Flame color="#ff7b00" size={16} /><span style={{ color: "#ff7b00" }}>{profileData?.streak || 7}</span></div>
          <div style={styles.statPill}><span style={styles.xpIcon}>XP</span><span style={{ color: "#39ff14" }}>{profileData?.xp || 468}</span></div>
          <div style={{ position: "relative" }}>
            <Bell color="white" size={24} />
            <div style={styles.notificationDot}></div>
          </div>
        </div>
      </header>

      {/* SEARCH BAR */}
      <div style={styles.searchContainer}>
        <Search color="#94a3b8" size={20} />
        <input placeholder="Search workouts, plans, tournaments..." style={styles.searchInput} />
        <Settings2 color="#9d4edd" size={20} />
      </div>

      {/* HERO SECTION */}
      <div style={styles.heroGrid}>
        
        {/* Main Athlete Card */}
        <div style={styles.mainAthleteCard}>
          <div style={styles.athleteTextContent}>
            <p style={{ color: "#94a3b8", fontSize: 14, margin: 0 }}>{greeting},</p>
            <h1 style={{ color: "white", fontSize: 40, fontWeight: 900, margin: "2px 0 10px", letterSpacing: 1, textTransform: "uppercase" }}>
              {profileData?.name || "DINESH"}
            </h1>
            <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 20 }}>
              <span style={{ color: "white", fontSize: 13, fontWeight: "bold" }}>Elite Athlete</span>
              <Activity size={14} color="#39ff14" />
            </div>
            
            <p style={{ color: "white", fontSize: 15, lineHeight: 1.4, margin: 0 }}>
              Discipline today,<br/>
              <span style={{ color: "#39ff14", fontWeight: "bold" }}>Domination</span> tomorrow.
            </p>

            <div style={styles.heroBottomStats}>
              <div style={styles.heroStatItem}>
                <Flame color="#ff7b00" size={20}/>
                <div><span style={{ color: "white", fontWeight: "bold", fontSize: 14 }}>{profileData?.streak || 7}</span><br/><span style={{ color: "#94a3b8", fontSize: 10 }}>Day Streak</span></div>
              </div>
              <div style={styles.heroStatItem}>
                <Activity color="#39ff14" size={20}/>
                <div><span style={{ color: "white", fontWeight: "bold", fontSize: 14 }}>{profileData?.readiness || 92}%</span><br/><span style={{ color: "#94a3b8", fontSize: 10 }}>Readiness</span></div>
              </div>
              <div style={styles.heroStatItem}>
                <Droplets color="#3ea6ff" size={20}/>
                <div><span style={{ color: "white", fontWeight: "bold", fontSize: 14 }}>{profileData?.recovery || 85}%</span><br/><span style={{ color: "#94a3b8", fontSize: 10 }}>Recovery</span></div>
              </div>
            </div>
          </div>
          <div style={styles.readinessContainer}>
             <CircularProgress percentage={profileData?.readiness || 92} color="#39ff14" title="READINESS" label="OPTIMAL" subtitle="You are in the zone!" />
          </div>
        </div>

        {/* Rank Card */}
        <div style={styles.rankCard}>
          <div style={{ display: "flex", alignItems: "center", gap: 15, marginBottom: 20 }}>
            <div style={styles.shieldIconWrapper}>
              <Shield size={50} color="#9d4edd" />
              <Star size={20} color="white" style={{ position: "absolute", top: 15, left: 15 }} />
            </div>
            <div>
              <p style={{ color: "#9d4edd", fontSize: 11, fontWeight: "bold", margin: "0 0 2px", letterSpacing: 1 }}>YOUR RANK</p>
              <h2 style={{ color: "white", fontSize: 18, fontWeight: "bold", margin: "0 0 2px" }}>LEVEL {profileData?.level || 1} ATHLETE</h2>
              <p style={{ color: "#94a3b8", fontSize: 11, margin: 0 }}>Top 15% Among All Athletes</p>
            </div>
          </div>
          
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "auto" }}>
            <div style={styles.rankItem}>
              <span style={styles.rankLabel}>🌐 GLOBAL RANK</span>
              <span style={styles.rankValue}>#{profileData?.globalRank || 24}</span>
              <span style={styles.rankSub}>Top 15%</span>
            </div>
            <div style={styles.rankItem}>
              <span style={styles.rankLabel}>🇮🇳 INDIA RANK</span>
              <span style={styles.rankValue}>#{profileData?.indiaRank || 5}</span>
              <span style={styles.rankSub}>Top 5%</span>
            </div>
            <div style={styles.rankItem}>
              <span style={styles.rankLabel}>🛡️ ACADEMY RANK</span>
              <span style={styles.rankValue}>#{profileData?.academyRank || 1}</span>
              <span style={{...styles.rankSub, color: "#ffd700"}}>Top 1%</span>
            </div>
          </div>
        </div>
      </div>

      {/* MID SECTION: CHALLENGE & WORKOUT */}
      <div style={styles.midGrid}>
        
        {/* Daily Challenge */}
        <div style={styles.challengeCard}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <p style={{ color: "#39ff14", fontSize: 11, fontWeight: "bold", margin: "0 0 5px" }}>DAILY CHALLENGE</p>
              <h2 style={{ color: "white", fontSize: 22, fontWeight: "bold", margin: 0 }}>100 Pushups 💪</h2>
            </div>
            <Target color="#39ff14" size={45} strokeWidth={1.5} style={{ opacity: 0.8 }} />
          </div>
          
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 25, marginBottom: 15 }}>
            <div style={{ flex: 1, background: "rgba(255,255,255,0.1)", height: 6, borderRadius: 3 }}>
              <div style={{ width: "80%", height: "100%", background: "#39ff14", borderRadius: 3 }}></div>
            </div>
            <span style={{ color: "white", fontSize: 13, fontWeight: "bold" }}>80%</span>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ color: "#39ff14", fontSize: 13, fontWeight: "bold" }}>+50 XP <span style={{ color: "white" }}>Reward</span></span>
            <button style={styles.outlineBtn}>Join Challenge</button>
          </div>
        </div>

        {/* Today's Plan */}
        <div style={styles.workoutCard}>
          <div style={{ zIndex: 2, position: "relative" }}>
            <p style={{ color: "#39ff14", fontSize: 11, fontWeight: "bold", margin: "0 0 5px" }}>TODAY'S PLAN</p>
            <h2 style={{ color: "white", fontSize: 26, fontWeight: "bold", margin: 0 }}>Full Body Strength</h2>
            <div style={{ display: "flex", gap: 15, marginTop: 10, marginBottom: 25 }}>
              <span style={styles.workoutMeta}><Timer size={14}/> 45 min</span>
              <span style={styles.workoutMeta}><Flame size={14}/> 420 kcal</span>
              <span style={styles.workoutMeta}><Activity size={14}/> Advanced</span>
            </div>
            <button onClick={handleWorkout} style={styles.solidBtn}>
              Resume Workout <Play fill="#020617" size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* 6 GRID STATS */}
      <div style={styles.statsGrid}>
        <StatCard icon={<span style={styles.xpIconMini}>XP</span>} title="XP TODAY" value={profileData?.xpToday || "120"} subText="+12%" color="#39ff14" isPositive={true}/>
        <StatCard icon={<Flame color="#ff7b00" size={18}/>} title="CALORIES" value={(profileData?.calories || 2450).toLocaleString()} subText="Goal: 2,800" color="#ff7b00"/>
        <StatCard icon={<Activity color="#39ff14" size={18}/>} title="RECOVERY" value={`${profileData?.recovery || 85}%`} subText="Good" color="#39ff14" isPositive={true}/>
        <StatCard icon={<Moon color="#9d4edd" size={18}/>} title="SLEEP SCORE" value={profileData?.sleepScore || 78} subText="Good" color="#9d4edd"/>
        <StatCard icon={<Droplet color="#3ea6ff" size={18}/>} title="WATER INTAKE" value={`${profileData?.water || 2.6} L`} subText="Goal: 3.0 L" color="#3ea6ff"/>
        <StatCard icon={<Flame color="#ffaa00" size={18}/>} title="STREAK" value={profileData?.streak || 7} subText="Days" color="#ffaa00"/>
      </div>

      {/* BOTTOM WIDGETS */}
      <div style={styles.widgetsGrid}>
        
        {/* AI Coach */}
        <div style={{...styles.widgetCard, border: "1px solid rgba(62,166,255,0.3)"}}>
          <h3 style={{ color: "#3ea6ff", fontSize: 12, fontWeight: "bold", margin: "0 0 15px", textTransform: "uppercase" }}>AI COACH INSIGHT</h3>
          <div style={{ display: "flex", gap: 15, alignItems: "center", marginBottom: 20 }}>
            <Brain size={60} color="#3ea6ff" strokeWidth={1.5} style={{ opacity: 0.9 }} />
            <p style={{ color: "#e2e8f0", fontSize: 13, lineHeight: 1.5, margin: 0 }}>
              Your recovery is excellent and energy is high.<br/><br/>
              Perfect day to push your limits! 🚀
            </p>
          </div>
          <button style={{...styles.outlineBtnBlue, width: "100%", justifyContent: "space-between"}}>
            View Full Report <ChevronRight size={16}/>
          </button>
        </div>

        {/* Leaderboard Top 3 */}
        <div style={{...styles.widgetCard, flex: 1.5}}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
            <h3 style={{ color: "#ffd700", fontSize: 12, fontWeight: "bold", margin: 0, textTransform: "uppercase" }}>LEADERBOARD TOP 3</h3>
            <Link href="/leaderboard" style={{ color: "#94a3b8", fontSize: 12, textDecoration: "none", display: "flex", alignItems: "center" }}>View All <ChevronRight size={14}/></Link>
          </div>
          
          <div style={{ display: "flex", justifyContent: "space-around", alignItems: "flex-end", height: 130 }}>
            {/* Rank 2 */}
            <div style={styles.podiumItem}>
              <div style={{...styles.lbBadge, background: "#c0c0c0"}}>2</div>
              <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80" style={{...styles.lbAvatar, width: 55, height: 55, borderColor: "#c0c0c0"}} alt="Rank 2"/>
              <span style={styles.lbName}>Dinesh</span>
              <span style={styles.lbXp}>1,100 XP</span>
            </div>
            {/* Rank 1 */}
            <div style={styles.podiumItem}>
              <div style={{...styles.lbBadge, background: "#ffd700"}}>1</div>
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" style={{...styles.lbAvatar, width: 75, height: 75, borderColor: "#ffd700"}} alt="Rank 1"/>
              <span style={{...styles.lbName, fontSize: 15}}>Pragati</span>
              <span style={styles.lbXp}>1,250 XP</span>
            </div>
            {/* Rank 3 */}
            <div style={styles.podiumItem}>
              <div style={{...styles.lbBadge, background: "#cd7f32"}}>3</div>
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80" style={{...styles.lbAvatar, width: 55, height: 55, borderColor: "#cd7f32"}} alt="Rank 3"/>
              <span style={styles.lbName}>Athlete X</span>
              <span style={{
