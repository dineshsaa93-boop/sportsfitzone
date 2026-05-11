"use client";

const achievements = [
  {
    title: "First Workout",
    icon: "🥇",
    desc: "Completed your first workout",
  },

  {
    title: "7 Day Streak",
    icon: "🔥",
    desc: "Workout for 7 days continuously",
  },

  {
    title: "100 Pushups",
    icon: "💪",
    desc: "Completed 100 pushups",
  },

  {
    title: "Marathon Runner",
    icon: "🏃",
    desc: "Completed 10km running",
  },
];

export default function AchievementsPage() {
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
        Achievements 🌟
      </h1>

      {achievements.map((item, index) => (
        <div
          key={index}
          style={{
            background: "#0f172a",
            padding: "20px",
            borderRadius: "18px",
            marginBottom: "18px",
            display: "flex",
            gap: "18px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: "40px",
            }}
          >
            {item.icon}
          </div>

          <div>
            <h2
              style={{
                fontSize: "24px",
              }}
            >
              {item.title}
            </h2>

            <p
              style={{
                color: "#94a3b8",
                marginTop: "6px",
              }}
            >
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
