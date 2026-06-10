"use client";

import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot, setDoc } from "firebase/firestore";

export default function DietPage() {
  const [goal, setGoal] = useState("");
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);

  // 1. User Authentication Check
  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId(null);
        setLoading(false); // Agar user logged in nahi hai, toh infinite loading na ho
      }
    });

    return () => unsubscribeAuth();
  }, []);

  // 2. Real-time Firebase Synchronization
  useEffect(() => {
    if (!userId) return;

    const userDocRef = doc(db, "users", userId);
    
    // onSnapshot server se hamesha latest data laata hai
    const unsubscribeDoc = onSnapshot(userDocRef, (docSnap) => {
      if (docSnap.exists()) {
        // Agar database me pehle se 'dietGoal' save hai, toh usko set karo
        setGoal(docSnap.data().dietGoal || "");
      }
      setLoading(false);
    });

    return () => unsubscribeDoc();
  }, [userId]);

  // 3. Update Data Function
  async function handleGoalChange(e) {
    const selectedGoal = e.target.value;
    
    // UI me turant dikhane ke liye pehle local state update karte hain
    setGoal(selectedGoal);

    if (!userId) {
      alert("Diet plan save karne ke liye pehle login karein!");
      return;
    }

    // Database me update bhejte hain
    try {
      await setDoc(
        doc(db, "users", userId),
        { dietGoal: selectedGoal },
        { merge: true } // Merge true se baki data (jaise water count) delete nahi hoga
      );
    } catch (error) {
      console.error("Diet goal update karne me error aaya:", error);
    }
  }

  // Loading Screen
  if (loading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#020617",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "sans-serif"
        }}
      >
        <h2>Fetching your diet plan...</h2>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "white",
        padding: "20px",
        fontFamily: "sans-serif"
      }}
    >
      <h1 style={{ color: "#39ff14", fontSize: "38px" }}>
        🍎 Diet Planner
      </h1>

      <p style={{ color: "#94a3b8" }}>
        Choose your fitness goal
      </p>

      <select
        value={goal}
        onChange={handleGoalChange}
        style={{
          marginTop: "20px",
          padding: "12px",
          borderRadius: "12px",
          width: "100%",
          background: "#0f172a",
          color: "white",
          border: "none",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        <option value="">Select Goal</option>
        <option value="muscle">Build Muscle</option>
        <option value="fat">Lose Fat</option>
        <option value="energy">More Energy</option>
      </select>

      {goal === "muscle" && (
        <div style={box}>
          <h3 style={{ margin: "0 0 10px 0", color: "#38bdf8" }}>💪 High Protein Diet</h3>
          <p style={{ margin: 0 }}>Eggs, Paneer, Milk, Banana, Chicken</p>
        </div>
      )}

      {goal === "fat" && (
        <div style={box}>
          <h3 style={{ margin: "0 0 10px 0", color: "#f87171" }}>🥗 Fat Loss Diet</h3>
          <p style={{ margin: 0 }}>Salad, Fruits, Oats, Green Tea</p>
        </div>
      )}

      {goal === "energy" && (
        <div style={box}>
          <h3 style={{ margin: "0 0 10px 0", color: "#facc15" }}>⚡ Energy Boost Diet</h3>
          <p style={{ margin: 0 }}>Dry Fruits, Juice, Rice, Peanut Butter</p>
        </div>
      )}
    </div>
  );
}

// Styles object ko component ke bahar hi rakha hai taaki performance achi rahe
const box = {
  background: "#0f172a",
  padding: "20px",
  borderRadius: "20px",
  marginTop: "30px",
  lineHeight: "25px",
  border: "1px solid #1e293b" // Thoda depth add karne ke liye border lagaya hai
};
