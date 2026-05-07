export default function Home() {
  const cards = [
    { title: "Cricket Training 🏏" },
    { title: "Football Coaching ⚽" },
    { title: "AI Coach 🤖" },
    { title: "Fitness Tracker 💪" },
    { title: "Live Matches 🔥" },
    { title: "DP Store 🛒" },
  ];

  return (
    <div
      style={{
        background: "#0f172a",
        minHeight: "100vh",
        color: "white",
        fontFamily: "sans-serif",
        paddingBottom: "100px",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          padding: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h1 style={{ margin: 0, fontSize: "30px" }}>
            Sports Fit Zone 🚀
          </h1>

          <p style={{ color: "#94a3b8" }}>
            Ultimate Sports Dashboard
          </p>
        </div>

        <div
          style={{
            background: "#1e293b",
            padding: "10px",
            borderRadius: "12px",
          }}
        >
          🔔
        </div>
      </div>

      {/* HERO */}
      <div
        style={{
          margin: "20px",
          padding: "25px",
          borderRadius: "25px",
          background:
            "linear-gradient(135deg,#2563eb,#7c3aed)",
        }}
      >
        <h2>Train Like a Champion 🏆</h2>

        <p>
          Watch training videos, improve fitness,
          and become stronger every day.
        </p>

        <button
          style={{
            marginTop: "10px",
            padding: "12px 20px",
            border: "none",
            borderRadius: "12px",
            background: "white",
            fontWeight: "bold",
          }}
        >
          Start Training
        </button>
      </div>

      {/* CARDS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "15px",
          padding: "20px",
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              background: "#1e293b",
              padding: "25px",
              borderRadius: "20px",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "18px",
              boxShadow: "0 0 10px rgba(0,0,0,0.3)",
            }}
          >
            {card.title}
          </div>
        ))}
      </div>

      {/* BOTTOM NAVIGATION */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          background: "#111827",
          display: "flex",
          justifyContent: "space-around",
          padding: "15px 0",
          borderTop: "1px solid #334155",
        }}
      >
        <div>🏠</div>
        <div>🎥</div>
        <div>🤖</div>
        <div>🛒</div>
        <div>👤</div>
      </div>
    </div>
  );
}
