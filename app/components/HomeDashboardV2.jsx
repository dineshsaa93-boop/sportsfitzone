import React from 'react';

export default function Dashboard() {
  return (
    <div className="bg-[#05070D] min-h-screen text-white font-inter p-4 pb-28 select-none">
      
      {/* 1. HEADER */}
      <header className="flex justify-between items-center h-[92px] px-2 mb-4">
        <div className="flex items-center gap-2">
          {/* Logo Icon */}
          <div className="w-10 h-10 bg-gradient-to-br from-[#39FF14] to-[#00D084] rounded-xl flex items-center justify-center font-black text-black text-lg shadow-[0_0_20px_rgba(57,255,20,0.4)]">
            SFZ
          </div>
          <span className="text-xl font-extrabold tracking-wider bg-gradient-to-r from-white to-[#A1A1AA] bg-clip-text text-transparent">
            SPORTS <span className="text-[#39FF14]">FIT ZONE</span>
          </span>
        </div>
        
        {/* Header Stats & Notification */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-[#0E1420] border border-white/5 px-3 py-1.5 rounded-full text-xs font-semibold">
            <span className="text-amber-400">🏆</span> 12
          </div>
          <div className="flex items-center gap-1.5 bg-[#0E1420] border border-white/5 px-3 py-1.5 rounded-full text-xs font-semibold">
            <span className="text-orange-500">🔥</span> 7
          </div>
          <div className="flex items-center gap-1.5 bg-[#0E1420] border border-white/5 px-3 py-1.5 rounded-full text-xs font-bold text-[#39FF14] shadow-[0_0_15px_rgba(57,255,20,0.1)]">
            <span className="bg-[#39FF14] text-black text-[10px] px-1 rounded">XP</span> 468
          </div>
          {/* Bell Icon Button */}
          <button className="w-11 h-11 bg-[#0E1420] border border-white/5 rounded-full flex items-center justify-center relative">
            <span className="text-lg">🔔</span>
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-[#39FF14] rounded-full ring-2 ring-[#05070D]"></span>
          </button>
        </div>
      </header>

      {/* 2. SEARCH BAR */}
      <div className="mb-6 relative">
        <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-lg">🔍</span>
        <input 
          type="text" 
          placeholder="Search workouts, plans, tournaments..." 
          className="w-full h-[64px] bg-[#0C1320] border border-white/5 rounded-[30px] pl-14 pr-12 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#39FF14]/30 transition-all"
        />
        <button className="absolute right-5 top-1/2 -translate-y-1/2 text-lg text-[#39FF14]">⚡</button>
      </div>

      {/* 3. HERO & READINESS SECTION */}
      <section className="bg-[#0E1420] rounded-[34px] p-6 mb-6 border border-white/5 relative overflow-hidden shadow-[0_0_40px_rgba(57,255,20,0.05)]">
        {/* Background Subtle Gradient Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#39FF14]/5 rounded-full blur-[60px]"></div>
        
        <div className="flex flex-col gap-6 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-4xl font-black tracking-tight">DINESH</h2>
              <span className="bg-gradient-to-r from-[#39FF14] to-[#00D084] text-black text-[10px] font-extrabold px-2.5 py-0.5 rounded-full flex items-center gap-0.5 shadow-[0_0_15px_rgba(57,255,20,0.2)]">
                ✓ ELITE
              </span>
            </div>
            <p className="text-sm text-gray-400 font-medium">
              Discipline today, <span className="text-[#39FF14]">Domination</span> tomorrow.
            </p>
          </div>

          {/* Status Badge */}
          <div className="bg-[#05070D]/60 backdrop-blur-md border border-white/5 rounded-[18px] p-3 flex items-center gap-3 max-w-[280px]">
            <span className="w-3 h-3 bg-[#39FF14] rounded-full animate-pulse shadow-[0_0_10px_#39FF14]"></span>
            <div>
              <p className="text-xs font-bold text-white">Ready To Train</p>
              <p className="text-[10px] text-gray-400">Your body. Your mind. Your moment.</p>
            </div>
          </div>

          {/* Circular Readiness Meter */}
          <div className="flex flex-col items-center justify-center py-4 bg-[#05070D]/40 rounded-[24px] border border-white/5 relative">
            <div className="absolute top-3 left-4 text-[10px] uppercase tracking-wider text-gray-400 font-bold">Vital Diagnostic</div>
            <div className="absolute top-3 right-4 text-[10px] font-bold text-[#8A2BE2]">Lvl 1 Athlete</div>
            
            <div className="relative w-44 h-44 flex items-center justify-center mt-4">
              {/* SVG Arc for Ring */}
              <svg className="absolute w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.03)" strokeWidth="8" fill="transparent" />
                <circle cx="50" cy="50" r="40" stroke="url(#greenGradient)" strokeWidth="8" fill="transparent" strokeDasharray="251.2" strokeDashoffset="25" strokeLinecap="round" className="drop-shadow-[0_0_8px_rgba(57,255,20,0.5)]" />
                <defs>
                  <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#39FF14" />
                    <stop offset="100%" stopColor="#00D9FF" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="text-center z-10">
                <span className="text-4xl font-black tracking-tight block">92%</span>
                <span className="text-[10px] text-[#39FF14] font-extrabold tracking-widest block mt-0.5">READINESS</span>
              </div>
            </div>
            <p className="text-xs font-bold text-gray-300 mt-2 uppercase tracking-wide">Optimal — You are in the zone!</p>
          </div>
        </div>
      </section>

      {/* 4. GRID SECTION: RANK & TODAY'S PLAN */}
      <div className="grid grid-cols-1 gap-4 mb-6">
        
        {/* Rank Card */}
        <div className="bg-gradient-to-br from-[#1C0D35] to-[#0A0618] rounded-[28px] p-5 border border-[#8A2BE2]/20 relative overflow-hidden shadow-[0_0_30px_rgba(138,43,226,0.05)]">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-[10px] text-[#A855F7] font-bold tracking-widest uppercase mb-1">Your Rank</p>
              <h3 className="text-xl font-black">LEVEL 1 ATHLETE</h3>
              <p className="text-xs text-gray-400 mt-0.5">Top 15% Among All Athletes</p>
              <div className="w-32 h-1.5 bg-white/5 rounded-full mt-3 overflow-hidden">
                <div className="w-[75%] h-full bg-gradient-to-r from-[#8A2BE2] to-[#A855F7] rounded-full"></div>
              </div>
            </div>
            {/* 3D-Style Medal Stand-in */}
            <div className="w-16 h-16 bg-[#8A2BE2]/10 rounded-2xl border border-[#8A2BE2]/30 flex items-center justify-center text-3xl shadow-[0_0_20px_rgba(138,43,226,0.2)]">
              🏅
            </div>
          </div>
          
          {/* Rank Badges Row */}
          <div className="grid grid-cols-3 gap-2 mt-6 pt-4 border-t border-white/5 text-center">
            <div>
              <p className="text-[10px] text-gray-500 font-medium">GLOBAL RANK</p>
              <p className="text-base font-black text-white">#24</p>
              <p className="text-[10px] text-[#39FF14] font-bold">Top 15%</p>
            </div>
            <div className="border-x border-white/5">
              <p className="text-[10px] text-gray-500 font-medium">INDIA RANK</p>
              <p className="text-base font-black text-white">#5</p>
              <p className="text-[10px] text-amber-500 font-bold">Top 5%</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-500 font-medium">ACADEMY RANK</p>
              <p className="text-base font-black text-white">#1</p>
              <p className="text-[10px] text-cyan-400 font-bold">Top 1%</p>
            </div>
          </div>
        </div>

        {/* Today's Plan Card */}
        <div className="bg-[#0E1420] rounded-[28px] p-5 border border-white/5 flex flex-col justify-between min-h-[180px] relative overflow-hidden">
          <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
          <div>
            <span className="text-[10px] text-[#39FF14] font-bold tracking-widest uppercase">Today's Plan</span>
            <h3 className="text-2xl font-black mt-1 mb-3">Full Body Strength</h3>
            <div className="flex flex-wrap gap-4 text-xs text-gray-400">
              <span className="flex items-center gap-1">⏱ 45 min</span>
              <span className="flex items-center gap-1">🔥 420 kcal</span>
              <span className="flex items-center gap-1 text-purple-400">📊 Advanced</span>
            </div>
          </div>
          <button className="w-full h-[52px] bg-[#39FF14] text-black font-extrabold rounded-[18px] mt-5 flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(57,255,20,0.25)] active:scale-[0.98] transition-all">
            Resume Workout <span className="text-sm">▶</span>
          </button>
        </div>

      </div>

      {/* 5. AI COACH & LEADERBOARD GRID */}
      <div className="grid grid-cols-1 gap-4 mb-6">
        
        {/* AI Coach Insight */}
        <div className="bg-gradient-to-br from-[#0B1528] to-[#050912] rounded-[24px] p-5 border border-[#23B5FF]/20 flex gap-4 items-center shadow-[0_0_30px_rgba(35,181,255,0.03)]">
          <div className="w-16 h-16 bg-gradient-to-br from-[#23B5FF] to-[#00D9FF] rounded-2xl flex items-center justify-center text-2xl shadow-[0_0_20px_rgba(35,181,255,0.2)]">
            🧠
          </div>
          <div className="flex-1">
            <h4 className="text-xs font-black text-[#23B5FF] tracking-wider uppercase mb-1">AI Coach Insight</h4>
            <p className="text-xs text-gray-300 leading-relaxed font-medium">
              Readiness is excellent today. It's a great day to push your limits! ⚡
            </p>
          </div>
        </div>

        {/* Leaderboard Top 3 */}
        <div className="bg-[#0E1420] rounded-[24px] p-5 border border-white/5">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-xs font-black tracking-wider uppercase text-gray-400">Leaderboard Top 3</h4>
            <span className="text-[11px] text-gray-500 font-bold flex items-center gap-0.5">View All ❯</span>
          </div>
          <div className="flex justify-around items-end pt-2">
            {/* Rank 2 */}
            <div className="text-center flex flex-col items-center">
              <div className="relative">
                <div className="w-12 h-12 bg-gray-700 rounded-full border-2 border-gray-400 overflow-hidden flex items-center justify-center text-lg font-bold">🥈</div>
                <span className="absolute -top-1 -right-1 bg-gray-400 text-black text-[9px] w-4 h-4 rounded-full font-black flex items-center justify-center">2</span>
              </div>
              <p className="text-xs font-bold mt-2">Dinesh</p>
              <p className="text-[10px] text-gray-400 font-semibold">1,100 XP</p>
            </div>
            {/* Rank 1 */}
            <div className="text-center flex flex-col items-center scale-110 -translate-y-1">
              <div className="relative">
                <div className="w-14 h-14 bg-amber-600 rounded-full border-2 border-amber-400 overflow-hidden flex items-center justify-center text-xl font-bold">🥇</div>
                <span className="absolute -top-1 -right-1 bg-amber-400 text-black text-[9px] w-4 h-4 rounded-full font-black flex items-center justify-center">1</span>
              </div>
              <p className="text-xs font-black mt-2 text-amber-400">Pragati</p>
              <p className="text-[10px] text-gray-300 font-bold">1,250 XP</p>
            </div>
            {/* Rank 3 */}
            <div className="text-center flex flex-col items-center">
              <div className="relative">
                <div className="w-12 h-12 bg-amber-800 rounded-full border-2 border-amber-700 overflow-hidden flex items-center justify-center text-lg font-bold">🥉</div>
                <span className="absolute -top-1 -right-1 bg-amber-600 text-black text-[9px] w-4 h-4 rounded-full font-black flex items-center justify-center">3</span>
              </div>
              <p className="text-xs font-bold mt-2">Athlete X</p>
              <p className="text-[10px] text-gray-400 font-semibold">980 XP</p>
            </div>
          </div>
        </div>

      </div>

      {/* 6. HEALTH CARDS SYSTEM (Scrollable Grid on Mobile) */}
      <h4 className="text-xs font-black tracking-wider uppercase text-gray-400 mb-3 px-1">Health Matrix</h4>
      <div className="grid grid-cols-2 gap-3 mb-6">
        
        {/* XP Card */}
        <div className="bg-[#0E1420] p-4 rounded-[24px] border border-white/5 flex flex-col justify-between h-[140px]">
          <div className="flex justify-between items-center">
            <span className="text-xl bg-green-500/10 p-1.5 rounded-lg text-[#39FF14]">🟢</span>
            <span className="text-[9px] text-[#39FF14] font-bold bg-[#39FF14]/10 px-1.5 py-0.5 rounded">+12%</span>
          </div>
          <div>
            <p className="text-[10px] text-gray-500 font-bold">XP TODAY</p>
            <p className="text-2xl font-black">120</p>
            <div className="w-full h-1 bg-white/5 rounded-full mt-2 overflow-hidden">
              <div className="w-[60%] h-full bg-[#39FF14]"></div>
            </div>
          </div>
        </div>

        {/* Calories Card */}
        <div className="bg-[#0E1420] p-4 rounded-[24px] border border-white/5 flex flex-col justify-between h-[140px]">
          <span className="text-xl w-fit bg-orange-500/10 p-1.5 rounded-lg text-orange-500">🔥</span>
          <div>
            <p className="text-[10px] text-gray-500 font-bold">CALORIES</p>
            <p className="text-2xl font-black">2,450</p>
            <p className="text-[9px] text-gray-400 mt-1">Goal: 2,800 kcal</p>
          </div>
        </div>

        {/* Recovery Card */}
        <div className="bg-[#0E1420] p-4 rounded-[24px] border border-white/5 flex flex-col justify-between h-[140px]">
          <span className="text-xl w-fit bg-emerald-500/10 p-1.5 rounded-lg text-emerald-400">❤️</span>
          <div>
            <p className="text-[10px] text-gray-500 font-bold">RECOVERY</p>
            <p className="text-2xl font-black">85%</p>
            <p className="text-[9px] text-[#39FF14] font-bold mt-1">Good Status</p>
          </div>
        </div>

        {/* Water Goal Card */}
        <div className="bg-[#0E1420] p-4 rounded-[24px] border border-white/5 flex flex-col justify-between h-[140px]">
          <span className="text-xl w-fit bg-cyan-500/10 p-1.5 rounded-lg text-cyan-400">💧</span>
          <div>
            <p className="text-[10px] text-gray-500 font-bold">WATER GOAL</p>
            <p className="text-2xl font-black">2.6 L</p>
            <p className="text-[9px] text-gray-400 mt-1">Goal: 3.0 L</p>
          </div>
        </div>

      </div>

      {/* 7. GLASSMORPHIC BOTTOM NAVIGATION */}
      <nav className="fixed bottom-4 left-4 right-4 h-[78px] bg-black/60 backdrop-blur-[24px] border border-white/10 rounded-[26px] flex justify-around items-center px-2 z-50 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        <button className="flex flex-col items-center justify-center text-[#39FF14] gap-1 transition-all">
          <span className="text-xl">🏠</span>
          <span className="text-[10px] font-bold tracking-wide">Home</span>
        </button>
        <button className="flex flex-col items-center justify-center text-gray-400 gap-1 hover:text-white transition-all">
          <span className="text-xl">🏋️</span>
          <span className="text-[10px] font-medium tracking-wide">Training</span>
        </button>
        <button className="flex flex-col items-center justify-center text-gray-400 gap-1 hover:text-white transition-all">
          <span className="text-xl">🏆</span>
          <span className="text-[10px] font-medium tracking-wide">Tournaments</span>
        </button>
        <button className="flex flex-col items-center justify-center text-gray-400 gap-1 hover:text-white transition-all">
          <span className="text-xl">🔥</span>
          <span className="text-[10px] font-medium tracking-wide">DP</span>
        </button>
        <button className="flex flex-col items-center justify-center text-gray-400 gap-1 hover:text-white transition-all">
          <span className="text-xl">👤</span>
          <span className="text-[10px] font-medium tracking-wide">Profile</span>
        </button>
      </nav>

    </div>
  );
}
