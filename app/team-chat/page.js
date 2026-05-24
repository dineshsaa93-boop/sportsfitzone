"use client";

import { useState } from "react";

import {
  Send,
  Users,
  Trophy,
  Shield
} from "lucide-react";

export default function TeamChatPage() {

  const [message, setMessage] =
    useState("");

  const [messages, setMessages] =
    useState([
      {
        user: "Aryan",
        text:
          "Bro strategy aggressive rakhte hai 🔥"
      },

      {
        user: "Dinesh",
        text:
          "Okay 💪 let's win this"
      }
    ]);

  const sendMessage = () => {

    if (!message) return;

    setMessages([
      ...messages,

      {
        user: "You",
        text: message
      }
    ]);

    setMessage("");
  };

  return (

    <div style={styles.page}>

      {/* HEADER */}

      <div style={styles.header}>

        <div>

          <h1>
            🛡 Team Warriors
          </h1>

          <p style={{ color: "#aaa" }}>
            Tournament Squad Chat
          </p>

        </div>

        <div style={styles.teamBadge}>

          <Users size={20} />

          <span>
            5 Members
          </span>

        </div>

      </div>

      {/* TEAM INFO */}

      <div style={styles.infoCard}>

        <div style={styles.infoItem}>

          <Trophy
            color="#ffd700"
            size={24}
          />

          <div>

            <h3>
              Tournament
            </h3>

            <p style={{ color: "#aaa" }}>
              Cricket Champions Cup
            </p>

          </div>

        </div>

        <div style={styles.infoItem}>

          <Shield
            color="#39ff14"
            size={24}
          />

          <div>

            <h3>
              Team Rank
            </h3>

            <p style={{ color: "#aaa" }}>
              #4 Global
            </p>

          </div>

        </div>

      </div>

      {/* CHAT */}

      <div style={styles.chatBox}>

        {messages.map((msg, index) => (

          <div
            key={index}
            style={styles.messageCard}
          >

            <h4 style={styles.user}>
              {msg.user}
            </h4>

            <p>
              {msg.text}
            </p>

          </div>

        ))}

      </div>

      {/* INPUT */}

      <div style={styles.inputRow}>

        <input
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          placeholder="Type strategy..."
          style={styles.input}
        />

        <button
          style={styles.sendBtn}
          onClick={sendMessage}
        >

          <Send size={20} />

        </button>

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
    fontFamily: "sans-serif",
    paddingBottom: 120
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  teamBadge: {
    background: "#111827",
    padding: "10px 15px",
    borderRadius: 14,
    display: "flex",
    alignItems: "center",
    gap: 8
  },

  infoCard: {
    marginTop: 25,
    background: "#081120",
    borderRadius: 25,
    padding: 20,
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

  chatBox: {
    marginTop: 30
  },

  messageCard: {
    background: "#111827",
    padding: 16,
    borderRadius: 18,
    marginBottom: 15,
    border: "1px solid #1d2b44"
  },

  user: {
    color: "#39ff14",
    marginBottom: 8
  },

  inputRow: {
    position: "fixed",
    bottom: 20,
    left: 15,
    right: 15,
    display: "flex",
    gap: 12
  },

  input: {
    flex: 1,
    padding: 16,
    borderRadius: 16,
    border: "none",
    outline: "none",
    background: "#111827",
    color: "white"
  },

  sendBtn: {
    width: 60,
    border: "none",
    borderRadius: 16,
    background: "#39ff14",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }

};
