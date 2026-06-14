"use client";

import { useState, useEffect } from "react";
import { auth, db } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, collection, getDocs, query, where } from "firebase/firestore";
import { Users, BookOpen, Video, FileText, Star } from "lucide-react";

export default function CoachDashboard() {
  const [coachId, setCoachId] = useState(null);
  const [profile, setProfile] = useState(null);
  const [stats, setStats] = useState({ students: 0, courses: 0, live: 0, pending: 0 });

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => {
      if (user) setCoachId(user.uid);
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    if (!coachId) return;
    const fetchData = async () => {
      // 1. Fetch Profile
      const profSnap = await getDoc(doc(db, "coachProfiles", coachId));
      if (profSnap.exists()) setProfile(profSnap.data());

      // 2. Fetch Stats (Mocked counts based on queries)
      const coursesSnap = await getDocs(query(collection(db, "courses"), where("coachId", "==", coachId)));
      const liveSnap = await getDocs(query(collection(db, "liveSessions"), where("coachId", "==", coachId)));
      
      setStats({
        students: profSnap.data()?.totalStudents || 45, // Dynamic via user assignment
        courses: coursesSnap.size,
        live: liveSnap.size,
        pending: 12 // Example pending assignments
      });
    };
    fetchData();
  }, [coachId]);

  return (
    <div>
      <div style={{ marginBottom: "30px" }}>
        <h1 style={{ fontSize: "28px", margin: "0 0 5px", color: "white" }}>Welcome Back, Coach {profile?.name || "..."}</h1>
        <p style={{ color: "#94a3b8", margin: 0 }}>Here is what's happening with your academy today.</p>
      </div>

      {/* ANALYTICS CARDS */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", marginBottom: "40px" }}>
        <StatCard title="Total Students" value={stats.students} icon={<Users size={24} color="#3ea6ff" />} />
        <StatCard title="Active Courses" value={stats.courses} icon={<BookOpen size={24} color="#9d4edd" />} />
        <StatCard title="Live Sessions" value={stats.live} icon={<Video size={24} color="#ff4d88" />} />
        <StatCard title="Pending Tasks" value={stats.pending} icon={<FileText size={24} color="#ffaa00" />} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "20px" }}>
        <div style={s.glass}>
          <h2 style={{ fontSize: "18px", marginTop: 0, borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "10px" }}>Coach Profile Snapshot</h2>
          {profile ? (
            <div>
              <p><strong>Specialization:</strong> <span style={{ color: "#3ea6ff" }}>{profile.specialization}</span></p>
              <p><strong>Experience:</strong> {profile.experience} Years</p>
              <p><strong>Rating:</strong> <Star size={14} color="#ffd700" style={{position:"relative", top:"2px"}}/> {profile.rating || "4.9"}</p>
              <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: "1.6" }}>{profile.bio}</p>
            </div>
          ) : <p style={{ color: "#aaa" }}>Loading profile details...</p>}
        </div>
      </div>
    </div>
  );
}

const StatCard = ({ title, value, icon }) => (
  <div style={{ ...s.glass, display: "flex", alignItems: "center", gap: "20px" }}>
    <div style={{ padding: "15px", background: "rgba(0,0,0,0.3)", borderRadius: "12px" }}>{icon}</div>
    <div>
      <p style={{ margin: "0 0 5px", color: "#94a3b8", fontSize: "13px", fontWeight: "bold", textTransform: "uppercase" }}>{title}</p>
      <h2 style={{ margin: 0, fontSize: "28px", color: "white" }}>{value}</h2>
    </div>
  </div>
);

const s = {
  glass: { background: "rgba(15, 23, 42, 0.6)", backdropFilter: "blur(12px)", padding: "20px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.08)" }
};
        
