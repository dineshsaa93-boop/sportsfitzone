export default function TrainingPage() {
  const videos = [
    {
      title: "Full Body Strength",
      coach: "Rahul Fitness",
      time: "20 MIN",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
    },
    {
      title: "Football Speed Drill",
      coach: "Sunil Coach",
      time: "15 MIN",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018"
    },
    {
      title: "Cricket Batting Masterclass",
      coach: "Rahul Dravid",
      time: "30 MIN",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e"
    }
  ];

  return (
    <main style={{
      background:"#020817",
      minHeight:"100vh",
      color:"white",
      padding:"20px"
    }}>
      <h1 style={{
        fontSize:"32px",
        marginBottom:"20px"
      }}>
        Training 🔥
      </h1>

      {videos.map((video,index)=>(
        <div
          key={index}
          style={{
            background:"#0f172a",
            borderRadius:"20px",
            padding:"15px",
            marginBottom:"20px",
            border:"1px solid #1e293b"
          }}
        >
          <img
            src={video.image}
            style={{
              width:"100%",
              height:"200px",
              objectFit:"cover",
              borderRadius:"15px"
            }}
          />

          <h2 style={{marginTop:"10px"}}>
            {video.title}
          </h2>

          <p>{video.coach}</p>

          <button style={{
            marginTop:"10px",
            background:"#22c55e",
            border:"none",
            padding:"10px 20px",
            borderRadius:"10px",
            color:"black",
            fontWeight:"bold"
          }}>
            ▶ Watch Now
          </button>
        </div>
      ))}
    </main>
  );
}
