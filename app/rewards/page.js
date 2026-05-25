"use client";

import { useState } from "react";

import {
  Gift,
  Trophy,
  Coins,
  Flame,
  Medal
} from "lucide-react";

export default function RewardsPage() {

  const [claimed, setClaimed] =
    useState(false);

  const rewards = [

    {
      title:
        "Tournament Winner Reward",

      reward:
        "₹5,000 + 2500 XP",

      icon:
        <Trophy
          color="#ffd700"
          size={34}
        />
    },

    {
      title:
        "Daily Athlete Reward",

      reward:
        "500 Coins",

      icon:
        <Coins
          color="#39ff14"
          size={34}
        />
    },

    {
      title:
        "Elite Match Bonus",

      reward:
        "🏅 MVP Medal",

      icon:
        <Medal
          color="#ff4d88"
          size={34}
        />
    }

  ];

  return (

    <div style={styles.page}>

      {/* HEADER */}

      <div style={styles.header}>

        <div>

          <h1>
            🎁 Rewards Center
          </h1>

          <p style={{ color: "#aaa" }}>
            Claim tournament rewards
          </p>

        </div>

        <Gift
          color="#ffd700"
          size={40}
        />

      </div>

      {/* TOP CARD */}

      <div style={styles.topCard}>

        <Flame
          color="#39ff14"
          size={45}
        />

        <div>

          <h2>
            Athlete Reward Pass
          </h2>

          <p style={{ color: "#aaa" }}>
            Earn rewards by playing
            tournaments and matches 🚀
          </p>

        </div>

      </div>

      {/* REWARD LIST */}

      {rewards.map((item, index) => (

        <div
          key={index}
          style={styles.rewardCard}
        >

          <div style={styles.rewardLeft}>

            {item.icon}

            <div>

              <h2>
                {item.title}
              </h2>

              <p style={{ color: "#aaa" }}>
                {item.reward}
              </p>

            </div>

          </div>

          <button
            style={
              claimed
                ? styles.claimedBtn
                : styles.claimBtn
            }
            onClick={() =>
              setClaimed(true)
            }
          >

            {claimed
              ? "Claimed ✅"
              : "Claim"}

          </button>

        </div>

      ))}

      {/* STATS */}

      <div style={styles.statsBox}>

        <div style={styles.statCard}>

          <h1>
            25,400
          </h1>

          <p>
            XP Earned
          </p>

        </div>

        <div style={styles.statCard}>

          <h1>
            12
          </h1>

          <p>
            Medals
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

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  topCard: {
    marginTop: 25,
    background:
      "linear-gradient(135deg,#081120,#102400)",
    borderRadius: 28,
    padding: 22,
    display: "flex",
    gap: 18,
    alignItems: "center",
    border: "1px solid #39ff14"
  },

  rewardCard: {
    marginTop: 25,
    background: "#081120",
    borderRadius: 26,
    padding: 20,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid #1d2b44"
  },

  rewardLeft: {
    display: "flex",
    gap: 16,
    alignItems: "center"
  },

  claimBtn: {
    background: "#39ff14",
    border: "none",
    padding: "12px 18px",
    borderRadius: 14,
    fontWeight: "bold"
  },

  claimedBtn: {
    background: "#3ea6ff",
    border: "none",
    padding: "12px 18px",
    borderRadius: 14,
    color: "white",
    fontWeight: "bold"
  },

  statsBox: {
    marginTop: 35,
    display: "flex",
    gap: 15
  },

  statCard: {
    flex: 1,
    background: "#111827",
    padding: 22,
    borderRadius: 24,
    textAlign: "center",
    border: "1px solid #1d2b44"
  }

};
