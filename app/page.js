"use client";

import { useState, useEffect } from "react";

import Link from "next/link";

import { onAuthStateChanged } from "firebase/auth";

import {
doc,
getDoc,
updateDoc
} from "firebase/firestore";

import { auth, db } from "./firebase";

import {

Menu,
Search,
Bell,

Trophy,
Flame,
Hexagon,

Brain,
Target,
HeartPulse,
MoonStar,
Droplets,

Clock3,
Play,

BarChart3,

Shield,
Crown,
Medal,

Calendar,

Apple,

LineChart,

Zap,

Timer,

BookOpen,

Users,

Bot,

NotebookPen,

GraduationCap,

Gamepad2,

Gift,

User,

MessageCircle,

MonitorPlay,

ClipboardList,

CircleHelp,

Dumbbell,

Home,

Activity,

Award,

SlidersHorizontal

} from "lucide-react";
export default function HomePage() {

const [profileData, setProfileData] = useState(null);

useEffect(() => {

const unsubscribe = onAuthStateChanged(auth, async (user) => {

if (!user) return;

const ref = doc(db, "users", user.uid);

const snap = await getDoc(ref);

if (snap.exists()) {

setProfileData(snap.data());

}

});

return () => unsubscribe();

}, []);

return (

<div style={styles.container}>
{/* TOP BAR */}

<div style={styles.topBar}>

<Menu size={30} color="white"/>

<img
src="/logo.png"
style={{height:45}}
/>

<div style={styles.topStats}>

<div style={styles.topBadge}>
<Trophy size={20} color="#ffb300"/>
<span>{profileData?.trophies || 0}</span>
</div>

<div style={styles.topBadge}>
<Flame size={20} color="#ff7300"/>
<span>{profileData?.streak || 0}</span>
</div>

<div style={styles.topBadge}>
<Hexagon size={20} color="#39ff14"/>
<span>{profileData?.xp || 0}</span>
</div>

<div style={styles.notificationIcon}>
<Bell size={24}/>
<div style={styles.greenDot}></div>
</div>

</div>

</div>


{/* SEARCH BAR */}

<div style={styles.searchBar}>

<Search size={22} color="#777"/>

<input
placeholder="Search workouts, plans, tournaments..."
style={styles.searchInput}
/>

<SlidersHorizontal size={22} color="#8f8f8f"/>

</div>
<div style={styles.heroGrid}>

{/* LEFT CARD */}

<div style={styles.heroCard}>

<h3 style={{color:"white"}}>

Good Evening,

<br/>

<span style={{fontSize:50,fontWeight:800}}>
{profileData?.name || "ATHLETE"}
</span>

</h3>

<div style={{color:"#bbb",fontSize:22}}>
{profileData?.athleteTitle || "Elite Athlete"}
</div>

<h2 style={{marginTop:40}}>
<span style={{color:"#39ff14"}}>Discipline</span> today,
<br/>
Domination tomorrow.
</h2>

</div>


{/* READINESS CARD */}

<div style={styles.heroCard}>

<div style={styles.readinessCircle}>

<h1 style={{fontSize:60}}>
{profileData?.readiness || 92}%
</h1>

<div style={{color:"#39ff14"}}>
READINESS
</div>

</div>

<h2>Optimal</h2>

</div>


{/* RANK CARD */}

<div style={styles.heroCard}>

<Shield
size={90}
color="#8f4fff"
/>

<h2 style={{color:"white"}}>
LEVEL 1 ATHLETE
</h2>

<div style={{color:"#999"}}>
Top 15% Among Athletes
</div>

<br/>

<div style={{
display:"flex",
justifyContent:"space-around"
}}>

<div>
🌍
<h3>#24</h3>
Top 15%
</div>

<div>
🇮🇳
<h3>#5</h3>
Top 5%
</div>

<div>
🏆
<h3>#1</h3>
Top 1%
</div>

</div>

</div>

</div>
<div style={styles.middleGrid}>

{/* DAILY CHALLENGE */}

<div style={styles.heroCard}>

<h2 style={{color:"#39ff14"}}>
DAILY CHALLENGE
</h2>

<h1>
100 Pushups 💪
</h1>

<div
style={{
height:12,
background:"#222",
borderRadius:20,
overflow:"hidden",
marginTop:25
}}
>

<div
style={{
width:"80%",
height:"100%",
background:"#39ff14"
}}
></div>

</div>

<h2 style={{marginTop:20}}>
+50 XP Reward
</h2>

</div>



{/* WORKOUT CARD */}

<div style={styles.heroCard}>

<h2 style={{color:"#39ff14"}}>
TODAY'S PLAN
</h2>

<h1>
Full Body Strength
</h1>

<div
style={{
display:"flex",
gap:25,
marginTop:20
}}
>

<div>
<Clock3 size={20}/>
45 min
</div>

<div>
<Flame size={20}/>
420 kcal
</div>

<div>
<BarChart3 size={20}/>
Advanced
</div>

</div>

<button style={styles.workoutButton}>

Resume Workout

<Play size={20}/>

</button>

</div>

</div>
<div style={styles.statsGrid}>

<div style={styles.statCard}>
<Hexagon size={32} color="#39ff14"/>
<h3>XP TODAY</h3>
<h1>{profileData?.xp || 120}</h1>
<div style={{color:"#39ff14"}}>+12%</div>
</div>

<div style={styles.statCard}>
<Flame size={32} color="#ff8800"/>
<h3>CALORIES</h3>
<h1>{profileData?.caloriesBurned || 2450}</h1>
<div>Goal: 2800</div>
</div>

<div style={styles.statCard}>
<HeartPulse size={32} color="#39ff14"/>
<h3>RECOVERY</h3>
<h1>{profileData?.recovery || 85}%</h1>
<div>Good</div>
</div>

<div style={styles.statCard}>
<MoonStar size={32} color="#bb66ff"/>
<h3>SLEEP SCORE</h3>
<h1>{profileData?.sleepScore || 78}</h1>
<div>Good</div>
</div>

<div style={styles.statCard}>
<Droplets size={32} color="#00bfff"/>
<h3>WATER INTAKE</h3>
<h1>{profileData?.water || 2.6} L</h1>
<div>Goal: 3.0 L</div>
</div>

<div style={styles.statCard}>
<Flame size={32} color="#ffaa00"/>
<h3>STREAK</h3>
<h1>{profileData?.streak || 7}</h1>
<div>Days</div>
</div>

</div>
<div style={styles.bottomGrid}>

{/* AI COACH */}

<div style={styles.heroCard}>

<Brain size={60} color="#00bfff"/>

<h2 style={{color:"#00bfff"}}>
AI COACH INSIGHT
</h2>

<p>
Your recovery is excellent and energy is high.
Perfect day to push your limits 🚀
</p>

<button style={styles.outlineButton}>
View Full Report
</button>

</div>



{/* LEADERBOARD */}

<div style={styles.heroCard}>

<h2 style={{color:"#ffb300"}}>
LEADERBOARD TOP 3
</h2>

<div style={styles.leaderboardRow}>

<div>
🥈
<h3>Dinesh</h3>
1100 XP
</div>

<div>
🥇
<h2>Pragati</h2>
1250 XP
</div>

<div>
🥉
<h3>Athlete X</h3>
980 XP
</div>

</div>

</div>



{/* EVENT */}

<div style={styles.heroCard}>

<Calendar size={60} color="#bb66ff"/>

<h2 style={{color:"#bb66ff"}}>
UPCOMING EVENT
</h2>

<h3>
State Powerlifting Championship
</h3>

<div>
12 May 2025
</div>

<button style={styles.outlineButton}>
Register Now
</button>

</div>

</div>
<div style={styles.heroCard}>

<h2 style={{color:"white"}}>
ALL FEATURES
</h2>

<div style={styles.featureGrid}>

<div style={styles.featureItem}>
<Apple size={35} color="#39ff14"/>
<div>Diet Planner</div>
</div>

<div style={styles.featureItem}>
<LineChart size={35} color="#39ff14"/>
<div>Progress</div>
</div>

<div style={styles.featureItem}>
<Zap size={35} color="#00bfff"/>
<div>Transformation</div>
</div>

<div style={styles.featureItem}>
<MoonStar size={35} color="#bb66ff"/>
<div>Sleep</div>
</div>

<div style={styles.featureItem}>
<Droplets size={35} color="#00bfff"/>
<div>Water Tracker</div>
</div>

<div style={styles.featureItem}>
<Timer size={35} color="#ffaa00"/>
<div>Workout Timer</div>
</div>

<div style={styles.featureItem}>
<BookOpen size={35} color="#ffaa00"/>
<div>Sports Books</div>
</div>

<div style={styles.featureItem}>
<Users size={35} color="#ffaa00"/>
<div>Community</div>
</div>

<div style={styles.featureItem}>
<Bot size={35} color="#bb66ff"/>
<div>AI Coach</div>
</div>

<div style={styles.featureItem}>
<NotebookPen size={35} color="#ffaa00"/>
<div>Notes</div>
</div>

<div style={styles.featureItem}>
<GraduationCap size={35} color="#00bfff"/>
<div>Courses</div>
</div>

<div style={styles.featureItem}>
<Gamepad2 size={35} color="#888"/>
<div>Match Room</div>
</div>

<div style={styles.featureItem}>
<Gift size={35} color="#ffaa00"/>
<div>Rewards</div>
</div>

<div style={styles.featureItem}>
<User size={35} color="#00bfff"/>
<div>Athlete Profile</div>
</div>

<div style={styles.featureItem}>
<MessageCircle size={35} color="#39ff14"/>
<div>Team Chat</div>
</div>

<div style={styles.featureItem}>
<MonitorPlay size={35} color="#8f4fff"/>
<div>Live Match</div>
</div>

<div style={styles.featureItem}>
<ClipboardList size={35} color="#00bfff"/>
<div>All Tests</div>
</div>

<div style={styles.featureItem}>
<CircleHelp size={35} color="#bb66ff"/>
<div>My Doubts</div>
</div>

<div style={styles.featureItem}>
<Dumbbell size={35} color="#39ff14"/>
<div>All Training</div>
</div>

</div>

</div>
{/* BOTTOM NAVIGATION */}

<div style={styles.bottomNav}>

<div style={styles.navItem}>
<Home size={28} color="#39ff14"/>
<div>Home</div>
</div>

<div style={styles.navItem}>
<Dumbbell size={28} color="#aaa"/>
<div>Training</div>
</div>

<div style={styles.navItem}>
<Award size={28} color="#aaa"/>
<div>Tournaments</div>
</div>

<div style={styles.navItem}>
<Flame size={28} color="#aaa"/>
<div>DP</div>
</div>

<div style={styles.navItem}>
<User size={28} color="#aaa"/>
<div>Profile</div>
</div>

</div>
</div>

    </>
  );
    }
