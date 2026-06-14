"use client";

import { useState } from "react";
import { auth, db } from "../../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { Dumbbell, Send } from "lucide-react";

export default function WorkoutAssignment() {
  const [form, setForm] = useState({ studentId: "ALL", title: "", reps: "", xp: 50, difficulty: "Medium", dueDate: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "studentAssignments"), {
        ...form,
        coachId: auth.currentUser?.uid || "coach_1",
        taskType: "Workout",
        status: "Pending",
        assignedAt: new Date().toISOString()
      });
      alert("Workout assigned successfully to Workout Hub!");
      setForm({ studentId: "ALL", title: "", reps: "", xp: 50, difficulty: "Medium", dueDate: "" });
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: "600px" }}>
      <h1 style={{ fontSize: "28px", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}><Dumbbell color="#3ea6ff"/> Assign Workout Task</h1>
      
      <form onSubmit={handleSubmit} style={s.glass}>
        <label style={s.label}>Assign To (Student ID or ALL)</label>
        <input style={s.input} type="text" value={form.studentId} onChange={e => setForm({...form, studentId: e.target.value})} required />

        <label style={s.label}>Workout Title / Exercise</label>
        <input style={s.input} type="text" placeholder="e.g. Explosive Plyo Pushups" value={form.title} onChange={e => setForm({...form, title: e.target.value})} required />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
          <div>
            <label style={s.label}>Reps / Duration</label>
            <input style={s.input} type="text" placeholder="e.g. 50 Reps" value={form.reps} onChange={e => setForm({...form, reps: e.target.value})} required />
          </div>
          <div>
            <label style={s.label}>XP Reward</label>
            <input style={s.input} type="number" value={form.xp} onChange={e => setForm({...form, xp: parseInt(e.target.value)})} required />
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
          <div>
            <label style={s.label}>Difficulty</label>
            <select style={s.input} value={form.difficulty} onChange={e => setForm({...form, difficulty: e.target.value})}>
              <option>Easy</option><option>Medium</option><option>Hard</option><option>Elite</option>
            </select>
          </div>
          <div>
            <label style={s.label}>Due Date</label>
            <input style={s.input} type="date" value={form.dueDate} onChange={e => setForm({...form, dueDate: e.target.value})} required />
          </div>
        </div>

        <button type="submit" disabled={loading} style={{ ...s.btn, background: "#3ea6ff", width: "100%", marginTop: "10px", display:"flex", justifyContent:"center", gap:"10px" }}>
          <Send size={18}/> {loading ? "Deploying Task..." : "Assign to Athlete"}
        </button>
      </form>
    </div>
  );
}

const s = {
  glass: { background: "rgba(15, 23, 42, 0.6)", backdropFilter: "blur(12px)", padding: "30px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.08)" },
  label: { display: "block", fontSize: "13px", color: "#94a3b8", marginBottom: "8px", fontWeight: "bold" },
  input: { width: "100%", padding: "12px", background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", color: "white", marginBottom: "20px", boxSizing: "border-box", outline: "none" },
  btn: { padding: "12px 20px", color: "#020617", border: "none", borderRadius: "8px", fontWeight: "bold", cursor: "pointer", transition: "0.2s" }
};
  
