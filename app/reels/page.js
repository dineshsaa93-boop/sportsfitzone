"use client";

import {
  Heart,
  MessageCircle,
  Send
} from "lucide-react";

export default function ReelsPage() {

  const reels = [

    {
      user: "Dinesh",
      video:
        "https://www.w3schools.com/html/mov_bbb.mp4",
      caption: "Heavy chest workout 🔥"
    },

    {
      user: "Rahul",
      video:
        "https://www.w3schools.com/html/movie.mp4",
      caption: "Morning football training ⚽"
    }

  ];

  return (

    <div style={styles.page}>

      {reels.map((reel, index) => (

        <div key={index} style={styles.reelCard}>

          <video
            src={reel.video}
            controls
            autoPlay
            loop
            style={styles.video}
          />

          <div style={styles.overlay}>

            <div>

              <h2>@{reel.user}</h2>

              <p>{reel.caption}</p>

            </div>

            <div style={styles.actions}>

              <Heart size={32} color="white" />

              <MessageCircle size={32} color="white" />

              <Send size={32} color="white" />

            </div>

          </div>

        </div>

      ))}

    </div>

  );
}

const styles = {

  page: {
    background: "black",
    minHeight: "100vh",
    color: "white"
  },

  reelCard: {
    position: "relative",
    height: "100vh",
    overflow: "hidden"
  },

  video: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  },

  overlay: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end"
  },

  actions: {
    display: "flex",
    flexDirection: "column",
    gap: 20
  }

};