const styles = {
    container:{
background:"#05070b",
minHeight:"100vh",
padding:20,
color:"white"
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

topBadge:{
display:"flex",
alignItems:"center",
gap:8,
padding:"10px 18px",
background:"#09111d",
border:"1px solid rgba(255,255,255,.1)",
borderRadius:30
},

notificationIcon:{
position:"relative"
},

greenDot:{
width:10,
height:10,
background:"#39ff14",
borderRadius:"50%",
position:"absolute",
right:-2,
top:0
},

searchBar:{
display:"flex",
alignItems:"center",
gap:15,
background:"#09111d",
padding:18,
borderRadius:30,
marginBottom:25
},

searchInput:{
flex:1,
background:"transparent",
border:"none",
outline:"none",
color:"white",
fontSize:16
},
    heroCard:{
background:"#09111d",
padding:25,
borderRadius:30,
marginBottom:20,
border:"1px solid rgba(255,255,255,.08)"
},

statCard:{
background:"#09111d",
padding:20,
borderRadius:25,
border:"1px solid rgba(255,255,255,.08)"
},

featureGrid:{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(120px,1fr))",
gap:15,
marginTop:25
},

featureItem:{
background:"#09111d",
padding:20,
borderRadius:20,
display:"flex",
flexDirection:"column",
alignItems:"center",
gap:10,
border:"1px solid rgba(255,255,255,.08)"
},

workoutButton:{
background:"#39ff14",
color:"black",
padding:"18px 25px",
border:"none",
borderRadius:20,
fontWeight:"bold",
fontSize:18
},

outlineButton:{
background:"transparent",
border:"1px solid #bb66ff",
color:"#bb66ff",
padding:"15px 25px",
borderRadius:20
},
    bottomNav:{
position:"fixed",
bottom:0,
left:0,
right:0,
background:"#09111d",
display:"flex",
justifyContent:"space-around",
padding:15,
borderTop:"1px solid rgba(255,255,255,.08)"
},

navItem:{
display:"flex",
flexDirection:"column",
alignItems:"center",
gap:8,
color:"#aaa"
}

};
export default HomePage;
