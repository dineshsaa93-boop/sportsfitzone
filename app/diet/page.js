"use client";

import { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot, setDoc, updateDoc, increment, arrayUnion, collection, getDocs } from "firebase/firestore";
import { 
  Flame, Droplet, Target, Apple, Plus, List, 
  Settings, Award, Zap, Activity, CheckCircle, ChevronRight 
} from "lucide-react";

export default function DietPlannerSystem() {
  const [userId, setUserId] = useState(null);
  const [activeTab, setActiveTab] = useState("dashboard"); // dashboard, meals, grocery
  const [loading, setLoading] = useState(true);

  // States
  const [profile, setProfile] = useState(null);
  const [waterIntake, setWaterIntake] = useState(0);
  const [consumedMacros, setConsumedMacros] = useState({ calories: 0, protein: 0, carbs: 0, fats: 0 });
  const [workoutIntensity, setWorkoutIntensity] = useState("Normal"); // Mocked integration state

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => {
      if (user) setUserId(user.uid);
      else setLoading(false);
    });
    return () => unsub();
  }, []);

  // Fetch Firebase Data
  useEffect(() => {
    if (!userId) return;

    // 1. Fetch Diet Profile
    const unsubProfile = onSnapshot(doc(db, "dietProfiles", userId), (docSnap) => {
      if (docSnap.exists()) setProfile(docSnap.data());
      setLoading(false);
    });

    // 2. Fetch Today's Water (Real-time)
    const todayStr = new Date().toISOString().split("T")[0];
    const unsubWater = onSnapshot(doc(db, "waterLogs", `${userId}_${todayStr}`), (docSnap) => {
      if (docSnap.exists()) setWaterIntake(docSnap.data().amount);
    });

    // 3. Mock Workout Hub Integration Check (Checking if user worked out heavily today)
    const unsubWorkout = onSnapshot(doc(db, "users", userId), (docSnap) => {
      if (docSnap.exists() && docSnap.data().completedWorkoutsCount > 5) {
        setWorkoutIntensity("High"); 
      }
    });

    return () => { unsubProfile(); unsubWater(); unsubWorkout(); };
  }, [userId]);

  // SMART DIET GENERATOR (BMR & TDEE Calculations)
  const generateDietPlan = async (formData) => {
    const { age, gender, height, weight, sport, activityLevel, goal, preference } = formData;
    
    // 1. Calculate BMR (Mifflin-St Jeor Equation)
    let bmr = (10 * weight) + (6.25 * height) - (5 * age);
    bmr += gender === "Male" ? 5 : -161;

    // 2. Activity Multiplier
    const multipliers = { Sedentary: 1.2, Light: 1.375, Moderate: 1.55, Active: 1.725, Athlete: 1.9 };
    let tdee = bmr * (multipliers[activityLevel] || 1.55);

    // 3. Goal Adjustment
    if (goal === "Muscle Gain") tdee += 300;
    else if (goal === "Endurance") tdee += 150;
    else if (goal === "Fat Loss") tdee -= 500;

    // 4. Macro Targets
    const proteinTarget = Math.round(weight * 2.2); // 2.2g per kg
    const fatTarget = Math.round(weight * 0.9); // 0.9g per kg
    const remainingCalories = tdee - ((proteinTarget * 4) + (fatTarget * 9));
    const carbsTarget = Math.max(100, Math.round(remainingCalories / 4));

    // 5. Water Target
    const waterTarget = activityLevel === "Athlete" || sport === "Athletics" ? 4.5 : 3.5;

    const newProfile = {
      ...formData,
      calorieTarget: Math.round(tdee),
      proteinTarget, carbsTarget, fatTarget, waterTarget,
      updatedAt: new Date().toISOString()
    };

    await setDoc(doc(db, "dietProfiles", userId), newProfile);
  };

  const logWater = async () => {
    if (!userId) return;
    const todayStr = new Date().toISOString().split("T")[0];
    const logRef = doc(db, "waterLogs", `${userId}_${todayStr}`);
    
    // Add Water
    await setDoc(logRef, { amount: increment(0.25), timestamp: new Date().toISOString(), userId }, { merge: true });
    
    // Award 5 XP for Hydration inside Global Profile
    await updateDoc(doc(db, "users", userId), { xp: increment(5) });
  };

  if (loading) return <div style={s.center}><h2>Initializing Nutrition Protocols...</h2></div>;

  // Show Onboarding if no profile exists
  if (!profile) return <OnboardingSystem onSubmit={generateDietPlan} />;

  // Workout Hub Integration adjustments
  const dynamicWaterTarget = workoutIntensity === "High" ? profile.waterTarget + 1 : profile.waterTarget;
  const dynamicProteinTarget = workoutIntensity === "High" ? profile.proteinTarget + 20 : profile.proteinTarget;

  return (
    <div style={s.page}>
      {/* HEADER */}
      <div style={s.header}>
        <div>
          <h1 style={s.title}>Elite <span style={{color:"#39ff14"}}>Nutrition</span></h1>
          <p style={s.sub}>Sport: {profile.sport} | Goal: {profile.goal}</p>
        </div>
        <div style={s.navTabs}>
          {["dashboard", "meals", "grocery"].map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} style={{...s.tabBtn, background: activeTab === tab ? "rgba(57,255,20,0.1)" : "transparent", color: activeTab === tab ? "#39ff14" : "#94a3b8", borderBottom: activeTab === tab ? "2px solid #39ff14" : "2px solid transparent"}}>
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {activeTab === "dashboard" && <Dashboard profile={profile} waterIntake={waterIntake} dynamicWaterTarget={dynamicWaterTarget} dynamicProteinTarget={dynamicProteinTarget} consumed={consumedMacros} logWater={logWater} workoutIntensity={workoutIntensity} />}
      {activeTab === "meals" && <MealPlanner profile={profile} />}
      {activeTab === "grocery" && <GroceryList />}

    </div>
  );
}

