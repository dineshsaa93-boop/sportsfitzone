"use client";

import {
  Search
} from "lucide-react";

export default function SearchPage() {

  const users = [

    {
      name: "Rahul",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
    },

    {
      name: "Aryan",
      image:
        "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce"
    },

    {
      name: "Fitness Pro",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9"
    }

  ];

  const explore = [

    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",

    "https://images.unsplash.com/photo-1547347298-4074fc3086f0",

    "https://images.unsplash.com/photo-1518611012118-696072aa579a",

    "https://images.unsplash.com/photo-1517963879433-6ad2b056d712",

    "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf",

    "https://images.unsplash.com/photo-1517838277536-f5f99be501cd"

  ];

  return (

    <div style={styles.page}>

      {/* SEARCH BAR */}

      <div style={styles.searchBox}>

        <Search color="#aaa" />

        <input
          placeholder="Search athletes..."
          style={styles.input}
        />

      </div>

      {/* USERS */}

      <h2 style={styles.heading}>
        Popular Athletes
      </h2>

      {users.map((user, index) => (

        <div key={index} style={styles.userCard}>

          <img
            src={user.image}
            alt="user"
            style={styles.dp}
          />

          <h3>{user.name}</h3>

        </div>

      ))}

      {/* EXPLORE */}

      <h2 style={styles.heading}>
        Explore
      </h2>

      <div style={styles.grid}>

        {explore.map((item, index) => (

          <img
            key={index}
            src={item}
            alt="explore"
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
    padding: 20,
    color: "white",
    fontFamily: "sans-serif"
  },

  searchBox: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    background: "#111827",
    padding: 15,
    borderRadius: 15
  },

  input: {
    flex: 1,
    background: "transparent",
    border: "none",
    outline: "none",
    color: "white",
    fontSize: 16
  },

  heading: {
    marginTop: 30,
    marginBottom: 20
  },

  userCard: {
    display: "flex",
    alignItems: "center",
    gap: 15,
    marginBottom: 20,
    background: "#081120",
    padding: 15,
    borderRadius: 18
  },

  dp: {
    width: 55,
    height: 55,
    borderRadius: "50%",
    objectFit: "cover"
  },

  grid: {
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
