"use client";

import { useState } from "react";

import {
  Flame,
  Dumbbell,
  Droplets,
  Trophy
} from "lucide-react";

export default function ProgressPage() {

  const [pushups, setPushups] =
    useState(50);

  const [water, setWater] =
    useState(3);

  const [calories, setCalories] =
    useState(1200);

  const [streak, setStreak] =
    useState(7);

  return (

    <div style={styles.page}>

      <h1 style={styles.heading}>
        Workout Progress 📈
      </h1>

      {/* TOP GRID */}

      <div style={styles.grid}>

        <div style={styles.card}>

          <Flame
            color="#ff7b00"
            size={40}
          />

          <h2>{calories}</h2>

          <p>Calories Burned</p>

        </div>

        <div style={styles.card}>

          <Dumbbell
            color="#39ff14"
            size={40}
          />

          <h2>{pushups}</h2>

          <p>Pushups</p>

        </div>

        <div style={styles.card}>

          <Droplets
            color="#3ea6ff"
            size={40}
          />

          <h2>{water}L</h2>

          <p>Water Intake</p>

        </div>

        <div style={styles.card}>

          <Trophy
            color="#ffd633"
            size={40}
          />

          <h2>{streak}</h2>

          <p>Day Streak</p>

        </div>

      </div>

      {/* BUTTONS */}

      <div style={styles.btnBox}>

        <button
          style={styles.btn}
          onClick={() =>
            setPushups(pushups + 10)
          }
        >
          +10 Pushups
        </button>

        <button
          style={styles.btn}
          onClick={() =>
            setWater(water + 1)
          }
        >
          +1L Water
        </button>

        <button
          style={styles.btn}
          onClick={() =>
            setCalories(calories + 100)
          }
        >
          +100 Calories
        </button>

      </div>

      {/* PROGRESS BAR */}

      <div style={styles.progressSection}>

        <h2>Weekly Goal 🔥</h2>

        <div style={styles.progressBar}>

          <div style={styles.progressFill}>
          </div>

        </div>

        <p style={{ color: "#aaa" }}>
          68% completed
        </p>

      </div>

    </div>

  );

}

const styles = {

  page: {
    background: "#020817",
    minHeight: "100vh",
    padding: 20,
    color: "white",
    fontFamily: "sans-serif"
  },

  heading: {
    fontSize: 35,
    marginBottom: 30
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    gap: 20
  },

  card: {
    background: "#081120",
    padding: 25,
    borderRadius: 25,
    border: "1px solid #1d2b44",
    textAlign: "center"
  },

  btnBox: {
    marginTop: 35,
    display: "flex",
    flexDirection: "column",
    gap: 15
  },

  btn: {
    background: "#39ff14",
    border: "none",
    padding: 18,
    borderRadius: 18,
    fontWeight: "bold",
    fontSize: 16
  },

  progressSection: {
    marginTop: 40,
    background: "#081120",
    padding: 25,
    borderRadius: 25
  },

  progressBar: {
    marginTop: 20,
    width: "100%",
    height: 15,
    background: "#1d2b44",
    borderRadius: 20,
    overflow: "hidden"
  },

  progressFill: {
    width: "68%",
    height: "100%",
    background: "#39ff14"
  }

};
