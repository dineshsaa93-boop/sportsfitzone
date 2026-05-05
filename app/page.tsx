"use client";

import { useState } from "react";

type Course = {
  id: number;
  title: string;
  sport: string;
  price: number;
  xp: number;
  instructor: string;
};

const courses: Course[] = [
  { id: 1, title: "Football Basics", sport: "Football", price: 1999, xp: 120, instructor: "Coach Arjun" },
  { id: 2, title: "Cricket Masterclass", sport: "Cricket", price: 2499, xp: 180, instructor: "Coach Ravi" },
  { id: 3, title: "Fitness & Speed Training", sport: "Fitness", price: 1499, xp: 90, instructor: "Coach Neha" },
];

export default function Home() {
  const [purchased, setPurchased] = useState<number[]>([]);
  const [xp, setXp] = useState(0);

  return (
    <main style={{ padding: 24, fontFamily: "Arial, sans-serif" }}>
      <h1>SportsFitZone 🔥</h1>
      <p>Online sports training platform</p>

      <section style={{ margin: "20px 0", padding: 16, background: "#f4f4f4", borderRadius: 12 }}>
        <h2>My XP</h2>
        <p><b>{xp}</b> XP earned</p>
      </section>

      <section>
        <h2>Available Courses</h2>
        <div style={{ display: "grid", gap: 16 }}>
          {courses.map(course => (
            <div key={course.id} style={{ border: "1px solid #ddd", padding: 16, borderRadius: 12 }}>
              <h3>{course.title}</h3>
              <p>Sport: {course.sport}</p>
              <p>Instructor: {course.instructor}</p>
              <p>XP: {course.xp}</p>
              <p>Price: ₹{course.price / 100}</p>

              <button
                onClick={() => {
                  setPurchased([...purchased, course.id]);
                  setXp(xp + course.xp);
                }}
                style={{ padding: "10px 14px", cursor: "pointer" }}
              >
                Start Training
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
