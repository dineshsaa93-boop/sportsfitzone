"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div style={{
      padding: 20,
      fontFamily: "Arial",
      background: "#f5f5f5",
      minHeight: "100vh"
    }}>

      {/* HEADER */}
      <h1 style={{
        textAlign: "center",
        marginBottom: 5
      }}>
        🏆 Sports Fit Zone
      </h1>

      <p style={{
        textAlign: "center",
        color: "gray",
        marginBottom: 20
      }}>
        Train • Play • Improve
      </p>

      {/* GRID */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 15
      }}>

        <Link href="/training">
          <div style={card}>🏋️ Training</div>
        </Link>

        <Link href="/store">
          <div style={card}>🏪 Sports Store</div>
        </Link>

        <Link href="/coach">
          <div style={card}>🤖 AI Coach</div>
        </Link>

        <div style={card}>📊 Progress</div>

      </div>

    </div>
  );
}

const card = {
  background: "white",
  padding: 20,
  borderRadius: 15,
  textAlign: "center",
  fontWeight: "bold",
  fontSize: 16,
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  cursor: "pointer"
};
