"use client";

import { useState } from "react";
import {
  Home,
  Dumbbell,
  ShoppingBag,
  User,
  Trophy,
  Flame,
  Brain,
  Zap,
  Bell,
  Menu,
  Play,
  Bot,
  Apple,
  BarChart3,
  Medal,
  Users,
  Plus
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
      title: "Gym Strength Training",
      coach: "Rohit Fitness",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  return (
    <div style={styles.container}>

      <div style={styles.topBar}>
        <Menu color="white" size={26} />
        <div style={styles.topIcons}>
          <Bell color="white" size={22} />
          <img
            src="https://i.pravatar.cc/100"
            style={styles.avatar}
          />
        </div>
      </div>

      <div style={styles.hero}>
        <p style={styles.welcome}>Good to see you,</p>

        <h1 style={styles.name}>
          Dinesh👋
        </h1>

        <p style={styles.quote}>
          Focus today. <span style={{ color: "#39ff14" }}>Conquer</span> tomorrow.
        </p>
      </div>

      <div style={styles.streakCard}>
        <div style={styles.glowCircle}>
          <Flame color="#39ff14" size={30} />
        </div>

        <div>
          <h2 style={styles.streakNumber}>7</h2>
          <p style={styles.streakText}>DAY STREAK</p>
        </div>
      </div>

      <div style={styles.progressCard}>

        <div style={styles.xpBox}>
          XP
        </div>

        <div style={{ flex: 1 }}>

          <div style={styles.progressRow}>
            <span>540 / 1000 XP</span>
            <span>LEVEL 5</span>
          </div>

          <div style={styles.progressBar}>
            <div style={styles.progressFill}></div>
          </div>

        </div>
      </div>

      <div style={styles.statsGrid}>

        <div style={styles.cardOrange}>
          <Flame color="#ff7a00" size={34} />
          <h2 style={styles.statNumber}>1240</h2>
          <p style={styles.statLabel}>CALORIES</p>
        </div>

        <div style={styles.cardGreen}>
          <Dumbbell color="#39ff14" size={34} />
          <h2 style={styles.statNumber}>18</h2>
          <p style={styles.statLabel}>WORKOUTS</p>
        </div>

        <div style={styles.cardPurple}>
          <Zap color="#cc66ff" size={34} />
          <h2 style={styles.statNumber}>540</h2>
          <p style={styles.statLabel}>XP POINTS</p>
        </div>

        <div style={styles.cardBlue}>
          <Trophy color="#00bfff" size={34} />
          <h2 style={styles.statNumber}>7</h2>
          <p style={styles.statLabel}>DAY STREAK</p>
        </div>

      </div>

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

      <div style={styles.workoutCard}>

        <img
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop"
          style={styles.workoutImage}
        />

        <div style={{ flex: 1 }}>

          <p style={styles.smallGreen}>
            CONTINUE WORKOUT
          </p>

          <h2 style={styles.workoutTitle}>
            Full Body Strength Workout
          </h2>

          <p style={styles.workoutSub}>
            Build Power & Endurance
          </p>

          <div style={styles.progressBar}>
            <div style={styles.progressFill}></div>
          </div>

        </div>
      </div>

      <div style={styles.featureGrid}>

        <div style={styles.featureBox}>
          <Bot color="#39ff14" />
          <p>AI Coach</p>
        </div>

        <div style={styles.featureBox}>
          <Apple color="#ff7a00" />
          <p>Diet Planner</p>
        </div>

        <div style={styles.featureBox}>
          <BarChart3 color="#00bfff" />
          <p>Progress</p>
        </div>

        <div style={styles.featureBox}>
          <Medal color="#ffd700" />
          <p>Challenges</p>
        </div>

        <div style={styles.featureBox}>
          <Users color="#cc66ff" />
          <p>Community</p>
        </div>

      </div>

      <div style={styles.sessionHeader}>

        <h2>Upcoming Sessions</h2>

        <button
          onClick={() => setShowAll(!showAll)}
          style={styles.viewBtn}
        >
          {showAll ? "Less View" : "View All"}
        </button>

      </div>

      <div style={styles.sessionWrap}>

        {(showAll ? sessions : sessions.slice(0, 2)).map((item, index) => (

          <div key={index} style={styles.sessionCard}>

            <img
              src={item.image}
              style={styles.sessionImage}
            />

            <div style={styles.sessionInfo}>
              <h3>{item.title}</h3>
              <p>{item.coach}</p>
            </div>

          </div>

        ))}

      </div>

      <div style={styles.bottomBar}>

        <div style={styles.navItemActive}>
          <Home />
          <p>Home</p>
        </div>

        <div style={styles.navItem}>
          <Dumbbell />
          <p>Training</p>
        </div>

        <div style={styles.plusBtn}>
          <Plus color="black" />
        </div>

        <div style={styles.navItem}>
          <ShoppingBag />
          <p>Store</p>
        </div>

        <div style={styles.navItem}>
          <User />
          <p>Profile</p>
        </div>

      </div>

    </div>
  );
}

