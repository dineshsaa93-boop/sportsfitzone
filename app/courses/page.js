"use client";

import { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { 
  PlayCircle, Star, Users, Clock, Award, Shield, 
  Crown, Video, Calendar, CheckCircle, ChevronRight, Play, Dumbbell
} from "lucide-react";

export default function SportsFitZoneCourses() {
  const [userId, setUserId] = useState(null);
  const [activeTab, setActiveTab] = useState("explore"); // explore, learning, memberships, live
  const [activeSport, setActiveSport] = useState("All");

  const sportsCategories = ["All", "Cricket", "Football", "Basketball", "Athletics", "Boxing"];

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => {
      if (user) setUserId(user.uid);
    });
    return () => unsub();
  }, []);

  return (
    <div style={s.page}>
      
      {/* HEADER */}
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

      {/* RENDER CONTENT BASED ON TAB */}
      {activeTab === "explore" && <ExploreSection activeSport={activeSport} setActiveSport={setActiveSport} sportsCategories={sportsCategories} />}
      {activeTab === "learning" && <MyLearningSection userId={userId} />}
      {activeTab === "memberships" && <MembershipSection />}
      {activeTab === "live" && <LiveSessionsSection />}

    </div>
  );
}

// ==========================================
// 1. EXPLORE COURSES SECTION
// ==========================================
function ExploreSection({ activeSport, setActiveSport, sportsCategories }) {
  const MOCK_COURSES = [
    { id: "c1", title: "Cricket Fundamentals", sport: "Cricket", coach: "Rahul Dravid", rating: 4.9, students: "12k", level: "Beginner", modules: 12 },
    { id: "c2", title: "Finishing & Shooting", sport: "Football", coach: "Sunil Chhetri", rating: 4.8, students: "8.5k", level: "Advanced", modules: 8 },
    { id: "c3", title: "Explosive Plyometrics", sport: "Athletics", coach: "Usain B.", rating: 5.0, students: "22k", level: "Elite", modules: 15 }
  ];

  return (
    <div>
      {/* Category Pills */}
      <div style={s.categoryScroll}>
        {sportsCategories.map(sport => (
          <button key={sport} onClick={() => setActiveSport(sport)} style={{...s.pill, background: activeSport === sport ? "#3ea6ff" : "rgba(255,255,255,0.05)", color: activeSport === sport ? "#020617" : "white"}}>
            {sport}
          </button>
        ))}
      </div>

      <h2 style={s.sectionTitle}><Star color="#ffd700"/> Featured Masterclasses</h2>
      <div style={s.grid}>
        {MOCK_COURSES.map(course => (
          <div key={course.id} style={s.courseCard}>
            <div style={s.thumbnail}>
              <PlayCircle size={40} color="rgba(255,255,255,0.7)" />
              <span style={s.sportBadge}>{course.sport}</span>
            </div>
            <div style={{padding: "15px"}}>
              <h3 style={{margin:"0 0 5px", fontSize:"18px"}}>{course.title}</h3>
              <p style={{color:"#aaa", fontSize:"13px", margin:"0 0 10px"}}>Coach: <span style={{color:"#3ea6ff"}}>{course.coach}</span></p>
              
              <div style={s.flexSB}>
                <span style={s.infoTag}><Clock size={12}/> {course.modules} Modules</span>
                <span style={s.infoTag}><Users size={12}/> {course.students}</span>
              </div>
              
              <button style={s.enrollBtn}>View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// 2. MY LEARNING & PROGRESSION
// ==========================================
function MyLearningSection({ userId }) {
  const handleSyncToWorkout = async () => {
    alert("Practice Task '50x Front Foot Defense' sent to Workout Hub!");
    // Firebase Logic will go here: updateDoc arrayUnion to user's courseTasks
  };

  return (
    <div>
      <h2 style={s.sectionTitle}><Play color="#39ff14"/> Continue Learning</h2>
      
      {/* Active Course Card */}
      <div style={{...s.glass, display: "flex", gap: "20px", flexWrap: "wrap"}}>
        <div style={{...s.thumbnail, width: "200px", height: "120px"}}><PlayCircle size={30} color="white"/></div>
        <div style={{flex: 1}}>
          <div style={s.flexSB}>
            <h3 style={{margin:0}}>Cricket Fundamentals</h3>
            <span style={{color:"#39ff14", fontWeight:"bold"}}>45% Completed</span>
          </div>
          <p style={{color:"#aaa", fontSize:"14px", margin:"5px 0 15px"}}>Current Module: <b>Front Foot Defense</b></p>
          
          <div style={{background: "rgba(255,255,255,0.1)", height: "6px", borderRadius: "3px", marginBottom: "15px"}}>
            <div style={{background: "#39ff14", width: "45%", height: "100%", borderRadius: "3px"}}></div>
          </div>

          <div style={s.flexSB}>
            <button style={{...s.actionBtn, background: "#3ea6ff", color: "#020617"}}><Play size={16}/> Resume Video</button>
            
            {/* WORKOUT SYSTEM SYNC BUTTON */}
            <button onClick={handleSyncToWorkout} style={{...s.actionBtn, background: "rgba(157, 78, 221, 0.2)", border: "1px solid #9d4edd", color: "#e2e8f0"}}>
              <Dumbbell size={16} color="#9d4edd"/> Send Practice to Workout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 3. MEMBERSHIPS & LEVELS
// ==========================================
function MembershipSection() {
  return (
    <div>
      <div style={{textAlign: "center", marginBottom: "30px"}}>
        <h2 style={{fontSize:"28px", margin:0}}>Unlock Your Full Potential</h2>
        <p style={{color:"#aaa"}}>Choose the training tier that fits your goals.</p>
      </div>

      <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px"}}>
        
        {/* BASIC PLAN */}
        <div style={s.tierCard}>
          <h3 style={{color: "#3ea6ff"}}>BASIC</h3>
          <h2 style={{fontSize:"32px", margin:"10px 0"}}>Free</h2>
          <ul style={s.featureList}>
            <li><CheckCircle size={14} color="#39ff14"/> Recorded Classes</li>
            <li><CheckCircle size={14} color="#39ff14"/> Community Access</li>
            <li><CheckCircle size={14} color="#39ff14"/> Progress Tracking</li>
          </ul>
          <button style={{...s.tierBtn, border: "1px solid #3ea6ff", color: "#3ea6ff"}}>Current Plan</button>
        </div>

        {/* PREMIUM PLAN */}
        <div style={{...s.tierCard, border: "1px solid #9d4edd", transform: "scale(1.05)", background: "rgba(15,23,42,0.9)"}}>
          <div style={s.popularBadge}>Most Popular</div>
          <h3 style={{color: "#9d4edd"}}><Shield size={18}/> PREMIUM</h3>
          <h2 style={{fontSize:"32px", margin:"10px 0"}}>$15<span style={{fontSize:"14px", color:"#aaa"}}>/mo</span></h2>
          <ul style={s.featureList}>
            <li><CheckCircle size={14} color="#9d4edd"/> Everything in Basic</li>
            <li><CheckCircle size={14} color="#9d4edd"/> Exclusive Classes</li>
            <li><CheckCircle size={14} color="#9d4edd"/> Advanced Training Plans</li>
            <li><CheckCircle size={14} color="#9d4edd"/> Coach Q&A Sessions</li>
          </ul>
          <button style={{...s.tierBtn, background: "#9d4edd", color: "white"}}>Upgrade Premium</button>
        </div>

        {/* ELITE PLAN */}
        <div style={s.tierCard}>
          <h3 style={{color: "#ffd700"}}><Crown size={18}/> ELITE</h3>
          <h2 style={{fontSize:"32px", margin:"10px 0"}}>$99<span style={{fontSize:"14px", color:"#aaa"}}>/mo</span></h2>
          <ul style={s.featureList}>
            <li><CheckCircle size={14} color="#ffd700"/> 1-to-1 Coach Calls</li>
            <li><CheckCircle size={14} color="#ffd700"/> Personalized Roadmap</li>
            <li><CheckCircle size={14} color="#ffd700"/> Performance Reviews</li>
            <li><CheckCircle size={14} color="#ffd700"/> Private Mentorship</li>
          </ul>
          <button style={{...s.tierBtn, background: "linear-gradient(90deg, #ffd700, #ffaa00)", color: "#000"}}>Apply for Elite</button>
        </div>

      </div>
    </div>
  );
}

// ==========================================
// 4. LIVE SESSIONS
// ==========================================
function LiveSessionsSection() {
  return (
    <div>
      <h2 style={s.sectionTitle}><Video color="#ff4d88"/> Upcoming Live Clinics</h2>
      <div style={{...s.glass, borderLeft: "4px solid #ff4d88"}}>
        <div style={s.flexSB}>
          <div>
            <span style={{background: "#ff4d88", padding: "3px 8px", borderRadius: "4px", fontSize: "11px", fontWeight: "bold"}}>LIVE TODAY</span>
            <h3 style={{margin:"10px 0 5px"}}>Advanced Fast Bowling Tactics</h3>
            <p style={{color:"#aaa", fontSize:"13px", margin:0}}><Calendar size={12}/> 7:30 PM • Coach M. Johnson</p>
          </div>
          <button style={{...s.actionBtn, background: "#ff4d88", color: "white"}}>Join Session</button>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// STYLES (Glassmorphism & Branding)
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
  glass: gl,
  flexSB: flexSB,
  actionBtn: { ...flex, gap: "8px", border: "none", padding: "10px 16px", borderRadius: "8px", fontWeight: "bold", cursor: "pointer" },
  tierCard: { ...gl, position: "relative", display: "flex", flexDirection: "column" },
  popularBadge: { position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)", background: "#9d4edd", padding: "4px 12px", borderRadius: "20px", fontSize: "11px", fontWeight: "bold" },
  featureList: { listStyle: "none", padding: 0, margin: "20px 0", flex: 1, display: "flex", flexDirection: "column", gap: "12px", fontSize: "14px", color: "#e2e8f0" },
  tierBtn: { width: "100%", padding: "12px", border: "none", borderRadius: "8px", fontWeight: "bold", cursor: "pointer", marginTop: "auto" }
};
  
