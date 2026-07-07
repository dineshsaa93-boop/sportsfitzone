import React from 'react';

export default function SportsFitZone() {
  return (
    <div className="min-h-screen bg-bg text-white font-inter pb-32">
      
      {/* HEADER & SEARCH BAR */}
      <header className="px-8 pt-6 pb-4">
        <div className="flex justify-between items-center mb-6 h-[92px]">
          <div className="flex items-center gap-4">
            {/* Logo Placeholder */}
            <div className="w-10 h-10 bg-green rounded-full flex items-center justify-center text-black font-bold">
              SFZ
            </div>
            <h1 className="text-2xl font-bold italic tracking-wider">SPORTS FIT ZONE</h1>
          </div>
          <div className="flex gap-4">
            <div className="bg-card2 px-4 py-2 rounded-full flex items-center gap-2 border border-white/10">
              <span className="text-orange">🔥</span> 7
            </div>
            <div className="bg-card2 px-4 py-2 rounded-full flex items-center gap-2 border border-white/10">
              <span className="text-green">XP</span> 468
            </div>
            <button className="w-12 h-12 rounded-full bg-card2 border border-white/10 flex justify-center items-center">
              🔔
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="h-[72px] bg-[#0C1320] border border-white/10 rounded-[30px] flex items-center px-6">
          <span className="text-gray-400 mr-3">🔍</span>
          <input 
            type="text" 
            placeholder="Search workouts, plans, tournaments..." 
            className="bg-transparent border-none outline-none w-full text-white placeholder-gray-500"
          />
        </div>
      </header>

      {/* MAIN GRID LAYOUT */}
      <main className="px-8 flex flex-col lg:grid lg:grid-cols-2 gap-6 max-w-[1440px] mx-auto">
        
        {/* HERO SECTION */}
        <section className="bg-card rounded-card p-8 border border-white/10 shadow-green-glow relative overflow-hidden h-auto lg:h-[430px] flex flex-col md:flex-row justify-between items-center">
          <div className="z-10">
            <h2 className="text-[56px] font-extrabold leading-none mb-2 tracking-tight">DINESH</h2>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-green font-semibold">Elite Athlete</span>
              <span className="text-green">✓</span>
            </div>
            <p className="text-gray-400 text-lg mb-6">
              Discipline today,<br />
              <span className="text-green font-bold">Domination</span> tomorrow.
            </p>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-card-mini px-6 py-4 inline-block">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-green shadow-green-intense"></div>
                <div>
                  <div className="font-bold text-green">Ready To Train</div>
                  <div className="text-sm text-gray-400">Your body. Your mind. Your moment.</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Readiness Circle Widget */}
          <div className="relative w-[260px] h-[260px] flex justify-center items-center mt-8 md:mt-0 z-10 bg-card2 rounded-[30px] border border-white/10 p-6">
            <div className="absolute top-4 right-4 bg-purple/20 px-3 py-1 rounded-full text-xs font-bold text-purple-secondary border border-purple/30">
              LEVEL 1 ATHLETE
            </div>
            <div className="text-center">
              <h3 className="text-5xl font-extrabold">92%</h3>
              <p className="text-green font-bold tracking-widest mt-2">READINESS</p>
              <p className="text-sm text-gray-400 mt-1">OPTIMAL</p>
            </div>
          </div>
        </section>

        {/* RANK CARD */}
        <section className="bg-gradient-to-b from-[#43116E] to-[#22143D] rounded-card p-6 border border-white/10 shadow-purple-glow">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-32 h-32 bg-purple/30 rounded-full border-4 border-purple flex items-center justify-center text-4xl shadow-purple-glow">
              ⭐
            </div>
            <div className="flex-1 w-full">
              <p className="text-purple-secondary font-bold text-sm tracking-widest mb-1">YOUR RANK</p>
              <h3 className="text-3xl font-bold mb-2">LEVEL 1 ATHLETE</h3>
              <p className="text-gray-300 mb-4">Top 15% Among All Athletes</p>
              
              <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-4 mt-2">
                <div>
                  <div className="text-xs text-gray-400">GLOBAL RANK</div>
                  <div className="text-xl font-bold">#24</div>
                  <div className="text-green text-xs">Top 15%</div>
                </div>
                <div>
                  <div className="text-xs text-gray-400">INDIA RANK</div>
                  <div className="text-xl font-bold">#5</div>
                  <div className="text-green text-xs">Top 5%</div>
                </div>
                <div>
                  <div className="text-xs text-gray-400">ACADEMY RANK</div>
                  <div className="text-xl font-bold">#1</div>
                  <div className="text-green text-xs">Top 1%</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI COACH & TODAY PLAN */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:col-span-2">
          <section className="bg-card border border-white/10 rounded-card p-6 relative overflow-hidden h-[240px]">
            <h3 className="text-blue font-bold tracking-widest text-sm mb-4">AI COACH INSIGHT</h3>
            <p className="text-lg">Readiness is excellent today. It's a great day to push your limits! ⚡</p>
            <button className="absolute bottom-6 left-6 border border-blue text-blue px-6 py-2 rounded-full hover:bg-blue/10 transition-colors">
              View Full Report →
            </button>
          </section>

          <section className="bg-card border border-white/10 rounded-card p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-green font-bold tracking-widest text-sm mb-2">TODAY'S PLAN</h3>
              <h2 className="text-3xl font-bold mb-4">Full Body Strength</h2>
              <div className="space-y-2 text-gray-300">
                <p>⏱️ 45 min</p>
                <p>🔥 420 kcal</p>
                <p>📊 Advanced</p>
              </div>
            </div>
            <button className="w-full bg-green text-black font-bold py-4 rounded-btn mt-4 shadow-green-glow">
              Resume Workout ▶
            </button>
          </section>
        </div>

        {/* HEALTH STATS GRID */}
        <section className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <StatCard title="XP TODAY" value="120" sub="+12%" color="text-green" icon="💠" />
          <StatCard title="CALORIES" value="2,450" sub="Goal: 2,800" color="text-orange" icon="🔥" />
          <StatCard title="RECOVERY" value="85%" sub="Good" color="text-green" icon="💚" />
          <StatCard title="SLEEP SCORE" value="78" sub="Good" color="text-purple-secondary" icon="🌙" />
          <StatCard title="WATER GOAL" value="2.6 L" sub="Goal: 3.0 L" color="text-blue" icon="💧" />
          <StatCard title="STREAK" value="7" sub="Days" color="text-orange" icon="⚡" />
        </section>

      </main>

      {/* BOTTOM NAVIGATION */}
      <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-[90%] max-w-[500px] h-[90px] bg-white/5 backdrop-blur-[18px] border border-white/10 rounded-nav flex justify-around items-center px-4 z-50">
        <NavItem icon="🏠" label="Home" active={true} />
        <NavItem icon="🏋️" label="Training" />
        <NavItem icon="🏆" label="Tournaments" />
        <NavItem icon="💠" label="DP" />
        <NavItem icon="👤" label="Profile" />
      </nav>
    </div>
  );
}

// Reusable Components
function StatCard({ title, value, sub, color, icon }) {
  return (
    <div className="bg-card border border-white/10 rounded-card-mini p-4 h-[170px] flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
      <div className={`text-3xl ${color}`}>{icon}</div>
      <div>
        <p className="text-[12px] text-gray-400 font-bold mb-1 tracking-wider">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
        <p className={`text-sm mt-1 ${color}`}>{sub}</p>
      </div>
    </div>
  );
}

function NavItem({ icon, label, active }) {
  return (
    <div className="flex flex-col items-center gap-1 cursor-pointer">
      <div className={`text-2xl ${active ? 'text-green' : 'text-gray-500'}`}>{icon}</div>
      <span className={`text-[12px] ${active ? 'text-green font-bold' : 'text-gray-500'}`}>{label}</span>
      {active && <div className="w-1 h-1 bg-green rounded-full mt-1"></div>}
    </div>
  );
}