const styles = {

  container: {
    background: "#020817",
    minHeight: "100vh",
    padding: 18,
    paddingBottom: 120,
    color: "white",
    fontFamily: "sans-serif"
  },

  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  topIcons: {
    display: "flex",
    gap: 15,
    alignItems: "center"
  },

  avatar: {
    width: 48,
    height: 48,
    borderRadius: "50%",
    border: "2px solid #39ff14"
  },

  hero: {
    marginTop: 30
  },

  welcome: {
    color: "#aaa",
    fontSize: 18
  },

  name: {
    fontSize: 56,
    marginTop: -10,
    fontWeight: "900"
  },

  quote: {
    color: "#bbb",
    marginTop: -20
  },

  streakCard: {
    background: "#07111f",
    borderRadius: 25,
    padding: 20,
    display: "flex",
    alignItems: "center",
    gap: 20,
    marginTop: 20,
    border: "1px solid rgba(57,255,20,0.2)"
  },

  glowCircle: {
    width: 70,
    height: 70,
    borderRadius: "50%",
    background: "rgba(57,255,20,0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 0 30px rgba(57,255,20,0.6)"
  },

  streakNumber: {
    fontSize: 38,
    margin: 0
  },

  streakText: {
    color: "#39ff14",
    marginTop: -5
  },

  progressCard: {
    background: "#07111f",
    borderRadius: 25,
    padding: 20,
    marginTop: 20,
    display: "flex",
    gap: 20,
    alignItems: "center"
  },

  xpBox: {
    width: 70,
    height: 70,
    borderRadius: 20,
    border: "2px solid #39ff14",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: 26
  },

  progressRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 10,
    color: "#39ff14"
  },

  progressBar: {
    width: "100%",
    height: 10,
    background: "#1d2a3d",
    borderRadius: 20
  },

  progressFill: {
    width: "68%",
    height: "100%",
    background: "#39ff14",
    borderRadius: 20
  },

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 16,
    marginTop: 20
  },

  cardOrange: {
    background: "#07111f",
    borderRadius: 25,
    padding: 20,
    border: "1px solid rgba(255,122,0,0.3)"
  },

  cardGreen: {
    background: "#07111f",
    borderRadius: 25,
    padding: 20,
    border: "1px solid rgba(57,255,20,0.3)"
  },

  cardPurple: {
    background: "#07111f",
    borderRadius: 25,
    padding: 20,
    border: "1px solid rgba(204,102,255,0.3)"
  },

  cardBlue: {
    background: "#07111f",
    borderRadius: 25,
    padding: 20,
    border: "1px solid rgba(0,191,255,0.3)"
  },

  statNumber: {
    fontSize: 52,
    marginBottom: 0
  },

  statLabel: {
    color: "#aaa"
  },

  premiumCard: {
    marginTop: 20,
    background:
      "linear-gradient(90deg,#07111f,#0d1f12)",
    borderRadius: 25,
    padding: 20,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  premiumTitle: {
    marginBottom: 5
  },

  premiumText: {
    color: "#aaa",
    maxWidth: 180
  },

  upgradeBtn: {
    background: "#39ff14",
    border: "none",
    padding: "14px 22px",
    borderRadius: 18,
    fontWeight: "bold"
  },

  workoutCard: {
    marginTop: 20,
    background: "#07111f",
    borderRadius: 25,
    padding: 16,
    display: "flex",
    gap: 16
  },

  workoutImage: {
    width: 120,
    height: 140,
    objectFit: "cover",
    borderRadius: 18
  },

  smallGreen: {
    color: "#39ff14",
    fontSize: 12
  },

  workoutTitle: {
    marginTop: 0
  },

  workoutSub: {
    color: "#aaa"
  },

  featureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(5,1fr)",
    gap: 10,
    marginTop: 20
  },

  featureBox: {
    background: "#07111f",
    borderRadius: 18,
    padding: 12,
    textAlign: "center",
    fontSize: 12
  },

  sessionHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30
  },

  viewBtn: {
    background: "none",
    border: "none",
    color: "#39ff14",
    fontWeight: "bold"
  },

  sessionWrap: {
    display: "flex",
    flexDirection: "column",
    gap: 16
  },

  sessionCard: {
    background: "#07111f",
    borderRadius: 22,
    overflow: "hidden"
  },

  sessionImage: {
    width: "100%",
    height: 180,
    objectFit: "cover"
  },

  sessionInfo: {
    padding: 15
  },

  bottomBar: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    background: "#050b16",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 16,
    borderTop: "1px solid rgba(255,255,255,0.08)"
  },

  navItem: {
    textAlign: "center",
    color: "#aaa",
    fontSize: 12
  },

  navItemActive: {
    textAlign: "center",
    color: "#39ff14",
    fontSize: 12
  },

  plusBtn: {
    width: 70,
    height: 70,
    borderRadius: "50%",
    background: "#39ff14",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -40,
    boxShadow: "0 0 30px rgba(57,255,20,0.7)"
  }

};
