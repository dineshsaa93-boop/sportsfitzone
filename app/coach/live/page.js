"use client";

import { useState } from "react";
import { auth, db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { Video, Calendar } from "lucide-react";

export default function LiveSessionManager() {
  const [form, setForm] = useState({ title: "", date: "", time: "", meetingLink: "", sport: "All", description: "" });
  const [loading, setLoading] = useState(false);

  const handleSchedule = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "liveSessions"), {
        ...form,
        coachId: auth.currentUser?.uid || "coach_1",
        coach: auth.currentUser?.displayName || "Elite Coach",
        createdAt: new Date().toISOString()
      });
      alert("Live Clinic Scheduled!");
      setForm({ title: "", date: "", time: "", meetingLink: "", sport: "All", description: "" });
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: "600px" }}>
      <h1 style={{ fontSize: "28px", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}><Video color="#ff4d88"/> Schedule Live Clinic</h1>
      
      <form onSubmit={handleSchedule} style={s.glass}>
        <label style={s.label}>Clinic Title</label>
        <input style={s.input} type="text" value={form.title} onChange={e => setForm({...form, title: e.target.value})} required />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
          <div>
            <label style={s.label}>Date</label>
            <input style={s.input} type="date" value={form.date} onChange={e => setForm({...form, date: e.target.value})} required />
          </div>
          <div>
            <label style={s.label}>Time</label>
            <input style={s.input} type="time" value={form.time} onChange={e => setForm({...form, time: e.target.value})} required />
          </div>
        </div>

        <label style={s.label}>Meeting Link (Zoom, Meet, etc.)</label>
        <input style={s.input} type="url" placeholder="https://..." value={form.meetingLink} onChange={e => setForm({...form, meetingLink: e.target.value})} required />

        <label style={s.label}>Description / Agenda</label>
        <textarea style={{...s.input, height: "80px", resize: "none"}} value={form.description} onChange={e => setForm({...form, description: e.target.value})} required />

        <button type="submit" disabled={loading} style={{ ...s.btn, background: "#ff4d88", width: "100%", color: "white", marginTop: "10px", display:"flex", justifyContent:"center", gap:"10px" }}>
          <Calendar size={18}/> {loading ? "Scheduling..." : "Schedule Session"}
        </button>
      </form>
    </div>
  );
}

const s = {
  glass: { background: "rgba(15, 23, 42, 0.6)", backdropFilter: "blur(12px)", padding: "30px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.08)" },
  label: { display: "block", fontSize: "13px", color: "#94a3b8", marginBottom: "8px", fontWeight: "bold" },
  input: { width: "100%", padding: "12px", background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", color: "white", marginBottom: "20px", boxSizing: "border-box", outline: "none" },
  btn: { padding: "12px 20px", border: "none", borderRadius: "8px", fontWeight: "bold", cursor: "pointer" }
};
  
