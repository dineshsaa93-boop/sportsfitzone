"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>

      {/* TOP BAR */}
      <h1>🏆 Sports Fit Zone</h1>

      <p style={{ color: "gray" }}>
        Level: Beginner 🔥 | XP: 120
      </p>

      {/* GRID MENU */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 15,
        marginTop: 20
      }}>

        <Link href="/training">
          <div style={box}>🏋️ Training</div>
        </Link>

        <Link href="/store">
          <div style={box}>🏪 DP Store</div>
        </Link>

        <div style={box}>❓ Doubts</div>

        <div style={box}>📊 Progress</div>

      </div>
    </div>
  );
}

const box = {
  background: "white",
  padding: 20,
  borderRadius: 12,
  textAlign: "center",
  fontWeight: "bold",
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
};
