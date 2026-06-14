"use client";

import { useState } from "react";
import { auth, db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { BookOpen, Upload } from "lucide-react";

export default function CourseManagement() {
  const [form, setForm] = useState({ title: "", sport: "Cricket", level: "Beginner", price: 0, modulesCount: 1, description: "", thumbnail: "" });
  const [loading, setLoading] = useState(false);

  const handlePublish = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "courses"), {
        ...form,
        coachId: auth.currentUser?.uid || "coach_1",
        students: 0,
        rating: 5.0,
        createdAt: new Date().toISOString()
      });
      alert("Masterclass Course Published to Academy!");
      setForm({ title: "", sport: "Cricket", level: "Beginner", price: 0, modulesCount: 1, description: "", thumbnail: "" });
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: "700px" }}>
      <h1 style={{ fontSize: "28px", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}><BookOpen color="#9d4edd"/> Course Manager</h1>
      
      <form onSubmit={handlePublish} style={s.glass}>
        <label style={s.label}>Course Title</label>
        <input style={s.input} type="text" value={form.title} onChange={e => setForm({...form, title: e.target.value})} required />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
          <div>
            <label style={s.label}>Sport Category</label>
            <select style={s.input} value={form.sport} onChange={e => setForm({...form, sport: e.target.value})}>
              <option>Cricket</option><option>Football</option><option>Athletics</option><option>Boxing</option><option>Gym/Fitness</option>
            </select>
          </div>
          <div>
            <label style={s.label}>Course Level</label>
            <select style={s.input} value={form.level} onChange={e => setForm({...form, level: e.target.value})}>
              <option>Beginner</option><option>Advanced</option><option>Elite</option>
            </select>
          </div>
          <div>
            <label style={s.label}>Price (USD) - 0 for Free</label>
            <input style={s.input} type="number" value={form.price} onChange={e => setForm({...form, price: parseInt(e.target.value)})} required />
          </div>
          <div>
            <label style={s.label}>Total Modules</label>
            <input style={s.input} type="number" value={form.modulesCount} onChange={e => setForm({...form, modulesCount: parseInt(e.target.value)})} required />
          </div>
        </div>

        <label style={s.label}>Thumbnail Image URL</label>
        <input style={s.input} type="url" placeholder="https://..." value={form.thumbnail} onChange={e => setForm({...form, thumbnail: e.target.value})} />

        <label style={s.label}>Course Description</label>
        <textarea style={{...s.input, height: "100px", resize: "none"}} value={form.description} onChange={e => setForm({...form, description: e.target.value})} required />

        <button type="submit" disabled={loading} style={{ ...s.btn, background: "#9d4edd", width: "100%", color: "white", marginTop: "10px", display:"flex", justifyContent:"center", gap:"10px" }}>
          <Upload size={18}/> {loading ? "Publishing..." : "Publish Course to Academy"}
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
  
