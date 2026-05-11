"use client";

import { useState } from "react";

export default function CommunityPage() {
  const [messages, setMessages] =
    useState([
      "Welcome to Sports Community 🔥",
    ]);

  const [input, setInput] =
    useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;

    setMessages([
      ...messages,
      input,
    ]);

    setInput("");
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
          fontSize: "40px",
          marginBottom: "20px",
        }}
      >
        Community Chat 💬
      </h1>

      <div
        style={{
          background: "#0f172a",
          padding: "20px",
          borderRadius: "20px",
          minHeight: "400px",
        }}
      >
        {messages.map(
          (msg, index) => (
            <div
              key={index}
              style={{
                background: "#1e293b",
                padding: "12px",
                borderRadius: "12px",
                marginBottom: "12px",
              }}
            >
              {msg}
            </div>
          )
        )}

        <input
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
          placeholder="Type message..."
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "12px",
            border: "none",
            marginTop: "15px",
          }}
        />

        <button
          onClick={sendMessage}
          style={{
            marginTop: "15px",
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "14px 24px",
            borderRadius: "12px",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          Send 🚀
        </button>
      </div>
    </div>
  );
}
