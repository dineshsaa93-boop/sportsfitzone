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
</div>
  
  );
}
