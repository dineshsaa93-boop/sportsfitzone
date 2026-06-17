"use client";

import { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { 
  collection, query, orderBy, limit, onSnapshot, 
  where, doc, getDoc, updateDoc, arrayUnion, getDocs 
} from "firebase/firestore";
import { Trophy, Flame, Medal, UserPlus, Search, AlertCircle, Loader2 } from "lucide-react";

export default function LeaderboardPage() {
  const [currentUser, setCurrentUser] = useState(null);
  const [activeTab, setActiveTab] = useState("Global");
  const [athletes, setAthletes] = useState([]);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  
  // Add Friend State
  const [friendEmail, setFriendEmail] = useState("");
  const [addingFriend, setAddingFriend] = useState(false);

  // 1. Authenticate & Fetch Current User Profile
  useEffect(() => {
    const unsubAuth = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDocRef = doc(db, "users", user.uid);
        // Real-time listener on current user to track 'friends' array changes
        const unsubUser = onSnapshot(userDocRef, (docSnap) => {
          if (docSnap.exists()) {
            setCurrentUser({ uid: docSnap.id, ...docSnap.data() });
          }
        });
        return () => unsubUser();
      } else {
        setCurrentUser(null);
        setLoading(false);
      }
    });
    return () => unsubAuth();
  }, []);

  // 2. Fetch Leaderboard Data Based on Active Tab
  useEffect(() => {
    if (!currentUser) return;

    setLoading(true);
    setError("");
    let unsubscribe = () => {};

    const fetchLeaderboard = async () => {
      try {
        if (activeTab === "Global") {
          const q = query(collection(db, "users"), orderBy("xp", "desc"), limit(100));
          unsubscribe = onSnapshot(q, (snap) => {
            setAthletes(snap.docs.map(d => ({ id: d.id, ...d.data() })));
            setLoading(false);
          });
        } 
        else if (activeTab === "Academy") {
          if (!currentUser.academyId) {
            setError("You are not assigned to any Academy yet.");
            setAthletes([]);
            setLoading(false);
            return;
          }
          const q = query(
            collection(db, "users"), 
            where("academyId", "==", currentUser.academyId), 
            orderBy("xp", "desc"), 
            limit(100)
          );
          unsubscribe = onSnapshot(q, (snap) => {
            setAthletes(snap.docs.map(d => ({ id: d.id, ...d.data() })));
            setLoading(false);
          });
        } 
        else if (activeTab === "Friends") {
          // Fetch current user + their friends
          const friendIds = currentUser.friends || [];
          const idsToFetch = [...friendIds, currentUser.uid]; // Include self in friends leaderboard
          
          // Using Promise.all to bypass Firestore's 10-item limit for 'in' queries
          const friendDocs = await Promise.all(
            idsToFetch.map(id => getDoc(doc(db, "users", id)))
          );
          
          const friendsData = friendDocs
            .filter(d => d.exists())
            .map(d => ({ id: d.id, ...d.data() }))
            .sort((a, b) => (b.xp || 0) - (a.xp || 0)); // Sort locally by XP
            
          setAthletes(friendsData);
          setLoading(false);
        }
      } catch (err) {
        console.error("Leaderboard Error:", err);
        setError("Failed to sync leaderboard data.");
        setLoading(false);
      }
    };

    fetchLeaderboard();
    return () => unsubscribe();
  }, [activeTab, currentUser]); // Re-run when tab changes or current user data (like friends list) updates

  // 3. Add Friend Functionality
  const handleAddFriend = async (e) => {
    e.preventDefault();
    if (!friendEmail.trim()) return;
    setAddingFriend(true);
    setError("");

    try {
      // Find user by email
      const q = query(collection(db, "users"), where("email", "==", friendEmail.trim()));
      const snap = await getDocs(q);
      
      if (snap.empty) {
        setError("No athlete found with this email.");
        setAddingFriend(false);
        return;
      }

      const friendDoc = snap.docs[0];
      const friendId = friendDoc.id;

      if (friendId === currentUser.uid) {
        setError("You cannot add yourself as a friend.");
        setAddingFriend(false);
        return;
      }

      if (currentUser.friends?.includes(friendId)) {
        setError("Athlete is already in your friends list.");
        setAddingFriend(false);
        return;
      }

      // Add to friends array in Firestore
      await updateDoc(doc(db, "users", currentUser.uid), {
        friends: arrayUnion(friendId)
      });

      setFriendEmail("");
      alert(`${friendDoc.data().displayName || friendDoc.data().name} added to your squad!`);
      // Note: The active tab effect will auto-retrigger because currentUser updates via onSnapshot
    } catch (err) {
      console.error(err);
      setError("Failed to add friend. Try again.");
    }
    setAddingFriend(false);
  };

  // Render
  if (!currentUser && !loading) {
    return (
      <div style={s.center}>
        <AlertCircle size={40} color="#ff4d88" />
        <h2 style={{ marginTop: "15px", color: "#e2e8f0" }}>Authentication Required</h2>
        <p style={{ color: "#94a3b8" }}>Please log in to view the Global Rankings.</p>
      </div>
    );
  }

  return (
    <div style={s.page}>
      {/* HEADER */}
      <div style={{ textAlign: "center", marginBottom: "30px", animation: "fadeIn 0.5s ease" }}>
        <Trophy size={48} color="#ffd700" style={{ marginBottom: "10px", filter: "drop-shadow(0 0 15px rgba(255,215,0,0.4))" }} />
        <h1 style={{ fontSize: "36px", margin: "0 0 10px 0", fontWeight: "900", background: "linear-gradient(90deg, #3ea6ff, #9d4edd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Hall of Fame
        </h1>
        <p style={{ color: "#94a3b8", fontSize: "14px" }}>Compete globally, locally, or with your squad.</p>
        
        {/* TABS */}
        <div style={s.tabs}>
          {["Global", "Academy", "Friends"].map(tab => (
            <button 
              key={tab} 
              onClick={() => setActiveTab(tab)}
              style={{
                ...s.tabBtn, 
                background: activeTab === tab ? "rgba(62,166,255,0.15)" : "rgba(15, 23, 42, 0.4)", 
                color: activeTab === tab ? "#3ea6ff" : "#94a3b8", 
                borderBottom: activeTab === tab ? "3px solid #3ea6ff" : "3px solid transparent"
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* ERROR MESSAGE */}
      {error && (
        <div style={{ background: "rgba(255,77,136,0.1)", border: "1px solid rgba(255,77,136,0.3)", padding: "12px", borderRadius: "10px", color: "#ff4d88", marginBottom: "20px", textAlign: "center", fontSize: "14px" }}>
          {error}
        </div>
      )}

      {/* ADD FRIEND SECTION (Only visible on Friends Tab) */}
      {activeTab === "Friends" && (
        <div style={{...s.glass, padding: "20px", marginBottom: "25px", display: "flex", flexDirection: "column", gap: "10px", animation: "slideDown 0.3s ease"}}>
          <h3 style={{ margin: 0, fontSize: "16px", display: "flex", alignItems: "center", gap: "8px" }}><UserPlus size={18} color="#39ff14"/> Add Athlete to Squad</h3>
          <form onSubmit={handleAddFriend} style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <div style={{ flex: 1, position: "relative" }}>
              <Search size={16} color="#94a3b8" style={{ position: "absolute", left: "15px", top: "14px" }} />
              <input 
                type="email" 
                placeholder="Enter friend's exact email address..." 
                value={friendEmail}
                onChange={(e) => setFriendEmail(e.target.value)}
                style={s.input}
                required
              />
            </div>
            <button type="submit" disabled={addingFriend} style={{...s.btn, background: "#39ff14", color: "#020617"}}>
              {addingFriend ? "Adding..." : "Send Request"}
            </button>
          </form>
        </div>
      )}

      {/* LEADERBOARD LIST */}
      {loading ? (
        <div style={{ display: "flex", justifyContent: "center", padding: "50px 0" }}>
          <Loader2 size={36} color="#3ea6ff" style={{ animation: "spin 1s linear infinite" }} />
        </div>
      ) : athletes.length === 0 ? (
        <div style={{ textAlign: "center", padding: "40px", background: "rgba(15, 23, 42, 0.4)", borderRadius: "16px" }}>
          <p style={{ color: "#94a3b8" }}>No athletes found in this category.</p>
        </div>
      ) : (
        <div style={s.listContainer}>
          {athletes.map((athlete, index) => {
            const isTop3 = index < 3;
            const rankColors = ["#ffd700", "#c0c0c0", "#cd7f32"]; // Gold, Silver, Bronze
            const rankColor = isTop3 ? rankColors[index] : "rgba(255,255,255,0.05)";
            const isMe = athlete.id === currentUser.uid;
            
            // Extract accurate details safely
            const realName = athlete.displayName || athlete.name || "Athlete";
            const initial = realName.charAt(0).toUpperCase();

            return (
              <div 
                key={athlete.id} 
                style={{
                  ...s.athleteRow, 
                  border: isTop3 ? `1px solid ${rankColors[index]}50` : isMe ? "1px solid rgba(62,166,255,0.4)" : "1px solid rgba(255,255,255,0.05)",
                  background: isMe ? "rgba(62,166,255,0.05)" : "rgba(15, 23, 42, 0.6)",
                  animation: `slideUp 0.4s ease ${index * 0.05}s forwards`,
                  opacity: 0, // for animation
                  transform: "translateY(20px)" // for animation
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                  {/* RANK BADGE */}
                  <div style={{...s.rankBadge, background: isTop3 ? `${rankColors[index]}20` : "rgba(255,255,255,0.05)", color: isTop3 ? rankColors[index] : "#94a3b8", border: isTop3 ? `1px solid ${rankColors[index]}50` : "none"}}>
                    {isTop3 ? <Medal size={18} /> : index + 1}
                  </div>
                  
                  {/* AVATAR */}
                  {athlete.photo ? (
                    <img src={athlete.photo} alt={realName} style={s.avatar} />
                  ) : (
                    <div style={{...s.avatar, background: "linear-gradient(135deg, #3ea6ff, #9d4edd)", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold", fontSize: "18px"}}>
                      {initial}
                    </div>
                  )}

                  {/* USER INFO */}
                  <div>
                    <h3 style={{ margin: "0 0 2px", fontSize: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                      {realName} {isMe && <span style={{fontSize:"10px", background:"#3ea6ff", color:"#020617", padding:"2px 6px", borderRadius:"4px", fontWeight:"bold"}}>YOU</span>}
                    </h3>
                    <span style={{ fontSize: "12px", color: "#94a3b8", display: "flex", gap: "8px" }}>
                      <span>Lvl {athlete.level || 1}</span> • 
                      <span>{athlete.sport || "Multisport"}</span>
                    </span>
                  </div>
                </div>
                
                {/* STATS */}
                <div style={{ textAlign: "right" }}>
                  <h3 style={{ margin: "0 0 2px", color: "#ffaa00", fontSize: "18px", fontWeight: "900" }}>{athlete.xp || 0} XP</h3>
                  <span style={{ fontSize: "13px", color: "#ff4d88", display: "flex", alignItems: "center", gap: "4px", justifyContent: "flex-end", fontWeight: "bold" }}>
                    <Flame size={14}/> {athlete.streak || 0} Day
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Internal CSS Animations injected */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { to { opacity: 1; transform: translateY(0); } }
        @keyframes slideDown { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
      `}} />
    </div>
  );
}

// ULTRA-MINIMIZED CSS IN JS (Glassmorphism Dark Theme)
const s = {
  page: { minHeight: "100vh", background: "#020617", color: "white", padding: "20px", maxWidth: "800px", margin: "0 auto", fontFamily: "sans-serif", paddingBottom: "50px" },
  center: { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", minHeight: "80vh", textAlign: "center" },
  tabs: { display: "flex", justifyContent: "center", marginTop: "20px", background: "rgba(15, 23, 42, 0.8)", padding: "5px", borderRadius: "12px", display: "inline-flex" },
  tabBtn: { padding: "12px 24px", fontSize: "15px", fontWeight: "bold", border: "none", cursor: "pointer", transition: "all 0.3s ease", borderRadius: "8px" },
  glass: { background: "rgba(15, 23, 42, 0.6)", backdropFilter: "blur(12px)", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.08)" },
  input: { width: "100%", padding: "14px 15px 14px 40px", background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", color: "white", boxSizing: "border-box", outline: "none", fontSize: "14px" },
  btn: { padding: "14px 24px", border: "none", borderRadius: "8px", fontWeight: "bold", cursor: "pointer", transition: "0.2s", whiteSpace: "nowrap" },
  listContainer: { display: "flex", flexDirection: "column", gap: "12px" },
  athleteRow: { backdropFilter: "blur(12px)", padding: "16px 20px", borderRadius: "14px", display: "flex", justifyContent: "space-between", alignItems: "center", transition: "transform 0.2s, box-shadow 0.2s", cursor: "default" },
  rankBadge: { minWidth: "38px", height: "38px", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold", fontSize: "15px" },
  avatar: { width: "42px", height: "42px", borderRadius: "50%", objectFit: "cover", border: "2px solid rgba(255,255,255,0.1)" }
};
        
