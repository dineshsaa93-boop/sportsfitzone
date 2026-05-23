"use client";

import {
  ArrowRight,
  Weight,
  Trophy,
  Flame
} from "lucide-react";

export default function TransformationPage() {

  return (

    <div style={styles.page}>

      <h1 style={styles.heading}>
        Body Transformation 🧬
      </h1>

      {/* BEFORE AFTER */}

      <div style={styles.compareBox}>

        <div style={styles.imageBox}>

          <img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
            style={styles.image}
          />

          <p style={styles.label}>
            BEFORE
          </p>

        </div>

        <ArrowRight
          color="#39ff14"
          size={40}
        />

        <div style={styles.imageBox}>

          <img
            src="https://images.unsplash.com/photo-1546483875-ad9014c88eba"
            style={styles.image}
          />

          <p style={styles.label}>
            AFTER
          </p>

        </div>

      </div>

      {/* STATS */}

      <div style={styles.statsGrid}>

        <div style={styles.card}>

          <Weight
            color="#3ea6ff"
            size={40}
          />

          <h2>72 KG</h2>

          <p>Current Weight</p>

        </div>

        <div style={styles.card}>

          <Flame
            color="#ff7b00"
            size={40}
          />

          <h2>-8 KG</h2>

          <p>Fat Loss</p>

        </div>

        <div style={styles.card}>

          <Trophy
            color="#ffd633"
            size={40}
          />

          <h2>5 Months</h2>

          <p>Transformation Time</p>

        </div>

      </div>

      {/* TIMELINE */}

      <div style={styles.timeline}>

        <h2>Journey Timeline 🚀</h2>

        <div style={styles.timelineItem}>
          ✅ Started workout journey
        </div>

        <div style={styles.timelineItem}>
          ✅ Lost 4 KG in first month
        </div>

        <div style={styles.timelineItem}>
          ✅ Built lean muscle mass
        </div>

        <div style={styles.timelineItem}>
          ✅ Completed 90 day challenge
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

  compareBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 15
  },

  imageBox: {
    flex: 1,
    textAlign: "center"
  },

  image: {
    width: "100%",
    height: 260,
    objectFit: "cover",
    borderRadius: 25
  },

  label: {
    marginTop: 12,
    fontWeight: "bold",
    color: "#39ff14"
  },

  statsGrid: {
    marginTop: 35,
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: 15
  },

  card: {
    background: "#081120",
    padding: 20,
    borderRadius: 20,
    border: "1px solid #1d2b44",
    textAlign: "center"
  },

  timeline: {
    marginTop: 40,
    background: "#081120",
    padding: 25,
    borderRadius: 25
  },

  timelineItem: {
    marginTop: 18,
    background: "#111827",
    padding: 15,
    borderRadius: 15
  }

};
