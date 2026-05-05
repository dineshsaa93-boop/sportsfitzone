"use client";

export default function Home() {
  const menu = [
    { name: "All Classes", icon: "🎥" },
    { name: "All Tests", icon: "📝" },
    { name: "My Doubts", icon: "❓" },
    { name: "Digital Books", icon: "📚" },
    { name: "Community", icon: "👥" },
    { name: "Khazana", icon: "🔒" },
    { name: "Mentorship", icon: "👨‍🏫" },
    { name: "Test Series", icon: "🔒" },
  ];

  return (
    <div style={{ fontFamily: "Arial", background: "#f3f4f6", minHeight: "100vh" }}>

      {/* 🔥 TOP BAR */}
      <div style={{
        background: "#111827",
        color: "white",
        padding: 15,
        display: "flex",
        justifyContent: "space-between"
      }}>
        <span>☰</span>
        <div>🎁 2 🔥 2 XP 296 🔔</div>
      </div>

      {/* 🎯 BATCH SECTION */}
      <div style={{ padding: 15 }}>
        <h2>Udaan 2027 🚀</h2>
        <button style={{
          background: "gold",
          padding: "5px 10px",
          borderRadius: 10,
          border: "none"
        }}>
          Upgrade Plan
        </button>
      </div>

      {/* 📦 MENU GRID */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: 15,
        padding: 15
      }}>
        {menu.map((item, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <div style={{
              background: "white",
              padding: 15,
              borderRadius: 10,
              fontSize: 20
            }}>
              {item.icon}
            </div>
            <p style={{ fontSize: 12 }}>{item.name}</p>
          </div>
        ))}
      </div>

      {/* 📅 EVENTS */}
      <div style={{ padding: 15 }}>
        <h3>Upcoming Events (0)</h3>
        <p style={{ color: "gray" }}>No upcoming events</p>
      </div>

      {/* ▶️ COURSE CARD */}
      <div style={{
        position: "fixed",
        bottom: 60,
        left: 10,
        right: 10,
        background: "#fff",
        padding: 10,
        borderRadius: 10,
        boxShadow: "0 2px 10px rgba(0,0,0,0.2)"
      }}>
        ▶️ Life Processes - Resume
      </div>

      {/* 🔻 BOTTOM NAV */}
      <div style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        background: "white",
        display: "flex",
        justifyContent: "space-around",
        padding: 10
      }}>
        <span>🏠</span>
        <span>📥</span>
        <span>📚</span>
        <span>👤</span>
      </div>

    </div>
  );
}