// ==========================================
// 1. DASHBOARD & MACRO TRACKING
// ==========================================
function Dashboard({ profile, waterIntake, dynamicWaterTarget, dynamicProteinTarget, consumed, logWater, workoutIntensity }) {
  const calPct = Math.min(100, Math.round((consumed.calories / profile.calorieTarget) * 100));
  const waterPct = Math.min(100, Math.round((waterIntake / dynamicWaterTarget) * 100));

  return (
    <div>
      {/* WORKOUT INTEGRATION ALERT */}
      {workoutIntensity === "High" && (
        <div style={{...s.glass, background: "rgba(255, 77, 136, 0.1)", border: "1px solid rgba(255,77,136,0.3)", display:"flex", gap:"15px", alignItems:"center"}}>
          <Activity color="#ff4d88" size={24}/>
          <div>
            <h4 style={{margin:"0 0 5px", color:"#ff4d88"}}>High Training Load Detected</h4>
            <p style={{margin:0, fontSize:"13px", color:"#e2e8f0"}}>Workout Hub sync indicates heavy load. Daily protein target increased by 20g and water by 1L for recovery.</p>
          </div>
        </div>
      )}

      {/* SPORT SPECIFIC RECOMMENDATION */}
      <div style={{...s.glass, borderLeft: "4px solid #3ea6ff", marginBottom: "20px"}}>
        <h3 style={{margin:"0 0 5px", display:"flex", alignItems:"center", gap:"8px"}}><Zap size={18} color="#3ea6ff"/> {profile.sport} Nutrition Protocol</h3>
        <p style={{margin:0, fontSize:"14px", color:"#94a3b8"}}>
          {profile.sport === "Cricket" ? "Prioritize fast-digesting carbs during innings breaks. Maintain electrolyte balance in high heat." : 
           profile.sport === "Badminton" ? "Focus on glycogen storage. Badminton requires high explosive energy; maintain high carb intake 2 hours pre-match." :
           "Follow your standard macro split. Ensure 20g protein immediately post-training."}
        </p>
      </div>

      <div style={s.grid2}>
        {/* CALORIE TRACKER */}
        <div style={s.glass}>
          <h2 style={s.cardTitle}><Flame color="#ffaa00"/> Daily Energy</h2>
          <div style={{display:"flex", alignItems:"center", gap:"20px", marginTop:"20px"}}>
            <div style={s.ringContainer}>
              {/* CSS Circle Progress Mock */}
              <div style={{...s.circle, background: `conic-gradient(#ffaa00 ${calPct}%, rgba(255,255,255,0.1) 0)`}}>
                <div style={s.innerCircle}>
                  <h2 style={{margin:0, fontSize:"24px"}}>{profile.calorieTarget - consumed.calories}</h2>
                  <span style={{fontSize:"11px", color:"#aaa"}}>Kcal Left</span>
                </div>
              </div>
            </div>
            <div style={{flex: 1, display:"flex", flexDirection:"column", gap:"15px"}}>
              <MacroBar label="Protein" color="#3ea6ff" current={consumed.protein} target={dynamicProteinTarget} unit="g" />
              <MacroBar label="Carbs" color="#9d4edd" current={consumed.carbs} target={profile.carbsTarget} unit="g" />
              <MacroBar label="Fats" color="#ff4d88" current={consumed.fats} target={profile.fatTarget} unit="g" />
            </div>
          </div>
        </div>

        {/* WATER TRACKER */}
        <div style={s.glass}>
          <div style={s.flexSB}>
            <h2 style={s.cardTitle}><Droplet color="#3ea6ff"/> Hydration</h2>
            <span style={s.xpTag}>+5 XP / Glass</span>
          </div>
          <div style={{textAlign:"center", margin:"20px 0"}}>
            <h1 style={{fontSize:"36px", margin:"0 0 5px", color:"white"}}>{waterIntake.toFixed(1)} <span style={{fontSize:"18px", color:"#94a3b8"}}>/ {dynamicWaterTarget} L</span></h1>
            <div style={{background: "rgba(255,255,255,0.1)", height: "10px", borderRadius: "5px", overflow:"hidden", marginBottom:"20px"}}>
              <div style={{background: "#3ea6ff", width: `${waterPct}%`, height: "100%", transition:"width 0.3s ease"}}></div>
            </div>
            <button onClick={logWater} style={{...s.actionBtn, background:"#3ea6ff", width:"100%", color:"#020617"}}><Plus size={18}/> Log 250ml Water</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const MacroBar = ({ label, color, current, target, unit }) => (
  <div>
    <div style={{...s.flexSB, fontSize:"13px", marginBottom:"5px"}}>
      <span style={{color:"#e2e8f0", fontWeight:"bold"}}>{label}</span>
      <span style={{color:"#94a3b8"}}>{current} / {target}{unit}</span>
    </div>
    <div style={{background: "rgba(255,255,255,0.1)", height: "6px", borderRadius: "3px"}}>
      <div style={{background: color, width: `${Math.min(100, (current/target)*100)}%`, height: "100%", borderRadius: "3px"}}></div>
    </div>
  </div>
);

// ==========================================
// 2. MEAL PLANNER ENGINE
// ==========================================
function MealPlanner({ profile }) {
  // Mock generated meal plan based on preference
  const isVeg = profile.preference === "Veg";
  const meals = [
    { type: "Breakfast", name: isVeg ? "Oats with Whey & Berries" : "4 Scrambled Eggs & Toast", cals: 450, p: 30, c: 50, f: 15 },
    { type: "Lunch", name: isVeg ? "Paneer Quinoa Bowl" : "Chicken Breast & Brown Rice", cals: 600, p: 45, c: 70, f: 12 },
    { type: "Pre-Workout", name: "Banana & Peanut Butter", cals: 250, p: 8, c: 30, f: 10 },
    { type: "Dinner", name: isVeg ? "Tofu Stir Fry" : "Grilled Fish & Greens", cals: 500, p: 40, c: 40, f: 18 }
  ];

  return (
    <div style={s.grid}>
      {meals.map((meal, i) => (
        <div key={i} style={{...s.glass, position:"relative", overflow:"hidden"}}>
          <div style={{position:"absolute", top:0, left:0, width:"4px", height:"100%", background:"#39ff14"}}></div>
          <div style={s.flexSB}>
            <span style={{color:"#94a3b8", fontSize:"12px", textTransform:"uppercase", fontWeight:"bold"}}>{meal.type}</span>
            <button style={{background:"transparent", border:"none", color:"#39ff14", cursor:"pointer", display:"flex", alignItems:"center", gap:"5px", fontSize:"13px"}}>
              <CheckCircle size={14}/> Log Meal
            </button>
          </div>
          <h3 style={{margin:"10px 0 15px", fontSize:"18px"}}>{meal.name}</h3>
          <div style={{display:"flex", gap:"10px", flexWrap:"wrap"}}>
            <span style={s.macroTag}>🔥 {meal.cals} kcal</span>
            <span style={s.macroTag}>🥩 {meal.p}g P</span>
            <span style={s.macroTag}>🌾 {meal.c}g C</span>
            <span style={s.macroTag}>🥑 {meal.f}g F</span>
          </div>
        </div>
      ))}
    </div>
  );
}

// ==========================================
// 3. GROCERY LIST GENERATOR
// ==========================================
function GroceryList() {
  const items = ["Chicken Breast (1.5kg)", "Whey Protein (1 box)", "Oats (1kg)", "Eggs (2 Dozen)", "Brown Rice (1kg)", "Broccoli (500g)"];
  
  return (
    <div style={s.glass}>
      <h2 style={s.cardTitle}><List color="#9d4edd"/> Auto-Generated Grocery List</h2>
      <p style={{color:"#aaa", fontSize:"14px", marginBottom:"20px"}}>Based on your active meal plan for the week.</p>
      
      {items.map((item, i) => (
        <div key={i} style={{...s.flexSB, background:"rgba(0,0,0,0.3)", padding:"12px 15px", borderRadius:"8px", marginBottom:"10px", border:"1px solid rgba(255,255,255,0.05)"}}>
          <span style={{color:"white"}}>{item}</span>
          <input type="checkbox" style={{width:"18px", height:"18px", cursor:"pointer"}} />
        </div>
      ))}
    </div>
  );
}

// ==========================================
// 4. ONBOARDING & INPUT SYSTEM
// ==========================================
function OnboardingSystem({ onSubmit }) {
  const [form, setForm] = useState({ age: 20, gender: "Male", height: 175, weight: 70, sport: "Cricket", activityLevel: "Active", goal: "Performance Boost", preference: "Non-Veg" });

  const handleChange = (e) => setForm({...form, [e.target.name]: e.target.value});

  return (
    <div style={{...s.page, display:"flex", justifyContent:"center", alignItems:"center"}}>
      <div style={{...s.glass, width:"100%", maxWidth:"500px", padding:"30px"}}>
        <h2 style={{margin:"0 0 5px", textAlign:"center", fontSize:"24px"}}>Diet Profile Initialization</h2>
        <p style={{textAlign:"center", color:"#aaa", marginBottom:"25px"}}>Establish your baseline for accurate macro compilation.</p>
        
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"15px"}}>
          <Input label="Age" name="age" type="number" value={form.age} onChange={handleChange} />
          <Select label="Gender" name="gender" options={["Male", "Female"]} value={form.gender} onChange={handleChange} />
          <Input label="Height (cm)" name="height" type="number" value={form.height} onChange={handleChange} />
          <Input label="Weight (kg)" name="weight" type="number" value={form.weight} onChange={handleChange} />
        </div>

        <Select label="Primary Sport" name="sport" options={["Cricket", "Badminton", "Football", "Basketball", "Athletics", "Gym/Fitness"]} value={form.sport} onChange={handleChange} />
        <Select label="Activity Level" name="activityLevel" options={["Sedentary", "Light", "Moderate", "Active", "Athlete"]} value={form.activityLevel} onChange={handleChange} />
        <Select label="Primary Goal" name="goal" options={["Muscle Gain", "Performance Boost", "Endurance", "Fat Loss"]} value={form.goal} onChange={handleChange} />
        <Select label="Diet Preference" name="preference" options={["Veg", "Non-Veg"]} value={form.preference} onChange={handleChange} />

        <button onClick={() => onSubmit(form)} style={{...s.actionBtn, background:"linear-gradient(90deg, #39ff14, #3ea6ff)", width:"100%", color:"#020617", marginTop:"20px", padding:"15px", fontSize:"16px"}}>
          Generate Nutrition Protocol
        </button>
      </div>
    </div>
  );
}

