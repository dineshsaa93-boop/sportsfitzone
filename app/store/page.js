"use client";

const products = [
  {
    name: "Football",
    price: "₹999",
    image:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974",
  },

  {
    name: "Running Shoes",
    price: "₹2999",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },

  {
    name: "Gym Dumbbell",
    price: "₹1499",
    image:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd",
  },
];

export default function ShopPage() {
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
        Sports Shop 🛒
      </h1>

      {products.map((item, index) => (
        <div
          key={index}
          style={{
            background: "#0f172a",
            borderRadius: "20px",
            padding: "15px",
            marginBottom: "25px",
          }}
        >
          <img
            src={item.image}
            alt=""
            style={{
              width: "100%",
              height: "220px",
              objectFit: "cover",
              borderRadius: "15px",
            }}
          />

          <h2
            style={{
              marginTop: "15px",
              fontSize: "28px",
            }}
          >
            {item.name}
          </h2>

          <p
            style={{
              color: "#38bdf8",
              fontSize: "22px",
              marginTop: "8px",
            }}
          >
            {item.price}
          </p>

          <button
            style={{
              marginTop: "15px",
              background: "#2563eb",
              color: "white",
              border: "none",
              padding: "14px 24px",
              borderRadius: "12px",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Buy Now 🚀
          </button>
        </div>
      ))}
    </div>
  );
}
