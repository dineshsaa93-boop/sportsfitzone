"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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
  ChevronDown,
  ChevronUp
} from "lucide-react";

export default function HomePage() {

  const router = useRouter();

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

        <Menu color="white" size={30} />

        <div style={styles.topRight}>

          <Bell color="white" size={24} />

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

          <p style={styles.goodText}>
            Good to see you,
          </p>

          <h1 style={styles.name}>
            Dinesh👋
          </h1>

          <p style={styles.focus}>
            Focus today.
            <span style={{ color: "#7CFF00" }}>
              {" "}Conquer{" "}
            </span>
            tomorrow.
          </p>

        </div>

        {/* STREAK */}

        <div style={styles.streakCard}>

          <div style={styles.fireCircle}>
            <Flame color="#7CFF00" size={30} />
          </div>

          <div>

            <h1 style={styles.streakNumber}>
              7
            </h1>

            <p style={styles.streakText}>
              DAY STREAK
            </p>

            <p style={styles.keepText}>
              Keep it up!
            </p>

          </div>

        </div>

      </div>

      {/* XP CARD */}

      <div style={styles.xpCard}>

        <div style={styles.xpLogo}>
          XP
        </div>

        <div style={{ flex: 1 }}>

          <p style={styles.xpTitle}>
            XP PROGRESS
          </p>

          <div style={styles.xpRow}>

            <span style={styles.greenNumber}>
              540
            </span>

            <span style={styles.whiteText}>
              /1000 XP
            </span>

          </div>

          <div style={styles.progressBar}>

            <div style={styles.progressFill}></div>

          </div>

        </div>

        <div style={styles.levelBox}>

          <p style={styles.levelText}>
            LEVEL
          </p>

          <h1 style={styles.levelNumber}>
            5
          </h1>

        </div>

      </div>

      {/* STATS */}

      <div style={styles.statsGrid}>

        {/* CARD 1 */}

        <div style={styles.orangeCard}>

          <Flame color="#ff7a00" size={28} />

          <h1 style={styles.statNumber}>
            1240
          </h1>

          <p style={styles.statTitle}>
            CALORIES
          </p>

          <p style={styles.statBottom}>
            ↗ 12% vs Yesterday
          </p>

        </div>

        {/* CARD 2 */}

        <div style={styles.greenCard}>

          <Dumbbell color="#39ff14" size={28} />

          <h1 style={styles.statNumber}>
            18
          </h1>

          <p style={styles.statTitle}>
            WORKOUTS
          </p>

          <p style={styles.statBottom}>
            ↗ 2 this week
          </p>

        </div>

        {/* CARD 3 */}

        <div style={styles.purpleCard}>

          <Zap color="#cc66ff" size={28} />

          <h1 style={styles.statNumber}>
            540
          </h1>

          <p style={styles.statTitle}>
            XP POINTS
          </p>

          <p style={styles.statBottom}>
            ↗ Keep going!
          </p>

        </div>

        {/* CARD 4 */}

        <div style={styles.blueCard}>

          <Trophy color="#00aaff" size={28} />

          <h1 style={styles.statNumber}>
            7
          </h1>

          <p style={styles.statTitle}>
            DAY STREAK
          </p>

          <p style={styles.statBottom}>
            🏆 Best: 12 days
          </p>

        </div>

      </div>

      {/* PREMIUM */}

      <div style={styles.premiumCard}>

        <div style={styles.premiumLeft}>

          <div style={styles.crownCircle}>
            👑
          </div>

          <div>

            <h1 style={styles.premiumTitle}>
              Go Premium
            </h1>

            <p style={styles.premiumSub}>
              Unlock all features and achieve your best.
            </p>

          </div>

        </div>

        <button style={styles.upgradeBtn}>
          Upgrade Now
        </button>

      </div>

      {/* WORKOUT CARD */}

      <div style={styles.workoutCard}>

        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop"
          alt="gym"
          style={styles.workoutImage}
        />

        <div style={{ flex: 1 }}>

          <p style={styles.continueText}>
            CONTINUE WORKOUT
          </p>

          <h1 style={styles.workoutTitle}>
            Full Body
            <br />
            Strength Workout
          </h1>

          <p style={styles.workoutSub}>
            Build Power & Endurance
          </p>

          <p style={styles.completed}>
            68% Completed
          </p>

          <div style={styles.progressBar}>

            <div style={styles.workoutFill}></div>

          </div>

        </div>

      </div>

      {/* OPTIONS */}

      <div style={styles.optionGrid}>

        <div
          style={styles.optionCard}
          onClick={() => router.push("/ai-coach")}
        >
          <Bot color="#00ffcc" size={24} />

          <p style={styles.optionText}>
            AI Coach
          </p>
        </div>

        <div
          style={styles.optionCard}
          onClick={() => router.push("/diet")}
        >
          <Apple color="#ff6600" size={24} />

          <p style={styles.optionText}>
            Diet Planner
          </p>
        </div>

        <div
          style={styles.optionCard}
          onClick={() => router.push("/progress")}
        >
          <BarChart3 color="#0099ff" size={24} />

          <p style={styles.optionText}>
            Progress
          </p>
        </div>

        <div
          style={styles.optionCard}
          onClick={() => router.push("/challenges")}
        >
          <Medal color="#ffd000" size={24} />

          <p style={styles.optionText}>
            Challenges
          </p>
        </div>

        <div
          style={styles.optionCard}
          onClick={() => router.push("/community")}
        >
          <Users color="#cc33ff" size={24} />

          <p style={styles.optionText}>
            Community
          </p>
        </div>

      </div>

      {/* UPCOMING */}

      <div style={styles.upcomingHeader}>

        <h1 style={styles.upcomingTitle}>
          Upcoming Sessions
        </h1>

        <button
          style={styles.viewBtn}
          onClick={() => setShowAll(!showAll)}
        >

          {showAll ? "View Less" : "View All"}

          {showAll ? (
            <ChevronUp size={18} />
          ) : (
            <ChevronDown size={18} />
          )}

        </button>

      </div>

      {/* SESSION CARDS */}

      <div style={styles.sessionGrid}>

        {(showAll ? sessions : sessions.slice(0, 2)).map((item, index) => (

          <div
            key={index}
            style={styles.sessionCard}
          >

            <img
              src={item.image}
              alt="sports"
              style={styles.sessionImage}
            />

            <div style={styles.sessionContent}>

              <div style={styles.liveBadge}>
                LIVE
              </div>

              <h2 style={styles.sessionName}>
                {item.title}
              </h2>

              <p style={styles.coachText}>
                By {item.coach}
              </p>

              <div style={styles.viewerBadge}>
                {item.viewers}
              </div>

            </div>

          </div>

        ))}

      </div>

      {/* BOTTOM NAV */}

      <div style={styles.bottomBar}>

        <div
          style={styles.navItem}
          onClick={() => router.push("/")}
        >

          <Home color="#7CFF00" size={24} />

          <p style={styles.activeNav}>
            Home
          </p>

        </div>

        <div
          style={styles.navItem}
          onClick={() => router.push("/training")}
        >

          <Dumbbell color="white" size={24} />

          <p style={styles.navText}>
            Training
          </p>

        </div>

        <div style={styles.plusCircle}>
          <Plus color="black" size={34} />
        </div>

        <div
          style={styles.navItem}
          onClick={() => router.push("/store")}
        >

          <ShoppingBag color="white" size={24} />

          <p style={styles.navText}>
            Store
          </p>

        </div>

        <div
          style={styles.navItem}
          onClick={() => router.push("/profile")}
        >

          <User color="white" size={24} />

          <p style={styles.navText}>
            Profile
          </p>

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

  topRight: {
    display: "flex",
    alignItems: "center",
    gap: 20
  },

  profile: {
    width: 56,
    height: 56,
    borderRadius: "50%",
    objectFit: "cover",
    border: "2px solid #7CFF00"
  },

  header: {
    marginTop: 30,
    display: "flex",
    justifyContent: "space-between",
    gap: 20
  },

  goodText: {
    color: "#9ca3af",
    fontSize: 18
  },

  name: {
    fontSize: 72,
    fontWeight: "900",
    marginTop: -10
  },

  focus: {
    color: "#9ca3af",
    fontSize: 20,
    marginTop: -20
  },

  streakCard: {
    width: 280,
    background: "#081226",
    borderRadius: 24,
    padding: 20,
    display: "flex",
    alignItems: "center",
    gap: 16
  },

  fireCircle: {
    width: 72,
    height: 72,
    borderRadius: "50%",
    background: "rgba(124,255,0,0.1)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 0 40px rgba(124,255,0,0.5)"
  },

  streakNumber: {
    fontSize: 48,
    fontWeight: "900"
  },

  streakText: {
    color: "#7CFF00",
    fontSize: 14
  },

  keepText: {
    color: "#9ca3af",
    marginTop: 6
  },

  xpCard: {
    marginTop: 28,
    background: "#081226",
    borderRadius: 28,
    padding: 24,
    display: "flex",
    alignItems: "center",
    gap: 20
  },

  xpLogo: {
    width: 90,
    height: 90,
    border: "2px solid #7CFF00",
    borderRadius: 24,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 34,
    fontWeight: "900"
  },

  xpTitle: {
    color: "#d1d5db",
    fontSize: 18
  },

  xpRow: {
    marginTop: 10
  },

  greenNumber: {
    color: "#7CFF00",
    fontSize: 40,
    fontWeight: "900"
  },

  whiteText: {
    fontSize: 20
  },

  progressBar: {
    marginTop: 14,
    height: 12,
    background: "#1e293b",
    borderRadius: 20,
    overflow: "hidden"
  },

  progressFill: {
    width: "60%",
    height: "100%",
    background: "#7CFF00"
  },

  workoutFill: {
    width: "68%",
    height: "100%",
    background: "#7CFF00"
  },

  levelBox: {
    textAlign: "center"
  },

  levelText: {
    color: "#d1d5db"
  },

  levelNumber: {
    fontSize: 56,
    color: "#7CFF00",
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
    fontSize: 56,
    fontWeight: "900",
    marginTop: 18
  },

  statTitle: {
    fontSize: 16,
    color: "#d1d5db",
    letterSpacing: 1
  },

  statBottom: {
    marginTop: 20,
    color: "#9ca3af",
    fontSize: 14
  },

  premiumCard: {
    marginTop: 24,
    background: "linear-gradient(90deg,#081226,#0d1f10)",
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
    background: "rgba(124,255,0,0.1)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 40
  },

  premiumTitle: {
    fontSize: 34,
    fontWeight: "900"
  },

  premiumSub: {
    color: "#9ca3af"
  },

  upgradeBtn: {
    background: "#7CFF00",
    border: "none",
    borderRadius: 40,
    padding: "18px 34px",
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
    width: 280,
    borderRadius: 18,
    objectFit: "cover"
  },

  continueText: {
    color: "#7CFF00",
    fontSize: 14,
    fontWeight: "700"
  },

  workoutTitle: {
    fontSize: 44,
    fontWeight: "900",
    marginTop: 6
  },

  workoutSub: {
    color: "#9ca3af"
  },

  completed: {
    color: "#7CFF00",
    marginTop: 10
  },

  optionGrid: {
    marginTop: 24,
    display: "grid",
    gridTemplateColumns: "repeat(5,1fr)",
    gap: 14
  },

  optionCard: {
    background: "#081226",
    borderRadius: 18,
    padding: 20,
    textAlign: "center",
    cursor: "pointer"
  },

  optionText: {
    marginTop: 12
  },

  upcomingHeader: {
    marginTop: 32,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  upcomingTitle: {
    fontSize: 30,
    fontWeight: "900"
  },

  viewBtn: {
    background: "transparent",
    border: "none",
    color: "#7CFF00",
    display: "flex",
    alignItems: "center",
    gap: 6,
    fontSize: 18,
    cursor: "pointer",
    fontWeight: "700"
  },

  sessionGrid: {
    marginTop: 20,
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    gap: 18
  },

  sessionCard: {
    background: "#081226",
    borderRadius: 24,
    overflow: "hidden"
  },

  sessionImage: {
    width: "100%",
    height: 190,
    objectFit: "cover"
  },

  sessionContent: {
    padding: 18
  },

  liveBadge: {
    background: "#7f1d1d",
    width: "fit-content",
    padding: "6px 12px",
    borderRadius: 20,
    fontSize: 12
  },

  sessionName: {
    marginTop: 12,
    fontSize: 28,
    fontWeight: "900"
  },

  coachText: {
    color: "#9ca3af",
    marginTop: 8
  },

  viewerBadge: {
    marginTop: 14,
    width: "fit-content",
    background: "rgba(124,255,0,0.15)",
    color: "#7CFF00",
    padding: "8px 14px",
    borderRadius: 20,
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
    textAlign: "center",
    cursor: "pointer"
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
    width: 78,
    height: 78,
    borderRadius: "50%",
    background: "#7CFF00",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -40,
    boxShadow: "0 0 50px rgba(124,255,0,0.6)"
  }
};
