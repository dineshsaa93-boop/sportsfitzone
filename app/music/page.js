"use client";

export default function MusicPage() {
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
        Gym Music 🎵
      </h1>

      <div
        style={{
          background: "#0f172a",
          padding: "20px",
          borderRadius: "20px",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f"
          alt=""
          style={{
            width: "100%",
            height: "250px",
            objectFit: "cover",
            borderRadius: "15px",
          }}
        />

        <h2
          style={{
            marginTop: "20px",
            fontSize: "28px",
          }}
        >
          Beast Mode Workout Mix 🔥
        </h2>

        <p
          style={{
            color: "#94a3b8",
            marginTop: "10px",
          }}
        >
          High Energy Gym Motivation
        </p>

        <audio
          controls
          style={{
            width: "100%",
            marginTop: "20px",
          }}
        >
          <source
            src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
            type="audio/mpeg"
          />
        </audio>
      </div>
    </div>
  );
}
