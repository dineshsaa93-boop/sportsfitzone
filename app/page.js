"use client";

import React, { useState } from "react";
import {
  Menu, Trophy, Flame, Bell, Search, Settings2, Shield, Star, Target,
  Activity, Moon, Droplet, Timer, Brain, Calendar, ClipboardList, Crown,
  GraduationCap, Gamepad2, Video, Gift, User, MessageSquare, Play,
  FileText, HelpCircle, Book, Users, Bot, CalendarCheck, Apple, Zap,
  ChevronRight, Home, Dumbbell, SlidersHorizontal, CheckCircle2
} from "lucide-react";

// --- REUSABLE COMPONENTS ---

const CircularProgress = ({ percentage, color, title, subtitle, label }) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ position: "relative", width: 120, height: 120, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <svg width="120" height="120" viewBox="0 0 120 120" style={{ transform: "rotate(-90deg)", position: "absolute" }}>
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3ea6ff" />
              <stop offset="100%" stopColor="#39ff14" />
            </linearGradient>
          </defs>
          <circle cx="60" cy="60" r={radius} stroke="rgba(255,255,255,0.05)" strokeWidth="8" fill="none" />
          <circle cx="60" cy="60" r={radius} stroke="url(#grad)" strokeWidth="8" fill="none"
            strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} strokeLinecap="round" />
        </svg>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", zIndex: 10 }}>
          <Activity size={20} color="#39ff14" style={{ marginBottom: 2 }} />
          <span style={{ color: "white", fontSize: 28, fontWeight: "900", lineHeight: "1" }}>{percentage}%</span>
          <span style={{ color: "#39ff14", fontSize: 10, fontWeight: "bold", letterSpacing: 1.5, marginTop: 4 }}>READINESS</span>
        </div>
      </div>
      <p style={{ color: "#39ff14", fontSize: 13, fontWeight: "bold", margin: "12px 0 2px", letterSpacing: 0.5 }}>{label}</p>
      <p style={{ color: "#94a3b8", fontSize: 11, margin: 0 }}>{subtitle}</p>
    </div>
  );
};

const Sparkline = ({ color, points }) => (
  <svg width="100%" height="30" viewBox="0 0 100 30" preserveAspectRatio="none" style={{ marginTop: "auto" }}>
    <polyline points={points} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const StatCard = ({ icon, title, value, subText, color, points, isPositive }) => (
  <div style={styles.statCard}>
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 15 }}>
      <div style={{ border: `1px solid ${color}40`, padding: 8, borderRadius: 10, display: "flex", justifyContent: "center", alignItems: "center" }}>
        {icon}
      </div>
      <span style={{ color: "#94a3b8", fontSize: 12, fontWeight: "bold", letterSpacing: 1, textTransform: "uppercase" }}>{title}</span>
    </div>
    <h2 style={{ color: "white", fontSize: 28, margin: "0 0 6px", fontWeight: "900" }}>{value}</h2>
    <p style={{ color: isPositive ? "#39ff14" : "#94a3b8", fontSize: 13, margin: 0, fontWeight: "600" }}>{subText}</p>
    <Sparkline color={color} points={points} />
  </div>
);

