"use client";

import Link from "next/link";
import {
  Menu,
  Trophy,
  Flame,
  Bell,
  MonitorPlay,
  ClipboardList,
  MessageCircleQuestion,
  BookOpen,
  Users,
  Bot,
  Calendar,
  Dumbbell,
  Brain,
  ShoppingCart,
  User,
  PlayCircle,
  ChevronRight,
  Home
} from "lucide-react";

export default function HomePage() {

  const features = [
    {
      title: "All Training",
      icon: <MonitorPlay size={38} color="#39ff14" />,
      link: "/training"
    },
    {
      title: "All Tests",
      icon: <ClipboardList size={38} color="#3ea6ff" />,
      link: "/tests"
    },
    {
      title: "My Doubts",
      icon: <MessageCircleQuestion size={38} color="#b266ff" />,
      link: "/doubts"
    },
    {
      title: "Sports Books",
      icon: <BookOpen size={38} color="#ff8c42" />,
      link: "/books"
    },
    {
      title: "Community",
      icon: <Users size={38} color="#ffd633" />,
      link: "/community"
    },
    {
      title: "Challenges",
      icon: <Trophy size={38} color="#ff4d88" />,
      link: "/challenges"
    },
    {
      title: "AI Coach",
      icon: <Bot size={38} color="#00e5ff" />,
      link: "/ai-coach"
    },
    {
      title: "Events",
      icon: <Calendar size={38} color="#4d88ff" />,
      link: "/events"
},
      {
  title: "Diet Planner",
  icon: "🍎",
  link: "/diet"
},
   {
  title: "Progress",
  icon: "📊",
  link: "/progress"
},

{
  title: "Sleep",
  icon: "💤",
  link: "/sleep"
},   {
  title: "Water Tracker",
  icon: "💧",
  link: "/water-tracker"
},

{
  title: "Workout Timer",
  icon: "⏱️",
  link: "/workout-timer"
},

{
  title: "Quiz",
  icon: "🧠",
  link: "/quiz"
},

{
  title: "Workout Schedule",
  icon: "📅",
  link: "/schedule"
},

{
  title: "Notes",
  icon: "📝",
  link: "/notes"
},
    
  ];

  const sessions = [
    {
      title: "Cricket Batting Masterclass",
      coach: "Rahul Dravid",
      time: "03:00 PM",
      image:
        "https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Football Speed & Agility",
      coach: "Sunil Chhetri",
      time: "04:30 PM",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  return (
    <div style={styles.page}>

      {/* TOP BAR */}
      <div style={styles.topBar}>
        <Menu color="white" size={30} />

        <div style={styles.topStats}>
          <div style={styles.stat}>
            <Trophy color="#ffd633" />
            <span>12</span>
          </div>

          <div style={styles.stat}>
            <Flame color="#39ff14" />
            <span>3</span>
          </div>

          <div style={styles.stat}>
            <Brain color="#66ff66" />
            <span>468</span>
          </div>

          <Bell color="white" />
        </div>
      </div>

      {/* HERO */}
      <div style={styles.hero}>
        <div>
          <p style={styles.welcome}>WELCOME BACK!</p>
<p
  style={{
    color: "#39ff14",
    fontSize: "18px",
    marginTop: "10px",
    fontWeight: "bold"
  }}
>
  🔥 Daily Streak: 7 Days
</p>
    <div
  style={{
    background: "#081120",
    padding: "15px",
    borderRadius: "18px",
    marginTop: "15px",
    border: "1px solid #1d2b44"
  }}
>
  <h3 style={{ color: "#39ff14" }}>
    🎁 Daily Reward
  </h3>

  <p style={{ color: "#aaa" }}>
    Claim 50 XP reward today 🚀
  </p>

  <button
    style={{
      marginTop: "12px",
      background: "#39ff14",
      border: "none",
      padding: "10px 20px",
      borderRadius: "12px",
      fontWeight: "bold"
    }}
  >
    Claim Reward
  </button>
</div>
          <img
  src="/logo.png"
  alt="logo"
  style={{
    width: "220px",
    marginTop: "10px"
  }}
/>

          <p style={styles.subtitle}>
            Train. Improve. Dominate.
          </p>
        </div>

        <div style={styles.premiumBox}>
          <p style={{ color: "#39ff14", fontWeight: "bold" }}>
            PREMIUM
          </p>

          <p>UPGRADE PLAN</p>
        <button
  style={{
    background: "#39ff14",
    color: "black",
    border: "none",
    padding: "14px 25px",
    borderRadius: "15px",
    fontWeight: "bold",
    marginTop: "20px",
    fontSize: "16px",
    width: "100%"
  }}
>
  📲 Install App
</button></div>
      </div>

      {/* FEATURES */}
      <div style={styles.featureBox}>

        <div style={styles.featureGrid}>
          {features.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              style={styles.featureItem}
            >
              {item.icon}

              <p style={styles.featureText}>
                {item.title}
              </p>
            </Link>
          ))}
        </div>

        <Link href="/all-features" style={styles.showMore}>
  Show more
</Link>
      </div>

      {/* UPCOMING */}
      <div style={styles.sectionHeader}>
        <h2>Upcoming Sessions (8)</h2>

        <p style={{ color: "#39ff14" }}>
          View All
        </p>
      </div>

      {/* SESSION CARDS */}
      {sessions.map((item, index) => (
        <div key={index} style={styles.sessionCard}>

          <img
            src={item.image}
            alt="session"
            style={styles.sessionImage}
          />

          <div style={{ flex: 1 }}>
            <div style={styles.timeRow}>
              <span style={{ color: "#39ff14" }}>
                ⏰ {item.time}
              </span>

              <span style={styles.liveBadge}>
                LIVE
              </span>
            </div>

            <h2 style={{ marginTop: 8 }}>
              {item.title}
            </h2>

            <p style={{ color: "#aaa" }}>
              By {item.coach}
            </p>
          </div>

          <ChevronRight color="white" />
        </div>
      ))}

      {/* BOTTOM PLAYER */}
      <div style={styles.player}>
        <div style={styles.playerLeft}>
          <PlayCircle color="#39ff14" size={50} />

          <div>
            <h3>Full Body Strength Workout</h3>

            <p style={{ color: "#aaa" }}>
              Build Power & Endurance
            </p>
          </div>
        </div>

        <button style={styles.resumeBtn}>
          Resume
        </button>
      </div>

      {/* BOTTOM NAVBAR */}
      <div style={styles.bottomNav}>

        <Link href="/" style={styles.navItem}>
          <Home color="#39ff14" />
          <span style={{ color: "#39ff14" }}>
            Home
          </span>
        </Link>

        <Link href="/training" style={styles.navItem}>
          <Dumbbell color="white" />
          <span>Training</span>
        </Link>

        <Link href="/ai-coach" style={styles.navItem}>
          <Bot color="white" />
          <span>AI Coach</span>
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

  page: {
    background: "#020817",
    minHeight: "100vh",
    color: "white",
    padding: 20,
    paddingBottom: 140,
    fontFamily: "sans-serif"
  },

  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  topStats: {
    display: "flex",
    gap: 15,
    alignItems: "center"
  },

  stat: {
    display: "flex",
    gap: 5,
    alignItems: "center"
  },

  hero: {
    marginTop: 30,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  welcome: {
    color: "#aaa",
    fontSize: 18
  },

  title: {
    fontSize: 42,
    marginTop: 10,
    fontWeight: "bold"
  },

  subtitle: {
    color: "#aaa",
    marginTop: 10,
    fontSize: 20
  },

  premiumBox: {
    border: "2px solid #39ff14",
    borderRadius: 20,
    padding: 20
  },
featureBox: {
 minHeight: 650, 
    marginTop: 30,
    background: "#081120",
    borderRadius: 30,
    padding: 25,
    border: "1px solid #1d2b44"
  },

  featureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: 25
  },

  featureItem: {
    textAlign: "center",
    textDecoration: "none",
    color: "white"
  },

  featureText: {
    marginTop: 10,
    fontSize: 15
  },

  showMore: {
    marginTop: 25,
    width: "100%",
    padding: 15,
    borderRadius: 20,
    border: "none",
    background: "#111827",
    color: "white",
    fontSize: 18
  },

  sectionHeader: {
    marginTop: 35,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  sessionCard: {
    marginTop: 20,
    background: "#081120",
    borderRadius: 25,
    padding: 15,
    display: "flex",
    gap: 15,
    alignItems: "center",
    border: "1px solid #1d2b44"
  },

  sessionImage: {
    width: 120,
    height: 120,
    objectFit: "cover",
    borderRadius: 20
  },

  timeRow: {
    display: "flex",
    gap: 10,
    alignItems: "center"
  },

  liveBadge: {
    background: "red",
    padding: "5px 10px",
    borderRadius: 10,
    fontSize: 12
  },

  player: {
    position: "fixed",
    bottom: 90,
    left: 10,
    right: 10,
    background: "#111827",
    borderRadius: 20,
    padding: 15,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid #1d2b44"
  },

  playerLeft: {
    display: "flex",
    gap: 15,
    alignItems: "center"
  },

  resumeBtn: {
    background: "#39ff14",
    border: "none",
    padding: "12px 20px",
    borderRadius: 15,
    fontWeight: "bold"
  },

  bottomNav: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    background: "#020817",
    display: "flex",
    justifyContent: "space-around",
    padding: 15,
    borderTop: "1px solid #1d2b44"
  },

  navItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 5,
    color: "white",
    textDecoration: "none",
    fontSize: 12
  }

};
