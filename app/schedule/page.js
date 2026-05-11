export default function SchedulePage() {

  const plans = [
    {
      day: "Monday",
      workout: "Chest Workout 💪"
    },

    {
      day: "Tuesday",
      workout: "Cardio + Running 🏃"
    },

    {
      day: "Wednesday",
      workout: "Leg Workout 🦵"
    },

    {
      day: "Thursday",
      workout: "Football Practice ⚽"
    },

    {
      day: "Friday",
      workout: "Shoulder Workout 🔥"
    }
  ];

  return (
    <div
      style={{
        background: "#020617",
        minHeight: "100vh",
        color: "white",
        padding: "20px",
        fontFamily: "sans-serif"
      }}
    >
      <h1
        style={{
          color: "#39ff14",
          marginBottom: "25px"
        }}
      >
        📅 Workout Schedule
      </h1>

      {plans.map((plan, index) => (

        <div
          key={index}
          style={{
            background: "#111827",
            padding: "18px",
            borderRadius: "18px",
            marginBottom: "16px"
          }}
        >
          <h2>{plan.day}</h2>

          <p
            style={{
              color: "#94a3b8",
              marginTop: "8px"
            }}
          >
            {plan.workout}
          </p>
        </div>
      ))}
    </div>
  );
}
