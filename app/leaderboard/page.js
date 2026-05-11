"use client";

const players = [
  {
    name: "Dinesh",
    xp: 2500,
    rank: "🥇",
  },

  {
    name: "Rahul",
    xp: 2100,
    rank: "🥈",
  },

  {
    name: "Aryan",
    xp: 1800,
    rank: "🥉",
  },
];

export default function Leaderboard() {
  return (
    <div
      style={{
        background: "#020617",
        minHeight: "100vh",
        color: "white",
        padding: "20px",
      }}
    >
      <h1
        style={{
          fontSize: "42px",
          marginBottom: "25px",
        }}
      >
        Leaderboard 🏆
      </h1>

      {players.map((item, index) => (
        <div
          key={index}
          style={{
            background: "#0f172a",
            padding: "20px",
            borderRadius: "18px",
            marginBottom: "18px",
            display: "flex",
            justifyContent:
              "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "24px",
              }}
            >
              {item.rank} {item.name}
            </h2>

            <p
              style={{
                color: "#94a3b8",
              }}
            >
              XP: {item.xp}
            </p>
          </div>

          <div
            style={{
              fontSize: "30px",
            }}
          >
            🔥
          </div>
        </div>
      ))}
    </div>
  );
}
