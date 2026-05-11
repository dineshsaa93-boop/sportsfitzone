"use client";

import { useState } from "react";

export default function DietPage() {
  const [goal, setGoal] = useState("");

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "white",
        padding: "20px",
        fontFamily: "sans-serif"
      }}
    >
      <h1 style={{ color: "#39ff14", fontSize: "38px" }}>
        🍎 Diet Planner
      </h1>

      <p style={{ color: "#94a3b8" }}>
        Choose your fitness goal
      </p>

      <select
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        style={{
          marginTop: "20px",
          padding: "12px",
          borderRadius: "12px",
          width: "100%",
          background: "#0f172a",
          color: "white",
          border: "none"
        }}
      >
        <option value="">Select Goal</option>
        <option value="muscle">Build Muscle</option>
        <option value="fat">Lose Fat</option>
        <option value="energy">More Energy</option>
      </select>

      {goal === "muscle" && (
        <div style={box}>
          💪 High Protein Diet  
          <p>Eggs, Paneer, Milk, Banana, Chicken</p>
        </div>
      )}

      {goal === "fat" && (
        <div style={box}>
          🥗 Fat Loss Diet  
          <p>Salad, Fruits, Oats, Green Tea</p>
        </div>
      )}

      {goal === "energy" && (
        <div style={box}>
          ⚡ Energy Boost Diet  
          <p>Dry Fruits, Juice, Rice, Peanut Butter</p>
        </div>
      )}
    </div>
  );
}

const box = {
  background: "#0f172a",
  padding: "20px",
  borderRadius: "20px",
  marginTop: "30px",
  lineHeight: "30px"
};
