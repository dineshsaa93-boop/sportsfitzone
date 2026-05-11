"use client";

import { useState } from "react";

export default function ChallengesPage() {
  const [completed, setCompleted] =
    useState(false);

  return (
    <div
      style={{
        background: "#020617",
        minHeight: "100vh",
        color: "white",
        padding: "20px",
      }}
    >
      <h1
        style={{
          fontSize: "42px",
          marginBottom: "25px",
        }}
      >
        Daily Challenges 🔥
      </h1>

      <div
        style={{
          background: "#0f172a",
          padding: "25px",
          borderRadius: "20px",
        }}
      >
        <h2 style={{ fontSize: "30px" }}>
          50 Pushups Challenge
        </h2>

        <p
          style={{
            color: "#94a3b8",
            marginTop: "10px",
          }}
        >
          Complete today and earn +50 XP
        </p>

        <button
          onClick={() =>
            setCompleted(true)
          }
          style={{
            marginTop: "20px",
            background: completed
              ? "#22c55e"
              : "#2563eb",
            color: "white",
            border: "none",
            padding: "14px 24px",
            borderRadius: "12px",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          {completed
            ? "Challenge Completed ✅"
            : "Complete Challenge"}
        </button>
      </div>
    </div>
  );
}
