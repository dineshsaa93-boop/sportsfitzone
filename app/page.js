"use client";

import Link from "next/link";
import {
  Home,
  Dumbbell,
  Bot,
  ShoppingBag,
  User,
  Bell,
  Menu,
  Trophy,
  Flame,
  Brain,
  Play,
  Apple,
  Medal,
  Users,
  ChevronRight
} from "lucide-react";

export default function HomePage() {
  return (
    <div style={styles.page}>

      {/* TOP BAR */}
      <div style={styles.topBar}>
        <Menu color="white" size={32} />

        <div style={styles.topRight}>
          <Bell color="white" size={24} />

          <img
            src="https://i.imgur.com/8Km9tLL.png"
            alt="profile"
            style={styles.profile}
          />
        </div>
      </div>


      {/* HERO */}
      <div style={styles.hero}>
        <p style={styles.goodText}>Good to see you,</p>

        <h1 style={styles.name}>Dinesh 👋</h1>

        <p style={styles.focusText}>
          Focus today. <span style={{ color: "#39ff14" }}>Conquer</span> tomorrow.
        </p>
      </div>


      {/* STREAK CARD */}
      <div style={styles.streakCard}>
        <div style={styles.streakIcon}>🔥</div>

        <div>
          <h2 style={styles.streakNumber}>7</h2>
          <p style={styles.streakLabel}>DAY STREAK</p>
          <p style={styles.streakSub}>Keep it up!</p>
        </div>
      </div>


      {/* XP CARD */}
      <div style={styles.xpCard}>
        <div style={styles.xpLeft}>
          <div style={styles.xpHex}>XP</div>

          <div style={{ flex: 1 }}>
            <p style={styles.xpTitle}>XP PROGRESS</p>

            <h2 style={styles.xpValue}>540 /1000 XP</h2>

            <div style={styles.progressBg}>
              <div style={styles.progressFill}></div>
            </div>
          </div>
        </div>

        <div>
          <p style={styles.levelText}>LEVEL</p>
          <h2 style={styles.levelValue}>5</h2>
        </div>
      </div>


      {/* STATS */}
      <div style={styles.statsGrid}>

        <div style={styles.statCardOrange}>
          <div style={styles.glowOrange}>🔥</div>
          <h2 style={styles.statNumber}>1240</h2>
          <p style={styles.statLabel}>CALORIES</p>
        </div>


        <div style={styles.statCardGreen}>
          <div style={styles.glowGreen}>💪</div>
          <h2 style={styles.statNumber}>18</h2>
          <p style={styles.statLabel}>WORKOUTS</p>
        </div>


        <div style={styles.statCardPurple}>
          <div style={styles.glowPurple}>⚡</div>
          <h2 style={styles.statNumber}>540</h2>
          <p style={styles.statLabel}>XP POINTS</p>
        </div>


        <div style={styles.statCardBlue}>
          <div style={styles.glowBlue}>🏆</div>
          <h2 style={styles.statNumber}>7</h2>
          <p style={styles.statLabel}>DAY STREAK</p>
        </div>
      </div>


      {/* PREMIUM */}
      <div style={styles.premiumCard}>
        <div>
          <h2 style={styles.premiumTitle}>Go Premium</h2>

          <p style={styles.premiumText}>
            Unlock all features and achieve your best.
          </p>
        </div>

        <button style={styles.upgradeBtn}>
          Upgrade Now
        </button>
      </div>


      {/* WORKOUT CARD */}
      <div style={styles.workoutCard}>

        <img
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop"
          alt="workout"
          style={styles.workoutImage}
        />

        <div style={{ flex: 1 }}>
          <p style={styles.continueText}>CONTINUE WORKOUT</p>

          <h2 style={styles.workoutTitle}>
            Full Body Strength Workout
          </h2>

          <p style={styles.workoutSub}>
            Build Power & Endurance
          </p>

          <p style={styles.completeText}>68% Completed</p>

          <div style={styles.progressBg}>
            <div
              style={{
                ...styles.progressFill,
                width: "68%"
              }}
            ></div>
          </div>
        </div>
      </div>


      {/* FEATURES */}
      <div style={styles.featureGrid}>

        <div style={styles.featureCard}>
          <Bot color="#39ff14" size={32} />
          <p style={styles.featureText}>AI Coach</p>
        </div>


        <div style={styles.featureCard}>
          <Apple color="#ff7a00" size={32} />
          <p style={styles.featureText}>Diet Planner</p>
        </div>


        <div style={styles.featureCard}>
          <Brain color="#00bfff" size={32} />
          <p style={styles.featureText}>Progress</p>
        </div>


        <div style={styles.featureCard}>
          <Medal color="#ffd700" size={32} />
          <p style={styles.featureText}>Challenges</p>
        </div>


        <div style={styles.featureCard}>
          <Users color="#cc66ff" size={32} />
          <p style={styles.featureText}>Community</p>
        </div>
      </div>


      {/* UPCOMING */}
      <div style={styles.upcomingHeader}>
        <h2 style={styles.upcomingTitle}>Upcoming Sessions</h2>

        <p style={styles.viewAll}>View All</p>
      </div>


      {/* SESSION CARD */}
      <div style={styles.sessionCard}>

        <img
          src="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200&auto=format&fit=crop"
          alt="session"
          style={styles.sessionImage}
        />


        <div style={{ flex: 1 }}>
          <div style={styles.sessionTop}>
            <p style={styles.sessionTime}>Today, 03:00 PM</p>

            <div style={styles.liveBadge}>LIVE</div>
          </div>

          <h2 style={styles.sessionTitle}>
            Cricket Batting Masterclass
          </h2>

          <p style={styles.sessionCoach}>By Rahul Dravid</p>
        </div>

        <ChevronRight color="white" />
      </div>


      {/* BOTTOM NAV */}
      <div style={styles.bottomNav}>

        <div style={styles.navItemActive}>
          <Home color="#39ff14" />
          <span style={{ color: "#39ff14" }}>Home</span>
        </div>


        <div style={styles.navItem}>
          <Dumbbell color="white" />
          <span>Training</span>
        </div>


        <div style={styles.plusBtn}>+</div>


        <div style={styles.navItem}>
          <ShoppingBag color="white" />
          <span>Store</span>
        </div>


        <div style={styles.navItem}>
          <User color="white" />
          <span>Profile</span>
        </div>
      </div>

    </div>
  );
}


