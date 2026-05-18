"use client";

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
  ShoppingCart,
  User,
  PlayCircle,
  ChevronRight,
  Home
} from "lucide-react";

export default function HomePage() {

  const features = [
    {
      title: "All Training",
      icon: <MonitorPlay size={38} color="#39ff14" />,
      link: "/training"
    },
    {
      title: "All Tests",
      icon: <ClipboardList size={38} color="#3ea6ff" />,
      link: "/tests"
      
