"use client";

import Link from "next/link";
import {
  Home,
  Dumbbell,
  Bot,
  ShoppingCart,
  User,
  Flame,
  Trophy,
  Brain,
  Apple,
  Timer,
  Droplets,
  NotebookPen,
  Moon,
  ChevronRight
} from "lucide-react";

const features = [
  {
    title: "AI Coach",
    icon: <Bot color="#39ff14" size={22} />,
    link: "/ai-coach"
  },

  {
    title: "Diet",
    icon: <Apple color="#ff8800" size={22} />,
    link: "/diet"
  },

  {
    title: "Progress",
    icon: <Brain color="#00bfff" size={22} />,
    link: "/progress"
  },

  {
    title: "Water",
    icon: <Droplets color="#00e1ff" size={22} />,
    link: "/water"
  },

  {
    title: "Timer",
    icon: <Timer color="#39ff14" size={22} />,
    link: "/timer"
  },

  {
    title: "Notes",
    icon: <NotebookPen color="#ffffff" size={22} />,
    link: "/notes"
  }
];

export default function HomePage() {
  return (
    <div style={styles.container}>

      {/* HERO */}
      <div style={styles.hero}>

        <div>
          <p style={styles.goodText}>
            Good to see you 👋
          </p>

          <h1 style={styles.name}>
            Dinesh
          </h1>

          <p style={styles.subtitle}>
            Train harder. Become unstoppable.
          </p>
        </div>


        <img
          src="/logo.png"
          alt="logo"
          style={styles.logo}
        />
      </div>


      {/* XP CARD */}
      <div style={styles.xpCard}>

        <div style={styles.xpTop}>
          <div>
            <p style={styles.xpLabel}>CURRENT LEVEL</p>
            <h2 style={styles.level}>Level 12</h2>
          </div>

          <div style={styles.levelBadge}>
            🏆
          </div>
        </div>


        <div style={styles.progressBarBg}>
          <div style={styles.progressBarFill}></div>
        </div>

        <div style={styles.progressBottom}>
          <p style={styles.progressText}>700 / 1000 XP</p>

          <p style={styles.progressText}>70%</p>
        </div>
      </div>


      {/* LIVE STATS */}
      <div style={styles.statsGrid}>
        <div style={styles.statCardOrange}>
  <Flame color="#ff7a00" size={32} />
  <h2 style={styles.statNumber}>1240</h2>
  <p style={styles.statLabel}>CALORIES</p>
</div>

<div style={styles.statCardGreen}>
  <Dumbbell color="#39ff14" size={32} />
  <h2 style={styles.statNumber}>18</h2>
  <p style={styles.statLabel}>WORKOUTS</p>
</div>

<div style={styles.statCardBlue}>
  <Brain color="#00bfff" size={32} />
  <h2 style={styles.statNumber}>540</h2>
  <p style={styles.statLabel}>XP POINTS</p>
</div>

<div style={styles.statCardPurple}>
  <Trophy color="#cc66ff" size={32} />
  <h2 style={styles.statNumber}>7</h2>
  <p style={styles.statLabel}>DAY STREAK</p>
</div>
        <button style={styles.claimBtn}>
          Claim
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
          <p style={styles.workoutSmall}>
            CONTINUE WORKOUT
          </p>

          <h2 style={styles.workoutTitle}>
            Full Body Strength
          </h2>

          <p style={styles.workoutSub}>
            Build power and endurance.
          </p>

          <div style={styles.workoutProgressBg}>
            <div style={styles.workoutProgressFill}></div>
          </div>

          <button style={styles.resumeBtn}>
            Resume
          </button>
        </div>
      </div>


      {/* FEATURES */}
      <div style={styles.sectionHeader}>
        <h2 style={styles.sectionTitle}>
          Features
        </h2>

        <Link href="/all-features" style={styles.viewAll}>
          View All
        </Link>
      </div>


      <div style={styles.featureGrid}>

        {features.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            style={styles.featureCard}
          >
            {item.icon}

            <p style={styles.featureText}>
              {item.title}
            </p>
          </Link>
        ))}

      </div>


      {/* UPCOMING */}
      <div style={styles.sectionHeader}>
        <h2 style={styles.sectionTitle}>
          Upcoming Sessions
        </h2>

        <Link href="/sessions" style={styles.viewAll}>
          View All
        </Link>
      </div>


      <div style={styles.sessionCard}>

        <img
          src="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200&auto=format&fit=crop"
          alt="session"
          style={styles.sessionImage}
        />


        <div style={{ flex: 1 }}>
          <p style={styles.sessionTime}>
            Today • 03:00 PM
          </p>

          <h2 style={styles.sessionTitle}>
            Cricket Batting Masterclass
          </h2>

          <p style={styles.sessionCoach}>
            Rahul Dravid
          </p>
        </div>


        <ChevronRight color="white" />
      </div>


      {/* PREMIUM CARD */}
      <div style={styles.premiumCard}>

        <div>
          <p style={styles.premiumSmall}>
            PREMIUM
          </p>

          <h2 style={styles.premiumTitle}>
            Unlock All Features 🚀
          </h2>
        </div>


        <button style={styles.premiumBtn}>
          Upgrade
        </button>
      </div>


      {/* INSTALL */}
      <button style={styles.installBtn}>
        📲 Install App
      </button>


      {/* BOTTOM NAV */}
      <div style={styles.bottomNav}>

        <Link href="/" style={styles.navActive}>
          <Home color="#39ff14" />
          <span style={{ color: "#39ff14" }}>
            Home
          </span>
        </Link>


        <Link href="/training" style={styles.navItem}>
          <Dumbbell color="white" />
          <span>Training</span>
        </Link>


        <Link href="/ai-coach" style={styles.plusBtn}>
          +
        </Link>


        <Link href="/store" style={styles.navItem}>
          <ShoppingCart color="white" />
          <span>Store</span>
        </Link>


        <Link href="/profile" style={styles.navItem}>
          <User color="white" />
          <span>Profile</span>
        </Link>

      </div>

    </div>
  );
}


