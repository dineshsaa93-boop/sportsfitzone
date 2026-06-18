"use client";
import React from 'react';
import { 
  Bell, Search, SlidersHorizontal, Trophy, Flame, Target, 
  ChevronRight, Play, Brain, HeartPulse, Moon, Droplet, 
  Dumbbell, Home, Calendar, User, Zap
} from 'lucide-react';

export default function SportsFitZoneDashboard() {
  return (
    <div className="min-h-screen bg-[#070b11] text-white font-sans pb-24 selection:bg-green-500/30">
      
      {/* --- TOP HEADER --- */}
      <header className="px-6 pt-6 pb-4 flex justify-between items-center bg-[#070b11] sticky top-0 z-40">
        <div className="flex items-center gap-3">
          {/* Hamburger Menu Icon */}
          <div className="flex flex-col gap-1.5 cursor-pointer">
            <div className="w-6 h-0.5 bg-white rounded-full"></div>
            <div className="w-6 h-0.5 bg-white rounded-full"></div>
            <div className="w-4 h-0.5 bg-white rounded-full"></div>
          </div>
          {/* Logo */}
          <div className="text-xl font-black italic tracking-widest text-[#39ff14]">
            SPORTS<br/>
            <span className="text-white text-[10px] tracking-widest not-italic uppercase absolute mt-[-4px]">Fit Zone</span>
          </div>
        </div>

        {/* Stats & Notifications */}
        <div className="flex gap-2 items-center">
          <div className="flex items-center gap-1.5 bg-[#121822] px-3 py-1.5 rounded-full text-yellow-500 border border-yellow-500/20 text-sm font-bold">
            <Trophy size={14} /> 12
          </div>
          <div className="flex items-center gap-1.5 bg-[#121822] px-3 py-1.5 rounded-full text-orange-500 border border-orange-500/20 text-sm font-bold">
            <Flame size={14} /> 7
          </div>
          <div className="flex items-center gap-1.5 bg-[#121822] px-3 py-1.5 rounded-full text-[#39ff14] border border-[#39ff14]/20 text-sm font-bold">
             <span className="border border-[#39ff14] rounded-sm px-1 text-[10px]">XP</span> 468
          </div>
          <button className="bg-[#121822] p-2 rounded-full relative border border-gray-800 ml-1">
            <Bell size={18} className="text-gray-300" />
            <span className="absolute top-1.5 right-2 w-2 h-2 bg-[#39ff14] rounded-full border border-[#121822]"></span>
          </button>
        </div>
      </header>

      <div className="px-6 space-y-4 max-w-7xl mx-auto">
        
        {/* --- SEARCH BAR --- */}
        <div className="relative flex items-center w-full">
          <Search size={18} className="absolute left-4 text-gray-500" />
          <input 
            type="text" 
            placeholder="Search workouts, plans, tournaments..." 
            className="w-full bg-[#121822] border border-[#1e293b] rounded-2xl py-3.5 pl-11 pr-12 text-sm focus:outline-none focus:border-[#39ff14] text-gray-300 transition-colors"
          />
          <SlidersHorizontal size={18} className="absolute right-4 text-purple-400 cursor-pointer" />
        </div>

        {/* --- HERO & READINESS SECTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          
          {/* Main Hero Card */}
          <div className="lg:col-span-8 bg-gradient-to-br from-[#111926] to-[#0a0f16] rounded-[24px] p-6 border border-[#1e293b] relative overflow-hidden flex flex-col justify-between min-h-[220px]">
            {/* Background Image Placeholder - Replace with your athlete PNG */}
            <div className="absolute right-0 top-0 w-1/2 h-full opacity-40 mix-blend-screen pointer-events-none" 
                 style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1000&auto=format&fit=crop')", backgroundSize: 'cover', backgroundPosition: 'center', WebkitMaskImage: 'linear-gradient(to left, black, transparent)' }}>
            </div>

            <div className="relative z-10">
              <h1 className="text-5xl font-black tracking-tighter mb-1 mt-2">DINESH</h1>
              <div className="flex items-center gap-1.5 text-[#39ff14] text-xs font-bold mb-6 tracking-wide">
                Elite Athlete <Zap size={14} fill="#39ff14" />
              </div>
              
              <p className="text-[13px] text-gray-400 mb-6 leading-relaxed font-medium">
                Discipline today,<br/>
                <span className="text-[#39ff14]">Domination</span> tomorrow.
              </p>
            </div>

            <div className="relative z-10 inline-flex items-center gap-2 bg-[#1a2332]/80 backdrop-blur-md border border-gray-700/50 rounded-full py-2 px-4 w-fit">
              <div className="w-3 h-3 bg-[#39ff14] rounded-full shadow-[0_0_8px_#39ff14]"></div>
              <div>
                <p className="text-[#39ff14] text-xs font-bold">Ready To Train</p>
                <p className="text-[10px] text-gray-400">Your body. Your mind. Your moment.</p>
              </div>
            </div>
            
            {/* Top left decorative green line */}
            <div className="absolute top-6 left-0 w-1 h-6 bg-[#39ff14] rounded-r-md shadow-[0_0_10px_#39ff14]"></div>
          </div>

          {/* Readiness Card */}
          <div className="lg:col-span-4 bg-[#0d1219] rounded-[24px] p-6 border border-[#1e293b] flex flex-col items-center justify-center relative">
             {/* Badge */}
             <div className="absolute top-4 right-4 flex flex-col items-end">
                <ShieldIcon />
                <p className="text-[10px] text-purple-400 font-bold mt-1 tracking-wider">LEVEL 1</p>
                <p className="text-[8px] text-gray-500 uppercase tracking-widest">Athlete</p>
             </div>

             {/* Circular SVG Progress */}
             <div className="relative w-36 h-36 mt-4 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  {/* Background Circle */}
                  <circle cx="50" cy="50" r="40" stroke="#1a222e" strokeWidth="6" fill="none" />
                  {/* Progress Circle - Gradient */}
                  <defs>
                    <linearGradient id="readinessGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#39ff14" />
                      <stop offset="100%" stopColor="#eab308" />
                    </linearGradient>
                  </defs>
                  <circle cx="50" cy="50" r="40" stroke="url(#readinessGrad)" strokeWidth="6" fill="none" 
                          strokeDasharray="251" strokeDashoffset="20" strokeLinecap="round" />
                </svg>
                {/* Inner Text */}
                <div className="absolute flex flex-col items-center justify-center mt-2">
                  <HeartPulse size={20} className="text-[#39ff14] mb-1 opacity-80" />
                  <span className="text-4xl font-black text-white">92<span className="text-2xl">%</span></span>
                  <span className="text-[9px] text-[#39ff14] tracking-widest font-bold mt-1">READINESS</span>
                </div>
             </div>
             
             <div className="mt-4 text-center">
               <p className="text-[#39ff14] font-bold text-sm tracking-wide">OPTIMAL</p>
               <p className="text-[11px] text-gray-500 mt-0.5">You are in the zone!</p>
             </div>
          </div>
        </div>
    {/* --- RANK & PLAN SECTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          
          {/* Rank Card */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#1c1132] to-[#0d1219] rounded-[24px] p-6 border border-purple-500/20 relative">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center border border-purple-500/30 p-2 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                <ShieldIcon className="w-12 h-12" />
              </div>
              <div className="mt-1">
                <h3 className="text-purple-400 text-[10px] font-black tracking-[0.2em] mb-1">YOUR RANK</h3>
                <h2 className="text-xl font-black tracking-tight mb-0.5">LEVEL 1 ATHLETE</h2>
                <p className="text-[11px] text-gray-400">Top 15% Among All Athletes</p>
                <div className="w-3/4 h-1 bg-gray-800 rounded-full mt-3">
                  <div className="h-full bg-purple-500 rounded-full w-[15%]"></div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 border-t border-gray-800/50 pt-4">
               <div>
                 <p className="text-[9px] text-gray-500 uppercase flex items-center gap-1"><Trophy size={10}/> Global Rank</p>
                 <p className="text-lg font-bold text-white">#24</p>
                 <p className="text-[10px] text-[#39ff14]">Top 15%</p>
               </div>
               <div>
                 <p className="text-[9px] text-gray-500 uppercase flex items-center gap-1"><span>🇮🇳</span> India Rank</p>
                 <p className="text-lg font-bold text-white">#5</p>
                 <p className="text-[10px] text-[#39ff14]">Top 5%</p>
               </div>
               <div>
                 <p className="text-[9px] text-gray-500 uppercase flex items-center gap-1"><ShieldIcon size={10}/> Academy Rank</p>
                 <p className="text-lg font-bold text-white">#1</p>
                 <p className="text-[10px] text-[#39ff14]">Top 1%</p>
               </div>
            </div>
          </div>

          {/* Today's Plan Card */}
          <div className="lg:col-span-7 bg-[#0d1219] rounded-[24px] p-6 border border-[#1e293b] relative overflow-hidden flex flex-col justify-between">
            {/* Background Athlete Image */}
             <div className="absolute right-0 top-0 w-2/3 h-full opacity-60 pointer-events-none" 
                 style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop')", backgroundSize: 'cover', backgroundPosition: 'top center', WebkitMaskImage: 'linear-gradient(to left, black, transparent)' }}>
            </div>

            <div className="relative z-10">
              <h3 className="text-[#39ff14] text-[10px] font-black tracking-widest mb-1.5 uppercase">Today's Plan</h3>
              <h2 className="text-3xl font-black mb-4">Full Body<br/>Strength</h2>
              
              <div className="flex gap-4 text-xs font-medium text-gray-300 mb-8">
                 <span className="flex items-center gap-1 bg-black/40 px-2 py-1 rounded-md backdrop-blur-sm"><Moon size={14} className="text-gray-400"/> 45 min</span>
                 <span className="flex items-center gap-1 bg-black/40 px-2 py-1 rounded-md backdrop-blur-sm"><Flame size={14} className="text-orange-500"/> 420 kcal</span>
                 <span className="flex items-center gap-1 bg-black/40 px-2 py-1 rounded-md backdrop-blur-sm"><Zap size={14} className="text-purple-400"/> Advanced</span>
              </div>
            </div>

            <button className="relative z-10 bg-[#39ff14] hover:bg-[#32e011] text-black font-black text-sm px-6 py-3.5 rounded-xl flex items-center justify-between w-fit gap-8 transition-colors shadow-[0_0_15px_rgba(57,255,20,0.3)]">
               Resume Workout <Play size={18} fill="black" />
            </button>
          </div>

        </div>

        {/* --- AI COACH & LEADERBOARD SECTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          
          {/* AI Insight */}
          <div className="lg:col-span-4 bg-gradient-to-br from-[#0c1424] to-[#0a0f16] rounded-[24px] p-5 border border-blue-900/40">
             <h3 className="text-blue-500 text-[10px] font-black tracking-widest mb-3 uppercase">AI Coach Insight</h3>
             <div className="flex gap-4 items-center mb-4">
               <div className="w-14 h-14 bg-blue-500/10 rounded-full flex items-center justify-center p-2 relative">
                 <Brain className="w-full h-full text-blue-400" />
                 <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-blue-400 rounded-full shadow-[0_0_5px_#60a5fa] animate-pulse"></div>
               </div>
               <p className="text-xs text-gray-300 leading-relaxed font-medium">
                 Readiness is excellent today. It's a great day to push your limits! ⚡
               </p>
             </div>
             <button className="w-full border border-blue-900/50 hover:bg-blue-900/20 text-blue-400 text-xs font-bold py-2.5 rounded-xl flex items-center justify-between px-4 transition-colors">
               View Full Report <ChevronRight size={16} />
             </button>
          </div>

          {/* Leaderboard Top 3 */}
          <div className="lg:col-span-8 bg-[#0d1219] rounded-[24px] p-5 border border-[#1e293b]">
             <div className="flex justify-between items-center mb-6">
                <h3 className="text-yellow-500 text-[10px] font-black tracking-widest uppercase">Leaderboard Top 3</h3>
                <span className="text-xs text-gray-400 flex items-center cursor-pointer hover:text-white">View All <ChevronRight size={14}/></span>
             </div>

             <div className="flex justify-around items-end h-[100px] pb-2">
                
                {/* #2 Dinesh */}
                <div className="flex flex-col items-center z-10 relative">
                  <div className="absolute -top-2 left-0 bg-gray-400 text-black text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#0d1219] z-20">2</div>
                  <img src="https://i.pravatar.cc/100?img=11" alt="Dinesh" className="w-12 h-12 rounded-full border-2 border-gray-400 opacity-80" />
                  <p className="text-sm font-bold mt-2">Dinesh</p>
                  <p className="text-[10px] text-[#39ff14] font-bold">1,100 XP</p>
                </div>

                {/* #1 Pragati */}
                <div className="flex flex-col items-center transform -translate-y-4 z-20 relative">
                  <div className="absolute -top-3 left-1 bg-yellow-500 text-black text-[11px] font-black w-6 h-6 rounded-full flex items-center justify-center border-2 border-[#0d1219] z-20 shadow-[0_0_10px_#eab308]">1</div>
                  <img src="https://i.pravatar.cc/100?img=5" alt="Pragati" className="w-16 h-16 rounded-full border-4 border-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.3)]" />
                  <p className="text-sm font-bold mt-2">Pragati</p>
                  <p className="text-[11px] text-[#39ff14] font-bold">1,250 XP</p>
                </div>

                {/* #3 Athlete X */}
                <div className="flex flex-col items-center z-10 relative">
                  <div className="absolute -top-2 left-0 bg-orange-700 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#0d1219] z-20">3</div>
                  <div className="w-12 h-12 rounded-full border-2 border-orange-700 bg-gray-800 flex items-center justify-center overflow-hidden opacity-80">
                     <User className="text-gray-500"/>
                  </div>
                  <p className="text-sm font-bold mt-2 text-gray-300">Athlete X</p>
                  <p className="text-[10px] text-[#39ff14] font-bold">980 XP</p>
                </div>

             </div>
          </div>
        </div>

        {/* --- METRICS GRID --- */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 pb-8">
          
          {/* XP */}
          <div className="bg-[#0d1219] rounded-[20px] p-4 border border-[#1e293b] flex flex-col justify-between h-[130px]">
            <div className="flex items-center gap-2">
              <div className="bg-[#39ff14]/10 p-1.5 rounded-lg border border-[#39ff14]/20"><div className="w-4 h-4 bg-[#39ff14] rounded-sm text-black flex justify-center items-center text-[8px] font-bold">XP</div></div>
              <span className="text-[10px] text-gray-400 font-bold tracking-wider">XP TODAY</span>
            </div>
            <div>
              <p className="text-2xl font-black">120</p>
              <p className="text-[10px] text-[#39ff14] font-bold">+12%</p>
            </div>
            <div className="w-full h-1.5 bg-gray-800 rounded-full mt-2"><div className="h-full bg-[#39ff14] rounded-full w-[60%]"></div></div>
          </div>

          {/* Calories */}
          <div className="bg-[#0d1219] rounded-[20px] p-4 border border-[#1e293b] flex flex-col justify-between h-[130px]">
            <div className="flex items-center gap-2">
              <Flame size={20} className="text-orange-500" />
              <span className="text-[10px] text-gray-400 font-bold tracking-wider">CALORIES</span>
            </div>
            <div>
              <p className="text-2xl font-black">2,450</p>
              <p className="text-[10px] text-gray-500">Goal: 2,800</p>
            </div>
            <div className="w-full h-1.5 bg-gray-800 rounded-full mt-2"><div className="h-full bg-orange-500 rounded-full w-[85%] shadow-[0_0_5px_#f97316]"></div></div>
          </div>

          {/* Recovery */}
          <div className="bg-[#0d1219] rounded-[20px] p-4 border border-[#1e293b] flex flex-col justify-between h-[130px]">
            <div className="flex items-center gap-2">
              <HeartPulse size={20} className="text-[#39ff14]" />
              <span className="text-[10px] text-gray-400 font-bold tracking-wider">RECOVERY</span>
            </div>
            <div>
              <p className="text-2xl font-black">85%</p>
              <p className="text-[10px] text-gray-500">Good</p>
            </div>
            <div className="w-full h-1.5 bg-gray-800 rounded-full mt-2"><div className="h-full bg-[#39ff14] rounded-full w-[85%]"></div></div>
          </div>

          {/* Sleep */}
          <div className="bg-[#0d1219] rounded-[20px] p-4 border border-[#1e293b] flex flex-col justify-between h-[130px]">
            <div className="flex items-center gap-2">
              <Moon size={20} className="text-purple-400" />
              <span className="text-[10px] text-gray-400 font-bold tracking-wider">SLEEP SCORE</span>
            </div>
            <div>
              <p className="text-2xl font-black">78</p>
              <p className="text-[10px] text-gray-500">Good</p>
            </div>
            <div className="w-full h-1.5 bg-gray-800 rounded-full mt-2"><div className="h-full bg-purple-500 rounded-full w-[78%]"></div></div>
          </div>

          {/* Water */}
          <div className="bg-[#0d1219] rounded-[20px] p-4 border border-[#1e293b] flex flex-col justify-between h-[130px]">
            <div className="flex items-center gap-2">
              <Droplet size={20} className="text-blue-400" />
              <span className="text-[10px] text-gray-400 font-bold tracking-wider">WATER GOAL</span>
            </div>
            <div>
              <p className="text-2xl font-black">2.6 L</p>
              <p className="text-[10px] text-gray-500">Goal: 3.0 L</p>
            </div>
             <div className="w-full h-1.5 bg-gray-800 rounded-full mt-2"><div className="h-full bg-blue-500 rounded-full w-[80%]"></div></div>
          </div>

          {/* Streak */}
          <div className="bg-[#0d1219] rounded-[20px] p-4 border border-[#1e293b] flex flex-col justify-between h-[130px]">
            <div className="flex items-center gap-2">
              <div className="bg-yellow-500/10 p-1.5 rounded-full border border-yellow-500/20"><Zap size={12} className="text-yellow-500" /></div>
              <span className="text-[10px] text-gray-400 font-bold tracking-wider">STREAK</span>
            </div>
            <div>
              <p className="text-2xl font-black">7</p>
              <p className="text-[10px] text-gray-500">Days</p>
            </div>
            <div className="w-full h-1.5 bg-gray-800 rounded-full mt-2"><div className="h-full bg-yellow-500 rounded-full w-[100%] shadow-[0_0_8px_#eab308]"></div></div>
          </div>

        </div>
      </div>

      {/* --- BOTTOM NAVIGATION FIXED --- */}
      <nav className="fixed bottom-0 w-full bg-[#070b11]/95 backdrop-blur-md border-t border-[#1e293b] flex justify-around items-center py-3 px-2 z-50">
         <div className="flex flex-col items-center gap-1 cursor-pointer">
            <Home size={22} className="text-[#39ff14]" />
            <span className="text-[10px] text-[#39ff14] font-bold">Home</span>
         </div>
         <div className="flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
            <Dumbbell size={22} />
            <span className="text-[10px]">Training</span>
         </div>
         <div className="flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
            <Trophy size={22} />
            <span className="text-[10px]">Tournaments</span>
         </div>
         <div className="flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
            <div className="bg-pink-500/20 p-1 rounded-md border border-pink-500/50 text-pink-400">
               <span className="text-xs font-bold leading-none block px-1">DP</span>
            </div>
            <span className="text-[10px]">DP</span>
         </div>
         <div className="flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
            <User size={22} />
            <span className="text-[10px]">Profile</span>
         </div>
      </nav>

    </div>
  );
}

// Custom Shield Icon (replicated from design)
function ShieldIcon({ className = "w-6 h-6 text-purple-400" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="rgba(168,85,247,0.2)" stroke="#a855f7" strokeWidth="2" />
      <polygon points="12 15 8 10 10 8 12 10 16 6 18 8 12 15" fill="#a855f7" stroke="none" />
    </svg>
  );
                            }
