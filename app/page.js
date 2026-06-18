"use client";

import { useState, useEffect } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "./firebase";
import Link from "next/link";

import {
Menu,
Trophy,
Flame,
Bell,
MonitorPlay,
ClipboardList,
MessageCircleQuestion,
BookOpen,
Users,
Bot,
Calendar,
Dumbbell,
Brain,
User,
PlayCircle,
ChevronRight,
Home,
Search,
PlusSquare,
Droplets,
Crown,
Target,
} from "lucide-react";

export default function HomePage() {

const [profileData, setProfileData] =
useState(null);

const [showNotifications, setShowNotifications] = useState(false);

// NEW: Show More / Show Less को कंट्रोल करने के लिए नया state
const [showAllFeatures, setShowAllFeatures] = useState(false);
useEffect(() => {

const unsubscribe =
onAuthStateChanged(
auth,
async (currentUser) => {

if (currentUser) {  

      const docRef =  
        doc(  
          db,  
          "users",  
          currentUser.uid  
        );  

      const docSnap =  
        await getDoc(docRef);  

      if (docSnap.exists()) {  

        setProfileData(  
          docSnap.data()  
        );  

      }  

    }  

  }  
);

return () => unsubscribe();

}, []);
const handleWorkout = async () => {
try {

alert("Clicked");  

if (!auth.currentUser || !profileData) return;  

const newXP = (profileData.xp || 0) + 10;  
const newLevel = Math.floor(newXP / 100) + 1;  
const newStreak = (profileData.streak || 0) + 1;  

const userRef = doc(  
  db,  
  "users",  
  auth.currentUser.uid  
);  

alert("Before Firebase Update");  

await updateDoc(userRef, {  
  xp: newXP,  
  level: newLevel,  
  streak: newStreak  
});  

alert("Firebase Updated");  

setProfileData({  
  ...profileData,  
  xp: newXP,  
  level: newLevel,  
  streak: newStreak  
});

} catch (error) {
alert(error.message);
}
};

const notifications = [
"🔥 Dinesh liked your workout post",
"💬 Pragati commented on your post",
"🏆 You completed 7 day streak",
"🎮 Tournament match starts in 20 mins",
"🎁 Daily reward available",
];

const features = [

{  
  title: "All Training",  
  icon:  
    <MonitorPlay  
      size={38}  
      color="#39ff14"  
    />,  
  link: "/training"  
},  

{  
  title: "All Tests",  
  icon:  
    <ClipboardList  
      size={38}  
      color="#3ea6ff"  
    />,  
  link: "/tests"  
},  

{  
  title: "My Doubts",  
  icon:  
    <MessageCircleQuestion  
      size={38}  
      color="#b266ff"  
    />,  
  link: "/doubts"  
},  

{  
  title: "Sports Books",  
  icon:  
    <BookOpen  
      size={38}  
      color="#ff8c42"  
    />,  
  link: "/books"  
},  

{  
  title: "Community",  
  icon:  
    <Users  
      size={38}  
      color="#ffd633"  
    />,  
  link: "/community"  
},  

{  
  title: "Challenges",  
  icon:  
    <Trophy  
      size={38}  
      color="#ff4d88"  
    />,  
  link: "/challenges"  
},  

{  
  title: "AI Coach",  
  icon:  
    <Bot  
      size={38}  
      color="#00e5ff"  
    />,  
  link: "/ai-coach"  
},  

{  
  title: "Events",  
  icon:  
    <Calendar  
      size={38}  
      color="#4d88ff"  
    />,  
  link: "/events"  
},  

{  
  title: "Diet Planner",  
  icon: "🍎",  
  link: "/diet"  
},  

{  
  title: "Progress",  
  icon: "📊",  
  link: "/progress"  
},  

{  
  title: "Transformation",  
  icon: "🧬",  
  link: "/transformation"  
},  

{  
  title: "Sleep",  
  icon: "💤",  
  link: "/sleep"  
},  

{  
  title: "Water Tracker",  
  icon: "💧",  
  link: "/water-tracker"  
},  

{  
  title: "Workout Timer",  
  icon: "⏱️",  
  link: "/workout-timer"  
},  

{  
  title: "Quiz",  
  icon: "🧠",  
  link: "/quiz"  
},  

{  
  title: "Workout Schedule",  
  icon: "📅",  
  link: "/schedule"  
},  

{  
  title: "Notes",  
  icon: "📝",  
  link: "/notes"  
},  

{  
  title: "Leaderboard",  
  icon:  
    <Crown  
      size={38}  
      color="#ffd700"  
    />,  
  link: "/leaderboard"  
},  

{  
  title: "Courses",  
  icon: "🎓",  
  link: "/courses"  
},  

{  
  title: "Tournaments",  
  icon:  
    <Trophy  
      size={38}  
      color="#ffd700"  
    />,  
  link: "/tournaments"  
},  

{  
  title: "Match Room",  
  icon: "🎮",  
  link: "/match-room"  
},  

{  
  title: "Live Match",  
  icon: "🔴",  
  link: "/live-match"  
},  

{  
  title: "Rewards",  
  icon: "🎁",  
  link: "/rewards"  
},  

{  
  title: "Athlete Profile",  
  icon: "👤",  
  link: "/athlete-profile"  
},  

{  
  title: "Team Chat",  
  icon: "💬",  
  link: "/team-chat"  
},  

{  
  title: "DP",  
  icon:  
    <PlusSquare  
      size={38}  
      color="#ff4d88"  
    />,  
  link: "/dp"  
},

];

const sessions = [

{  
  title:  
    "Cricket Batting Masterclass",  

  coach:  
    "Rahul Dravid",  

  time:  
    "03:00 PM",  

  image:  
    "https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=1200&auto=format&fit=crop"  
},  

{  
  title:  
    "Football Speed & Agility",  

  coach:  
    "Sunil Chhetri",  

  time:  
    "04:30 PM",  

  image:  
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop"  
}

];

// NEW: तय करना कि कितने फीचर्स दिखाने हैं (शुरुआत में 8, बटन दबाने पर सारे)
const displayedFeatures = showAllFeatures ? features : features.slice(0, 8);

return (

<div style={styles.page}>  

  {/* TOP BAR */}  

  <div style={styles.topBar}>  

    <Menu  
      color="white"  
      size={30}  
    />  

    <div style={styles.topStats}>  

      <div style={styles.stat}>  
        <Trophy color="#ffd633" />  
        <span>12</span>  
      </div>  

      <div style={styles.stat}>  
        <Flame color="#39ff14" />  
        <span>7</span>  
      </div>  

      <div style={styles.stat}>  
        <Brain color="#66ff66" />  
        <span>468</span>  
      </div>  

      <div  
        style={{  
          position: "relative"  
        }}  
      >  

        <Bell  
          color="white"  
          size={28}  
          onClick={() =>  
            setShowNotifications(  
              !showNotifications  
            )  
          }  
        />  

        <div style={styles.redDot}>  
        </div>  

      </div>  

    </div>  

  </div>  

  {/* SEARCH */}  

  <div style={styles.searchBox}>  

    <Search  
      color="#888"  
      size={20}  
    />  

    <input  
      placeholder="Search workouts..."  
      style={styles.searchInput}  
    />  

  </div>  

  {/* NOTIFICATIONS */}  

  {showNotifications && (  

    <div style={styles.notificationBox}>  

      <h3  
        style={{  
          marginBottom: 15  
        }}  
      >  
        Notifications  
      </h3>  

      {notifications.map(  
        (item, index) => (  

        <div  
          key={index}  
          style={  
            styles.notificationItem  
          }  
        >  
          {item}  
        </div>  

      ))}  

    </div>  

  )}  

  {/* DASHBOARD */}  

  <div style={styles.dashboardContainer}>  

    <div style={styles.greetingRow}>  

      <div>  

        <p style={styles.welcome}>  
          Good to see you,  
        </p>  

        <h1  
          style={styles.greetingTitle}  
        >  
          Dinesh 👋  
        </h1>  

        <p style={styles.greetingSub}>  
          Focus today.  
          <span  
            style={{  
              color: "#39ff14"  
            }}  
          >  
            {" "}Conquer  
          </span>  
          {" "}tomorrow.  
        </p>  

      </div>  

      <div style={styles.streakCard}>  

        <Flame  
          color="#39ff14"  
          size={40}  
        />  

        <div>  

          <h2>  
            7 DAY STREAK  
          </h2>  

          <p  
            style={{  
              color: "#aaa"  
            }}  
          >  
            Keep it up!  
          </p>  

        </div>  

      </div>  

    </div>  

    <div style={styles.heroCard}>  

      <h2>🏆 Athlete Rank</h2>  

      <h1>

Level {profileData?.level || 1} Athlete

</h1>  <p>Top 15% Athletes</p>  

      <div style={styles.heroStats}>  

        <div>  
          <h3>

{profileData?.xp || 0}

</h3>  
              <p>XP</p>  
            </div>  <div>  
          <h3>

{profileData?.streak || 0}

</h3>  
              <p>Streak</p>  
            </div>  <div>  
          <h3>

{profileData?.wins || 0}

</h3>  
              <p>Trophies</p>  
            </div>  </div>  

    </div>  

    {/* XP */}  

    <div style={styles.xpCard}>  

      <div style={styles.xpTop}>  

        <div>  

          <p  
            style={{  
              color: "#aaa"  
            }}  
          >  
            XP PROGRESS  
          </p>

  <h2                
  style={{  
    color: "#39ff14"  
  }}  
>  
  {profileData?.xp || 0}  <span
style={{
color: "white"
}}

> 

{" "}/1000 XP

  </span>  
</h2>  </div>  

        <div>  

          <p  
            style={{  
              color: "#aaa"  
            }}  
          >  
            LEVEL  
          </p>  

          <h1  
            style={{  
              color: "#39ff14"  
            }}  
          >  
            {profileData?.level || 1}  
          </h1>  

        </div>  

      </div>  

      <div style={styles.progressBar}>  
        <div style={styles.progressFill}>  
        </div>  
      </div>  

    </div>  

    {/* QUICK ACTIONS */}  

    <div style={styles.quickActions}>  

      <button

style={styles.quickBtn}
onClick={handleWorkout}

> 

Start working   
      </button>  

      <button style={styles.quickBtn}>  
        Upload DP  
      </button>  

      <button style={styles.quickBtn}>  
        AI Coach  
      </button>  

    </div>  

    {/* DAILY CHALLENGE */}  

    <div style={styles.challengeCard}>  

      <div>  

        <h2>  
          Daily Challenge 💪  
        </h2>  

        <p style={{ color: "#aaa" }}>  
          Complete 100 Pushups Today  
        </p>  

      </div>  

      <Target  
        color="#39ff14"  
        size={45}  
      />  

    </div>  

    {/* HEALTH */}  

    <div style={styles.healthGrid}>  

      <div style={styles.healthCard}>  

        <Droplets  
          color="#3ea6ff"  
          size={35}  
        />  

        <h2>2.5L</h2>  

        <p style={{ color: "#aaa" }}>  
          Water Intake  
        </p>  

      </div>  

      <div style={styles.healthCard}>  

        <Flame  
          color="#ff7b00"  
          size={35}  
        />  

        <h2>1240</h2>  

        <p style={{ color: "#aaa" }}>  
          Calories Burned  
        </p>  

      </div>  

    </div>  

  </div>  

  {/* FEATURES */}  

  <div style={styles.featureBox}>  

    <div style={styles.featureGrid}>  

      {/* UPDATED: features.map की जगह displayedFeatures.map का इस्तेमाल */}  
      {displayedFeatures.map((item, index) => (  

        <Link  
          href={item.link}  
          key={index}  
          style={styles.featureItem}  
        >  

          {item.icon}  

          <p style={styles.featureText}>  
            {item.title}  
          </p>  

        </Link>  

      ))}  

    </div>  

    {/* NEW: SHOW MORE / SHOW LESS BUTTON */}  
    <button   
      onClick={() => setShowAllFeatures(!showAllFeatures)}  
      style={{  
        marginTop: 20,  
        width: "100%",  
        padding: 15,  
        background: "#1d2b44",  
        color: "white",  
        border: "none",  
        borderRadius: 15,  
        fontWeight: "bold",  
        fontSize: 16,  
        cursor: "pointer"  
      }}  
    >  
      {showAllFeatures ? "Show Less 🔼" : "Show More 🔽"}  
    </button>  

  </div>  

  {/* LEADERBOARD */}  

  <div style={styles.leaderboard}>  

    <h2>  
      🏆 Leaderboard  
    </h2>  

    <div style={styles.leaderItem}>  
      <span>🥇 Dinesh</span>  
      <span>540 XP</span>  
    </div>  

    <div style={styles.leaderItem}>  
      <span>🥈 Rahul</span>  
      <span>500 XP</span>  
    </div>  

    <div style={styles.leaderItem}>  
      <span>🥉 Aryan</span>  
      <span>450 XP</span>  
    </div>  

  </div>  

  {/* UPCOMING */}  

  <div style={styles.sectionHeader}>  

    <h2>  
      Upcoming Sessions  
    </h2>  

    <p style={{ color: "#39ff14" }}>  
      View All  
    </p>  

  </div>  

  {/* SESSIONS */}  

  {sessions.map((item, index) => (  

    <div  
      key={index}  
      style={styles.sessionCard}  
    >  

      <img  
        src={item.image}  
        alt="session"  
        style={styles.sessionImage}  
      />  

      <div style={{ flex: 1 }}>  

        <div style={styles.timeRow}>  

          <span  
            style={{  
              color: "#39ff14"  
            }}  
          >  
            ⏰ {item.time}  
          </span>  

          <span style={styles.liveBadge}>  
            LIVE  
          </span>  

        </div>  

        <h2 style={{ marginTop: 8 }}>  
          {item.title}  
        </h2>  

        <p style={{ color: "#aaa" }}>  
          By {item.coach}  
        </p>  

      </div>  

      <ChevronRight color="white" />  

    </div>  

  ))}  

  {/* PLAYER */}  

  <div style={styles.player}>  

    <div style={styles.playerLeft}>  

      <PlayCircle  
        color="#39ff14"  
        size={50}  
      />  

      <div>  

        <h3>  
          Full Body Strength Workout  
        </h3>  

        <p style={{ color: "#aaa" }}>  
          Build Power & Endurance  
        </p>  

      </div>  

    </div>  

    <button style={styles.resumeBtn}>  
      Resume  
    </button>  

  </div>  

  {/* BOTTOM NAV */}  

  <div style={styles.bottomNav}>  

    <Link href="/" style={styles.navItem}>  
      <Home color="#39ff14" />  
      <span style={{ color: "#39ff14" }}>  
        Home  
      </span>  
    </Link>  

    <Link  
      href="/training"  
      style={styles.navItem}  
    >  
      <Dumbbell color="white" />  
      <span>Training</span>  
    </Link>  

    <Link  
      href="/tournaments"  
      style={styles.navItem}  
    >  
      <Trophy color="white" />  
      <span>Tournaments</span>  
    </Link>  

    <Link  
      href="/dp"  
      style={styles.navItem}  
    >  
      <Flame color="white" />  
      <span>DP</span>  
    </Link>  

    <Link  
      href="/profile"  
      style={styles.navItem}  
    >  
      <User color="white" />  
      <span>Profile</span>  
    </Link>  

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
paddingBottom: 220,
fontFamily: "sans-serif"
},

topBar: {
display: "flex",
justifyContent: "space-between",
alignItems: "center"
},

topStats: {
display: "flex",
gap: 15,
alignItems: "center"
},

stat: {
display: "flex",
gap: 5,
alignItems: "center"
},

searchBox: {
marginTop: 20,
background: "#081120",
borderRadius: 20,
padding: 15,
display: "flex",
gap: 10,
alignItems: "center",
},

searchInput: {
background: "transparent",
border: "none",
outline: "none",
color: "white",
width: "100%",
fontSize: 16,
},

redDot: {
width: 10,
height: 10,
background: "red",
borderRadius: "50%",
position: "absolute",
top: 0,
right: 0
},

notificationBox: {
position: "absolute",
top: 120,
right: 20,
width: 280,
background: "#081120",
border:
"1px solid #1d2b44",
borderRadius: 20,
padding: 15,
zIndex: 999
},

notificationItem: {
background: "#111827",
padding: 12,
borderRadius: 12,
marginBottom: 10
},

dashboardContainer: {
marginTop: 25,
},

greetingRow: {
display: "flex",
justifyContent: "space-between",
gap: 15
},

welcome: {
color: "#aaa"
},

greetingTitle: {
fontSize: 52,
fontWeight: "bold",
},

greetingSub: {
color: "#aaa",
marginTop: 10,
fontSize: 20
},

streakCard: {
background: "#081120",
border:
"1px solid #1d2b44",
borderRadius: 24,
padding: 20,
width: 180
},

xpCard: {
marginTop: 25,
background:
"linear-gradient(135deg,#081120,#0d1b2e)",
border:
"1px solid #1d2b44",
borderRadius: 30,
padding: 25
},

xpTop: {
display: "flex",
justifyContent: "space-between",
},

progressBar: {
marginTop: 20,
height: 12,
width: "100%",
background: "#1d2b44",
borderRadius: 20,
overflow: "hidden"
},

progressFill: {
width: "68%",
height: "100%",
background: "#39ff14",
},

quickActions: {
display: "flex",
gap: 10,
marginTop: 25,
},

quickBtn: {
flex: 1,
background: "#39ff14",
border: "none",
padding: 14,
borderRadius: 16,
fontWeight: "bold",
},

challengeCard: {
marginTop: 25,
background:
"linear-gradient(90deg,#081120,#102400)",
borderRadius: 24,
padding: 20,
display: "flex",
justifyContent: "space-between",
alignItems: "center",
},

healthGrid: {
marginTop: 25,
display: "grid",
gridTemplateColumns:
"repeat(2,1fr)",
gap: 15,
},

healthCard: {
background: "#081120",
padding: 20,
borderRadius: 24,
textAlign: "center",
},

featureBox: {
marginTop: 30,
background: "#081120",
borderRadius: 30,
padding: 25,
},

featureGrid: {
display: "grid",
gridTemplateColumns:
"repeat(2,1fr)",
gap: 20
},

featureItem: {
textAlign: "center",
textDecoration: "none",
color: "white"
},

featureText: {
marginTop: 10,
fontSize: 15
},

leaderboard: {
marginTop: 30,
background: "#081120",
borderRadius: 25,
padding: 20,
},

leaderItem: {
display: "flex",
justifyContent: "space-between",
marginTop: 15,
background: "#111827",
padding: 14,
borderRadius: 14,
},

sectionHeader: {
marginTop: 35,
display: "flex",
justifyContent: "space-between",
alignItems: "center"
},

sessionCard: {
marginTop: 20,
background: "#081120",
borderRadius: 25,
padding: 15,
display: "flex",
gap: 15,
alignItems: "center",
},

sessionImage: {
width: 120,
height: 120,
objectFit: "cover",
borderRadius: 20
},

timeRow: {
display: "flex",
gap: 10,
alignItems: "center"
},

liveBadge: {
background: "red",
padding: "5px 10px",
borderRadius: 10,
fontSize: 12
      player: {
  position: "Forward"
}
