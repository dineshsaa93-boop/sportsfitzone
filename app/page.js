Leaderboard", icon: Crown, color: "#ffd700", imgSrc: "" },
    { id: 11, title: "Courses", icon: GraduationCap, color: "#e2e8f0", imgSrc: "" },
    { id: 12, title: "Tournaments", icon: Trophy, color: "#ffd700", imgSrc: "" },
    { id: 13, title: "Match Room", icon: Gamepad2, color: "#94a3b8", imgSrc: "" },
    { id: 14, title: "Live Match", icon: Video, color: "#ff4d88", imgSrc: "" },
    { id: 15, title: "Rewards", icon: Gift, color: "#ffaa00", imgSrc: "" },
    { id: 16, title: "Athlete Profile", icon: User, color: "#3ea6ff", imgSrc: "" },
    { id: 17, title: "Team Chat", icon: MessageCircle, color: "#39ff14", imgSrc: "" },
    { id: 18, title: "All Training", icon: MonitorPlay, color: "#9d4edd", imgSrc: "" },
    { id: 19, title: "All Tests", icon: FileText, color: "#3ea6ff", imgSrc: "" },
    { id: 20, title: "My Doubts", icon: MessageCircleQuestion, color: "#9d4edd", imgSrc: "" },
    { id: 21, title: "Sports Books", icon: BookOpen, color: "#ff7b00", imgSrc: "" },
    { id: 22, title: "Community", icon: Users, color: "#ffd700", imgSrc: "" },
    { id: 23, title: "Challenges", icon: Target, color: "#ff4d88", imgSrc: "" },
    { id: 24, title: "AI Coach", icon: Bot, color: "#3ea6ff", imgSrc: "" },
    { id: 25, title: "Events", icon: CalendarCheck, color: "#9d4edd", imgSrc: "" },
  ]
};

// ==========================================
// 2. REUSABLE CUSTOM SVG COMPONENTS 
// ==========================================

// Custom Sparkline
const Sparkline = ({ color, points }) => (
  <svg width="100%" height="30" viewBox="0 0 100 30" preserveAspectRatio="none" className="mt-auto">
    <polyline points={points} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: `drop-shadow(0px 4px 4px ${color}40)` }} />
  </svg>
);

// Progress Circle
const CircularProgress = ({ percentage }) => {
  const radius = 55;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex flex-col items-center justify-center w-[160px] h-[160px]">
      <svg width="160" height="160" viewBox="0 0 160 160" className="-rotate-90">
        <defs>
          <linearGradient id="progGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3ea6ff" />
            <stop offset="100%" stopColor="#39ff14" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <circle cx="80" cy="80" r={radius} stroke="rgba(255,255,255,0.05)" strokeWidth="10" fill="none" />
        <circle cx="80" cy="80" r={radius} stroke="url(#progGrad)" strokeWidth="10" fill="none" strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} strokeLinecap="round" filter="url(#glow)" />
      </svg>
      <div className="absolute flex flex-col items-center justify-center inset-0 z-10 pt-2">
        <Activity size={24} color="#39ff14" strokeWidth={2.5} className="mb-[-2px]" />
        <span className="text-white text-4xl font-black leading-none">{percentage}%</span>
        <span className="text-[#39ff14] text-[10px] font-bold tracking-widest mt-1">READINESS</span>
      </div>
    </div>
  );
};

