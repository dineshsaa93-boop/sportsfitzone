"use client";

import { useState } from "react";

import {
  Menu,
  Bell,
  Flame,
  Dumbbell,
  Zap,
  Trophy,
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

  const [showAll, setShowAll] = useState(false);

  const sessions = [
    {
      title: "Cricket Batting Masterclass",
      coach: "Rahul Dravid",
      image:
        "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1200&auto=format&fit=crop"
    },

    {
      title: "Football Speed & Agility",
      coach: "Indra Sharma",
      image:
        "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1200&auto=format&fit=crop"
    },

    {
      title: "Strength Training Pro",
      coach: "Virat Coach",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop"
    },

    {
      title: "Advanced Yoga Flow",
      coach: "Ananya Singh",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  return (

    <div style={styles.container}>

      {/* TOP BAR */}

      <div style={styles.topBar}>

        <Menu color="white" size={28} />

        <div style={styles.topRight}>

          <Bell color="white" size={22} />

          <img
            src="https://i.pravatar.cc/150"
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

          <p style={styles.subText}>
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

            <p style={styles.streakLabel}>
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

            <span style={styles.xpGreen}>
              540
            </span>

            <span style={styles.xpWhite}>
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

        <div style={styles.orangeCard}>

          <div style={styles.iconCircleOrange}>
            <Flame color="#ff7a00" size={22} />
          </div>

          <h1 style={styles.statNumber}>
            1240
          </h1>

          <p style={styles.statLabel}>
            CALORIES
          </p>

          <p style={styles.statSub}>
            ↗ 12% vs Yesterday
          </p>

        </div>

        <div style={styles.greenCard}>

          <div style={styles.iconCircleGreen}>
            <Dumbbell color="#39ff14" size={22} />
          </div>

          <h1 style={styles.statNumber}>
            18
          </h1>

          <p style={styles.statLabel}>
            WORKOUTS
          </p>

          <p style={styles.statSub}>
            ↗ 2 this week
          </p>

        </div>

        <div style={styles.purpleCard}>

          <div style={styles.iconCirclePurple}>
            <Zap color="#cc66ff" size={22} />
          </div>

          <h1 style={styles.statNumber}>
            540
          </h1>

          <p style={styles.statLabel}>
            XP POINTS
          </p>

          <p style={styles.statSub}>
            ↗ Keep going!
          </p>

        </div>

        <div style={styles.blueCard}>

          <div style={styles.iconCircleBlue}>
            <Trophy color="#00bfff" size={22} />
          </div>

          <h1 style={styles.statNumber}>
            7
          </h1>

          <p style={styles.statLabel}>
            DAY STREAK
          </p>

          <p style={styles.statSub}>
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

      {/* WORKOUT */}

      <div style={styles.workoutCard}>

        <img
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop"
          alt="gym"
          style={styles.workoutImage}
        />

        <div style={{ flex: 1 }}>

          <p style={styles.continueText}>
            CONTINUE WORKOUT
          </p>

          <h1 style={styles.workoutTitle}>
            Full Body Strength Workout
          </h1>

          <p style={styles.workoutSub}>
            Build Power & Endurance
          </p>

          <p style={styles.completedText}>
            68% Completed
          </p>

          <div style={styles.progressBar}>

            <div style={styles.workoutFill}></div>

          </div>

        </div>

      </div>

      {/* FEATURES */}

      <div style={styles.featureGrid}>

        <div style={styles.featureCard}>
          <Bot color="#00ffcc" size={24} />
          <p style={styles.featureText}>AI Coach</p>
        </div>

        <div style={styles.featureCard}>
          <Apple color="#ff7a00" size={24} />
          <p style={styles.featureText}>Diet</p>
        </div>

        <div style={styles.featureCard}>
          <BarChart3 color="#00bfff" size={24} />
          <p style={styles.featureText}>Progress</p>
        </div>

        <div style={styles.featureCard}>
          <Medal color="#ffd000" size={24} />
          <p style={styles.featureText}>Challenge</p>
        </div>

        <div style={styles.featureCard}>
          <Users color="#cc66ff" size={24} />
          <p style={styles.featureText}>Community</p>
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

      {/* SESSIONS */}

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

              <h2 style={styles.sessionTitle}>
                {item.title}
              </h2>

              <p style={styles.sessionCoach}>
                By {item.coach}
              </p>

            </div>

          </div>

        ))}

      </div>

      {/* BOTTOM NAV */}

      <div style={styles.bottomBar}>

        <div style={styles.activeNav}>
          <Home size={24} />
          <p>Home</p>
        </div>

        <div style={styles.navItem}>
          <Dumbbell size={24} />
          <p>Training</p>
        </div>

        <div style={styles.plusButton}>
          <Plus color="black" size={32} />
        </div>

        <div style={styles.navItem}>
          <ShoppingBag size={24} />
          <p>Store</p>
        </div>

        <div style={styles.navItem}>
          <User size={24} />
          <p>Profile</p>
        </div>

      </div>

    </div>
  );
}

