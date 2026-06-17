import {
Menu,
Search,
Bell,
Trophy,
Flame,
Hexagon
} from "lucide-react";
{/* TOP BAR */}

<div style={styles.topBar}>

<Menu size={32} color="white"/>

<img
src="/logo.png"
style={{
height:45
}}
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
<Bell size={25}/>
<div style={styles.greenDot}/>
</div>

</div>

</div>
<div style={styles.searchBar}>

<Search size={22} color="#666"/>

<input
placeholder="Search workouts, plans, tournaments..."
style={styles.searchInput}
/>

</div>
topBar:{
display:"flex",
justifyContent:"space-between",
alignItems:"center",
marginBottom:25
},

topStats:{
display:"flex",
gap:10,
alignItems:"center"
},

topBadge:{
display:"flex",
alignItems:"center",
gap:8,
padding:"10px 16px",
border:"1px solid rgba(255,255,255,.1)",
background:"#09111d",
borderRadius:25,
color:"white"
},

notificationIcon:{
position:"relative"
},

greenDot:{
position:"absolute",
right:0,
top:0,
width:8,
height:8,
background:"#39ff14",
borderRadius:"50%"
},

searchBar:{
display:"flex",
alignItems:"center",
gap:10,
background:"#08111e",
border:"1px solid rgba(255,255,255,.1)",
padding:"18px",
borderRadius:25,
marginBottom:25
},

searchInput:{
background:"transparent",
border:"none",
outline:"none",
color:"white",
fontSize:16,
width:"100%"
},
<div style={styles.heroContainer}>

{/* LEFT CARD */}

<div style={styles.heroLeft}>

<div>

<p style={{color:"#aaa",fontSize:18}}>
Good Evening,
</p>

<h1 style={styles.heroName}>
{profileData?.name || "Athlete"}
</h1>

<p style={styles.heroTitle}>
{profileData?.athleteTitle || "Elite Athlete"}
</p>

<p style={styles.heroText}>
Discipline today,
<br/>
<span style={{color:"#39ff14"}}>
Domination
</span> tomorrow.
</p>

</div>

<div style={styles.heroStatsRow}>

<div>
🔥 {profileData?.streak || 0}
<br/>
<span style={{color:"#999"}}>Day Streak</span>
</div>

<div>
💚 {profileData?.readiness || 0}%
<br/>
<span style={{color:"#999"}}>Readiness</span>
</div>

<div>
⚡ {profileData?.recovery || 0}%
<br/>
<span style={{color:"#999"}}>Recovery</span>
</div>

</div>

</div>

{/* RIGHT CARD */}

<div style={styles.readinessCard}>

<div
style={{
width:180,
height:180,
borderRadius:"50%",
background:
`conic-gradient(#39ff14 ${profileData?.readiness || 0}%,
#1a2436 0%)`,
display:"flex",
justifyContent:"center",
alignItems:"center"
}}
>

<div style={styles.readinessInner}>

<h1 style={{
fontSize:48,
margin:0
}}>
{profileData?.readiness || 0}%
</h1>

<p style={{
color:"#39ff14"
}}>
READINESS
</p>

<p style={{
color:"#aaa"
}}>
{profileData?.readinessStatus || "Optimal"}
</p>

</div>

</div>

</div>

</div>
heroContainer:{
display:"flex",
flexDirection:"column",
gap:20,
marginTop:25
},

heroLeft:{
background:"#08111e",
padding:25,
borderRadius:30,
border:"1px solid rgba(255,255,255,.08)"
},

heroName:{
fontSize:60,
fontWeight:"bold",
marginTop:10
},

heroTitle:{
color:"#39ff14",
fontSize:20
},

heroText:{
fontSize:24,
marginTop:25,
lineHeight:1.5
},

heroStatsRow:{
display:"flex",
justifyContent:"space-between",
marginTop:30,
paddingTop:20,
borderTop:"1px solid rgba(255,255,255,.08)"
},

readinessCard:{
background:"#08111e",
padding:30,
borderRadius:30,
display:"flex",
justifyContent:"center"
},

readinessInner:{
width:150,
height:150,
background:"#020817",
borderRadius:"50%",
display:"flex",
flexDirection:"column",
justifyContent:"center",
alignItems:"center"
},
<div style={styles.rankWorkoutGrid}>

{/* Rank Card */}

<div style={styles.rankCard}>

<h3 style={{color:"#c084fc"}}>YOUR RANK</h3>

<h1>
LEVEL {profileData?.level || 1} ATHLETE
</h1>

<p style={{color:"#aaa"}}>
Top 15% Among All Athletes
</p>

<div style={styles.rankLine}></div>

<div style={styles.rankStats}>

<div>
🌍
<h2>#{profileData?.globalRank || 0}</h2>
<p>Global</p>
</div>

<div>
🇮🇳
<h2>#{profileData?.indiaRank || 0}</h2>
<p>India</p>
</div>

<div>
👑
<h2>#{profileData?.academyRank || 0}</h2>
<p>Academy</p>
</div>

</div>

</div>

{/* Workout Card */}

<div style={styles.workoutCard}>

<p style={{color:"#39ff14"}}>
TODAY'S PLAN
</p>

<h1>
{profileData?.todayWorkout || "Workout"}
</h1>

<div style={{
display:"flex",
gap:20,
color:"#ddd",
marginTop:15
}}>

<span>⏱ 45 min</span>

<span>🔥 420 kcal</span>

<span>📈 {profileData?.workoutLevel || "Advanced"}</span>

</div>

