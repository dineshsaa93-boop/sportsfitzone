"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, Dumbbell, Apple, BookOpen, Video, Megaphone, ShieldCheck } from "lucide-react";

export default function CoachPanelLayout({ children }) {
  const pathname = usePathname();

  const menu = [
    { name: "Dashboard", path: "/coach", icon: <LayoutDashboard size={20} /> },
    { name: "Students", path: "/coach/students", icon: <Users size={20} /> },
    { name: "Workouts", path: "/coach/workouts", icon: <Dumbbell size={20} /> },
    { name: "Diet Plans", path: "/coach/diet", icon: <Apple size={20} /> },
    { name: "Courses", path: "/coach/courses", icon: <BookOpen size={20} /> },
    { name: "Live Sessions", path: "/coach/live", icon: <Video size={20} /> },
    { name: "Announcements", path: "/coach/announcements", icon: <Megaphone size={20} /> },
  ];

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#020617", color: "white", fontFamily: "sans-serif" }}>
      {/* SIDEBAR */}
      <div style={{ width: "80px", background: "rgba(15, 23, 42, 0.8)", borderRight: "1px solid rgba(255,255,255,0.05)", padding: "20px", display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "40px" }}>
          <ShieldCheck size={28} color="#ffaa00" />
          <h2 style={{ margin: 0, fontSize: "20px" }}>Coach<span style={{ color: "#ffaa00" }}>Panel</span></h2>
        </div>

        <nav style={{ display: "flex", flexDirection: "column", gap: "10px", flex: 1 }}>
          {menu.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link key={item.name} href={item.path} style={{ textDecoration: "none" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 15px", borderRadius: "10px", background: isActive ? "rgba(255, 170, 0, 0.15)" : "transparent", color: isActive ? "#ffaa00" : "#94a3b8", transition: "all 0.3s", fontWeight: isActive ? "bold" : "normal" }}>
                  {item.icon}
                  {item.name}
                </div>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* MAIN CONTENT AREA */}
      <div style={{ flex: 1, padding: "30px", overflowY: "auto", height: "100vh" }}>
        {children}
      </div>
    </div>
  );
    }
        
