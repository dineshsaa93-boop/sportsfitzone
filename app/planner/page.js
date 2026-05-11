"use client";

const plans = [
  {
    day: "Monday",
    workout: "Chest Workout 💪",
  },

  {
    day: "Tuesday",
    workout: "Cardio + Running 🏃",
  },

  {
    day: "Wednesday",
    workout: "Leg Workout 🦵",
  },

  {
    day: "Thursday",
    workout: "Football Training ⚽",
  },

  {
    day: "Friday",
    workout: "Shoulder Workout 🔥",
  },
];

export default function PlannerPage() {
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
        Workout Planner 📅
      </h1>

      {plans.map((item, index) => (
        <div
          key={index}
          style={{
            background: "#0f172a",
            padding: "20px",
            borderRadius: "18px",
            marginBottom: "18px",
          }}
        >
          <h2
            style={{
              fontSize: "26px",
            }}
          >
            {item.day}
          </h2>

          <p
            style={{
              marginTop: "10px",
              color: "#38bdf8",
              fontSize: "20px",
            }}
          >
            {item.workout}
          </p>
        </div>
      ))}
    </div>
  );
}
