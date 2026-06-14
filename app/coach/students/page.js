"use client";

import { useState, useEffect } from "react";
import { auth, db } from "../../firebase";
import { collection, getDocs, query } from "firebase/firestore";
import { Search, Activity, Flame, Award } from "lucide-react";

export default function StudentManagement() {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch all users (In production, query where coachId == this coach)
    const fetchStudents = async () => {
      const snap = await getDocs(collection(db, "users"));
      let arr = [];
      snap.forEach(doc => arr.push({ id: doc.id, ...doc.data() }));
      setStudents(arr);
    };
    fetchStudents();
  }, []);

  const filtered = students.filter(s => (s.displayName || "Athlete").toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>Athlete Roster</h1>
      
      <div style={{ position: "relative", marginBottom: "30px", maxWidth: "400px" }}>
        <Search size={18} color="#94a3b8" style={{ position: "absolute", left: "15px", top: "12px" }} />
        <input 
          type="text" 
          placeholder="Search athletes by name..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: "100%", padding: "12px 15px 12px 45px", background: "rgba(15, 23, 42, 0.8)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", color: "white", boxSizing: "border-box", outline: "none" }}
        />
      </div>

      <div style={{ display: "grid", gap: "15px" }}>
        {filtered.map((student, i) => (
          <div key={i} style={{ ...s.glass, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "15px" }}>
            <div>
              <h3 style={{ margin: "0 0 5px" }}>{student.displayName || "Unknown Athlete"}</h3>
              <p style={{ margin: 0, color: "#aaa", fontSize: "13px" }}>ID: {student.id}</p>
            </div>
            
            <div style={{ display: "flex", gap: "20px" }}>
              <ProgressStat label="Workout" pct={student.workoutProgress || 75} color="#3ea6ff" icon={<Activity size={14}/>} />
              <ProgressStat label="Diet" pct={student.dietProgress || 60} color="#39ff14" icon={<Flame size={14}/>} />
              <ProgressStat label="Challenge" pct={student.challengeProgress || 40} color="#9d4edd" icon={<Award size={14}/>} />
            </div>

            <div style={{ textAlign: "right" }}>
              <h3 style={{ margin: 0, color: "#ffaa00" }}>{student.xp || 0} XP</h3>
              <p style={{ margin: 0, color: "#94a3b8", fontSize: "12px" }}>🔥 {student.streak || 0} Day Streak</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const ProgressStat = ({ label, pct, color, icon }) => (
  <div style={{ width: "100px" }}>
    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#e2e8f0", marginBottom: "4px" }}>
      <span style={{display:"flex", gap:"4px", alignItems:"center"}}>{icon} {label}</span>
      <span>{pct}%</span>
    </div>
    <div style={{ background: "rgba(255,255,255,0.1)", height: "6px", borderRadius: "3px" }}>
      <div style={{ background: color, width: `${pct}%`, height: "100%", borderRadius: "3px" }}></div>
    </div>
  </div>
);

const s = {
  glass: { background: "rgba(15, 23, 42, 0.6)", backdropFilter: "blur(12px)", padding: "20px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.08)" }
};
            
