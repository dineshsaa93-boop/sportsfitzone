"use client";

import { useState } from "react";

import {
  Mic,
  Users,
  Trophy,
  Clock3,
  ShieldCheck
} from "lucide-react";

export default function MatchRoomPage() {

  const [ready, setReady] =
    useState(false);

  const players = [

    {
      name: "Dinesh",
      status: "READY ✅"
    },

    {
      name: "Aryan",
      status: "READY ✅"
    },

    {
      name: "Pragati",
      status: "WAITING ⏳"
    },

    {
      name: "Rohan",
      status: "READY ✅"
    }

  ];

  return (

    <div style={styles.page}>

      {/* HEADER */}

      <div style={styles.header}>

        <div>

          <h1>
            🏆 Match Room
          </h1>

          <p style={{ color: "#aaa" }}>
            Cricket Champions Cup
          </p>

        </div>

        <div style={styles.liveBadge}>
          LIVE
        </div>

      </div>

      {/* MATCH INFO */}

      <div style={styles.infoCard}>

        <div style={styles.infoItem}>

          <Clock3
            color="#39ff14"
            size={24}
          />

          <div>

            <h3>
              Match Starts
            </h3>

            <p style={{ color: "#aaa" }}>
              15 Minutes Left
            </p>

          </div>

        </div>

        <div style={styles.infoItem}>

          <Trophy
            color="#ffd700"
            size={24}
          />

          <div>

            <h3>
              Prize Pool
            </h3>

            <p style={{ color: "#aaa" }}>
              ₹25,000
            </p>

          </div>

        </div>

      </div>

      {/* TEAM */}

      <div style={styles.teamBox}>

        <div style={styles.teamTop}>

          <h2>
            Team Warriors
          </h2>

          <div style={styles.members}>

            <Users size={18} />

            <span>
              4 Players
            </span>

          </div>

        </div>

        {players.map((player, index) => (

          <div
            key={index}
            style={styles.playerCard}
          >

            <div style={styles.playerLeft}>

              <ShieldCheck
                color="#39ff14"
                size={22}
              />

              <span>
                {player.name}
              </span>

            </div>

            <span style={styles.status}>
              {player.status}
            </span>

          </div>

        ))}

      </div>

      {/* VOICE CHAT */}

      <div style={styles.voiceBox}>

        <Mic
          color="#ff4d88"
          size={28}
        />

        <div>

          <h3>
            Team Voice Chat
          </h3>

          <p style={{ color: "#aaa" }}>
            Communicate with teammates
          </p>

        </div>

      </div>

      {/* READY BUTTON */}

      <button
        style={
          ready
            ? styles.readyBtnDone
            : styles.readyBtn
        }
        onClick={() =>
          setReady(!ready)
        }
      >

        {ready
          ? "READY FOR MATCH ✅"
          : "MARK AS READY"}

      </button>

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

  liveBadge: {
    background: "red",
    padding: "10px 16px",
    borderRadius: 14,
    fontWeight: "bold"
  },

  infoCard: {
    marginTop: 25,
    background: "#081120",
    borderRadius: 28,
    padding: 22,
    display: "flex",
    justifyContent: "space-between",
    gap: 15,
    border: "1px solid #1d2b44"
  },

  infoItem: {
    display: "flex",
    gap: 12,
    alignItems: "center"
  },

  teamBox: {
    marginTop: 30,
    background: "#081120",
    borderRadius: 28,
    padding: 20,
    border: "1px solid #1d2b44"
  },

  teamTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20
  },

  members: {
    display: "flex",
    gap: 8,
    alignItems: "center"
  },

  playerCard: {
    background: "#111827",
    padding: 16,
    borderRadius: 18,
    marginBottom: 15,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  playerLeft: {
    display: "flex",
    gap: 10,
    alignItems: "center"
  },

  status: {
    color: "#39ff14",
    fontWeight: "bold"
  },

  voiceBox: {
    marginTop: 30,
    background:
      "linear-gradient(135deg,#2b0018,#3d0025)",
    borderRadius: 25,
    padding: 22,
    display: "flex",
    gap: 18,
    alignItems: "center",
    border: "1px solid #ff4d88"
  },

  readyBtn: {
    marginTop: 35,
    width: "100%",
    padding: 18,
    border: "none",
    borderRadius: 18,
    background: "#39ff14",
    fontWeight: "bold",
    fontSize: 16
  },

  readyBtnDone: {
    marginTop: 35,
    width: "100%",
    padding: 18,
    border: "none",
    borderRadius: 18,
    background: "#3ea6ff",
    color: "white",
    fontWeight: "bold",
    fontSize: 16
  }

};
