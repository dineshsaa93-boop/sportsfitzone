"use client";

import React, { useState } from "react";
import {
  Menu, Search, Bell, SlidersHorizontal, Trophy, Flame, Hexagon, Shield, Target,
  Clock3, Play, BarChart3, HeartPulse, MoonStar, Droplets, RefreshCcw, Brain, Crown, Medal,
  Award, Activity, Apple, LineChart, Zap, Timer, Calendar, NotebookPen, GraduationCap,
  Gamepad2, MonitorPlay, Gift, User, MessageCircle, Dumbbell, ClipboardList, CircleHelp,
  BookOpen, Users, Bot, Home, ChevronRight
} from "lucide-react";

// ==========================================
// 1. DYNAMIC DATA SOURCE 
// ==========================================
const APP_DATA = {
  user: {
    name: "DINESH",
    level: "Elite Athlete",
    quoteLine1: "Discipline today,",
    quoteLine2: "Domination tomorrow.",
    readiness: 92,
    streak: 7,
    recovery: 85,
    xp: 468,
    flames: 7,
    trophies: 12
  },
  rank: {
    title: "LEVEL 1 ATHLETE",
    subtitle: "Top 15% Among All Athletes",
    global: { rank: "#24", percentile: "Top 15%" },
    india: { rank: "#5", percentile: "Top 5%" },
    academy: { rank: "#1", percentile: "Top 1%" }
  },
  challenge: {
    title: "100 Pushups 💪",
    progress: 80,
    reward: "+50 XP",
  },
  plan: {
    title: "Full Body Strength",
    duration: "45 min",
    calories: "420 kcal",
    level: "Advanced"
  },
  metrics: [
    { id: 1, type: "xp", title: "XP TODAY", value: "120", sub: "+12%", color: "#39ff14", points: "0,25 20,20 40,15 60,18 80,5 100,2" },
    { id: 2, type: "calories", title: "CALORIES", value: "2,450", sub: "Goal: 2,800", color: "#ff7300", points: "0,25 20,15 40,20 60,10 80,15 100,5" },
    { id: 3, type: "recovery", title: "RECOVERY", value: "85%", sub: "Good", color: "#39ff14", points: "0,20 20,25 40,15 60,20 80,10 100,5" },
    { id: 4, type: "sleep", title: "SLEEP SCORE", value: "78", sub: "Good", color: "#b266ff", points: "0,15 20,20 40,10 60,18 80,12 100,22" },
    { id: 5, type: "water", title: "WATER INTAKE", value: "2.6 L", sub: "Goal: 3.0 L", color: "#00bfff", points: "0,22 20,15 40,20 60,10 80,15 100,8" },
    { id: 6, type: "streak", title: "STREAK", value: "7", sub: "Days", color: "#ffb300", points: "0,25 20,22 40,18 60,15 80,10 100,5" }
  ],
  leaderboard: [
    { rank: 2, name: "Athlete Y", xp: "1,100 XP", img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop", color: "#c0c0c0" },
    { rank: 1, name: "Pragati", xp: "1,250 XP", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop", color: "#ffd700" },
    { rank: 3, name: "Athlete X", xp: "980 XP", img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop", color: "#cd7f32" }
  ],
  features: [
    { id: 1, title: "Diet Planner", icon: Apple, color: "#39FF14" },
    { id: 2, title: "Progress", icon: LineChart, color: "#39FF14" },
    { id: 3, title: "Transformation", icon: Zap, color: "#00BFFF" },
    { id: 4, title: "Sleep", icon: MoonStar, color: "#B266FF" },
    { id: 5, title: "Water Tracker", icon: Droplets, color: "#00BFFF" },
    { id: 6, title: "Workout Timer", icon: Timer, color: "#3EA6FF" },
    { id: 7, title: "Quiz", icon: Brain, color: "#FF4D88" },
    { id: 8, title: "Schedule", icon: Calendar, color: "#FF6666" },
    { id: 9, title: "Notes", icon: NotebookPen, color: "#FFD700" },
    { id: 10, title: "Leaderboard", icon: Crown, color: "#FFD700" },
    { id: 11, title: "Courses", icon: GraduationCap, color: "#00BFFF" },
    { id: 12, title: "Tournaments", icon: Trophy, color: "#FFD700" },
    { id: 13, title: "Match Room", icon: Gamepad2, color: "#C0C0C0" },
    { id: 14, title: "Live Match", icon: MonitorPlay, color: "#FF4D88" },
    { id: 15, title: "Rewards", icon: Gift, color: "#FFD700" },
    { id: 16, title: "Athlete Profile", icon: User, color: "#3EA6FF" },
    { id: 17, title: "Team Chat", icon: MessageCircle, color: "#39FF14" },
    { id: 18, title: "All Training", icon: Dumbbell, color: "#7B61FF" },
    { id: 19, title: "All Tests", icon: ClipboardList, color: "#00BFFF" },
    { id: 20, title: "My Doubts", icon: CircleHelp, color: "#B266FF" },
    { id: 21, title: "Sports Books", icon: BookOpen, color: "#FFB300" },
    { id: 22, title: "Community", icon: Users, color: "#FFD700" },
    { id: 23, title: "Challenges", icon: Trophy, color: "#FF4D88" },
    { id: 24, title: "AI Coach", icon: Bot, color: "#00E5FF" },
    { id: 25, title: "Events", icon: Calendar, color: "#B266FF" },
  ]
};

// Custom Sparkline Component
const Sparkline = ({ color, points }) => (
  <svg width="100%" height="30" viewBox="0 0 100 30" preserveAspectRatio="none" className="mt-auto">
    <polyline points={points} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: `drop-shadow(0px 4px 4px ${color}40)` }} />
  </svg>
);

// Progress Circle Component
const CircularProgress = ({ percentage }) => {
  const radius = 55;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex flex-col items-center justify-center w-[160px] h-[160px]">
      <svg width="160" height="160" viewBox="0 0 160 160" className="-rotate-90">
        <defs>
          <linearGradient id="progGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#39FF14" />
            <stop offset="100%" stopColor="#00BFFF" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>
        <circle cx="80" cy="80" r={radius} stroke="rgba(255,255,255,0.05)" strokeWidth="10" fill="none" />
        <circle cx="80" cy="80" r={radius} stroke="url(#progGrad)" strokeWidth="10" fill="none" strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} strokeLinecap="round" filter="url(#glow)" />
      </svg>
      <div className="absolute flex flex-col items-center justify-center inset-0 z-10 pt-2">
        <Activity size={30} color="#39FF14" strokeWidth={2.5} className="mb-[-2px]" />
        <span className="text-white text-4xl font-black leading-none">{percentage}%</span>
        <span className="text-[#39FF14] text-[10px] font-bold tracking-widest mt-1">READINESS</span>
      </div>
    </div>
  );
};