const styles = {
  container: {
    background: "#020817",
    minHeight: "100vh",
    padding: "22px",
    paddingBottom: "140px",
    fontFamily: "sans-serif"
  },

  hero: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "15px"
  },

  goodText: {
    color: "#aaa",
    fontSize: "18px"
  },

  name: {
    color: "white",
    fontSize: "52px",
    marginTop: "6px"
  },

  subtitle: {
    color: "#39ff14",
    marginTop: "8px"
  },

  logo: {
    width: "82px",
    height: "82px",
    borderRadius: "24px",
    objectFit: "cover",
    boxShadow: "0 0 30px rgba(57,255,20,0.25)"
  },

  xpCard: {
    marginTop: "28px",
    background: "linear-gradient(135deg,#081120,#0d1b2f)",
    borderRadius: "32px",
    padding: "24px",
    border: "1px solid #1d2b44",
    backdropFilter: "blur(14px)",
    boxShadow: "0 10px 40px rgba(0,0,0,0.35)"
  },

  xpTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  xpLabel: {
    color: "#aaa",
    fontSize: "14px"
  },

  level: {
    color: "white",
    fontSize: "34px",
    marginTop: "6px"
  },

  levelBadge: {
    width: "64px",
    height: "64px",
    borderRadius: "22px",
    background: "rgba(57,255,20,0.12)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "30px",
    boxShadow: "0 0 25px rgba(57,255,20,0.25)"
  },

  progressBarBg: {
    width: "100%",
    height: "14px",
    background: "#1d2b44",
    borderRadius: "20px",
    overflow: "hidden",
    marginTop: "22px"
  },

  progressBarFill: {
    width: "70%",
    height: "100%",
    background: "#39ff14",
    borderRadius: "20px",
    boxShadow: "0 0 20px #39ff14"
  },

  progressBottom: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "12px"
  },

  progressText: {
    color: "#aaa"
  },

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    gap: "16px",
    marginTop: "24px"
  },

  statCardOrange: {
    background: "#081120",
    border: "1px solid #35210f",
    borderRadius: "28px",
    padding: "22px"
  },

  statCardGreen: {
    background: "#081120",
    border: "1px solid #12351f",
    borderRadius: "28px",
    padding: "22px"
  },

  statCardBlue: {
    background: "#081120",
    border: "1px solid #0d3352",
    borderRadius: "28px",
    padding: "22px"
  },

  statCardPurple: {
    background: "#081120",
    border: "1px solid #35123f",
    borderRadius: "28px",
    padding: "22px"
  },

  statNumber: {
    color: "white",
    fontSize: "38px",
    marginTop: "16px"
  },

  statLabel: {
    color: "#aaa",
    marginTop: "8px"
  },

  rewardCard: {
    marginTop: "24px",
    background: "#081120",
    borderRadius: "28px",
    padding: "22px",
    border: "1px solid #1d2b44",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  rewardTitle: {
    color: "white",
    fontSize: "24px"
  },

  rewardSub: {
    color: "#aaa",
    marginTop: "8px"
  },

  claimBtn: {
    background: "#39ff14",
    color: "black",
    border: "none",
    padding: "14px 22px",
    borderRadius: "16px",
    fontWeight: "bold",
    boxShadow: "0 0 25px #39ff14"
  },

  workoutCard: {
    marginTop: "24px",
    background: "#081120",
    borderRadius: "30px",
    padding: "18px",
    border: "1px solid #1d2b44",
    display: "flex",
    gap: "18px"
  },

  workoutImage: {
    width: "120px",
    height: "160px",
    borderRadius: "22px",
    objectFit: "cover"
  },

  workoutSmall: {
    color: "#39ff14",
    fontSize: "14px"
  },

  workoutTitle: {
    color: "white",
    fontSize: "30px",
    marginTop: "10px"
  },

  workoutSub: {
    color: "#aaa",
    marginTop: "10px"
  },

  workoutProgressBg: {
    width: "100%",
    height: "12px",
    background: "#1d2b44",
    borderRadius: "20px",
    marginTop: "18px",
    overflow: "hidden"
  },

  workoutProgressFill: {
    width: "68%",
    height: "100%",
    background: "#39ff14",
    borderRadius: "20px"
  },

  resumeBtn: {
    marginTop: "18px",
    background: "#39ff14",
    color: "black",
    border: "none",
    padding: "14px 20px",
    borderRadius: "16px",
    fontWeight: "bold"
  },

  sectionHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "32px"
  },

  sectionTitle: {
    color: "white",
    fontSize: "32px"
  },

  viewAll: {
    color: "#39ff14",
    textDecoration: "none"
  },

  featureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: "14px",
    marginTop: "18px"
  },

  featureCard: {
    background: "rgba(15,23,42,0.8)",
    border: "1px solid #1d2b44",
    borderRadius: "24px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    textDecoration: "none",
    backdropFilter: "blur(14px)",
    boxShadow: "0 0 20px rgba(57,255,20,0.06)"
  },

  featureText: {
    color: "white"
  },

  sessionCard: {
    marginTop: "18px",
    background: "#081120",
    borderRadius: "28px",
    border: "1px solid #1d2b44",
    padding: "18px",
    display: "flex",
    gap: "16px",
    alignItems: "center"
  },

  sessionImage: {
    width: "110px",
    height: "140px",
    objectFit: "cover",
    borderRadius: "20px"
  },

  sessionTime: {
    color: "#39ff14"
  },

  sessionTitle: {
    color: "white",
    fontSize: "26px",
    marginTop: "10px"
  },

  sessionCoach: {
    color: "#aaa",
    marginTop: "8px"
  },

  premiumCard: {
    marginTop: "28px",
    background: "linear-gradient(135deg,#10260a,#081120)",
    borderRadius: "30px",
    padding: "24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid #234d17"
  },

  premiumSmall: {
    color: "#39ff14"
  },

  premiumTitle: {
    color: "white",
    fontSize: "28px",
    marginTop: "8px"
  },

  premiumBtn: {
    background: "#39ff14",
    color: "black",
    border: "none",
    padding: "14px 20px",
    borderRadius: "16px",
    fontWeight: "bold",
    boxShadow: "0 0 25px #39ff14"
  },

  installBtn: {
    marginTop: "24px",
    width: "100%",
    padding: "18px",
    background: "#39ff14",
    color: "black",
    border: "none",
    borderRadius: "20px",
    fontWeight: "bold",
    fontSize: "18px",
    boxShadow: "0 0 30px #39ff14"
  },

  bottomNav: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    background: "rgba(8,17,32,0.95)",
    backdropFilter: "blur(18px)",
    borderTop: "1px solid #1d2b44",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "16px 8px",
    zIndex: 999
  },

  navItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "6px",
    color: "white",
    textDecoration: "none",
    fontSize: "13px"
  },

  navActive: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "6px",
    textDecoration: "none",
    fontSize: "13px"
  },

  plusBtn: {
    width: "64px",
    height: "64px",
    borderRadius: "50%",
    background: "#39ff14",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    textDecoration: "none",
    fontSize: "40px",
    fontWeight: "bold",
    boxShadow: "0 0 25px #39ff14"
  }
};
