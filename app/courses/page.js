"use client";

import { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { collection, doc, onSnapshot, updateDoc, arrayUnion, getDocs } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { 
  PlayCircle, Star, Users, Clock, Award, Shield, 
  Crown, Video, Calendar, CheckCircle, Play, Dumbbell, ChevronRight
} from "lucide-react";

export default function SportsFitZoneCourses() {
  const router = useRouter();
  const [userId, setUserId] = useState(null);
  const [userData, setUserData] = useState(null);
  const [activeTab, setActiveTab] = useState("explore");
  const [activeSport, setActiveSport] = useState("All");

  // Dynamic Data States
  const [courses, setCourses] = useState([]);
  const [liveSessions, setLiveSessions] = useState([]);
  
  const sportsCategories = ["All", "Cricket", "Football", "Basketball", "Athletics", "Boxing"];

  useEffect(() => {
    const unsubAuth = onAuthStateChanged(auth, user => {
      if (user) setUserId(user.uid);
    });
    return () => unsubAuth();
  }, []);

  // Fetch User, Courses, and Live Sessions
  useEffect(() => {
    if (!userId) return;

    // 1. User Data Snapshot
    const unsubUser = onSnapshot(doc(db, "users", userId), (docSnap) => {
      if (docSnap.exists()) setUserData(docSnap.data());
    });

    // 2. Courses Snapshot
    const unsubCourses = onSnapshot(collection(db, "courses"), (snapshot) => {
      let fetchedCourses = [];
      snapshot.forEach(doc => fetchedCourses.push({ id: doc.id, ...doc.data() }));
      setCourses(fetchedCourses);
    });

    // 3. Live Sessions Snapshot
    const unsubLive = onSnapshot(collection(db, "liveSessions"), (snapshot) => {
      let fetchedSessions = [];
      snapshot.forEach(doc => fetchedSessions.push({ id: doc.id, ...doc.data() }));
      setLiveSessions(fetchedSessions);
    });

    return () => { unsubUser(); unsubCourses(); unsubLive(); };
  }, [userId]);

  return (
    <div style={s.page}>
      
      {/* HEADER (Unchanged UI) */}
      <div style={s.header}>
        <div>
          <h1 style={s.title}>SportsFitZone <span style={{color:"#9d4edd"}}>Academy</span></h1>
          <p style={s.sub}>Learn from World-Class Elite Coaches</p>
        </div>
        <div style={s.navTabs}>
          {["explore", "learning", "memberships", "live"].map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} style={{...s.tabBtn, background: activeTab === tab ? "rgba(62,166,255,0.2)" : "transparent", color: activeTab === tab ? "#3ea6ff" : "#94a3b8", borderBottom: activeTab === tab ? "2px solid #3ea6ff" : "2px solid transparent"}}>
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {activeTab === "explore" && <ExploreSection courses={courses} activeSport={activeSport} setActiveSport={setActiveSport} sportsCategories={sportsCategories} router={router} />}
      {activeTab === "learning" && <MyLearningSection userId={userId} userData={userData} courses={courses} router={router} />}
      {activeTab === "memberships" && <MembershipSection />}
      {activeTab === "live" && <LiveSessionsSection liveSessions={liveSessions} />}

    </div>
  );
}

// ==========================================
// 1. DYNAMIC EXPLORE SECTION
// ==========================================
function ExploreSection({ courses, activeSport, setActiveSport, sportsCategories, router }) {
  const filteredCourses = activeSport === "All" ? courses : courses.filter(c => c.sport === activeSport);

  return (
    <div>
      <div style={s.categoryScroll}>
        {sportsCategories.map(sport => (
          <button key={sport} onClick={() => setActiveSport(sport)} style={{...s.pill, background: activeSport === sport ? "#3ea6ff" : "rgba(255,255,255,0.05)", color: activeSport === sport ? "#020617" : "white"}}>
            {sport}
          </button>
        ))}
      </div>

      <h2 style={s.sectionTitle}><Star color="#ffd700"/> Featured Masterclasses</h2>
      <div style={s.grid}>
        {filteredCourses.length === 0 ? <p style={{color:"#aaa"}}>Loading courses...</p> : filteredCourses.map(course => (
          <div key={course.id} style={s.courseCard}>
            <div style={{...s.thumbnail, backgroundImage: `url(${course.thumbnail || ''})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
              {!course.thumbnail && <PlayCircle size={40} color="rgba(255,255,255,0.7)" />}
              <span style={s.sportBadge}>{course.sport}</span>
            </div>
            <div style={{padding: "15px"}}>
              <h3 style={{margin:"0 0 5px", fontSize:"18px"}}>{course.title}</h3>
              <p style={{color:"#aaa", fontSize:"13px", margin:"0 0 10px"}}>Coach ID: <span style={{color:"#3ea6ff"}}>{course.coachId}</span></p>
              
              <div style={s.flexSB}>
                <span style={s.infoTag}><Clock size={12}/> {course.modulesCount || 0} Modules</span>
                <span style={s.infoTag}><Users size={12}/> {course.students || 0}</span>
              </div>
              
              <button onClick={() => router.push(`/courses/${course.id}`)} style={s.enrollBtn}>View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// 2. REAL MY LEARNING & PROGRESSION
// ==========================================
function MyLearningSection({ userId, userData, courses, router }) {
  const enrolledIds = userData?.enrolledCourses || [];
  const myCourses = courses.filter(c => enrolledIds.includes(c.id));

  const handleSyncToWorkout = async (course) => {
    // Dynamically sends task to Workout System
    const taskData = {
      id: `task_${course.id}_${Date.now()}`,
      title: `${course.title} - Practice Task`,
      category: "skill",
      source: "Course",
      xp: 40,
      priority: "High"
    };

    try {
      await updateDoc(doc(db, "users", userId), {
        courseTasks: arrayUnion(taskData)
      });
      alert(`Practice Task for ${course.title} sent to Workout Hub!`);
    } catch (e) {
      console.error("Failed to sync task", e);
    }
  };

  if (myCourses.length === 0) return <p style={{color:"#aaa"}}>You haven't enrolled in any courses yet.</p>;

  return (
    <div>
      <h2 style={s.sectionTitle}><Play color="#39ff14"/> Continue Learning</h2>
      
      {myCourses.map(course => {
        const progressObj = userData?.courseProgress?.[course.id] || { completedLessons: 0, total: course.modulesCount * 3 || 10 };
        const progressPct = Math.round((progressObj.completedLessons / progressObj.total) * 100);

        return (
          <div key={course.id} style={{...s.glass, display: "flex", gap: "20px", flexWrap: "wrap", marginBottom:"15px"}}>
            <div style={{...s.thumbnail, width: "200px", height: "120px", backgroundImage: `url(${course.thumbnail || ''})`, backgroundSize: 'cover'}}>{!course.thumbnail && <PlayCircle size={30} color="white"/>}</div>
            <div style={{flex: 1}}>
              <div style={s.flexSB}>
                <h3 style={{margin:0}}>{course.title}</h3>
                <span style={{color:"#39ff14", fontWeight:"bold"}}>{progressPct}% Completed</span>
              </div>
              <p style={{color:"#aaa", fontSize:"14px", margin:"5px 0 15px"}}>Lessons Completed: <b>{progressObj.completedLessons}/{progressObj.total}</b></p>
              
              <div style={{background: "rgba(255,255,255,0.1)", height: "6px", borderRadius: "3px", marginBottom: "15px"}}>
                <div style={{background: "#39ff14", width: `${progressPct}%`, height: "100%", borderRadius: "3px", transition:"width 0.3s ease"}}></div>
              </div>

              <div style={s.flexSB}>
                <button onClick={() => router.push(`/courses/${course.id}`)} style={{...s.actionBtn, background: "#3ea6ff", color: "#020617"}}><Play size={16}/> Resume Course</button>
                <button onClick={() => handleSyncToWorkout(course)} style={{...s.actionBtn, background: "rgba(157, 78, 221, 0.2)", border: "1px solid #9d4edd", color: "#e2e8f0"}}>
                  <Dumbbell size={16} color="#9d4edd"/> Sync to Workout
                </button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
}

// ==========================================
// 3. MEMBERSHIPS & LEVELS (Unchanged UI)
// ==========================================
function MembershipSection() {
  return (
    <div>
      <div style={{textAlign: "center", marginBottom: "30px"}}>
        <h2 style={{fontSize:"28px", margin:0}}>Unlock Your Full Potential</h2>
        <p style={{color:"#aaa"}}>Choose the training tier that fits your goals.</p>
      </div>

      <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px"}}>
        <div style={s.tierCard}>
          <h3 style={{color: "#3ea6ff"}}>BASIC</h3>
          <h2 style={{fontSize:"32px", margin:"10px 0"}}>Free</h2>
          <ul style={s.featureList}>
            <li><CheckCircle size={14} color="#39ff14"/> Recorded Classes</li>
            <li><CheckCircle size={14} color="#39ff14"/> Progress Tracking</li>
          </ul>
          <button style={{...s.tierBtn, border: "1px solid #3ea6ff", color: "#3ea6ff"}}>Current Plan</button>
        </div>
        <div style={{...s.tierCard, border: "1px solid #9d4edd", transform: "scale(1.05)", background: "rgba(15,23,42,0.9)"}}>
          <div style={s.popularBadge}>Most Popular</div>
          <h3 style={{color: "#9d4edd"}}><Shield size={18}/> PREMIUM</h3>
          <h2 style={{fontSize:"32px", margin:"10px 0"}}>$15<span style={{fontSize:"14px", color:"#aaa"}}>/mo</span></h2>
          <ul style={s.featureList}>
            <li><CheckCircle size={14} color="#9d4edd"/> Exclusive Classes</li>
            <li><CheckCircle size={14} color="#9d4edd"/> Advanced Training Plans</li>
          </ul>
          <button style={{...s.tierBtn, background: "#9d4edd", color: "white"}}>Upgrade Premium</button>
        </div>
        <div style={s.tierCard}>
          <h3 style={{color: "#ffd700"}}><Crown size={18}/> ELITE</h3>
          <h2 style={{fontSize:"32px", margin:"10px 0"}}>$99<span style={{fontSize:"14px", color:"#aaa"}}>/mo</span></h2>
          <ul style={s.featureList}>
            <li><CheckCircle size={14} color="#ffd700"/> 1-to-1 Coach Calls</li>
            <li><CheckCircle size={14} color="#ffd700"/> Personalized Roadmap</li>
          </ul>
          <button style={{...s.tierBtn, background: "linear-gradient(90deg, #ffd700, #ffaa00)", color: "#000"}}>Apply for Elite</button>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 4. DYNAMIC LIVE SESSIONS
// ==========================================
function LiveSessionsSection({ liveSessions }) {
  if(liveSessions.length === 0) return <p style={{color:"#aaa"}}>No upcoming live sessions.</p>;
  
  return (
    <div>
      <h2 style={s.sectionTitle}><Video color="#ff4d88"/> Upcoming Live Clinics</h2>
      {liveSessions.map(session => (
        <div key={session.id} style={{...s.glass, borderLeft: "4px solid #ff4d88", marginBottom: "15px"}}>
          <div style={s.flexSB}>
            <div>
              <span style={{background: "#ff4d88", padding: "3px 8px", borderRadius: "4px", fontSize: "11px", fontWeight: "bold"}}>LIVE</span>
              <h3 style={{margin:"10px 0 5px"}}>{session.title}</h3>
              <p style={{color:"#aaa", fontSize:"13px", margin:0}}><Calendar size={12}/> {session.date} • {session.time} • Coach: {session.coach}</p>
            </div>
            <a href={session.meetingLink} target="_blank" rel="noreferrer" style={{...s.actionBtn, background: "#ff4d88", color: "white", textDecoration:"none"}}>Join Session</a>
          </div>
        </div>
      ))}
    </div>
  );
}

// ==========================================
// STYLES (Kept Exactly Same)
// ==========================================
const flex = { display: "flex", alignItems: "center" };
const flexSB = { ...flex, justifyContent: "space-between" };
const gl = { background: "rgba(15, 23, 42, 0.6)", backdropFilter: "blur(12px)", padding: "20px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.08)" };

const s = {
  page: { minHeight: "100vh", background: "#020617", color: "white", padding: "20px", fontFamily: "sans-serif", maxWidth: "1200px", margin: "0 auto", paddingBottom: "50px" },
  header: { marginBottom: "30px" },
  title: { fontSize: "32px", fontWeight: "900", margin: 0, letterSpacing: "-0.5px" },
  sub: { color: "#94a3b8", fontSize: "15px", margin: "5px 0 20px" },
  navTabs: { display: "flex", gap: "10px", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "0px", overflowX: "auto" },
  tabBtn: { border: "none", padding: "10px 20px", fontSize: "15px", fontWeight: "bold", cursor: "pointer", transition: "all 0.3s", borderRadius: "8px 8px 0 0", whiteSpace: "nowrap" },
  categoryScroll: { display: "flex", gap: "10px", overflowX: "auto", paddingBottom: "15px", marginBottom: "20px" },
  pill: { padding: "8px 16px", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.1)", fontWeight: "bold", cursor: "pointer", whiteSpace: "nowrap" },
  sectionTitle: { ...flex, gap: "10px", fontSize: "20px", margin: "0 0 20px" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" },
  courseCard: { background: "rgba(15,23,42,0.8)", borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.05)", transition: "transform 0.2s" },
  thumbnail: { height: "160px", background: "linear-gradient(45deg, #1e293b, #0f172a)", ...flex, justifyContent: "center", position: "relative", borderRadius: "12px" },
  sportBadge: { position: "absolute", top: "10px", right: "10px", background: "rgba(0,0,0,0.6)", padding: "4px 10px", borderRadius: "8px", fontSize: "11px", fontWeight: "bold", backdropFilter: "blur(4px)" },
  infoTag: { ...flex, gap: "5px", color: "#94a3b8", fontSize: "12px" },
  enrollBtn: { width: "100%", padding: "10px", marginTop: "15px", background: "rgba(62,166,255,0.1)", color: "#3ea6ff", border: "1px solid rgba(62,166,255,0.3)", borderRadius: "8px", fontWeight: "bold", cursor: "pointer" },
  glass: gl, flexSB: flexSB,
  actionBtn: { ...flex, gap: "8px", border: "none", padding: "10px 16px", borderRadius: "8px", fontWeight: "bold", cursor: "pointer" },
  tierCard: { ...gl, position: "relative", display: "flex", flexDirection: "column" },
  popularBadge: { position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)", background: "#9d4edd", padding: "4px 12px", borderRadius: "20px", fontSize: "11px", fontWeight: "bold" },
  featureList: { listStyle: "none", padding: 0, margin: "20px 0", flex: 1, display: "flex", flexDirection: "column", gap: "12px", fontSize: "14px", color: "#e2e8f0" },
  tierBtn: { width: "100%", padding: "12px", border: "none", borderRadius: "8px", fontWeight: "bold", cursor: "pointer", marginTop: "auto" }
};
        
