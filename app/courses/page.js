"use client";

import {
  Crown,
  Lock,
  PlayCircle,
  Flame,
  Star
} from "lucide-react";

export default function CoursesPage() {

  const courses = [

    {
      title: "Cricket Masterclass",
      coach: "Virat Coach",
      level: "FREE",
      image:
        "https://images.unsplash.com/photo-1547347298-4074fc3086f0"
    },

    {
      title: "Football Speed Training",
      coach: "Elite Trainer",
      level: "PREMIUM",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
    },

    {
      title: "MMA Fighter Program",
      coach: "Combat Coach",
      level: "ELITE",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a"
    }

  ];

  return (

    <div style={styles.page}>

      <h1 style={styles.heading}>
        Sports Courses 🎓
      </h1>

      {/* MEMBERSHIP */}

      <div style={styles.membershipBox}>

        <div style={styles.planCard}>

          <h2>🟢 NORMAL</h2>

          <h1>FREE</h1>

          <p>
            Basic workouts
          </p>

          <p>
            Community access
          </p>

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

          <p>
            AI Plans
          </p>

          <p>
            1 to 1 Chat
          </p>

          <p>
            Premium Courses
          </p>

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

          <p>
            Video Calls
          </p>

          <p>
            Live Doubts
          </p>

          <p>
            Personal Trainer
          </p>

          <button style={styles.eliteBtn}>
            Go Elite
          </button>

        </div>

      </div>

      {/* COURSES */}

      <h2 style={styles.sectionTitle}>
        Top Courses 🔥
      </h2>

      {courses.map((item, index) => (

        <div
          key={index}
          style={styles.courseCard}
        >

          <img
            src={item.image}
            style={styles.courseImage}
          />

          <div style={styles.courseContent}>

            <div style={styles.levelRow}>

              <span style={styles.level}>
                {item.level}
              </span>

              {item.level !== "FREE" && (
                <Lock
                  color="#ffd700"
                  size={20}
                />
              )}

            </div>

            <h2>
              {item.title}
            </h2>

            <p style={{ color: "#aaa" }}>
              By {item.coach}
            </p>

            <button style={styles.watchBtn}>

              <PlayCircle size={22} />

              Watch Course

            </button>

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
    border: "1px solid #1d2b44"
  },

  planCardPremium: {
    background:
      "linear-gradient(135deg,#2b1800,#3d2600)",
    borderRadius: 30,
    padding: 25,
    border: "1px solid #ffd700"
  },

  planCardElite: {
    background:
      "linear-gradient(135deg,#2b0018,#3d0025)",
    borderRadius: 30,
    padding: 25,
    border: "1px solid #ff4d88"
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
    border: "1px solid #1d2b44"
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

  level: {
    background: "#111827",
    padding: "6px 12px",
    borderRadius: 10,
    fontSize: 12
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

  benefitBox: {
    marginTop: 40,
    background: "#081120",
    padding: 25,
    borderRadius: 25,
    display: "flex",
    gap: 20,
    alignItems: "center"
  }

};
