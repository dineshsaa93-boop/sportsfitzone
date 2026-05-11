export default function DietPage() {

  const diets = [
    {
      title: "Muscle Gain Diet 💪",
      foods: [
        "Milk",
        "Banana",
        "Peanut Butter",
        "Eggs",
        "Paneer",
      ],
    },

    {
      title: "Weight Loss Diet 🔥",
      foods: [
        "Oats",
        "Salad",
        "Green Tea",
        "Apple",
        "Boiled Vegetables",
      ],
    },

    {
      title: "Student Healthy Diet 📚",
      foods: [
        "Dry Fruits",
        "Milk",
        "Chapati",
        "Rice",
        "Seasonal Fruits",
      ],
    },
  ];

  return (
    <div
      style={{
        background: "#020817",
        minHeight: "100vh",
        color: "white",
        padding: 20,
        fontFamily: "sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: 40,
          marginBottom: 30,
        }}
      >
        Diet Planner 🍎
      </h1>

      {diets.map((diet, index) => (
        <div
          key={index}
          style={{
            background: "#081120",
            padding: 20,
            borderRadius: 25,
            marginBottom: 25,
            border: "1px solid #1d2b44",
          }}
        >
          <h2 style={{ marginBottom: 15 }}>
            {diet.title}
          </h2>

          {diet.foods.map((food, i) => (
            <p
              key={i}
              style={{
                color: "#aaa",
                marginBottom: 8,
              }}
            >
              ✅ {food}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}