const Input = ({ label, ...props }) => (
  <div style={{marginBottom:"15px", width:"100%"}}>
    <label style={{display:"block", fontSize:"12px", color:"#94a3b8", marginBottom:"5px", fontWeight:"bold"}}>{label}</label>
    <input {...props} style={{width:"100%", padding:"10px", background:"rgba(0,0,0,0.3)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:"8px", color:"white", boxSizing:"border-box"}} />
  </div>
);

const Select = ({ label, options, ...props }) => (
  <div style={{marginBottom:"15px", width:"100%"}}>
    <label style={{display:"block", fontSize:"12px", color:"#94a3b8", marginBottom:"5px", fontWeight:"bold"}}>{label}</label>
    <select {...props} style={{width:"100%", padding:"10px", background:"#0f172a", border:"1px solid rgba(255,255,255,0.1)", borderRadius:"8px", color:"white", boxSizing:"border-box"}}>
      {options.map(o => <option key={o} value={o}>{o}</option>)}
    </select>
  </div>
);

// ==========================================
// STYLES (Identical Glassmorphism Theme)
// ==========================================
const flex = { display: "flex", alignItems: "center" };
const flexSB = { ...flex, justifyContent: "space-between" };
const gl = { background: "rgba(15, 23, 42, 0.6)", backdropFilter: "blur(12px)", padding: "20px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.08)", marginBottom: "20px" };

const s = {
  page: { minHeight: "100vh", background: "#020617", color: "white", padding: "20px", fontFamily: "sans-serif", maxWidth: "1000px", margin: "0 auto", paddingBottom: "50px" },
  center: { ...flex, justifyContent: "center", minHeight: "100vh", background: "#020617", color: "white" },
  header: { marginBottom: "30px", display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:"15px", alignItems:"flex-end" },
  title: { fontSize: "32px", fontWeight: "900", margin: 0, letterSpacing: "-0.5px" },
  sub: { color: "#94a3b8", fontSize: "14px", margin: "5px 0 0", fontWeight:"bold" },
  navTabs: { display: "flex", gap: "10px", borderBottom: "1px solid rgba(255,255,255,0.1)" },
  tabBtn: { border: "none", padding: "10px 20px", fontSize: "14px", fontWeight: "bold", cursor: "pointer", transition: "all 0.3s", borderRadius: "8px 8px 0 0" },
  glass: gl,
  grid2: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" },
  cardTitle: { ...flex, gap: "8px", fontSize: "18px", margin: "0", color: "white" },
  flexSB: flexSB,
  actionBtn: { ...flex, gap: "8px", justifyContent:"center", border: "none", padding: "12px", borderRadius: "8px", fontWeight: "bold", cursor: "pointer", transition: "all 0.2s" },
  xpTag: { background: "rgba(255,215,0,0.1)", color: "#ffd700", fontSize: "11px", fontWeight: "bold", padding: "4px 8px", borderRadius: "6px", border: "1px solid rgba(255,215,0,0.3)" },
  macroTag: { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", padding: "4px 8px", borderRadius: "6px", fontSize: "12px", color: "#e2e8f0" },
  ringContainer: { width: "120px", height: "120px", borderRadius: "50%", background: "rgba(0,0,0,0.3)", ...flex, justifyContent: "center" },
  circle: { width: "100%", height: "100%", borderRadius: "50%", padding: "10px", boxSizing: "border-box" },
  innerCircle: { background: "#0f172a", width: "100%", height: "100%", borderRadius: "50%", ...flex, flexDirection: "column", justifyContent: "center" }
};
