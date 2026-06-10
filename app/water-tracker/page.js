"use client";

import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

export default function WaterTracker() {
  const [water, setWater] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Firebase auth state ko listen karne ke liye taaki user milte hi data load ho sake
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const snap = await getDoc(doc(db, "users", user.uid));
          if (snap.exists()) {
            setWater(snap.data().water || 0);
          }
        } catch (error) {
          console.error("Error loading water data:", error);
        }
      }
      setLoading(false); // Data load hone ke baad loading khatam
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  async function addWater() {
    const user = auth.currentUser;

    if (!user) {
      alert("Pehle app me login karein!");
      return;
    }

    const newWater = water + 1;
    setWater(newWater); // UI par turant badhane ke liye (Optimistic Update)

    try {
      // setDoc with { merge: true } ka fayda ye hai ki agar document nahi bhi bana hoga toh ye bana dega
      await setDoc(
        doc(db, "users", user.uid),
        {
          water: newWater,
        },
        { merge: true }
      );
    } catch (error) {
      console.error("Error updating water data:", error);
      // Agar Firebase me update fail ho jaye toh purana state wapas laane ke liye
      setWater(water);
    }
  }

  // Jab tak user ka data load ho raha hai tab tak loading screen dikhegi
  if (loading) {
    return (
      <div
        style={{
          background: "#020617",
          minHeight: "100vh",
          color: "white",
          padding: "20px",
          fontFamily: "sans-serif",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <h2>Loading Tracker...</h2>
      </div>
    );
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
        onClick={addWater}
        style={{
          marginTop: "20px",
          padding: "14px",
          borderRadius: "16px",
          border: "none",
          background: "#38bdf8",
          color: "black",
          fontWeight: "bold",
          fontSize: "18px",
          cursor: "pointer"
        }}
      >
        + Add Water
      </button>
    </div>
  );
}
