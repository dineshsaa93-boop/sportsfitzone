"use client";

const videos = [
  {
    title: "Full Body Workout",
    coach: "Fitness Coach",
    video:
      "https://www.w3schools.com/html/mov_bbb.mp4",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
  },

  {
    title: "Football Speed Training",
    coach: "Football Trainer",
    video:
      "https://www.w3schools.com/html/movie.mp4",
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018",
  },
];

export default function TrainingPage() {
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
          fontSize: "40px",
          marginBottom: "25px",
        }}
      >
        Training Videos 🎥
      </h1>

      {videos.map((item, index) => (
        <div
          key={index}
          style={{
            background: "#0f172a",
            padding: "15px",
            borderRadius: "20px",
            marginBottom: "25px",
          }}
        >
          <img
            src={item.image}
            alt=""
            style={{
              width: "100%",
              height: "220px",
              objectFit: "cover",
              borderRadius: "15px",
            }}
          />

          <h2
            style={{
              marginTop: "15px",
              fontSize: "28px",
            }}
          >
            {item.title}
          </h2>

          <p
            style={{
              color: "#94a3b8",
              marginBottom: "15px",
            }}
          >
            By {item.coach}
          </p>

          <video
            controls
            style={{
              width: "100%",
              borderRadius: "15px",
            }}
          >
            <source
              src={item.video}
              type="video/mp4"
            />
          </video>
        </div>
      ))}
    </div>
  );
}
