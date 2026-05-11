"use client";

import { useState } from "react";

export default function AICoach() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const getAnswer = () => {
    const q = question.toLowerCase();

    if (q.includes("weight")) {
      setAnswer("Do cardio daily and avoid junk food.");
    } else if (q.includes("muscle")) {
      setAnswer("Eat protein rich food and do strength workout.");
    } else if (q.includes("cricket")) {
      setAnswer("Practice batting timing and footwork daily.");
    } else if (q.includes("football")) {
      setAnswer("Improve stamina and sprint speed.");
    } else {
      setAnswer("Stay consistent and train hard every day 💪");
    }
  };

  return (
    <div
      style={{
        background: "#061122",
        minHeight: "100vh",
        padding: "20px",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
        AI Coach 🤖
      </h1>

      <input
        type="text"
        placeholder="Ask anything..."
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
        onClick={getAnswer}
        style={{
          background: "#00ff66",
          color: "black",
          padding: "12px 20px",
          border: "none",
          borderRadius: "10px",
          fontWeight: "bold",
          fontSize: "18px",
        }}
      >
        Ask AI
      </button>

      {answer && (
        <div
          style={{
            marginTop: "25px",
            background: "#0d1b2a",
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
