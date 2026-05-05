"use client";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const [dark, setDark] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const products = [
    { id: 1, name: "Cricket Bat", price: 999 },
    { id: 2, name: "Badminton Racket", price: 499 },
    { id: 3, name: "Football", price: 799 },
  ];

  const toggleFav = (p) => {
    if (favorites.find((f) => f.id === p.id)) {
      setFavorites(favorites.filter((f) => f.id !== p.id));
    } else {
      setFavorites([...favorites, p]);
    }
  };

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        padding: 20,
        fontFamily: "Arial",
        background: dark ? "#111" : "#fff",
        color: dark ? "#fff" : "#000",
        minHeight: "100vh",
      }}
    >
      <h1>Sports Fit Zone 🚀</h1>

      {/* Dark Mode */}
      <button onClick={() => setDark(!dark)}>
        {dark ? "☀️ Light" : "🌙 Dark"}
      </button>

      {/* Search */}
      <input
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginLeft: 10 }}
      />

      <h2>Products</h2>

      {filtered.map((p) => (
        <div key={p.id} style={{ marginBottom: 10 }}>
          {p.name} - ₹{p.price}
          <button onClick={() => toggleFav(p)} style={{ marginLeft: 10 }}>
            {favorites.find((f) => f.id === p.id) ? "❤️" : "🤍"}
          </button>
        </div>
      ))}

      <h2>⭐ Favorites</h2>

      {favorites.length === 0 ? (
        <p>No favorites yet</p>
      ) : (
        favorites.map((f) => (
          <div key={f.id}>
            {f.name} - ₹{f.price}
          </div>
        ))
      )}
    </div>
  );
            }
