"use client";

import { useState } from "react";

import {
  Crown,
  Lock,
  PlayCircle,
  Flame,
  Star,
  X
} from "lucide-react";

export default function CoursesPage() {

  const [showPopup, setShowPopup] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  const courses = [

    {
      title: "Cricket Masterclass",
      coach: "Virat Coach",
      badge: "Verified Athlete",
      xp: "12,500 XP",
      review:
        "Best sports training course ever 🔥",
      student: "Aryan",
      live: "Today 7:00 PM",
      achievement:
        "🏆 Elite Athlete Badge Unlocked",
      downloads: "12 Resources",
      quiz: "25 Questions Quiz",
      rank: "#1 Athlete",
      points: "+500 XP",
      price: "₹499",
      level: "Normal",
      duration: "12 Hours",
      lessons: "48 Lessons",
      rating: "4.9 ⭐",
      progress: "65%",
      completed: "32/48 Lessons",
      image:
        "https://images.unsplash.com/photo-1546519638-68e109498ffc"
    },

    {
      title:
        "Football Speed Training",
      coach:
        "Ronaldo Coach",
      badge:
        "Verified Athlete",
      xp:
        "18,400 XP",
      review:
        "Amazing speed drills and athlete mindset 💪",
      student:
        "Dinesh",
      live:
        "Tomorrow 6:30 PM",
      achievement:
        "🏆 Speed Beast Badge Unlocked",
      downloads:
        "18 Resources",
      quiz:
        "40 Questions Quiz",
      rank:
        "#2 Athlete",
      points:
        "+900 XP",
      price:
        "₹999",
      level:
        "Premium",
      duration:
        "20 Hours",
      lessons:
        "72 Lessons",
      rating:
        "4.8 ⭐",
      progress:
        "82%",
      completed:
        "59/72 Lessons",
      image:
        "https://images.unsplash.com/photo-1517466787929-bc90951d0974"
    },

    {
      title:
        "Gym Beast Program",
      coach:
        "Fitness Pro",
      badge:
        "Verified Athlete",
      xp:
        "30,000 XP",
      review:
        "Best muscle building course on earth 🔥",
      student:
        "Pragati",
      live:
        "Today 9:00 PM",
      achievement:
        "🏆 Elite Athlete Badge Unlocked",
      downloads:
        "35 Resources",
      quiz:
        "75 Questions Quiz",
      rank:
        "#1 Elite Athlete",
      points:
        "+1500 XP",
      price:
        "₹1999",
      level:
        "Premium DP",
      duration:
        "35 Hours",
      lessons:
        "120 Lessons",
      rating:
        "5.0 ⭐",
      progress:
        "91%",
      completed:
        "109/120 Lessons",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
    }

  ];

  return (

    <div style={styles.page}>

      <h1 style={styles.heading}>
        🎓 Sports Courses
      </h1>

      {/* MEMBERSHIP */}

      <div style={styles.membershipBox}>

        <div style={styles.planCard}>

          <h2>🟢 NORMAL</h2>

          <h1>FREE</h1>

          <p>Basic workouts</p>

          <p>Community access</p>

          <button style={styles.freeBtn}>
            Current Plan
          </button>

        </div>

        <div style={styles.planCardPremium}>

          <Crown
            color="#ffd700"
            size={40}
          />

          <h2>PREMIUM</h2>

          <h1>₹199/mo</h1>

          <p>AI Plans</p>

          <p>1 to 1 Chat</p>

          <p>Premium Courses</p>

          <button style={styles.premiumBtn}>
            Upgrade
          </button>

        </div>

        <div style={styles.planCardElite}>

          <Flame
            color="#ff4d88"
            size={40}
          />

          <h2>ELITE DP</h2>

          <h1>₹999/mo</h1>

          <p>Video Calls</p>

          <p>Live Doubts</p>

          <p>Personal Trainer</p>

          <button style={styles.eliteBtn}>
            Go Elite
          </button>

        </div>

      </div>

      {/* COURSES */}

      <h2 style={styles.sectionTitle}>
        Top Courses 🔥
      </h2>

      {courses.map((course, index) => (

        <div
          key={index}
          style={styles.courseCard}
        >

          <img
            src={course.image}
            alt="course"
            style={styles.courseImage}
          />

          <div style={styles.courseContent}>

            <div style={styles.levelRow}>

              <div style={styles.levelBox}>

                <p style={styles.level}>
                  {course.level}
                </p>

                {course.level ===
                  "Premium" && (

                  <span
                    style={
                      styles.premiumBadge
                    }
                  >
                    ⭐ PREMIUM
                  </span>

                )}

                {course.level ===
                  "Premium DP" && (

                  <span
                    style={styles.dpBadge}
                  >
                    👑 PREMIUM DP
                  </span>

                )}

              </div>

              {course.level !==
                "Normal" && (

                <Lock
                  color="#ffd700"
                  size={20}
                />

              )}

            </div>

            <h2>
              {course.title}
            </h2>

            <p style={{ color: "#aaa" }}>
              By {course.coach}
            </p>

            <div style={styles.badgeRow}>

              <span
                style={
                  styles.verifyBadge
                }
              >
                ✔ {course.badge}
              </span>

              <span
                style={styles.xpBadge}
              >
                🔥 {course.xp}
              </span>

            </div>

            <div style={styles.infoRow}>

              <p>
                ⏱ {course.duration}
              </p>

              <p>
                🎥 {course.lessons}
              </p>

            </div>

            <p style={styles.rating}>
              {course.rating}
            </p>

            {/* PROGRESS */}

            <div style={styles.progressBox}>

              <div style={styles.progressTop}>

                <p>
                  {course.completed}
                </p>

                <p>
                  {course.progress}
                </p>

              </div>

              <div style={styles.progressBar}>

                <div
                  style={{
                    ...styles.progressFill,
                    width:
                      course.progress
                  }}
                />

              </div>

            </div>

            <h3 style={styles.price}>
              {course.price}
            </h3>

            {/* REVIEW */}

            <div style={styles.reviewBox}>

              <p
                style={
                  styles.reviewText
                }
              >
                "{course.review}"
              </p>

              <p
                style={
                  styles.studentName
                }
              >
                — {course.student}
              </p>

            </div>

            {/* BUTTONS */}

            <button
              style={styles.previewBtn}
            >
              ▶ Preview Course
            </button>

            <button
              style={styles.watchBtn}
              onClick={() =>
                setShowPopup(true)
              }
            >

              <PlayCircle size={22} />

              Buy Course

            </button>

            <button
              style={
                styles.continueBtn
              }
            >
              Continue Learning
            </button>

            <button
              style={
                styles.certificateBtn
              }
            >
              🏅 View Certificate
            </button>

            {/* LIVE CLASS */}

            <div
              style={
                styles.liveClassBox
              }
            >

              <div>

                <p
                  style={
                    styles.liveText
                  }
                >
                  🔴 LIVE CLASS
                </p>

                <p
                  style={{
                    color: "#aaa"
                  }}
                >
                  {course.live}
                </p>

              </div>

              <button
                style={styles.joinBtn}
              >
                Join
              </button>

            </div>

            {/* ACHIEVEMENT */}

            <div
              style={
                styles.achievementBox
              }
            >

              <h3
                style={
                  styles.achievementTitle
                }
              >
                Achievement
              </h3>

              <p
                style={
                  styles.achievementText
                }
              >
                {course.achievement}
              </p>

            </div>

            {/* DOWNLOAD */}

            <div
              style={
                styles.downloadBox
              }
            >

              <div>

                <h3>
                  📥 Course Resources
                </h3>

                <p
                  style={{
                    color: "#aaa"
                  }}
                >
                  {course.downloads}
                </p>

              </div>

              <button
                style={
                  styles.downloadBtn
                }
              >
                Download
              </button>

            </div>

            {/* QUIZ */}

            <div style={styles.quizBox}>

              <div>

                <h3>
                  🧠 Athlete Quiz
                </h3>

                <p
                  style={{
                    color: "#aaa"
                  }}
                >
                  {course.quiz}
                </p>

              </div>

              <button
                style={styles.quizBtn}
              >
                Start Quiz
              </button>

            </div>

            {/* RANK */}

            <div style={styles.rankBox}>

              <div>

                <h3>
                  🏆 Athlete Rank
                </h3>

                <p
                  style={{
                    color: "#aaa"
                  }}
                >
                  {course.rank}
                </p>

              </div>

              <div style={styles.xpBox}>
                {course.points}
              </div>

            </div>

          </div>

        </div>

      ))}

      {/* BENEFITS */}

      <div style={styles.benefitBox}>

        <Star
          color="#39ff14"
          size={35}
        />

        <div>

          <h2>
            Why Upgrade?
          </h2>

          <p style={{ color: "#aaa" }}>
            Unlock 90% premium sports
            training and elite coaching.
          </p>

        </div>

      </div>

      {/* POPUP */}

      {showPopup && (

        <div
          style={styles.popupOverlay}
        >

          <div style={styles.popup}>

            <div
              style={styles.popupTop}
            >

              <h2>
                Unlock Premium 🚀
              </h2>

              <X
                size={28}
                onClick={() =>
                  setShowPopup(false)
                }
              />

            </div>

            <p style={{ color: "#aaa" }}>
              Access elite sports
              training and premium
              athlete content.
            </p>

            <button
              style={styles.popupBtn}
              onClick={() => {
                setShowPopup(false);
                setSuccess(true);
              }}
            >
              Buy Premium — ₹199
            </button>

            <button
              style={
                styles.popupBtnElite
              }
              onClick={() => {
                setShowPopup(false);
                setSuccess(true);
              }}
            >
              Buy Elite DP — ₹999
            </button>

          </div>

        </div>

      )}

      {/* SUCCESS */}

      {success && (

        <div
          style={
            styles.successOverlay
          }
        >

          <div style={styles.successBox}>

            <h1
              style={
                styles.successEmoji
              }
            >
              🎉
            </h1>

            <h2>
              Membership Activated!
            </h2>

            <p style={{ color: "#aaa" }}>
              Premium features unlocked 🚀
            </p>

            <button
              style={styles.doneBtn}
              onClick={() =>
                setSuccess(false)
              }
            >
              Continue
            </button>

          </div>

        </div>

      )}

    </div>

  );

}

