"use client";

import { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { Zap, BrainCircuit, Activity, Droplet, Moon, ArrowRight } from "lucide-react";

export default function AICoach() {
  const [metrics, setMetrics] = useState(null);
  const [analysis, setAnalysis] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const snap = await getDoc(doc(db, "users", user.uid));
        if (snap.exists()) {
          const data = snap.data();
          const currentMetrics = {
            sleep: data.sleepScore || 65,
            water: data.hydration || 2.0,
            load: data.trainingLoad || "High",
            streak: data.streak || 5
          };
          setMetrics(currentMetrics);
          generateAIAnalysis(currentMetrics);
        }
      }
    });
  }, []);

  const generateAIAnalysis = (data) => {
    // In production, this can call an OpenAI/Gemini Edge Function. 
    // Here we use an internal heuristics engine for zero-latency execution.
    let recommendations = [];
    let readinessScore = 100;

    if (data.sleep < 70) {
      recommendations.push("Critical: Sleep score is sub-optimal. Prioritize 8+ hours tonight. Reduce heavy lifting by 20% today.");
      readinessScore -= 20;
    }
    if (data.water < 3.0) {
      recommendations.push("Hydration Deficit: You are tracking under 3L. Increase electrolyte intake immediately pre-workout.");
      readinessScore -= 10;
    }
    if (data.load === "High" && data.streak > 4) {
      recommendations.push("CNS Fatigue Warning: You have maintained high volume for 5+ days. A designated active recovery day is strongly advised.");
      readinessScore -= 15;
    }

    if (recommendations.length === 0) {
      recommendations.push("All biological markers are optimal. Green light for maximum intensity protocols.");
    }

    setAnalysis({ score: Math.max(0, readinessScore), insights: recommendations });
  };

  if (!metrics || !analysis) return <div style={s.center}><BrainCircuit style={{animation: "pulse 2s infinite"}}/></div>;

  return (
    <div style={s.page}>
      <div style={{...s.glass, background: "linear-gradient(135deg, rgba(62,166,255,0.1), rgba(157,78,221,0.1))", border: "1px solid rgba(62,166,255,0.3)", textAlign: "center", padding: "40px 20px" }}>
        <BrainCircuit size={48} color="#3ea6ff" style={{marginBottom: "15px"}}/>
        <h1 style={{margin: "0 0 10px", fontSize: "32px"}}>SportsFitZone <span style={{color: "#3ea6ff"}}>AI Engine</span></h1>
        <p style={{color: "#94a3b8", maxWidth: "500px", margin: "0 auto"}}>Aggregating biometrics, training volume, and CNS load to compute your daily readiness.</p>
        
        <div style={{marginTop: "40px", display: "inline-block"}}>
          <div style={{ position: "relative", width: "150px", height: "150px", borderRadius: "50%", background: `conic-gradient(#39ff14 ${analysis.score}%, rgba(255,255,255,0.1) 0)`, display: "flex", justifyContent: "center", alignItems: "center", margin: "0 auto" }}>
            <div style={{ width: "130px", height: "130px", background: "#020617", borderRadius: "50%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <h2 style={{margin: 0, fontSize: "36px", color: analysis.score > 80 ? "#39ff14" : "#ffaa00"}}>{analysis.score}</h2>
              <span style={{fontSize: "12px", color: "#94a3b8", fontWeight: "bold"}}>READINESS</span>
            </div>
          </div>
        </div>
      </div>

      <h2 style={{fontSize: "20px", marginTop: "30px", display: "flex", alignItems: "center", gap: "10px"}}><Zap color="#ffaa00"/> AI Generated Protocols</h2>
      <div style={{display: "flex", flexDirection: "column", gap: "15px", marginTop: "15px"}}>
        {analysis.insights.map((insight, i) => (
          <div key={i} style={{...s.glass, display: "flex", alignItems: "flex-start", gap: "15px", borderLeft: insight.includes("Critical") ? "4px solid #ff4d88" : "4px solid #3ea6ff"}}>
            <ArrowRight color={insight.includes("Critical") ? "#ff4d88" : "#3ea6ff"} style={{flexShrink: 0, marginTop: "2px"}}/>
            <p style={{margin: 0, lineHeight: "1.6", color: "#e2e8f0"}}>{insight}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const s = {
  page: { minHeight: "100vh", background: "#020617", color: "white", padding: "20px", maxWidth: "800px", margin: "0 auto", fontFamily: "sans-serif" },
  center: { display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "#020617", color: "white" },
  glass: { background: "rgba(15, 23, 42, 0.6)", backdropFilter: "blur(12px)", padding: "25px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.08)" }
};
    
