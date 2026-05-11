"use client";

import { useState } from "react";

export default function WaterTracker() {
  const [glasses, setGlasses] =
    useState(0);

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
        Water Tracker 💧
      </h1>

      <div
        style={{
          background: "#0f172a",
          padding: "25px",
          borderRadius: "20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "60px",
            color: "#38bdf8",
          }}
        >
          {glasses}
        </h2>

        <p
          style={{
            color: "#94a3b8",
            fontSize: "20px",
            marginTop: "10px",
          }}
        >
          Glasses Drunk Today
        </p>

        <button
          onClick={() =>
            setGlasses(glasses + 1)
          }
          style={{
            marginTop: "25px",
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "14px 24px",
            borderRadius: "12px",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          Drink Water 🚰
        </button>
      </div>
    </div>
  );
}