const styles = {
  page: {
    background: "#020817",
    minHeight: "100vh",
    padding: "25px",
    paddingBottom: "140px",
    fontFamily: "sans-serif"
  },

  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  topRight: {
    display: "flex",
    alignItems: "center",
    gap: "18px"
  },

  profile: {
    width: "58px",
    height: "58px",
    borderRadius: "50%",
    border: "2px solid #39ff14",
    objectFit: "cover"
  },

  hero: {
    marginTop: "35px"
  },

  goodText: {
    color: "#aaa",
    fontSize: "18px"
  },

  name: {
    color: "white",
    fontSize: "58px",
    fontWeight: "bold",
    marginTop: "8px",
    marginBottom: "8px"
  },

  focusText: {
    color: "#bbb",
    fontSize: "20px"
  },

  streakCard: {
    marginTop: "30px",
    background: "rgba(15,23,42,0.8)",
    border: "1px solid #1d2b44",
    borderRadius: "30px",
    padding: "22px",
    display: "flex",
    alignItems: "center",
    gap: "18px",
    backdropFilter: "blur(14px)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.35)"
  },

  streakIcon: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "35px",
    background: "rgba(57,255,20,0.12)",
    boxShadow: "0 0 25px #39ff14"
  },

  streakNumber: {
    color: "white",
    fontSize: "42px",
    margin: 0
  },

  streakLabel: {
    color: "#39ff14",
    margin: 0,
    fontWeight: "bold"
  },

  streakSub: {
    color: "#aaa",
    marginTop: "6px"
  },

  xpCard: {
    marginTop: "28px",
    background: "linear-gradient(135deg,#081120,#0d1b2f)",
    borderRadius: "30px",
    padding: "24px",
    border: "1px solid #1d2b44",
    display: "flex",
    justifyContent: "space-between",
    gap: "20px"
  },

  xpLeft: {
    display: "flex",
    gap: "18px",
    flex: 1
  },

  xpHex: {
    width: "75px",
    height: "75px",
    border: "3px solid #39ff14",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    borderRadius: "20px",
    fontSize: "24px"
  },

  xpTitle: {
    color: "#aaa",
    marginBottom: "8px"
  },

  xpValue: {
    color: "#39ff14",
    marginBottom: "14px"
  },

  progressBg: {
    width: "100%",
    height: "12px",
    background: "#222",
    borderRadius: "20px",
    overflow: "hidden"
  },

  progressFill: {
    width: "54%",
    height: "100%",
    background: "#39ff14",
    borderRadius: "20px",
    boxShadow: "0 0 20px #39ff14"
  },

  levelText: {
    color: "#aaa"
  },

  levelValue: {
    color: "#39ff14",
    fontSize: "48px"
  },

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    gap: "18px",
    marginTop: "28px"
  },

  statCardOrange: {
    background: "#081120",
    border: "1px solid #3d2a15",
    borderRadius: "28px",
    padding: "22px"
  },

  statCardGreen: {
    background: "#081120",
    border: "1px solid #12351f",
    borderRadius: "28px",
    padding: "22px"
  },

  statCardPurple: {
    background: "#081120",
    border: "1px solid #31153d",
    borderRadius: "28px",
    padding: "22px"
  },

  statCardBlue: {
    background: "#081120",
    border: "1px solid #102d4f",
    borderRadius: "28px",
    padding: "22px"
  },

  glowOrange: {
    fontSize: "32px",
    marginBottom: "18px"
  },

  glowGreen: {
    fontSize: "32px",
    marginBottom: "18px"
  },

  glowPurple: {
    fontSize: "32px",
    marginBottom: "18px"
  },

  glowBlue: {
    fontSize: "32px",
    marginBottom: "18px"
  },

  statNumber: {
    color: "white",
    fontSize: "44px",
    marginBottom: "10px"
  },

  statLabel: {
    color: "#bbb",
    fontSize: "18px"
  },

  premiumCard: {
    marginTop: "28px",
    background: "linear-gradient(135deg,#081120,#10260a)",
    borderRadius: "30px",
    padding: "24px",
    border: "1px solid #234d17",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "18px"
  },

  premiumTitle: {
    color: "white",
    fontSize: "32px"
  },

  premiumText: {
    color: "#bbb",
    marginTop: "8px"
  },

  upgradeBtn: {
    background: "#39ff14",
    color: "black",
    border: "none",
    padding: "16px 28px",
    borderRadius: "18px",
    fontWeight: "bold",
    fontSize: "18px",
    boxShadow: "0 0 20px #39ff14"
  },

  workoutCard: {
    marginTop: "28px",
    background: "#081120",
    border: "1px solid #1d2b44",
    borderRadius: "30px",
    padding: "18px",
    display: "flex",
    gap: "18px"
  },

  workoutImage: {
    width: "140px",
    height: "140px",
    objectFit: "cover",
    borderRadius: "20px"
  },

  continueText: {
    color: "#39ff14",
    fontWeight: "bold"
  },

  workoutTitle: {
    color: "white",
    fontSize: "34px",
    marginTop: "10px"
  },

  workoutSub: {
    color: "#bbb",
    marginTop: "8px"
  },

  completeText: {
    color: "#39ff14",
    marginTop: "14px",
    marginBottom: "10px"
  },

  featureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: "16px",
    marginTop: "28px"
  },

  featureCard: {
    background: "#081120",
    border: "1px solid #1d2b44",
    borderRadius: "24px",
    padding: "22px",
    textAlign: "center"
  },

  featureText: {
    color: "white",
    marginTop: "12px"
  },

  upcomingHeader: {
    marginTop: "35px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  upcomingTitle: {
    color: "white",
    fontSize: "34px"
  },

  viewAll: {
    color: "#39ff14",
    fontSize: "20px"
  },

  sessionCard: {
    marginTop: "20px",
    background: "#081120",
    borderRadius: "28px",
    padding: "18px",
    border: "1px solid #1d2b44",
    display: "flex",
    gap: "16px",
    alignItems: "center"
  },

  sessionImage: {
    width: "120px",
    height: "150px",
    objectFit: "cover",
    borderRadius: "20px"
  },

  sessionTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  sessionTime: {
    color: "#39ff14"
  },

  liveBadge: {
    background: "red",
    color: "white",
    padding: "6px 14px",
    borderRadius: "14px",
    fontSize: "14px"
  },

  sessionTitle: {
    color: "white",
    fontSize: "30px",
    marginTop: "14px"
  },

  sessionCoach: {
    color: "#aaa",
    marginTop: "8px"
  },

  bottomNav: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    background: "#081120",
    borderTop: "1px solid #1d2b44",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "18px 10px",
    zIndex: 999
  },

  navItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "6px",
    color: "white",
    textDecoration: "none"
  },

  navItemActive: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "6px",
    textDecoration: "none"
  },

  plusBtn: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    background: "#39ff14",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    fontSize: "42px",
    fontWeight: "bold",
    boxShadow: "0 0 25px #39ff14"
  }
};
