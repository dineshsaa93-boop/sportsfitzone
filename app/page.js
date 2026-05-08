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
  X,
} from "lucide-react";

export default function HomePage() {
  const features = [
    {
      icon: <MonitorPlay size={38} color="#22ff66" />,
      title: "All Training",
    },
    {
      icon: <ClipboardList size={38} color="#2f8fff" />,
      title: "All Tests",
    },
    {
      icon: <MessageCircleQuestion size={38} color="#c266ff" />,
      title: "My Doubts",
    },
    {
      icon: <BookOpen size={38} color="#ff9d2f" />,
      title: "Sports Books",
      badge: "NEW",
    },
    {
      icon: <Users size={38} color="#ffd43b" />,
      title: "Community",
    },
    {
      icon: <Trophy size={38} color="#ff4d6d" />,
      title: "Challenges",
    },
    {
      icon: <Bot size={38} color="#00e5ff" />,
      title: "AI Coach",
    },
    {
      icon: <Calendar size={38} color="#4d7cff" />,
      title: "Events",
    },
  ];

  const sessions = [
    {
      title: "Cricket Batting Masterclass",
      coach: "Rahul Dravid",
      time: "03:00 PM",
      desc: "Perfect your batting technique and timing",
      image:
        "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Football Speed & Agility",
      coach: "Sunil Chhetri",
      time: "04:30 PM",
      desc: "Increase your speed and on-field performance",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <main className="home-page">
      <div className="topbar">
        <Menu color="white" size={34} />

        <div className="stats">
          <div className="stat-item">
            <Trophy color="#ffcc33" size={24} />
            <span>12</span>
          </div>

          <div className="stat-item">
            <Flame color="#39ff14" size={24} />
            <span>3</span>
          </div>

          <div className="stat-item">
            <div className="xp-box">XP</div>
            <span>468</span>
          </div>

          <Bell color="white" size={24} />
        </div>
      </div>

      <section className="hero-section">
        <div className="overlay">
          <p className="welcome">WELCOME BACK!</p>

          <h1>
            Sports Fit Zone ⚽
          </h1>

          <p className="tagline">
            Train. Improve. Dominate.
          </p>

          <button className="premium-btn">
            PREMIUM
            <br />
            UPGRADE PLAN
          </button>
        </div>
      </section>

      <section className="feature-box">
        <div className="feature-grid">
          {features.map((item, index) => (
              <Link
  href={
    item.title === "All Training"
      ? "/training"
      : item.title === "AI Coach"
      ? "/ai-coach"
      : item.title === "Sports Books"
      ? "/store"
      : item.title === "All Tests"
      ? "/tests"
      : item.title === "My Doubts"
      ? "/doubts"
      : item.title === "Community"
      ? "/community"
      : item.title === "Challenges"
      ? "/challenges"
      : item.title === "Events"
      ? "/events"
      : "/"
  }
  className="feature-card"
  key={index}
>           <div className="feature-icon">
                {item.icon}
              </div>

              {item.badge && (
                <div className="badge">
                  {item.badge}
              </Link>

              <p>{item.title}</p>
            </div>
          ))}
        </div>

        <button className="show-more">
          Show more
        </button>
      </section>

      <div className="section-header">
        <h2>Upcoming Sessions (8)</h2>
        <span>View All</span>
      </div>

      {sessions.map((item, index) => (
        <div className="session-card" key={index}>
          <img src={item.image} alt="session" />

          <div className="session-info">
            <div className="time-row">
              <span>{item.time}</span>
              <div className="live-badge">LIVE</div>
            </div>

            <h3>{item.title}</h3>
            <h4>By {item.coach}</h4>
            <p>{item.desc}</p>
          </div>

          <ChevronRight color="white" />
        </div>
      ))}

      <div className="player-bar">
        <div className="player-left">
          <img
            src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=500&auto=format&fit=crop"
            alt="workout"
          />

          <div>
            <h3>Full Body Strength Workout</h3>
            <p>Build Power & Endurance</p>
          </div>
        </div>

        <div className="player-right">
          <button>Resume</button>
          <X color="#aaa" />
        </div>
      </div>

      <div className="bottom-nav">
        <Link href="/" className="nav-item active">
          <User />
          <span>Home</span>
        </Link>

        <Link href="/training" className="nav-item">
          <Dumbbell />
          <span>Training</span>
        </Link>

        <Link href="/ai-coach" className="nav-item">
          <Brain />
          <span>AI Coach</span>
        </Link>

        <Link href="/store" className="nav-item">
          <ShoppingCart />
          <span>Store</span>
        </Link>

        <Link href="/profile" className="nav-item">
          <User />
          <span>Profile</span>
        </Link>
      </div>
    </main>
  );
    }
