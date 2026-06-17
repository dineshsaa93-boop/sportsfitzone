"use client";

import React, { useState } from "react";
import {
  Menu, Trophy, Flame, Bell, Search, Settings2, Shield, Star, Target,
  Activity, Moon, Droplet, Timer, Brain, Calendar, ClipboardList, Crown,
  GraduationCap, Gamepad2, Video, Gift, User, MessageSquare, Plus, Play,
  FileText, HelpCircle, Book, Users, Bot, CalendarCheck, Apple, Zap,
  ChevronRight, ChevronUp, ChevronDown, Home, Dumbbell
} from "lucide-react";

// --- REUSABLE COMPONENTS ---

// 1. Circular Progress
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

// 2. Sparkline Graph
const Sparkline = ({ color, points }) => (
  <svg width="100%" height="25" viewBox="0 0 100 25" preserveAspectRatio="none" style={{ marginTop: "auto" }}>
    <polyline points={points} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 3. Stat Card
const StatCard = ({ icon, title, value, subText, color, points, isPositive }) => (
  <div style={styles.statCard}>
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
      <div style={{ background: `${color}15`, padding: 6, borderRadius: 8, display: "flex", justifyContent: "center", alignItems: "center" }}>
        {icon}
      </div>
      <span style={{ color: "#94a3b8", fontSize: 11, fontWeight: "bold", letterSpacing: 0.5, textTransform: "uppercase" }}>{title}</span>
    </div>
    <h2 style={{ color: "white", fontSize: 24, margin: "0 0 4px", fontWeight: "bold" }}>{value}</h2>
    <p style={{ color: isPositive ? "#39ff14" : "#94a3b8", fontSize: 11, margin: 0, fontWeight: "500" }}>{subText}</p>
    <Sparkline color={color} points={points} />
  </div>
);

// --- DATA ---

const ALL_FEATURES_DATA = [
  { id: 1, title: "Diet Planner", icon: <Apple size={24} />, color: "#ff4d4d" },
  { id: 2, title: "Progress", icon: <Activity size={24} />, color: "#3ea6ff" },
  { id: 3, title: "Transformation", icon: <Zap size={24} />, color: "#9d4edd" },
  { id: 4, title: "Sleep", icon: <Moon size={24} />, color: "#3ea6ff" },
  { id: 5, title: "Water Tracker", icon: <Droplet size={24} />, color: "#3ea6ff" },
  { id: 6, title: "Workout Timer", icon: <Timer size={24} />, color: "#e2e8f0" },
  { id: 7, title: "Quiz", icon: <Brain size={24} />, color: "#ff4d88" },
  { id: 8, title: "Workout Schedule", icon: <Calendar size={24} />, color: "#ff4d88" },
  { id: 9, title: "Notes", icon: <ClipboardList size={24} />, color: "#e2e8f0" },
  { id: 10, title: "Leaderboard", icon: <Crown size={24} />, color: "#ffd700" },
  { id: 11, title: "Courses", icon: <GraduationCap size={24} />, color: "#ffd700" },
  { id: 12, title: "Tournaments", icon: <Trophy size={24} />, color: "#ffd700" },
  { id: 13, title: "Match Room", icon: <Gamepad2 size={24} />, color: "#94a3b8" },
  { id: 14, title: "Live Match", icon: <Video size={24} />, color: "#ff4d4d" },
  { id: 15, title: "Rewards", icon: <Gift size={24} />, color: "#ff7b00" },
  { id: 16, title: "Athlete Profile", icon: <User size={24} />, color: "#3ea6ff" },
  { id: 17, title: "Team Chat", icon: <MessageSquare size={24} />, color: "#e2e8f0" },
  { id: 18, title: "DP", icon: <Plus size={24} />, color: "#ff4d88" },
  { id: 19, title: "All Training", icon: <Play size={24} />, color: "#39ff14" },
  { id: 20, title: "All Tests", icon: <FileText size={24} />, color: "#3ea6ff" },
  { id: 21, title: "My Doubts", icon: <HelpCircle size={24} />, color: "#9d4edd" },
  { id: 22, title: "Sports Books", icon: <Book size={24} />, color: "#ff7b00" },
  { id: 23, title: "Community", icon: <Users size={24} />, color: "#ffd700" },
  { id: 24, title: "Challenges", icon: <Target size={24} />, color: "#ff4d88" },
  { id: 25, title: "AI Coach", icon: <Bot size={24} />, color: "#00e5ff" },
  { id: 26, title: "Events", icon: <CalendarCheck size={24} />, color: "#3ea6ff" },
];
  export default function AppDashboard() {
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  // Toggle Features list length based on state
  const displayedFeatures = showAllFeatures ? ALL_FEATURES_DATA : ALL_FEATURES_DATA.slice(0, 16);

  return (
    <div style={styles.page}>
      
      {/* 1. HEADER */}
      <header style={styles.header}>
        <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
          <Menu color="white" size={28} style={{ cursor: "pointer" }} />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span style={{ color: "white", fontSize: 16, fontWeight: 900, fontStyle: "italic", letterSpacing: 1 }}>SPORTS</span>
            <span style={{ color: "#39ff14", fontSize: 16, fontWeight: 900, fontStyle: "italic", letterSpacing: 1 }}>FIT ZONE</span>
          </div>
        </div>

        <div style={styles.headerStats}>
          <div style={styles.statPill}><Trophy color="#ffd700" size={14} /><span style={{ color: "#ffd700" }}>12</span></div>
          <div style={styles.statPill}><Flame color="#ff7b00" size={14} /><span style={{ color: "#ff7b00" }}>7</span></div>
          <div style={styles.statPill}><span style={styles.xpIcon}>XP</span><span style={{ color: "#39ff14" }}>468</span></div>
          <div style={{ position: "relative", marginLeft: 5 }}>
            <Bell color="#e2e8f0" size={22} />
            <div style={styles.notificationDot}></div>
          </div>
        </div>
      </header>

      {/* 2. SEARCH BAR */}
      <div style={styles.searchContainer}>
        <Search color="#94a3b8" size={20} />
        <input placeholder="Search workouts, plans, tournaments..." style={styles.searchInput} />
        <Settings2 color="#9d4edd" size={20} />
      </div>

      {/* 3. HERO SECTION */}
      <div style={styles.heroGrid}>
        
        {/* Main Profile Card */}
        <div style={styles.mainAthleteCard}>
          <div style={styles.athleteTextContent}>
            <p style={{ color: "#e2e8f0", fontSize: 14, margin: "0 0 5px" }}>Good Evening,</p>
            <h1 style={{ color: "white", fontSize: 36, fontWeight: 900, margin: "0 0 8px", letterSpacing: 1, textTransform: "uppercase" }}>DINESH</h1>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 15 }}>
              <span style={{ color: "white", fontSize: 13, fontWeight: "bold" }}>Elite Athlete</span>
              <Activity size={14} color="#39ff14" />
            </div>
            
            <p style={{ color: "white", fontSize: 14, lineHeight: 1.4, margin: "0 0 25px" }}>
              Discipline today,<br/>
              <span style={{ color: "#39ff14", fontWeight: "bold" }}>Domination</span> tomorrow.
            </p>

            <div style={styles.heroBottomStats}>
              <div style={styles.heroStatItem}>
                <Flame color="#ff7b00" size={18}/>
                <div><span style={{ color: "white", fontWeight: "bold", fontSize: 14 }}>7</span><br/><span style={{ color: "#94a3b8", fontSize: 10 }}>Day Streak</span></div>
              </div>
              <div style={styles.heroStatItem}>
                <Activity color="#39ff14" size={18}/>
                <div><span style={{ color: "white", fontWeight: "bold", fontSize: 14 }}>92%</span><br/><span style={{ color: "#94a3b8", fontSize: 10 }}>Readiness</span></div>
              </div>
              <div style={styles.heroStatItem}>
                <Droplet color="#3ea6ff" size={18}/>
                <div><span style={{ color: "white", fontWeight: "bold", fontSize: 14 }}>85%</span><br/><span style={{ color: "#94a3b8", fontSize: 10 }}>Recovery</span></div>
              </div>
            </div>
          </div>
          <div style={{ zIndex: 2 }}>
             <CircularProgress percentage={92} color="#39ff14" title="READINESS" label="OPTIMAL" subtitle="You are in the zone!" />
          </div>
        </div>

        {/* Rank Card */}
        <div style={styles.rankCard}>
          <div style={{ display: "flex", alignItems: "center", gap: 15, marginBottom: 20 }}>
            <div style={{ position: "relative" }}>
              <Shield size={48} color="#9d4edd" strokeWidth={1.5} />
              <Star size={20} color="white" fill="white" style={{ position: "absolute", top: 14, left: 14 }} />
            </div>
            <div>
              <p style={{ color: "#9d4edd", fontSize: 10, fontWeight: "bold", margin: "0 0 2px", letterSpacing: 1 }}>YOUR RANK</p>
              <h2 style={{ color: "white", fontSize: 16, fontWeight: "bold", margin: "0 0 2px", letterSpacing: 0.5 }}>LEVEL 1 ATHLETE</h2>
              <p style={{ color: "#94a3b8", fontSize: 11, margin: 0 }}>Top 15% Among All Athletes</p>
            </div>
          </div>
          
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "auto" }}>
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
              <p style={{ color: "#39ff14", fontSize: 11, fontWeight: "bold", margin: "0 0 5px", letterSpacing: 0.5 }}>DAILY CHALLENGE</p>
              <h2 style={{ color: "white", fontSize: 20, fontWeight: "bold", margin: 0 }}>100 Pushups 💪</h2>
            </div>
            <Target color="#39ff14" size={38} strokeWidth={1.5} />
          </div>
          
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 20, marginBottom: 15 }}>
            <div style={{ flex: 1, background: "rgba(255,255,255,0.1)", height: 6, borderRadius: 3 }}>
              <div style={{ width: "80%", height: "100%", background: "#39ff14", borderRadius: 3, boxShadow: "0 0 8px rgba(57,255,20,0.5)" }}></div>
            </div>
            <span style={{ color: "white", fontSize: 12, fontWeight: "bold" }}>80%</span>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ color: "#39ff14", fontSize: 12, fontWeight: "bold" }}>+50 XP <span style={{ color: "#94a3b8" }}>Reward</span></span>
            <button style={styles.outlineBtn}>Join Challenge</button>
          </div>
        </div>
{/* Today's Plan */}
        <div style={styles.workoutCard}>
          <div style={{ zIndex: 2, position: "relative" }}>
            <p style={{ color: "#39ff14", fontSize: 11, fontWeight: "bold", margin: "0 0 5px", letterSpacing: 0.5 }}>TODAY'S PLAN</p>
            <h2 style={{ color: "white", fontSize: 24, fontWeight: "bold", margin: 0 }}>Full Body Strength</h2>
            <div style={{ display: "flex", gap: 15, marginTop: 10, marginBottom: 20 }}>
              <span style={styles.workoutMeta}><Timer size={14}/> 45 min</span>
              <span style={styles.workoutMeta}><Flame size={14}/> 420 kcal</span>
              <span style={styles.workoutMeta}><Activity size={14}/> Advanced</span>
            </div>
            <button style={styles.solidBtn}>
              Resume Workout <Play fill="#020617" size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* 5. METRICS 6-GRID */}
      <div style={styles.statsGrid}>
        <StatCard icon={<span style={styles.xpIconMini}>XP</span>} title="XP TODAY" value="120" subText="+12%" color="#39ff14" isPositive={true} points="0,20 20,18 40,10 60,15 80,5 100,2" />
        <StatCard icon={<Flame color="#ff7b00" size={16}/>} title="CALORIES" value="2,450" subText="Goal: 2,800" color="#ff7b00" points="0,20 20,15 40,18 60,8 80,12 100,5" />
        <StatCard icon={<Activity color="#39ff14" size={16}/>} title="RECOVERY" value="85%" subText="Good" color="#39ff14" isPositive={true} points="0,15 20,20 40,10 60,18 80,5 100,8" />
        <StatCard icon={<Moon color="#9d4edd" size={16}/>} title="SLEEP SCORE" value="78" subText="Good" color="#9d4edd" points="0,10 20,15 40,5 60,12 80,8 100,18" />
        <StatCard icon={<Droplet color="#3ea6ff" size={16}/>} title="WATER INTAKE" value="2.6 L" subText="Goal: 3.0 L" color="#3ea6ff" points="0,18 20,10 40,15 60,5 80,10 100,5" />
        <StatCard icon={<Flame color="#ffaa00" size={16}/>} title="STREAK" value="7" subText="Days" color="#ffaa00" points="0,20 25,18 50,15 75,10 100,5" />
      </div>

      {/* 6. BOTTOM WIDGETS */}
      <div style={styles.widgetsGrid}>
        
        {/* AI Coach Insight */}
        <div style={{...styles.widgetCard, border: "1px solid rgba(62,166,255,0.2)"}}>
          <h3 style={{ color: "#3ea6ff", fontSize: 12, fontWeight: "bold", margin: "0 0 15px", letterSpacing: 0.5 }}>AI COACH INSIGHT</h3>
          <div style={{ display: "flex", gap: 15, alignItems: "center", marginBottom: 20 }}>
            <Brain size={50} color="#3ea6ff" strokeWidth={1.5} />
            <p style={{ color: "#e2e8f0", fontSize: 12, lineHeight: 1.5, margin: 0 }}>
              Your recovery is excellent and energy is high.<br/><br/>
              Perfect day to push your limits! 🚀
            </p>
          </div>
          <button style={styles.outlineBtnBlue}>
            View Full Report <ChevronRight size={14}/>
          </button>
        </div>

        {/* Leaderboard Top 3 */}
        <div style={{...styles.widgetCard, flex: 1.5}}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
            <h3 style={{ color: "#ffd700", fontSize: 12, fontWeight: "bold", margin: 0, letterSpacing: 0.5 }}>LEADERBOARD TOP 3</h3>
            <span style={{ color: "#94a3b8", fontSize: 11, cursor: "pointer", display: "flex", alignItems: "center" }}>View All <ChevronRight size={12}/></span>
          </div>
          
          <div style={{ display: "flex", justifyContent: "space-around", alignItems: "flex-end", height: 110 }}>
            <div style={styles.podiumItem}>
              <div style={{...styles.lbBadge, background: "#c0c0c0"}}>2</div>
              <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" style={{...styles.lbAvatar, width: 48, height: 48, borderColor: "#c0c0c0"}} alt="Rank 2"/>
              <span style={styles.lbName}>Dinesh</span>
              <span style={styles.lbXp}>1,100 XP</span>
            </div>
            <div style={styles.podiumItem}>
              <div style={{...styles.lbBadge, background: "#ffd700"}}>1</div>
              <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" style={{...styles.lbAvatar, width: 64, height: 64, borderColor: "#ffd700"}} alt="Rank 1"/>
              <span style={{...styles.lbName, fontSize: 14}}>Pragati</span>
              <span style={{...styles.lbXp, color: "#ffd700"}}>1,250 XP</span>
            </div>
            <div style={styles.podiumItem}>
              <div style={{...styles.lbBadge, background: "#cd7f32"}}>3</div>
              <img src="https://i.pravatar.cc/150?u=a04258a2462d826712d" style={{...styles.lbAvatar, width: 48, height: 48, borderColor: "#cd7f32"}} alt="Rank 3"/>
              <span style={styles.lbName}>Athlete X</span>
              <span style={styles.lbXp}>980 XP</span>
            </div>
          </div>
        </div>

        {/* Upcoming Event */}
        <div style={styles.widgetCard}>
          <h3 style={{ color: "#9d4edd", fontSize: 12, fontWeight: "bold", margin: "0 0 15px", letterSpacing: 0.5 }}>UPCOMING EVENT</h3>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 15 }}>
            <Trophy size={48} color="#9d4edd" strokeWidth={1.5} style={{ marginBottom: 12 }} />
            <h4 style={{ color: "white", fontSize: 14, margin: "0 0 4px", fontWeight: "bold", textAlign: "center" }}>State Powerlifting<br/>Championship 2025</h4>
            <p style={{ color: "#e2e8f0", fontSize: 11, margin: 0 }}>12 May 2025</p>
          </div>
          <button style={styles.outlineBtnPurple}>Register Now</button>
        </div>
      </div>

      {/* 7. ALL FEATURES SECTION */}
      <div style={{ marginTop: 30 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <h2 style={{ color: "white", fontSize: 14, margin: 0, fontWeight: "bold", letterSpacing: 1 }}>ALL FEATURES</h2>
          <span style={{ color: "#94a3b8", fontSize: 12, cursor: "pointer", display: "flex", alignItems: "center" }}>
            View All <ChevronRight size={14}/>
          </span>
        </div>
        
        {/* Features Grid */}
        <div style={styles.featuresGrid}>
          {displayedFeatures.map((item) => (
            <div key={item.id} style={styles.featureBox}>
              <div style={styles.featureIconContainer}>
                {React.cloneElement(item.icon, { color: item.color, strokeWidth: 1.5 })}
              </div>
              <span style={styles.featureText}>{item.title}</span>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Toggle Button (Exact Design) */}
        <div style={styles.toggleWrapper}>
          <button onClick={() => setShowAllFeatures(!showAllFeatures)} style={styles.toggleBtn}>
            <span style={{ fontWeight: "bold", fontSize: 14 }}>{showAllFeatures ? "Show Less" : "Show More"}</span>
            <div style={styles.orangeTriangleBox}>
              {showAllFeatures ? <ChevronUp size={14} color="white" strokeWidth={3} /> : <ChevronDown size={14} color="white" strokeWidth={3} />}
            </div>
          </button>
        </div>
      </div>

      {/* 8. FLOATING WORKOUT CARD (Fixed at bottom) */}
      <div style={styles.floatingWorkoutCard}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={styles.playIconCircle}>
            <Play size={18} color="#39ff14" fill="#39ff14" style={{ marginLeft: 2 }} />
          </div>
          <div>
            <h4 style={{ margin: "0 0 2px 0", color: "white", fontSize: 15, fontWeight: "bold" }}>Full Body Strength Workout</h4>
            <p style={{ margin: 0, color: "#94a3b8", fontSize: 12 }}>Build Power & Endurance</p>
          </div>
        </div>
        <button style={styles.floatingResumeBtn}>Resume</button>
      </div>

      {/* Spacing for bottom nav */}
      <div style={{ height: 100 }}></div>

      {/* 9. BOTTOM NAVIGATION */}
      <div style={styles.bottomNav}>
        <div style={styles.navItemActive}>
          <Home color="#39ff14" size={24} />
          <span style={styles.navTextActive}>Home</span>
        </div>
        <div style={styles.navItem}>
          <Dumbbell color="#94a3b8" size={24} />
          <span style={styles.navText}>Training</span>
        </div>
        <div style={styles.navItem}>
          <Trophy color="#94a3b8" size={24} />
          <span style={styles.navText}>Tournaments</span>
        </div>
        <div style={styles.navItem}>
          <Flame color="#94a3b8" size={24} />
          <span style={styles.navText}>DP</span>
        </div>
        <div style={styles.navItem}>
          <User color="#94a3b8" size={24} />
          <span style={styles.navText}>Profile</span>
        </div>
      </div>

    </div>
  );
}

// --- CSS-IN-JS STYLES (100% Matching) ---

const styles = {
  page: {
    background: "#090e17", // Exact deep dark background
    minHeight: "100vh",
    color: "white",
    padding: "20px 20px 0 20px",
    fontFamily: "system-ui, -apple-system, sans-serif",
    maxWidth: 1200,
    margin: "0 auto",
    position: "relative"
  },
  
  // Header
  header: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 },
  headerStats: { display: "flex", gap: 10, alignItems: "center" },
  statPill: { display: "flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.05)", padding: "6px 12px", borderRadius: 20, fontSize: 13, fontWeight: "bold", border: "1px solid rgba(255,255,255,0.08)" },
  xpIcon: { background: "#39ff14", color: "#020617", fontSize: 9, padding: "2px 5px", borderRadius: 4, fontWeight: 900 },
  xpIconMini: { background: "#39ff14", color: "#020617", fontSize: 9, padding: "2px 5px", borderRadius: 4, fontWeight: 900, display: "inline-block" },
  notificationDot: { width: 8, height: 8, background: "#39ff14", borderRadius: "50%", position: "absolute", top: 0, right: 2, border: "2px solid #090e17" },
  
  // Search
  searchContainer: { display: "flex", alignItems: "center", background: "#111827", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "12px 15px", marginBottom: 25, gap: 10 },
  searchInput: { flex: 1, background: "transparent", border: "none", outline: "none", color: "white", fontSize: 13 },
  
  // Hero
  heroGrid: { display: "flex", gap: 15, flexWrap: "wrap", marginBottom: 15 },
  mainAthleteCard: { 
    flex: 2, minWidth: 280, display: "flex", justifyContent: "space-between", position: "relative", 
    background: "linear-gradient(to right, #0d1321 60%, rgba(13,19,33,0.4)), url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1000&auto=format&fit=crop')",
    backgroundSize: "cover", backgroundPosition: "right", borderRadius: 20, border: "1px solid rgba(255,255,255,0.08)", padding: 25, overflow: "hidden" 
  },
  athleteTextContent: { zIndex: 2, position: "relative" },
  heroBottomStats: { display: "flex", gap: 20 },
  heroStatItem: { display: "flex", alignItems: "center", gap: 8 },
  
  rankCard: { 
    flex: 1, minWidth: 250, background: "linear-gradient(180deg, #16112a 0%, #111827 100%)", 
    borderRadius: 20, border: "1px solid rgba(157,78,221,0.3)", padding: 20, display: "flex", flexDirection: "column" 
  },
  rankItem: { display: "flex", flexDirection: "column", gap: 4 },
  rankLabel: { fontSize: 8, color: "#94a3b8", fontWeight: "bold" },
  rankValue: { fontSize: 15, color: "white", fontWeight: "bold" },
  rankSub: { fontSize: 9, color: "#39ff14", fontWeight: "bold" },

  // Mid Grid
  midGrid: { display: "flex", gap: 15, flexWrap: "wrap", marginBottom: 15 },
  challengeCard: { 
    flex: 1, minWidth: 280, background: "linear-gradient(135deg, #0d1b14 0%, #111827 100%)", 
    borderRadius: 20, border: "1px solid rgba(57,255,20,0.2)", padding: 20 
  },
  outlineBtn: { background: "transparent", border: "1px solid #39ff14", color: "#39ff14", padding: "6px 14px", borderRadius: 20, fontSize: 11, fontWeight: "bold", cursor: "pointer" },
  
  workoutCard: { 
    flex: 2, minWidth: 280, position: "relative", borderRadius: 20, border: "1px solid rgba(255,255,255,0.08)", padding: 20,
    background: "linear-gradient(to right, #0d1321 50%, rgba(13,19,33,0.3)), url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop')",
    backgroundSize: "cover", backgroundPosition: "center right"
  },
  workoutMeta: { display: "flex", alignItems: "center", gap: 6, color: "#e2e8f0", fontSize: 12, fontWeight: "500" },
  solidBtn: { background: "#39ff14", color: "#020617", border: "none", padding: "10px 20px", borderRadius: 10, fontSize: 13, fontWeight: "bold", cursor: "pointer", display: "flex", alignItems: "center", gap: 8 },

  // Stats Grid
  statsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 15, marginBottom: 15 },
  statCard: { background: "#111827", borderRadius: 16, padding: 15, border: "1px solid rgba(255,255,255,0.05)", display: "flex", flexDirection: "column", height: 130 },

  // Widgets
  widgetsGrid: { display: "flex", gap: 15, flexWrap: "wrap" },
  widgetCard: { flex: 1, minWidth: 260, background: "#111827", borderRadius: 20, padding: 20, border: "1px solid rgba(255,255,255,0.05)", display: "flex", flexDirection: "column" },
  outlineBtnBlue: { background: "transparent", border: "1px solid rgba(62,166,255,0.3)", color: "#3ea6ff", padding: "10px", borderRadius: 10, fontSize: 12, fontWeight: "bold", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" },
  outlineBtnPurple: { background: "rgba(157,78,221,0.1)", border: "1px solid rgba(157,78,221,0.5)", color: "white", padding: "10px", borderRadius: 10, fontSize: 12, fontWeight: "bold", cursor: "pointer", width: "100%" },
  
  podiumItem: { display: "flex", flexDirection: "column", alignItems: "center", position: "relative" },
  lbBadge: { position: "absolute", top: -6, left: -6, width: 20, height: 20, borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", color: "#020617", fontSize: 11, fontWeight: "bold", zIndex: 2 },
  lbAvatar: { borderRadius: "50%", borderStyle: "solid", borderWidth: 2, objectFit: "cover", marginBottom: 6 },
  lbName: { color: "white", fontSize: 12, fontWeight: "bold", marginBottom: 2 },
  lbXp: { color: "#39ff14", fontSize: 10, fontWeight: "bold" },

  // Features
  featuresGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(70px, 1fr))", gap: "20px 10px", marginBottom: 20 },
  featureBox: { display: "flex", flexDirection: "column", alignItems: "center", gap: 8, cursor: "pointer" },
  featureIconContainer: { width: 55, height: 55, borderRadius: 14, background: "#111827", border: "1px solid rgba(255,255,255,0.08)", display: "flex", justifyContent: "center", alignItems: "center", transition: "transform 0.2s" },
  featureText: { color: "#94a3b8", fontSize: 10, textAlign: "center", fontWeight: "500", lineHeight: 1.2 },
  
  // Toggle Button (Show More/Less)
  toggleWrapper: { display: "flex", justifyContent: "center", paddingBottom: 40 },
  toggleBtn: { background: "#1e293b", border: "none", borderRadius: 12, padding: "10px 20px", display: "flex", alignItems: "center", gap: 10, cursor: "pointer", color: "white" },
  orangeTriangleBox: { background: "#f59e0b", padding: 4, borderRadius: 4, display: "flex", justifyContent: "center", alignItems: "center" },

  // Floating Workout Card
  floatingWorkoutCard: { 
    position: "fixed", bottom: 85, left: 20, right: 20, 
    background: "#111827", borderRadius: 16, padding: "12px 15px", 
    border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 -4px 20px rgba(0,0,0,0.5)",
    display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 90,
    maxWidth: 1160, margin: "0 auto"
  },
  playIconCircle: { width: 40, height: 40, borderRadius: "50%", border: "2px solid #39ff14", display: "flex", justifyContent: "center", alignItems: "center" },
  floatingResumeBtn: { background: "#39ff14", color: "#020617", border: "none", padding: "10px 18px", borderRadius: 10, fontSize: 13, fontWeight: "900", cursor: "pointer" },

  // Bottom Nav
  bottomNav: { position: "fixed", bottom: 0, left: 0, right: 0, background: "#090e17", borderTop: "1px solid rgba(255,255,255,0.05)", display: "flex", justifyContent: "space-around", padding: "12px 10px 20px", zIndex: 100 },
  navItem: { display: "flex", flexDirection: "column", alignItems: "center", opacity: 0.7, cursor: "pointer" },
  navItemActive: { display: "flex", flexDirection: "column", alignItems: "center", opacity: 1, cursor: "pointer" },
  navText: { color: "#94a3b8", fontSize: 10, marginTop: 4, fontWeight: "500" },
  navTextActive: { color: "#39ff14", fontSize: 10, marginTop: 4, fontWeight: "bold" }
};
