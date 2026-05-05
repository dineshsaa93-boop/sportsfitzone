"use client";

export default function Training() {
  return (
    <div style={{ padding: 20 }}>
      <h1>🏋️ Training</h1>

      <div style={card}>
        <h3>🏏 Cricket Practice</h3>
        <button>Start</button>
      </div>

      <div style={card}>
        <h3>🏸 Badminton Drills</h3>
        <button>Start</button>
      </div>
    </div>
  );
}

const card = {
  background: "white",
  padding: 15,
  marginTop: 10,
  borderRadius: 10
};
