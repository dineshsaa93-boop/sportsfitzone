"use client";

import { useState } from "react";

export default function Home() {

  const [xp, setXp] = useState(296);

  return (
    <div style={{
      background:"#111827",
      minHeight:"100vh",
      color:"white",
      padding:"20px",
      fontFamily:"sans-serif"
    }}>

      <h1 style={{
        fontSize:"35px",
        fontWeight:"bold"
      }}>
        Sports Fit Zone 🚀
      </h1>

      <div style={{
        background:"#1f2937",
        padding:"20px",
        borderRadius:"20px",
        marginTop:"20px"
      }}>
        <h2>🏆 Your XP</h2>
        <h1>{xp}</h1>

        <button
          onClick={() => setXp(xp + 10)}
          style={{
            padding:"10px",
            borderRadius:"10px",
            border:"none",
            background:"#22c55e",
            color:"white",
            marginTop:"10px"
          }}
        >
          Complete Challenge +10 XP
        </button>
      </div>

      <div style={{
        display:"grid",
        gridTemplateColumns:"1fr 1fr",
        gap:"15px",
        marginTop:"20px"
      }}>

        <div style={{
          background:"#2563eb",
          padding:"20px",
          borderRadius:"20px"
        }}>
          <h2>🏏 Cricket</h2>
          <p>Batting Masterclass</p>
        </div>

        <div style={{
          background:"#dc2626",
          padding:"20px",
          borderRadius:"20px"
        }}>
          <h2>⚽ Football</h2>
          <p>Speed Training</p>
        </div>

        <div style={{
          background:"#16a34a",
          padding:"20px",
          borderRadius:"20px"
        }}>
          <h2>🏸 Badminton</h2>
          <p>Smash Practice</p>
        </div>

        <div style={{
          background:"#9333ea",
          padding:"20px",
          borderRadius:"20px"
        }}>
          <h2>🧠 AI Coach</h2>
          <p>Ask fitness doubts</p>
        </div>

      </div>

      <div style={{
        background:"#f59e0b",
        color:"black",
        padding:"20px",
        borderRadius:"20px",
        marginTop:"20px"
      }}>
        <h2>🔥 Daily Challenge</h2>
        <p>Do 20 pushups today</p>
      </div>

      <div style={{
        background:"#1f2937",
        padding:"20px",
        borderRadius:"20px",
        marginTop:"20px"
      }}>
        <h2>🛒 DP Store</h2>

        <p>🏏 Cricket Bat - ₹999</p>
        <p>🏸 Badminton Racket - ₹499</p>
        <p>⚽ Football - ₹799</p>
      </div>

    </div>
  );
}
