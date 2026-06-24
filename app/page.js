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

  <div style={styles.logoSection}>
    <Menu color="white" size={30} />
    <h2 style={styles.logo}>
      SPORTS <span style={{ color: "#39ff14" }}>FIT ZONE</span>
    </h2>
  </div>

  <div style={styles.topStats}>

    <div style={styles.statCard}>
      <Trophy color="#ffd633" size={18}/>
      <span>{profileData?.level || 1}</span>
    </div>

    <div style={styles.statCard}>
      <Flame color="#ff9900" size={18}/>
      <span>{profileData?.streak || 0}</span>
    </div>

    <div style={styles.statCard}>
      <Brain color="#39ff14" size={18}/>
      <span>{profileData?.xp || 0}</span>
    </div>

    <div
      style={styles.notificationBtn}
      onClick={() =>
        setShowNotifications(!showNotifications)
      }
    >
      <Bell color="white" size={24}/>
      <div style={styles.greenDot}></div>
    </div>

  </div>

</div>

  {/* SEARCH */}  

<div style={styles.searchBox}>

  <Search
    color="#777"
    size={25}
  />

  <input
    placeholder="Search workouts, plans, tournaments..."
    style={styles.searchInput}
  />

</div>

  {/* NOTIFICATIONS */}  
{showNotifications && (

  <div style={styles.notificationBox}>

    <div style={styles.notificationHeader}>
      <h3 style={styles.notificationTitle}>
        Notifications
      </h3>
    </div>

    {notifications.map((item, index) => (

      <div
        key={index}
        style={styles.notificationItem}
      >

        <Bell
          size={18}
          color="#39ff14"
        />

        <span>
          {item}
        </span>

      </div>

    ))}

  </div>

)}

  {/* DASHBOARD */}  

  <div style={styles.dashboardContainer}>  

    <div style={styles.heroSection}>

  <div style={styles.heroLeft}>

    <div style={styles.statusBar}></div>

    <h1 style={styles.heroName}>
      {profileData?.name || "Athlete"}
    </h1>

    <p style={styles.heroRole}>
      Elite Athlete ✅
    </p>

    <p style={styles.heroQuote}>
      Discipline today,
      <br />
      <span style={{ color: "#39ff14" }}>
        Domination
      </span>{" "}
      tomorrow.
    </p>

    <div style={styles.readyCard}>
      <div style={styles.readyDot}></div>

      <div>
        <h3>Ready To Train</h3>
        <p>Your body. Your mind. Your moment.</p>
      </div>
    </div>

  </div>

  <div style={styles.readinessCard}>

    <div style={styles.readinessCircle}>
      <h1>
        {Math.min(
          100,
          50 +
          (profileData?.streak || 0) * 5 +
          Math.floor((profileData?.xp || 0) / 20)
        )}
        %
      </h1>

      <p>READINESS</p>
    </div>

    <h3 style={{ color: "#39ff14" }}>
      OPTIMAL
    </h3>

    <p>You are in the zone!</p>

  </div>

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
heroSection:{
display:"flex",
justifyContent:"space-between",
gap:20,
marginTop:25,
flexWrap:"wrap"
},

heroLeft:{
flex:1,
minWidth:250
},

statusBar:{
width:8,
height:60,
borderRadius:20,
background:"#39ff14",
marginBottom:15
},

heroName:{
fontSize:52,
fontWeight:"900",
margin:0
},

heroRole:{
fontSize:20,
color:"#ddd",
marginTop:10
},

heroQuote:{
fontSize:18,
lineHeight:1.6,
marginTop:25
},

readyCard:{
marginTop:25,
background:"#091423",
border:"1px solid #1a2d45",
borderRadius:25,
padding:20,
display:"flex",
gap:15,
alignItems:"center"
},

readyDot:{
width:18,
height:18,
borderRadius:"50%",
background:"#39ff14",
boxShadow:"0 0 15px #39ff14"
},

readinessCard:{
width:260,
background:"#091423",
border:"1px solid #1a2d45",
borderRadius:30,
padding:25,
textAlign:"center"
},

readinessCircle:{
width:180,
height:180,
borderRadius:"50%",
border:"10px solid #39ff14",
display:"flex",
flexDirection:"column",
justifyContent:"center",
alignItems:"center",
margin:"0 auto 20px auto",
boxShadow:"0 0 25px rgba(57,255,20,.4)"
},
page: {
background: "#020817",
minHeight: "100vh",
color: "white",
padding: 20,
paddingBottom: 220,
fontFamily: "sans-serif"
},

topBar:{
display:"flex",
justifyContent:"space-between",
alignItems:"center",
marginBottom:25
},

topStats:{
display:"flex",
gap:12,
alignItems:"center"
 },
     
logoSection:{
display:"flex",
alignItems:"center",
gap:15
},

logo:{
color:"white",
fontSize:16,
fontWeight:"900",
letterSpacing:1
},

statCard:{
display:"flex",
alignItems:"center",
gap:8,
padding:"12px 18px",
borderRadius:25,
background:"#07111d",
border:"1px solid #1a2d45",
boxShadow:"0 0 15px rgba(57,255,20,.15)"
},

notificationBtn:{
position:"relative",
width:52,
height:52,
borderRadius:"50%",
display:"flex",
justifyContent:"center",
alignItems:"center",
border:"1px solid #1a2d45",
background:"#07111d",
cursor:"pointer"
},

greenDot:{
position:"absolute",
top:10,
right:10,
width:10,
height:10,
borderRadius:"50%",
background:"#39ff14"
},

stat: {
display: "flex",
gap: 5,
alignItems: "center"
},

searchBox:{
display:"flex",
alignItems:"center",
background:"#07111d",
border:"1px solid #16273d",
padding:"18px 20px",
width:"100%",
boxSizing:"border-box",
borderRadius:35,
marginTop:20,
gap:15
},

searchInput:{
flex:1,
background:"transparent",
border:"none",
outline:"none",
color:"white",
fontSize:17
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
fontSize: 12,
      },
player: {
    position: "fixed",
    bottom: 90,
    left: 10,
    right: 10,
    background: "#111827",
    borderRadius: 20,
    padding: 15,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  playerLeft: {
    display: "flex",
    gap: 15,
    alignItems: "center"
  },

  resumeBtn: {
    background: "#39ff14",
    border: "none",
    padding: "12px 20px",
    borderRadius: 15,
    fontWeight: "bold"
  },

  bottomNav: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    background: "#020817",
    display: "flex",
    justifyContent: "space-around",
    padding: 15,
    borderTop:
      "1px solid #1d2b44"
  },

  navItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 5,
    color: "white",
    textDecoration: "none",
    fontSize: 12
  },
  
  heroCard: {
    marginTop: 25,
    background: "linear-gradient(135deg,#1a1f3a,#2d1b69)",
    borderRadius: 30,
    padding: 25,
    border: "1px solid #3d4a7a",
    textAlign: "center"
  },

  heroStats: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: 20
  }
     }; 
