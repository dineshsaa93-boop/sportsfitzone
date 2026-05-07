export default function Home() {
  return (
    <div style={{
      background:"#0f172a",
      minHeight:"100vh",
      color:"white",
      padding:"20px",
      fontFamily:"sans-serif"
    }}>

      <h1 style={{
        fontSize:"32px",
        fontWeight:"bold"
      }}>
        Sports Fit Zone 🚀
      </h1>

      <p>Ultimate Sports Dashboard</p>

      <div style={{
        marginTop:"30px",
        display:"grid",
        gap:"15px"
      }}>

        <div style={{
          background:"#1e293b",
          padding:"20px",
          borderRadius:"15px"
        }}>
          🏏 Cricket Training
        </div>

        <div style={{
          background:"#1e293b",
          padding:"20px",
          borderRadius:"15px"
        }}>
          ⚽ Football Coaching
        </div>

        <div style={{
          background:"#1e293b",
          padding:"20px",
          borderRadius:"15px"
        }}>
          🥊 AI Coach
        </div>

        <div style={{
          background:"#1e293b",
          padding:"20px",
          borderRadius:"15px"
        }}>
          🛒 DP Store
        </div>

      </div>

    </div>
  )
}
