"use client";

import { useState } from "react";

export default function LoginPage() {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  return (
    <div
      style={{
        background: "#020617",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        fontFamily: "sans-serif"
      }}
    >
      <div
        style={{
          background: "#0f172a",
          padding: "30px",
          borderRadius: "25px",
          width: "100%",
          maxWidth: "400px",
          color: "white"
        }}
      >
        <h1
          style={{
            fontSize: "38px",
            marginBottom: "10px",
            color: "#39ff14"
          }}
        >
          Login 🔐
        </h1>

        <p
          style={{
            color: "#94a3b8",
            marginBottom: "25px"
          }}
        >
          Welcome back athlete 😎
        </p>

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          style={input}
        />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          style={input}
        />

        <button
          style={button}
        >
          Login
        </button>
      </div>
    </div>
  );
}

const input = {
  width: "100%",
  padding: "14px",
  marginBottom: "18px",
  borderRadius: "12px",
  border: "none",
  background: "#1e293b",
  color: "white",
  fontSize: "16px"
};

const button = {
  width: "100%",
  padding: "14px",
  borderRadius: "12px",
  border: "none",
  background: "#39ff14",
  color: "black",
  fontWeight: "bold",
  fontSize: "18px"
};
