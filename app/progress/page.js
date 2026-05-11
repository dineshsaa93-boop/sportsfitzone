"use client";

import { useState } from "react";

export default function ProgressPage() {

  const [weight, setWeight] =
    useState(65);

  const [workouts, setWorkouts] =
    useState(12);

  const [calories, setCalories] =
    useState(3200);

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
        📊 Fitness Progress
      </h1>

      <div style={card}>
        <h2>⚖ Weight</h2>

        <h1>{weight} KG</h1>

        <button
          style={btn}
          onClick={() =>
            setWeight(weight - 1)
          }
        >
          Update
        </button>
      </div>

      <div style={card}>
        <h2>💪 Workouts</h2>

        <h1>{workouts}</h1>

        <button
          style={btn}
          onClick={() =>
            setWorkouts(workouts + 1)
          }
        >
          Add Workout
        </button>
      </div>

      <div style={card}>
        <h2>🔥 Calories Burned</h2>

        <h1>{calories}</h1>

        <button
          style={btn}
          onClick={() =>
            setCalories(calories + 100)
          }
        >
          Burn Calories
        </button>
      </div>
    </div>
  );
}

const card = {
  background: "#0f172a",
  padding: "25px",
  borderRadius: "20px",
  marginBottom: "25px",
};

const btn = {
  marginTop: "20px",
  background: "#39ff14",
  border: "none",
  padding: "12px 20px",
  borderRadius: "12px",
  fontWeight: "bold"
};
