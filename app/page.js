"use client";
import { useState } from "react";
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
const [showAll, setShowAll] = useState(false);
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

{/* NEW DASHBOARD UI */}

<div style={styles.dashboardContainer}>

  <div style={styles.greetingRow}>

    <div>
      <p style={styles.welcome}>Good to see you,</p>

      <h1 style={styles.greetingTitle}>
        Dinesh 👋
      </h1>

      <p style={styles.greetingSub}>
        Focus today. <span style={{ color: "#39ff14" }}>Conquer</span> tomorrow.
      </p>
    </div>

    <div style={styles.streakCard}>
      <Flame color="#39ff14" size={40} />

      <div>
        <h2>7 DAY STREAK</h2>
        <p style={{ color: "#aaa" }}>Keep it up!</p>
      </div>
    </div>

  </div>

  <div style={styles.xpCard}>

    <div style={styles.xpTop}>
      <div>
        <p style={{ color: "#aaa" }}>XP PROGRESS</p>

        <h2 style={{ color: "#39ff14" }}>
          540 <span style={{ color: "white" }}>/1000 XP</span>
        </h2>
      </div>

      <div>
        <p style={{ color: "#aaa" }}>LEVEL</p>
        <h1 style={{ color: "#39ff14" }}>5</h1>
      </div>
    </div>

    <div style={styles.progressBar}>
      <div style={styles.progressFill}></div>
    </div>

  </div>

  <div style={styles.statsGrid}>

    <div style={styles.statCardOrange}>
      <Flame color="#ff7b00" size={34} />
      <h1>1240</h1>
      <p>CALORIES</p>
    </div>

    <div style={styles.statCardGreen}>
      <Dumbbell color="#39ff14" size={34} />
      <h1>18</h1>
      <p>WORKOUTS</p>
    </div>

    <div style={styles.statCardPurple}>
      <Brain color="#d946ef" size={34} />
      <h1>540</h1>
      <p>XP POINTS</p>
    </div>

    <div style={styles.statCardBlue}>
      <Trophy color="#3ea6ff" size={34} />
      <h1>7</h1>
      <p>DAY STREAK</p>
    </div>

  </div>

  <div style={styles.premiumBanner}>

    <div>
      <h2>Go Premium</h2>
      <p style={{ color: "#aaa" }}>
        Unlock all features and achieve your best.
      </p>
    </div>

    <button style={styles.upgradeBtn}>
      Upgrade Now
    </button>

  </div>

</div>
      {/* FEATURES */}
      <div style={styles.featureBox}>

        <div style={styles.featureGrid}>
          {(showAll ? features : features.slice(0, 6)).map((item, index) => (
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

        <button
  style={styles.showMore}
  onClick={() => setShowAll(!showAll)}
>
  {showAll ? "Show Less" : "Show More"}
</button>

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
    paddingBottom: 220,
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

  dashboardContainer: {
  marginTop: 25,
    width:"100%"
},

greetingRow: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 15
},

greetingTitle: {
  fontSize: 52,
  fontWeight: "bold",
  marginTop: 5,
  lineHeight: 1.1
},

greetingSub: {
  color: "#aaa",
  marginTop: 10,
  fontSize: 20
},

streakCard: {
  background: "#081120",
  border: "1px solid #1d2b44",
  borderRadius: 24,
  padding: 20,
  width: 180
},

xpCard: {
  marginTop: 25,
  background:
    "linear-gradient(135deg,#081120,#0d1b2e)",
  border: "1px solid #1d2b44",
  borderRadius: 30,
  padding: 25
},

xpTop: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
},

progressBar: {
  marginTop: 20,
  height: 12,
  width: "100%",
  background: "#1d2b44",
  borderRadius: 20,
  overflow: "hidden"
},

progressFill: {
  width: "68%",
  height: "100%",
  background: "#39ff14",
  borderRadius: 20
},

statsGrid: {
  marginTop: 25,
  display: "grid",
  gridTemplateColumns: "repeat(4,1fr)",
  gap: 18
},

statCard: {
  background: "#081120",
  borderRadius: 24,
  padding: 22,
  border: "1px solid #1d2b44",
  minHeight: 180
},
premiumBanner: {
  marginTop: 25,
  background:
    "linear-gradient(90deg,#081120,#102400)",
  borderRadius: 28,
  padding: 22,
  border: "1px solid #1d2b44",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
},

featureBox: {
overflow: "hidden",
  minHeight: 650, 
    marginTop: 30,
    background: "#081120",
    borderRadius: 30,
    padding: 25,
    border: "1px solid #1d2b44"
  },

  featureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: 20
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
  marginTop: 20,
  width: "100%",
  padding: 14,
  borderRadius: 14,
  background: "#111827",
  color: "white",
  border: "1px solid #1f2937",
  fontSize: 16,
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
