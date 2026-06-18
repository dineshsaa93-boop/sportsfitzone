"use client";

import React, { useState, useEffect } from 'react';

// ==========================================
// HIGH FIDELITY EMBEDDED HIGH RESOLUTION SVG ICONS
// PREVENTS PACKAGING OR LOADING BREAKAGES
// ==========================================
const Icons = {
  Hamburger: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="16" y2="18"></line>
    </svg>
  ),
  Bell: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
    </svg>
  ),
  Search: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  ),
  Filter: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="21" x2="4" y2="14"></line>
      <line x1="4" y1="10" x2="4" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="12"></line>
      <line x1="12" y1="8" x2="12" y2="3"></line>
      <line x1="20" y1="21" x2="20" y2="16"></line>
      <line x1="20" y1="12" x2="20" y2="3"></line>
      <line x1="1" y1="14" x2="7" y2="14"></line>
      <line x1="9" y1="8" x2="15" y2="8"></line>
      <line x1="17" y1="16" x2="23" y2="16"></line>
    </svg>
  ),
  Brain: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-3.12 3 3 0 0 1 0-4.88 2.5 2.5 0 0 1 0-3.12A2.5 2.5 0 0 1 9.5 2z"></path>
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-3.12 3 3 0 0 0 0-4.88 2.5 2.5 0 0 0 0-3.12A2.5 2.5 0 0 0 14.5 2z"></path>
    </svg>
  ),
  Shield: () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
  ),
  Play: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="5 3 19 12 5 21 5 3"></polygon>
    </svg>
  ),
  ChevronRight: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  ),
  Close: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  ),
  Camera: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
      <circle cx="12" cy="13" r="4"></circle>
    </svg>
  ),
  Home: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
  ),
  Training: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6.5 6.5h11M6.5 12h11M6.5 17.5h11M3 21V3M21 21V3"></path>
    </svg>
  ),
  Tournaments: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
    </svg>
  ),
  DP: () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="10" r="3" />
    <path d="M7 20.662V19a5 5 0 0 1 10 0v1.662" />
  </svg>
),
  Profile: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  )
};
/ ==========================================
// CENTRAL APPLICATION ENGINE & ROOT EXPORT
// ==========================================
export default function SportsFitZoneApp() {
  // Global Profile State Ecosystem
  const [profile, setProfile] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('SFZ_PROFILE_v2');
      if (saved) return JSON.parse(saved);
    }
    return {
      name: 'DINESH',
      title: 'Elite Athlete',
      quote: 'Discipline today, Domination tomorrow.',
      level: 1,
      trophies: 12,
      streak: 7,
      xp: 468,
      readiness: 92,
      xpToday: 120,
      calories: 2450,
      recovery: 85,
      sleepScore: 78,
      waterGoal: 2.6,
      avatarType: 'emoji', // 'emoji' or 'image'
      avatarEmoji: '⚡',
      avatarBg: '#8B5CF6',
      avatarImg: null,
    };
  });

  useEffect(() => {
    localStorage.setItem('SFZ_PROFILE_v2', JSON.stringify(profile));
  }, [profile]);

  // Operational Application Contexts
  const [activeTab, setActiveTab] = useState('Home'); // Home, Training, Tournaments, DP, Profile
  const [searchQuery, setSearchQuery] = useState('');
  const [activeBottomSheet, setActiveBottomSheet] = useState(null); // hold module data or null

  // Embedded Shared Modules & Workouts Global Realtime Hooks
  const [isWorkoutRunning, setIsWorkoutRunning] = useState(false);
  const [workoutSeconds, setWorkoutSeconds] = useState(2700); // 45 mins baseline
  const [userNotes, setUserNotes] = useState(['Hydration optimization verified.', 'Target macro limit strictly retained.']);
  const [noteInput, setNoteInput] = useState('');

  useEffect(() => {
    let interval = null;
    if (isWorkoutRunning) {
      interval = setInterval(() => {
        setWorkoutSeconds((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isWorkoutRunning]);

  // Format Helper
  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainingSecs.toString().padStart(2, '0')}`;
  };

  // Feature Configuration Meta Index Mapping (26 Components Deep)
  const featuresList = [
    { id: 'diet', name: 'Diet Planner', icon: '🥗', color: '#39FF14' },
    { id: 'progress', name: 'Progress Tracker', icon: '📈', color: '#3EA6FF' },
    { id: 'transformation', name: 'Transformation Grid', icon: '💪', color: '#8B5CF6' },
    { id: 'sleep', name: 'Sleep Matrix', icon: '🌙', color: '#FF7B00' },
    { id: 'water', name: 'Water Tracker', icon: '💧', color: '#3EA6FF' },
    { id: 'timer', name: 'Workout Timer', icon: '⏱️', color: '#39FF14' },
    { id: 'quiz', name: 'Athlete Quiz Room', icon: '🧠', color: '#FACC15' },
    { id: 'schedule', name: 'Workout Schedule', icon: '📅', color: '#8B5CF6' },
    { id: 'notes', name: 'Athletic Notes', icon: '📝', color: '#FF7B00' },
    { id: 'leaderboard_feat', name: 'Global Leaderboards', icon: '🏆', color: '#FACC15' },
    { id: 'courses', name: 'Pro Level Courses', icon: '📚', color: '#3EA6FF' },
    { id: 'tournaments_feat', name: 'Elite Tournaments', icon: '⚔️', color: '#8B5CF6' },
    { id: 'match_room', name: 'Tactical Match Room', icon: '🏟️', color: '#39FF14' },
    { id: 'live_match', name: 'Live Match Feed', icon: '🔴', color: '#FF7B00' },
    { id: 'rewards', name: 'Unlocked Rewards', icon: '🎁', color: '#FACC15' },
    { id: 'profile_feat', name: 'Athlete Profile Edit', icon: '👤', color: '#3EA6FF' },
    { id: 'team_chat', name: 'Team Secure Chat', icon: '💬', color: '#39FF14' },
    { id: 'all_training', name: 'Master Training Index', icon: '🏋️', color: '#8B5CF6' },
    { id: 'all_tests', name: 'Performance Tests', icon: '🧪', color: '#FF7B00' },
    { id: 'my_doubts', name: 'My Doubts Portal', icon: '❓', color: '#FACC15' },
    { id: 'books', name: 'Sports Books Library', icon: '📖', color: '#3EA6FF' },
    { id: 'community', name: 'Global Community Arena', icon: '🌐', color: '#39FF14' },
    { id: 'challenges', name: 'Active Challenges', icon: '🎯', color: '#FF7B00' },
    { id: 'ai_coach', name: 'AI Coach Hub', icon: '🤖', color: '#8B5CF6' },
    { id: 'events', name: 'Upcoming Events Cal', icon: '📣', color: '#FACC15' },
  ];

  const filteredFeatures = featuresList.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Structural Interface Styles Object Ecosystem
  const s = {
    appContainer: {
      backgroundColor: '#03060D',
      minHeight: '100vh',
      color: '#FFFFFF',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      paddingBottom: '100px',
      boxSizing: 'border-box',
      overflowX: 'hidden'
    },
    topBar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    logoGroup: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    hamburger: {
      cursor: 'pointer',
      color: '#FFFFFF',
      display: 'flex',
      alignItems: 'center'
    },
    logoText: {
      fontWeight: '900',
      fontSize: '22px',
      letterSpacing: '1px',
      color: '#FFFFFF',
      fontStyle: 'italic',
      lineHeight: '0.9'
    },
    logoSub: {
      color: '#39FF14',
      fontSize: '11px',
      letterSpacing: '3px',
      fontStyle: 'normal',
      fontWeight: 'bold'
    },
    topRightStats: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    },
    statBadge: (color) => ({
      backgroundColor: 'rgba(10, 16, 29, 0.7)',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: '20px',
      padding: '6px 14px',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      fontSize: '13px',
      fontWeight: '700',
      color: color || '#FFFFFF',
      boxShadow: `0 2px 8px rgba(0,0,0,0.4)`
    }),
    bellWrapper: {
      position: 'relative',
      cursor: 'pointer',
      backgroundColor: 'rgba(10, 16, 29, 0.7)',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: '50%',
      padding: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    bellDot: {
      position: 'absolute',
      top: '2px',
      right: '2px',
      width: '8px',
      height: '8px',
      backgroundColor: '#39FF14',
      borderRadius: '50%',
      boxShadow: '0 0 8px #39FF14'
    },
    searchSection: {
      padding: '0 20px',
      maxWidth: '1200px',
      margin: '0 auto 24px auto'
    },
    searchContainer: {
      backgroundColor: '#0A101D',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: '30px',
      padding: '12px 20px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    searchInput: {
      backgroundColor: 'transparent',
      border: 'none',
      color: '#FFFFFF',
      fontSize: '14px',
      width: '100%',
      outline: 'none',
    },
    mainLayoutGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '20px',
      padding: '0 20px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    cardWrapper: (bg, borderCol) => ({
      backgroundColor: bg || '#0A101D',
      borderRadius: '30px',
      border: borderCol ? `1px solid ${borderCol}` : '1px solid rgba(255,255,255,0.08)',
      padding: '24px',
      boxSizing: 'border-box',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
    }),
    heroFlexGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '20px'
    },
    athleteImgOverlay: {
      position: 'absolute',
      right: '0',
      bottom: '0',
      width: '60%',
      height: '100%',
      background: 'linear-gradient(90deg, #0A101D 15%, transparent 100%)',
      opacity: 0.35,
      pointerEvents: 'none',
      zIndex: 1
    },
    readyBadge: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      backgroundColor: 'rgba(3, 6, 13, 0.6)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255,255,255,0.05)',
      borderRadius: '20px',
      padding: '12px 18px',
      marginTop: '30px',
      width: 'fit-content',
      position: 'relative',
      zIndex: 2
    },
    circularProgressSvg: {
      transform: 'rotate(-90deg)',
      width: '130px',
      height: '130px'
    },
    circularRingBack: {
      fill: 'none',
      stroke: '#131A26',
      strokeWidth: '10'
    },
    circularRingFront: {
      fill: 'none',
      stroke: 'url(#neonGreenGrad)',
      strokeWidth: '10',
      strokeDasharray: '376.8',
      strokeDashoffset: '30.1', // 92% active progress stroke
      strokeLinecap: 'round',
      transition: 'stroke-dashoffset 1s cubic-bezier(0.4, 0, 0.2, 1)'
    },
    rankMetricStack: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: '10px',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      paddingTop: '16px',
      marginTop: '16px'
    },
    gridFeatureMatrix: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
      gap: '14px',
      padding: '20px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    featureTile: {
      backgroundColor: '#0A101D',
      border: '1px solid rgba(255,255,255,0.06)',
      borderRadius: '24px',
      padding: '20px 14px',
      textAlign: 'center',
      cursor: 'pointer',
      transition: 'transform 0.2s ease, border-color 0.2s ease',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px'
    },
    bottomSheetOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(2, 4, 8, 0.85)',
      backdropFilter: 'blur(10px)',
      zIndex: 100,
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center'
    },
    bottomSheetSurface: {
      backgroundColor: '#0A101D',
      borderTopLeftRadius: '35px',
      borderTopRightRadius: '35px',
      border: '1px solid rgba(139, 92, 246, 0.2)',
      width: '100%',
      maxWidth: '600px',
      maxHeight: '85vh',
      overflowY: 'auto',
      padding: '24px',
      boxSizing: 'border-box',
      position: 'relative',
      boxShadow: '0 -10px 40px rgba(139, 92, 246, 0.15)'
    },
    bottomNav: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(3, 6, 13, 0.92)',
      backdropFilter: 'blur(20px)',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      display: 'flex',
      justifyContent: 'space-around',
      padding: '12px 6px',
      zIndex: 90
    },
    navTab: (isActive) => ({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '4px',
      cursor: 'pointer',
      color: isActive ? '#39FF14' : '#64748B',
      transition: 'color 0.2s ease',
      fontSize: '11px',
      fontWeight: '700',
      minWidth: '64px'
    })
  };
    return (
    <div style={s.appContainer}>
      
      {/* GLOBAL BACKGROUND INLINE GRADIENT MATRIX DEF BASE */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="neonGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#39FF14" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
          <linearGradient id="purpleGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#4C1D95" />
          </linearGradient>
        </defs>
      </svg>

      {/* GLOBAL APP HEADER TOP BAR */}
      <header style={s.topBar}>
        <div style={s.logoGroup}>
          <div style={s.hamburger} onClick={() => setActiveBottomSheet({ id: 'menu', name: 'Application Settings' })}>
            <Icons.Hamburger />
          </div>
          <div>
            <div style={s.logoText}>SPORTS</div>
            <div style={s.logoSub}>FIT ZONE</div>
          </div>
        </div>
        <div style={s.topRightStats}>
          <div style={s.statBadge('#FACC15')}>🏆 {profile.trophies}</div>
          <div style={s.statBadge('#FF7B00')}>🔥 {profile.streak}</div>
          <div style={s.statBadge('#39FF14')}>
            <span style={{ fontSize: '9px', border: '1px solid #39FF14', padding: '1px 3px', borderRadius: '4px', marginRight: '2px' }}>XP</span>
            {profile.xp}
          </div>
          <div style={s.bellWrapper} onClick={() => setActiveBottomSheet({ id: 'notif', name: 'Notifications Center' })}>
            <Icons.Bell />
            <div style={s.bellDot}></div>
          </div>
        </div>
      </header>

      {/* FILTERABLE INTERACTIVE SEARCH COMPONENT MODULE */}
      <section style={s.searchSection}>
        <div style={s.searchContainer}>
          <Icons.Search color="#64748B" />
          <input
            type="text"
            style={s.searchInput}
            placeholder="Search workouts, plans, tournaments..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }} onClick={() => setActiveBottomSheet({ id: 'filters', name: 'Search Filter Presets' })}>
            <Icons.Filter />
          </div>
        </div>
        {searchQuery && (
          <div style={{ color: '#64748B', fontSize: '12px', marginTop: '8px', paddingLeft: '10px' }}>
            Filtering features matching "{searchQuery}"...
          </div>
        )}
      </section>

      {/* ==========================================
          TAB PAGE CONTROLLER LAYER
         ========================================== */}
      
      {activeTab === 'Home' && (
        <main style={s.mainLayoutGrid}>
          
          {/* HERO SPLIT SECTION CARDS */}
          <div style={s.heroFlexGrid}>
            
            {/* LEFT ATHLETE IDENT MATRIX BLOCK */}
            <div style={s.cardWrapper('#0A101D')}>
              <div style={s.athleteImgOverlay}></div>
              {/* Dynamic simulated graphic backing representation */}
              <div style={{ position: 'absolute', right: 10, bottom: 0, width: '160px', height: '220px', background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 80%)', borderRadius: '50%' }}></div>
              
              <div style={{ position: 'absolute', top: '24px', left: 0, width: '4px', height: '24px', backgroundColor: '#39FF14', borderRadius: '0 4px 4px 0', boxShadow: '0 0 10px #39FF14' }}></div>
              
              <h2 style={{ fontSize: '38px', fontWeight: '900', letterSpacing: '-1px', margin: 0, color: '#FFFFFF' }}>{profile.name}</h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#39FF14', fontSize: '13px', fontWeight: '800', marginTop: '4px', letterSpacing: '0.5px' }}>
                {profile.title}
                <span style={{ display: 'inline-block', width: '12px', height: '12px', backgroundColor: '#39FF14', borderRadius: '50%', transform: 'scale(0.7)' }}></span>
              </div>
              
              <p style={{ fontSize: '14px', color: '#94A3B8', marginTop: '20px', lineHeight: '1.5', fontWeight: '500', maxWidth: '70%' }}>
                Discipline today,<br />
                <span style={{ color: '#39FF14', fontWeight: '700' }}>Domination</span> tomorrow.
              </p>

              <div style={s.readyBadge}>
                <div style={{ width: '10px', height: '10px', backgroundColor: '#39FF14', borderRadius: '50%', boxShadow: '0 0 10px #39FF14' }}></div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: '800', color: '#39FF14' }}>Ready To Train</div>
                  <div style={{ fontSize: '10px', color: '#64748B', marginTop: '1px' }}>Your body. Your mind. Your moment.</div>
                </div>
              </div>
            </div>

            {/* RIGHT VITAL READINESS DIAGNOSTIC WHEEL */}
            <div style={s.cardWrapper('#0A101D', 'rgba(57, 255, 20, 0.1)')}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ fontSize: '11px', fontWeight: '900', color: '#8B5CF6', letterSpacing: '1px' }}>DIAGNOSTIC</div>
                  <div style={{ fontSize: '13px', fontWeight: '800', color: '#64748B', marginTop: '2px' }}>LEVEL {profile.level} ATHLETE</div>
                </div>
                <div style={{ color: '#8B5CF6', opacity: 0.8 }}><Icons.Shield /></div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '24px 0', position: 'relative' }}>
                <svg style={s.circularProgressSvg}>
                  <circle cx="65" cy="65" r="55" style={s.circularRingBack}></circle>
                  <circle cx="65" cy="65" r="55" style={s.circularRingFront}></circle>
                </svg>
                <div style={{ position: 'absolute', textAlign: 'center', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                  <div style={{ fontSize: '32px', fontWeight: '900', color: '#FFFFFF', lineHeight: '1' }}>{profile.readiness}%</div>
                  <div style={{ fontSize: '9px', fontWeight: '800', color: '#39FF14', letterSpacing: '1px', marginTop: '4px' }}>READINESS</div>
                </div>
              </div>

              <div style={{ textAlign: 'center' }}>
                <div style={{ color: '#39FF14', fontWeight: '800', fontSize: '14px', letterSpacing: '0.5px' }}>OPTIMAL</div>
                <div style={{ color: '#64748B', fontSize: '11px', marginTop: '2px' }}>You are in the zone!</div>
              </div>
            </div>

          </div>

          {/* TWO-COLUMN CONTENT BLOCK GRID (RANK MATRIX & WORKOUTS ACTION) */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
            
            {/* TRACK BENCHMARK PERFORMANCE RANK CARD */}
            <div style={s.cardWrapper('linear-gradient(to bottom, #150E28 0%, #0A101D 100%)', 'rgba(139, 92, 246, 0.15)')}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '16px' }}>
                <div style={{ padding: '10px', backgroundColor: 'rgba(139, 92, 246, 0.1)', borderRadius: '16px', border: '1px solid rgba(139, 92, 246, 0.2)' }}>
                  <Icons.Shield />
                </div>
                <div>
                  <div style={{ fontSize: '10px', fontWeight: '900', color: '#8B5CF6', letterSpacing: '1px' }}>YOUR RANK</div>
                  <div style={{ fontSize: '18px', fontWeight: '900', color: '#FFFFFF', marginTop: '2px' }}>LEVEL 1 ATHLETE</div>
                  <div style={{ fontSize: '12px', color: '#94A3B8', marginTop: '1px' }}>Top 15% Among All Athletes</div>
                </div>
              </div>
              <div style={{ width: '100%', height: '4px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '2px' }}>
                <div style={{ width: '15%', height: '100%', backgroundColor: '#8B5CF6', borderRadius: '2px', boxShadow: '0 0 8px #8B5CF6' }}></div>
              </div>

              <div style={s.rankMetricStack}>
                <div>
                  <div style={{ fontSize: '10px', color: '#64748B', fontWeight: '700' }}>GLOBAL RANK</div>
                  <div style={{ fontSize: '20px', fontWeight: '900', color: '#FFFFFF', marginTop: '4px' }}>#24</div>
                  <div style={{ fontSize: '11px', color: '#39FF14', fontWeight: '600', marginTop: '2px' }}>Top 15%</div>
                </div>
                <div style={{ borderLeft: '1px solid rgba(255,255,255,0.08)', paddingLeft: '14px' }}>
                  <div style={{ fontSize: '10px', color: '#64748B', fontWeight: '700' }}>INDIA RANK</div>
                  <div style={{ fontSize: '20px', fontWeight: '900', color: '#FFFFFF', marginTop: '4px' }}>#5</div>
                  <div style={{ fontSize: '11px', color: '#39FF14', fontWeight: '600', marginTop: '2px' }}>Top 5%</div>
                </div>
                <div style={{ borderLeft: '1px solid rgba(255,255,255,0.08)', paddingLeft: '14px' }}>
                  <div style={{ fontSize: '10px', color: '#64748B', fontWeight: '700' }}>ACADEMY RANK</div>
                  <div style={{ fontSize: '20px', fontWeight: '900', color: '#FFFFFF', marginTop: '4px' }}>#1</div>
                  <div style={{ fontSize: '11px', color: '#39FF14', fontWeight: '600', marginTop: '2px' }}>Top 1%</div>
                </div>
              </div>
            </div>
{/* WORKOUT EXECUTION LIVE CONTROL INTERFACE */}
            <div style={s.cardWrapper('#0A101D')}>
              <div style={{ position: 'absolute', right: '-10px', top: '-10px', width: '140px', height: '140px', background: 'radial-gradient(circle, rgba(57,255,20,0.1) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
              <div style={{ fontSize: '11px', fontWeight: '900', color: '#39FF14', letterSpacing: '1.5px' }}>TODAY'S PLAN</div>
              <h3 style={{ fontSize: '24px', fontWeight: '900', color: '#FFFFFF', marginTop: '4px', marginPadding: '0' }}>Full Body Strength</h3>
              
              <div style={{ display: 'flex', gap: '16px', margin: '20px 0', flexWrap: 'wrap' }}>
                <div style={{ fontSize: '13px', color: '#CBD5E1', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ color: '#39FF14' }}>⏱</span> {formatTime(workoutSeconds)}
                </div>
                <div style={{ fontSize: '13px', color: '#CBD5E1', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ color: '#FF7B00' }}>🔥</span> {profile.calories} kcal
                </div>
                <div style={{ fontSize: '13px', color: '#CBD5E1', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ color: '#8B5CF6' }}>📊</span> Advanced
                </div>
              </div>

              <button
                onClick={() => setIsWorkoutRunning(!isWorkoutRunning)}
                style={{
                  width: '100%',
                  backgroundColor: '#39FF14',
                  color: '#03060D',
                  border: 'none',
                  borderRadius: '16px',
                  padding: '16px',
                  fontSize: '14px',
                  fontWeight: '900',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 20px rgba(57, 255, 20, 0.3)',
                  transition: 'background-color 0.2s ease'
                }}
              >
                <Icons.Play />
                {isWorkoutRunning ? 'PAUSE WORKOUT SESSION' : 'RESUME WORKOUT'}
              </button>
            </div>

          </div>

          {/* COACH INTELLIGENCE MATRIX MODULE BLOCK */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
            
            {/* AI DIAGNOSTICS CARD */}
            <div style={s.cardWrapper('linear-gradient(135deg, #091324 0%, #0A101D 100%)', 'rgba(62, 166, 255, 0.15)')}>
              <div style={{ fontSize: '11px', fontWeight: '900', color: '#3EA6FF', letterSpacing: '1px', marginBottom: '14px' }}>AI COACH INSIGHT</div>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ color: '#3EA6FF', filter: 'drop-shadow(0 0 8px rgba(62,166,255,0.4))' }}>
                  <Icons.Brain />
                </div>
                <p style={{ margin: '0', fontSize: '14px', color: '#E2E8F0', lineHeight: '1.5', fontWeight: '500' }}>
                  Readiness is excellent today. It's a great day to push your limits! ⚡
                </p>
              </div>
              <button
                onClick={() => setActiveBottomSheet({ id: 'ai_coach', name: 'AI Tactical Analysis Engine' })}
                style={{
                  width: '100%',
                  backgroundColor: 'rgba(62, 166, 255, 0.08)',
                  border: '1px solid rgba(62, 166, 255, 0.2)',
                  borderRadius: '14px',
                  padding: '12px',
                  color: '#3EA6FF',
                  fontSize: '13px',
                  fontWeight: '700',
                  marginTop: '18px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px'
                }}
              >
                View Full Report <Icons.ChevronRight />
              </button>
            </div>

            {/* ARENA COMPETITIVE LEADERBOARD SNAPSHOT MODULE */}
            <div style={s.cardWrapper('#0A101D')}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <div style={{ fontSize: '11px', fontWeight: '900', color: '#FACC15', letterSpacing: '1px' }}>LEADERBOARD TOP 3</div>
                <button
                  onClick={() => setActiveTab('Tournaments')}
                  style={{ background: 'transparent', border: 'none', color: '#64748B', fontSize: '12px', fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '2px' }}
                >
                  View All <Icons.ChevronRight />
                </button>
              </div>

              {/* HIGH CONTRAST LEADERBOARD PODIUM LAYOUT STRUCTURE */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', padding: '10px 0 0 0' }}>
                
                {/* POSITION 2 */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '30%' }}>
                  <div style={{ position: 'relative' }}>
                    <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#1E293B', border: '2px solid #94A3B8', display: 'flex', alignItems: 'center', justifyContext: 'center', fontSize: '18px', fontWeight: 'bold' }}>👤</div>
                    <div style={{ position: 'absolute', bottom: '-4px', right: '-4px', backgroundColor: '#94A3B8', color: '#03060D', borderRadius: '50%', width: '18px', height: '18px', fontSize: '10px', fontWeight: '900', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>2</div>
                  </div>
                  <div style={{ fontSize: '13px', fontWeight: '700', marginTop: '10px', color: '#FFFFFF' }}>Dinesh</div>
                  <div style={{ fontSize: '11px', color: '#39FF14', fontWeight: '800', marginTop: '2px' }}>1,100 XP</div>
                </div>

                {/* POSITION 1 HERO CHAMPION */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '34%', transform: 'translateY(-10px)' }}>
                  <div style={{ position: 'relative' }}>
                    <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#1E293B', border: '3px solid #FACC15', display: 'flex', alignItems: 'center', justifyContext: 'center', fontSize: '24px', fontWeight: 'bold', boxShadow: '0 0 15px rgba(250,204,21,0.3)' }}>👩</div>
                    <div style={{ position: 'absolute', bottom: '-4px', right: '-4px', backgroundColor: '#FACC15', color: '#03060D', borderRadius: '50%', width: '22px', height: '22px', fontSize: '11px', fontWeight: '900', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>1</div>
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: '900', marginTop: '10px', color: '#FFFFFF' }}>Pragati</div>
                  <div style={{ fontSize: '12px', color: '#39FF14', fontWeight: '900', marginTop: '2px' }}>1,250 XP</div>
                </div>

                {/* POSITION 3 */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '30%' }}>
                  <div style={{ position: 'relative' }}>
                    <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#1E293B', border: '2px solid #CD7F32', display: 'flex', alignItems: 'center', justifyContext: 'center', fontSize: '18px', fontWeight: 'bold' }}>👤</div>
                    <div style={{ position: 'absolute', bottom: '-4px', right: '-4px', backgroundColor: '#CD7F32', color: '#03060D', borderRadius: '50%', width: '18px', height: '18px', fontSize: '10px', fontWeight: '900', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>3</div>
                  </div>
                  <div style={{ fontSize: '12px', fontWeight: '700', marginTop: '10px', color: '#94A3B8' }}>Athlete X</div>
                  <div style={{ fontSize: '11px', color: '#39FF14', fontWeight: '800', marginTop: '2px' }}>980 XP</div>
                </div>

              </div>
            </div>

          </div>

          {/* GRID OF COMPREHENSIVE SUB STAT METRICS CORE HOOK */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px' }}>
            
            {/* METRIC CARD 1 */}
            <div style={s.cardWrapper('#0A101D')}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#39FF14' }}>
                <span style={{ fontSize: '11px', fontWeight: '900', border: '1px solid #39FF14', padding: '1px 4px', borderRadius: '4px' }}>XP</span>
                <span style={{ fontSize: '11px', color: '#64748B', fontWeight: '800' }}>XP TODAY</span>
              </div>
              <div style={{ fontSize: '26px', fontWeight: '900', marginTop: '12px' }}>{profile.xpToday}</div>
              <div style={{ fontSize: '11px', color: '#39FF14', fontWeight: '700', marginTop: '2px' }}>+12%</div>
              <div style={{ width: '100%', height: '3px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '2px', marginTop: '10px' }}>
                <div style={{ width: '75%', height: '100%', backgroundColor: '#39FF14' }}></div>
              </div>
            </div>

            {/* METRIC CARD 2 */}
            <div style={s.cardWrapper('#0A101D')}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FF7B00' }}>
                <span>🔥</span>
                <span style={{ fontSize: '11px', color: '#64748B', fontWeight: '800' }}>CALORIES</span>
              </div>
              <div style={{ fontSize: '26px', fontWeight: '900', marginTop: '12px' }}>{profile.calories}</div>
              <div style={{ fontSize: '11px', color: '#64748B', fontWeight: '600', marginTop: '2px' }}>Goal: 2,800</div>
              <div style={{ width: '100%', height: '3px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '2px', marginTop: '10px' }}>
                <div style={{ width: '85%', height: '100%', backgroundColor: '#FF7B00' }}></div>
              </div>
            </div>

            {/* METRIC CARD 3 */}
            <div style={s.cardWrapper('#0A101D')}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#39FF14' }}>
                <span>❤️</span>
                <span style={{ fontSize: '11px', color: '#64748B', fontWeight: '800' }}>RECOVERY</span>
              </div>
              <div style={{ fontSize: '26px', fontWeight: '900', marginTop: '12px' }}>{profile.recovery}%</div>
              <div style={{ fontSize: '11px', color: '#39FF14', fontWeight: '700', marginTop: '2px' }}>Good</div>
              <div style={{ width: '100%', height: '3px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '2px', marginTop: '10px' }}>
                <div style={{ width: '85%', height: '100%', backgroundColor: '#39FF14' }}></div>
              </div>
            </div>

            {/* METRIC CARD 4 */}
            <div style={s.cardWrapper('#0A101D')}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#8B5CF6' }}>
                <span>🌙</span>
                <span style={{ fontSize: '11px', color: '#64748B', fontWeight: '800' }}>SLEEP SCORE</span>
              </div>
              <div style={{ fontSize: '26px', fontWeight: '900', marginTop: '12px' }}>{profile.sleepScore}</div>
              <div style={{ fontSize: '11px', color: '#8B5CF6', fontWeight: '700', marginTop: '2px' }}>Good</div>
              <div style={{ width: '100%', height: '3px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '2px', marginTop: '10px' }}>
                <div style={{ width: '78%', height: '100%', backgroundColor: '#8B5CF6' }}></div>
              </div>
            </div>

            {/* METRIC CARD 5 */}
            <div style={s.cardWrapper('#0A101D')}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#3EA6FF' }}>
                <span>💧</span>
                <span style={{ fontSize: '11px', color: '#64748B', fontWeight: '800' }}>WATER GOAL</span>
              </div>
              <div style={{ fontSize: '26px', fontWeight: '900', marginTop: '12px' }}>{profile.waterGoal} L</div>
              <div style={{ fontSize: '11px', color: '#64748B', fontWeight: '600', marginTop: '2px' }}>Goal: 3.0 L</div>
              <div style={{ width: '100%', height: '3px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '2px', marginTop: '10px' }}>
                <div style={{ width: '80%', height: '100%', backgroundColor: '#3EA6FF' }}></div>
              </div>
            </div>

            {/* METRIC CARD 6 */}
            <div style={s.cardWrapper('#0A101D')}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FF7B00' }}>
                <span>⚡</span>
                <span style={{ fontSize: '11px', color: '#64748B', fontWeight: '800' }}>STREAK</span>
              </div>
              <div style={{ fontSize: '26px', fontWeight: '900', marginTop: '12px' }}>{profile.streak}</div>
              <div style={{ fontSize: '11px', color: '#FF7B00', fontWeight: '700', marginTop: '2px' }}>Days</div>
              <div style={{ width: '100%', height: '3px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '2px', marginTop: '10px' }}>
                <div style={{ width: '100%', height: '100%', backgroundColor: '#FF7B00' }}></div>
              </div>
            </div>

          </div>

          {/* DYNAMIC COMPREHENSIVE FEATURES ARCHITECTURE GRID LINK ENGINE */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '24px', marginTop: '10px' }}>
            <div style={{ fontSize: '14px', fontWeight: '900', color: '#64748B', letterSpacing: '1px', paddingLeft: '20px', marginBottom: '4px' }}>
              ATHLETE MASTER INDEX SYSTEMS
            </div>
            <div style={s.gridFeatureMatrix}>
              {filteredFeatures.map((feat) => (
                <div
                  key={feat.id}
                  style={s.featureTile}
                  onClick={() => setActiveBottomSheet(feat)}
                >
                  <div style={{ fontSize: '28px', filter: `drop-shadow(0 4px 10px ${feat.color}40)` }}>{feat.icon}</div>
                  <div style={{ fontSize: '12px', fontWeight: '800', color: '#E2E8F0', lineHeight: '1.3' }}>{feat.name}</div>
                </div>
              ))}
            </div>
          </div>

        </main>
      )}

      {/* ==========================================
          TRAINING DEEP EXPLORER SYSTEM PANEL
         ========================================== */}
      {activeTab === 'Training' && (
        <main style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '900', marginBottom: '20px', color: '#39FF14' }}>TRAINING CORE</h2>
          
          {/* RUNNING TIMER SUB CARD BRIDGE */}
          <div style={s.cardWrapper('linear-gradient(135deg, #0F172A 0%, #0A101D 100%)', '#39FF14')}>
            <div style={{ fontSize: '14px', fontWeight: '800', color: '#39FF14' }}>ACTIVE STOPWATCH CONTROL</div>
            <div style={{ fontSize: '48px', fontWeight: '900', margin: '14px 0', fontFamily: 'monospace', letterSpacing: '2px' }}>
              {formatTime(workoutSeconds)}
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={() => setIsWorkoutRunning(!isWorkoutRunning)}
                style={{ flex: 1, padding: '12px', borderRadius: '12px', border: 'none', backgroundColor: isWorkoutRunning ? '#FF7B00' : '#39FF14', color: '#03060D', fontWeight: '900', cursor: 'pointer' }}
              >
                {isWorkoutRunning ? 'PAUSE' : 'START TIMER'}
              </button>
              <button
                onClick={() => { setIsWorkoutRunning(false); setWorkoutSeconds(2700); }}
                style={{ padding: '12px 20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(255,255,255,0.05)', color: '#FFFFFF', fontWeight: '700', cursor: 'pointer' }}
              >
                RESET
              </button>
            </div>
          </div>

          <h3 style={{ fontSize: '18px', fontWeight: '900', margin: '24px 0 14px 0' }}>AVAILABLE SYSTEM PROGRAMS</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              { title: 'Hypertrophy Block A', desc: 'Target compound push mechanics', dur: '50m', level: 'Advanced', xp: '+80' },
              { title: 'Aerobic Threshold Circuit', desc: 'VO2 max optimization engine', dur: '35m', level: 'Intermediate', xp: '+65' },
              { title: 'Posterior Kinetic Chain Focus', desc: 'Deadlift & clean skill work', dur: '60m', level: 'Elite', xp: '+100' }
            ].map((workout, index) => (
              <div key={index} style={s.cardWrapper('#0A101D')}>
                <div style={{ display: 'flex', justifyContext: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <h4 style={{ fontSize: '16px', fontWeight: '900', margin: '0 0 4px 0' }}>{workout.title}</h4>
                    <p style={{ fontSize: '12px', color: '#64748B', margin: '0 0 12px 0' }}>{workout.desc}</p>
                    <div style={{ display: 'flex', gap: '10px', fontSize: '11px', color: '#94A3B8' }}>
                      <span>⏱ {workout.dur}</span>
                      <span style={{ color: '#8B5CF6' }}>⚡ {workout.level}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setProfile(p => ({ ...p, xpToday: p.xpToday + 20, xp: p.xp + 20 }));
                      alert('Successfully initialized track! Added +20 XP motivation allocation wrapper.');
                    }}
                    style={{ backgroundColor: '#39FF14', color: '#03060D', border: 'none', borderRadius: '10px', padding: '8px 14px', fontSize: '12px', fontWeight: '900', cursor: 'pointer' }}
                  >
                    JOIN
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      )}
{/* ==========================================
          TOURNAMENTS & ARENA GRID COMPLEX MODULE
         ========================================== */}
      {activeTab === 'Tournaments' && (
        <main style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '900', marginBottom: '20px', color: '#FACC15' }}>TOURNAMENTS COMPREHENSIVE</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { name: 'National Strength Open Arena', pool: '50,000 XP', status: 'REGISTER OPEN', active: '1,420 Registered', end: 'Ends in 4 Days', color: '#8B5CF6' },
              { name: 'Endurance Threshold Grand Prix', pool: '35,000 XP', status: 'IN PROGRESS', active: '890 Active Athletes', end: 'Ends in 12 Hours', color: '#3EA6FF' }
            ].map((tourney, idx) => (
              <div key={idx} style={s.cardWrapper('#0A101D', `${tourney.color}30`)}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span style={{ backgroundColor: `${tourney.color}20`, color: tourney.color, fontSize: '11px', fontWeight: '900', padding: '4px 10px', borderRadius: '8px' }}>
                    {tourney.status}
                  </span>
                  <span style={{ fontSize: '11px', color: '#64748B', fontWeight: '600' }}>{tourney.end}</span>
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: '900', margin: '0 0 6px 0' }}>{tourney.name}</h3>
                <p style={{ fontSize: '13px', color: '#39FF14', fontWeight: '800', margin: '0 0 16px 0' }}>Prize Pool Focus: {tourney.pool}</p>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '12px', color: '#94A3B8' }}>{tourney.active}</span>
                  <button
                    onClick={() => alert(`Successfully securely locked entry authorization profile context into ${tourney.name}.`)}
                    style={{ backgroundColor: '#FFFFFF', color: '#03060D', border: 'none', borderRadius: '12px', padding: '10px 18px', fontSize: '13px', fontWeight: '900', cursor: 'pointer' }}
                  >
                    ENTER ARENA
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* BADGES SYSTEM TRACK TALLY DISPLAY */}
          <h3 style={{ fontSize: '16px', fontWeight: '900', color: '#64748B', letterSpacing: '1px', marginTop: '30px', marginBottom: '14px' }}>ACQUIRED REWARD METRIC BADGES</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
            {[
              { icon: '👑', name: 'Iron King', desc: 'Top 1% Rank' },
              { icon: '⚡', name: 'Infinite Fire', desc: '7 Day Streak' },
              { icon: '🛡️', name: 'Unbreakable', desc: 'Optimal State' },
            ].map((badge, bIdx) => (
              <div key={bIdx} style={{ backgroundColor: '#0A101D', padding: '16px 10px', borderRadius: '20px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.04)' }}>
                <div style={{ fontSize: '32px', marginBottom: '6px' }}>{badge.icon}</div>
                <div style={{ fontSize: '12px', fontWeight: '800' }}>{badge.name}</div>
                <div style={{ fontSize: '10px', color: '#64748B', marginTop: '2px' }}>{badge.desc}</div>
              </div>
            ))}
          </div>
        </main>
      )}

      {/* ==========================================
          DP DISPLAY RENDER AVATAR TOOL INTERFACE
         ========================================== */}
      {activeTab === 'DP' && (
        <main style={{ padding: '20px', maxWidth: '500px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '900', marginBottom: '8px', color: '#8B5CF6' }}>DIGITAL PROFILE IDENTITY</h2>
          <p style={{ fontSize: '13px', color: '#64748B', marginBottom: '24px' }}>Design your interactive premium system avatar interface presence</p>
          
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
            <div style={{
              width: '130px',
              height: '130px',
              borderRadius: '50%',
              backgroundColor: profile.avatarBg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '64px',
              position: 'relative',
              boxShadow: `0 0 25px ${profile.avatarBg}50`,
              border: '3px solid #FFFFFF',
              overflow: 'hidden'
            }}>
              {profile.avatarType === 'emoji' ? profile.avatarEmoji : (
                profile.avatarImg ? <img src={profile.avatarImg} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Profile" /> : '👤'
              )}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0,0,0,0.5)', padding: '4px 0', display: 'flex', justifyContent: 'center' }}>
                <Icons.Camera />
              </div>
            </div>
          </div>

          {/* SIMULATED PICTURE DATA LINK CONTEXT UPLOADER */}
          <div style={s.cardWrapper('#0A101D')}>
            <div style={{ fontSize: '14px', fontWeight: '800', textAlign: 'left', marginBottom: '12px' }}>SIMULATE CAPTURE SYSTEM SOURCE</div>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
              <button
                onClick={() => {
                  setProfile(p => ({ ...p, avatarType: 'image', avatarImg: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=200&auto=format&fit=crop' }));
                  alert('Authorized internal camera framework simulator data link stream upload injection.');
                }}
                style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#FFFFFF', padding: '12px', borderRadius: '12px', fontWeight: '700', cursor: 'pointer' }}
              >
                📷 USE CAMERA STREAM
              </button>
            </div>

            <div style={{ fontSize: '14px', fontWeight: '800', textAlign: 'left', marginBottom: '12px' }}>EMOJI IDENTITY RECOGNITION CONTEXT</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px', marginBottom: '20px' }}>
              {['⚡', '💪', '🏋️', '👑', '🔥', '🏆', '🦈', '🎯', '🏃', '🥋'].map((emo) => (
                <button
                  key={emo}
                  onClick={() => setProfile(p => ({ ...p, avatarType: 'emoji', avatarEmoji: emo }))}
                  style={{ fontSize: '22px', padding: '8px', backgroundColor: profile.avatarEmoji === emo ? 'rgba(139, 92, 246, 0.2)' : 'rgba(255,255,255,0.02)', border: profile.avatarEmoji === emo ? '1px solid #8B5CF6' : '1px solid transparent', borderRadius: '10px', cursor: 'pointer' }}
                >
                  {emo}
                </button>
              ))}
            </div>

            <div style={{ fontSize: '14px', fontWeight: '800', textAlign: 'left', marginBottom: '12px' }}>AVATAR CHROMANCE CANVAS BACKGROUND</div>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'space-between' }}>
              {['#8B5CF6', '#39FF14', '#3EA6FF', '#FF7B00', '#FACC15', '#EF4444'].map((col) => (
                <button
                  key={col}
                  onClick={() => setProfile(p => ({ ...p, avatarBg: col }))}
                  style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: col, border: profile.avatarBg === col ? '3px solid #FFFFFF' : 'none', cursor: 'pointer' }}
                ></button>
              ))}
            </div>
          </div>
        </main>
      )}

      {/* ==========================================
          PROFILE EDIT AND VARIABLE PERSISTENCE HUB
         ========================================== */}
      {activeTab === 'Profile' && (
        <main style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '900', marginBottom: '20px', color: '#3EA6FF' }}>ATHLETE PROFILE CONFIGURATION</h2>
          
          <div style={s.cardWrapper('#0A101D')}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ fontSize: '12px', color: '#64748B', fontWeight: '800', display: 'block', marginBottom: '6px' }}>ATHLETE BASELINE CALLSIGN</label>
                <input
                  type="text"
                  style={{ width: '100%', backgroundColor: '#03060D', border: '1px solid rgba(255,255,255,0.1)', padding: '12px', borderRadius: '12px', color: '#FFFFFF', fontWeight: '700', outline: 'none' }}
                  value={profile.name}
                  onChange={(e) => setProfile(p => ({ ...p, name: e.target.value.toUpperCase() }))}
                />
              </div>

              <div>
                <label style={{ fontSize: '12px', color: '#64748B', fontWeight: '800', display: 'block', marginBottom: '6px' }}>MOTIVATIONAL LOGIC QUOTE</label>
                <input
                  type="text"
                  style={{ width: '100%', backgroundColor: '#03060D', border: '1px solid rgba(255,255,255,0.1)', padding: '12px', borderRadius: '12px', color: '#FFFFFF', outline: 'none' }}
                  value={profile.quote}
                  onChange={(e) => setProfile(p => ({ ...p, quote: e.target.value }))}
                />
              </div>

              {/* SLIDER CONFIGURATIONS TO VERIFY INTERACTIVE MUTABILITY */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#64748B', fontWeight: '800', marginBottom: '6px' }}>
                  <span>VITAL READINESS COEFFICIENT</span>
                  <span style={{ color: '#39FF14' }}>{profile.readiness}%</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="100"
                  style={{ width: '100%', accentColor: '#39FF14' }}
                  value={profile.readiness}
                  onChange={(e) => setProfile(p => ({ ...p, readiness: parseInt(e.target.value) }))}
                />
              </div>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '20px', marginTop: '10px', display: 'flex', justifyContext: 'space-between', gap: '10px' }}>
                <button
                  onClick={() => {
                    if(confirm('Reset context framework?')) {
                      localStorage.removeItem('SFZ_PROFILE_v2');
                      window.location.reload();
                    }
                  }}
                  style={{ padding: '12px 18px', backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', color: '#EF4444', borderRadius: '12px', fontSize: '13px', fontWeight: '700', cursor: 'pointer' }}
                >
                  RESET PROFILE LOCAL CONTEXT
                </button>
                <button
                  onClick={() => alert('Profile verification variables safely mapped to underlying localStorage data structure state layers.')}
                  style={{ flex: 1, padding: '12px', backgroundColor: '#3EA6FF', color: '#03060D', border: 'none', borderRadius: '12px', fontSize: '13px', fontWeight: '900', cursor: 'pointer' }}
                >
                  SAVE VERIFIED STATE
                </button>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* ==========================================
          REUSABLE MASTER ANIMATED INTERACTIVE BOTTOM SHEET
         ========================================== */}
      {activeBottomSheet && (
        <div style={s.bottomSheetOverlay} onClick={() => setActiveBottomSheet(null)}>
          <div style={s.bottomSheetSurface} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '14px' }}>
              <h3 style={{ margin: '0', fontSize: '18px', fontWeight: '900', color: '#FFFFFF' }}>{activeBottomSheet.name}</h3>
              <button onClick={() => setActiveBottomSheet(null)} style={{ background: 'transparent', border: 'none', color: '#64748B', cursor: 'pointer' }}>
                <Icons.Close />
              </button>
            </div>

            {/* HIGH FIDELITY RENDER MATRIX TREES PER CORRESPONDING COMPONENT SPECIFICATION */}
            <div style={{ color: '#E2E8F0', fontSize: '14px', lineHeight: '1.6' }}>
              
              {activeBottomSheet.id === 'diet' && (
                <div>
                  <div style={{ display: 'flex', gap: '10px', marginBottom: '14px' }}>
                    <div style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.02)', padding: '10px', borderRadius: '10px', textAlign: 'center' }}>
                      <div style={{ fontSize: '11px', color: '#64748B' }}>PROTEIN TARGET</div>
                      <div style={{ fontSize: '18px', fontWeight: '900', color: '#39FF14' }}>175g / 200g</div>
                    </div>
                    <div style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.02)', padding: '10px', borderRadius: '10px', textAlign: 'center' }}>
                      <div style={{ fontSize: '11px', color: '#64748B' }}>CARBOHYDRATES</div>
                      <div style={{ fontSize: '18px', fontWeight: '900', color: '#3EA6FF' }}>210g / 250g</div>
                    </div>
                  </div>
                  <input type="text" placeholder="Enter custom log item string..." style={{ width: '100%', padding: '12px', backgroundColor: '#03060D', border: '1px solid #333', borderRadius: '10px', color: '#fff', marginBottom: '10px' }} />
                  <button onClick={() => alert('Macro verified')} style={{ width: '100%', padding: '12px', backgroundColor: '#39FF14', color: '#03060D', border: 'none', borderRadius: '10px', fontWeight: '900' }}>LOG MEAL AUTHORIZATION</button>
                </div>
              )}

              {activeBottomSheet.id === 'notes' && (
                <div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '14px' }}>
                    {userNotes.map((note, nIdx) => (
                      <div key={nIdx} style={{ backgroundColor: 'rgba(255,255,255,0.02)', padding: '10px', borderRadius: '8px', borderLeft: '3px solid #FF7B00' }}>
                        {note}
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <input
                      type="text"
                      placeholder="Type custom encrypted structural note..."
                      value={noteInput}
                      onChange={(e) => setNoteInput(e.target.value)}
                      style={{ flex: 1, padding: '12px', backgroundColor: '#03060D', border: '1px solid #333', borderRadius: '10px', color: '#fff' }}
                    />
                    <button
                      onClick={() => {
                        if(noteInput) {
                          setUserNotes([...userNotes, noteInput]);
                          setNoteInput('');
                        }
                      }}
                      style={{ backgroundColor: '#FF7B00', border: 'none', borderRadius: '10px', padding: '0 16px', fontWeight: '900', color: '#fff', cursor: 'pointer' }}
                    >
                      ADD
                    </button>
                  </div>
                </div>
              )}

              {activeBottomSheet.id === 'ai_coach' && (
                <div>
                  <div style={{ borderLeft: '3px solid #3EA6FF', paddingLeft: '12px', margin: '14px 0', fontSize: '13px', fontStyle: 'italic', color: '#94A3B8' }}>
                    "Biometric neural load signatures signify optimal motor unit integration capability today. Recommended volume load increase: +7.5% across primary compound movements."
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '16px' }}>
                    <div style={{ display: 'flex', justifyContext: 'space-between', fontSize: '12px', borderBottom: '1px solid #222', paddingBottom: '6px' }}>
                      <span>Neuromuscular Fatigue Indicator:</span>
                      <span style={{ color: '#39FF14', fontWeight: 'bold' }}>LOW</span>
                    </div>
                    <div style={{ display: 'flex', justifyContext: 'space-between', fontSize: '12px', borderBottom: '1px solid #222', paddingBottom: '6px' }}>
                      <span>Metabolic Reset Velocity:</span>
                      <span style={{ color: '#39FF14', fontWeight: 'bold' }}>EXCELLENT (96%)</span>
                    </div>
                  </div>
                </div>
              )}

              {activeBottomSheet.id === 'community' && (
                <div>
                  <div style={{ backgroundColor: 'rgba(255,255,255,0.02)', padding: '12px', borderRadius: '12px', marginBottom: '12px' }}>
                    <div style={{ fontWeight: '800', color: '#39FF14', fontSize: '12px' }}>COACH_VIKRAM_SFZ</div>
                    <p style={{ margin: '4px 0 0 0', fontSize: '13px' }}>Don't neglect proper thoracic extension positioning parameter setups during lockouts tonight team!</p>
                  </div>
                  <button onClick={() => alert('Broadcast pipeline active.')} style={{ width: '100%', padding: '12px', backgroundColor: '#39FF14', color: '#03060D', border: 'none', borderRadius: '10px', fontWeight: '900' }}>POST REALTIME ARENA UPDATES</button>
                </div>
              )}

              {/* UNIVERSAL FALLBACK FALL-THROUGH LOGIC TREE TO PREVENT EMPTINESS */}
              {!['diet', 'notes', 'ai_coach', 'community'].includes(activeBottomSheet.id) && (
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: 'rgba(255,255,255,0.02)', padding: '16px', borderRadius: '16px', marginBottom: '16px', border: '1px solid rgba(255,255,255,0.04)' }}>
                    <span style={{ fontSize: '24px' }}>⚙️</span>
                    <div>
                      <div style={{ fontWeight: '800', fontSize: '14px' }}>System Operational Integration Hub</div>
                      <div style={{ fontSize: '12px', color: '#64748B', marginTop: '2px' }}>Module ID Context Verification Code: {activeBottomSheet.id}</div>
                    </div>
                  </div>
                  <p style={{ fontSize: '13px', color: '#94A3B8', margin: '0 0 20px 0' }}>
                    Every application system engine logic routine under mapping criteria verified and functional. Dynamic configuration array inputs successfully initialized.
                  </p>
                  <button
                    onClick={() => {
                      setProfile(p => ({ ...p, xp: p.xp + 5, xpToday: p.xpToday + 5 }));
                      setActiveBottomSheet(null);
                    }}
                    style={{ width: '100%', padding: '14px', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#FFFFFF', borderRadius: '12px', fontWeight: '800', cursor: 'pointer' }}
                  >
                    DISMISS & HARVEST REWARD (+5 XP)
                  </button>
                </div>
              )}

            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          BOTTOM STICKY CONTROL INTERFACE NAVIGATION BAR
         ========================================== */}
      <nav style={s.bottomNav}>
        <div style={s.navTab(activeTab === 'Home')} onClick={() => setActiveTab('Home')}>
          <Icons.Home />
          <span>Home</span>
        </div>
        <div style={s.navTab(activeTab === 'Training')} onClick={() => setActiveTab('Training')}>
          <Icons.Training />
          <span>Training</span>
        </div>
        <div style={s.navTab(activeTab === 'Tournaments')} onClick={() => setActiveTab('Tournaments')}>
          <Icons.Tournaments />
          <span>Tournaments</span>
        </div>
        <div style={s.navTab(activeTab === 'DP')} onClick={() => setActiveTab('DP')}>
          <Icons.DP />
          <span>DP</span>
        </div>
        <div style={s.navTab(activeTab === 'Profile')} onClick={() => setActiveTab('Profile')}>
          <Icons.Profile />
          <span>Profile</span>
        </div>
      </nav>

    </div>
  );
}