// ==========================================
// 3. MAIN COMPONENT
// ==========================================
export default function SportsFitZoneExact() {
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  // Exactly 16 items visible by default (as per typical 4x4 grid in image)
  const displayedFeatures = showAllFeatures ? APP_DATA.features : APP_DATA.features.slice(0, 16);

  return (
    <div className="exact-app-wrapper">
      
      {/* --- MASTER CSS STYLESHEET --- */}
      <style>{`
        * { box-sizing: border-box; font-family: 'Inter', system-ui, sans-serif; }
        .exact-app-wrapper { background: #0b0e14; min-height: 100vh; color: white; padding-bottom: 90px; }
        .container { max-width: 1200px; margin: 0 auto; padding: 20px; width: 100%; overflow-x: hidden; }
        
        /* Utility */
        .flex-center { display: flex; align-items: center; justify-content: center; }
        .flex-between { display: flex; align-items: center; justify-content: space-between; }
        .card-panel { background: #121824; border: 1px solid rgba(255,255,255,0.06); border-radius: 20px; padding: 20px; box-shadow: 0 4px 20px rgba(0,0,0,0.2); }
        
        /* Header */
        .top-stats-pill { background: #1a2235; border: 1px solid rgba(255,255,255,0.08); padding: 6px 14px; border-radius: 30px; display: flex; align-items: center; gap: 8px; font-size: 15px; font-weight: 800; }
        .xp-box { background: #39ff14; color: #000; font-size: 11px; padding: 2px 6px; border-radius: 4px; font-weight: 900; }

        /* Grids (Responsive & Safe) */
        .grid-hero { display: grid; grid-template-columns: 1.6fr 1fr; gap: 20px; margin-bottom: 20px; }
        .grid-mid { display: grid; grid-template-columns: 1fr 1.5fr; gap: 20px; margin-bottom: 20px; }
        .grid-stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; margin-bottom: 20px; }
        .grid-widgets { display: grid; grid-template-columns: 1fr 1.5fr 1fr; gap: 20px; margin-bottom: 30px; }
        .grid-features { display: grid; grid-template-columns: repeat(auto-fit, minmax(80px, 1fr)); gap: 15px 10px; transition: all 0.3s ease; justify-items: center; }
        

      <div className="container">
        
        {/* --- HEADER --- */}
        <header className="flex-between" style={{ flexWrap: 'wrap', gap: '20px', marginBottom: '25px' }}>
          <div className="flex-center" style={{ gap: '15px' }}>
            <Menu color="white" size={32} strokeWidth={2.5} />
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
              <span style={{ color: "white", fontSize: 20, fontWeight: 900, fontStyle: "italic", letterSpacing: 1.5 }}>SPORTS</span>
              <span style={{ color: "#39ff14", fontSize: 20, fontWeight: 900, fontStyle: "italic", letterSpacing: 1.5 }}>FIT ZONE</span>
            </div>
          </div>
          
          <div className="flex-center top-stats" style={{ gap: '12px' }}>
            {/* Same Top Stats */}
            <div className="top-stats-pill">
              <Trophy color="#ffd700" size={18} style={{ filter: "drop-shadow(0 0 5px #ffd700)" }} />
              <span style={{ color: "#ffd700" }}>{APP_DATA.user.trophies}</span>
            </div>
            <div className="top-stats-pill">
              <Flame color="#ff7b00" size={18} fill="#ff7b00" style={{ filter: "drop-shadow(0 0 5px #ff7b00)" }} />
              <span style={{ color: "#ff7b00" }}>{APP_DATA.user.flames}</span>
            </div>
            <div className="top-stats-pill">
              <span className="xp-box">XP</span><span style={{ color: "white" }}>{APP_DATA.user.xp}</span>
            </div>
            <div style={{ position: 'relative', marginLeft: '5px' }}>
              <div style={{ width: 45, height: 45, borderRadius: '50%', background: '#1a2235', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Bell color="white" size={20} />
              </div>
              <div style={{ position: 'absolute', top: 2, right: 2, width: 12, height: 12, background: '#39ff14', borderRadius: '50%', border: '2px solid #0b0e14' }}></div>
            </div>
          </div>
        </header>

        {/* --- SEARCH BAR --- */}
        <div className="search-bar">
          <Search color="#94a3b8" size={22} />
          <input type="text" placeholder="Search workouts, plans, tournaments..." style={{ flex: 1, background: 'transparent', border: 'none', color: 'white', fontSize: 16, outline: 'none' }} />
          <SlidersHorizontal color="#9d4edd" size={22} />
        </div>

        {/* --- HERO GRID --- */}
        <div className="grid-hero">
          
          {/* Main User Card */}
          <div className="hero-banner">
            <div style={{ zIndex: 2 }}>
              <p style={{ color: "#e2e8f0", fontSize: 16, margin: "0 0 5px", fontWeight: "500" }}>Good Evening,</p>
              <h1 style={{ color: "white", fontSize: 48, fontWeight: 900, margin: "0 0 8px", letterSpacing: 1.5 }}>{APP_DATA.user.name}</h1>
              
              <div className="flex-center" style={{ gap: 6, marginBottom: 20, width: 'fit-content' }}>
                <span style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>{APP_DATA.user.level}</span>
                <CheckCircle2 size={16} color="#39ff14" fill="transparent" />
              </div>
              
              <p style={{ color: "white", fontSize: 16, lineHeight: 1.6, margin: "0 0 25px" }}>
                {APP_DATA.user.quoteLine1}<br/>
                <span style={{ color: "#39ff14", fontWeight: "bold" }}>{APP_DATA.user.quoteLine2}</span>
              </p>

              <div className="flex-center" style={{ gap: 25, flexWrap: "wrap", justifyContent: 'flex-start' }}>
                <div className="flex-center" style={{ gap: 10 }}>
                  <Flame color="#ff7b00" size={24} fill="#ff7b00" style={{ filter: "drop-shadow(0 0 5px #ff7b00)" }}/>
                  <div><div style={{ color: "white", fontWeight: 900, fontSize: 16 }}>{APP_DATA.user.streak}</div><div style={{ color: "#94a3b8", fontSize: 12 }}>Day Streak</div></div>
                </div>
                <div className="flex-center" style={{ gap: 10 }}>
                  <Activity color="#39ff14" size={24} style={{ filter: "drop-shadow(0 0 5px #39ff14)" }}/>
                  <div><div style={{ color: "white", fontWeight: 900, fontSize: 16 }}>{APP_DATA.user.readiness}%</div><div style={{ color: "#94a3b8", fontSize: 12 }}>Readiness</div></div>
                </div>
                <div className="flex-center" style={{ gap: 10 }}>
                  <Droplet color="#3ea6ff" size={24} style={{ filter: "drop-shadow(0 0 5px #3ea6ff)" }}/>
                  <div><div style={{ color: "white", fontWeight: 900, fontSize: 16 }}>{APP_DATA.user.recovery}%</div><div style={{ color: "#94a3b8", fontSize: 12 }}>Recovery</div></div>
                </div>
              </div>
            </div>

            <div className="hero-circular-wrap" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <CircularProgress percentage={APP_DATA.user.readiness} />
              <div style={{ color: "#39ff14", fontSize: 14, fontWeight: "bold", marginTop: 15, letterSpacing: 1 }}>OPTIMAL</div>
              <div style={{ color: "#94a3b8", fontSize: 12, marginTop: 4 }}>You are in the zone!</div>
            </div>
          </div>

          {/* Rank Card */}
          <div className="card-panel rank-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div className="flex-center" style={{ justifyContent: 'flex-start', gap: 20, marginBottom: 25 }}>
              {/* SHIELD ICON: Replace src with your exact image if needed */}
              <div style={{ width: 70, height: 80, background: "linear-gradient(180deg, #9d4edd 0%, #240046 100%)", clipPath: "polygon(50% 0%, 100% 20%, 100% 70%, 50% 100%, 0% 70%, 0% 20%)", display: 'flex', justifyContent: 'center', alignItems: 'center', border: '2px solid #c27dff', filter: "drop-shadow(0 0 10px rgba(157,78,221,0.5))" }}>
                <div style={{ color: "white", fontSize: 30 }}>⭐</div>
              </div>
              <div>
                <p style={{ color: "#c27dff", fontSize: 12, fontWeight: "bold", margin: "0 0 5px", letterSpacing: 1.5 }}>YOUR RANK</p>
                <h2 style={{ color: "white", fontSize: 20, fontWeight: 900, margin: "0 0 5px" }}>{APP_DATA.rank.title}</h2>
                <p style={{ color: "#94a3b8", fontSize: 13, margin: 0 }}>{APP_DATA.rank.subtitle}</p>
              </div>
            </div>
            
            <div style={{ display: "flex", justifyContent: "space-between", background: "rgba(0,0,0,0.25)", padding: 15, borderRadius: 16 }}>
              {/* Rank Sub-items */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
                <span style={{ fontSize: 10, color: "#94a3b8", fontWeight: "bold" }}>🌐 GLOBAL RANK</span>
                <span style={{ fontSize: 18, color: "white", fontWeight: 900 }}>{APP_DATA.rank.global.rank}</span>
                <span style={{ fontSize: 11, color: "#39ff14", fontWeight: "bold" }}>{APP_DATA.rank.global.percentile}</span>
              </div>
              <div style={{ width: 1, background: 'rgba(255,255,255,0.1)' }}></div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
                <span style={{ fontSize: 10, color: "#94a3b8", fontWeight: "bold" }}>🇮🇳 INDIA RANK</span>
                <span style={{ fontSize: 18, color: "white", fontWeight: 900 }}>{APP_DATA.rank.india.rank}</span>
                <span style={{ fontSize: 11, color: "#39ff14", fontWeight: "bold" }}>{APP_DATA.rank.india.percentile}</span>
              </div>
              <div style={{ width: 1, background: 'rgba(255,255,255,0.1)' }}></div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
                <span style={{ fontSize: 10, color: "#94a3b8", fontWeight: "bold" }}>🛡️ ACADEMY RANK</span>
                <span style={{ fontSize: 18, color: "white", fontWeight: 900 }}>{APP_DATA.rank.academy.rank}</span>
                <span style={{ fontSize: 11, color: "#ffd700", fontWeight: "bold" }}>{APP_DATA.rank.academy.percentile}</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- MID GRID (Challenges & Plan) --- */}
        <div className="grid-mid">
          {/* Daily Challenge */}
          <div className="card-panel" style={{ border: "1px solid rgba(57,255,20,0.2)" }}>
            <div className="flex-between" style={{ alignItems: "flex-start" }}>
              <div>
                <p style={{ color: "#39ff14", fontSize: 12, fontWeight: "bold", margin: "0 0 8px", letterSpacing: 1 }}>DAILY CHALLENGE</p>
                <h2 style={{ color: "white", fontSize: 26, fontWeight: 900, margin: 0 }}>{APP_DATA.challenge.title}</h2>
              </div>
              <Target color="#39ff14" size={45} strokeWidth={1.5} style={{ filter: "drop-shadow(0 0 8px #39ff14)" }} />
            </div>
            
            <div className="progress-bar-bg">
              <div className="progress-bar-fill" style={{ width: `${APP_DATA.challenge.progress}%` }}></div>
            </div>
            <div style={{ textAlign: "right", color: "white", fontSize: 14, fontWeight: "bold", marginTop: -5 }}>{APP_DATA.challenge.progress}%</div>

            <div className="flex-between" style={{ marginTop: 15 }}>
              <span style={{ color: "#39ff14", fontSize: 15, fontWeight: "bold" }}>{APP_DATA.challenge.reward} <span style={{ color: "#94a3b8", fontWeight: "500", fontSize: 13 }}>Reward</span></span>
              <button style={{ background: "transparent", border: "1px solid #39ff14", color: "#39ff14", padding: "8px 18px", borderRadius: 20, fontSize: 13, fontWeight: "bold", cursor: "pointer" }}>Join Challenge</button>
            </div>
          </div>

          {/* Today's Plan */}
          <div className="card-panel workout-banner" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ zIndex: 2, position: "relative" }}>
              <p style={{ color: "#39ff14", fontSize: 12, fontWeight: "bold", margin: "0 0 8px", letterSpacing: 1 }}>TODAY'S PLAN</p>
              <h2 style={{ color: "white", fontSize: 30, fontWeight: 900, margin: 0 }}>{APP_DATA.plan.title}</h2>
              
              <div className="flex-center" style={{ gap: 20, justifyContent: "flex-start", margin: "15px 0 25px" }}>
                <span className="flex-center" style={{ gap: 6, color: "#e2e8f0", fontSize: 14, fontWeight: "600" }}><Timer size={16}/> {APP_DATA.plan.duration}</span>
                <span className="flex-center" style={{ gap: 6, color: "#e2e8f0", fontSize: 14, fontWeight: "600" }}><Flame size={16}/> {APP_DATA.plan.calories}</span>
                <span className="flex-center" style={{ gap: 6, color: "#e2e8f0", fontSize: 14, fontWeight: "600" }}><LineChart size={16}/> {APP_DATA.plan.level}</span>
              </div>
              <button className="btn-green">
                Resume Workout <Play fill="#000" size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* --- STATS GRID (6 Items) --- */}
        <div className="grid-stats">
          {APP_DATA.metrics.map((stat) => (
            <div key={stat.id} className="card-panel stat-card-small">
              <div className="flex-center" style={{ gap: 8, justifyContent: "flex-start", marginBottom: 15 }}>
                <div style={{ border: `1px solid ${stat.color}40`, padding: 8, borderRadius: 12 }}>
                  {stat.type === 'xp' && <span className="xp-box" style={{ background: stat.color, color: "#000" }}>XP</span>}
                  {stat.type === 'calories' && <Flame color={stat.color} size={20} fill={stat.color} style={{ filter: `drop-shadow(0 0 5px ${stat.color})` }}/>}
                  {stat.type === 'recovery' && <Activity color={stat.color} size={20} style={{ filter: `drop-shadow(0 0 5px ${stat.color})` }}/>}
                  {stat.type === 'sleep' && <Moon color={stat.color} size={20} fill={stat.color} style={{ filter: `drop-shadow(0 0 5px ${stat.color})` }}/>}
                  {stat.type === 'water' && <Droplet color={stat.color} size={20} fill={stat.color} style={{ filter: `drop-shadow(0 0 5px ${stat.color})` }}/>}
                  {stat.type === 'streak' && <Watch color={stat.color} size={20} style={{ filter: `drop-shadow(0 0 5px ${stat.color})` }}/>}
                </div>
                <span style={{ color: "#94a3b8", fontSize: 12, fontWeight: "bold", letterSpacing: 1 }}>{stat.title}</span>
              </div>
              <h2 style={{ color: "white", fontSize: 32, fontWeight: 900, margin: "0 0 5px" }}>{stat.value}</h2>
              <p style={{ fontSize: 13, fontWeight: "600", margin: 0, color: (stat.type === 'xp' || stat.type === 'recovery') ? "#39ff14" : "#94a3b8" }}>{stat.sub}</p>
              <Sparkline color={stat.color} points={stat.points} />
            </div>
          ))}
        </div>

        {/* --- WIDGETS GRID (3 Items) --- */}
        <div className="grid-widgets">
          {/* AI Coach */}
          <div className="card-panel" style={{ border: "1px solid rgba(62,166,255,0.3)" }}>
            <h3 style={{ color: "#3ea6ff", fontSize: 13, fontWeight: "bold", margin: "0 0 20px", letterSpacing: 1 }}>AI COACH INSIGHT</h3>
            <div className="flex-center" style={{ gap: 15, alignItems: "flex-start", marginBottom: 25 }}>
              <Brain size={65} color="#3ea6ff" strokeWidth={1} style={{ flexShrink: 0, filter: "drop-shadow(0 0 10px rgba(62,166,255,0.8))" }} />
              <p style={{ color: "#e2e8f0", fontSize: 14, lineHeight: 1.6, margin: 0, fontWeight: "500" }}>
                Your recovery is excellent and energy is high.<br/><br/>Perfect day to push your limits! 🚀
              </p>
            </div>
            <button style={{ width: "100%", background: "transparent", border: "1px solid rgba(62,166,255,0.3)", color: "#3ea6ff", padding: "12px", borderRadius: 12, fontSize: 14, fontWeight: "bold", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              View Full Report <ChevronRight size={18}/>
            </button>
          </div>

          {/* Leaderboard Top 3 */}
          <div className="card-panel">
            <div className="flex-between" style={{ marginBottom: 30 }}>
              <h3 style={{ color: "#ffd700", fontSize: 13, fontWeight: "bold", margin: 0, letterSpacing: 1 }}>LEADERBOARD TOP 3</h3>
              <span style={{ color: "#94a3b8", fontSize: 13, cursor: "pointer", display: "flex", alignItems: "center", fontWeight: "600" }}>View All <ChevronRight size={16}/></span>
            </div>
            <div className="flex-center" style={{ justifyContent: "space-around", alignItems: "flex-end", height: 120 }}>
              {APP_DATA.leaderboard.map((lb) => (
                <div key={lb.rank} style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative", zIndex: lb.rank === 1 ? 10 : 1 }}>
                  <div className="podium-rank-badge" style={{ background: lb.color }}>{lb.rank}</div>
                  <img src={lb.img} alt={`Rank ${lb.rank}`} className="podium-avatar" style={{ width: lb.rank === 1 ? 75 : 55, height: lb.rank === 1 ? 75 : 55, borderColor: lb.color, marginBottom: 10 }} />
                  <span style={{ color: "white", fontSize: lb.rank === 1 ? 16 : 14, fontWeight: "bold" }}>{lb.name}</span>
                  <span style={{ color: lb.rank === 1 ? "#ffd700" : "#39ff14", fontSize: 12, fontWeight: "bold" }}>{lb.xp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Event */}
          <div className="card-panel">
            <h3 style={{ color: "#c27dff", fontSize: 13, fontWeight: "bold", margin: "0 0 20px", letterSpacing: 1 }}>UPCOMING EVENT</h3>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 20 }}>
              <Trophy size={60} color="#c27dff" strokeWidth={1} style={{ marginBottom: 15, filter: "drop-shadow(0 0 8px #c27dff)" }} />
              <h4 style={{ color: "white", fontSize: 16, margin: "0 0 5px", fontWeight: "bold", textAlign: "center", lineHeight: 1.4 }}>State Powerlifting<br/>Championship 2025</h4>
              <p style={{ color: "#c27dff", fontSize: 13, margin: 0, fontWeight: "600" }}>12 May 2025</p>
            </div>
            <button style={{ width: "100%", background: "rgba(157,78,221,0.15)", border: "1px solid rgba(157,78,221,0.5)", color: "white", padding: "12px", borderRadius: 12, fontSize: 14, fontWeight: "bold", cursor: "pointer", transition: "all 0.2s" }}>Register Now</button>
          </div>
        </div>

        {/* --- ALL FEATURES (DYNAMIC GRID WITH EXACT SHOW MORE/LESS BUTTON) --- */}
        <div style={{ marginBottom: 40, background: "#121824", borderRadius: 24, padding: "25px 20px" }}>
          
          <div className="grid-features">
            {displayedFeatures.map((item) => (
              <div key={item.id} className="feature-item-wrapper">
                <div className="feature-icon-box" style={{ border: `1px solid ${item.color}40` }}>
                  {/* LOGIC FOR EXACT ICONS: If imgSrc is provided, it uses your exact image. Otherwise, glowing vector fallback. */}
                  {item.imgSrc ? (
                    <img src={item.imgSrc} alt={item.title} style={{ width: 32, height: 32, objectFit: 'contain' }} />
                  ) : (
                    <item.icon color={item.color} size={32} strokeWidth={1.5} style={{ filter: `drop-shadow(0 0 6px ${item.color}80)` }} />
                  )}
                </div>
                <span style={{ color: "#94a3b8", fontSize: 12, textAlign: "center", fontWeight: "600", lineHeight: 1.2, marginTop: 5 }}>{item.title}</span>
              </div>
            ))}
          </div>

          {/* EXACT Show More / Show Less Button */}
          <button className="show-more-btn" onClick={() => setShowAllFeatures(!showAllFeatures)}>
            {showAllFeatures ? (
              <>Show Less <span style={{ color: "#ffaa00", fontSize: 18 }}>🔼</span></>
            ) : (
              <>Show More <span style={{ color: "#ffaa00", fontSize: 18 }}>🔽</span></>
            )}
          </button>
        </div>
      </div>

      {/* --- BOTTOM NAVIGATION --- */}
      <div className="bottom-nav">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
          <Home color="#39ff14" size={26} />
          <span style={{ color: "#39ff14", fontSize: 12, marginTop: 6, fontWeight: "bold" }}>Home</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: 0.6, cursor: 'pointer' }}>
          <Dumbbell color="#94a3b8" size={26} />
          <span style={{ color: "#94a3b8", fontSize: 12, marginTop: 6, fontWeight: "600" }}>Training</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: 0.6, cursor: 'pointer' }}>
          <Trophy color="#94a3b8" size={26} />
          <span style={{ color: "#94a3b8", fontSize: 12, marginTop: 6, fontWeight: "600" }}>Tournaments</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: 0.6, cursor: 'pointer' }}>
          <Flame color="#94a3b8" size={26} />
          <span style={{ color: "#94a3b8", fontSize: 12, marginTop: 6, fontWeight: "600" }}>DP</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: 0.6, cursor: 'pointer' }}>
          <User color="#94a3b8" size={26} />
          <span style={{ color: "#94a3b8", fontSize: 12, marginTop: 6, fontWeight: "600" }}>Profile</span>
        </div>
      </div>

    </div>
  );
  }
