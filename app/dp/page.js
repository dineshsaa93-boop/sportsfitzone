"use client";

import {
  Heart,
  MessageCircle,
  Send,
  ImagePlus
} from "lucide-react";

export default function DPPage() {

  const posts = [
    {
      username: "Dinesh",
      caption: "DAY 8 COMPLETE 🔥",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
      likes: 245,
      comments: 39
    },

    {
      username: "Aryan",
      caption: "Football practice done ⚽",
      image:
        "https://images.unsplash.com/photo-1508098682722-e99c643e7485?q=80&w=1200&auto=format&fit=crop",
      likes: 188,
      comments: 21
    }
  ];

  return (
    <div style={styles.page}>

      {/* TOP BAR */}
      <div style={styles.topBar}>
        <h1>DP 🔥</h1>

        <ImagePlus color="white" />
      </div>

      {/* CREATE POST */}
      <div style={styles.createBox}>

        <p style={{ color: "#aaa" }}>
          Share your workout today...
        </p>

        <button style={styles.postBtn}>
          Create Post
        </button>

      </div>

      {/* POSTS */}
      {posts.map((post, index) => (

        <div key={index} style={styles.postCard}>

          <div style={styles.userRow}>
            <div style={styles.avatar}></div>

            <div>
              <h3>{post.username}</h3>

              <p style={{ color: "#aaa", fontSize: 12 }}>
                2 hours ago
              </p>
            </div>
          </div>

          <p style={styles.caption}>
            {post.caption}
          </p>

          <img
            src={post.image}
            alt="post"
            style={styles.postImage}
          />

          <div style={styles.actionRow}>

            <div style={styles.action}>
              <Heart color="#ff4d88" />
              <span>{post.likes}</span>
            </div>

            <div style={styles.action}>
              <MessageCircle color="#3ea6ff" />
              <span>{post.comments}</span>
            </div>

            <div style={styles.action}>
              <Send color="#39ff14" />
              <span>Share</span>
            </div>

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
    color: "white",
    padding: 20,
    fontFamily: "sans-serif"
  },

  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25
  },

  createBox: {
    background: "#081120",
    border: "1px solid #1d2b44",
    borderRadius: 20,
    padding: 20,
    marginBottom: 25
  },

  postBtn: {
    marginTop: 15,
    background: "#39ff14",
    border: "none",
    padding: "12px 18px",
    borderRadius: 12,
    fontWeight: "bold"
  },

  postCard: {
    background: "#081120",
    border: "1px solid #1d2b44",
    borderRadius: 25,
    padding: 15,
    marginBottom: 25
  },

  userRow: {
    display: "flex",
    gap: 12,
    alignItems: "center"
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    background: "#39ff14"
  },

  caption: {
    marginTop: 15,
    marginBottom: 15,
    fontSize: 16
  },

  postImage: {
    width: "100%",
    borderRadius: 20,
    height: 280,
    objectFit: "cover"
  },

  actionRow: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: 15
  },

  action: {
    display: "flex",
    gap: 8,
    alignItems: "center"
  }

};
