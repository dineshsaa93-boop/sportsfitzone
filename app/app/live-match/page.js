"use client";

import { useState } from "react";

import {
  Eye,
  Flame,
  Trophy,
  MessageCircle,
  Heart
} from "lucide-react";

export default function LiveMatchPage() {

  const [likes, setLikes] =
    useState(1200);

  const comments = [

    "🔥 What a shot!",

    "Dinesh is carrying the team 😎",

    "Bro this match is insane",

    "MVP performance 👑"
  ];

  return (

    <div style={styles.page}>

      {/* HEADER */}

      <div style={styles.header}>

        <div>

          <h1>
            🔴 LIVE MATCH
          </h1>

          <p style={{ color: "#aaa" }}>
            Cricket Champions Cup
          </p>

        </div>

        <div style={styles.liveBadge}>
          LIVE
        </div>

      </div>

      {/* VIDEO */}

      <div style={styles.videoBox}>

        <img
          src="https://images.unsplash.com/photo-1546519638-68e109498ffc"
          style={styles.image}
        />

        <div style={styles.overlay}>

          <div style={styles.viewerBox}>

            <Eye size={18} />

            <span>
              24.5K Watching
            </span>

          </div>

        </div>

      </div>

      {/* SCORE */}

      <div style={styles.scoreBox}>

        <div>

          <h2>
            Team Warriors
          </h2>

          <p style={{ color: "#39ff14" }}>
            245/3
          </p>

        </div>

        <div>

          <h2>
            Titans
          </h2>

          <p style={{ color: "#ff4d88" }}>
            198/7
          </p>

        </div>

      </div>

      {/* MVP */}

      <div style={styles.mvpBox}>

        <Trophy
          color="#ffd700"
          size={32}
        />

        <div>

          <h2>
            MVP Player
          </h2>

          <p style={{ color: "#aaa" }}>
            Dinesh — 98 Runs 🔥
          </p>

        </div>

      </div>

      {/* REACTIONS */}

      <div style={styles.reactionRow}>

        <button
          style={styles.reactBtn}
          onClick={() =>
            setLikes(likes + 1)
          }
        >

          <Heart size={20} />

          {likes}

        </button>

        <button style={styles.reactBtn}>

          <Flame size={20} />

          HYPE

        </button>

      </div>

      {/* LIVE CHAT */}

      <div style={styles.chatBox}>

        <div style={styles.chatHeader}>

          <MessageCircle size={22} />

          <h2>
            Live Chat
          </h2>

        </div>

        {comments.map((msg, index) => (

          <div
            key={index}
            style={styles.commentCard}
          >
            {msg}
          </div>

        ))}

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

  liveBadge: {
    background: "red",
    padding: "10px 16px",
    borderRadius: 14,
    fontWeight: "bold"
  },

  videoBox: {
    marginTop: 25,
    position: "relative"
  },

  image: {
    width: "100%",
    height: 260,
    objectFit: "cover",
    borderRadius: 28
  },

  overlay: {
    position: "absolute",
    top: 15,
    left: 15
  },

  viewerBox: {
    background: "rgba(0,0,0,0.7)",
    padding: "10px 15px",
    borderRadius: 14,
    display: "flex",
    gap: 8,
    alignItems: "center"
  },

  scoreBox: {
    marginTop: 25,
    background: "#081120",
    borderRadius: 28,
    padding: 22,
    display: "flex",
    justifyContent: "space-between",
    border: "1px solid #1d2b44"
  },

  mvpBox: {
    marginTop: 25,
    background:
      "linear-gradient(135deg,#2b1800,#3d2600)",
    borderRadius: 28,
    padding: 22,
    display: "flex",
    gap: 18,
    alignItems: "center",
    border: "1px solid #ffd700"
  },

  reactionRow: {
    marginTop: 25,
    display: "flex",
    gap: 15
  },

  reactBtn: {
    flex: 1,
    background: "#111827",
    border: "none",
    padding: 16,
    borderRadius: 18,
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    fontWeight: "bold"
  },

  chatBox: {
    marginTop: 30,
    background: "#081120",
    borderRadius: 28,
    padding: 20,
    border: "1px solid #1d2b44"
  },

  chatHeader: {
    display: "flex",
    gap: 10,
    alignItems: "center",
    marginBottom: 20
  },

  commentCard: {
    background: "#111827",
    padding: 15,
    borderRadius: 16,
    marginBottom: 12
  }

};
