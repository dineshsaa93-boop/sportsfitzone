"use client";

import { useState } from "react";

export default function SleepPage() {

  const [hours, setHours] =
    useState(7);

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
              setHours(hours - 1)
            }
          >
            -1 Hour
          </button>

          <button
            style={btn}
            onClick={() =>
              setHours(hours + 1)
            }
          >
            +1 Hour
          </button>
        </div>

        <p
          style={{
            marginTop: "25px",
            color: "#94a3b8"
          }}
        >
          Good sleep improves recovery & performance 😎
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
  fontWeight: "bold"
};
