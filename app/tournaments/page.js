"use client";

import { useState } from "react";

import {
  Trophy,
  Users,
  Clock3,
  Flame,
  Medal,
  PlusCircle
} from "lucide-react";

export default function TournamentPage() {

  const [joined, setJoined] =
    useState(false);

  const tournaments = [

    {
      title:
        "Cricket Champions Cup",

      game:
        "Cricket",

      players:
        "240 Players",

      prize:
        "₹25,000 Prize Pool",

      xp:
        "+1500 XP",

      time:
        "Starts Today 7 PM",

      image:
        "https://images.unsplash.com/photo-1546519638-68e109498ffc"
    },

    {
      title:
        "Football Ultimate League",

      game:
        "Football",

      players:
        "180 Players",

      prize:
        "₹18,000 Prize Pool",

      xp:
        "+1200 XP",

      time:
        "Tomorrow 5 PM",

      image:
        "https://images.unsplash.com/photo-1517466787929-bc90951d0974"
    },

    {
      title:
        "Gym Beast Challenge",

      game:
        "Fitness",

      players:
        "520 Players",

      prize:
        "₹50,000 Prize Pool",

      xp:
        "+3000 XP",

      time:
        "Sunday 8 PM",

      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
    }

  ];

  return (

    <div style={styles.page}>

      {/* HEADER */}

      <div style={styles.header}>

        <h1 style={styles.heading}>
          🏆 Tournaments
        </h1>

        <button style={styles.createBtn}>

          <PlusCircle size={22} />

          Create

        </button>

      </div>

      {/* TOP INFO */}

      <div style={styles.topCard}>

        <Trophy
          color="#ffd700"
          size={45}
        />

        <div>

          <h2>
            Compete With Athletes
          </h2>

          <p style={{ color: "#aaa" }}>
            Join tournaments, win prizes
            and climb leaderboard 🚀
          </p>

        </div>

      </div>

      {/* TOURNAMENTS */}

      {tournaments.map(
        (item, index) => (

        <div
          key={index}
          style={styles.card}
        >

          <img
            src={item.image}
            style={styles.image}
          />

          <div style={styles.content}>

            <h2>
              {item.title}
            </h2>

            <p style={styles.game}>
              {item.game}
            </p>

            {/* INFO */}

            <div style={styles.infoRow}>

              <div style={styles.infoBox}>

                <Users size={18} />

                <span>
                  {item.players}
                </span>

              </div>

              <div style={styles.infoBox}>

                <Clock3 size={18} />

                <span>
                  {item.time}
                </span>

              </div>

            </div>

            {/* REWARDS */}

            <div style={styles.rewardBox}>

              <div style={styles.rewardItem}>

                <Medal
                  color="#ffd700"
                  size={22}
                />

                <span>
                  {item.prize}
                </span>

              </div>

              <div style={styles.rewardItem}>

                <Flame
                  color="#39ff14"
                  size={22}
                />

                <span>
                  {item.xp}
                </span>

              </div>

            </div>

            {/* JOIN */}

            <button
              style={styles.joinBtn}
              onClick={() =>
                setJoined(true)
              }
            >

              {joined
                ? "Joined ✅"
                : "Join Tournament"}

            </button>

          </div>

        </div>

      ))}

      {/* LEADERBOARD */}

      <div style={styles.leaderboardBox}>

        <h2>
          🔥 Top Tournament Players
        </h2>

        <div style={styles.playerRow}>
          <span>🥇 Aryan</span>
          <span>25,000 XP</span>
        </div>

        <div style={styles.playerRow}>
          <span>🥈 Dinesh</span>
          <span>21,400 XP</span>
        </div>

        <div style={styles.playerRow}>
          <span>🥉 Pragati</span>
          <span>18,200 XP</span>
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

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  heading: {
    fontSize: 38
  },

  createBtn: {
    background: "#39ff14",
    border: "none",
    padding: "12px 18px",
    borderRadius: 14,
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    gap: 8
  },

  topCard: {
    marginTop: 25,
    background: "#081120",
    padding: 22,
    borderRadius: 28,
    display: "flex",
    gap: 20,
    alignItems: "center",
    border: "1px solid #1d2b44"
  },

  card: {
    marginTop: 30,
    background: "#081120",
    borderRadius: 30,
    overflow: "hidden",
    border: "1px solid #1d2b44"
  },

  image: {
    width: "100%",
    height: 220,
    objectFit: "cover"
  },

  content: {
    padding: 20
  },

  game: {
    color: "#39ff14",
    marginTop: 8,
    fontWeight: "bold"
  },

  infoRow: {
    marginTop: 20,
    display: "flex",
    gap: 15,
    flexWrap: "wrap"
  },

  infoBox: {
    background: "#111827",
    padding: "10px 14px",
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    gap: 8
  },

  rewardBox: {
    marginTop: 20,
    display: "flex",
    justifyContent: "space-between",
    gap: 15
  },

  rewardItem: {
    flex: 1,
    background: "#111827",
    padding: 15,
    borderRadius: 18,
    display: "flex",
    alignItems: "center",
    gap: 10
  },

  joinBtn: {
    marginTop: 25,
    width: "100%",
    padding: 16,
    border: "none",
    borderRadius: 16,
    background: "#39ff14",
    fontWeight: "bold",
    fontSize: 16
  },

  leaderboardBox: {
    marginTop: 40,
    background:
      "linear-gradient(135deg,#2b1800,#3d2600)",
    padding: 25,
    borderRadius: 30,
    border: "1px solid #ffd700"
  },

  playerRow: {
    marginTop: 18,
    background: "#111827",
    padding: 15,
    borderRadius: 16,
    display: "flex",
    justifyContent: "space-between"
  }

};
