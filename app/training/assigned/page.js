"use client";

import { useState, useEffect } from "react";
import { auth, db } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { collection, doc, query, where, onSnapshot, updateDoc } from "firebase/firestore";
import { 
  Dumbbell, Calendar, Award, CheckCircle, Clock, 
  Flame, Target, AlertCircle
} from "lucide-react";

const DIFF_COLORS = { 
  Easy: "#39ff14", 
  Medium: "#3ea6ff", 
  Hard: "#ffaa00", 
  Elite: "#ff4d88" 
};

export default function AssignedTrainingPage() {
  const [userId, setUserId] = useState(null);
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [processingId, setProcessingId] = useState(null);

  useEffect(() => {
    const unsubAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId(null);
        setLoading(false);
      }
    });
    return () => unsubAuth();
  }, []);

  useEffect(() => {
    if (!userId) return;

    // Fetch assignments where studentId is either current user or "ALL"
    const q = query(
      collection(db, "studentAssignments"),
      where("studentId", "in", [userId, "ALL"])
    );

    const unsubAssignments = onSnapshot(q, (snapshot) => {
      const fetched = [];
      snapshot.forEach((docSnap) => {
        fetched.push({ id: docSnap.id, ...docSnap.data() });
      });
      
      // Sort: Pending first, then by date
      fetched.sort((a, b) => {
        if (a.status === "Completed" && b.status !== "Completed") return 1;
        if (a.status !== "Completed" && b.status === "Completed") return -1;
        return new Date(b.assignedAt || 0) - new Date(a.assignedAt || 0);
      });

      setAssignments(fetched);
      setLoading(false);
    }, (error) => {
      console.error("Error fetching assignments:", error);
      setLoading(false);
    });

    return () => unsubAssignments();
  }, [userId]);

  const handleComplete = async (assignmentId) => {
    setProcessingId(assignmentId);
    try {
      await updateDoc(doc(db, "studentAssignments", assignmentId), {
        status: "Completed",
        completedAt: new Date().toISOString()
      });
    } catch (error) {
      console.error("Failed to mark as complete:", error);
      alert("Failed to complete workout. Please try again.");
    }
    setProcessingId(null);
  };

  if (loading) {
    return (
      <div style={s.center}>
        <Dumbbell size={40} color="#3ea6ff" style={{ animation: "pulse 2s infinite" }} />
        <h2 style={{ marginTop: "15px", color: "#e2e8f0" }}>Loading Assigned Protocols...</h2>
      </div>
    );
  }

  if (!userId) {
    return (
      <div style={s.center}>
        <AlertCircle size={40} color="#ff4d88" />
        <h2 style={{ marginTop: "15px", color: "#e2e8f0" }}>Authentication Required</h2>
        <p style={{ color: "#94a3b8" }}>Please log in to view your assigned workouts.</p>
      </div>
    );
  }

  return (
    <div style={s.page}>
      
      <div style={s.header}>
        <div>
          <h1 style={s.title}>Coach Assignments</h1>
          <p style={s.sub}>Execute your daily required protocols</p>
        </div>
        <div style={s.badge}>
          <Flame color="#ff4d88" size={18} />
          {assignments.filter(a => a.status !== "Completed").length} Pending Tasks
        </div>
      </div>

      {assignments.length === 0 ? (
        <div style={s.emptyState}>
          <Target size={48} color="#3ea6ff" style={{ marginBottom: "15px", opacity: 0.8 }} />
          <h2 style={{ color: "white", margin: "0 0 10px 0" }}>You're All Caught Up!</h2>
          <p style={{ color: "#94a3b8", margin: 0 }}>No active assignments from your coach right now.</p>
        </div>
      ) : (
        <div style={s.grid}>
          {assignments.map((task) => {
            const isCompleted = task.status === "Completed";
            const diffColor = DIFF_COLORS[task.difficulty] || DIFF_COLORS["Medium"];

            return (
              <div key={task.id} style={{ ...s.card, opacity: isCompleted ? 0.6 : 1, borderTop: `4px solid ${diffColor}` }}>
                
                <div style={s.flexSB}>
                  <div style={s.diffBadge(diffColor)}>{task.difficulty}</div>
                  <div style={s.statusBadge(isCompleted)}>
                    {isCompleted ? <CheckCircle size={14} /> : <Clock size={14} />}
                    {isCompleted ? "Completed" : "Pending"}
                  </div>
                </div>

                <h2 style={s.taskTitle}>{task.title}</h2>
                
                <div style={s.infoGrid}>
                  <div style={s.infoItem}>
                    <Target size={16} color="#94a3b8" />
                    <span><b>Protocol:</b> {task.reps || "N/A"}</span>
                  </div>
                  <div style={s.infoItem}>
                    <Calendar size={16} color="#94a3b8" />
                    <span><b>Due:</b> {task.dueDate || "No deadline"}</span>
                  </div>
                  <div style={s.infoItem}>
                    <Award size={16} color="#ffd700" />
                    <span style={{ color: "#ffd700", fontWeight: "bold" }}>+{task.xp || 0} XP</span>
                  </div>
                </div>

                <button 
                  onClick={() => handleComplete(task.id)} 
                  disabled={isCompleted || processingId === task.id}
                  style={{
                    ...s.btn,
                    background: isCompleted ? "rgba(255,255,255,0.1)" : "#3ea6ff",
                    color: isCompleted ? "#94a3b8" : "#020617",
                    cursor: isCompleted ? "not-allowed" : "pointer",
                  }}
                >
                  {processingId === task.id ? "Processing..." : isCompleted ? "Executed" : "Complete Workout"}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ULTRA-MINIMIZED CSS IN JS (Glassmorphism Dark Theme)
const flex = { display: "flex", alignItems: "center" };
const flexSB = { ...flex, justifyContent: "space-between" };

const s = {
  page: { minHeight: "100vh", background: "#020617", color: "white", padding: "20px", fontFamily: "sans-serif", maxWidth: "1000px", margin: "0 auto", paddingBottom: "50px" },
  center: { ...flex, flexDirection: "column", justifyContent: "center", minHeight: "100vh", background: "#020617", color: "white" },
  header: { ...flexSB, flexWrap: "wrap", marginBottom: "30px", gap: "15px" },
  title: { fontSize: "32px", fontWeight: "900", margin: 0, background: "linear-gradient(90deg, #3ea6ff, #9d4edd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
  sub: { color: "#94a3b8", fontWeight: "bold", fontSize: "14px", margin: "5px 0 0" },
  badge: { ...flex, gap: "8px", background: "rgba(255,77,136,0.1)", padding: "10px 16px", borderRadius: "12px", border: "1px solid rgba(255,77,136,0.3)", fontWeight: "bold", color: "#ff4d88" },
  emptyState: { background: "rgba(15, 23, 42, 0.6)", backdropFilter: "blur(12px)", padding: "50px 20px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.08)", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "20px" },
  card: { background: "rgba(15, 23, 42, 0.7)", backdropFilter: "blur(12px)", padding: "24px", borderRadius: "16px", borderLeft: "1px solid rgba(255,255,255,0.08)", borderRight: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)", display: "flex", flexDirection: "column", boxShadow: "0 10px 30px rgba(0,0,0,0.3)", transition: "transform 0.2s" },
  diffBadge: (color) => ({ background: `${color}15`, color: color, padding: "4px 10px", borderRadius: "6px", fontSize: "12px", fontWeight: "bold", border: `1px solid ${color}30` }),
  statusBadge: (isDone) => ({ ...flex, gap: "5px", background: isDone ? "rgba(57,255,20,0.1)" : "rgba(255,170,0,0.1)", color: isDone ? "#39ff14" : "#ffaa00", padding: "4px 10px", borderRadius: "6px", fontSize: "12px", fontWeight: "bold" }),
  taskTitle: { fontSize: "22px", margin: "15px 0", color: "white", fontWeight: "bold" },
  infoGrid: { display: "flex", flexDirection: "column", gap: "12px", marginBottom: "25px", flex: 1 },
  infoItem: { ...flex, gap: "10px", fontSize: "14px", color: "#e2e8f0" },
  btn: { width: "100%", padding: "14px", border: "none", borderRadius: "10px", fontWeight: "bold", fontSize: "15px", transition: "all 0.3s ease", display: "flex", justifyContent: "center", alignItems: "center", gap: "8px" }
};

