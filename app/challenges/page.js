"use client";

import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { doc, onSnapshot, updateDoc, increment, arrayUnion, Timestamp } from "firebase/firestore";
import { 
  Trophy, Flame, Zap, Droplets, Moon, Target, Shield, 
  Brain, Star, CheckCircle, TrendingUp, Award, Calendar
} from "lucide-react";

// --- PROGRESSION CONFIGURATION ---
const SEASON_CONFIG = { name: "Summer Pro Series 2026", endDate: "2026-09-01" };

const SPORT_PACKS = {
  Athletics: [
    { id: "ath1", title: "10x 100m Sprint Intervals", diff: "Hard", xp: 50, type: "daily" },
    { id: "ath2", title: "Plyometric Explosive Session", diff: "Elite", xp: 150, type: "weekly" }
  ],
  Basketball: [
    { id: "bsk1", title: "500 Free Throw Practice", diff: "Hard", xp: 75, type: "daily" },
    { id: "bsk2", title: "Dribbling Course (20 mins)", diff: "Medium", xp: 40, type: "daily" }
  ],
  Boxing: [
    { id: "box1", title: "10 Rounds Shadow Boxing", diff: "Hard", xp: 60, type: "daily" },
    { id: "box2", title: "Heavy Bag HIIT (30 mins)", diff: "Elite", xp: 200, type: "boss" }
  ]
};

export default function ProfessionalProgressionSystem() {
  const [userId, setUserId] = useState(null);
  const [userData, setUserData] = useState(null);
  const [anim, setAnim] = useState(null); // 'levelup' or 'complete'

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(user => {
      if (user) setUserId(user.uid);
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    if (!userId) return;
    const unsub = onSnapshot(doc(db, "users", userId), (snap) => {
      const data = snap.data();
      setUserData(data);
      checkAutoCompletion(data);
    });
    return () => unsub();
  }, [userId]);

  // --- AUTOMATIC COMPLETION ENGINE ---
  const checkAutoCompletion = async (data) => {
    if (!data.dailyChallenges) return;

    let updates = {};
    let completedAny = false;

    data.dailyChallenges.forEach(ch => {
      if (ch.auto && !ch.isCompleted) {
        if (ch.type === "water" && data.waterIntake >= data.waterGoal) {
          updates[`completedChallenges`] = arrayUnion(ch.id);
          updates[`xp`] = increment(ch.xp);
          completedAny = true;
        }
      }
    });

    if (completedAny) {
      await updateDoc(doc(db, "users", userId), updates);
      setAnim("complete");
      setTimeout(() => setAnim(null), 2000);
    }
  };

  const handleManualComplete = async (ch) => {
    await updateDoc(doc(db, "users", userId), {
      completedChallenges: arrayUnion(ch.id),
      xp: increment(ch.xp),
      challengeHistory: arrayUnion({ id: ch.id, date: Timestamp.now() })
    });
    setAnim("complete");
  };

  if (!userData) return <div style={s.center}>Loading Engine...</div>;

  return (
    <div style={s.page}>
      {/* ANIMATION OVERLAYS */}
      {anim && (
        <div style={s.overlay}>
          <div style={s.modal}>
            <Trophy size={60} color="#ffd700" className="animate-bounce" />
            <h2>Challenge Cleared!</h2>
            <p>XP Added to Season Pool</p>
          </div>
        </div>
      )}

      {/* SEASON HEADER */}
      <div style={s.glass}>
        <div style={s.flexSB}>
          <div>
            <h1 style={{margin:0}}>Season: {SEASON_CONFIG.name}</h1>
            <p style={{color:"#3ea6ff"}}>Level {Math.floor(userData.xp / 500) + 1} | Elite Rank</p>
          </div>
          <div style={s.xpBadge}>{userData.xp} Season XP</div>
        </div>
      </div>

      {/* CHALLENGE CATEGORIES */}
      <div style={{marginTop: "20px"}}>
        <h2 style={s.h2}><Flame color="#ff4d88"/> Daily Active Challenges</h2>
        {userData.dailyChallenges?.map(ch => (
          <ChallengeCard key={ch.id} ch={ch} onComplete={() => handleManualComplete(ch)} />
        ))}
      </div>

      <div style={{marginTop: "20px"}}>
        <h2 style={s.h2}><Target color="#3ea6ff"/> Elite Boss Challenges</h2>
        {userData.eliteChallenges?.map(ch => (
          <ChallengeCard key={ch.id} ch={ch} boss={true} />
        ))}
      </div>

      {/* DAILY LOGIN BONUS */}
      <div style={s.bonusBox}>
        <Calendar color="#39ff14" />
        <span>Daily Login Reward Available: <b>+50 XP</b></span>
        <button style={s.claimBtn}>Claim</button>
      </div>
    </div>
  );
}

function ChallengeCard({ ch, onComplete, boss }) {
  return (
    <div style={{...s.card, border: boss ? "1px solid #ffd700" : "1px solid rgba(255,255,255,0.1)"}}>
      <div>
        <h3 style={{margin:"0 0 5px"}}>{ch.title}</h3>
        <span style={{fontSize:"12px", color:"#aaa"}}>{ch.diff} • {ch.xp} XP</span>
      </div>
      <button onClick={onComplete} style={s.actionBtn}>
        {boss ? "Start Boss Battle" : "Complete"}
      </button>
    </div>
  );
}

const s = {
  page: { minHeight: "100vh", background: "#020617", color: "white", padding: "20px", maxWidth: "800px", margin: "0 auto" },
  center: { display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" },
  glass: { background: "rgba(15, 23, 42, 0.8)", padding: "20px", borderRadius: "16px", backdropFilter: "blur(10px)" },
  flexSB: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  h2: { display: "flex", alignItems: "center", gap: "10px", fontSize: "18px", marginBottom: "15px" },
  xpBadge: { background: "#3ea6ff", padding: "8px 16px", borderRadius: "20px", fontWeight: "bold" },
  card: { background: "rgba(0,0,0,0.3)", padding: "16px", borderRadius: "12px", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" },
  actionBtn: { background: "transparent", border: "1px solid #3ea6ff", color: "#3ea6ff", padding: "8px 12px", borderRadius: "8px", cursor: "pointer" },
  bonusBox: { marginTop: "30px", background: "linear-gradient(90deg, #39ff1422, transparent)", padding: "15px", borderRadius: "12px", display: "flex", alignItems: "center", gap: "15px" },
  claimBtn: { marginLeft: "auto", background: "#39ff14", border: "none", padding: "8px 15px", borderRadius: "8px", fontWeight: "bold" },
  overlay: { position: "fixed", top:0, left:0, right:0, bottom:0, background: "rgba(0,0,0,0.8)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100 },
  modal: { background: "#0f172a", padding: "40px", borderRadius: "20px", textAlign: "center", border: "1px solid #ffd700" }
};
        
