"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");

  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "🏏 Cricket Bat", price: 999 },
    { id: 2, name: "🎾 Badminton Racket", price: 499 },
    { id: 3, name: "⚽ Football", price: 799 },
  ];

  // Load user + cart
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

    if (savedUser) setUser(savedUser);
    setCart(savedCart);
  }, []);

  // Save cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const login = () => {
    if (name.trim() === "") return alert("Enter name");
    localStorage.setItem("user", name);
    setUser(name);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const addToCart = (p) => setCart([...cart, p]);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  // 👉 अगर login नहीं है
  if (!user) {
    return (
      <div style={{ padding: 20 }}>
        <h1>Login</h1>
        <input
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={login}>Login</button>
      </div>
    );
  }

  // 👉 login हो गया तो main app
  return (
    <div style={{ padding: 20 }}>
      <h1>Welcome {user} 👋</h1>
      <button onClick={logout}>Logout</button>

      <h2>Products</h2>
      {products.map((p) => (
        <div key={p.id}>
          {p.name} - ₹{p.price}
          <button onClick={() => addToCart(p)}>Add</button>
        </div>
      ))}

      <h2>Cart</h2>
      {cart.map((item, i) => (
        <div key={i}>
          {item.name} - ₹{item.price}
        </div>
      ))}

      <h3>Total: ₹{total}</h3>
    </div>
  );
}
