"use client";

import {
  Trophy,
  Flame,
  Medal
} from "lucide-react";

export default function LeaderboardPage() {

  const players = [

    {
      name: "Dinesh",
      xp: 540,
      streak: 7,
      badge: "🥇"
    },

    {
      name: "Rahul",
      xp: 500,
      streak: 6,
      badge: "🥈"
    },

    {
      name: "Aryan",
      xp: 460,
      streak: 5,
      badge: "🥉"
    },

    {
      name: "Fitness Pro",
      xp: 420,
      streak: 4,
      badge: "🔥"
    }

  ];

  return (

    <div style={styles.page}>

      <h1 style={styles.heading}>
        Leaderboard 🏆
      </h1>

      {/* TOP CARD */}

      <div style={styles.topCard}>

        <Trophy
          color="#ffd633"
          size={60}
        />

        <h2>Dinesh</h2>

        <p>#1 Athlete This Week</p>

      </div>

      {/* PLAYERS */}

      {players.map((item, index) => (

        <div
          key={index}
          style={styles.card}
        >

          <div style={styles.left}>

            <div style={styles.badge}>
              {item.badge}
            </div>

            <div>

              <h2>{item.name}</h2>

              <p style={{ color: "#aaa" }}>
                {item.xp} XP
              </p>

            </div>

          </div>

          <div style={styles.right}>

            <Flame
              color="#ff7b00"
              size={25}
            />

            <span>
              {item.streak}
            </span>

          </div>

        </div>

      ))}

      {/* ACHIEVEMENT */}

      <div style={styles.achievement}>

        <Medal
          color="#39ff14"
          size={40}
        />

        <div>

          <h2>Achievement Unlocked</h2>

          <p style={{ color: "#aaa" }}>
            Completed 7 day streak 🔥
          </p>

        </div>

      </div>

    </div>

  );

}

const styles = {

  page: {
    background: "#020817",
    minHeight: "100vh",
    padding: 20,
    color: "white",
    fontFamily: "sans-serif"
  },

  heading: {
    fontSize: 35,
    marginBottom: 30
  },

  topCard: {
    background:
      "linear-gradient(135deg,#ffd633,#ff7b00)",
    padding: 30,
    borderRadius: 30,
    textAlign: "center",
    color: "black",
    marginBottom: 30
  },

  card: {
    background: "#081120",
    border:
      "1px solid #1d2b44",
    padding: 20,
    borderRadius: 22,
    marginBottom: 18,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  left: {
    display: "flex",
    alignItems: "center",
    gap: 15
  },

  badge: {
    fontSize: 30
  },

  right: {
    display: "flex",
    alignItems: "center",
    gap: 8
  },

  achievement: {
    marginTop: 35,
    background: "#081120",
    padding: 25,
    borderRadius: 25,
    display: "flex",
    gap: 20,
    alignItems: "center"
  }

};
