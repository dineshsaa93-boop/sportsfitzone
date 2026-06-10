"use client";

import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import {
  Crown,
  Lock,
  PlayCircle,
  Flame,
  Star,
  X,
  CheckCircle
} from "lucide-react";

export default function CoursesPage() {
  const [selectedSport, setSelectedSport] = useState("all");
  const [purchasedCourses, setPurchasedCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [success, setSuccess] = useState(false);
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);

  // CORE DATA ARRAY
  const courses = [
    {
      id: "cricket_01",
      sport: "cricket",
      title: "Cricket Masterclass",
      coach: "Virat Coach",
      badge: "Verified Athlete",
      xp: "12,500 XP",
      review: "Best sports training course ever 🔥",
      student: "Aryan",
      live: "Today 7:00 PM",
      achievement: "🏆 Elite Athlete Badge Unlocked",
      downloads: "12 Resources",
      quiz: "25 Questions Quiz",
      rank: "#1 Athlete",
      points: "+500 XP",
      price: "499",
      level: "Normal",
      duration: "12 Hours",
      lessons: "48 Lessons",
      rating: "4.9 ⭐",
      progress: "65%",
      completed: "32/48 Lessons",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc"
    },
    {
      id: "football_01",
      sport: "football",
      title: "Football Speed Training",
      coach: "Ronaldo Coach",
      badge: "Verified Athlete",
      xp: "18,400 XP",
      review: "Amazing speed drills and athlete mindset 💪",
      student: "Dinesh",
      live: "Tomorrow 6:30 PM",
      achievement: "🏆 Speed Beast Badge Unlocked",
      downloads: "18 Resources",
      quiz: "40 Questions Quiz",
      rank: "#2 Athlete",
      points: "+900 XP",
      price: "999",
      level: "Premium",
      duration: "20 Hours",
      lessons: "72 Lessons",
      rating: "4.8 ⭐",
      progress: "82%",
      completed: "59/72 Lessons",
      image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974"
    },
    {
      id: "gym_01",
      sport: "gym",
      title: "Gym Beast Program",
      coach: "Fitness Pro",
      badge: "Verified Athlete",
      xp: "30,000 XP",
      review: "Best muscle building course on earth 🔥",
      student: "Pragati",
      live: "Today 9:00 PM",
      achievement: "🏆 Elite Athlete Badge Unlocked",
      downloads: "35 Resources",
      quiz: "75 Questions Quiz",
      rank: "#1 Elite Athlete",
      points: "+1500 XP",
      price: "1999",
      level: "Premium DP",
      duration: "35 Hours",
      lessons: "120 Lessons",
      rating: "5.0 ⭐",
      progress: "91%",
      completed: "109/120 Lessons",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
    }
  ];

  // 1. FIREBASE AUTH CHECK
  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId(null);
        setLoading(false);
      }
    });
    return () => unsubscribeAuth();
  }, []);

  // 2. REAL-TIME DATA FETCH (PURCHASED COURSES)
  useEffect(() => {
    if (!userId) return;

    const userDocRef = doc(db, "users", userId);
    const unsubscribeDoc = onSnapshot(userDocRef, (docSnap) => {
      if (docSnap.exists()) {
        setPurchasedCourses(docSnap.data().purchasedCourses || []);
      }
      setLoading(false);
    });

    return () => unsubscribeDoc();
  }, [userId]);

  // 3. PURCHASE LOGIC HANDLERS
  function handleBuyClick(course) {
    if (!userId) {
      alert("Please login first to purchase courses!");
      return;
    }
    setSelectedCourse(course);
    setShowPopup(true);
  }

  async function confirmPurchase() {
    if (!userId || !selectedCourse) return;

    if (purchasedCourses.includes(selectedCourse.id)) {
      setShowPopup(false);
      alert("Aapne ye course pehle se kharida hua hai!");
      return;
    }

    const updatedPurchases = [...purchasedCourses, selectedCourse.id];
    
    // UI Update immediately
    setPurchasedCourses(updatedPurchases);
    setShowPopup(false);
    setSuccess(true);

    try {
      await setDoc(
        doc(db, "users", userId),
        { purchasedCourses: updatedPurchases },
        { merge: true }
      );
    } catch (error) {
      console.error("Firebase update failed:", error);
      // Rollback on failure
      setPurchasedCourses(purchasedCourses);
    }
  }

  // 4. SPORT FILTER LOGIC
  const filteredCourses = selectedSport === "all" 
    ? courses 
    : courses.filter((c) => c.sport === selectedSport);

  // 5. LOADING SCREEN
  if (loading) {
    return (
      <div style={{ background: "#020817", minHeight: "100vh", color: "white", display: "flex", justifyContent: "center", alignItems: "center", fontFamily: "sans-serif" }}>
        <h2>Loading Modules...</h2>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>🎓 Sports Courses</h1>

      {/* MEMBERSHIP SECTION */}
      <div style={styles.membershipBox}>
        <div style={styles.planCard}>
          <h2>🟢 NORMAL</h2>
          <h1>FREE</h1>
          <p>Basic workouts</p>
          <p>Community access</p>
          <button style={styles.freeBtn}>Current Plan</button>
        </div>

        <div style={styles.planCardPremium}>
          <Crown color="#ffd700" size={40} />
          <h2>PREMIUM</h2>
          <h1>₹199/mo</h1>
          <p>AI Plans</p>
          <p>1 to 1 Chat</p>
          <p>Premium Courses</p>
          <button style={styles.premiumBtn}>Upgrade</button>
        </div>

        <div style={styles.planCardElite}>
          <Flame color="#ff4d88" size={40} />
          <h2>ELITE DP</h2>
          <h1>₹999/mo</h1>
          <p>Video Calls</p>
          <p>Live Doubts</p>
          <p>Personal Trainer</p>
          <button style={styles.eliteBtn}>Go Elite</button>
        </div>
      </div>

      {/* DYNAMIC SPORT FILTERS */}
      <h2 style={styles.sectionTitle}>Select Your Sport ⚽</h2>
      <div style={styles.filterContainer}>
        {["all", "cricket", "football", "gym"].map((sport) => (
          <button
            key={sport}
            onClick={() => setSelectedSport(sport)}
            style={{
              ...styles.filterBtn,
              background: selectedSport === sport ? "#39ff14" : "#081120",
              color: selectedSport === sport ? "black" : "white"
            }}
          >
            {sport.toUpperCase()}
          </button>
        ))}
      </div>

      <h2 style={styles.sectionTitle}>Top Courses 🔥</h2>

      {/* COURSE MAPPING */}
      {filteredCourses.map((course) => {
        // Core Security Logic: Checking if user owns this specific course
        const isOwned = purchasedCourses.includes(course.id);

        return (
          <div key={course.id} style={styles.courseCard}>
            <img src={course.image} alt="course" style={styles.courseImage} />

            <div style={styles.courseContent}>
              <div style={styles.levelRow}>
                <div style={styles.levelBox}>
                  <p style={styles.level}>{course.level}</p>
                  {course.level === "Premium" && <span style={styles.premiumBadge}>⭐ PREMIUM</span>}
                  {course.level === "Premium DP" && <span style={styles.dpBadge}>👑 PREMIUM DP</span>}
                </div>
                {!isOwned && course.level !== "Normal" && <Lock color="#ffd700" size={20} />}
                {isOwned && <CheckCircle color="#39ff14" size={20} />}
              </div>

              <h2>{course.title}</h2>
              <p style={{ color: "#aaa" }}>By {course.coach}</p>

              <div style={styles.badgeRow}>
                <span style={styles.verifyBadge}>✔ {course.badge}</span>
                <span style={styles.xpBadge}>🔥 {course.xp}</span>
              </div>

              <div style={styles.infoRow}>
                <p>⏱ {course.duration}</p>
                <p>🎥 {course.lessons}</p>
              </div>

              <p style={styles.rating}>{course.rating}</p>

              {/* DYNAMIC PROGRESS: Only show if course is owned */}
              {isOwned && (
                <div style={styles.progressBox}>
                  <div style={styles.progressTop}>
                    <p>{course.completed}</p>
                    <p>{course.progress}</p>
                  </div>
                  <div style={styles.progressBar}>
                    <div style={{ ...styles.progressFill, width: course.progress }} />
                  </div>
                </div>
              )}

              {/* DYNAMIC PRICE: Only show if NOT owned */}
              {!isOwned && <h3 style={styles.price}>₹{course.price}</h3>}

              <div style={styles.reviewBox}>
                <p style={styles.reviewText}>"{course.review}"</p>
                <p style={styles.studentName}>— {course.student}</p>
              </div>

              <button style={styles.previewBtn}>▶ Preview Course</button>

              {/* CONDITIONAL RENDERING: Buttons change based on Ownership */}
              {!isOwned ? (
                <button style={styles.watchBtn} onClick={() => handleBuyClick(course)}>
                  <PlayCircle size={22} />
                  Buy Course
                </button>
              ) : (
                <>
                  <button style={styles.continueBtn}>Continue Learning</button>
                  <button style={styles.certificateBtn}>🏅 View Certificate</button>

                  <div style={styles.liveClassBox}>
                    <div>
                      <p style={styles.liveText}>🔴 LIVE CLASS</p>
                      <p style={{ color: "#aaa" }}>{course.live}</p>
                    </div>
                    <button style={styles.joinBtn}>Join</button>
                  </div>

                  <div style={styles.achievementBox}>
                    <h3 style={styles.achievementTitle}>Achievement</h3>
                    <p style={styles.achievementText}>{course.achievement}</p>
                  </div>

                  <div style={styles.downloadBox}>
                    <div>
                      <h3>📥 Course Resources</h3>
                      <p style={{ color: "#aaa" }}>{course.downloads}</p>
                    </div>
                    <button style={styles.downloadBtn}>Download</button>
                  </div>

                  <div style={styles.quizBox}>
                    <div>
                      <h3>🧠 Athlete Quiz</h3>
                      <p style={{ color: "#aaa" }}>{course.quiz}</p>
                    </div>
                    <button style={styles.quizBtn}>Start Quiz</button>
                  </div>

                  <div style={styles.rankBox}>
                    <div>
                      <h3>🏆 Athlete Rank</h3>
                      <p style={{ color: "#aaa" }}>{course.rank}</p>
                    </div>
                    <div style={styles.xpBox}>{course.points}</div>
                  </div>
                </>
              )}
            </div>
          </div>
        );
      })}

      {/* WHY UPGRADE SECTION */}
      <div style={styles.benefitBox}>
        <Star color="#39ff14" size={35} />
        <div>
          <h2>Why Upgrade?</h2>
          <p style={{ color: "#aaa" }}>
            Unlock 90% premium sports training and elite coaching.
          </p>
        </div>
      </div>

      {/* POPUP MODAL (BUY CONFIRMATION) */}
      {showPopup && selectedCourse && (
        <div style={styles.popupOverlay}>
          <div style={styles.popup}>
            <div style={styles.popupTop}>
              <h2>Unlock Premium 🚀</h2>
              <X size={28} style={{ cursor: "pointer", color: "white" }} onClick={() => setShowPopup(false)} />
            </div>
            <p style={{ color: "white", marginBottom: "15px" }}>
              Course: <strong>{selectedCourse.title}</strong>
            </p>
            <p style={{ color: "#aaa" }}>
              Access elite sports training and premium athlete content securely.
            </p>
            <button style={styles.popupBtn} onClick={confirmPurchase}>
              Buy Now — ₹{selectedCourse.price}
            </button>
          </div>
        </div>
      )}

      {/* SUCCESS MODAL */}
      {success && (
        <div style={styles.successOverlay}>
          <div style={styles.successBox}>
            <h1 style={styles.successEmoji}>🎉</h1>
            <h2 style={{ color: "white", marginBottom: "10px" }}>Membership Activated!</h2>
            <p style={{ color: "#aaa" }}>Premium features unlocked 🚀</p>
            <button style={styles.doneBtn} onClick={() => setSuccess(false)}>
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// FULL STYLES OBJECT (No truncation)
const styles = {
  page: {
    background: "#020817",
    minHeight: "100vh",
    color: "white",
    padding: "20px",
    fontFamily: "sans-serif"
  },
  heading: {
    fontSize: "40px",
    marginBottom: "30px"
  },
  membershipBox: {
    display: "grid",
    gap: "20px",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))"
  },
  planCard: {
    background: "#081120",
    borderRadius: "30px",
    padding: "25px",
    border: "1px solid #1d2b44"
  },
  planCardPremium: {
    background: "linear-gradient(135deg,#2b1800,#3d2600)",
    borderRadius: "30px",
    padding: "25px",
    border: "1px solid #ffd700"
  },
  planCardElite: {
    background: "linear-gradient(135deg,#2b0018,#3d0025)",
    borderRadius: "30px",
    padding: "25px",
    border: "1px solid #ff4d88"
  },
  freeBtn: {
    marginTop: "20px",
    width: "100%",
    padding: "15px",
    borderRadius: "15px",
    border: "none",
    background: "#39ff14",
    fontWeight: "bold",
    color: "black",
    cursor: "pointer"
  },
  premiumBtn: {
    marginTop: "20px",
    width: "100%",
    padding: "15px",
    borderRadius: "15px",
    border: "none",
    background: "#ffd700",
    fontWeight: "bold",
    color: "black",
    cursor: "pointer"
  },
  eliteBtn: {
    marginTop: "20px",
    width: "100%",
    padding: "15px",
    borderRadius: "15px",
    border: "none",
    background: "#ff4d88",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer"
  },
  sectionTitle: {
    marginTop: "40px",
    marginBottom: "20px"
  },
  filterContainer: {
    display: "flex",
    gap: "10px",
    marginBottom: "25px",
    flexWrap: "wrap"
  },
  filterBtn: {
    padding: "10px 20px",
    borderRadius: "12px",
    border: "1px solid #1d2b44",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s"
  },
  courseCard: {
    background: "#081120",
    borderRadius: "30px",
    overflow: "hidden",
    marginBottom: "25px",
    border: "1px solid #1d2b44"
  },
  courseImage: {
    width: "100%",
    height: "220px",
    objectFit: "cover"
  },
  courseContent: {
    padding: "20px"
  },
  levelRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  levelBox: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    marginTop: "10px"
  },
  level: {
    background: "#111827",
    padding: "6px 12px",
    borderRadius: "10px",
    fontSize: "12px"
  },
  premiumBadge: {
    background: "#ffd700",
    color: "black",
    padding: "5px 10px",
    borderRadius: "10px",
    fontSize: "12px",
    fontWeight: "bold"
  },
  dpBadge: {
    background: "#ff4d88",
    color: "white",
    padding: "5px 10px",
    borderRadius: "10px",
    fontSize: "12px",
    fontWeight: "bold"
  },
  badgeRow: {
    display: "flex",
    gap: "10px",
    marginTop: "12px",
    flexWrap: "wrap"
  },
  verifyBadge: {
    background: "#3ea6ff",
    padding: "6px 12px",
    borderRadius: "12px",
    fontSize: "12px",
    fontWeight: "bold",
    color: "black"
  },
  xpBadge: {
    background: "#102400",
    color: "#39ff14",
    padding: "6px 12px",
    borderRadius: "12px",
    fontSize: "12px",
    fontWeight: "bold"
  },
  infoRow: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "15px",
    color: "#aaa",
    fontSize: "14px"
  },
  rating: {
    marginTop: "10px",
    color: "#ffd700",
    fontWeight: "bold"
  },
  progressBox: {
    marginTop: "20px"
  },
  progressTop: {
    display: "flex",
    justifyContent: "space-between",
    color: "#aaa",
    marginBottom: "10px",
    fontSize: "14px"
  },
  progressBar: {
    width: "100%",
    height: "10px",
    background: "#1d2b44",
    borderRadius: "20px",
    overflow: "hidden"
  },
  progressFill: {
    height: "100%",
    background: "#39ff14",
    borderRadius: "20px"
  },
  price: {
    marginTop: "20px",
    fontSize: "28px",
    color: "#39ff14"
  },
  reviewBox: {
    marginTop: "20px",
    background: "#111827",
    padding: "15px",
    borderRadius: "18px",
    border: "1px solid #1d2b44"
  },
  reviewText: {
    color: "#ddd",
    lineHeight: "1.6",
    fontStyle: "italic"
  },
  studentName: {
    marginTop: "10px",
    color: "#39ff14",
    fontWeight: "bold"
  },
  previewBtn: {
    marginTop: "20px",
    width: "100%",
    padding: "14px",
    borderRadius: "14px",
    border: "1px solid #39ff14",
    background: "transparent",
    color: "#39ff14",
    fontWeight: "bold",
    cursor: "pointer"
  },
  watchBtn: {
    marginTop: "20px",
    width: "100%",
    background: "#39ff14",
    border: "none",
    padding: "15px",
    borderRadius: "15px",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    cursor: "pointer",
    color: "black"
  },
  continueBtn: {
    marginTop: "15px",
    width: "100%",
    padding: "15px",
    borderRadius: "15px",
    border: "none",
    background: "#3ea6ff",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer"
  },
  certificateBtn: {
    marginTop: "15px",
    width: "100%",
    padding: "15px",
    borderRadius: "15px",
    border: "1px solid #ffd700",
    background: "transparent",
    color: "#ffd700",
    fontWeight: "bold",
    cursor: "pointer"
  },
  liveClassBox: {
    marginTop: "20px",
    background: "#111827",
    borderRadius: "18px",
    padding: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid #1d2b44"
  },
  liveText: {
    color: "#ff4d88",
    fontWeight: "bold"
  },
  joinBtn: {
    background: "#ff4d88",
    border: "none",
    padding: "10px 18px",
    borderRadius: "12px",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer"
  },
  achievementBox: {
    marginTop: "20px",
    background: "linear-gradient(135deg,#2b1800,#3d2600)",
    borderRadius: "20px",
    padding: "18px",
    border: "1px solid #ffd700"
  },
  achievementTitle: {
    color: "#ffd700",
    marginBottom: "8px"
  },
  achievementText: {
    color: "white",
    fontWeight: "bold"
  },
  downloadBox: {
    marginTop: "20px",
    background: "#111827",
    borderRadius: "18px",
    padding: "18px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid #1d2b44"
  },
  downloadBtn: {
    background: "#3ea6ff",
    border: "none",
    padding: "10px 18px",
    borderRadius: "12px",
    color: "black",
    fontWeight: "bold",
    cursor: "pointer"
  },
  quizBox: {
    marginTop: "20px",
    background: "linear-gradient(135deg,#081120,#102400)",
    borderRadius: "18px",
    padding: "18px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid #39ff14"
  },
  quizBtn: {
    background: "#39ff14",
    border: "none",
    padding: "10px 18px",
    borderRadius: "12px",
    color: "black",
    fontWeight: "bold",
    cursor: "pointer"
  },
  rankBox: {
    marginTop: "20px",
  
