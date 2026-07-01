"use client";

export default function HomeDashboardV2({
  profileData,
  handleWorkout,
}) {
  return (
    <div>
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
<div style={{
  minHeight: "100vh",
  background: "#0b1220",
  color: "white",
  padding: 20
}}>
  <h1 style={{
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 8
  }}>
    Welcome {profileData?.name || "Athlete"} 👋
  </h1>

  <p style={{
    color: "#9ca3af",
    marginBottom: 20
  }}>
    Elite Athlete Dashboard
  </p>

  <div style={{
    background: "#111827",
    borderRadius: 20,
    padding: 20
  }}>
    <h2>Level {profileData?.level || 1}</h2>
    <p>XP: {profileData?.xp || 0}</p>
    <p>Streak: {profileData?.streak || 0} 🔥</p>

    <button
      onClick={handleWorkout}
      style={{
        marginTop: 15,
        width: "100%",
        padding: 14,
        borderRadius: 12,
        border: "none",
        background: "#22c55e",
        color: "#fff",
        fontWeight: "bold"
      }}
    >
      Complete Workout
    </button>
  </div>
</div>
    </div>
  );
}
