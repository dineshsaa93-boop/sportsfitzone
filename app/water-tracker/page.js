"use client";

import { useEffect, useState } from "react";

import { auth, db } from "../../firebase";

import {
  doc,
  getDoc
} from "firebase/firestore";

export default function WaterTracker() {
const [water, setWater] = useState(0);

useEffect(() => {

  async function loadWater() {

    const user = auth.currentUser;

    if (!user) return;

    const docRef =
      doc(db, "users", user.uid);

    const snap =
      await getDoc(docRef);

    if (snap.exists()) {

      setWater(
        snap.data().water || 0
      );

    }

  }

  loadWater();

}, []);
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
          color: "#38bdf8"
        }}
      >
        💧 Water Tracker
      </h1>

      <h2
        style={{
          marginTop: "30px",
          fontSize: "45px"
        }}
      >
        {water} Glass
      </h2>

      <button
        onClick={() =>
          setWater(water + 1)
        }
        style={{
          marginTop: "20px",
          padding: "14px",
          borderRadius: "16px",
          border: "none",
          background: "#38bdf8",
          color: "black",
          fontWeight: "bold",
          fontSize: "18px"
        }}
      >
        + Add Water
      </button>
    </div>
  );
}
