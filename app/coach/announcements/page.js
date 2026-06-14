"use client";

import { useState } from "react";
import { auth, db } from "../../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { Megaphone, Send } from "lucide-react";

export default function CoachAnnouncements() {
  const [form, setForm] = useState({ title: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleBroadcast = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "coachAnnouncements"), {
        ...form,
        coachId: auth.currentUser?.uid || "coach_1",
        createdAt: new Date().toISOString()
      });
      alert("Announcement Broadcasted successfully!");
      setForm({ title: "", message: "" });
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: "600px" }}>
      <h1 style={{ fontSize: "28px", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}><Megaphone color="#ffaa00"/> Broadcast Announcement</h1>
      
      <form onSubmit={handleBroadcast} style={s.glass}>
        <p style={{ color: "#aaa", fontSize: "14px", marginBottom: "20px" }}>This message will be sent to the dashboard of all athletes enrolled under your coaching.</p>

        <label style={s.label}>Announcement Title</label>
        <input style={s.input} type="text" placeholder="e.g. Tournament Pre-Registration Open" value={form.title} onChange={e => setForm({...form, title: e.target.value})} required />

        <label style={s.label}>Message / Details</label>
        <textarea style={{...s.input, height: "150px", resize: "none"}} placeholder="Type your message here..." value={form.message} onChange={e => setForm({...form, message: e.target.value})} required />

        <button type="submit" disabled={loading} style={{ ...s.btn, background: "#ffaa00", width: "100%", color: "#020617", marginTop: "10px", display:"flex", justifyContent:"center", gap:"10px" }}>
          <Send size={18}/> {loading ? "Sending..." : "Send Broadcast"}
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
  
