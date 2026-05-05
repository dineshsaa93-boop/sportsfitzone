"use client";

import { useState } from "react";

export default function Coach() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const getAnswer = () => {
    const q = question.toLowerCase();

    if (q.includes("stamina")) {
      setAnswer("🏃 रोज 20-30 min running करो + skipping + healthy diet लो");
    } else if (q.includes("cricket")) {
      setAnswer("🏏 daily practice + hand-eye coordination drills करो");
    } else if (q.includes("fitness")) {
      setAnswer("💪 push-ups, squats, plank रोज करो");
    } else {
      setAnswer("🤖 Try asking about stamina, cricket, fitness etc.");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>🤖 AI Sports Coach</h1>

      <input
        placeholder="Ask something..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        style={{ padding: 10, width: "100%", marginTop: 10 }}
      />

      <button onClick={getAnswer} style={{ marginTop: 10 }}>
        Ask Coach
      </button>

      {answer && (
        <div style={{
          marginTop: 20,
          padding: 15,
          background: "#f0f0f0",
          borderRadius: 10
        }}>
          {answer}
        </div>
      )}
    </div>
  );
}
