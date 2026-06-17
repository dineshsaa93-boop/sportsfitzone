"use client";

import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import { Trophy, Flame, Medal } from "lucide-react";

export default function GlobalLeaderboard() {
  const [athletes, setAthletes] = useState([]);
  const [activeTab, setActiveTab] = useState("Global");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      // Query users sorted by XP descending. For 'Academy' or 'Friends', you would add a 'where' clause.
      const q = query(collection(db, "users"), orderBy("xp", "desc"), limit(50));
      const snap = await getDocs(q);
      setAthletes(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      setLoading(false);
    };
    fetchLeaderboard();
  }, [activeTab]);

  if (loading) return <div style={s.center}>Loading Global Rankings...</div>;

  return (
    <div style={s.page}>
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <Trophy size={48} color="#ffd700" style={{ marginBottom: "10px" }} />
        <h1 style={{ fontSize: "32px", margin: "0 0 10px 0" }}>Hall of Fame</h1>
        
        <div style={s.tabs}>
          {["Global", "Academy", "Friends"].map(tab => (
            <button 
              key={tab} 
              onClick={() => setActiveTab(tab)}
              style={{...s.tabBtn, background: activeTab === tab ? "rgba(62,166,255,0.2)" : "transparent", color: activeTab === tab ? "#3ea6ff" : "#94a3b8", borderBottom: activeTab === tab ? "2px solid #3ea6ff" : "2px solid transparent"}}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div style={s.listContainer}>
        {athletes.map((athlete, index) => {
          const isTop3 = index < 3;
          const rankColors = ["#ffd700", "#c0c0c0", "#cd7f32"]; // Gold, Silver, Bronze
          
          return (
            <div key={athlete.id} style={{...s.athleteRow, border: isTop3 ? `1px solid ${rankColors[index]}50` : "1px solid rgba(255,255,255,0.05)"}}>
              <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                <div style={{...s.rankBadge, background: isTop3 ? `${rankColors[index]}20` : "rgba(255,255,255,0.05)", color: isTop3 ? rankColors[index] : "#94a3b8"}}>
                  {isTop3 ? <Medal size={16} /> : `#${index + 1}`}
                </div>
                <div>
                  
  <h3 style={{ margin: "0 0 4px", fontSize: "16px" }}>
    {athlete.name || athlete.displayName || "Unknown Athlete"}
  </h3>

  <span style={{ fontSize: "12px", color: "#94a3b8" }}>
    Level {athlete.level || 1} • {athlete.sport || "Athlete"}
  </span>
</div>
              
              <div style={{ textAlign: "right" }}>
                <h3 style={{ margin: "0 0 4px", color: "#3ea6ff" }}>{athlete.xp || 0} XP</h3>
                <span style={{ fontSize: "12px", color: "#ff4d88", display: "flex", alignItems: "center", gap: "4px", justifyContent: "flex-end" }}>
                  <Flame size={12}/> {athlete.streak || 0}
                </span>
              </div>
            </div>
          );
        })}
      
    </div>
  );
}

const s = {
  page: { minHeight: "100vh", background: "#020617", color: "white", padding: "20px", maxWidth: "800px", margin: "0 auto", fontFamily: "sans-serif" },
  center: { display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "#020617", color: "white" },
  tabs: { display: "flex", justifyContent: "center", gap: "10px", marginTop: "20px" },
  tabBtn: { padding: "10px 20px", fontSize: "15px", fontWeight: "bold", border: "none", cursor: "pointer", transition: "0.3s", borderRadius: "8px 8px 0 0" },
  listContainer: { display: "flex", flexDirection: "column", gap: "10px" },
  athleteRow: { background: "rgba(15, 23, 42, 0.6)", backdropFilter: "blur(12px)", padding: "16px 20px", borderRadius: "12px", display: "flex", justifyContent: "space-between", alignItems: "center", transition: "transform 0.2s" },
  rankBadge: { width: "35px", height: "35px", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold", fontSize: "14px" }
};
                               
