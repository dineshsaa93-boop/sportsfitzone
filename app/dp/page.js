"use client";

import {
  Heart,
  MessageCircle,
  Send,
  PlusSquare,
  ImagePlus,
} from "lucide-react";

export default function DPPage() {

  const posts = [
    {
      user: "Dinesh",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
      caption: "Completed intense chest workout 🔥",
    likes: 100,
comments: 24
},

    {
      user: "Rahul",
      image:
        "https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=1200&auto=format&fit=crop",
      caption: "Morning cricket practice 🏏",
   likes: 100,
comments: 24 
    },

    {
      user: "pragati",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
      caption: "5KM running completed 🏃",
   likes: 100,
comments: 24 
    }
  ];

  return (
    <div>
    <div style={styles.header}>

  <h1 style={styles.logo}>
    DP Community 🔥
  </h1>

  <div style={styles.headerIcons}>
    <Camera color="white" />
    <Video color="white" />
  </div>

</div>

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
<button style={styles.uploadBtn}>
  <ImagePlus size={20} />
  Upload Photo
</button>
</div>
    <div style={styles.page}>

      {/* TOP BAR */}

      <div style={styles.topBar}>
        <h1 style={styles.logo}>
          DP Community
        </h1>

        <PlusSquare color="white" size={30} />
      </div>

      {/* POSTS */}

      {posts.map((post, index) => (

        <div key={index} style={styles.card}>

          {/* USER */}

          <div style={styles.userRow}>

            <div style={styles.avatar}>
              {post.user.charAt(0)}
            </div>

            <div>
              <h3>{post.user}</h3>

              <p style={{ color: "#888", fontSize: 13 }}>
                Athlete
              </p>
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
            <div style={styles.statsRow}>
  <p>{post.likes} likes</p>
  <p>{post.comments} comments</p>
</div>

            <Heart color="#ff4d88" size={28} />

            <MessageCircle color="white" size={28} />

            <Send color="white" size={28} />

          </div>

          {/* CAPTION */}
       <p style={styles.caption}>
            <span style={{ fontWeight: "bold" }}>
              {post.user}
            </span>

            {" "} {post.caption}
          </p>

        </div>

      ))}

    </div>
  </div>
        );
}

const styles = {
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
  gap: 15
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

profilePic: {
  width: 50,
  height: 50,
  borderRadius: "50%"
},

input: {
  flex: 1,
  background: "transparent",
  border: "none",
  outline: "none",
  color: "white",
  fontSize: 16,
  uploadBtn: {
uploadBtn: {
  display: "flex",
  alignItems: "center",
  gap: 8,
  background: "#ff4d88",
  color: "white",
  border: "none",
  padding: "10px 15px",
  borderRadius: 12,
  cursor: "pointer",
  fontWeight: "bold"
},
  page: {
    background: "#020817",
    minHeight: "100vh",
    padding: 20,
    color: "white",
    fontFamily: "sans-serif"
  },

  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25
  },

  logo: {
    fontSize: 32,
    fontWeight: "bold"
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

  avatar: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    background: "#39ff14",
    color: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 22
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
    marginTop: 15
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
