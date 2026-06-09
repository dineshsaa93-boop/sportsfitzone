"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import {
  doc,
  setDoc
} from "firebase/firestore";

import {
  auth,
  db
} from "../firebase";

import {
  Flame,
  Mail,
  Lock,
  User,
} from "lucide-react";

export default function LoginPage() {

  const [isLogin, setIsLogin] =
    useState(true);

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);
const router = useRouter();
  const handleAuth = async () => {

    if (!email || !password) {

      alert("Fill all fields");

      return;
    }

    try {

      setLoading(true);

      // LOGIN

      if (isLogin) {

        await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        alert("Login Success 🚀");
        
      router.push("/profile");
      }

      // SIGNUP

      else {

        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        const user =
          auth.currentUser;

        // SAVE USER DATA

        await setDoc(
          doc(db, "users", user.uid),
          {

            name: name,

            email: email,

            xp: 0,

            level: 1,

            streak: 0,

            wins: 0,

            tournaments: 0,

            rewards: 0,

            createdAt:
              new Date()

          }
        );

        alert("Account Created 🔥");
      }

    } catch (error) {

      alert(error.message);

    } finally {

      setLoading(false);
    }

  };

  return (

    <div style={styles.page}>

      {/* TOP */}

      <div style={styles.topSection}>

        <div style={styles.logoBox}>

          <Flame
            color="#39ff14"
            size={50}
          />

        </div>

        <h1 style={styles.heading}>
          AthleteX
        </h1>

        <p style={styles.subHeading}>
          Become the ultimate athlete 🚀
        </p>

      </div>

      {/* FORM */}

      <div style={styles.formBox}>

        {!isLogin && (

          <div style={styles.inputBox}>

            <User
              color="#888"
              size={20}
            />

            <input
              placeholder="Full Name"
              style={styles.input}
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
            />

          </div>

        )}

        {/* EMAIL */}

        <div style={styles.inputBox}>

          <Mail
            color="#888"
            size={20}
          />

          <input
            placeholder="Email"
            style={styles.input}
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

        </div>

        {/* PASSWORD */}

        <div style={styles.inputBox}>

          <Lock
            color="#888"
            size={20}
          />

          <input
            type="password"
            placeholder="Password"
            style={styles.input}
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

        </div>

        {/* MAIN BUTTON */}

        <button
          style={styles.mainBtn}
          onClick={handleAuth}
        >

          {loading
            ? "Please Wait..."
            : isLogin
            ? "Login"
            : "Create Account"}

        </button>

        {/* SWITCH */}

        <p style={styles.switchText}>

          {isLogin
            ? "Don't have account?"
            : "Already have account?"}

          <span
            onClick={() =>
              setIsLogin(!isLogin)
            }
            style={styles.switchBtn}
          >

            {isLogin
              ? " Sign Up"
              : " Login"}

          </span>

        </p>

      </div>

      {/* FEATURES */}

      <div style={styles.bottomCard}>

        <h2>
          Why Join AthleteX? 🔥
        </h2>

        <div style={styles.featureItem}>
          🏆 Join tournaments
        </div>

        <div style={styles.featureItem}>
          💬 Team chats & community
        </div>

        <div style={styles.featureItem}>
          🎁 Earn rewards & XP
        </div>

        <div style={styles.featureItem}>
          📊 Athlete progress tracking
        </div>

      </div>

    </div>

  );

}

const styles = {

  page: {
    background:
      "linear-gradient(180deg,#020817,#081120)",
    minHeight: "100vh",
    color: "white",
    padding: 20,
    fontFamily: "sans-serif"
  },

  topSection: {
    marginTop: 60,
    textAlign: "center"
  },

  logoBox: {
    width: 90,
    height: 90,
    borderRadius: "50%",
    background: "#111827",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    border: "2px solid #39ff14"
  },

  heading: {
    marginTop: 20,
    fontSize: 42,
    fontWeight: "bold"
  },

  subHeading: {
    color: "#aaa",
    marginTop: 10,
    fontSize: 18
  },

  formBox: {
    marginTop: 40,
    background: "#081120",
    borderRadius: 30,
    padding: 25,
    border: "1px solid #1d2b44"
  },

  inputBox: {
    background: "#111827",
    borderRadius: 18,
    padding: 15,
    display: "flex",
    gap: 12,
    alignItems: "center",
    marginBottom: 20
  },

  input: {
    background: "transparent",
    border: "none",
    outline: "none",
    color: "white",
    width: "100%",
    fontSize: 16
  },

  mainBtn: {
    width: "100%",
    padding: 16,
    border: "none",
    borderRadius: 18,
    background: "#39ff14",
    fontWeight: "bold",
    fontSize: 16
  },

  switchText: {
    textAlign: "center",
    marginTop: 25,
    color: "#aaa"
  },

  switchBtn: {
    color: "#39ff14",
    fontWeight: "bold",
    cursor: "pointer"
  },

  bottomCard: {
    marginTop: 35,
    background:
      "linear-gradient(135deg,#102400,#081120)",
    borderRadius: 28,
    padding: 22,
    border: "1px solid #39ff14"
  },

  featureItem: {
    background: "#111827",
    padding: 14,
    borderRadius: 16,
    marginTop: 15
  }

};