export default function SportsFitZone() {
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const displayedFeatures = showAllFeatures ? APP_DATA.features : APP_DATA.features.slice(0, 16);

  return (
    <div className="exact-app-wrapper">
      <style>{`
        * { box-sizing: border-box; font-family: 'Inter', system-ui, sans-serif; }
        .exact-app-wrapper { background: #020817; min-height: 100vh; color: white; padding-bottom: 90px; }
        .container { max-width: 1200px; margin: 0 auto; padding: 20px; width: 100%; overflow-x: hidden; }
        
        .flex-center { display: flex; align-items: center; justify-content: center; }
        .flex-between { display: flex; align-items: center; justify-content: space-between; }
        .card-panel { background: #081120; border: 1px solid rgba(255,255,255,0.08); border-radius: 20px; padding: 20px; box-shadow: 0 4px 20px rgba(0,0,0,0.2); }
        
        .top-stats-pill { background: #081120; border: 1px solid rgba(255,255,255,0.08); padding: 6px 14px; border-radius: 30px; display: flex; align-items: center; gap: 8px; font-size: 15px; font-weight: 800; }
        
        .grid-hero { display: grid; grid-template-columns: 1.6fr 1fr; gap: 20px; margin-bottom: 20px; }
        .grid-mid { display: grid; grid-template-columns: 1fr 1.5fr; gap: 20px; margin-bottom: 20px; }
        .grid-stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; margin-bottom: 20px; }
        .grid-widgets { display: grid; grid-template-columns: 1fr 1.5fr 1fr; gap: 20px; margin-bottom: 30px; }
        .grid-features { display: grid; grid-template-columns: repeat(auto-fit, minmax(80px, 1fr)); gap: 20px 10px; transition: all 0.3s ease; justify-items: center; }
        
        .hero-banner { 
          background: linear-gradient(90deg, #020817 40%, rgba(2,8,23,0.3) 100%), url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop'); 
          background-size: cover; background-position: top right; border-radius: 20px; padding: 30px; 
          border: 1px solid rgba(57,255,20,0.1); display: flex; justify-content: space-between; align-items: center;
        }
        .workout-banner {
          background: linear-gradient(90deg, #020817 60%, rgba(2,8,23,0.1) 100%), url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200&auto=format&fit=crop');
          background-size: cover; background-position: center right;
        }
        
        .search-bar { background: #081120; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 16px 20px; display: flex; align-items: center; gap: 15px; margin-bottom: 25px; }
        .stat-card-small { display: flex; flex-direction: column; justify-content: space-between; height: 160px; }
        
        .feature-icon-box {
          width: 65px; height: 65px; border-radius: 16px; 
          display: flex; justify-content: center; align-items: center; 
          background: rgba(255,255,255,0.02); transition: all 0.2s; margin-bottom: 8px;
        }
        .feature-item-wrapper { display: flex; flex-direction: column; align-items: center; cursor: pointer; width: 100%; max-width: 90px; }
        .feature-item-wrapper:hover .feature-icon-box { transform: translateY(-3px); background: rgba(255,255,255,0.05); }
        
        .progress-bar-bg { width: 100%; height: 8px; background: rgba(255,255,255,0.1); border-radius: 10px; overflow: hidden; margin: 15px 0; }
        .progress-bar-fill { height: 100%; background: linear-gradient(90deg, #84ff00, #39FF14); border-radius: 10px; box-shadow: 0 0 10px rgba(57,255,20,0.4); }
        
        .btn-green { background: #39FF14; color: #000; padding: 12px 24px; border-radius: 12px; font-weight: 900; font-size: 15px; border: none; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; }
        .show-more-btn { width: 100%; background: #081120; border: 1px solid rgba(255,255,255,0.08); color: white; padding: 15px; border-radius: 16px; font-weight: bold; font-size: 16px; cursor: pointer; display: flex; justify-content: center; align-items: center; gap: 10px; margin-top: 20px; }
        
        .bottom-nav { position: fixed; bottom: 0; left: 0; right: 0; background: rgba(2, 8, 23, 0.95); backdrop-filter: blur(10px); border-top: 1px solid rgba(255,255,255,0.05); display: flex; justify-content: space-around; padding: 15px 10px 25px; z-index: 1000; }

        @media (max-width: 850px) {
          .grid-hero, .grid-mid { grid-template-columns: 1fr; }
          .hero-banner { flex-direction: column; align-items: flex-start; gap: 30px; }
          .hero-circular-wrap { align-self: center; } 
          .top-stats { width: 100%; overflow-x: auto; padding-bottom: 5px; justify-content: flex-start; }
          .grid-features { grid-template-columns: repeat(4, 1fr); }
        }
      `}</style>
     <div className="container">
        
        {/* TOP HEADER */}
        <header className="flex-between" style={{ flexWrap: 'wrap', gap: '20px', marginBottom: '25px' }}>
          <div className="flex-center" style={{ gap: '15px' }}>
            <Menu color="white" size={32} strokeWidth={2.5} />
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
              <span style={{ color: "white", fontSize: 20, fontWeight: 900, fontStyle: "italic", letterSpacing: 1.5 }}>SPORTS</span>
              <span style={{ color: "#39FF14", fontSize: 20, fontWeight: 900, fontStyle: "italic", letterSpacing: 1.5 }}>FIT ZONE</span>
            </div>
          </div>
          
          <div className="flex-center top-stats" style={{ gap: '12px' }}>
            <div className="top-stats-pill">
              <Trophy size={24} color="#FFD700" style={{ filter: 'drop-shadow(0 0 15px #FFD700)' }} />
              <span style={{ color: "#FFD700" }}>{APP_DATA.user.trophies}</span>
            </div>
            <div className="top-stats-pill">
              <Flame size={24} color="#FF7300" style={{ filter: 'drop-shadow(0 0 15px #FF7300)' }} />
              <span style={{ color: "#FF7300" }}>{APP_DATA.user.flames}</span>
            </div>
            <div className="top-stats-pill">
              <Hexagon size={24} color="#39FF14" style={{ filter: 'drop-shadow(0 0 15px #39FF14)' }} />
              <span style={{ color: "white" }}>{APP_DATA.user.xp}</span>
            </div>
            <div style={{ position: 'relative', marginLeft: '5px' }}>
              <div style={{ width: 45, height: 45, borderRadius: '50%', background: '#081120', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Bell size={24} color="white" />
              </div>
              <div style={{ position: 'absolute', top: 2, right: 2, width: 12, height: 12, background: '#39FF14', borderRadius: '50%', border: '2px solid #020817' }}></div>
            </div>
          </div>
        </header>

        {/* SEARCH BAR */}
        <div className="search-bar">
          <Search color="#94a3b8" size={22} />
          <input type="text" placeholder="Search workouts, plans, tournaments..." style={{ flex: 1, background: 'transparent', border: 'none', color: 'white', fontSize: 16, outline: 'none' }} />
          <SlidersHorizontal size={22} color="#B266FF" />
        </div>

        {/* HERO GRID */}
        <div className="grid-hero">
          <div className="hero-banner">
            <div style={{ zIndex: 2 }}>
              <p style={{ color: "#e2e8f0", fontSize: 16, margin: "0 0 5px", fontWeight: "500" }}>Good Evening,</p>
              <h1 style={{ color: "white", fontSize: 48, fontWeight: 900, margin: "0 0 8px", letterSpacing: 1.5 }}>{APP_DATA.user.name}</h1>
              
              <div className="flex-center" style={{ gap: 6, marginBottom: 20, width: 'fit-content' }}>
                <span style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>{APP_DATA.user.level}</span>
                <Award size={20} color="#39FF14" />
              </div>
              
              <p style={{ color: "white", fontSize: 16, lineHeight: 1.6, margin: "0 0 25px" }}>
                {APP_DATA.user.quoteLine1}<br/>
                <span style={{ color: "#39FF14", fontWeight: "bold" }}>{APP_DATA.user.quoteLine2}</span>
              </p>

              <div className="flex-center" style={{ gap: 25, flexWrap: "wrap", justifyContent: 'flex-start' }}>
                <div className="flex-center" style={{ gap: 10 }}>
                  <Flame size={30} color="#FF7300" />
                  <div><div style={{ color: "white", fontWeight: 900, fontSize: 16 }}>{APP_DATA.user.streak}</div><div style={{ color: "#94a3b8", fontSize: 12 }}>Day Streak</div></div>
                </div>
                <div className="flex-center" style={{ gap: 10 }}>
                  <Activity size={30} color="#39FF14" />
                  <div><div style={{ color: "white", fontWeight: 900, fontSize: 16 }}>{APP_DATA.user.readiness}%</div><div style={{ color: "#94a3b8", fontSize: 12 }}>Readiness</div></div>
                </div>
                <div className="flex-center" style={{ gap: 10 }}>
                  <HeartPulse size={30} color="#39FF14" />
                  <div><div style={{ color: "white", fontWeight: 900, fontSize: 16 }}>{APP_DATA.user.recovery}%</div><div style={{ color: "#94a3b8", fontSize: 12 }}>Recovery</div></div>
                </div>
              </div>
            </div>
            <div className="hero-circular-wrap" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <CircularProgress percentage={APP_DATA.user.readiness} />
            </div>
          </div>

          <div className="card-panel rank-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div className="flex-center" style={{ justifyContent: 'flex-start', gap: 20, marginBottom: 25 }}>
              <Shield size={60} color="#B266FF" style={{ filter: "drop-shadow(0 0 25px #B266FF)" }} />
              <div>
                <p style={{ color: "#B266FF", fontSize: 12, fontWeight: "bold", margin: "0 0 5px", letterSpacing: 1.5 }}>YOUR RANK</p>
                <h2 style={{ color: "white", fontSize: 20, fontWeight: 900, margin: "0 0 5px" }}>{APP_DATA.rank.title}</h2>
                <p style={{ color: "#94a3b8", fontSize: 13, margin: 0 }}>{APP_DATA.rank.subtitle}</p>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", background: "rgba(0,0,0,0.3)", padding: 15, borderRadius: 16 }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
                <span style={{ fontSize: 10, color: "#94a3b8", fontWeight: "bold" }}>GLOBAL RANK</span>
                <span style={{ fontSize: 18, color: "white", fontWeight: 900, display: "flex", alignItems: "center", gap: 5 }}><Trophy size={20} color="#39FF14" /> {APP_DATA.rank.global.rank}</span>
              </div>
              <div style={{ width: 1, background: 'rgba(255,255,255,0.1)' }}></div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
                <span style={{ fontSize: 10, color: "#94a3b8", fontWeight: "bold" }}>ACADEMY RANK</span>
                <span style={{ fontSize: 18, color: "white", fontWeight: 900, display: "flex", alignItems: "center", gap: 5 }}><Crown size={20} color="#FFD700" /> {APP_DATA.rank.academy.rank}</span>
              </div>
            </div>
          </div>
        </div>

        {/* MID GRID */}
        <div className="grid-mid">
          <div className="card-panel">
            <div className="flex-between" style={{ alignItems: "flex-start" }}>
              <div>
                <p style={{ color: "#39FF14", fontSize: 12, fontWeight: "bold", margin: "0 0 8px", letterSpacing: 1 }}>DAILY CHALLENGE</p>
                <h2 style={{ color: "white", fontSize: 26, fontWeight: 900, margin: 0 }}>{APP_DATA.challenge.title}</h2>
              </div>
              <Target size={55} color="#39FF14" style={{ filter: "drop-shadow(0 0 15px #39FF14)" }} />
            </div>
            <div className="progress-bar-bg"><div className="progress-bar-fill" style={{ width: `${APP_DATA.challenge.progress}%` }}></div></div>
            <div style={{ textAlign: "right", color: "white", fontSize: 14, fontWeight: "bold", marginTop: -5 }}>{APP_DATA.challenge.progress}%</div>
            <div className="flex-between" style={{ marginTop: 15 }}>
              <span style={{ color: "#39FF14", fontSize: 15, fontWeight: "bold" }}>{APP_DATA.challenge.reward}</span>
              <button style={{ background: "transparent", border: "1px solid #39FF14", color: "#39FF14", padding: "8px 18px", borderRadius: 20, fontSize: 13, fontWeight: "bold" }}>Join</button>
            </div>
          </div>

          <div className="card-panel workout-banner" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ zIndex: 2, position: "relative" }}>
              <p style={{ color: "#39FF14", fontSize: 12, fontWeight: "bold", margin: "0 0 8px" }}>TODAY'S PLAN</p>
              <h2 style={{ color: "white", fontSize: 30, fontWeight: 900, margin: 0 }}>{APP_DATA.plan.title}</h2>
              <div className="flex-center" style={{ gap: 20, justifyContent: "flex-start", margin: "15px 0 25px" }}>
                <span className="flex-center" style={{ gap: 6, color: "#e2e8f0", fontSize: 14 }}><Clock3 size={20} color="white" /> {APP_DATA.plan.duration}</span>
                <span className="flex-center" style={{ gap: 6, color: "#e2e8f0", fontSize: 14 }}><Flame size={20} color="#FF7300" /> {APP_DATA.plan.calories}</span>
                <span className="flex-center" style={{ gap: 6, color: "#e2e8f0", fontSize: 14 }}><BarChart3 size={20} color="#B266FF" /> {APP_DATA.plan.level}</span>
              </div>
              <button className="btn-green">Resume Workout <Play size={28} color="black" fill="black" /></button>
            </div>
          </div>
        </div>

        {/* HEALTH STATS GRID */}
        <div className="grid-stats">
          {APP_DATA.metrics.map((stat) => {
            const Icon = stat.type === 'xp' ? Hexagon : stat.type === 'calories' ? Flame : stat.type === 'recovery' ? HeartPulse : stat.type === 'sleep' ? MoonStar : stat.type === 'water' ? Droplets : RefreshCcw;
            return (
              <div key={stat.id} className="card-panel stat-card-small">
                <div className="flex-center" style={{ gap: 8, justifyContent: "flex-start", marginBottom: 15 }}>
                  <Icon size={40} color={stat.color} />
                  <span style={{ color: "#94a3b8", fontSize: 12, fontWeight: "bold" }}>{stat.title}</span>
                </div>
                <h2 style={{ color: "white", fontSize: 32, fontWeight: 900, margin: "0 0 5px" }}>{stat.value}</h2>
                <Sparkline color={stat.color} points={stat.points} />
              </div>
            );
          })}
        </div>

        {/* WIDGETS GRID */}
        <div className="grid-widgets">
          <div className="card-panel">
            <h3 style={{ color: "#3EA6FF", fontSize: 13, fontWeight: "bold", margin: "0 0 20px" }}>AI COACH INSIGHT</h3>
            <div className="flex-center" style={{ gap: 15, alignItems: "flex-start", marginBottom: 25 }}>
              <Brain size={60} color="#3EA6FF" style={{ flexShrink: 0 }} />
              <p style={{ color: "#e2e8f0", fontSize: 14, lineHeight: 1.6, margin: 0 }}>Recovery is excellent. Perfect day to push limits! 🚀</p>
            </div>
            <button style={{ width: "100%", background: "transparent", border: "1px solid rgba(62,166,255,0.3)", color: "#3EA6FF", padding: "12px", borderRadius: 12 }}>Full Report</button>
          </div>

          <div className="card-panel">
            <h3 style={{ color: "#FFD700", fontSize: 13, fontWeight: "bold", margin: "0 0 30px" }}>LEADERBOARD</h3>
            <div className="flex-center" style={{ justifyContent: "space-around", alignItems: "flex-end", height: 120 }}>
              {APP_DATA.leaderboard.map((lb) => (
                <div key={lb.rank} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <Medal size={30} color={lb.rank === 1 ? "#FFD700" : lb.rank === 2 ? "#C0C0C0" : "#CD7F32"} style={{ marginBottom: 5 }} />
                  <img src={lb.img} alt={`Rank ${lb.rank}`} className="podium-avatar" style={{ width: lb.rank === 1 ? 65 : 50, height: lb.rank === 1 ? 65 : 50, borderColor: lb.color, marginBottom: 10 }} />
                  <span style={{ color: "white", fontSize: lb.rank === 1 ? 16 : 14, fontWeight: "bold" }}>{lb.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card-panel">
            <h3 style={{ color: "#B266FF", fontSize: 13, fontWeight: "bold", margin: "0 0 20px" }}>UPCOMING EVENT</h3>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 20 }}>
              <Trophy size={60} color="#B266FF" style={{ marginBottom: 15 }} />
              <h4 style={{ color: "white", fontSize: 16, margin: "0 0 5px", fontWeight: "bold", textAlign: "center" }}>State Powerlifting</h4>
            </div>
            <button style={{ width: "100%", background: "rgba(178,102,255,0.15)", border: "1px solid #B266FF", color: "white", padding: "12px", borderRadius: 12 }}>Register</button>
          </div>
        </div>

        {/* EXACT FEATURES GRID (SIZE 42) */}
        <div className="card-panel" style={{ marginBottom: 40, padding: "25px 20px" }}>
          <div className="grid-features">
            {displayedFeatures.map((item) => (
              <div key={item.id} className="feature-item-wrapper">
                <div className="feature-icon-box" style={{ border: `1px solid ${item.color}40` }}>
                  <item.icon color={item.color} size={42} strokeWidth={1.5} style={{ filter: `drop-shadow(0 0 10px ${item.color}80)` }} />
                </div>
                <span style={{ color: "#94a3b8", fontSize: 12, textAlign: "center", fontWeight: "600", marginTop: 5 }}>{item.title}</span>
              </div>
            ))}
          </div>

          <button className="show-more-btn" onClick={() => setShowAllFeatures(!showAllFeatures)}>
            {showAllFeatures ? <>Show Less <span style={{ color: "#FFD700" }}>🔼</span></> : <>Show More <span style={{ color: "#FFD700" }}>🔽</span></>}
          </button>
        </div>
      </div>

      {/* BOTTOM NAVIGATION */}
      <div className="bottom-nav">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}><Home color="#39FF14" size={26} /><span style={{ color: "#39FF14", fontSize: 12, marginTop: 6, fontWeight: "bold" }}>Home</span></div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: 0.6 }}><Dumbbell color="#94a3b8" size={26} /><span style={{ color: "#94a3b8", fontSize: 12, marginTop: 6 }}>Training</span></div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: 0.6 }}><Trophy color="#94a3b8" size={26} /><span style={{ color: "#94a3b8", fontSize: 12, marginTop: 6 }}>Tournaments</span></div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: 0.6 }}><Flame color="#94a3b8" size={26} /><span style={{ color: "#94a3b8", fontSize: 12, marginTop: 6 }}>DP</span></div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: 0.6 }}><User color="#94a3b8" size={26} /><span style={{ color: "#94a3b8", fontSize: 12, marginTop: 6 }}>Profile</span></div>
      </div>
    </div>
  );
  }
