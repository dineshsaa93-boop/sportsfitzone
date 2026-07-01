"use client";

export default function HomeDashboardV2({
  profileData,
  handleWorkout,
}) {
  return (
    <div>
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
