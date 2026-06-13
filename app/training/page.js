"use client";

import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot, updateDoc, increment, arrayUnion } from "firebase/firestore";
import { 
  Dumbbell, Target, Flame, Activity, MessageSquare, 
  CheckCircle, Brain, CalendarDays, Clock, Shield, ChevronRight, AlertTriangle
} from "lucide-react";

// --- PROGRESSION & RANK ENGINE ---
const calculateLevel = (totalXP) => {
  let level = 1;
  let xpRequired = 100;
  let remainingXP = totalXP || 0;
  while (remainingXP >= xpRequired) {
    remainingXP -= xpRequired;
    level++;
    xpRequired = Math.floor(100 * Math.pow(1.2, level - 1));
  }
  return level;
};

const getRank = (level) => {
  if (level >= 50) return "World Class";
  if (level >= 30) return "Elite Pro";
  if (level >= 15) return "Professional";
  if (level >= 5) return "Amateur Athlete";
  return "Rookie";
};

const PRIORITY_COLORS = { Low: "#39ff14", Medium: "#3ea6ff", High: "#ffaa00", Critical: "#ff4d88" };

export default function ProfessionalTrainingPlatform() {
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [animTaskId, setAnimTaskId] = useState(null);

  // Core Data State 
  const [userData, setUserData] = useState({
    xp: 0, level: 1, rank: "Rookie", // Global Profile Stats
    workoutXP: 0, workoutStreak: 0, weeklyTrainingHours: 0, completedWorkoutsCount: 0,
    coachNotes: "Awaiting sync...",
    trainingPhase: "Pre Season", // Off Season, Pre Season, Competition, Recovery
    sleepScore: 85, waterIntake: 2, waterGoal: 4, // Biometrics for AI
    // Firebase Arrays & Objects
    dailyWorkouts: [], courseTasks: [], aiTasks: [], completedTasks: [],
    workoutHistory: [], exerciseProgress: {}, courseProgress: {}, coachAssignments: []
  });

  const [trainingPlan, setTrainingPlan] = useState({ warmup: [], skill: [], fitness: [], recovery: [] });

  // Auth & Sync
  useEffect(() => {
    const unsubAuth = onAuthStateChanged(auth, (user) => {
      if (user) setUserId(user.uid);
      else { setUserId(null); setLoading(false); }
    });
    return () => unsubAuth();
  }, []);

  useEffect(() => {
    if (!userId) return;
    const unsub = onSnapshot(doc(db, "users", userId), (snap) => {
      if (snap.exists()) {
        const data = snap.data();
        setUserData(prev => ({ ...prev, ...data }));
        processEngine(data);
      } else {
        // Mock default for initial load
        processEngine({
          xp: 1200, trainingPhase: "Pre Season", sleepScore: 65, waterIntake: 2, waterGoal: 4,
          coachNotes: "Focus on explosive power today. Priority on form.",
          dailyWorkouts: [
            { id: "dw1", title: "Sprint Training 10x100m", category: "fitness", source: "Coach", xp: 50, priority: "High" },
            { id: "dw2", title: "Dynamic Stretching", category: "warmup", source: "System", xp: 15, priority: "Low" }
          ],
          courseTasks: [
            { id: "ct1", title: "Front Foot Defense (50 Reps)", category: "skill", source: "Course", xp: 40, priority: "Medium" }
          ]
        });
      }
      setLoading(false);
    });
    return () => unsub();
  }, [userId]);

  // --- AI TASK GENERATOR & PLAN COMPILER ---
  const processEngine = (data) => {
    // 1. Generate Health-Based AI Tasks Dynamically
    let dynamicAiTasks = [...(data.aiTasks || [])];
    
    if ((data.sleepScore || 100) < 70) {
      dynamicAiTasks.push({ id: "ai_sleep_rec", title: "Extended Nervous System Recovery", category: "recovery", source: "AI Coach", xp: 30, priority: "Critical" });
    }
    if ((data.waterIntake || 0) < (data.waterGoal || 4)) {
      dynamicAiTasks.push({ id: "ai_water_req", title: "Hydration Protocol & Static Stretch", category: "recovery", source: "AI Coach", xp: 20, priority: "High" });
    }

    // 2. Combine all sources
    const allTasks = [
      ...(data.dailyWorkouts || []), 
      ...(data.courseTasks || []),
      ...(data.coachAssignments || []), // Integrated coach tasks
      ...dynamicAiTasks
    ];

    const plan = { warmup: [], skill: [], fitness: [], recovery: [] };
    
    allTasks.forEach(task => {
      if (plan[task.category]) plan[task.category].push(task);
      else plan.fitness.push(task); 
    });

    setTrainingPlan(plan);
  };

  // --- GLOBAL PROGRESSION SYNC ENGINE ---
  const handleComplete = async (task) => {
    if (userData.completedTasks?.includes(task.id)) return;
    setAnimTaskId(task.id);
    
    // Calculate new global progression
    const newXP = (userData.xp || 0) + task.xp;
    const newLevel = calculateLevel(newXP);
    const newRank = getRank(newLevel);

    const historyEntry = { id: task.id, title: task.title, date: new Date().toISOString(), xpEarned: task.xp };

    try {
      await updateDoc(doc(db, "users", userId), {
        completedTasks: arrayUnion(task.id),
        workoutXP: increment(task.xp),
        xp: increment(task.xp), // MAIN PROFILE XP SYNC
        level: newLevel,
        rank: newRank,
        completedWorkoutsCount: increment(1),
        workoutHistory: arrayUnion(historyEntry),
        [`exerciseProgress.${task.id}`]: increment(1), // Tracks specific exercise volume
        ...(task.source === "Course" && { [`courseProgress.${task.id}`]: increment(1) })
      });
      setTimeout(() => setAnimTaskId(null), 1000);
    } catch (e) {
      console.error("Task execution failed", e);
      setAnimTaskId(null);
    }
  };

  // UI Derivations
  const totalTasks = [...trainingPlan.warmup, ...trainingPlan.skill, ...trainingPlan.fitness, ...trainingPlan.recovery].length;
  const completedCount = totalTasks > 0 ? [...trainingPlan.warmup, ...trainingPlan.skill, ...trainingPlan.fitness, ...trainingPlan.recovery].filter(t => userData.completedTasks?.includes(t.id)).length : 0;
  const completionPct = totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0;

  if (loading) return <div style={s.center}><h2>Initializing Athlete Protocols...</h2></div>;

  return (
    <div style={s.page}>
      
      {/* HEADER & XP SYNC */}
      <div style={s.header}>
        <div>
          <h1 style={s.title}>Training Center</h1>
          <p style={s.sub}>Phase: <span style={{color: "#3ea6ff"}}>{userData.trainingPhase}</span> | Rank: <span style={{color: "#ffd700"}}>{userData.rank} (Lvl {userData.level})</span></p>
        </div>
        <div style={s.xpBadge}><Flame color="#ff4d88" size={18}/> {userData.workoutXP || 0} Tr. XP</div>
      </div>

      {/* 7. ANALYTICS GRID (Training Load Included) */}
      <div style={s.grid4}>
        <div style={s.statBox}>
          <Dumbbell size={20} color="#3ea6ff"/>
          <h3 style={s.statVal}>{userData.completedWorkoutsCount || 0}</h3>
          <p style={s.statLbl}>Completed</p>
        </div>
        <div style={s.statBox}>
          <Clock size={20} color="#ffd700"/>
          <h3 style={s.statVal}>{userData.weeklyTrainingHours || 0}h</h3>
          <p style={s.statLbl}>Training Load</p>
        </div>
        <div style={s.statBox}>
          <Activity size={20} color="#ff4d88"/>
          <h3 style={s.statVal}>{userData.workoutStreak || 0}</h3>
          <p style={s.statLbl}>Streak</p>
        </div>
        <div style={s.statBox}>
          <Target size={20} color={completionPct >= 100 ? "#39ff14" : "#9d4edd"}/>
          <h3 style={s.statVal}>{completionPct}%</h3>
          <p style={s.statLbl}>Execution</p>
        </div>
      </div>

      {/* 8. DYNAMIC TRAINING CALENDAR */}
      <div style={s.glass}>
        <div style={s.flexSB}>
          <h2 style={s.cardTitle}><CalendarDays color="#3ea6ff"/> Dynamic Schedule</h2>
          <span style={{fontSize:"12px", color:"#aaa"}}>Based on {userData.trainingPhase} Load</span>
        </div>
        <div style={s.calGrid}>
          {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => {
            const todayIdx = new Date().getDay() - 1; 
            const isToday = i === (todayIdx < 0 ? 6 : todayIdx);
            const isPast = i < (todayIdx < 0 ? 6 : todayIdx);
            return (
              <div key={i} style={{...s.calDay, border: isToday ? "1px solid #3ea6ff" : "1px solid rgba(255,255,255,0.05)", background: isPast ? "rgba(57,255,20,0.1)" : "rgba(0,0,0,0.3)"}}>
                <span style={{color: isToday ? "#3ea6ff" : "#aaa"}}>{day}</span>
                {isPast && <CheckCircle size={14} color="#39ff14" style={{marginTop:"5px"}}/>}
                {isToday && <Flame size={14} color="#3ea6ff" style={{marginTop:"5px"}}/>}
              </div>
            );
          })}
        </div>
      </div>

      {/* COACH NOTES & AI ENGINE */}
      <div style={s.grid2}>
        <div style={{...s.glass, borderLeft: "4px solid #ffaa00"}}>
          <h2 style={s.cardTitle}><MessageSquare color="#ffaa00"/> Assigned Coach Notes</h2>
          <p style={{color: "#e2e8f0", fontSize:"15px", fontStyle:"italic"}}>"{userData.coachNotes}"</p>
        </div>
        
        <div style={{...s.glass, borderLeft: "4px solid #9d4edd", display:"flex", flexDirection:"column", justifyContent:"center"}}>
          <div style={s.flexBox}>
            <Brain color="#9d4edd" size={28}/>
            <div>
              <h3 style={{margin:0, color:"white", fontSize:"16px"}}>AI Generation Active</h3>
              <p style={{margin:"5px 0 0", color:"#94a3b8", fontSize:"13px"}}>Monitoring sleep ({userData.sleepScore}) & hydration.</p>
            </div>
          </div>
        </div>
      </div>

      {/* DAILY TRAINING PLAN COMPILER */}
      <h2 style={{...s.cardTitle, margin: "30px 0 15px", fontSize:"22px"}}><Shield color="#3ea6ff"/> Active Protocols</h2>
      
      <TrainingSection title="1. Warmup & Prep" tasks={trainingPlan.warmup} userData={userData} onComplete={handleComplete} animId={animTaskId} color="#ffaa00" />
      <TrainingSection title="2. Skill & Course Work" tasks={trainingPlan.skill} userData={userData} onComplete={handleComplete} animId={animTaskId} color="#3ea6ff" />
      <TrainingSection title="3. Fitness Load" tasks={trainingPlan.fitness} userData={userData} onComplete={handleComplete} animId={animTaskId} color="#ff4d88" />
      <TrainingSection title="4. Recovery & Rehab" tasks={trainingPlan.recovery} userData={userData} onComplete={handleComplete} animId={animTaskId} color="#39ff14" />

    </div>
  );
}

