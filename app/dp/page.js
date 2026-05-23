"use client";

import { useState } from "react";

import {
  Heart,
  MessageCircle,
  Send,
  Camera,
  Video,
  PlusSquare,
  Bell,
  PlaySquare,
  Grid3X3
} from "lucide-react";

export default function DPPage() {

  const [activeTab, setActiveTab] =
    useState("feed");

  const initialPosts = [

    {
      user: "Dinesh",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
      caption:
        "Completed intense chest workout 🔥",
      likes: 100,
      comments: 24
    },

    {
      user: "Rahul",
      image:
        "https://images.unsplash.com/photo-1547347298-4074fc3086f0",
      caption:
        "5KM running completed 🏃",
      likes: 87,
      comments: 14
    }

  ];

  const [posts, setPosts] =
    useState(initialPosts);

  const [notifications, setNotifications] =
    useState([
      "Rahul liked your post ❤️",
      "Aryan commented 🔥"
    ]);

  const handleLike = (index) => {

    const updatedPosts = [...posts];

    updatedPosts[index].likes += 1;

    setPosts(updatedPosts);

    setNotifications([
      "Someone liked your post ❤️",
      ...notifications
    ]);

  };

  const handleComment = () => {

    setNotifications([
      "New comment on your post 💬",
      ...notifications
    ]);

  };

  return (

    <div style={styles.page}>

      {/* HEADER */}

      <div style={styles.header}>

        <h1 style={styles.logo}>
          🔥
        </h1>

        <div style={styles.headerIcons}>

          <Bell color="white" />

          <Video color="white" />

          <PlusSquare color="white" />

        </div>

      </div>

      {/* NOTIFICATIONS */}

      <div style={styles.notificationBox}>

        {notifications
          .slice(0, 3)
          .map((item, index) => (

            <p
              key={index}
              style={styles.notificationText}
            >
              {item}
            </p>

          ))}

      </div>

      {/* TABS */}

      <div style={styles.tabs}>

        <button
          onClick={() =>
            setActiveTab("feed")
          }
          style={
            activeTab === "feed"
              ? styles.activeTab
              : styles.tabBtn
          }
        >
          <Grid3X3 />
        </button>

        <button
          onClick={() =>
            setActiveTab("reels")
          }
          style={
            activeTab === "reels"
              ? styles.activeTab
              : styles.tabBtn
          }
        >
          <PlaySquare />
        </button>

      </div>

      {/* REELS */}

      {activeTab === "reels" && (

        <div style={styles.reelsGrid}>

          <video
            controls
            style={styles.reelVideo}
            src="https://www.w3schools.com/html/mov_bbb.mp4"
          />

          <video
            controls
            style={styles.reelVideo}
            src="https://www.w3schools.com/html/movie.mp4"
          />

        </div>

      )}

      {/* FEED */}

      {activeTab === "feed" && (

        <>

          {/* SHARE BOX */}

          <div style={styles.shareBox}>

            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
              style={styles.shareDP}
            />

            <p style={{ color: "#777" }}>
              Share your workout progress...
            </p>

          </div>

          {/* POSTS */}

          {posts.map((post, index) => (

            <div
              key={index}
              style={styles.card}
            >

              {/* USER */}

              <div style={styles.userRow}>

                <div style={styles.userInfo}>

                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                    style={styles.avatar}
                  />

                  <div>

                    <h2>{post.user}</h2>

                    <p style={{ color: "#888" }}>
                      Athlete
                    </p>

                  </div>

                </div>

              </div>

              {/* IMAGE */}

              <img
                src={post.image}
                alt="post"
                style={styles.image}
              />

              {/* ACTIONS */}

              <div style={styles.actionRow}>

                <div style={styles.leftActions}>

                  <button
                    onClick={() =>
                      handleLike(index)
                    }
                    style={styles.iconBtn}
                  >

                    <Heart
                      color="#ff4d88"
                      size={32}
                    />

                  </button>

                  <MessageCircle
                    color="white"
                    size={32}
                  />

                  <Send
                    color="white"
                    size={32}
                  />

                </div>

              </div>

              {/* STATS */}

              <div style={styles.statsRow}>

                <p>
                  {post.likes} likes
                </p>

                <p>
                  {post.comments} comments
                </p>

              </div>

              {/* CAPTION */}

              <p style={styles.caption}>

                <span
                  style={{
                    fontWeight: "bold"
                  }}
                >
                  {post.user}
                </span>

                {" "} {post.caption}

              </p>

              {/* COMMENT */}

              <div style={styles.commentRow}>

                <input
                  placeholder="Write comment..."
                  style={styles.input}
                />

                <button
                  style={styles.sendBtn}
                  onClick={handleComment}
                >
                  Send
                </button>

              </div>

            </div>

          ))}

        </>

      )}

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
    alignItems: "center",
    marginBottom: 20
  },

  logo: {
    fontSize: 35
  },

  headerIcons: {
    display: "flex",
    gap: 20
  },

  notificationBox: {
    background: "#081120",
    padding: 12,
    borderRadius: 15,
    marginBottom: 20
  },

  notificationText: {
    color: "#ddd",
    marginBottom: 8,
    fontSize: 14
  },

  tabs: {
    display: "flex",
    justifyContent: "center",
    gap: 20,
    marginBottom: 25
  },

  tabBtn: {
    background: "#111827",
    border: "none",
    color: "white",
    padding: 15,
    borderRadius: 15
  },

  activeTab: {
    background: "#39ff14",
    border: "none",
    color: "black",
    padding: 15,
    borderRadius: 15
  },

  reelsGrid: {
    display: "grid",
    gap: 20,
    marginBottom: 30
  },

  reelVideo: {
    width: "100%",
    borderRadius: 20
  },

  shareBox: {
    background: "#081120",
    borderRadius: 25,
    padding: 20,
    display: "flex",
    alignItems: "center",
    gap: 15,
    marginBottom: 25
  },

  shareDP: {
    width: 60,
    height: 60,
    borderRadius: "50%",
    objectFit: "cover"
  },

  card: {
    background: "#081120",
    padding: 20,
    borderRadius: 30,
    marginBottom: 30,
    border: "1px solid #1b2940"
  },

  userRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  userInfo: {
    display: "flex",
    gap: 15,
    alignItems: "center"
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: "50%",
    objectFit: "cover"
  },

  image: {
    width: "100%",
    height: 500,
    objectFit: "cover",
    borderRadius: 25,
    marginTop: 20
  },

  actionRow: {
    marginTop: 20
  },

  leftActions: {
    display: "flex",
    gap: 20
  },

  iconBtn: {
    background: "transparent",
    border: "none"
  },

  statsRow: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 15,
    color: "#999"
  },

  caption: {
    marginTop: 20,
    lineHeight: 1.6,
    fontSize: 20
  },

  commentRow: {
    display: "flex",
    gap: 15,
    marginTop: 20
  },

  input: {
    flex: 1,
    padding: 15,
    borderRadius: 15,
    border: "none",
    outline: "none",
    fontSize: 16
  },

  sendBtn: {
    background: "white",
    border: "none",
    padding: "15px 20px",
    borderRadius: 15,
    fontWeight: "bold"
  }

};