// --- ALL FEATURES DATA ---
const ALL_FEATURES_DATA = [
  { id: 1, title: "Diet Planner", icon: <Apple size={28} />, color: "#39ff14" },
  { id: 2, title: "Progress", icon: <Activity size={28} />, color: "#3ea6ff" },
  { id: 3, title: "Transformation", icon: <Zap size={28} />, color: "#3ea6ff" },
  { id: 4, title: "Sleep", icon: <Moon size={28} />, color: "#9d4edd" },
  { id: 5, title: "Water Tracker", icon: <Droplet size={28} />, color: "#3ea6ff" },
  { id: 6, title: "Workout Timer", icon: <Timer size={28} />, color: "#e2e8f0" },
  { id: 7, title: "Quiz", icon: <Brain size={28} />, color: "#ff4d88" },
  { id: 8, title: "Workout Schedule", icon: <Calendar size={28} />, color: "#ff4d88" },
  { id: 9, title: "Notes", icon: <ClipboardList size={28} />, color: "#ffaa00" },
  { id: 10, title: "Leaderboard", icon: <Crown size={28} />, color: "#ffd700" },
  { id: 11, title: "Courses", icon: <GraduationCap size={28} />, color: "#3ea6ff" },
  { id: 12, title: "Tournaments", icon: <Trophy size={28} />, color: "#ffd700" },
  { id: 13, title: "Match Room", icon: <Gamepad2 size={28} />, color: "#94a3b8" },
  { id: 14, title: "Live Match", icon: <Video size={28} />, color: "#ff4d88" },
  { id: 15, title: "Rewards", icon: <Gift size={28} />, color: "#ffd700" },
  { id: 16, title: "Athlete Profile", icon: <User size={28} />, color: "#e2e8f0" },
  { id: 17, title: "Team Chat", icon: <MessageSquare size={28} />, color: "#39ff14" },
  { id: 18, title: "All Training", icon: <Play size={28} />, color: "#3ea6ff" },
  { id: 19, title: "All Tests", icon: <FileText size={28} />, color: "#3ea6ff" },
  { id: 20, title: "My Doubts", icon: <HelpCircle size={28} />, color: "#9d4edd" },
  { id: 21, title: "Sports Books", icon: <Book size={28} />, color: "#ff7b00" },
  { id: 22, title: "Community", icon: <Users size={28} />, color: "#ffd700" },
  { id: 23, title: "Challenges", icon: <Target size={28} />, color: "#ff4d88" },
  { id: 24, title: "AI Coach", icon: <Bot size={28} />, color: "#3ea6ff" },
  { id: 25, title: "Events", icon: <CalendarCheck size={28} />, color: "#9d4edd" },
];

