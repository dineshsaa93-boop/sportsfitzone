"use client";

import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function AICoach() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  function askAI() {
    if (question.includes("weight")) {
      setAnswer("Do cardio and avoid junk food 💪");
    } else if (question.includes("muscle")) {
      setAnswer("Eat protein and do gym workout 🏋️");
    } else {
      setAnswer("Train daily and stay consistent 🔥");
    }
  }

  return (
    <div
      style={{
        background: "#020617",
        minHeight: "100vh",
        color: "white",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>
        AI Coach 🤖
      </h1>

      <p style={{ marginBottom: "20px", color: "#94a3b8" }}>
        Your personal sports AI coach.
      </p>

      <input
        type="text"
        placeholder="Ask something..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        style={{
          width: "100%",
          padding: "15px",
          borderRadius: "12px",
          border: "none",
          fontSize: "18px",
          marginBottom: "15px",
        }}
      />

      <button
        onClick={askAI}
        style={{
          background: "#22c55e",
          color: "black",
          padding: "12px 20px",
          border: "none",
          borderRadius: "12px",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        Ask AI
      </button>

      {answer && (
        <div
          style={{
            marginTop: "20px",
            background: "#0f172a",
            padding: "20px",
            borderRadius: "15px",
            fontSize: "18px",
          }}
        >
          {answer}
        </div>
      )}
    </div>
  );
}
