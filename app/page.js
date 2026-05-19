"use client";

import { useState } from "react";
import {
  Menu,
  Bell,
  Flame,
  Dumbbell,
  Trophy,
  Zap,
  Bot,
  Apple,
  BarChart3,
  Medal,
  Users,
  Home,
  ShoppingBag,
  User,
  Plus,
  Play,
  ChevronRight,
  ChevronUp,
  ChevronDown
} from "lucide-react";

export default function HomePage() {

  const [showAll, setShowAll] = useState(false);

  const sessions = [
    {
      title: "Cricket Batting Masterclass",
      coach: "Rahul Dravid",
      image:
        "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1200&auto=format&fit=crop",
      viewers: "+2.4K"
    },
    {
      title: "Football Speed & Agility",
      coach: "Indra Sharma",
      image:
        "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop",
      viewers: "+1.8K"
    },
    {
      title: "Strength Training Pro",
      coach: "Virat Coach",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
      viewers: "+3.1K"
    },
    {
      title: "Advanced Yoga Flow",
      coach: "Ananya Singh",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
      viewers: "+1.2K"
    }
  ];

  return (
    <div style={styles.container}>

      {/* TOP BAR */}

      <div style={styles.topBar}>
        <Menu color="white" size={28} />

        <div style={styles.rightTop}>
          <Bell color="white" size={23} />

          <img
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=400&auto=format&fit=crop"
            alt="profile"
            style={styles.profile}
          />
        </div>
      </div>

      {/* HEADER */}

      <div style={styles.header}>
        <div>
          <p style={styles.smallText}>Good to see you,</p>

          <h1 style={styles.name}>Dinesh👋</h1>

          <p style={styles.motivation}>
            Focus today. <span style={{ color: "#7CFF00" }}>Conquer</span> tomorrow.
          </p>
        </div>

        <div style={styles.streakCard}>
          <div style={styles.fireCircle}>
            <Flame color="#7CFF00" size={28} />
          </div>

          <div>
            <h2 style={styles.streakNumber}>7</h2>
            <p style={styles.streakText}>DAY STREAK</p>
            <p style={styles.keep}>Keep it up!</p>
          </div>
        </div>
      </div>

      {/* XP CARD */}

      <div style={styles.xpCard}>

        <div style={styles.xpLeft}>
          <div style={styles.xpLogo}>XP</div>
        </div>

        <div style={{ flex: 1 }}>
          <p style={styles.xpTitle}>XP PROGRESS</p>

          <div style={styles.xpRow}>
            <span style={styles.green}>540</span>
            <span style={styles.white}> /1000 XP</span>
          </div>

          <div style={styles.progressBg}>
            <div style={styles.progressFill}></div>
          </div>
        </div>

        <div style={styles.levelBox}>
          <p style={styles.levelText}>LEVEL</p>
          <h1 style={styles.levelNumber}>5</h1>
        </div>
      </div>

      {/* STATS */}

      <div style={styles.statsGrid}>

        <div style={styles.orangeCard}>
          <Flame color="#ff7a00" size={26} />
          <h1 style={styles.statNumber}>1240</h1>
          <p style={styles.statLabel}>CALORIES</p>
          <p style={styles.statBottom}>↗ 12% vs Yesterday</p>
        </div>

        <div style={styles.greenCard}>
          <Dumbbell color="#39ff14" size={26} />
          <h1 style={styles.statNumber}>18</h1>
          <p style={styles.statLabel}>WORKOUTS</p>
          <p style={styles.statBottom}>↗ 2 this week</p>
        </div>

        <div style={styles.purpleCard}>
          <Zap color="#cc66ff" size={26} />
          <h1 style={styles.statNumber}>540</h1>
          <p style={styles.statLabel}>XP POINTS</p>
          <p style={styles.statBottom}>↗ Keep going!</p>
        </div>

        <div style={styles.blueCard}>
          <Trophy color="#00aaff" size={26} />
          <h1 style={styles.statNumber}>7</h1>
          <p style={styles.statLabel}>DAY STREAK</p>
          <p style={styles.statBottom}>🏆 Best: 12 days</p>
        </div>
      </div>

      {/* PREMIUM */}

      <div style={styles.premiumCard}>

        <div style={styles.premiumLeft}>
          <div style={styles.crownCircle}>👑</div>

          <div>
            <h2 style={styles.premiumTitle}>Go Premium</h2>
            <p style={styles.premiumSub}>
              Unlock all features and achieve your best.
            </p>
          </div>
        </div>

        <button style={styles.upgradeBtn}>
          Upgrade Now
        </button>
      </div>

      {/* WORKOUT */}

      <div style={styles.workoutCard}>

        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop"
          alt="workout"
          style={styles.workoutImage}
        />

        <div style={{ flex: 1 }}>
          <p style={styles.continue}>CONTINUE WORKOUT</p>

          <h1 style={styles.workoutTitle}>
            Full Body <br />
            Strength Workout
          </h1>

          <p style={styles.workoutSub}>Build Power & Endurance</p>

          <p style={styles.completed}>68% Completed</p>

          <div style={styles.progressBg}>
            <div style={styles.workoutFill}></div>
          </div>
        </div>
      </div>

      {/* OPTIONS */}

      <div style={styles.optionGrid}>

        <div style={styles.optionCard}>
          <Bot color="#00ffcc" size={24} />
          <p style={styles.optionText}>AI Coach</p>
        </div>

        <div style={styles.optionCard}>
          <Apple color="#ff6600" size={24} />
          <p style={styles.optionText}>Diet Planner</p>
        </div>

        <div style={styles.optionCard}>
          <BarChart3 color="#0099ff" size={24} />
          <p style={styles.optionText}>Progress</p>
        </div>

        <div style={styles.optionCard}>
          <Medal color="#ffd000" size={24} />
          <p style={styles.optionText}>Challenges</p>
        </div>

        <div style={styles.optionCard}>
          <Users color="#cc33ff" size={24} />
          <p style={styles.optionText}>Community</p>
        </div>
      </div>

      {/* SESSION HEADER */}

      <div style={styles.sessionHeader}>

        <h2 style={styles.sessionTitle}>Upcoming Sessions</h2>

        <button
          onClick={() => setShowAll(!showAll)}
          style={styles.viewBtn}
        >
          {showAll ? "View Less" : "View All"}

          {showAll ? (
            <ChevronUp size={18} />
          ) : (
            <ChevronDown size={18} />
          )}
        </button>
      </div>

      {/* SESSIONS */}

      <div style={styles.sessionsWrap}>

        {(showAll ? sessions : sessions.slice(0, 2)).map((item, index) => (

          <div key={index} style={styles.sessionCard}>

            <img
              src={item.image}
              alt="session"
              style={styles.sessionImage}
            />

            <div style={styles.sessionContent}>

              <div style={styles.liveRow}>
                <span style={styles.live}>LIVE</span>
              </div>

              <h3 style={styles.sessionName}>
                {item.title}
              </h3>

              <p style={styles.coach}>
                By {item.coach}
              </p>

              <div style={styles.viewerBox}>
                {item.viewers}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* BOTTOM NAV */}

      <div style={styles.bottomBar}>

        <div style={styles.navItem}>
          <Home color="#7CFF00" size={24} />
          <p style={styles.activeNav}>Home</p>
        </div>

        <div style={styles.navItem}>
          <Dumbbell color="white" size={24} />
          <p style={styles.navText}>Training</p>
        </div>

        <div style={styles.plusCircle}>
          <Plus color="black" size={34} />
        </div>

        <div style={styles.navItem}>
          <ShoppingBag color="white" size={24} />
          <p style={styles.navText}>Store</p>
        </div>

        <div style={styles.navItem}>
          <User color="white" size={24} />
          <p style={styles.navText}>Profile</p>
        </div>
      </div>

    </div>
  );
}

const styles = {

  container: {
    background: "#020817",
    minHeight: "100vh",
    padding: 20,
    paddingBottom: 120,
    fontFamily: "Arial",
    color: "white"
  },

  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  rightTop: {
    display: "flex",
    alignItems: "center",
    gap: 20
  },

  profile: {
    width: 54,
    height: 54,
    borderRadius: "50%",
    border: "2px solid #7CFF00",
    objectFit: "cover"
  },

  header: {
    marginTop: 30,
    display: "flex",
    justifyContent: "space-between",
    gap: 20
  },

  smallText: {
    color: "#9ca3af",
    fontSize: 20
  },

  name: {
    fontSize: 70,
    marginTop: -10,
    fontWeight: "900"
  },

  motivation: {
    color: "#9ca3af",
    marginTop: -25,
    fontSize: 20
  },

  streakCard: {
    background: "#081226",
    borderRadius: 24,
    padding: 20,
    width: 300,
    display: "flex",
    gap: 16,
    alignItems: "center",
    border: "1px solid rgba(255,255,255,0.06)"
  },

  fireCircle: {
    width: 70,
    height: 70,
    borderRadius: "50%",
    background: "rgba(124,255,0,0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 0 40px rgba(124,255,0,0.4)"
  },

  streakNumber: {
    fontSize: 48,
    fontWeight: "900"
  },

  streakText: {
    color: "#7CFF00",
    fontSize: 14
  },

  keep: {
    color: "#9ca3af"
  },

  xpCard: {
    marginTop: 28,
    background: "linear-gradient(90deg,#091226,#06101d)",
    borderRadius: 28,
    padding: 24,
    display: "flex",
    gap: 20,
    alignItems: "center"
  },

  xpLogo: {
    width: 80,
    height: 80,
    borderRadius: 24,
    border: "2px solid #7CFF00",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "900",
    fontSize: 34
  },

  xpTitle: {
    color: "#d1d5db",
    fontSize: 18
  },

  xpRow: {
    fontSize: 18,
    marginTop: 8
  },

  green: {
    color: "#7CFF00",
    fontWeight: "900",
    fontSize: 40
  },

  white: {
    color: "white"
  },

  progressBg: {
    height: 12,
    background: "#1e293b",
    borderRadius: 20,
    marginTop: 14,
    overflow: "hidden"
  },

  progressFill: {
    width: "60%",
    height: "100%",
    background: "#7CFF00",
    borderRadius: 20
  },

  workoutFill: {
    width: "68%",
    height: "100%",
    background: "#7CFF00",
    borderRadius: 20
  },

  levelBox: {
    textAlign: "center"
  },

  levelText: {
    color: "#d1d5db",
    fontSize: 16
  },

  levelNumber: {
    color: "#7CFF00",
    fontSize: 58,
    fontWeight: "900"
  },

  statsGrid: {
    marginTop: 24,
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: 16
  },

  orangeCard: {
    background: "#081226",
    borderRadius: 24,
    padding: 18,
    border: "1px solid rgba(255,122,0,0.3)"
  },

  greenCard: {
    background: "#081226",
    borderRadius: 24,
    padding: 18,
    border: "1px solid rgba(57,255,20,0.3)"
  },

  purpleCard: {
    background: "#081226",
    borderRadius: 24,
    padding: 18,
    border: "1px solid rgba(204,102,255,0.3)"
  },

  blueCard: {
    background: "#081226",
    borderRadius: 24,
    padding: 18,
    border: "1px solid rgba(0,170,255,0.3)"
  },

  statNumber: {
    fontSize: 58,
    fontWeight: "900",
    marginTop: 18
  },

  statLabel: {
    color: "#d1d5db",
    letterSpacing: 1,
    fontSize: 16
  },

  statBottom: {
    color: "#9ca3af",
    marginTop: 24,
    fontSize: 14
  },

  premiumCard: {
    marginTop: 24,
    background: "linear-gradient(90deg,#081226,#0a1d0f)",
    borderRadius: 24,
    padding: 24,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  premiumLeft: {
    display: "flex",
    alignItems: "center",
    gap: 20
  },

  crownCircle: {
    width: 80,
    height: 80,
    borderRadius: "50%",
    background: "rgba(124,255,0,0.08)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 40
  },

  premiumTitle: {
    fontSize: 36,
    fontWeight: "800"
  },

  premiumSub: {
    color: "#9ca3af",
    marginTop: 6
  },

  upgradeBtn: {
    background: "#7CFF00",
    border: "none",
    padding: "18px 34px",
    borderRadius: 40,
    fontWeight: "900",
    fontSize: 18,
    cursor: "pointer"
  },

  workoutCard: {
    marginTop: 24,
    background: "#081226",
    borderRadius: 24,
    padding: 18,
    display: "flex",
    gap: 18
  },

  workoutImage: {
    width: 270,
    borderRadius: 18,
    objectFit: "cover"
  },

  continue: {
    color: "#7CFF00",
    fontSize: 14,
    fontWeight: "700"
  },

  workoutTitle: {
    fontSize: 44,
    marginTop: 6,
    fontWeight: "900"
  },

  workoutSub: {
    color: "#9ca3af"
  },

  completed: {
    color: "#7CFF00",
    marginTop: 10
  },

  optionGrid: {
    marginTop: 22,
    display: "grid",
    gridTemplateColumns: "repeat(5,1fr)",
    gap: 14
  },

  optionCard: {
    background: "#081226",
    borderRadius: 18,
    padding: 20,
    textAlign: "center",
    border: "1px solid rgba(255,255,255,0.05)"
  },

  optionText: {
    marginTop: 12,
    fontSize: 15
  },

  sessionHeader: {
    marginTop: 30,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  sessionTitle: {
    fontSize: 32,
    fontWeight: "900"
  },

  viewBtn: {
    background: "transparent",
    color: "#7CFF00",
    border: "none",
    display: "flex",
    alignItems: "center",
    gap: 6,
    cursor: "pointer",
    fontSize: 18,
    fontWeight: "700"
  },

  sessionsWrap: {
    marginTop: 18,
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    gap: 18
  },

  sessionCard: {
    background: "#081226",
    borderRadius: 22,
    overflow: "hidden"
  },

  sessionImage: {
    width: "100%",
    height: 180,
    objectFit: "cover"
  },

  sessionContent: {
    padding: 16
  },

  liveRow: {
    marginBottom: 10
  },

  live: {
    background: "#7f1d1d",
    color: "white",
    padding: "6px 12px",
    borderRadius: 20,
    fontSize: 12
  },

  sessionName: {
    fontSize: 28,
    fontWeight: "800"
  },

  coach: {
    color: "#9ca3af",
    marginTop: 8
  },

  viewerBox: {
    marginTop: 14,
    background: "rgba(124,255,0,0.15)",
    width: "fit-content",
    padding: "8px 16px",
    borderRadius: 20,
    color: "#7CFF00",
    fontWeight: "700"
  },

  bottomBar: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    background: "#081226",
    padding: "14px 10px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    borderTop: "1px solid rgba(255,255,255,0.05)"
  },

  navItem: {
    textAlign: "center"
  },

  activeNav: {
    color: "#7CFF00",
    marginTop: 4
  },

  navText: {
    color: "white",
    marginTop: 4
  },

  plusCircle: {
    width: 76,
    height: 76,
    borderRadius: "50%",
    background: "#7CFF00",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -40,
    boxShadow: "0 0 50px rgba(124,255,0,0.5)"
  }
};