export default function SportsFitZone() {
  return (
    <div style={styles.page}>
      
      {/* 1. HEADER */}
      <header style={styles.header}>
        <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
          <Menu color="white" size={32} strokeWidth={2.5} style={{ cursor: "pointer" }} />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span style={{ color: "white", fontSize: 18, fontWeight: 900, fontStyle: "italic", letterSpacing: 1.5 }}>SPORTS</span>
            <span style={{ color: "#39ff14", fontSize: 18, fontWeight: 900, fontStyle: "italic", letterSpacing: 1.5 }}>FIT ZONE</span>
          </div>
        </div>

        <div style={styles.headerStats}>
          <div style={styles.statPill}><Trophy color="#ffd700" size={16} fill="#ffd700" /><span style={{ color: "#ffd700" }}>12</span></div>
          <div style={styles.statPill}><Flame color="#ff7b00" size={16} fill="#ff7b00" /><span style={{ color: "#ff7b00" }}>7</span></div>
          <div style={styles.statPill}><span style={styles.xpIcon}>XP</span><span style={{ color: "white" }}>468</span></div>
          <div style={{ position: "relative", marginLeft: 8 }}>
            <Bell color="#e2e8f0" size={26} strokeWidth={2} />
            <div style={styles.notificationDot}></div>
          </div>
        </div>
      </header>

      {/* 2. SEARCH BAR */}
      <div style={styles.searchContainer}>
        <Search color="#94a3b8" size={22} />
        <input placeholder="Search workouts, plans, tournaments..." style={styles.searchInput} />
        <SlidersHorizontal color="#9d4edd" size={22} />
      </div>

      {/* 3. HERO SECTION */}
      <div style={styles.heroGrid}>
        
        {/* Main Profile Card */}
        <div style={styles.mainAthleteCard}>
          <div style={styles.athleteTextContent}>
            <p style={{ color: "#e2e8f0", fontSize: 15, margin: "0 0 5px", fontWeight: "500" }}>Good Evening,</p>
            <h1 style={{ color: "white", fontSize: 44, fontWeight: 900, margin: "0 0 8px", letterSpacing: 1.5, textTransform: "uppercase" }}>DINESH</h1>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 20 }}>
              <span style={{ color: "white", fontSize: 14, fontWeight: "bold" }}>Elite Athlete</span>
              <CheckCircle2 size={16} color="#39ff14" fill="#39ff14" stroke="#090e17" />
            </div>
            
            <p style={{ color: "white", fontSize: 15, lineHeight: 1.5, margin: "0 0 30px" }}>
              Discipline today,<br/>
              <span style={{ color: "#39ff14", fontWeight: "bold" }}>Domination</span> tomorrow.
            </p>

            <div style={styles.heroBottomStats}>
              <div style={styles.heroStatItem}>
                <Flame color="#ff7b00" size={22} fill="#ff7b00"/>
                <div><span style={{ color: "white", fontWeight: "900", fontSize: 16 }}>7</span><br/><span style={{ color: "#94a3b8", fontSize: 11, fontWeight: "500" }}>Day Streak</span></div>
              </div>
              <div style={styles.heroStatItem}>
                <Activity color="#39ff14" size={22}/>
                <div><span style={{ color: "white", fontWeight: "900", fontSize: 16 }}>92%</span><br/><span style={{ color: "#94a3b8", fontSize: 11, fontWeight: "500" }}>Readiness</span></div>
              </div>
              <div style={styles.heroStatItem}>
                <Droplet color="#3ea6ff" size={22}/>
                <div><span style={{ color: "white", fontWeight: "900", fontSize: 16 }}>85%</span><br/><span style={{ color: "#94a3b8", fontSize: 11, fontWeight: "500" }}>Recovery</span></div>
              </div>
            </div>
          </div>
          <div style={{ zIndex: 2, display: "flex", alignItems: "center" }}>
             <CircularProgress percentage={92} label="OPTIMAL" subtitle="You are in the zone!" />
          </div>
        </div>

        {/* Rank Card */}
        <div style={styles.rankCard}>
          <div style={{ display: "flex", alignItems: "center", gap: 15, marginBottom: 25 }}>
            <div style={{ position: "relative" }}>
              <Shield size={55} color="#9d4edd" fill="rgba(157,78,221,0.2)" strokeWidth={1.5} />
              <Star size={24} color="white" fill="white" style={{ position: "absolute", top: 15, left: 15 }} />
            </div>
            <div>
              <p style={{ color: "#9d4edd", fontSize: 11, fontWeight: "bold", margin: "0 0 4px", letterSpacing: 1.5 }}>YOUR RANK</p>
              <h2 style={{ color: "white", fontSize: 18, fontWeight: "900", margin: "0 0 4px", letterSpacing: 0.5 }}>LEVEL 1 ATHLETE</h2>
              <p style={{ color: "#94a3b8", fontSize: 12, margin: 0 }}>Top 15% Among All Athletes</p>
            </div>
          </div>
          
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "auto", background: "rgba(0,0,0,0.2)", padding: 12, borderRadius: 12 }}>
            <div style={styles.rankItem}>
              <span style={styles.rankLabel}>🌐 GLOBAL RANK</span>
              <span style={styles.rankValue}>#24</span>
              <span style={styles.rankSub}>Top 15%</span>
            </div>
            <div style={styles.rankItem}>
              <span style={styles.rankLabel}>🇮🇳 INDIA RANK</span>
              <span style={styles.rankValue}>#5</span>
              <span style={styles.rankSub}>Top 5%</span>
            </div>
            <div style={styles.rankItem}>
              <span style={styles.rankLabel}>🛡️ ACADEMY RANK</span>
              <span style={styles.rankValue}>#1</span>
              <span style={{...styles.rankSub, color: "#ffd700"}}>Top 1%</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. MID SECTION (CHALLENGES & TODAY'S PLAN) */}
      <div style={styles.midGrid}>
        
        {/* Daily Challenge */}
        <div style={styles.challengeCard}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <p style={{ color: "#39ff14", fontSize: 12, fontWeight: "bold", margin: "0 0 8px", letterSpacing: 1 }}>DAILY CHALLENGE</p>
              <h2 style={{ color: "white", fontSize: 24, fontWeight: "900", margin: 0 }}>100 Pushups 💪</h2>
            </div>
            <Target color="#39ff14" size={45} strokeWidth={1.5} />
          </div>
          
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 25, marginBottom: 20 }}>
            <div style={{ flex: 1, background: "rgba(255,255,255,0.1)", height: 8, borderRadius: 4 }}>
              <div style={{ width: "80%", height: "100%", background: "linear-gradient(90deg, rgba(57,255,20,0.8) 0%, #39ff14 100%)", borderRadius: 4, boxShadow: "0 0 10px rgba(57,255,20,0.5)" }}></div>
            </div>
            <span style={{ color: "white", fontSize: 14, fontWeight: "bold" }}>80%</span>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ color: "#39ff14", fontSize: 14, fontWeight: "bold" }}>+50 XP <span style={{ color: "#94a3b8", fontWeight: "500" }}>Reward</span></span>
            <button style={styles.outlineBtn}>Join Challenge</button>
          </div>
        </div>

        {/* Today's Plan */}
        <div style={styles.workoutCard}>
          <div style={{ zIndex: 2, position: "relative" }}>
            <p style={{ color: "#39ff14", fontSize: 12, fontWeight: "bold", margin: "0 0 8px", letterSpacing: 1 }}>TODAY'S PLAN</p>
            <h2 style={{ color: "white", fontSize: 28, fontWeight: "900", margin: 0 }}>Full Body Strength</h2>
            <div style={{ display: "flex", gap: 20, marginTop: 12, marginBottom: 25 }}>
              <span style={styles.workoutMeta}><Timer size={16}/> 45 min</span>
              <span style={styles.workoutMeta}><Flame size={16}/> 420 kcal</span>
              <span style={styles.workoutMeta}><Activity size={16}/> Advanced</span>
            </div>
            <button style={styles.solidBtn}>
              Resume Workout <Play fill="#020617" size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* 5. METRICS 6-GRID */}
      <div style={styles.statsGrid}>
        <StatCard icon={<span style={styles.xpIconMini}>XP</span>} title="XP TODAY" value="120" subText="+12%" color="#39ff14" isPositive={true} points="0,20 20,18 40,10 60,15 80,5 100,2" />
        <StatCard icon={<Flame color="#ff7b00" size={20} fill="#ff7b00"/>} title="CALORIES" value="2,450" subText="Goal: 2,800" color="#ff7b00" points="0,20 20,15 40,18 60,8 80,12 100,5" />
        <StatCard icon={<Activity color="#39ff14" size={20}/>} title="RECOVERY" value="85%" subText="Good" color="#39ff14" isPositive={true} points="0,15 20,20 40,10 60,18 80,5 100,8" />
        <StatCard icon={<Moon color="#9d4edd" size={20} fill="#9d4edd"/>} title="SLEEP SCORE" value="78" subText="Good" color="#9d4edd" points="0,10 20,15 40,5 60,12 80,8 100,18" />
        <StatCard icon={<Droplet color="#3ea6ff" size={20} fill="#3ea6ff"/>} title="WATER INTAKE" value="2.6 L" subText="Goal: 3.0 L" color="#3ea6ff" points="0,18 20,10 40,15 60,5 80,10 100,5" />
        <StatCard icon={<Trophy color="#ffaa00" size={20}/>} title="STREAK" value="7" subText="Days" color="#ffaa00" points="0,20 25,18 50,15 75,10 100,5" />
      </div>

      {/* 6. BOTTOM WIDGETS */}
      <div style={styles.widgetsGrid}>
        
        {/* AI Coach Insight */}
        <div style={{...styles.widgetCard, border: "1px solid rgba(62,166,255,0.3)"}}>
          <h3 style={{ color: "#3ea6ff", fontSize: 13, fontWeight: "bold", margin: "0 0 20px", letterSpacing: 1, textTransform: "uppercase" }}>AI Coach Insight</h3>
          <div style={{ display: "flex", gap: 20, alignItems: "center", marginBottom: 25 }}>
            <Brain size={60} color="#3ea6ff" strokeWidth={1.5} />
            <p style={{ color: "#e2e8f0", fontSize: 14, lineHeight: 1.6, margin: 0, fontWeight: "500" }}>
              Your recovery is excellent and energy is high.<br/><br/>
              Perfect day to push your limits! 🚀
            </p>
          </div>
          <button style={styles.outlineBtnBlue}>
            View Full Report <ChevronRight size={16}/>
          </button>
        </div>

        {/* Leaderboard Top 3 */}
        <div style={{...styles.widgetCard, flex: 1.5}}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 30 }}>
            <h3 style={{ color: "#ffd700", fontSize: 13, fontWeight: "bold", margin: 0, letterSpacing: 1, textTransform: "uppercase" }}>Leaderboard Top 3</h3>
            <span style={{ color: "#94a3b8", fontSize: 13, cursor: "pointer", display: "flex", alignItems: "center", fontWeight: "600" }}>View All <ChevronRight size={14}/></span>
          </div>
          
          <div style={{ display: "flex", justifyContent: "space-around", alignItems: "flex-end", height: 120 }}>
            <div style={styles.podiumItem}>
              <div style={{...styles.lbBadge, background: "#c0c0c0"}}>2</div>
              <img src="https://i.pravatar.cc/150?img=11" style={{...styles.lbAvatar, width: 55, height: 55, borderColor: "#c0c0c0"}} alt="Rank 2"/>
              <span style={styles.lbName}>Dinesh</span>
              <span style={styles.lbXp}>1,100 XP</span>
            </div>
            <div style={{...styles.podiumItem, zIndex: 2}}>
              <div style={{...styles.lbBadge, background: "#ffd700", width: 24, height: 24, fontSize: 13, top: -8, left: -8}}>1</div>
              <img src="https://i.pravatar.cc/150?img=5" style={{...styles.lbAvatar, width: 75, height: 75, borderColor: "#ffd700", borderWidth: 3}} alt="Rank 1"/>
              <span style={{...styles.lbName, fontSize: 16}}>Pragati</span>
              <span style={{...styles.lbXp, color: "#ffd700", fontSize: 12}}>1,250 XP</span>
            </div>
            <div style={styles.podiumItem}>
              <div style={{...styles.lbBadge, background: "#cd7f32"}}>3</div>
              <img src="https://i.pravatar.cc/150?img=12" style={{...styles.lbAvatar, width: 55, height: 55, borderColor: "#cd7f32"}} alt="Rank 3"/>
              <span style={styles.lbName}>Athlete X</span>
              <span style={styles.lbXp}>980 XP</span>
            </div>
          </div>
        </div>
  {/* Upcoming Event */}
        <div style={styles.widgetCard}>
          <h3 style={{ color: "#9d4edd", fontSize: 13, fontWeight: "bold", margin: "0 0 20px", letterSpacing: 1, textTransform: "uppercase" }}>Upcoming Event</h3>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 20 }}>
            <Trophy size={60} color="#9d4edd" strokeWidth={1.5} style={{ marginBottom: 15 }} />
            <h4 style={{ color: "white", fontSize: 16, margin: "0 0 6px", fontWeight: "bold", textAlign: "center", lineHeight: 1.3 }}>State Powerlifting<br/>Championship 2025</h4>
            <p style={{ color: "#94a3b8", fontSize: 12, margin: 0, fontWeight: "600" }}>12 May 2025</p>
          </div>
          <button style={styles.outlineBtnPurple}>Register Now</button>
        </div>
      </div>

      {/* 7. ALL FEATURES SECTION */}
      <div style={{ marginTop: 40, marginBottom: 100 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 25 }}>
          <h2 style={{ color: "white", fontSize: 16, margin: 0, fontWeight: "900", letterSpacing: 1.5 }}>ALL FEATURES</h2>
          <span style={{ color: "#94a3b8", fontSize: 14, cursor: "pointer", display: "flex", alignItems: "center", fontWeight: "600" }}>
            View All <ChevronRight size={16}/>
          </span>
        </div>
        
        {/* EXACT 8-COLUMN GRID for Desktop, wraps on smaller screens */}
        <div style={styles.featuresGrid}>
          {ALL_FEATURES_DATA.map((item) => (
            <div key={item.id} style={styles.featureBox}>
              <div style={styles.featureIconContainer}>
                {React.cloneElement(item.icon, { color: item.color, strokeWidth: 1.5 })}
              </div>
              <span style={styles.featureText}>{item.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 8. BOTTOM NAVIGATION */}
      <div style={styles.bottomNav}>
        <div style={styles.navItemActive}>
          <Home color="#39ff14" size={28} />
          <span style={styles.navTextActive}>Home</span>
        </div>
        <div style={styles.navItem}>
          <Dumbbell color="#94a3b8" size={28} />
          <span style={styles.navText}>Training</span>
        </div>
        <div style={styles.navItem}>
          <Trophy color="#94a3b8" size={28} />
          <span style={styles.navText}>Tournaments</span>
        </div>
        <div style={styles.navItem}>
          <Flame color="#94a3b8" size={28} />
          <span style={styles.navText}>DP</span>
        </div>
        <div style={styles.navItem}>
          <User color="#94a3b8" size={28} />
          <span style={styles.navText}>Profile</span>
        </div>
      </div>

    </div>
  );
}

// --- CSS-IN-JS STYLES (100% Matching Colors & Layout) ---

const styles = {
  page: {
    background: "#090e17", 
    minHeight: "100vh",
    color: "white",
    padding: "25px 25px 0 25px",
    fontFamily: "system-ui, -apple-system, sans-serif",
    maxWidth: 1400,
    margin: "0 auto",
    position: "relative"
  },
  
  // Header
  header: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 25 },
  headerStats: { display: "flex", gap: 12, alignItems: "center" },
  statPill: { display: "flex", alignItems: "center", gap: 8, background: "#111827", padding: "8px 16px", borderRadius: 25, fontSize: 15, fontWeight: "bold", border: "1px solid rgba(255,255,255,0.08)" },
  xpIcon: { background: "#39ff14", color: "#020617", fontSize: 10, padding: "2px 6px", borderRadius: 4, fontWeight: 900 },
  xpIconMini: { background: "#39ff14", color: "#020617", fontSize: 10, padding: "2px 6px", borderRadius: 4, fontWeight: 900, display: "inline-block" },
  notificationDot: { width: 10, height: 10, background: "#39ff14", borderRadius: "50%", position: "absolute", top: -2, right: 0, border: "2px solid #090e17" },
  
  // Search
  searchContainer: { display: "flex", alignItems: "center", background: "#111827", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: "16px 20px", marginBottom: 30, gap: 12 },
  searchInput: { flex: 1, background: "transparent", border: "none", outline: "none", color: "white", fontSize: 15 },
  
  // Hero
  heroGrid: { display: "flex", gap: 20, flexWrap: "wrap", marginBottom: 20 },
  mainAthleteCard: { 
    flex: 2, minWidth: 350, display: "flex", justifyContent: "space-between", position: "relative", 
    background: "linear-gradient(to right, #0d1321 55%, rgba(13,19,33,0.2)), url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1000&auto=format&fit=crop')",
    backgroundSize: "cover", backgroundPosition: "top right", borderRadius: 24, border: "1px solid rgba(255,255,255,0.08)", padding: 30, overflow: "hidden" 
  },
  athleteTextContent: { zIndex: 2, position: "relative" },
  heroBottomStats: { display: "flex", gap: 25 },
  heroStatItem: { display: "flex", alignItems: "center", gap: 10 },
  
  rankCard: { 
    flex: 1, minWidth: 300, background: "linear-gradient(180deg, #16112a 0%, #111827 100%)", 
    borderRadius: 24, border: "1px solid rgba(157,78,221,0.3)", padding: 25, display: "flex", flexDirection: "column" 
  },
  rankItem: { display: "flex", flexDirection: "column", gap: 4, alignItems: "center" },
  rankLabel: { fontSize: 9, color: "#94a3b8", fontWeight: "bold" },
  rankValue: { fontSize: 18, color: "white", fontWeight: "900" },
  rankSub: { fontSize: 10, color: "#39ff14", fontWeight: "bold" },

  // Mid Grid
  midGrid: { display: "flex", gap: 20, flexWrap: "wrap", marginBottom: 20 },
  challengeCard: { 
    flex: 1, minWidth: 300, background: "linear-gradient(135deg, #0d1b14 0%, #111827 100%)", 
    borderRadius: 24, border: "1px solid rgba(57,255,20,0.2)", padding: 25 
  },
  outlineBtn: { background: "transparent", border: "1px solid #39ff14", color: "#39ff14", padding: "8px 16px", borderRadius: 20, fontSize: 13, fontWeight: "bold", cursor: "pointer" },
  
  workoutCard: { 
    flex: 2, minWidth: 350, position: "relative", borderRadius: 24, border: "1px solid rgba(255,255,255,0.08)", padding: 25,
    background: "linear-gradient(to right, #0d1321 50%, rgba(13,19,33,0.3)), url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop')",
    backgroundSize: "cover", backgroundPosition: "center right"
  },
  workoutMeta: { display: "flex", alignItems: "center", gap: 8, color: "#e2e8f0", fontSize: 14, fontWeight: "600" },
  solidBtn: { background: "#39ff14", color: "#020617", border: "none", padding: "12px 24px", borderRadius: 12, fontSize: 14, fontWeight: "900", cursor: "pointer", display: "flex", alignItems: "center", gap: 10 },

  // Stats Grid
  statsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 20, marginBottom: 20 },
  statCard: { background: "#111827", borderRadius: 20, padding: 20, border: "1px solid rgba(255,255,255,0.05)", display: "flex", flexDirection: "column", height: 160 },

  // Widgets
  widgetsGrid: { display: "flex", gap: 20, flexWrap: "wrap" },
  widgetCard: { flex: 1, minWidth: 300, background: "#111827", borderRadius: 24, padding: 25, border: "1px solid rgba(255,255,255,0.05)", display: "flex", flexDirection: "column" },
  outlineBtnBlue: { background: "transparent", border: "1px solid rgba(62,166,255,0.3)", color: "#3ea6ff", padding: "12px", borderRadius: 12, fontSize: 14, fontWeight: "bold", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" },
  outlineBtnPurple: { background: "rgba(157,78,221,0.1)", border: "1px solid rgba(157,78,221,0.5)", color: "white", padding: "12px", borderRadius: 12, fontSize: 14, fontWeight: "bold", cursor: "pointer", width: "100%" },
  
  podiumItem: { display: "flex", flexDirection: "column", alignItems: "center", position: "relative" },
  lbBadge: { position: "absolute", top: -6, left: -6, width: 22, height: 22, borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", color: "#020617", fontSize: 12, fontWeight: "bold", zIndex: 2 },
  lbAvatar: { borderRadius: "50%", borderStyle: "solid", borderWidth: 2, objectFit: "cover", marginBottom: 8 },
  lbName: { color: "white", fontSize: 14, fontWeight: "bold", marginBottom: 4 },
  lbXp: { color: "#39ff14", fontSize: 11, fontWeight: "bold" },

  // Features (Exactly 8 columns wide layout)
  featuresGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(90px, 1fr))", gap: "25px 15px" },
  featureBox: { display: "flex", flexDirection: "column", alignItems: "center", gap: 10, cursor: "pointer" },
  featureIconContainer: { width: 70, height: 70, borderRadius: 18, background: "#111827", border: "1px solid rgba(255,255,255,0.05)", display: "flex", justifyContent: "center", alignItems: "center", transition: "transform 0.2s" },
  featureText: { color: "#94a3b8", fontSize: 11, textAlign: "center", fontWeight: "600", lineHeight: 1.3 },
  
  // Bottom Nav
  bottomNav: { position: "fixed", bottom: 0, left: 0, right: 0, background: "#090e17", borderTop: "1px solid rgba(255,255,255,0.05)", display: "flex", justifyContent: "space-around", padding: "15px 10px 25px", zIndex: 100 },
  navItem: { display: "flex", flexDirection: "column", alignItems: "center", opacity: 0.7, cursor: "pointer" },
  navItemActive: { display: "flex", flexDirection: "column", alignItems: "center", opacity: 1, cursor: "pointer" },
  navText: { color: "#94a3b8", fontSize: 12, marginTop: 6, fontWeight: "600" },
  navTextActive: { color: "#39ff14", fontSize: 12, marginTop: 6, fontWeight: "bold" }
  };
