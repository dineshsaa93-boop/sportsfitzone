"use client";

import { useState } from "react";

import {
  Heart,
  MessageCircle,
  Send,
  PlusSquare,
  ImagePlus,
  Camera,
  Video
} from "lucide-react";

export default function DPPage() {

  const initialPosts = [

    {
      user: "Dinesh",

      profile:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",

      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",

      caption: "Completed intense chest workout 🔥",

      likes: 100,
      comments: 24,

      commentList: [],

      isVideo: false
    },

    {
      user: "Rahul",

      profile:
        "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce",

      image:
        "https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=1200&auto=format&fit=crop",

      caption: "Morning cricket practice 🏏",

      likes: 85,
      comments: 12,

      commentList: [],

      isVideo: false
    }

  ];

  const [posts, setPosts] = useState(initialPosts);

  const [commentText, setCommentText] = useState("");

  const handleLike = (index) => {

    const updatedPosts = [...posts];

    updatedPosts[index].likes += 1;

    setPosts(updatedPosts);
  };

  const handleComment = (index) => {

    if (!commentText) return;

    const updatedPosts = [...posts];

    updatedPosts[index].commentList.push(commentText);

    updatedPosts[index].comments += 1;

    setPosts(updatedPosts);

    setCommentText("");
  };

  const handleImageUpload = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    const fileUrl = URL.createObjectURL(file);

    const isVideo = file.type.startsWith("video");

    const newPost = {

      user: "Dinesh",

      profile:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",

      image: fileUrl,

      caption: "New upload 🔥",

      likes: 0,
      comments: 0,

      commentList: [],

      isVideo: isVideo
    };

    setPosts([newPost, ...posts]);
  };

  return (

    <div style={styles.page}>

      {/* HEADER */}

      <div style={styles.header}>

        <h1 style={styles.logo}>
          DP Community 🔥
        </h1>

        <div style={styles.headerIcons}>

          <Camera color="white" />

          <Video color="white" />

          <label>

            <ImagePlus color="white" size={30} />

            <input
              type="file"
              accept="image/*,video/*"
              onChange={handleImageUpload}
              style={{ display: "none" }}
            />

          </label>

        </div>

      </div>

      {/* CREATE POST */}

      <div style={styles.createPost}>

        <img
          src="https://i.pravatar.cc/100"
          alt="profile"
          style={styles.profilePic}
        />

        <input
          placeholder="Share your workout progress..."
          style={styles.input}
        />

      </div>

      {/* POSTS */}

      {posts.map((post, index) => (

        <div key={index} style={styles.card}>

          {/* USER */}

          <div style={styles.userRow}>

            <img
              src={post.profile}
              alt="dp"
              style={styles.profilePic}
            />

            <div>

              <h3>{post.user}</h3>

              <p style={{ color: "#888", fontSize: 13 }}>
                Athlete
              </p>

            </div>

          </div>

          {/* IMAGE / VIDEO */}

          {post.isVideo ? (

            <video
              controls
              style={styles.image}
              src={post.image}
            />

          ) : (

            <img
              src={post.image}
              alt="post"
              style={styles.image}
            />

          )}

          {/* ACTIONS */}

          <div style={styles.actionRow}>

            <button
              onClick={() => handleLike(index)}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer"
              }}
            >
              <Heart color="#ff4d88" size={28} />
            </button>

            <MessageCircle color="white" size={28} />

            <Send color="white" size={28} />

          </div>

          {/* STATS */}

          <div style={styles.statsRow}>

            <p>{post.likes} likes</p>

            <p>{post.comments} comments</p>

          </div>

          {/* CAPTION */}

          <p style={styles.caption}>

            <span style={{ fontWeight: "bold" }}>
              {post.user}
            </span>

            {" "} {post.caption}

          </p>

          {/* COMMENT INPUT */}

          <div style={{ marginTop: 10 }}>

            <input
              value={commentText}
              onChange={(e) =>
                setCommentText(e.target.value)
              }
              placeholder="Write comment..."
              style={{
                padding: 8,
                width: "70%",
                borderRadius: 10
              }}
            />

            <button
              onClick={() => handleComment(index)}
              style={{
                marginLeft: 10,
                padding: 8,
                borderRadius: 10
              }}
            >
              Send
            </button>

          </div>

          {/* COMMENTS */}

          <div style={{ marginTop: 10 }}>

            {post.commentList.map((c, i) => (

              <p key={i}>{c}</p>

            ))}

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

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20
  },

  logo: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold"
  },

  headerIcons: {
    display: "flex",
    gap: 15,
    alignItems: "center"
  },

  createPost: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    background: "#111827",
    padding: 15,
    borderRadius: 18,
    marginBottom: 25
  },

  input: {
    flex: 1,
    background: "transparent",
    border: "none",
    outline: "none",
    color: "white",
    fontSize: 16
  },

  card: {
    background: "#081120",
    borderRadius: 25,
    padding: 15,
    marginBottom: 25,
    border: "1px solid #1d2b44"
  },

  userRow: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 15
  },

  profilePic: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    objectFit: "cover"
  },

  image: {
    width: "100%",
    height: 280,
    objectFit: "cover",
    borderRadius: 20
  },

  actionRow: {
    display: "flex",
    gap: 18,
    marginTop: 15,
    alignItems: "center"
  },

  statsRow: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 10,
    color: "#888",
    fontSize: 14
  },

  caption: {
    marginTop: 15,
    color: "#ddd",
    lineHeight: 1.5
  }

};
