"use client";

export default function Home() {
  const products = [
    { id: 1, name: "Cricket Bat", price: 999 },
    { id: 2, name: "Badminton Racket", price: 499 },
    { id: 3, name: "Football", price: 799 },
  ];

  return (
    <div style={{ fontFamily: "Arial", background: "#0f172a", minHeight: "100vh", color: "white" }}>
      
      {/* 🔥 HERO SECTION */}
      <div style={{ padding: 20, textAlign: "center" }}>
        <h1 style={{ fontSize: "30px", color: "#38bdf8" }}>
          Sports Fit Zone 🚀
        </h1>
        <p style={{ color: "#94a3b8" }}>
          Train • Play • Improve
        </p>
      </div>

      {/* 🛍 PRODUCTS */}
      <div style={{ padding: 20 }}>
        <h2>🔥 Trending Products</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 20,
          marginTop: 20
        }}>
          {products.map((p) => (
            <div key={p.id} style={{
              background: "#1e293b",
              padding: 15,
              borderRadius: 15,
              textAlign: "center",
              transition: "0.3s"
            }}>
              <img
                src="https://via.placeholder.com/150"
                style={{ borderRadius: 10 }}
              />
              <h3>{p.name}</h3>
              <p style={{ color: "#38bdf8" }}>₹{p.price}</p>

              <button style={{
                background: "#38bdf8",
                border: "none",
                padding: "8px 15px",
                borderRadius: 10,
                cursor: "pointer"
              }}>
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
