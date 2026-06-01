"use client";

import { useState } from "react";

export default function SportsAnalyzer() {

const [sport, setSport] = useState("Cricket");
const [result, setResult] = useState(null);

const analyzeVideo = () => {

if (sport === "Cricket") {

  setResult({
    score: "8.4/10",
    strengths: [
      "Good Bat Lift",
      "Good Balance"
    ],
    weaknesses: [
      "Front Foot Late",
      "Head Position Unstable"
    ],
    suggestion:
      "Practice front-foot drives for 20 minutes daily."
  });

} else if (sport === "Football") {

  setResult({
    score: "7.9/10",
    strengths: [
      "Good Speed",
      "Good Ball Control"
    ],
    weaknesses: [
      "Weak Left Foot",
      "Slow Direction Change"
    ],
    suggestion:
      "Work on agility drills and weak-foot passing."
  });

} else {

  setResult({
    score: "8.1/10",
    strengths: [
      "Good Form",
      "Strong Core"
    ],
    weaknesses: [
      "Depth Needs Improvement"
    ],
    suggestion:
      "Focus on proper range of motion."
  });

}

};

return (

<div style={styles.page}>

  <h1 style={styles.heading}>
    📹 Sports Analyzer
  </h1>

  <div style={styles.card}>

    <p>Select Sport</p>

    <select
      value={sport}
      onChange={(e) =>
        setSport(e.target.value)
      }
      style={styles.select}
    >
      <option>Cricket</option>
      <option>Football</option>
      <option>Gym</option>
    </select>

    <input
      type="file"
      accept="video/*"
      style={styles.file}
    />

    <button
      style={styles.button}
      onClick={analyzeVideo}
    >
      Analyze Video
    </button>

  </div>

  {result && (

    <div style={styles.result}>

      <h2>
        Overall Score: {result.score}
      </h2>

      <h3>✅ Strengths</h3>

      {result.strengths.map(
        (item, index) => (
          <p key={index}>
            • {item}
          </p>
        )
      )}

      <h3>❌ Weaknesses</h3>

      {result.weaknesses.map(
        (item, index) => (
          <p key={index}>
            • {item}
          </p>
        )
      )}

      <h3>💡 Suggestion</h3>

      <p>
        {result.suggestion}
      </p>

    </div>

  )}

</div>

);

}

const styles = {

page: {
minHeight: "100vh",
background: "#020817",
color: "white",
padding: 20,
fontFamily: "sans-serif"
},

heading: {
fontSize: 35,
marginBottom: 25
},

card: {
background: "#081120",
padding: 20,
borderRadius: 20
},

select: {
width: "100%",
padding: 12,
marginTop: 10,
marginBottom: 15,
borderRadius: 12
},

file: {
width: "100%",
marginBottom: 15
},

button: {
width: "100%",
padding: 14,
border: "none",
borderRadius: 15,
background: "#39ff14",
fontWeight: "bold"
},

result: {
marginTop: 25,
background: "#081120",
padding: 20,
borderRadius: 20
}

};
