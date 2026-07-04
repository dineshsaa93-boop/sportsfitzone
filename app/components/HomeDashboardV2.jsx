"use client";

export default function HomeDashboardV2({
  profileData,
  handleWorkout,
}) {
  return (
    <div>
      <header
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
    padding: "10px 0"
  }}
>
  <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
    <div
      style={{
        fontSize: 28,
        cursor: "pointer",
        color: "#fff"
      }}
    >
      ☰
    </div>

    <div>
      <h2
        style={{
          margin: 0,
          color: "#fff",
          fontWeight: "800",
          lineHeight: 1.1
        }}
      >
        SPORTS
        <br />
        <span style={{ color: "#39ff14" }}>FIT ZONE</span>
      </h2>
    </div>
  </div>

  <div
    style={{
      display: "flex",
      gap: 12,
      alignItems: "center"
    }}
  >
    <div
      style={{
        background: "#111827",
        padding: "10px 16px",
        borderRadius: 20,
        color: "#FFD54A"
      }}
    >
      🏆 {profileData?.level || 1}
    </div>

    <div
      style={{
        background: "#111827",
        padding: "10px 16px",
        borderRadius: 20,
        color: "#FF7A00"
      }}
    >
      🔥 {profileData?.streak || 0}
    </div>

    <div
      style={{
        background: "#111827",
        padding: "10px 16px",
        borderRadius: 20,
        color: "#39ff14"
      }}
    >
      XP {profileData?.xp || 0}
    </div>

    <div
      style={{
        width: 48,
        height: 48,
        borderRadius: "50%",
        background: "#111827",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: 22
      }}
    >
      🔔
    </div>
  </div>
      
</header>
      
        <div
  style={{
    marginTop: 20,
    background: "#0d1324",
    border: "1px solid rgba(57,255,20,.15)",
    borderRadius: 22,
    padding: 20,
    textAlign: "center",
    boxShadow: "0 0 25px rgba(57,255,20,.08)"
  }}
>
  <div
    style={{
      width: 180,
      height: 180,
      margin: "0 auto",
      borderRadius: "50%",
      border: "10px solid #39ff14",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      fontSize: 42,
      fontWeight: "800"
    }}
  >
    92%
  </div>

  <h2 style={{ color: "#39ff14", marginTop: 18 }}>
    READINESS
  </h2>

  <p style={{ color: "#9ca3af" }}>
    OPTIMAL
  </p>
</div>
  style={{
    marginTop: 20,
    marginBottom: 24,
    display: "flex",
    alignItems: "center",
    background: "#0d1324",
    border: "1px solid rgba(57,255,20,.15)",
    borderRadius: 18,
    padding: "14px 18px",
    boxShadow: "0 0 20px rgba(57,255,20,.08)"
  }}
>
  <span style={{ color: "#7a8497", fontSize: 22 }}>🔍</span>

  <input
    placeholder="Search workouts, plans, tournaments..."
    style={{
      flex: 1,
      marginLeft: 12,
      background: "transparent",
      border: "none",
      outline: "none",
      color: "#fff",
      fontSize: 16
    }}
  />

  <span style={{ color: "#8b5cf6", fontSize: 22 }}>⚙️</span>
</div>
      <div
  style={{
    background:
      "linear-gradient(135deg,#0f172a,#111827,#1e293b)",
    borderRadius: 30,
    padding: 24,
    marginBottom: 25,
    border: "1px solid rgba(57,255,20,.15)",
    boxShadow: "0 0 40px rgba(57,255,20,.08)"
  }}
>

  <div style={{
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center"
  }}>

    <div>

      <p style={{
        color:"#9ca3af",
        margin:0,
        fontSize:14
      }}>
        Welcome Back
      </p>

      <h1 style={{
        margin:"8px 0",
        fontSize:34,
        fontWeight:"800"
      }}>
        {profileData?.name || "Athlete"} 👋
      </h1>

      <p style={{
        color:"#39ff14",
        margin:0
      }}>
        Train. Recover. Dominate.
      </p>

    </div>

    <div style={{
      width:90,
      height:90,
      borderRadius:"50%",
      background:"linear-gradient(135deg,#39ff14,#00d084)",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      fontSize:36
    }}>
      🏆
    </div>

  
</div>
</div>
</div>
  
  );
}
