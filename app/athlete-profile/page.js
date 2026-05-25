"use client";

import {
  Trophy,
  Flame,
  Medal,
  Shield,
  Star,
  Crown
} from "lucide-react";

export default function AthleteProfilePage() {

  const achievements = [

    "🏆 Won Cricket Champions Cup",

    "🔥 30 Day Workout Streak",

    "🥇 MVP Player Award",

    "⚡ Reached Elite Athlete Rank"

  ];

  return (

    <div style={styles.page}>

      {/* PROFILE TOP */}

      <div style={styles.profileCard}>

        <img
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
          style={styles.avatar}
        />

        <h1 style={styles.name}>
          Dinesh
        </h1>

        <p style={styles.rank}>
          👑 Elite Athlete
        </p>

        <div style={styles.levelBox}>

          <Flame
            color="#39ff14"
            size={24}
          />

          <span>
            Level 25 • 25,400 XP
          </span>

        </div>

      </div>

      {/* STATS */}

      <div style={styles.statsRow}>

        <div style={styles.statCard}>

          <Trophy
            color="#ffd700"
            size={30}
          />

          <h2>
            12
          </h2>

          <p>
            Tournaments
          </p>

        </div>

        <div style={styles.statCard}>

          <Medal
            color="#ff4d88"
            size={30}
          />

          <h2>
            8
          </h2>

          <p>
            Medals
          </p>

        </div>

        <div style={styles.statCard}>

          <Star
            color="#3ea6ff"
            size={30}
          />

          <h2>
            #4
          </h2>

          <p>
            Global Rank
          </p>

        </div>

      </div>

      {/* ACHIEVEMENTS */}

      <div style={styles.achievementBox}>

        <div style={styles.sectionTop}>

          <Crown
            color="#ffd700"
            size={28}
          />

          <h2>
            Achievements
          </h2>

        </div>

        {achievements.map(
          (item, index) => (

          <div
            key={index}
            style={styles.achievementCard}
          >

            {item}

          </div>

        ))}

      </div>

      {/* TOURNAMENT HISTORY */}

      <div style={styles.historyBox}>

        <div style={styles.sectionTop}>

          <Shield
            color="#39ff14"
            size={28}
          />

          <h2>
            Tournament History
          </h2>

        </div>

        <div style={styles.historyCard}>

          <div>

            <h3>
              Cricket Champions Cup
            </h3>

            <p style={{ color: "#aaa" }}>
              1st Position 🥇
            </p>

          </div>

          <span style={styles.xp}>
            +1500 XP
          </span>

        </div>

        <div style={styles.historyCard}>

          <div>

            <h3>
              Football League
            </h3>

            <p style={{ color: "#aaa" }}>
              MVP Award 🔥
            </p>

          </div>

          <span style={styles.xp}>
            +900 XP
          </span>

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

  profileCard: {
    background:
      "linear-gradient(135deg,#081120,#102400)",
    borderRadius: 30,
    padding: 30,
    textAlign: "center",
    border: "1px solid #39ff14"
  },

  avatar: {
    width: 130,
    height: 130,
    borderRadius: "50%",
    objectFit: "cover",
    border: "4px solid #39ff14"
  },

  name: {
    marginTop: 18,
    fontSize: 38
  },

  rank: {
    color: "#ffd700",
    marginTop: 8,
    fontWeight: "bold",
    fontSize: 18
  },

  levelBox: {
    marginTop: 20,
    background: "#111827",
    padding: 14,
    borderRadius: 18,
    display: "inline-flex",
    gap: 10,
    alignItems: "center"
  },

  statsRow: {
    marginTop: 30,
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: 15
  },

  statCard: {
    background: "#081120",
    padding: 20,
    borderRadius: 24,
    textAlign: "center",
    border: "1px solid #1d2b44"
  },

  achievementBox: {
    marginTop: 35,
    background: "#081120",
    borderRadius: 28,
    padding: 22,
    border: "1px solid #1d2b44"
  },

  sectionTop: {
    display: "flex",
    gap: 12,
    alignItems: "center",
    marginBottom: 20
  },

  achievementCard: {
    background: "#111827",
    padding: 16,
    borderRadius: 18,
    marginBottom: 15
  },

  historyBox: {
    marginTop: 35,
    background: "#081120",
    borderRadius: 28,
    padding: 22,
    border: "1px solid #1d2b44"
  },

  historyCard: {
    background: "#111827",
    padding: 18,
    borderRadius: 18,
    marginBottom: 16,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  xp: {
    color: "#39ff14",
    fontWeight: "bold"
  }

};
