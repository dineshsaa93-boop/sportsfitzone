"use client";

import {
  Menu,
  Bell,
  Trophy,
  Flame,
  Brain,
  Dumbbell,
  User,
  ShoppingCart,
  BookOpen,
  Calendar,
  Users,
  ClipboardList,
  MessageCircleQuestion,
  ChevronRight,
} from "lucide-react";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white pb-28">

      {/* HERO SECTION */}
      <div
        className="relative p-5"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10">

          {/* TOP BAR */}
          <div className="flex items-center justify-between">

            <Menu size={34} />

            <div className="flex items-center gap-5">

              <div className="flex items-center gap-1">
                <Trophy className="text-yellow-400" />
                <span>12</span>
              </div>

              <div className="flex items-center gap-1">
                <Flame className="text-green-500" />
                <span>3</span>
              </div>

              <div className="flex items-center gap-1">
                <span className="text-green-400 font-bold">XP</span>
                <span>468</span>
              </div>

              <Bell />
            </div>
          </div>

          {/* TEXT */}
          <div className="mt-12">
            <p className="text-gray-300 text-xl">
              WELCOME BACK!
            </p>

            <h1 className="text-5xl font-bold mt-3">
              Sports Fit Zone ⚽
            </h1>

            <p className="text-gray-300 text-2xl mt-3">
              Train. Improve. Dominate.
            </p>

            <button className="mt-6 border border-green-500 text-green-400 px-6 py-3 rounded-2xl text-xl font-bold">
              PREMIUM UPGRADE PLAN
            </button>
          </div>
        </div>
      </div>

      {/* GRID SECTION */}
      <div className="mx-4 -mt-8 relative z-20 bg-[#07111f] rounded-3xl p-5 border border-gray-800">

        <div className="grid grid-cols-4 gap-6 text-center">

          <Item
            icon={<Dumbbell className="text-green-400" size={40} />}
            text="All Training"
          />

          <Item
            icon={<ClipboardList className="text-blue-400" size={40} />}
            text="All Tests"
          />

          <Item
            icon={<MessageCircleQuestion className="text-purple-400" size={40} />}
            text="My Doubts"
          />

          <Item
            icon={<BookOpen className="text-orange-400" size={40} />}
            text="Sports Books"
          />

          <Item
            icon={<Users className="text-yellow-400" size={40} />}
            text="Community"
          />

          <Item
            icon={<Trophy className="text-pink-400" size={40} />}
            text="Challenges"
          />

          <Item
            icon={<Brain className="text-cyan-400" size={40} />}
            text="AI Coach"
          />

          <Item
            icon={<Calendar className="text-blue-500" size={40} />}
            text="Events"
          />
        </div>

        <button className="w-full mt-6 bg-gray-900 py-3 rounded-full text-xl">
          Show more
        </button>
      </div>

      {/* UPCOMING */}
      <div className="p-4">

        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-bold">
            Upcoming Sessions
          </h2>

          <button className="text-green-400 text-xl">
            View All
          </button>
        </div>

        <SessionCard
          image="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=800"
          title="Cricket Batting Masterclass"
          coach="Rahul Dravid"
          time="03:00 PM"
        />

        <SessionCard
          image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800"
          title="Football Speed & Agility"
          coach="Sunil Chhetri"
          time="04:30 PM"
        />

        <SessionCard
          image="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800"
          title="Full Body Strength Workout"
          coach="Fitness Coach"
          time="06:00 PM"
        />
      </div>

      {/* BOTTOM NAV */}
      <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 flex justify-around py-4">

        <NavItem icon={<Menu />} text="Home" active />

        <NavItem
          icon={<Dumbbell />}
          text="Training"
        />

        <NavItem
          icon={<Brain />}
          text="AI Coach"
        />

        <NavItem
          icon={<ShoppingCart />}
          text="Store"
        />

        <NavItem
          icon={<User />}
          text="Profile"
        />
      </div>
    </main>
  );
}

function Item({ icon, text }) {
  return (
    <div className="flex flex-col items-center gap-3">
      {icon}
      <p className="text-sm">{text}</p>
    </div>
  );
}

function SessionCard({
  image,
  title,
  coach,
  time,
}) {
  return (
    <div className="bg-[#07111f] mt-5 rounded-3xl overflow-hidden border border-gray-800 flex">

      <img
        src={image}
        className="w-32 h-32 object-cover"
      />

      <div className="p-4 flex-1">

        <div className="flex items-center gap-3">
          <span className="text-green-400">
            {time}
          </span>

          <span className="bg-red-600 px-2 py-1 rounded-full text-sm">
            LIVE
          </span>
        </div>

        <h3 className="text-2xl font-bold mt-2">
          {title}
        </h3>

        <p className="text-gray-400 mt-1">
          By {coach}
        </p>

        <p className="text-gray-500 text-sm mt-2">
          Improve your sports performance
        </p>
      </div>

      <div className="flex items-center pr-4">
        <ChevronRight />
      </div>
    </div>
  );
}

function NavItem({
  icon,
  text,
  active,
}) {
  return (
    <div
      className={`flex flex-col items-center ${
        active
          ? "text-green-400"
          : "text-gray-400"
      }`}
    >
      {icon}
      <span className="text-sm mt-1">
        {text}
      </span>
    </div>
  );
                }
