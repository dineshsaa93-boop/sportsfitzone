"use client";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");

  const products = [
    { id: 1, name: "Cricket Bat", price: 999 },
    { id: 2, name: "Badminton Racket", price: 499 },
    { id: 3, name: "Football", price: 799 },
  ];

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: 20, fontFamily: "Arial", background: "#f5f5f5", minHeight: "100vh" }}>
      
      <h1 style={{ textAlign: "center" }}>Sports Fit Zone 🚀</h1>

      <input
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: 10,
          width: "100%",
          marginBottom: 20,
          borderRadius: 10,
          border: "1px solid gray",
        }}
      />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
        {filtered.map((p) => (
          <div
            key={p.id}
            style={{
              background: "#fff",
              padding: 15,
              borderRadius: 15,
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            <img src="https://via.placeholder.com/150" style={{ borderRadius: 10 }} />
            <h3>{p.name}</h3>
            <p>₹{p.price}</p>
            <button
              style={{
                padding: "8px 15px",
                borderRadius: 8,
                background: "orange",
                border: "none",
                cursor: "pointer",
              }}
            >
              Buy
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}
