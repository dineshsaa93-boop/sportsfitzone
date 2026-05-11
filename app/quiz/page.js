"use client";

import { useState } from "react";

export default function QuizPage() {
  const [score, setScore] =
    useState(0);

  const [answered, setAnswered] =
    useState(false);

  const correctAnswer = () => {
    if (!answered) {
      setScore(score + 1);
      setAnswered(true);
    }
  };

  const wrongAnswer = () => {
    setAnswered(true);
  };

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
        Sports Quiz 🧠
      </h1>

      <div
        style={{
          background: "#0f172a",
          padding: "25px",
          borderRadius: "20px",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
          }}
        >
          Which country won FIFA 2022?
        </h2>

        <div
          style={{
            marginTop: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <button
            onClick={wrongAnswer}
            style={btnStyle}
          >
            Brazil
          </button>

          <button
            onClick={correctAnswer}
            style={btnStyle}
          >
            Argentina
          </button>

          <button
            onClick={wrongAnswer}
            style={btnStyle}
          >
            France
          </button>

          <button
            onClick={wrongAnswer}
            style={btnStyle}
          >
            Germany
          </button>
        </div>

        <h3
          style={{
            marginTop: "25px",
            color: "#38bdf8",
          }}
        >
          Score: {score}
        </h3>
      </div>
    </div>
  );
}

const btnStyle = {
  background: "#1e293b",
  color: "white",
  border: "none",
  padding: "14px",
  borderRadius: "12px",
  fontSize: "18px",
};