// Reusable Task Section Component (UI Kept Identical, Logic Expanded)
const TrainingSection = ({ title, tasks, userData, onComplete, animId, color }) => {
  if (!tasks || tasks.length === 0) return null;
  return (
    <div style={{marginBottom: "20px"}}>
      <h3 style={{...s.sectionLbl, color: color}}>{title}</h3>
      <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
        {tasks.map(task => {
          const isDone = userData.completedTasks?.includes(task.id);
          const isAnimating = animId === task.id;
          const prioColor = PRIORITY_COLORS[task.priority || "Medium"];
          
          return (
            <div key={task.id} style={{...s.taskCard, opacity: isDone ? 0.6 : 1, transform: isAnimating ? "scale(0.98)" : "scale(1)", borderLeft: `3px solid ${prioColor}`}}>
              <div style={s.flexBox}>
                <div style={s.taskIconBg}>
                  {task.source === "Course" ? <ChevronRight color="#3ea6ff"/> : task.source === "AI Coach" ? <Brain color="#9d4edd"/> : <Dumbbell color="#ffaa00"/>}
                </div>
                <div>
                  <h4 style={{margin:"0 0 3px", color:"white", fontSize:"15px", display:"flex", alignItems:"center", gap:"5px"}}>
                    {task.title}
                    {task.priority === "Critical" && <AlertTriangle size={14} color="#ff4d88"/>}
                  </h4>
                  <div style={s.flexBox}>
                    <span style={s.srcTag}>{task.source}</span>
                    <span style={{color: prioColor, fontSize:"11px", fontWeight:"bold"}}>{task.priority || "Medium"}</span>
                    <span style={{color:"#94a3b8", fontSize:"12px"}}>• +{task.xp} XP</span>
                  </div>
                </div>
              </div>
              
              <button disabled={isDone} onClick={() => onComplete(task)} style={{...s.actionBtn, background: isDone ? "transparent" : color, color: isDone ? "#39ff14" : "#020617"}}>
                {isDone ? <CheckCircle size={24}/> : "Execute"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ULTRA-MINIMIZED CSS (Unchanged Design)
const flex = { display: "flex", alignItems: "center" };
const flexSB = { ...flex, justifyContent: "space-between" };
const gl = { background: "rgba(15, 23, 42, 0.6)", backdropFilter: "blur(12px)", padding: "20px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.08)", marginBottom: "20px" };

const s = {
  page: { minHeight: "100vh", background: "#020617", color: "white", padding: "20px", fontFamily: "sans-serif", maxWidth: "900px", margin: "0 auto", paddingBottom: "50px" },
  center: { ...flex, justifyContent: "center", minHeight: "100vh", background: "#020617", color: "white" },
  flexBox: { ...flex, gap: "10px" }, flexSB: flexSB, glass: gl,
  header: { ...flexSB, flexWrap: "wrap", marginBottom: "25px", gap:"15px" },
  title: { fontSize: "30px", fontWeight: "900", margin: 0, background: "linear-gradient(90deg, #3ea6ff, #9d4edd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
  sub: { color: "#94a3b8", fontWeight: "bold", fontSize: "14px", margin: "5px 0 0" },
  xpBadge: { ...flex, gap: "6px", background: "rgba(255,77,136,0.1)", color: "#ff4d88", padding: "10px 16px", borderRadius: "12px", border: "1px solid rgba(255,77,136,0.3)", fontWeight: "bold" },
  grid2: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "15px", marginBottom: "20px" },
  grid4: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "15px", marginBottom: "20px" },
  statBox: { background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.05)", padding: "15px", borderRadius: "12px", textAlign: "center" },
  statVal: { fontSize: "24px", color: "white", margin: "10px 0 5px" },
  statLbl: { fontSize: "12px", color: "#94a3b8", textTransform: "uppercase", fontWeight: "bold" },
  cardTitle: { ...flex, gap: "10px", fontSize: "18px", margin: "0 0 15px 0", color: "white", fontWeight: "bold" },
  calGrid: { display: "flex", justifyContent: "space-between", gap: "5px" },
  calDay: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "10px 0", borderRadius: "10px", fontWeight: "bold", fontSize: "14px", transition: "all 0.3s" },
  sectionLbl: { fontSize: "16px", textTransform: "uppercase", letterSpacing: "1px", margin: "0 0 10px 5px", fontWeight: "bold" },
  taskCard: { ...flexSB, background: "rgba(15,23,42,0.8)", padding: "16px", borderRadius: "14px", border: "1px solid rgba(255,255,255,0.05)", transition: "all 0.2s ease" },
  taskIconBg: { width: "40px", height: "40px", borderRadius: "10px", background: "rgba(0,0,0,0.4)", ...flex, justifyContent: "center" },
  srcTag: { fontSize: "11px", background: "rgba(255,255,255,0.1)", padding: "2px 6px", borderRadius: "4px", color: "#e2e8f0" },
  actionBtn: { border: "none", padding: "8px 16px", borderRadius: "8px", fontWeight: "bold", cursor: "pointer", ...flex, justifyContent: "center", transition: "all 0.3s ease" }
};
  
