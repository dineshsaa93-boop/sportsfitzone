export default function Home() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>

      <h1 style={{ textAlign: "center" }}>Sports Fit Zone 🚀</h1>

      <div style={{ display: "flex", gap: "20px", marginTop: "30px" }}>

        {/* Product 1 */}
        <div style={{ border: "1px solid gray", padding: "10px" }}>
          <img src="https://via.placeholder.com/150" />
          <h3>🏏 Cricket Bat</h3>
          <p>₹999</p>
          <button>Buy</button>
        </div>

        {/* Product 2 */}
        <div style={{ border: "1px solid gray", padding: "10px" }}>
          <img src="https://via.placeholder.com/150" />
          <h3>🎾 Badminton Racket</h3>
          <p>₹499</p>
          <button>Buy</button>
        </div>

        {/* Product 3 */}
        <div style={{ border: "1px solid gray", padding: "10px" }}>
          <img src="https://via.placeholder.com/150" />
          <h3>⚽ Football</h3>
          <p>₹799</p>
          <button>Buy</button>
        </div>

      </div>

    </div>
  );
}
