"use client";

import React from "react";
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
    <div className="circular-progress-container">
      <div className="circular-progress-svg-wrapper">
        <svg width="120" height="120" viewBox="0 0 120 120" className="progress-svg">
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
        <div className="progress-text-content">
          <Activity size={20} color="#39ff14" style={{ marginBottom: 2 }} />
          <span className="progress-percent">{percentage}%</span>
          <span className="progress-label-top">READINESS</span>
        </div>
      </div>
      <p className="progress-label-bottom">{label}</p>
      <p className="progress-subtitle">{subtitle}</p>
    </div>
  );
};

const Sparkline = ({ color, points }) => (
  <svg width="100%" height="30" viewBox="0 0 100 30" preserveAspectRatio="none" style={{ marginTop: "auto" }}>
    <polyline points={points} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const StatCard = ({ icon, title, value, subText, color, points, isPositive }) => (
  <div className="stat-card">
    <div className="stat-card-header">
      <div className="stat-icon-wrapper" style={{ borderColor: `${color}40` }}>
        {icon}
      </div>
      <span className="stat-title">{title}</span>
    </div>
    <h2 className="stat-value">{value}</h2>
    <p className="stat-subtext" style={{ color: isPositive ? "#39ff14" : "#94a3b8" }}>{subText}</p>
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
    <div className="sfz-app">
      
      {/* 🔴 MAGIC RESPONSIVE CSS INJECTED HERE 🔴 */}
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; background: #090e17; }
        
        .sfz-app {
          background: #090e17;
          min-height: 100vh;
          color: white;
          font-family: system-ui, -apple-system, sans-serif;
          padding-bottom: 90px; /* space for bottom nav */
        }
        
        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 20px;
          overflow-x: hidden; /* prevents horizontal scrolling */
        }

        /* Header */
        .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px; flex-wrap: wrap; gap: 15px; }
        .logo-area { display: flex; align-items: center; gap: 12px; }
        .logo-text { display: flex; flex-direction: column; line-height: 1; }
        .logo-sports { color: white; font-size: 18px; font-weight: 900; font-style: italic; letter-spacing: 1.5px; }
        .logo-fit { color: #39ff14; font-size: 18px; font-weight: 900; font-style: italic; letter-spacing: 1.5px; }
        
        .stats-area { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; }
        .stat-pill { display: flex; align-items: center; gap: 6px; background: #111827; padding: 6px 12px; border-radius: 25px; font-size: 14px; font-weight: bold; border: 1px solid rgba(255,255,255,0.08); }
        .xp-badge { background: #39ff14; color: #020617; font-size: 10px; padding: 2px 6px; border-radius: 4px; font-weight: 900; }
        .bell-wrapper { position: relative; margin-left: 5px; }
        .bell-dot { width: 10px; height: 10px; background: #39ff14; border-radius: 50%; position: absolute; top: -2px; right: 0; border: 2px solid #090e17; }

        /* Search */
        .search-bar { display: flex; align-items: center; background: #111827; border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 14px 20px; margin-bottom: 25px; gap: 12px; }
        .search-input { flex: 1; background: transparent; border: none; outline: none; color: white; font-size: 15px; width: 100%; }

        /* Grids */
        .grid-2 { display: grid; grid-template-columns: 2fr 1fr; gap: 20px; margin-bottom: 20px; }
        .grid-mid { display: grid; grid-template-columns: 1fr 2fr; gap: 20px; margin-bottom: 20px; }
        
        /* Hero Card */
        .hero-card { 
          background: linear-gradient(to right, #0d1321 55%, rgba(13,19,33,0.2)), url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1000&auto=format&fit=crop');
          background-size: cover; background-position: top right;
          border-radius: 24px; border: 1px solid rgba(255,255,255,0.08); padding: 30px; 
          display: flex; justify-content: space-between; align-items: center; position: relative; overflow: hidden;
        }
        .hero-title { color: white; font-size: 44px; font-weight: 900; margin: 0 0 8px; letter-spacing: 1.5px; }
        .hero-stats-row { display: flex; gap: 20px; flex-wrap: wrap; margin-top: 30px; }
        .hero-stat-item { display: flex; align-items: center; gap: 10px; }

        /* Rank Card */
        .rank-card { background: linear-gradient(180deg, #16112a 0%, #111827 100%); border-radius: 24px; border: 1px solid rgba(157,78,221,0.3); padding: 25px; display: flex; flex-direction: column; justify-content: space-between; }
        .rank-bottom-bar { display: flex; justify-content: space-between; background: rgba(0,0,0,0.2); padding: 12px; border-radius: 12px; margin-top: 20px; }

        /* Circular Progress (CSS driven) */
        .circular-progress-container { display: flex; flex-direction: column; align-items: center; z-index: 2; }
        .circular-progress-svg-wrapper { position: relative; width: 120px; height: 120px; display: flex; justify-content: center; align-items: center; }
        .progress-svg { transform: rotate(-90deg); position: absolute; }
        .progress-text-content { display: flex; flex-direction: column; align-items: center; z-index: 10; }
        .progress-percent { color: white; font-size: 28px; font-weight: 900; line-height: 1; }
        .progress-label-top { color: #39ff14; font-size: 10px; font-weight: bold; letter-spacing: 1.5px; margin-top: 4px; }
        .progress-label-bottom { color: #39ff14; font-size: 13px; font-weight: bold; margin: 12px 0 2px; letter-spacing: 0.5px; }
        .progress-subtitle { color: #94a3b8; font-size: 11px; margin: 0; text-align: center; }

        /* Cards general */
        .card-dark { background: #111827; border-radius: 24px; padding: 25px; border: 1px solid rgba(255,255,255,0.05); display: flex; flex-direction: column; }
        
        /* Challenge & Workout */
        .challenge-card { background: linear-gradient(135deg, #0d1b14 0%, #111827 100%); border-radius: 24px; border: 1px solid rgba(57,255,20,0.2); padding: 25px; }
        .workout-card { background: linear-gradient(to right, #0d1321 50%, rgba(13,19,33,0.3)), url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop'); background-size: cover; background-position: center right; border-radius: 24px; border: 1px solid rgba(255,255,255,0.08); padding: 25px; position: relative; }
        
        /* Stats Grid 6-items */
        .stats-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 15px; margin-bottom: 20px; }
        .stat-card { background: #111827; border-radius: 20px; padding: 18px; border: 1px solid rgba(255,255,255,0.05); display: flex; flex-direction: column; height: 160px; }
        .stat-card-header { display: flex; align-items: center; gap: 8px; margin-bottom: 12px; }
        .stat-icon-wrapper { border: 1px solid; padding: 6px; border-radius: 10px; display: flex; justify-content: center; align-items: center; }
        .stat-title { color: #94a3b8; font-size: 11px; font-weight: bold; letter-spacing: 1px; text-transform: uppercase; }
        .stat-value { color: white; font-size: 26px; margin: 0 0 4px; font-weight: 900; }
        .stat-subtext { font-size: 12px; margin: 0; font-weight: 600; }

        /* Widgets Grid */
        .widgets-grid { display: grid; grid-template-columns: 1fr 1.5fr 1fr; gap: 20px; margin-bottom: 40px; }
        .podium-item { display: flex; flex-direction: column; align-items: center; position: relative; }
        .lb-avatar { border-radius: 50%; border: 2px solid; object-fit: cover; margin-bottom: 8px; }

        /* Features */
        .features-grid { display: grid; grid-template-columns: repeat(8, 1fr); gap: 20px 10px; }
        .feature-box { display: flex; flex-direction: column; align-items: center; gap: 8px; cursor: pointer; }
        .feature-icon-cont { width: 65px; height: 65px; border-radius: 18px; background: #111827; border: 1px solid rgba(255,255,255,0.05); display: flex; justify-content: center; align-items: center; }
        .feature-text { color: #94a3b8; font-size: 11px; text-align: center; font-weight: 600; line-height: 1.2; }

        /* Buttons */
        .btn-solid { background: #39ff14; color: #020617; border: none; padding: 12px 24px; border-radius: 12px; font-size: 14px; font-weight: 900; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; }
        .btn-outline { background: transparent; border: 1px solid #39ff14; color: #39ff14; padding: 6px 14px; border-radius: 20px; font-size: 12px; font-weight: bold; cursor: pointer; }

        /* Bottom Nav */
        .bottom-nav { position: fixed; bottom: 0; left: 0; right: 0; background: #090e17; border-top: 1px solid rgba(255,255,255,0.05); display: flex; justify-content: space-around; padding: 12px 10px 20px; z-index: 100; }
        .nav-item { display: flex; flex-direction: column; align-items: center; opacity: 0.6; cursor: pointer; }
        .nav-item.active { opacity: 1; }
        .nav-text { color: #94a3b8; font-size: 11px; margin-top: 6px; font-weight: 600; }
        .nav-text.active { color: #39ff14; font-weight: bold; }

        /* 📱 RESPONSIVE MEDIA QUERIES FOR MOBILE 📱 */
        @media (max-width: 1024px) {
          .stats-grid { grid-template-columns: repeat(3, 1fr); }
          .features-grid { grid-template-columns: repeat(6, 1fr); }
   }
    @media (max-width: 768px) {
          .container { padding: 15px; }
          .header { flex-direction: column; align-items: flex-start; }
          .stats-area { width: 100%; justify-content: flex-start; overflow-x: auto; padding-bottom: 5px; flex-wrap: nowrap; }
          .stats-area::-webkit-scrollbar { display: none; }
          
          .grid-2 { grid-template-columns: 1fr; }
          .grid-mid { grid-template-columns: 1fr; }
          
          .hero-card { flex-direction: column; align-items: flex-start; gap: 25px; padding: 20px; }
          .hero-title { font-size: 36px; }
          .circular-progress-container { align-self: center; } /* Center the circle on mobile */
          
          .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
          .widgets-grid { grid-template-columns: 1fr; gap: 15px; }
          .features-grid { grid-template-columns: repeat(4, 1fr); }
          
          .rank-bottom-bar { flex-direction: column; gap: 10px; align-items: center; text-align: center; }
          .workout-card { padding: 20px; }
        }

        @media (max-width: 480px) {
          .hero-title { font-size: 30px; }
          .feature-icon-cont { width: 55px; height: 55px; }
        }
      `}</style>
      
      <div className="container">
        {/* 1. HEADER */}
        <header className="header">
          <div className="logo-area">
            <Menu color="white" size={30} strokeWidth={2.5} style={{ cursor: "pointer" }} />
            <div className="logo-text">
              <span className="logo-sports">SPORTS</span>
              <span className="logo-fit">FIT ZONE</span>
            </div>
          </div>

          <div className="stats-area">
            <div className="stat-pill"><Trophy color="#ffd700" size={15} fill="#ffd700" /><span style={{ color: "#ffd700" }}>12</span></div>
            <div className="stat-pill"><Flame color="#ff7b00" size={15} fill="#ff7b00" /><span style={{ color: "#ff7b00" }}>7</span></div>
            <div className="stat-pill"><span className="xp-badge">XP</span><span style={{ color: "white" }}>468</span></div>
            <div className="bell-wrapper">
              <Bell color="#e2e8f0" size={24} strokeWidth={2} />
              <div className="bell-dot"></div>
            </div>
          </div>
        </header>

        {/* 2. SEARCH BAR */}
        <div className="search-bar">
          <Search color="#94a3b8" size={20} />
          <input placeholder="Search workouts, plans, tournaments..." className="search-input" />
          <SlidersHorizontal color="#9d4edd" size={20} />
        </div>

        {/* 3. HERO SECTION */}
        <div className="grid-2">
          {/* Main Profile Card */}
          <div className="hero-card">
            <div style={{ zIndex: 2 }}>
              <p style={{ color: "#e2e8f0", fontSize: 14, margin: "0 0 5px", fontWeight: "500" }}>Good Evening,</p>
              <h1 className="hero-title">DINESH</h1>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 15 }}>
                <span style={{ color: "white", fontSize: 13, fontWeight: "bold" }}>Elite Athlete</span>
                <CheckCircle2 size={15} color="#39ff14" fill="#39ff14" stroke="#090e17" />
              </div>
              
              <p style={{ color: "white", fontSize: 14, lineHeight: 1.5, margin: "0 0 20px" }}>
                Discipline today,<br/>
                <span style={{ color: "#39ff14", fontWeight: "bold" }}>Domination</span> tomorrow.
              </p>

              <div className="hero-stats-row">
                <div className="hero-stat-item">
                  <Flame color="#ff7b00" size={20} fill="#ff7b00"/>
                  <div><span style={{ color: "white", fontWeight: "900", fontSize: 15 }}>7</span><br/><span style={{ color: "#94a3b8", fontSize: 11, fontWeight: "500" }}>Day Streak</span></div>
                </div>
                <div className="hero-stat-item">
                  <Activity color="#39ff14" size={20}/>
                  <div><span style={{ color: "white", fontWeight: "900", fontSize: 15 }}>92%</span><br/><span style={{ color: "#94a3b8", fontSize: 11, fontWeight: "500" }}>Readiness</span></div>
                </div>
                <div className="hero-stat-item">
                  <Droplet color="#3ea6ff" size={20}/>
                  <div><span style={{ color: "white", fontWeight: "900", fontSize: 15 }}>85%</span><br/><span style={{ color: "#94a3b8", fontSize: 11, fontWeight: "500" }}>Recovery</span></div>
                </div>
              </div>
            </div>
            
            <CircularProgress percentage={92} label="OPTIMAL" subtitle="You are in the zone!" />
          </div>

          {/* Rank Card */}
          <div className="rank-card">
            <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
              <div style={{ position: "relative" }}>
                <Shield size={50} color="#9d4edd" fill="rgba(157,78,221,0.2)" strokeWidth={1.5} />
                <Star size={20} color="white" fill="white" style={{ position: "absolute", top: 15, left: 15 }} />
              </div>
              <div>
                <p style={{ color: "#9d4edd", fontSize: 11, fontWeight: "bold", margin: "0 0 4px", letterSpacing: 1.5 }}>YOUR RANK</p>
                <h2 style={{ color: "white", fontSize: 17, fontWeight: "900", margin: "0 0 4px", letterSpacing: 0.5 }}>LEVEL 1 ATHLETE</h2>
                <p style={{ color: "#94a3b8", fontSize: 12, margin: 0 }}>Top 15% Among All Athletes</p>
              </div>
            </div>
            
            <div className="rank-bottom-bar">
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                <span style={{ fontSize: 9, color: "#94a3b8", fontWeight: "bold" }}>🌐 GLOBAL RANK</span>
                <span style={{ fontSize: 16, color: "white", fontWeight: "900" }}>#24</span>
                <span style={{ fontSize: 10, color: "#39ff14", fontWeight: "bold" }}>Top 15%</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                <span style={{ fontSize: 9, color: "#94a3b8", fontWeight: "bold" }}>🇮🇳 INDIA RANK</span>
                <span style={{ fontSize: 16, color: "white", fontWeight: "900" }}>#5</span>
                <span style={{ fontSize: 10, color: "#39ff14", fontWeight: "bold" }}>Top 5%</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                <span style={{ fontSize: 9, color: "#94a3b8", fontWeight: "bold" }}>🛡️ ACADEMY RANK</span>
                <span style={{ fontSize: 16, color: "white", fontWeight: "900" }}>#1</span>
                <span style={{ fontSize: 10, color: "#ffd700", fontWeight: "bold" }}>Top 1%</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4. MID SECTION (CHALLENGES & TODAY'S PLAN) */}
        <div className="grid-mid">
          {/* Daily Challenge */}
          <div className="challenge-card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <p style={{ color: "#39ff14", fontSize: 11, fontWeight: "bold", margin: "0 0 6px", letterSpacing: 1 }}>DAILY CHALLENGE</p>
                <h2 style={{ color: "white", fontSize: 22, fontWeight: "900", margin: 0 }}>100 Pushups 💪</h2>
              </div>
              <Target color="#39ff14" size={40} strokeWidth={1.5} />
            </div>
            
            <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "20px 0" }}>
              <div style={{ flex: 1, background: "rgba(255,255,255,0.1)", height: 8, borderRadius: 4 }}>
                <div style={{ width: "80%", height: "100%", background: "linear-gradient(90deg, rgba(57,255,20,0.8) 0%, #39ff14 100%)", borderRadius: 4, boxShadow: "0 0 10px rgba(57,255,20,0.5)" }}></div>
              </div>
              <span style={{ color: "white", fontSize: 13, fontWeight: "bold" }}>80%</span>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ color: "#39ff14", fontSize: 13, fontWeight: "bold" }}>+50 XP <span style={{ color: "#94a3b8", fontWeight: "500" }}>Reward</span></span>
              <button className="btn-outline">Join Challenge</button>
            </div>
          </div>

          {/* Today's Plan */}
          <div className="workout-card">
            <div style={{ zIndex: 2, position: "relative" }}>
              <p style={{ color: "#39ff14", fontSize: 11, fontWeight: "bold", margin: "0 0 6px", letterSpacing: 1 }}>TODAY'S PLAN</p>
              <h2 style={{ color: "white", fontSize: 26, fontWeight: "900", margin: 0 }}>Full Body Strength</h2>
              <div style={{ display: "flex", gap: 15, flexWrap: "wrap", margin: "12px 0 20px" }}>
                <span style={{ display: "flex", alignItems: "center", gap: 6, color: "#e2e8f0", fontSize: 13, fontWeight: "600" }}><Timer size={15}/> 45 min</span>
                <span style={{ display: "flex", alignItems: "center", gap: 6, color: "#e2e8f0", fontSize: 13, fontWeight: "600" }}><Flame size={15}/> 420 kcal</span>
                <span style={{ display: "flex", alignItems: "center", gap: 6, color: "#e2e8f0", fontSize: 13, fontWeight: "600" }}><Activity size={15}/> Advanced</span>
              </div>
              <button className="btn-solid">
                Resume Workout <Play fill="#020617" size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* 5. METRICS GRID */}
        <div className="stats-grid">
          <StatCard icon={<span className="xp-badge">XP</span>} title="XP TODAY" value="120" subText="+12%" color="#39ff14" isPositive={true} points="0,20 20,18 40,10 60,15 80,5 100,2" />
          <StatCard icon={<Flame color="#ff7b00" size={18} fill="#ff7b00"/>} title="CALORIES" value="2,450" subText="Goal: 2,800" color="#ff7b00" points="0,20 20,15 40,18 60,8 80,12 100,5" />
          <StatCard icon={<Activity color="#39ff14" size={18}/>} title="RECOVERY" value="85%" subText="Good" color="#39ff14" isPositive={true} points="0,15 20,20 40,10 60,18 80,5 100,8" />
          <StatCard icon={<Moon color="#9d4edd" size={18} fill="#9d4edd"/>} title="SLEEP SCORE" value="78" subText="Good" color="#9d4edd" points="0,10 20,15 40,5 60,12 80,8 100,18" />
          <StatCard icon={<Droplet color="#3ea6ff" size={18} fill="#3ea6ff"/>} title="WATER INTAKE" value="2.6 L" subText="Goal: 3.0 L" color="#3ea6ff" points="0,18 20,10 40,15 60,5 80,10 100,5" />
          <StatCard icon={<Trophy color="#ffaa00" size={18}/>} title="STREAK" value="7" subText="Days" color="#ffaa00" points="0,20 25,18 50,15 75,10 100,5" />
        </div>

        {/* 6. BOTTOM WIDGETS */}
        <div className="widgets-grid">
          {/* AI Coach */}
          <div className="card-dark" style={{ border: "1px solid rgba(62,166,255,0.3)" }}>
            <h3 style={{ color: "#3ea6ff", fontSize: 12, fontWeight: "bold", margin: "0 0 15px", letterSpacing: 1, textTransform: "uppercase" }}>AI Coach Insight</h3>
            <div style={{ display: "flex", gap: 15, alignItems: "center", marginBottom: 20 }}>
              <Brain size={50} color="#3ea6ff" strokeWidth={1.5} />
              <p style={{ color: "#e2e8f0", fontSize: 13, lineHeight: 1.5, margin: 0, fontWeight: "500" }}>
                Your recovery is excellent and energy is high.<br/><br/>Perfect day to push your limits! 🚀
              </p>
            </div>
            <button style={{ width: "100%", background: "transparent", border: "1px solid rgba(62,166,255,0.3)", color: "#3ea6ff", padding: "10px", borderRadius: 12, fontSize: 13, fontWeight: "bold", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              View Full Report <ChevronRight size={16}/>
            </button>
          </div>

          {/* Leaderboard */}
          <div className="card-dark">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <h3 style={{ color: "#ffd700", fontSize: 12, fontWeight: "bold", margin: 0, letterSpacing: 1, textTransform: "uppercase" }}>Leaderboard Top 3</h3>
              <span style={{ color: "#94a3b8", fontSize: 12, cursor: "pointer", display: "flex", alignItems: "center", fontWeight: "600" }}>View All <ChevronRight size={14}/></span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around", alignItems: "flex-end", height: 110 }}>
              <div className="podium-item">
                <div style={{ position: "absolute", top:-6, left:-6, width:20, height:20, background:"#c0c0c0", borderRadius:"50%", color:"#020617", fontSize:11, fontWeight:"bold", display:"flex", justifyContent:"center", alignItems:"center", zIndex:2 }}>2</div>
                <img src="https://i.pravatar.cc/150?img=11" className="lb-avatar" style={{ width: 50, height: 50, borderColor: "#c0c0c0" }} alt="2"/>
                <span style={{ color:"white", fontSize:13, fontWeight:"bold" }}>Dinesh</span>
                <span style={{ color:"#39ff14", fontSize:11, fontWeight:"bold" }}>1,100 XP</span>
              </div>
              <div className="podium-item" style={{ zIndex: 2 }}>
                <div style={{ position: "absolute", top:-8, left:-8, width:24, height:24, background:"#ffd700", borderRadius:"50%", color:"#020617", fontSize:12, fontWeight:"bold", display:"flex", justifyContent:"center", alignItems:"center", zIndex:2 }}>1</div>
                <img src="https://i.pravatar.cc/150?img=5" className="lb-avatar" style={{ width: 65, height: 65, borderColor: "#ffd700", borderWidth: 3 }} alt="1"/>
                <span style={{ color:"white", fontSize:15, fontWeight:"bold" }}>Pragati</span>
                <span style={{ color:"#ffd700", fontSize:11, fontWeight:"bold" }}>1,250 XP</span>
              </div>
              <div className="podium-item">
                <div style={{ position: "absolute", top:-6, left:-6, width:20, height:20, background:"#cd7f32", borderRadius:"50%", color:"#020617", fontSize:11, fontWeight:"bold", display:"flex", justifyContent:"center", alignItems:"center", zIndex:2 }}>3</div>
                <img src="https://i.pravatar.cc/150?img=12" className="lb-avatar" style={{ width: 50, height: 50, borderColor: "#cd7f32" }} alt="3"/>
                <span style={{ color:"white", fontSize:13, fontWeight:"bold" }}>Athlete X</span>
                <span style={{ color:"#39ff14", fontSize:11, fontWeight:"bold" }}>980 XP</span>
              </div>
            </div>
          </div>

          {/* Upcoming Event */}
          <div className="card-dark">
            <h3 style={{ color: "#9d4edd", fontSize: 12, fontWeight: "bold", margin: "0 0 15px", letterSpacing: 1, textTransform: "uppercase" }}>Upcoming Event</h3>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 15 }}>
              <Trophy size={50} color="#9d4edd" strokeWidth={1.5} style={{ marginBottom: 10 }} />
              <h4 style={{ color: "white", fontSize: 15, margin: "0 0 4px", fontWeight: "bold", textAlign: "center", lineHeight: 1.3 }}>State Powerlifting<br/>Championship 2025</h4>
              <p style={{ color: "#94a3b8", fontSize: 12, margin: 0, fontWeight: "600" }}>12 May 2025</p>
            </div>
            <button style={{ width: "100%", background: "rgba(157,78,221,0.1)", border: "1px solid rgba(157,78,221,0.5)", color: "white", padding: "10px", borderRadius: 12, fontSize: 13, fontWeight: "bold", cursor: "pointer" }}>Register Now</button>
          </div>
        </div>

        {/* 7. ALL FEATURES */}
        <div style={{ marginBottom: 30 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
            <h2 style={{ color: "white", fontSize: 15, margin: 0, fontWeight: "900", letterSpacing: 1.5 }}>ALL FEATURES</h2>
            <span style={{ color: "#94a3b8", fontSize: 13, cursor: "pointer", display: "flex", alignItems: "center", fontWeight: "600" }}>View All <ChevronRight size={14}/></span>
          </div>
          
          <div className="features-grid">
            {ALL_FEATURES_DATA.map((item) => (
              <div key={item.id} className="feature-box">
                <div className="feature-icon-cont">
                  {React.cloneElement(item.icon, { color: item.color, strokeWidth: 1.5 })}
                </div>
                <span className="feature-text">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 8. BOTTOM NAVIGATION */}
      <div className="bottom-nav">
        <div className="nav-item active">
          <Home color="#39ff14" size={24} />
          <span className="nav-text active">Home</span>
        </div>
        <div className="nav-item">
          <Dumbbell color="#94a3b8" size={24} />
          <span className="nav-text">Training</span>
        </div>
        <div className="nav-item">
          <Trophy color="#94a3b8" size={24} />
          <span className="nav-text">Tournaments</span>
        </div>
        <div className="nav-item">
          <Flame color="#94a3b8" size={24} />
          <span className="nav-text">DP</span>
        </div>
        <div className="nav-item">
          <User color="#94a3b8" size={24} />
          <span className="nav-text">Profile</span>
        </div>
      </div>

    </div>
  );
  }
