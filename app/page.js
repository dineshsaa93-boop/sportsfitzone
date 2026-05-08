import Link from "next/link";
"use client";

import {
  Menu,
  Trophy,
  Flame,
  Bell,
  PlayCircle,
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
  ChevronRight,
  Play,
  X,
} from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: <PlayCircle size={40} color="#39ff14" />,
      title: "All Training",
    },
    {
      icon: <ClipboardList size={40} color="#2f8cff" />,
      title: "All Tests",
    },
    {
      icon: <MessageCircleQuestion size={40} color="#b967ff" />,
      title: "My Doubts",
    },
    {
      icon: <BookOpen size={40} color="#ff9d2f" />,
      title: "Sports Books",
      badge: "NEW",
    },
    {
      icon: <Users size={40} color="#ffd43b" />,
      title: "Community",
    },
    {
      icon: <Trophy size={40} color="#ff4d6d" />,
      title: "Challenges",
    },
    {
      icon: <Bot size={40} color="#00e5ff" />,
      title: "AI Coach",
    },
    {
      icon: <Calendar size={40} color="#4d7cff" />,
      title: "Events",
    },
  ];

  const sessions = [
    {
      image:
        "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?q=80&w=1000&auto=format&fit=crop",
      time: "03:00 PM",
      title: "Cricket Batting Masterclass",
      coach: "Rahul Dravid",
      desc: "Perfect your batting technique and timing",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop",
      time: "04:30 PM",
      title: "Football Speed & Agility",
      coach: "Sunil Chhetri",
      desc: "Increase your speed and on-field performance",
    },
  ];

  return (
    <main className="app">
      {/* TOP */}
      <div className="topbar">
        <Menu size={34} />

        <div className="top-right">
          <div className="stat">
            <Trophy color="#ffd43b" />
            <span>12</span>
          </div>

          <div className="stat">
            <Flame color="#39ff14" />
            <span>3</span>
          </div>

          <div className="stat">
            <Brain color="#39ff14" />
            <span>468</span>
          </div>

          <Bell />
        </div>
      </div>

      {/* HERO */}
      <div className="hero">
        <div className="overlay"></div>

        <div className="hero-content">
          <p className="welcome">WELCOME BACK!</p>

          <h1>
            Sports Fit Zone <span>⚽</span>
          </h1>

          <p className="subtitle">Train. Improve. Dominate.</p>

          <button className="premium-btn">
            PREMIUM
            <br />
            UPGRADE PLAN →
          </button>
        </div>
      </div>

      {/* FEATURES */}
      <div className="features-box">
        <div className="features-grid">
          {features.map((item, i) => (
            <div className="feature-item" key={i}>
              <div className="icon-wrap">
                {item.icon}

                {item.badge && (
                  <div className="new-badge">{item.badge}</div>
                )}
              </div>

              <p>{item.title}</p>
            </div>
          ))}
        </div>

        <div className="show-more-wrap">
          <button className="show-btn">Show more ▼</button>
        </div>
      </div>

      {/* HEADING */}
      <div className="heading-row">
        <h2>Upcoming Sessions (8)</h2>

        <p>View All →</p>
      </div>

      {/* CARDS */}
      <div className="cards-wrap">
        {sessions.map((item, i) => (
          <div className="session-card" key={i}>
            <img src={item.image} alt="" />

            <div className="card-content">
              <div className="live-row">
                <span className="time">🟢 {item.time}</span>

                <span className="live">LIVE</span>
              </div>

              <h3>{item.title}</h3>

              <h4>By {item.coach}</h4>

              <p>{item.desc}</p>
            </div>

            <div className="arrow">
              <ChevronRight size={30} />
            </div>
          </div>
        ))}
      </div>

      {/* PLAYER */}
      <div className="player">
        <div className="player-left">
          <img
            src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop"
            alt=""
          />

          <div className="play-btn">
            <Play fill="white" size={26} />
          </div>

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

      <Link href="/" className="nav-item">
<div className="bottom-nav">

  <Link href="/" className="nav-item">
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
  );
      }
