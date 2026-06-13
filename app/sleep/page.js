"use client";

import { useState } from "react";

export default function SleepPage() {

  const [hours, setHours] =
    useState(7);

  const goal = 8;

  const progress =
    Math.min(
      (hours / goal) * 100,
      100
    );

  return (
    <div
      style={{
        background: "#020617",
        minHeight: "100vh",
        color: "white",
        padding: "20px",
        fontFamily: "sans-serif"
      }}
    >
      <h1
        style={{
          fontSize: "40px",
          marginBottom: "30px"
        }}
      >
        💤 Sleep Tracker
      </h1>

      <div
        style={{
          background: "#0f172a",
          padding: "25px",
          borderRadius: "20px",
          textAlign: "center"
        }}
      >

        <h2
          style={{
            color: "#94a3b8"
          }}
        >
          Today's Sleep
        </h2>

        <h1
          style={{
            fontSize: "70px",
            marginTop: "20px",
            color: "#38bdf8"
          }}
        >
          {hours}h
        </h1>

        {/* Progress Bar */}

        <div
          style={{
            marginTop: "20px"
          }}
        >

          <div
            style={{
              height: "14px",
              background: "#1e293b",
              borderRadius: "20px",
              overflow: "hidden"
            }}
          >

            <div
              style={{
                width: `${progress}%`,
                height: "100%",
                background: "#38bdf8"
              }}
            />

          </div>

          <p
            style={{
              marginTop: "10px",
              color: "#94a3b8"
            }}
          >
            Goal: {goal} Hours
          </p>

        </div>

        {/* Buttons */}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            marginTop: "25px"
          }}
        >

          <button
            style={btn}
            onClick={() =>
              setHours(
                Math.max(
                  0,
                  hours - 1
                )
              )
            }
          >
            -1 Hour
          </button>

          <button
            style={btn}
            onClick={() =>
              setHours(
                hours + 1
              )
            }
          >
            +1 Hour
          </button>

        </div>

        {/* Status */}

        <h3
          style={{
            marginTop: "25px",
            color:
              hours >= 8
                ? "#22c55e"
                : "#facc15"
          }}
        >
          {hours >= 8
            ? "🏆 Excellent Sleep"
            : "⚠️ Need More Sleep"}
        </h3>

        {/* XP Reward */}

        {hours >= 8 && (

          <p
            style={{
              marginTop: "10px",
              color: "#22c55e",
              fontWeight: "bold",
              fontSize: "18px"
            }}
          >
            +10 XP Earned 🔥
          </p>

        )}

        <p
          style={{
            marginTop: "25px",
            color: "#94a3b8"
          }}
        >
          Good sleep improves
          recovery,
          focus &
          performance 😎
        </p>

      </div>
    </div>
  );
}

const btn = {
  background: "#2563eb",
  color: "white",
  border: "none",
  padding: "12px 18px",
  borderRadius: "12px",
  fontWeight: "bold",
  fontSize: "16px",
  cursor: "pointer"
};
