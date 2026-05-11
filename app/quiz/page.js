"use client";

import { useState } from "react";

export default function QuizPage() {

  const [score, setScore] =
    useState(0);

  const [answered, setAnswered] =
    useState(false);

  const correct = "Cricket";

  function check(answer) {

    if (answered) return;

    setAnswered(true);

    if (answer === correct) {
      setScore(score + 1);
    }
  }

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
          color: "#39ff14"
        }}
      >
        🧠 Sports Quiz
      </h1>

      <h2
        style={{
          marginTop: "30px"
        }}
      >
        Which sport uses a bat?
      </h2>

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "12px"
        }}
      >
        <button
          onClick={() =>
            check("Football")
          }
          style={btn}
        >
          Football
        </button>

        <button
          onClick={() =>
            check("Cricket")
          }
          style={btn}
        >
          Cricket
        </button>

        <button
          onClick={() =>
            check("Swimming")
          }
          style={btn}
        >
          Swimming
        </button>
      </div>

      <h3
        style={{
          marginTop: "30px",
          color: "#38bdf8"
        }}
      >
        Score: {score}
      </h3>
    </div>
  );
}

const btn = {
  padding: "14px",
  borderRadius: "14px",
  border: "none",
  background: "#1e293b",
  color: "white",
  fontSize: "16px"
};