const styles = {

  page: {
    background: "#020817",
    minHeight: "100vh",
    color: "white",
    padding: 20,
    fontFamily: "sans-serif"
  },

  heading: {
    fontSize: 40,
    marginBottom: 30
  },

  membershipBox: {
    display: "grid",
    gap: 20
  },

  planCard: {
    background: "#081120",
    borderRadius: 30,
    padding: 25,
    border:
      "1px solid #1d2b44"
  },

  planCardPremium: {
    background:
      "linear-gradient(135deg,#2b1800,#3d2600)",
    borderRadius: 30,
    padding: 25,
    border:
      "1px solid #ffd700"
  },

  planCardElite: {
    background:
      "linear-gradient(135deg,#2b0018,#3d0025)",
    borderRadius: 30,
    padding: 25,
    border:
      "1px solid #ff4d88"
  },

  freeBtn: {
    marginTop: 20,
    width: "100%",
    padding: 15,
    borderRadius: 15,
    border: "none",
    background: "#39ff14",
    fontWeight: "bold"
  },

  premiumBtn: {
    marginTop: 20,
    width: "100%",
    padding: 15,
    borderRadius: 15,
    border: "none",
    background: "#ffd700",
    fontWeight: "bold"
  },

  eliteBtn: {
    marginTop: 20,
    width: "100%",
    padding: 15,
    borderRadius: 15,
    border: "none",
    background: "#ff4d88",
    color: "white",
    fontWeight: "bold"
  },

  sectionTitle: {
    marginTop: 40,
    marginBottom: 20
  },

  courseCard: {
    background: "#081120",
    borderRadius: 30,
    overflow: "hidden",
    marginBottom: 25,
    border:
      "1px solid #1d2b44"
  },

  courseImage: {
    width: "100%",
    height: 220,
    objectFit: "cover"
  },

  courseContent: {
    padding: 20
  },

  levelRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  levelBox: {
    display: "flex",
    gap: 10,
    alignItems: "center",
    marginTop: 10
  },

  level: {
    background: "#111827",
    padding: "6px 12px",
    borderRadius: 10,
    fontSize: 12
  },

  premiumBadge: {
    background: "#ffd700",
    color: "black",
    padding: "5px 10px",
    borderRadius: 10,
    fontSize: 12,
    fontWeight: "bold"
  },

  dpBadge: {
    background: "#ff4d88",
    color: "white",
    padding: "5px 10px",
    borderRadius: 10,
    fontSize: 12,
    fontWeight: "bold"
  },

  badgeRow: {
    display: "flex",
    gap: 10,
    marginTop: 12,
    flexWrap: "wrap"
  },

  verifyBadge: {
    background: "#3ea6ff",
    padding: "6px 12px",
    borderRadius: 12,
    fontSize: 12,
    fontWeight: "bold"
  },

  xpBadge: {
    background: "#102400",
    color: "#39ff14",
    padding: "6px 12px",
    borderRadius: 12,
    fontSize: 12,
    fontWeight: "bold"
  },

  infoRow: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 15,
    color: "#aaa",
    fontSize: 14
  },

  rating: {
    marginTop: 10,
    color: "#ffd700",
    fontWeight: "bold"
  },

  progressBox: {
    marginTop: 20
  },

  progressTop: {
    display: "flex",
    justifyContent: "space-between",
    color: "#aaa",
    marginBottom: 10,
    fontSize: 14
  },

  progressBar: {
    width: "100%",
    height: 10,
    background: "#1d2b44",
    borderRadius: 20,
    overflow: "hidden"
  },

  progressFill: {
    height: "100%",
    background: "#39ff14",
    borderRadius: 20
  },

  price: {
    marginTop: 20,
    fontSize: 28
  },

  reviewBox: {
    marginTop: 20,
    background: "#111827",
    padding: 15,
    borderRadius: 18,
    border:
      "1px solid #1d2b44"
  },

  reviewText: {
    color: "#ddd",
    lineHeight: 1.6,
    fontStyle: "italic"
  },

  studentName: {
    marginTop: 10,
    color: "#39ff14",
    fontWeight: "bold"
  },

  previewBtn: {
    marginTop: 20,
    width: "100%",
    padding: 14,
    borderRadius: 14,
    border:
      "1px solid #39ff14",
    background: "transparent",
    color: "#39ff14",
    fontWeight: "bold"
  },

  watchBtn: {
    marginTop: 20,
    width: "100%",
    background: "#39ff14",
    border: "none",
    padding: 15,
    borderRadius: 15,
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10
  },

  continueBtn: {
    marginTop: 15,
    width: "100%",
    padding: 15,
    borderRadius: 15,
    border: "none",
    background: "#3ea6ff",
    color: "white",
    fontWeight: "bold"
  },

  certificateBtn: {
    marginTop: 15,
    width: "100%",
    padding: 15,
    borderRadius: 15,
    border:
      "1px solid #ffd700",
    background: "transparent",
    color: "#ffd700",
    fontWeight: "bold"
  },

  liveClassBox: {
    marginTop: 20,
    background: "#111827",
    borderRadius: 18,
    padding: 15,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border:
      "1px solid #1d2b44"
  },

  liveText: {
    color: "#ff4d88",
    fontWeight: "bold"
  },

  joinBtn: {
    background: "#ff4d88",
    border: "none",
    padding: "10px 18px",
    borderRadius: 12,
    color: "white",
    fontWeight: "bold"
  },

  achievementBox: {
    marginTop: 20,
    background:
      "linear-gradient(135deg,#2b1800,#3d2600)",
    borderRadius: 20,
    padding: 18,
    border:
      "1px solid #ffd700"
  },

  achievementTitle: {
    color: "#ffd700",
    marginBottom: 8
  },

  achievementText: {
    color: "white",
    fontWeight: "bold"
  },

  downloadBox: {
    marginTop: 20,
    background: "#111827",
    borderRadius: 18,
    padding: 18,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border:
      "1px solid #1d2b44"
  },

  downloadBtn: {
    background: "#3ea6ff",
    border: "none",
    padding: "10px 18px",
    borderRadius: 12,
    color: "white",
    fontWeight: "bold"
  },

  quizBox: {
    marginTop: 20,
    background:
      "linear-gradient(135deg,#081120,#102400)",
    borderRadius: 18,
    padding: 18,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border:
      "1px solid #39ff14"
  },

  quizBtn: {
    background: "#39ff14",
    border: "none",
    padding: "10px 18px",
    borderRadius: 12,
    color: "black",
    fontWeight: "bold"
  },

  rankBox: {
    marginTop: 20,
    background:
      "linear-gradient(135deg,#2b1800,#3d2600)",
    borderRadius: 18,
    padding: 18,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border:
      "1px solid #ffd700"
  },

  xpBox: {
    background: "#ffd700",
    color: "black",
    padding: "10px 18px",
    borderRadius: 12,
    fontWeight: "bold"
  },

  benefitBox: {
    marginTop: 40,
    background:
      "linear-gradient(135deg,#081120,#102400)",
    borderRadius: 24,
    padding: 20,
    display: "flex",
    gap: 15,
    alignItems: "center",
    border:
      "1px solid #39ff14"
  },

  popupOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "rgba(0,0,0,0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999
  },

  popup: {
    width: "90%",
    backgrou
