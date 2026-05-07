"use client";

import {
  Menu,
  Bell,
  Trophy,
  Flame,
  BookOpen,
  Brain,
  Dumbbell,
  ShoppingCart,
  User,
  PlayCircle,
  ClipboardList,
  MessageCircleQuestion,
  Users,
  Target,
  Bot,
  Calendar,
  ChevronRight,
} from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: <PlayCircle size={34} color="#39ff14" />,
      title: "All Training",
    },
    {
      icon: <ClipboardList size={34} color="#2f8cff" />,
      title: "All Tests",
    },
    {
      icon: <MessageCircleQuestion size={34} color="#bb6cff" />,
      title: "My Doubts",
    },
    {
      icon: <BookOpen size={34} color="#ff9d2f" />,
      title: "Sports Books",
    },
    {
      icon: <Users size={34} color="#ffd43b" />,
      title: "Community",
    },
    {
      icon: <Trophy size={34} color="#ff4d6d" />,
      title: "Challenges",
    },
    {
      icon: <Bot size={34} color="#00e5ff" />,
      title: "AI Coach",
    },
    {
      icon: <Calendar size={34} color="#4d7cff" />,
      title: "Events",
    },
  ];

  const sessions = [
    {
      title: "Cricket Batting Masterclass",
      coach: "Rahul Dravid",
      desc: "Perfect your batting technique and timing",
      time: "03:00 PM",
      img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Football Speed & Agility",
      coach: "Sunil Chhetri",
      desc: "Increase your speed and performance",
      time: "04:30 PM",
      img: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1000&auto=format&fit=crop",
    },
  ];

  return (
    <div
      style={{
        background:
          "linear-gradient(to bottom,#000814,#001d3d,#000814)",
        minHeight: "100vh",
        color: "white",
        paddingBottom: "120px",
        fontFamily: "Arial",
      }}
    >
      {/* TOP BAR */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <Menu size={34} />

        <div style={{ display: "flex", gap: "18px" }}>
          <div style={{ display: "flex", gap: "5px" }}>
            <Trophy color="#ffd43b" />
            <span>12</span>
          </div>

          <div style={{ display: "flex", gap: "5px" }}>
            <Flame color="#39ff14" />
            <span>3</span>
          </div>

          <div style={{ display: "flex", gap: "5px" }}>
            <Brain color="#39ff14" />
            <span>468</span>
          </div>

          <Bell />
        </div>
      </div>

      {/* HERO */}
      <div
        style={{
          margin: "0 18px",
          borderRadius: "30px",
          overflow: "hidden",
          position: "relative",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=1200&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "270px",
          padding: "22px",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.65)",
          }}
        />

        <div style={{ position: "relative", zIndex: 2 }}>
          <p
            style={{
              color: "#cfcfcf",
              fontSize: "18px",
              marginBottom: "10px",
            }}
          >
            WELCOME BACK!
          </p>

          <h1
            style={{
              fontSize: "52px",
              lineHeight: "54px",
              fontWeight: "900",
              marginBottom: "12px",
            }}
          >
            Sports Fit <br /> Zone ⚽
          </h1>

          <p
            style={{
              color: "#d4d4d4",
              fontSize: "22px",
            }}
          >
            Train. Improve. Dominate.
          </p>

          <button
            style={{
              marginTop: "24px",
              background: "transparent",
              color: "#39ff14",
              border: "2px solid #39ff14",
              padding: "14px 22px",
              borderRadius: "18px",
              fontSize: "20px",
              fontWeight: "bold",
              backdropFilter: "blur(10px)",
            }}
          >
            PREMIUM UPGRADE PLAN →
          </button>
        </div>
      </div>

      {/* FEATURES */}
      <div
        style={{
          margin: "20px 18px",
          background: "rgba(255,255,255,0.04)",
          borderRadius: "28px",
          padding: "22px",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(20px)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: "25px",
            textAlign: "center",
          }}
        >
          {features.map((item, i) => (
            <div key={i}>
              <div style={{ marginBottom: "12px" }}>{item.icon}</div>

              <p
                style={{
                  fontSize: "17px",
                  fontWeight: "600",
                  lineHeight: "22px",
                }}
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <button
            style={{
              marginTop: "25px",
              background: "rgba(255,255,255,0.08)",
              color: "white",
              border: "1px solid rgba(255,255,255,0.08)",
              padding: "12px 26px",
              borderRadius: "50px",
              fontSize: "18px",
            }}
          >
            Show more ▼
          </button>
        </div>
      </div>

      {/* UPCOMING */}
      <div
        style={{
          padding: "0 18px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "14px",
        }}
      >
        <h2 style={{ fontSize: "36px", fontWeight: "900" }}>
          Upcoming Sessions
        </h2>

        <p style={{ color: "#39ff14", fontSize: "22px" }}>
          View All
        </p>
      </div>

      {/* SESSION CARDS */}
      <div style={{ padding: "0 18px" }}>
        {sessions.map((item, i) => (
          <div
            key={i}
            style={{
              background: "rgba(255,255,255,0.04)",
              borderRadius: "28px",
              overflow: "hidden",
              display: "flex",
              marginBottom: "18px",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <img
              src={item.img}
              alt=""
              style={{
                width: "120px",
                height: "140px",
                objectFit: "cover",
              }}
            />

            <div
              style={{
                padding: "16px",
                flex: 1,
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  marginBottom: "10px",
                  alignItems: "center",
                }}
              >
                <span style={{ color: "#39ff14" }}>
                  ⏰ {item.time}
                </span>

                <span
                  style={{
                    background: "#ff2d55",
                    padding: "4px 10px",
                    borderRadius: "12px",
                    fontSize: "13px",
                    fontWeight: "bold",
                  }}
                >
                  LIVE
                </span>
              </div>

              <h3
                style={{
                  fontSize: "28px",
                  marginBottom: "8px",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#d4d4d4",
                  fontSize: "18px",
                  marginBottom: "6px",
                }}
              >
                By {item.coach}
              </p>

              <p
                style={{
                  color: "#9f9f9f",
                  fontSize: "15px",
                }}
              >
                {item.desc}
              </p>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingRight: "14px",
              }}
            >
              <ChevronRight size={34} />
            </div>
          </div>
        ))}
      </div>

      {/* PLAYER */}
      <div
        style={{
          position: "fixed",
          bottom: "88px",
          left: "12px",
          right: "12px",
          background: "rgba(10,10,10,0.92)",
          borderRadius: "22px",
          padding: "14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(20px)",
        }}
      >
        <div style={{ display: "flex", gap: "12px" }}>
          <img
            src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop"
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "16px",
              objectFit: "cover",
            }}
          />

          <div>
            <h3 style={{ fontSize: "24px" }}>
              Full Body Workout
            </h3>

            <p style={{ color: "#cfcfcf" }}>
              Build Power & Endurance
            </p>
          </div>
        </div>

        <button
          style={{
            background: "#39ff14",
            color: "black",
            border: "none",
            padding: "14px 20px",
            borderRadius: "16px",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          Resume
        </button>
      </div>

      {/* BOTTOM NAV */}
      <div
        style={{
          position: "fixed",
          bottom: "10px",
          left: "10px",
          right: "10px",
          background: "rgba(10,10,10,0.92)",
          borderRadius: "28px",
          display: "flex",
          justifyContent: "space-around",
          padding: "16px 10px",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(20px)",
        }}
      >
        <div style={{ textAlign: "center", color: "#39ff14" }}>
          <User />
          <p style={{ fontSize: "12px" }}>Home</p>
        </div>

        <div style={{ textAlign: "center" }}>
          <Dumbbell />
          <p style={{ fontSize: "12px" }}>Training</p>
        </div>

        <div style={{ textAlign: "center" }}>
          <Brain />
          <p style={{ fontSize: "12px" }}>AI Coach</p>
        </div>

        <div style={{ textAlign: "center" }}>
          <ShoppingCart />
          <p style={{ fontSize: "12px" }}>Store</p>
        </div>

        <div style={{ textAlign: "center" }}>
          <User />
          <p style={{ fontSize: "12px" }}>Profile</p>
        </div>
      </div>
    </div>
  );
        }
