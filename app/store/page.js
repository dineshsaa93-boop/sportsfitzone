"use client";

export default function Store() {
  const items = [
    { name: "🏏 Cricket Bat", price: "₹999" },
    { name: "🏸 Badminton Racket", price: "₹499" },
    { name: "⚽ Football", price: "₹799" },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h1>🏪 DP Store</h1>

      {items.map((item, i) => (
        <div key={i} style={{
          background: "white",
          padding: 15,
          marginTop: 10,
          borderRadius: 10
        }}>
          <h3>{item.name}</h3>
          <p>{item.price}</p>
          <button>Buy Now</button>
        </div>
      ))}
    </div>
  );
}