<button style={styles.resumeBtn}>
Resume Workout ▶
</button>

</div>

</div>
  rankWorkoutGrid:{
display:"grid",
gap:20,
marginTop:25
},

rankCard:{
background:"#08111e",
borderRadius:30,
padding:25,
border:"1px solid rgba(255,255,255,.08)"
},

rankLine:{
height:8,
background:"#7c3aed",
borderRadius:20,
marginTop:15,
marginBottom:20
},

rankStats:{
display:"flex",
justifyContent:"space-between",
textAlign:"center"
},

workoutCard:{
background:"#08111e",
borderRadius:30,
padding:25,
border:"1px solid rgba(255,255,255,.08)"
},

resumeBtn:{
marginTop:25,
width:"100%",
background:"#39ff14",
border:"none",
padding:18,
borderRadius:20,
fontSize:18,
fontWeight:"bold",
cursor:"pointer"
},
{/* DAILY CHALLENGE */}

<div style={styles.challengeCard}>

<div>

<p style={{
color:"#39ff14",
fontSize:18
}}>
DAILY CHALLENGE
</p>

<h1>
{profileData?.dailyChallenge}
💪
</h1>

<div style={styles.challengeBar}>
<div
style={{
...styles.challengeFill,
width:`${profileData?.challengeProgress || 0}%`
}}
></div>
</div>

<p style={{
color:"#aaa"
}}>
+50 XP Reward
</p>

</div>

<div style={{
fontSize:50
}}>
🎯
</div>

</div>
<div style={styles.statsGrid}>

<div style={styles.statCard}>
<h3>XP TODAY</h3>
<h1>{profileData?.xpToday || 0}</h1>
<p>+12%</p>
</div>

<div style={styles.statCard}>
<h3>CALORIES</h3>
<h1>{profileData?.caloriesBurned || 0}</h1>
<p>Goal : 2800</p>
</div>

<div style={styles.statCard}>
<h3>RECOVERY</h3>
<h1>{profileData?.recovery || 0}%</h1>
<p>{profileData?.recoveryStatus}</p>
</div>

<div style={styles.statCard}>
<h3>SLEEP SCORE</h3>
<h1>{profileData?.sleepScore || 0}</h1>
<p>{profileData?.sleepStatus}</p>
</div>

<div style={styles.statCard}>
<h3>WATER INTAKE</h3>
<h1>{profileData?.water || 0} L</h1>
<p>Goal : 3.0 L</p>
</div>

<div style={styles.statCard}>
<h3>STREAK</h3>
<h1>{profileData?.streak || 0}</h1>
<p>Days</p>
</div>

</div>
challengeCard:{
marginTop:25,
background:"#08111e",
padding:25,
borderRadius:30,
display:"flex",
justifyContent:"space-between",
alignItems:"center",
border:"1px solid rgba(255,255,255,.08)"
},

challengeBar:{
height:12,
background:"#1d2b44",
borderRadius:20,
overflow:"hidden",
marginTop:15
},

challengeFill:{
height:"100%",
background:"#39ff14"
},

statsGrid:{
display:"grid",
gridTemplateColumns:"repeat(2,1fr)",
gap:15,
marginTop:25
},

statCard:{
background:"#08111e",
padding:20,
borderRadius:25,
border:"1px solid rgba(255,255,255,.08)"
},
<div style={styles.aiCard}>

<div>

<p style={{
color:"#9d4edd",
fontWeight:"bold"
}}>
AI COACH INSIGHT
</p>

<h2>
Recovery is excellent.
Push for a high-intensity session today.
</h2>

<button style={styles.aiBtn}>
View Full Report
</button>

</div>

<div style={{
fontSize:60
}}>
🧠
</div>

</div>
<div style={styles.leaderCard}>

<h2>
🏆 Hall Of Fame
</h2>

<div style={styles.leaderRow}>
<span>🥇 Dinesh</span>
<span>{profileData?.xp || 0} XP</span>
</div>

<div style={styles.leaderRow}>
<span>🥈 Rahul</span>
<span>500 XP</span>
</div>

<div style={styles.leaderRow}>
<span>🥉 Aryan</span>
<span>450 XP</span>
</div>

</div>
<div style={styles.eventCard}>

<div>

<p style={{
color:"#39ff14"
}}>
UPCOMING EVENT
</p>

<h2>
State Powerlifting Championship
</h2>

<p style={{
color:"#aaa"
}}>
12 May 2026
</p>

<button style={styles.registerBtn}>
Register
</button>

</div>

<div style={{
fontSize:55
}}>
🏆
</div>

</div>
aiCard:{
marginTop:25,
background:"#08111e",
padding:25,
borderRadius:30,
display:"flex",
justifyContent:"space-between",
alignItems:"center",
border:"1px solid rgba(157,78,221,.2)"
},

aiBtn:{
marginTop:20,
background:"#9d4edd",
border:"none",
padding:"14px 22px",
borderRadius:20,
color:"white",
fontWeight:"bold"
},

leaderCard:{
marginTop:25,
background:"#08111e",
padding:25,
borderRadius:30
},

leaderRow:{
display:"flex",
justifyContent:"space-between",
padding:16,
marginTop:15,
background:"#111827",
borderRadius:20
},

eventCard:{
marginTop:25,
background:"#08111e",
padding:25,
borderRadius:30,
display:"flex",
justifyContent:"space-between",
alignItems:"center"
},

registerBtn:{
marginTop:20,
background:"#39ff14",
border:"none",
padding:"14px 20px",
borderRadius:20,
fontWeight:"bold"
},
