"use client";

import { useState } from "react";
import { db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { Apple, CheckCircle } from "lucide-react";

export default function DietAssignment() {
  const [form, setForm] = useState({ studentId: "", calorieTarget: 2500, proteinTarget: 150, carbsTarget: 300, fatTarget: 70, waterTarget: 4.0 });
  const [loading, setLoading] = useState(false);

  const handleAssign = async (e) => {
    e.preventDefault();
    if (!form.studentId) return alert("Student ID is required.");
    setLoading(true);
    
    try {
      // Overrides/Updates the student's Diet Profile directly
      await setDoc(doc(db, "dietProfiles", form.studentId), {
        calorieTarget: form.calorieTarget,
        proteinTarget: form.proteinTarget,
        carbsTarget: form.carbsTarget,
        fatTarget: form.fatTarget,
        waterTarget: form.waterTarget,
        coachAssigned: true,
        updatedAt: new Date().toISOString()
      }, { merge: true });
      
      alert("Nutrition Protocol synced to athlete's Diet Planner!");
      setForm({...form, studentId: ""});
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: "600px" }}>
      <h1 style={{ fontSize: "28px", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}><Apple color="#39ff14"/> Diet Planner Sync</h1>
      
      <form onSubmit={handleAssign} style={s.glass}>
        <p style={{ color: "#aaa", fontSize: "14px", marginBottom: "20px" }}>This will directly override the athlete's Smart Diet Generator settings.</p>

        <label style={s.label}>Athlete User ID</label>
        <input style={s.input} type="text" placeholder="Paste Student UID here..." value={form.studentId} onChange={e => setForm({...form, studentId: e.target.value})} required />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
          <div>
            <label style={s.label}>Daily Calories (kcal)</label>
            <input style={s.input} type="number" value={form.calorieTarget} onChange={e => setForm({...form, calorieTarget: parseInt(e.target.value)})} required />
          </div>
          <div>
            <label style={s.label}>Protein Target (g)</label>
            <input style={s.input} type="number" value={form.proteinTarget} onChange={e => setForm({...form, proteinTarget: parseInt(e.target.value)})} required />
          </div>
          <div>
            <label style={s.label}>Carbs Target (g)</label>
            <input style={s.input} type="number" value={form.carbsTarget} onChange={e => setForm({...form, carbsTarget: parseInt(e.target.value)})} required />
          </div>
          <div>
            <label style={s.label}>Fat Target (g)</label>
            <input style={s.input} type="number" value={form.fatTarget} onChange={e => setForm({...form, fatTarget: parseInt(e.target.value)})} required />
          </div>
        </div>

        <label style={s.label}>Daily Water Target (Liters)</label>
        <input style={s.input} type="number" step="0.1" value={form.waterTarget} onChange={e => setForm({...form, waterTarget: parseFloat(e.target.value)})} required />

        <button type="submit" disabled={loading} style={{ ...s.btn, background: "#39ff14", width: "100%", marginTop: "10px", display:"flex", justifyContent:"center", gap:"10px" }}>
          <CheckCircle size={18}/> {loading ? "Syncing..." : "Push to Athlete Diet Planner"}
        </button>
      </form>
    </div>
  );
}

const s = {
  glass: { background: "rgba(15, 23, 42, 0.6)", backdropFilter: "blur(12px)", padding: "30px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.08)" },
  label: { display: "block", fontSize: "13px", color: "#94a3b8", marginBottom: "8px", fontWeight: "bold" },
  input: { width: "100%", padding: "12px", background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", color: "white", marginBottom: "20px", boxSizing: "border-box", outline: "none" },
  btn: { padding: "12px 20px", color: "#020617", border: "none", borderRadius: "8px", fontWeight: "bold", cursor: "pointer" }
};
  
