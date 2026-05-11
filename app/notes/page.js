"use client";

import { useState } from "react";

export default function NotesPage() {

  const [note, setNote] =
    useState("");

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
        📝 Fitness Notes
      </h1>

      <textarea
        value={note}
        onChange={(e) =>
          setNote(e.target.value)
        }
        placeholder="Write your workout notes..."
        style={{
          width: "100%",
          height: "250px",
          marginTop: "30px",
          background: "#111827",
          color: "white",
          border: "none",
          borderRadius: "18px",
          padding: "20px",
          fontSize: "16px"
        }}
      />

      <button
        style={{
          marginTop: "20px",
          padding: "14px",
          borderRadius: "16px",
          border: "none",
          background: "#39ff14",
          color: "black",
          fontWeight: "bold",
          fontSize: "16px"
        }}
      >
        Save Notes
      </button>
    </div>
  );
          }