const styles = {

  container: {
    background: "#030712",
    minHeight: "100vh",
    padding: 22,
    paddingBottom: 120,
    color: "white",
    fontFamily: "Arial"
  },

  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  topRight: {
    display: "flex",
    alignItems: "center",
    gap: 18
  },

  profile: {
    width: 52,
    height: 52,
    borderRadius: "50%",
    border: "2px solid #7CFF00"
  },

  header: {
    marginTop: 34,
    display: "flex",
    justifyContent: "space-between",
    gap: 20
  },

  goodText: {
    color: "#9ca3af",
    fontSize: 18
  },

  name: {
    fontSize: 68,
    fontWeight: "900",
    marginTop: -8
  },

  subText: {
    color: "#9ca3af",
    marginTop: -22,
    fontSize: 18
  },

  streakCard: {
    width: 280,
    background: "#071120",
    borderRadius: 28,
    padding: 20,
    display: "flex",
    alignItems: "center",
    gap: 16,
    border: "1px solid rgba(255,255,255,0.04)"
  },

  fireCircle: {
    width: 74,
    height: 74,
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

  streakLabel: {
    color: "#7CFF00",
    fontSize: 14,
    letterSpacing: 1
  },

  keepText: {
    color: "#9ca3af",
    marginTop: 6
  },

  xpCard: {
    marginTop: 28,
    background: "#071120",
    borderRadius: 30,
    padding: 22,
    display: "flex",
    alignItems: "center",
    gap: 18
  },

  xpLogo: {
    width: 84,
    height: 84,
    borderRadius: 24,
    border: "2px solid #7CFF00",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 32,
    fontWeight: "900"
  },

  xpTitle: {
    color: "#d1d5db",
    fontSize: 16
  },

  xpRow: {
    marginTop: 10
  },

  xpGreen: {
    color: "#7CFF00",
    fontSize: 38,
    fontWeight: "900"
  },

  xpWhite: {
    fontSize: 18
  },

  progressBar: {
    height: 12,
    background: "#1f2937",
    borderRadius: 20,
    marginTop: 14,
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
    color: "#d1d5db",
    fontSize: 14
  },

  levelNumber: {
    fontSize: 54,
    fontWeight: "900",
    color: "#7CFF00"
  },

  statsGrid: {
    marginTop: 24,
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: 16
  },

  orangeCard: {
    background: "#071120",
    borderRadius: 24,
    padding: 18,
    border: "1px solid rgba(255,122,0,0.2)"
  },

  greenCard: {
    background: "#071120",
    borderRadius: 24,
    padding: 18,
    border: "1px solid rgba(57,255,20,0.2)"
  },

  purpleCard: {
    background: "#071120",
    borderRadius: 24,
    padding: 18,
    border: "1px solid rgba(204,102,255,0.2)"
  },

  blueCard: {
    background: "#071120",
    borderRadius: 24,
    padding: 18,
    border: "1px solid rgba(0,191,255,0.2)"
  },

  iconCircleOrange: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    background: "rgba(255,122,0,0.08)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  iconCircleGreen: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    background: "rgba(57,255,20,0.08)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  iconCirclePurple: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    background: "rgba(204,102,255,0.08)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  iconCircleBlue: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    background: "rgba(0,191,255,0.08)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  statNumber: {
    fontSize: 42,
    fontWeight: "900",
    marginTop: 16
  },

  statLabel: {
    color: "#d1d5db",
    fontSize: 12,
    letterSpacing: 1,
    marginTop: 4
  },

  statSub: {
    marginTop: 20,
    color: "#9ca3af",
    fontSize: 12
  },

  premiumCard: {
    marginTop: 24,
    background: "linear-gradient(90deg,#071120,#0d1d10)",
    borderRadius: 28,
    padding: 24,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  premiumLeft: {
    display: "flex",
    alignItems: "center",
    gap: 18
  },

  crownCircle: {
    width: 76,
    height: 76,
    borderRadius: "50%",
    background: "rgba(124,255,0,0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 36
  },

  premiumTitle: {
    fontSize: 34,
    fontWeight: "900"
  },

  premiumSub: {
    color: "#9ca3af",
    marginTop: 4
  },

  upgradeBtn: {
    background: "#7CFF00",
    border: "none",
    padding: "16px 28px",
    borderRadius: 40,
    fontWeight: "900",
    fontSize: 16
  },

  workoutCard: {
    marginTop: 24,
    background: "#071120",
    borderRadius: 28,
    padding: 18,
    display: "flex",
    gap: 18
  },

  workoutImage: {
    width: 220,
    borderRadius: 20,
    objectFit: "cover"
  },

  continueText: {
    color: "#7CFF00",
    fontSize: 12,
    letterSpacing: 1
  },

  workoutTitle: {
    fontSize: 40,
    fontWeight: "900",
    marginTop: 8
  },

  workoutSub: {
    color: "#9ca3af"
  },

  completedText: {
    color: "#7CFF00",
    marginTop: 10
  },

  featureGrid: {
    marginTop: 24,
    display: "grid",
    gridTemplateColumns: "repeat(5,1fr)",
    gap: 14
  },

  featureCard: {
    background: "#071120",
    borderRadius: 20,
    padding: 18,
    textAlign: "center"
  },

  featureText: {
    marginTop: 10,
    fontSize: 13
  },

  upcomingHeader: {
    marginTop: 34,
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
    fontWeight: "700",
    fontSize: 16
  },

  sessionGrid: {
    marginTop: 20,
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    gap: 18
  },

  sessionCard: {
    background: "#071120",
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

  sessionTitle: {
    marginTop: 12,
    fontSize: 24,
    fontWeight: "900"
  },

  sessionCoach: {
    color: "#9ca3af",
    marginTop: 8
  },

  bottomBar: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    background: "#071120",
    padding: "14px 10px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    borderTop: "1px solid rgba(255,255,255,0.04)"
  },

  activeNav: {
    textAlign: "center",
    color: "#7CFF00",
    fontSize: 12
  },

  navItem: {
    textAlign: "center",
    color: "#d1d5db",
    fontSize: 12
  },

  plusButton: {
    width: 76,
    height: 76,
    borderRadius: "50%",
    background: "#7CFF00",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -40,
    boxShadow: "0 0 40px rgba(124,255,0,0.5)"
  }

};
