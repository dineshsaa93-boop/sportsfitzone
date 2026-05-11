"use client";

import { useState } from "react";

export default function ProfilePage() {
  const [xp, setXp] = useState(120);
  const [level, setLevel] = useState(2);

  const gainXP = () => {
    const newXP = xp + 20;

    setXp(newXP);

    if (newXP >= 200) {
      setLevel(level + 1);
      setXp(0);
    }
  };

  return (
    <div
      style={{
        background: "#020617",
        minHeight: "100vh",
        color: "white",
        padding: "25px",
      }}
    >
      <h1 style={{ fontSize: "40px", marginBottom: "20px" }}>
        Profile 👤
      </h1>

      <div
        style={{
          background: "#0f172a",
          padding: "20px",
          borderRadius: "20px",
        }}
      >
        <h2 style={{ fontSize: "28px" }}>
          Dinesh
        </h2>

        <p style={{ color: "#94a3b8" }}>
          Sports Athlete
        </p>

        <h3 style={{ marginTop: "20px" }}>
          Level {level}
        </h3>

        <div
          style={{
            width: "100%",
            height: "18px",
            background: "#1e293b",
            borderRadius: "20px",
            marginTop: "10px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${xp / 2}%`,
              height: "100%",
              background: "#22c55e",
            }}
          />
        </div>

        <p style={{ marginTop: "10px" }}>
          XP: {xp}/200
        </p>

        <button
          onClick={gainXP}
          style={{
            marginTop: "20px",
            background: "#22c55e",
            color: "black",
            border: "none",
            padding: "12px 22px",
            borderRadius: "12px",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          Complete Workout +20 XP
        </button>
      </div>
    </div>
  );
}
