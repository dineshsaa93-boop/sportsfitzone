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

  const buyCourse = async (courseId: number) => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ courseId }),
    });

    const data = await res.json();
    if (data.url) window.location.href = data.url;
  };

  return (
    <main style={{ padding: 24 }}>
      <h1>SportsFitZone</h1>

      <h2>My XP: {xp}</h2>

      <h2>Courses</h2>
      {courses.map(course => (
        <div key={course.id} style={{ border: "1px solid #ccc", padding: 10, marginBottom: 10 }}>
          <h3>{course.title}</h3>
          <p>{course.sport}</p>
          <p>Instructor: {course.instructor}</p>
          <p>XP: {course.xp}</p>
          <p>₹{course.price / 100}</p>

          {purchased.includes(course.id) ? (
            <button onClick={() => setXp(xp + course.xp)}>
              Start Training
            </button>
          ) : (
            <button onClick={() => buyCourse(course.id)}>
              Buy Course
            </button>
          )}
        </div>
      ))}
    </main>
  );
}
