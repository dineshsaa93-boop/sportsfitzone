"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      padding: 20,
      fontFamily: "Arial",
      background: "linear-gradient(135deg,#0f172a,#1e293b,#020617)",
      color: "white"
    }}>

      {/* HEADER */}
      <h1 style={{
        textAlign: "center",
        fontSize: 28,
        marginBottom: 5
      }}>
        🏆 Sports Fit Zone
      </h1>

      <p style={{
        textAlign: "center",
        color: "#94a3b8",
        marginBottom: 25
      }}>
        Train • Play • Improve
      </p>

      {/* GRID MENU */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 15
      }}>

        <Link href="/training">
          <div style={card}>🏋️ Training</div>
        </Link>

        <Link href="/store">
          <div style={card}>🏪 Store</div>
        </Link>

        <Link href="/coach">
          <div style={card}>🤖 AI Coach</div>
        </Link>

        <div style={card}>📊 Progress</div>

      </div>

      {/* BOTTOM NAV */}
      <div style={{
        position: "fixed",
        bottom: 10,
        left: 10,
        right: 10,
        background: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(10px)",
        borderRadius: 20,
        display: "flex",
        justifyContent: "space-around",
        padding: 10
      }}>
        <a href="/">🏠</a>
        <a href="/training">🏋️</a>
        <a href="/store">🛒</a>
        <a href="/coach">🤖</a>
      </div>

    </div>
  );
}

const card = {
  backdropFilter: "blur(12px)",
  background: "rgba(255,255,255,0.1)",
  padding: 20,
  borderRadius: 15,
  textAlign: "center",
  fontWeight: "bold",
  fontSize: 16,
  border: "1px solid rgba(255,255,255,0.2)",
  cursor: "pointer",
  transition: "0.3s",
};
