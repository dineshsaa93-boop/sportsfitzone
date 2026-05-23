"use client";

import {
  Grid3X3,
  PlaySquare,
  Plus
} from "lucide-react";

export default function ProfilePage() {

  const posts = [

    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200",

    "https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=1200",

    "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200",

    "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?q=80&w=1200",

    "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=1200",

    "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200"

  ];

  return (

    <div style={styles.page}>

      {/* PROFILE HEADER */}

      <div style={styles.header}>

        <img
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
          alt="dp"
          style={styles.dp}
        />

        <div style={styles.stats}>

          <div>
            <h2>24</h2>
            <p>Posts</p>
          </div>

          <div>
            <h2>12K</h2>
            <p>Followers</p>
          </div>

          <div>
            <h2>180</h2>
            <p>Following</p>
          </div>

        </div>

      </div>

      {/* STORIES */}

      <div style={styles.storyRow}>

        <div style={styles.storyBox}>

          <div style={styles.storyCircle}>
            <Plus color="white" />
          </div>

          <p>New</p>

        </div>

        <div style={styles.storyBox}>

          <img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
            style={styles.storyImage}
          />

          <p>Gym</p>

        </div>

        <div style={styles.storyBox}>

          <img
            src="https://images.unsplash.com/photo-1547347298-4074fc3086f0"
            style={styles.storyImage}
          />

          <p>Cricket</p>

        </div>

        <div style={styles.storyBox}>

          <img
            src="https://images.unsplash.com/photo-1518611012118-696072aa579a"
            style={styles.storyImage}
          />

          <p>Running</p>

        </div>

      </div>

      {/* BIO */}

      <div style={styles.bioBox}>

        <h2>Dinesh 🚀</h2>

        <p style={{ color: "#aaa" }}>
          Athlete | Fitness | Future Engineer 💪
        </p>

      </div>

      {/* BUTTONS */}

      <div style={styles.btnRow}>

        <button style={styles.btn}>
          Edit Profile
        </button>

        <button style={styles.btn}>
          Share Profile
        </button>

      </div>

      {/* TABS */}

      <div style={styles.tabs}>

        <Grid3X3 />

        <PlaySquare />

      </div>

      {/* POSTS GRID */}

      <div style={styles.grid}>

        {posts.map((item, index) => (

          <img
            key={index}
            src={item}
            alt="post"
            style={styles.gridImage}
          />

        ))}

      </div>

    </div>

  );
}

const styles = {

  page: {
    background: "#020817",
    minHeight: "100vh",
    color: "white",
    padding: 20,
    fontFamily: "sans-serif"
  },

  header: {
    display: "flex",
    alignItems: "center",
    gap: 25
  },

  dp: {
    width: 100,
    height: 100,
    borderRadius: "50%",
    objectFit: "cover",
    border: "4px solid #ff00cc"
  },

  stats: {
    display: "flex",
    gap: 30
  },

  storyRow: {
    display: "flex",
    gap: 20,
    marginTop: 30,
    overflowX: "auto"
  },

  storyBox: {
    textAlign: "center"
  },

  storyCircle: {
    width: 75,
    height: 75,
    borderRadius: "50%",
    background:
      "linear-gradient(45deg,#ff00cc,#3333ff)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  storyImage: {
    width: 75,
    height: 75,
    borderRadius: "50%",
    objectFit: "cover",
    border: "3px solid #ff00cc"
  },

  bioBox: {
    marginTop: 20
  },

  btnRow: {
    display: "flex",
    gap: 15,
    marginTop: 20
  },

  btn: {
    flex: 1,
    background: "#111827",
    border: "1px solid #1f2937",
    color: "white",
    padding: 12,
    borderRadius: 12,
    fontWeight: "bold"
  },

  tabs: {
    marginTop: 30,
    display: "flex",
    justifyContent: "space-around",
    borderTop: "1px solid #1f2937",
    borderBottom: "1px solid #1f2937",
    padding: 15
  },

  grid: {
    marginTop: 20,
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: 5
  },

  gridImage: {
    width: "100%",
    height: 130,
    objectFit: "cover",
    borderRadius: 10
  }

};
