"use client";
import { useState } from "react";

export default function Home() {
  const [cart, setCart] = useState([]);
  const [open, setOpen] = useState(false);

  const products = [
    { id: 1, name: "Cricket Bat", price: 999 },
    { id: 2, name: "Badminton Racket", price: 499 },
    { id: 3, name: "Football", price: 799 },
  ];

  const addToCart = (p) => {
    setCart([...cart, p]);
    setOpen(true);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ background: "#0f172a", color: "white", minHeight: "100vh", fontFamily: "Arial" }}>
      
      {/* HEADER */}
      <div style={{
        padding: 15,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#1e293b"
      }}>
        <h2>Sports Fit Zone 🚀</h2>
        <button onClick={() => setOpen(!open)}>
          🛒 ({cart.length})
        </button>
      </div>

      {/* PRODUCTS */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: 20,
        padding: 20
      }}>
        {products.map((p) => (
          <div
            key={p.id}
            style={{
              background: "#1e293b",
              padding: 15,
              borderRadius: 15,
              textAlign: "center",
              transition: "0.3s",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            <img src="https://via.placeholder.com/150" style={{ borderRadius: 10 }} />
            <h3>{p.name}</h3>
            <p style={{ color: "#38bdf8" }}>₹{p.price}</p>

            <button
              onClick={() => addToCart(p)}
              style={{
                background: "#38bdf8",
                border: "none",
                padding: "8px 15px",
                borderRadius: 10,
                cursor: "pointer"
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* CART DRAWER */}
      {open && (
        <div style={{
          position: "fixed",
          right: 0,
          top: 0,
          width: "300px",
          height: "100%",
          background: "#020617",
          padding: 20,
          boxShadow: "-5px 0 10px rgba(0,0,0,0.5)"
        }}>
          <h2>🛒 Cart</h2>

          {cart.length === 0 ? (
            <p>Empty</p>
          ) : (
            cart.map((item, i) => (
              <div key={i}>
                {item.name} - ₹{item.price}
              </div>
            ))
          )}

          <h3>Total: ₹{total}</h3>

          <button
            style={{
              marginTop: 10,
              background: "orange",
              padding: 10,
              border: "none",
              borderRadius: 10
            }}
            onClick={() => alert("Payment Coming Soon 💸")}
          >
            Checkout
          </button>

          <br />
          <button onClick={() => setOpen(false)} style={{ marginTop: 10 }}>
            Close
          </button>
        </div>
      )}

    </div>
  );
}
