"use client";

export default function HomeDashboardV2({
  profileData,
  handleWorkout,
}) {
  return (
    <div style={{ background: "#060913", minHeight: "100vh", color: "#fff", padding: "16px", paddingBottom: "90px", fontFamily: "sans-serif" }}>
      
      {/* 1. TOP HEADER */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20,
          padding: "10px 0"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
          <div style={{ fontSize: 28, cursor: "pointer", color: "#fff" }}>
            ☰
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ background: "#39ff14", width: 32, height: 32, borderRadius: 8, display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold", color: "#000" }}>
              ⚡
            </div>
            <h2 style={{ margin: 0, color: "#fff", fontWeight: "800", fontSize: 20, lineHeight: 1.1 }}>
              SPORTS<br />
              <span style={{ color: "#39ff14" }}>FIT ZONE</span>
            </h2>
          </div>
        </div>

        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <div style={{ background: "#111827", padding: "6px 12px", borderRadius: 20, color: "#FFD54A", fontSize: 14, fontWeight: "bold" }}>
            🏆 {profileData?.level || 12}
          </div>
          <div style={{ background: "#111827", padding: "6px 12px", borderRadius: 20, color: "#FF7A00", fontSize: 14, fontWeight: "bold" }}>
            🔥 {profileData?.streak || 7}
          </div>
          <div style={{ background: "#111827", padding: "6px 12px", borderRadius: 20, color: "#39ff14", fontSize: 14, fontWeight: "bold" }}>
            XP {profileData?.xp || 468}
          </div>
          <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#111827", display: "flex", justifyContent: "center", alignItems: "center", color: "#fff", fontSize: 18, position: "relative" }}>
            🔔
            <span style={{ position: "absolute", top: 8, right: 8, width: 8, height: 8, background: "#39ff14", borderRadius: "50%" }}></span>
          </div>
        </div>
      </header>

      {/* 2. SEARCH BAR */}
      <div
        style={{
          marginTop: 10,
          marginBottom: 20,
          display: "flex",
          alignItems: "center",
          background: "#0d1324",
          border: "1px solid rgba(57,255,20,.15)",
          borderRadius: 18,
          padding: "12px 18px",
          boxShadow: "0 0 20px rgba(57,255,20,.05)",
        }}
      >
        <span style={{ color: "#7a8497", fontSize: 20 }}>🔍</span>
        <input
          placeholder="Search workouts, plans, tournaments..."
          style={{
            flex: 1,
            marginLeft: 12,
            background: "transparent",
            border: "none",
            outline: "none",
            color: "#fff",
            fontSize: 15
          }}
        />
        <span style={{ color: "#a855f7", fontSize: 20, cursor: "pointer" }}>⚙️</span>
      </div>

      {/* 3. HERO & READINESS SECTION (Grid Layout) */}
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 16, marginBottom: 20 }}>
        
        {/* Left Banner: DINESH */}
        <div
          style={{
            background: "linear-gradient(135deg, #0d1729, #131f36)",
            borderRadius: 24,
            padding: 20,
            border: "1px solid rgba(57,255,20,.15)",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
              <span style={{ width: 8, height: 8, background: "#39ff14", borderRadius: "50%" }}></span>
              <span style={{ fontSize: 11, color: "#39ff14", textTransform: "uppercase", letterSpacing: 1 }}>Elite Athlete</span>
            </div>
            <h1 style={{ margin: "0 0 4px 0", fontSize: 28, fontWeight: "900", letterSpacing: 1 }}>
              {profileData?.name || "DINESH"}
            </h1>
            <p style={{ color: "#9ca3af", margin: 0, fontSize: 13, lineHeight: 1.4 }}>
              Discipline today,<br />
              <strong style={{ color: "#39ff14" }}>Domination</strong> tomorrow.
            </p>
          </div>

          <div style={{ marginTop: 20, background: "rgba(17, 24, 39, 0.7)", border: "1px solid rgba(57,255,20,0.1)", borderRadius: 16, padding: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
              <span style={{ width: 10, height: 10, background: "#39ff14", borderRadius: "50%", boxShadow: "0 0 8px #39ff14" }}></span>
              <span style={{ fontSize: 13, fontWeight: "bold", color: "#fff" }}>Ready To Train</span>
            </div>
            <p style={{ margin: 0, fontSize: 11, color: "#9ca3af" }}>Your body. Your mind. Your moment.</p>
          </div>
        </div>

        {/* Right Card: Readiness 92% */}
        <div
          style={{
            background: "#0d1324",
            border: "1px solid rgba(57,255,20,.15)",
            borderRadius: 24,
            padding: 16,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative"
          }}
        >
          <div style={{ position: "absolute", top: 10, right: 10, color: "#a855f7", fontSize: 16 }}>🛡️</div>
          <div
            style={{
              width: 110,
              height: 110,
              margin: "0 auto",
              borderRadius: "50%",
              border: "8px solid #39ff14",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 15px rgba(57,255,20,0.2)"
            }}
          >
            <span style={{ fontSize: 24, fontWeight: "900", color: "#fff", lineHeight: 1 }}>92%</span>
            <span style={{ fontSize: 9, color: "#39ff14", fontWeight: "bold", marginTop: 2 }}>READINESS</span>
          </div>

          <div style={{ marginTop: 10 }}>
            <span style={{ color: "#39ff14", fontWeight: "bold", fontSize: 12, letterSpacing: 0.5 }}>OPTIMAL</span>
            <p style={{ color: "#9ca3af", fontSize: 10, margin: "2px 0 0 0" }}>You are in the zone!</p>
          </div>
        </div>

      </div>

      {/* 4. RANK & LEVEL SECTION */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 16, marginBottom: 20 }}>
        
        {/* Left Rank Shield Box */}
        <div style={{ background: "#0d1324", border: "1px solid rgba(168,85,247,0.2)", borderRadius: 24, padding: 16, textAlign: "center" }}>
          <div style={{ fontSize: 40, marginBottom: 4 }}>🛡️</div>
          <p style={{ color: "#a855f7", fontSize: 11, fontWeight: "bold", margin: "0 0 2px 0", textTransform: "uppercase" }}>Your Rank</p>
          <h3 style={{ margin: "0 0 4px 0", fontSize: 15, fontWeight: "800" }}>LEVEL 1 ATHLETE</h3>
          <p style={{ color: "#9ca3af", fontSize: 10, margin: 0 }}>Top 15% Among All Athletes</p>
          
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 14, paddingTop: 10, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
            <div>
              <span style={{ fontSize: 10, color: "#9ca3af" }}>GLOBAL RANK</span>
              <p style={{ margin: 0, fontWeight: "bold", color: "#fff", fontSize: 14 }}>#24</p>
            </div>
            <div>
              <span style={{ fontSize: 10, color: "#9ca3af" }}>INDIA RANK</span>
              <p style={{ margin: 0, fontWeight: "bold", color: "#39ff14", fontSize: 14 }}>#5</p>
            </div>
            <div>
              <span style={{ fontSize: 10, color: "#9ca3af" }}>ACADEMY</span>
              <p style={{ margin: 0, fontWeight: "bold", color: "#FFD54A", fontSize: 14 }}>#1</p>
            </div>
          </div>
        </div>

        {/* Right Today's Plan Box */}
        <div style={{ background: "linear-gradient(135deg, #0d1324, #151b2e)", border: "1px solid rgba(57,255,20,0.15)", borderRadius: 24, padding: 16, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
              <span style={{ color: "#39ff14", fontSize: 11, fontWeight: "bold", letterSpacing: 1 }}>TODAY'S PLAN</span>
            </div>
            <h3 style={{ margin: "0 0 8px 0", fontSize: 18, fontWeight: "800" }}>Full Body Strength</h3>
            <div style={{ display: "flex", gap: 12, color: "#9ca3af", fontSize: 12, marginBottom: 12 }}>
              <span>⏱️ 45 min</span>
              <span>🔥 420 kcal</span>
              <span style={{ color: "#a855f7" }}>⚡ Advanced</span>
            </div>
          </div>

          <button
            onClick={handleWorkout}
            style={{
              background: "#39ff14",
              color: "#000",
              border: "none",
              borderRadius: 14,
              padding: "10px 16px",
              fontWeight: "800",
              fontSize: 13,
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 6
            }}
          >
            Resume Workout <span>▶</span>
          </button>
        </div>

      </div>

      {/* 5. AI COACH INSIGHT */}
      <div style={{ background: "#0b1120", border: "1px solid rgba(57,255,20,0.15)", borderRadius: 22, padding: 16, marginBottom: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ fontSize: 28, background: "rgba(57,255,20,0.1)", padding: 10, borderRadius: 16 }}>🧠</div>
          <div>
            <h4 style={{ margin: "0 0 2px 0", color: "#39ff14", fontSize: 13, letterSpacing: 0.5 }}>AI COACH INSIGHT</h4>
            <p style={{ margin: 0, color: "#9ca3af", fontSize: 12 }}>Readiness is excellent today. It's a great day to push your limits! ⚡</p>
          </div>
        </div>
        <span style={{ color: "#39ff14", fontSize: 18 }}>›</span>
      </div>

      {/* 6. LEADERBOARD TOP 3 */}
      <div style={{ background: "#0d1324", border: "1px solid rgba(57,255,20,0.1)", borderRadius: 22, padding: 16, marginBottom: 20 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
          <h4 style={{ margin: 0, fontSize: 13, color: "#e5e7eb", letterSpacing: 0.5 }}>LEADERBOARD TOP 3</h4>
          <span style={{ color: "#9ca3af", fontSize: 12, cursor: "pointer" }}>View All ›</span>
        </div>

        <div style={{ display: "flex", justifyContent: "space-around", textAlign: "center" }}>
          {/* Rank 2 */}
          <div>
            <div style={{ position: "relative", width: 48, height: 48, margin: "0 auto 6px auto" }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#334155", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>👨🏽‍🦱</div>
              <span style={{ position: "absolute", bottom: -2, left: -2, background: "#cbd5e1", color: "#000", width: 18, height: 18, borderRadius: "50%", fontSize: 10, fontWeight: "bold", display: "flex", alignItems: "center", justifyContent: "center" }}>2</span>
            </div>
            <p style={{ margin: "0 0 2px 0", fontSize: 12, fontWeight: "bold" }}>Dinesh</p>
            <span style={{ fontSize: 11, color: "#39ff14" }}>1,100 XP</span>
          </div>

          {/* Rank 1 */}
          <div>
            <div style={{ position: "relative", width: 54, height: 54, margin: "0 auto 6px auto" }}>
              <div style={{ width: 54, height: 54, borderRadius: "50%", background: "#334155", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>👩🏻</div>
              <span style={{ position: "absolute", bottom: -2, left: -2, background: "#facc15", color: "#000", width: 20, height: 20, borderRadius: "50%", fontSize: 11, fontWeight: "bold", display: "flex", alignItems: "center", justifyContent: "center" }}>1</span>
            </div>
            <p style={{ margin: "0 0 2px 0", fontSize: 12, fontWeight: "bold" }}>Pragati</p>
            <span style={{ fontSize: 11, color: "#39ff14" }}>1,250 XP</span>
          </div>

          {/* Rank 3 */}
          <div>
            <div style={{ position: "relative", width: 48, height: 48, margin: "0 auto 6px auto" }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#334155", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>👦🏽</div>
              <span style={{ position: "absolute", bottom: -2, left: -2, background: "#fb923c", color: "#000", width: 18, height: 18, borderRadius: "50%", fontSize: 10, fontWeight: "bold", display: "flex", alignItems: "center", justifyContent: "center" }}>3</span>
            </div>
            <p style={{ margin: "0 0 2px 0", fontSize: 12, fontWeight: "bold" }}>Athlete X</p>
            <span style={{ fontSize: 11, color: "#39ff14" }}>980 XP</span>
          </div>
        </div>
      </div>

      {/* 7. STATS GRID CARDS */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 20 }}>
        
        {/* XP Today */}
        <div style={{ background: "#0d1324", border: "1px solid rgba(57,255,20,0.1)", borderRadius: 18, padding: 14 }}>
          <span style={{ fontSize: 18 }}>⚡</span>
          <p style={{ margin: "6px 0 2px 0", fontSize: 10, color: "#9ca3af" }}>XP TODAY</p>
          <h3 style={{ margin: 0, fontSize: 18, fontWeight: "800" }}>120</h3>
          <span style={{ fontSize: 10, color: "#39ff14" }}>+12%</span>
        </div>

        {/* Calories */}
        <div style={{ background: "#0d1324", border: "1px solid rgba(255,122,0,0.1)", borderRadius: 18, padding: 14 }}>
          <span style={{ fontSize: 18 }}>🔥</span>
          <p style={{ margin: "6px 0 2px 0", fontSize: 10, color: "#9ca3af" }}>CALORIES</p>
          <h3 style={{ margin: 0, fontSize: 18, fontWeight: "800" }}>2,450</h3>
          <span style={{ fontSize: 10, color: "#9ca3af" }}>Goal: 2,800</span>
        </div>

        {/* Recovery */}
        <div style={{ background: "#0d1324", border: "1px solid rgba(57,255,20,0.1)", borderRadius: 18, padding: 14 }}>
          <span style={{ fontSize: 18 }}>💚</span>
          <p style={{ margin: "6px 0 2px 0", fontSize: 10, color: "#9ca3af" }}>RECOVERY</p>
          <h3 style={{ margin: 0, fontSize: 18, fontWeight: "800" }}>85%</h3>
          <span style={{ fontSize: 10, color: "#39ff14" }}>Good</span>
        </div>

        {/* Sleep Score */}
        <div style={{ background: "#0d1324", border: "1px solid rgba(168,85,247,0.1)", borderRadius: 18, padding: 14 }}>
          <span style={{ fontSize: 18 }}>🌙</span>
          <p style={{ margin: "6px 0 2px 0", fontSize: 10, color: "#9ca3af" }}>SLEEP SCORE</p>
          <h3 style={{ margin: 0, fontSize: 18, fontWeight: "800" }}>78</h3>
          <span style={{ fontSize: 10, color: "#a855f7" }}>Good</span>
        </div>

        {/* Water Goal */}
        <div style={{ background: "#0d1324", border: "1px solid rgba(56,189,248,0.1)", borderRadius: 18, padding: 14 }}>
          <span style={{ fontSize: 18 }}>💧</span>
          <p style={{ margin: "6px 0 2px 0", fontSize: 10, color: "#9ca3af" }}>WATER GOAL</p>
          <h3 style={{ margin: 0, fontSize: 18, fontWeight: "800" }}>2.6 L</h3>
          <span style={{ fontSize: 10, color: "#9ca3af" }}>Goal: 3.0 L</span>
        </div>

        {/* Streak */}
        <div style={{ background: "#0d1324", border: "1px solid rgba(255,165,0,0.1)", borderRadius: 18, padding: 14 }}>
          <span style={{ fontSize: 18 }}>🔥</span>
          <p style={{ margin: "6px 0 2px 0", fontSize: 10, color: "#9ca3af" }}>STREAK</p>
          <h3 style={{ margin: 0, fontSize: 18, fontWeight: "800" }}>7</h3>
          <span style={{ fontSize: 10, color: "#FFD54A" }}>Days</span>
        </div>

      </div>

      {/* 8. BOTTOM NAVIGATION BAR */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          background: "#060913",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          justifyContent: "space-around",
          padding: "10px 0 16px 0",
          zIndex: 100
        }}
      >
        <div style={{ textAlign: "center", color: "#39ff14", cursor: "pointer" }}>
          <div style={{ fontSize: 20 }}>🏠</div>
          <span style={{ fontSize: 11, fontWeight: "bold" }}>Home</span>
        </div>
        <div style={{ textAlign: "center", color: "#9ca3af", cursor: "pointer" }}>
          <div style={{ fontSize: 20 }}>🏋️‍♂️</div>
          <span style={{ fontSize: 11 }}>Training</span>
        </div>
        <div style={{ textAlign: "center", color: "#9ca3af", cursor: "pointer" }}>
          <div style={{ fontSize: 20 }}>🏆</div>
          <span style={{ fontSize: 11 }}>Tournaments</span>
        </div>
        <div style={{ textAlign: "center", color: "#9ca3af", cursor: "pointer" }}>
          <div style={{ fontSize: 20 }}>⚡</div>
          <span style={{ fontSize: 11 }}>DP</span>
        </div>
        <div style={{ textAlign: "center", color: "#9ca3af", cursor: "pointer" }}>
          <div style={{ fontSize: 20 }}>👤</div>
          <span style={{ fontSize: 11 }}>Profile</span>
        </div>
      </div>

    </div>
  );
}
