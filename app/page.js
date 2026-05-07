export default function Home() {
  return (
    <main className="main">

      <div className="hero">

        <p style={{color:"#9ca3af"}}>WELCOME BACK!</p>

        <h1 className="title">
          Sports Fit Zone ⚽
        </h1>

        <p className="subtitle">
          Train. Improve. Dominate.
        </p>

        <button className="upgrade">
          PREMIUM UPGRADE PLAN
        </button>

      </div>

      <div className="grid">

        {[
          ["🎥","All Training"],
          ["📝","All Tests"],
          ["❓","My Doubts"],
          ["📚","Sports Books"],
          ["👥","Community"],
          ["🏆","Challenges"],
          ["🧠","AI Coach"],
          ["📅","Events"],
        ].map((item,index)=>(

          <div className="card" key={index}>

            <div className="cardIcon">
              {item[0]}
            </div>

            <div className="cardText">
              {item[1]}
            </div>

          </div>

        ))}

      </div>

      <h2 className="sectionTitle">
        Upcoming Sessions
      </h2>

      {[1,2,3].map((item,index)=>(

        <div className="session" key={index}>

          <img
            src="https://images.unsplash.com/photo-1546519638-68e109498ffc"
          />

          <div className="sessionContent">

            <div className="live">
              03:00 PM • LIVE
            </div>

            <div className="sessionTitle">
              Cricket Batting Masterclass
            </div>

            <div className="coach">
              By Rahul Dravid
            </div>

          </div>

        </div>

      ))}

      <div className="bottomNav">

        <span>🏠</span>
        <span>🏋️</span>
        <span>🧠</span>
        <span>🛒</span>
        <span>👤</span>

      </div>

    </main>
  );
}
