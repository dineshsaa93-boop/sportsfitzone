"use client";

import { useEffect, useState }
from "react";

import {
  onAuthStateChanged,
  signOut
} from "firebase/auth";

import { auth }
from "../firebase";

import {
  Flame,
  Mail,
  Trophy,
  LogOut
} from "lucide-react";

export default function ProfilePage() {

  const [user, setUser] =
    useState(null);

  useEffect(() => {

    const unsubscribe =
      onAuthStateChanged(
        auth,
        (currentUser) => {

        if (currentUser) {

          setUser(currentUser);

        } else {

          setUser(null);
        }

      });

    return () => unsubscribe();

  }, []);

  const handleLogout =
    async () => {

    await signOut(auth);

    alert("Logged Out");
  };

  if (!user) {

    return (

      <div style={styles.page}>

        <h1>
          No User Logged In
        </h1>

      </div>

    );
  }

  return (

    <div style={styles.page}>

      {/* PROFILE */}

      <div style={styles.profileCard}>

        <div style={styles.avatar}>
          🔥
        </div>

        <h1 style={styles.name}>
          Athlete
        </h1>

        <p style={styles.email}>
          {user.email}
        </p>

        <div style={styles.levelBox}>

          <Flame
            color="#39ff14"
            size={22}
          />

          <span>
            Level 5 Athlete
          </span>

        </div>

      </div>

      {/* STATS */}

      <div style={styles.statsRow}>

        <div style={styles.statCard}>

          <Trophy
            color="#ffd700"
            size={28}
          />

          <h2>
            12
          </h2>

          <p>
            Wins
          </p>

        </div>

        <div style={styles.statCard}>

          <Mail
            color="#3ea6ff"
            size={28}
          />

          <h2>
            Active
          </h2>

          <p>
            Status
          </p>

        </div>

      </div>

      {/* LOGOUT */}

      <button
        style={styles.logoutBtn}
        onClick={handleLogout}
      >

        <LogOut size={20} />

        Logout

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

  profileCard: {
    marginTop: 40,
    background:
      "linear-gradient(135deg,#081120,#102400)",
    borderRadius: 30,
    padding: 30,
    textAlign: "center",
    border: "1px solid #39ff14"
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: "50%",
    background: "#111827",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    fontSize: 50
  },

  name: {
    marginTop: 20,
    fontSize: 34
  },

  email: {
    color: "#aaa",
    marginTop: 10
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
    gridTemplateColumns:
      "repeat(2,1fr)",
    gap: 15
  },

  statCard: {
    background: "#081120",
    padding: 22,
    borderRadius: 24,
    textAlign: "center"
  },

  logoutBtn: {
    marginTop: 35,
    width: "100%",
    padding: 16,
    border: "none",
    borderRadius: 18,
    background: "#ff4d4d",
    color: "white",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10
  }

};
