"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div
      style={{
        background:
          "linear-gradient(to bottom,#020617,#0f172a)",
        minHeight: "100vh",
        color: "white",
        padding: "20px",
        paddingBottom: "120px",
        fontFamily: "Arial",
      }}
    >
      {/* TOP */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "38px",
              fontWeight: "bold",
            }}
          >
            Welcome Dinesh 👋
          </h1>

          <p
            style={{
              color: "#94a3b8",
              marginTop: "5px",
            }}
          >
            Ready for today's workout?
          </p>
        </div>

        <div
          style={{
            background: "#1e293b",
            padding: "15px",
            borderRadius: "18px",
            fontSize: "26px",
          }}
        >
          🔥
        </div>
      </div>

      {/* HERO */}
      <div
        style={{
          marginTop: "30px",
          background:
            "linear-gradient(135deg,#2563eb,#22c55e)",
          borderRadius: "28px",
          padding: "30px",
          boxShadow:
            "0 0 40px rgba(34,197,94,0.4)",
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            fontWeight: "bold",
          }}
        >
          SPORTS FIT
        </h2>

        <p
          style={{
            marginTop: "10px",
            fontSize: "20px",
          }}
        >
          Train Hard. Become Stronger. 💪
        </p>

        <button
          style={{
            marginTop: "25px",
            background: "white",
            color: "black",
            border: "none",
            padding: "14px 24px",
            borderRadius: "14px",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          Start Workout 🚀
        </button>
      </div>

      {/* STATS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "15px",
          marginTop: "30px",
        }}
      >
        <div style={card}>
          <h2 style={number}>2450</h2>
          <p style={label}>XP Points</p>
        </div>

        <div style={card}>
          <h2 style={number}>12</h2>
          <p style={label}>Workout Streak 🔥</p>
        </div>

        <div style={card}>
          <h2 style={number}>580</h2>
          <p style={label}>Calories Burned</p>
        </div>

        <div style={card}>
          <h2 style={number}>Level 7</h2>
          <p style={label}>Athlete Rank 🏆</p>
        </div>
      </div>

      {/* TODAY GOAL */}
      <div
        style={{
          marginTop: "30px",
          background: "#0f172a",
          padding: "25px",
          borderRadius: "24px",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            marginBottom: "20px",
          }}
        >
          Today's Goal 🎯
        </h2>

        <div style={goalBox}>
          ✅ 50 Pushups
        </div>

        <div style={goalBox}>
          🏃 2km Running
        </div>

        <div style={goalBox}>
          💧 Drink 8 Glass Water
        </div>
      </div>

      {/* QUICK ACTIONS */}
      <div
        style={{
          marginTop: "30px",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            marginBottom: "20px",
          }}
        >
          Quick Actions ⚡
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "15px",
          }}
        >
          <Link href="/training" style={action}>
            🎥 Training
          </Link>

          <Link href="/ai-coach" style={action}>
            🤖 AI Coach
          </Link>

          <Link href="/workout-timer" style={action}>
            ⏱️ Timer
          </Link>

          <Link href="/music" style={action}>
            🎵 Music
          </Link>
        </div>
      </div>

      {/* NAVBAR */}
      <div
        style={{
          position: "fixed",
          bottom: "10px",
          left: "10px",
          right: "10px",
          background: "rgba(15,23,42,0.95)",
          borderRadius: "25px",
          padding: "16px",
          display: "flex",
          justifyContent: "space-around",
          backdropFilter: "blur(20px)",
        }}
      >
        <Link href="/" style={nav}>
          🏠
        </Link>

        <Link href="/training" style={nav}>
          🎥
        </Link>

        <Link href="/ai-coach" style={nav}>
          🤖
        </Link>

        <Link href="/profile" style={nav}>
          👤
        </Link>
      </div>
    </div>
  );
}

const card = {
  background: "#0f172a",
  padding: "25px",
  borderRadius: "22px",
  textAlign: "center",
};

const number = {
  fontSize: "34px",
  fontWeight: "bold",
};

const label = {
  marginTop: "10px",
  color: "#94a3b8",
};

const goalBox = {
  background: "#1e293b",
  padding: "16px",
  borderRadius: "14px",
  marginBottom: "14px",
  fontSize: "18px",
};

const action = {
  background: "#2563eb",
  padding: "20px",
  borderRadius: "18px",
  textAlign: "center",
  color: "white",
  textDecoration: "none",
  fontSize: "20px",
  fontWeight: "bold",
};

const nav = {
  color: "white",
  fontSize: "28px",
  textDecoration: "none",
};
