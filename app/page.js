"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "🏏 Cricket Bat", price: 999 },
    { id: 2, name: "🎾 Badminton Racket", price: 499 },
    { id: 3, name: "⚽ Football", price: 799 },
  ];

  // 👉 Load cart from localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // 👉 Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeItem = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      
      <h1 style={{ textAlign: "center" }}>Sports Fit Zone 🚀</h1>

      <h2>Products</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        {products.map((p) => (
          <div key={p.id} style={{ border: "1px solid gray", padding: "10px" }}>
            <h3>{p.name}</h3>
            <p>₹{p.price}</p>
            <button onClick={() => addToCart(p)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: "30px" }}>🛒 Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ₹{item.price}
              <button
                onClick={() => removeItem(index)}
                style={{ marginLeft: "10px" }}
              >
                ❌ Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      <h3>Total: ₹{total}</h3>

      <button
        onClick={() => alert("Payment Successful ✅")}
        style={{ marginTop: "10px" }}
      >
        Checkout
      </button>

    </div>
  );
}
