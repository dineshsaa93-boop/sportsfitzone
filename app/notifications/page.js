"use client";

import {
  Heart,
  MessageCircle,
  UserPlus
} from "lucide-react";

export default function NotificationsPage() {

  const notifications = [

    {
      type: "like",
      user: "Rahul",
      text: "liked your workout post ❤️"
    },

    {
      type: "comment",
      user: "Aryan",
      text: "commented: Amazing bro 🔥"
    },

    {
      type: "follow",
      user: "Fitness Pro",
      text: "started following you"
    }

  ];

  return (

    <div style={styles.page}>

      <h1 style={styles.heading}>
        Notifications 🔔
      </h1>

      {notifications.map((item, index) => (

        <div key={index} style={styles.card}>

          <div style={styles.iconBox}>

            {item.type === "like" && (
              <Heart color="#ff4d88" />
            )}

            {item.type === "comment" && (
              <MessageCircle color="#3ea6ff" />
            )}

            {item.type === "follow" && (
              <UserPlus color="#39ff14" />
            )}

          </div>

          <div>

            <h3>{item.user}</h3>

            <p style={{ color: "#aaa" }}>
              {item.text}
            </p>

          </div>

        </div>

      ))}

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
    fontSize: 32,
    marginBottom: 30
  },

  card: {
    display: "flex",
    alignItems: "center",
    gap: 15,
    background: "#081120",
    padding: 18,
    borderRadius: 20,
    marginBottom: 18,
    border: "1px solid #1d2b44"
  },

  iconBox: {
    width: 55,
    height: 55,
    borderRadius: "50%",
    background: "#111827",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }

};
