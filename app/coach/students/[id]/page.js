"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { db, auth } from "../../../firebase";
import { doc, getDoc, collection, query, where, getDocs, addDoc, updateDoc } from "firebase/firestore";
import { 
  Activity, Flame, Droplet, Moon, Award, Target, 
  Send, CheckCircle, XCircle, AlertTriangle, Battery 
} from "lucide-react";

export default function AthleteProfilePage() {
  const params = useParams();
  const studentId = params.id;
  
  const [student, setStudent] = useState(null);
  const [assignments, setAssignments] = useState([]);
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!studentId) return;

    const fetchAthleteData = async () => {
      try {
        // 1. Fetch Core Profile
        const userSnap = await getDoc(doc(db, "users", studentId));
        if (userSnap.exists()) setStudent(userSnap.data());

        // 2. Fetch Recent Assignments
        const q = query(collection(db, "assignments"), where("studentId", "==", studentId));
        const assignSnap = await getDocs(q);
        setAssignments(assignSnap.docs.map(d => ({ id: d.id, ...d.data() })));
        
      } catch (error) {
        console.error("Error fetching athlete:", error);
      }
      setLoading(false);
    };

    fetchAthleteData();
  }, [studentId]);

  const sendCoachNote = async () => {
    if (!notes.trim()) return;
    await addDoc(collection(db, "coachNotes"), {
      studentId,
      coachId: auth.currentUser?.uid,
      message: notes,
      timestamp: new Date().toISOString(),
      read: false
    });
    setNotes("");
    alert("Note deployed to athlete's dashboard instantly.");
  };

  const markAttendance = async (status) => {
    await addDoc(collection(db, "attendance"), {
      studentId,
      date: new Date().toISOString().split("T")[0],
      status: status, // "Present", "Absent", "Injured", "Rest"
      timestamp: new Date().toISOString()
    });
    alert(`Athlete marked as ${status} for today.`);
  };

  if (loading) return <div style={s.center}><h2>Analyzing Athlete Telemetry...</h2></div>;
  if (!student) return <div style={s.center}><h2>Athlete Not Found</h2></div>;

  return (
    <div style={s.page}>
      {/* HEADER: Identity & Career */}
      <div style={s.headerCard}>
        <div style={{display: "flex", gap: "20px", alignItems: "center"}}>
          <div style={s.avatar}>{student.displayName?.charAt(0) || "A"}</div>
          <div>
            <h1 style={{margin: "0 0 5px", fontSize: "28px"}}>{student.displayName}</h1>
            <p style={{margin: 0, color: "#94a3b8", fontWeight: "bold"}}>
              {student.sport || "Multisport"} | Level {student.level || 1} | Rank: {student.rank || "Rookie"}
            </p>
          </div>
        </div>
        <div style={{textAlign: "right"}}>
          <h2 style={{margin: "0 0 5px", color: "#ffaa00", fontSize: "28px"}}>{student.xp || 0} XP</h2>
          <span style={s.streakBadge}><Flame size={14}/> {student.streak || 0} Day Streak</span>
        </div>
      </div>

      {/* METRICS GRID */}
      <div style={s.grid4}>
        <MetricCard title="Training Load" value={student.trainingLoad || "Optimal"} icon={<Activity color="#3ea6ff"/>} color="#3ea6ff" />
        <MetricCard title="Sleep Score" value={`${student.sleepScore || 85}/100`} icon={<Moon color="#9d4edd"/>} color="#9d4edd" />
        <MetricCard title="Hydration" value={`${student.hydration || 3.5} L`} icon={<Droplet color="#39ff14"/>} color="#39ff14" />
        <MetricCard title="Completion" value={`${student.completionRate || 88}%`} icon={<Target color="#ff4d88"/>} color="#ff4d88" />
      </div>

      <div style={s.grid2}>
        {/* COACH ACTION CENTER */}
        <div style={s.glass}>
          <h2 style={s.sectionTitle}>Command Center</h2>
          
          <div style={{marginBottom: "25px"}}>
            <p style={s.label}>Mark Today's Attendance</p>
            <div style={{display: "flex", gap: "10px", flexWrap: "wrap"}}>
              <button onClick={() => markAttendance("Present")} style={{...s.btn, background: "rgba(57,255,20,0.1)", color: "#39ff14", border: "1px solid #39ff14"}}><CheckCircle size={16}/> Present</button>
              <button onClick={() => markAttendance("Absent")} style={{...s.btn, background: "rgba(255,77,136,0.1)", color: "#ff4d88", border: "1px solid #ff4d88"}}><XCircle size={16}/> Absent</button>
              <button onClick={() => markAttendance("Injured")} style={{...s.btn, background: "rgba(255,170,0,0.1)", color: "#ffaa00", border: "1px solid #ffaa00"}}><AlertTriangle size={16}/> Injured</button>
              <button onClick={() => markAttendance("Rest")} style={{...s.btn, background: "rgba(62,166,255,0.1)", color: "#3ea6ff", border: "1px solid #3ea6ff"}}><Battery size={16}/> Rest Day</button>
            </div>
          </div>

          <div>
            <p style={s.label}>Direct Coach Note</p>
            <textarea 
              style={s.input} 
              placeholder="Type tactical feedback or recovery notes here..." 
              value={notes} 
              onChange={(e) => setNotes(e.target.value)}
            />
            <button onClick={sendCoachNote} style={{...s.btn, background: "#3ea6ff", color: "#020617", width: "100%"}}>
              <Send size={16}/> Push to Athlete
            </button>
          </div>
        </div>

        {/* ASSIGNMENT PROGRESS */}
        <div style={s.glass}>
          <h2 style={s.sectionTitle}>Recent Protocol Execution</h2>
          <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
            {assignments.slice(0, 5).map(task => (
              <div key={task.id} style={{display: "flex", justifyContent: "space-between", padding: "12px", background: "rgba(0,0,0,0.3)", borderRadius: "8px", borderLeft: task.status === "Completed" ? "3px solid #39ff14" : "3px solid #ffaa00"}}>
                <div>
                  <h4 style={{margin: "0 0 4px", fontSize: "15px"}}>{task.title}</h4>
                  <span style={{fontSize: "12px", color: "#94a3b8"}}>{task.taskType || "Workout"}</span>
                </div>
                <div style={{textAlign: "right"}}>
                  <span style={{fontSize: "12px", fontWeight: "bold", color: task.status === "Completed" ? "#39ff14" : "#ffaa00"}}>{task.status}</span>
                  <p style={{margin: "4px 0 0", fontSize: "12px", color: "#ffd700"}}>+{task.xp} XP</p>
                </div>
              </div>
            ))}
            {assignments.length === 0 && <p style={{color: "#aaa"}}>No recent assignments found.</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

const MetricCard = ({ title, value, icon, color }) => (
  <div style={{...s.glass, display: "flex", alignItems: "center", gap: "15px", padding: "20px"}}>
    <div style={{background: `${color}15`, padding: "12px", borderRadius: "10px", border: `1px solid ${color}30`}}>{icon}</div>
    <div>
      <p style={{margin: "0 0 4px", color: "#94a3b8", fontSize: "12px", textTransform: "uppercase", fontWeight: "bold"}}>{title}</p>
      <h3 style={{margin: 0, fontSize: "22px", color: "white"}}>{value}</h3>
    </div>
  </div>
);

const gl = { background: "rgba(15, 23, 42, 0.6)", backdropFilter: "blur(12px)", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.08)" };
const s = {
  page: { minHeight: "100vh", background: "#020617", color: "white", padding: "30px", fontFamily: "sans-serif" },
  center: { display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "#020617", color: "white" },
  headerCard: { ...gl, padding: "30px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", marginBottom: "20px" },
  avatar: { width: "70px", height: "70px", borderRadius: "50%", background: "linear-gradient(135deg, #3ea6ff, #9d4edd)", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "28px", fontWeight: "bold" },
  streakBadge: { background: "rgba(255,77,136,0.1)", color: "#ff4d88", padding: "6px 12px", borderRadius: "20px", display: "inline-flex", alignItems: "center", gap: "5px", fontSize: "14px", fontWeight: "bold", border: "1px solid rgba(255,77,136,0.3)" },
  grid4: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", marginBottom: "20px" },
  grid2: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "20px" },
  glass: { ...gl, padding: "25px" },
  sectionTitle: { fontSize: "18px", margin: "0 0 20px 0", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "10px" },
  label: { fontSize: "13px", color: "#94a3b8", fontWeight: "bold", marginBottom: "8px", display: "block" },
  input: { width: "100%", padding: "12px", background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", color: "white", minHeight: "80px", resize: "none", marginBottom: "15px", boxSizing: "border-box" },
  btn: { display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "10px 16px", borderRadius: "8px", fontWeight: "bold", cursor: "pointer", border: "none", transition: "0.2s" }
};
    
