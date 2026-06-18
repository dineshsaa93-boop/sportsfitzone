"use client";

import React from 'react';

export default function SportsFitZone() {
  return (
    <div className="app-container">
      {/* 100% PIXEL PERFECT CSS */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

        :root {
          --bg-color: #050505;
          --neon-green: #7CFF00;
          --purple: #8A2BE2;
          --blue: #00BFFF;
          --orange: #FF9800;
          --white: #FFFFFF;
          --grey: #B0B0B0;
          --card-bg: rgba(15, 18, 25, 0.85);
          --card-border: rgba(255, 255, 255, 0.08);
          --glass-blur: blur(12px);
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
        }

        body {
          background-color: var(--bg-color);
          color: var(--white);
          -webkit-font-smoothing: antialiased;
        }

        .app-container {
          max-width: 1080px;
          margin: 0 auto;
          background-color: var(--bg-color);
          min-height: 100vh;
          position: relative;
          padding-bottom: 120px;
          overflow-x: hidden;
        }

        /* TOP BAR */
        .top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 24px;
        }

        .top-left {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .logo-text {
          display: flex;
          flex-direction: column;
        }

        .logo-sports {
          font-size: 24px;
          font-weight: 900;
          font-style: italic;
          line-height: 1;
          letter-spacing: -1px;
        }

        .logo-zone {
          font-size: 12px;
          font-weight: 800;
          color: var(--neon-green);
          letter-spacing: 2px;
        }

        .top-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .stat-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--card-border);
          padding: 8px 16px;
          border-radius: 30px;
          font-weight: 700;
          font-size: 14px;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.02);
        }

        .bell-icon {
          position: relative;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--card-border);
          width: 42px;
          height: 42px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .green-dot-nav {
          position: absolute;
          top: 10px;
          right: 12px;
          width: 8px;
          height: 8px;
          background-color: var(--neon-green);
          border-radius: 50%;
          box-shadow: 0 0 8px var(--neon-green);
        }

        /* SEARCH BAR */
        .search-container {
          padding: 0 24px 20px 24px;
        }

        .search-bar {
          display: flex;
          align-items: center;
          background: rgba(20, 24, 34, 0.6);
          border: 1px solid var(--card-border);
          border-radius: 30px;
          padding: 12px 20px;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
        }

        .search-input {
          flex: 1;
          background: transparent;
          border: none;
          color: var(--white);
          font-size: 15px;
          margin-left: 12px;
          outline: none;
        }

        .search-input::placeholder {
          color: var(--grey);
        }

        /* GRID LAYOUTS (EXACT ALIGNMENT) */
        .grid-2-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          padding: 0 24px;
          margin-bottom: 20px;
        }

        .grid-3-col {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          padding: 0 24px;
          margin-bottom: 20px;
        }

        /* CARDS GENERAL */
        .glass-card {
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 28px;
          padding: 28px;
          backdrop-filter: var(--glass-blur);
          position: relative;
          overflow: hidden;
        }

        /* HERO SECTION */
        .hero-section {
          display: flex;
          gap: 20px;
          padding: 0 24px;
          margin-bottom: 20px;
        }

        .hero-left {
          flex: 1.2;
          background: linear-gradient(135deg, rgba(20,25,35,0.9), rgba(10,12,18,0.9));
          border: 1px solid var(--card-border);
          border-radius: 28px;
          padding: 32px;
          position: relative;
          box-shadow: inset 0 0 40px rgba(0,0,0,0.5);
        }

        .hero-right {
          flex: 0.8;
          background: var(--card-bg);
          border: 1px solid rgba(138, 43, 226, 0.3);
          border-radius: 28px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 25px rgba(138, 43, 226, 0.1);
          position: relative;
        }

        .hero-name {
          font-size: 48px;
          font-weight: 900;
          letter-spacing: -1.5px;
          line-height: 1.1;
        }

        .elite-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--white);
          font-size: 16px;
          font-weight: 600;
          margin-top: 8px;
        }

        .hero-quote {
          margin-top: 24px;
          font-size: 18px;
          color: var(--white);
          line-height: 1.5;
        }

        .neon-green-text {
          color: var(--neon-green);
          font-weight: 800;
          text-shadow: 0 0 15px rgba(124, 255, 0, 0.4);
        }

        .ready-card {
          margin-top: 32px;
          background: rgba(0,0,0,0.4);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 16px 20px;
          border-radius: 20px;
          display: inline-flex;
          align-items: center;
          gap: 16px;
        }

        .status-dot {
          width: 14px;
          height: 14px;
          background-color: var(--neon-green);
          border-radius: 50%;
          box-shadow: 0 0 12px var(--neon-green);
        }

        .status-title {
          color: var(--neon-green);
          font-weight: 700;
          font-size: 15px;
        }

        .status-sub {
          color: var(--grey);
          font-size: 13px;
          margin-top: 4px;
        }

        /* READINESS CIRCLE */
        .level-badge-top {
          position: absolute;
          top: 20px;
          right: 20px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .level-badge-top svg {
          width: 32px;
          height: 32px;
          filter: drop-shadow(0 0 8px var(--purple));
        }

        .circle-container {
          position: relative;
          width: 180px;
          height: 180px;
          margin-top: 20px;
        }

        .circle-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
        }

        .circle-percent {
          font-size: 48px;
          font-weight: 900;
          line-height: 1;
        }

        .circle-label {
          font-size: 11px;
          color: var(--neon-green);
          font-weight: 800;
          letter-spacing: 2px;
          margin-top: 4px;
        }

        .optimal-text {
          margin-top: 24px;
          color: var(--neon-green);
          font-weight: 800;
          font-size: 16px;
        }
          /* RANK CARD */
        .rank-card {
          background: linear-gradient(160deg, rgba(30,20,50,0.8), var(--card-bg));
          border-color: rgba(138, 43, 226, 0.3);
          box-shadow: 0 0 30px rgba(138, 43, 226, 0.1);
        }

        .rank-header {
          display: flex;
          gap: 20px;
          align-items: center;
        }

        .rank-shield {
          width: 80px;
          height: 80px;
          background: rgba(138, 43, 226, 0.1);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 40px;
          border: 1px solid rgba(138, 43, 226, 0.4);
          box-shadow: 0 0 20px rgba(138, 43, 226, 0.2);
        }

        .rank-subtitle {
          color: var(--purple);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .rank-title {
          font-size: 26px;
          font-weight: 900;
          margin: 4px 0;
        }

        .rank-bar-bg {
          width: 100%;
          height: 6px;
          background: rgba(255,255,255,0.1);
          border-radius: 6px;
          margin: 24px 0;
        }

        .rank-bar-fill {
          width: 85%;
          height: 100%;
          background: var(--purple);
          border-radius: 6px;
          box-shadow: 0 0 10px var(--purple);
        }

        .rank-stats-row {
          display: flex;
          justify-content: space-between;
        }

        .r-stat-label {
          font-size: 11px;
          color: var(--grey);
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .r-stat-val {
          font-size: 24px;
          font-weight: 900;
          margin: 4px 0;
        }

        /* PLAN CARD */
        .plan-title-sm {
          color: var(--neon-green);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .plan-title-lg {
          font-size: 32px;
          font-weight: 900;
          line-height: 1.2;
          margin: 8px 0 20px 0;
        }

        .plan-tags {
          display: flex;
          gap: 16px;
          margin-bottom: 30px;
        }

        .plan-tag {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: var(--grey);
          font-weight: 500;
        }

        .resume-btn {
          width: 100%;
          background: var(--neon-green);
          color: #000;
          border: none;
          padding: 18px;
          border-radius: 20px;
          font-size: 16px;
          font-weight: 800;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          box-shadow: 0 0 20px rgba(124, 255, 0, 0.3);
          transition: 0.3s;
        }

        .resume-btn:hover {
          box-shadow: 0 0 30px rgba(124, 255, 0, 0.5);
          transform: scale(1.02);
        }

        /* COACH CARD */
        .coach-card {
          border-color: rgba(0, 191, 255, 0.3);
          box-shadow: 0 0 20px rgba(0, 191, 255, 0.05);
        }

        .coach-header {
          color: var(--blue);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1px;
          margin-bottom: 16px;
        }

        .coach-body {
          display: flex;
          gap: 20px;
          align-items: center;
          margin-bottom: 24px;
        }

        .brain-icon {
          font-size: 40px;
          filter: drop-shadow(0 0 10px var(--blue));
        }

        .coach-text {
          font-size: 16px;
          line-height: 1.5;
          font-weight: 500;
        }

        .report-btn {
          width: 100%;
          background: transparent;
          border: 1px solid rgba(0, 191, 255, 0.3);
          color: var(--blue);
          padding: 16px;
          border-radius: 16px;
          font-size: 14px;
          font-weight: 700;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        /* LEADERBOARD */
        .lead-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .lead-title {
          color: #FACC15;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .lead-view {
          color: var(--grey);
          font-size: 13px;
          font-weight: 600;
        }

        .podium {
          display: flex;
          justify-content: space-around;
          align-items: flex-end;
        }

        .podium-profile {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .avatar-wrap {
          position: relative;
          border-radius: 50%;
          background: #111;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .rank-badge-num {
          position: absolute;
          top: -5px;
          left: -5px;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #000;
          font-weight: 900;
          font-size: 12px;
          box-shadow: 0 0 10px rgba(0,0,0,0.5);
        }

        .lead-name {
          font-size: 15px;
          font-weight: 700;
          margin-top: 12px;
        }

        .lead-xp {
          font-size: 13px;
          color: var(--neon-green);
          font-weight: 700;
          margin-top: 4px;
        }

        /* BOTTOM STATS */
        .b-stat-card {
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 24px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 160px;
        }

        .b-stat-icon {
          font-size: 24px;
          margin-bottom: 12px;
        }

        .b-stat-title {
          font-size: 12px;
          color: var(--grey);
          font-weight: 800;
          letter-spacing: 1px;
        }

        .b-stat-val {
          font-size: 32px;
          font-weight: 900;
          margin: 4px 0;
          line-height: 1;
        }

        .b-stat-bar-bg {
          width: 100%;
          height: 4px;
          background: rgba(255,255,255,0.1);
          border-radius: 4px;
          margin-top: 12px;
        }

        /* BOTTOM NAV */
        .bottom-nav {
          position: fixed;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          max-width: 1080px;
          background: rgba(5, 5, 5, 0.95);
          backdrop-filter: blur(20px);
          border-top: 1px solid rgba(255,255,255,0.05);
          display: flex;
          justify-content: space-around;
          padding: 16px 0 30px 0;
          z-index: 100;
        }

        .nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          color: var(--grey);
          cursor: pointer;
        }

        .nav-item.active {
          color: var(--neon-green);
        }

        .nav-icon {
          font-size: 24px;
        }

        .nav-item.active .nav-icon {
          filter: drop-shadow(0 0 10px var(--neon-green));
        }

        .nav-text {
          font-size: 12px;
          font-weight: 700;
        }
      `}} />

      {/* 1. TOP BAR */}
      <header className="top-bar">
        <div className="top-left">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="15" y2="18"></line>
          </svg>
          <div className="logo-text">
            <span className="logo-sports">SPORTS</span>
            <span className="logo-zone">FIT ZONE</span>
          </div>
        </div>
        <div className="top-right">
          <div className="stat-pill"><span style={{color: '#FACC15'}}>🏆</span> <span style={{color: '#FACC15'}}>12</span></div>
          <div className="stat-pill"><span style={{color: '#FF9800'}}>🔥</span> <span style={{color: '#FF9800'}}>7</span></div>
          <div className="stat-pill">
            <span style={{color: '#7CFF00', border: '1px solid #7CFF00', padding: '2px 6px', borderRadius: '6px', fontSize: '10px', background: 'rgba(124,255,0,0.1)'}}>XP</span> 
            468
          </div>
          <div className="bell-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
            <span className="green-dot-nav"></span>
          </div>
        </div>
      </header>

      {/* 2. SEARCH BAR */}
      <div className="search-container">
        <div className="search-bar">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--grey)" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input type="text" className="search-input" placeholder="Search workouts, plans, tournaments..." />
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--purple)" strokeWidth="2">
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
        </div>
      </div>

      {/* 3. HERO SECTION (Side by side) */}
      <section className="hero-section">
        <div className="hero-left">
          <h1 className="hero-name">DINESH</h1>
          <div className="elite-badge">Elite Athlete <span style={{color: 'var(--neon-green)'}}>✓</span></div>
          
          <div className="hero-quote">
            Discipline today,<br/>
            <span className="neon-green-text">Domination</span> tomorrow.
          </div>

          <div className="ready-card">
            <div className="status-dot"></div>
            <div>
              <div className="status-title">Ready To Train</div>
              <div className="status-sub">Your body. Your mind. Your moment.</div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="level-badge-top">
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--purple)" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <path d="M12 8v4l3 3"/>
            </svg>
            <div>
              <div style={{color: 'var(--purple)', fontSize: '10px', fontWeight: '800'}}>LEVEL 1</div>
              <div style={{fontSize: '10px', fontWeight: '700'}}>ATHLETE</div>
            </div>
          </div>

          <div className="circle-container">
            <svg width="180" height="180" viewBox="0 0 180 180" style={{ transform: 'rotate(-90deg)' }}>
              <circle cx="90" cy="90" r="80" fill="none" stroke="#111" strokeWidth="12" />
              <circle cx="90" cy="90" r="80" fill="none" stroke="url(#neonGradient)" strokeWidth="12" strokeDasharray="502" strokeDashoffset="40" strokeLinecap="round" />
              <defs>
                <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7CFF00" />
                  <stop offset="100%" stopColor="#059669" />
                </linearGradient>
              </defs>
            </svg>
            <div className="circle-text">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--neon-green)" strokeWidth="2" style={{margin: '0 auto'}}>
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
              <div className="circle-percent">92%</div>
              <div className="circle-label">READINESS</div>
            </div>
          </div>
          <div className="optimal-text">OPTIMAL</div>
          <div style={{color: 'var(--grey)', fontSize: '13px'}}>You are in the zone!</div>
        </div>
      </section>
{/* 4. MIDDLE GRID (Rank & Plan) */}
      <div className="grid-2-col">
        {/* Rank Card */}
        <div className="glass-card rank-card">
          <div className="rank-header">
            <div className="rank-shield">★</div>
            <div>
              <div className="rank-subtitle">YOUR RANK</div>
              <div className="rank-title">LEVEL 1 ATHLETE</div>
              <div style={{color: 'var(--grey)', fontSize: '14px'}}>Top 15% Among All Athletes</div>
            </div>
          </div>
          <div className="rank-bar-bg">
            <div className="rank-bar-fill"></div>
          </div>
          <div className="rank-stats-row">
            <div>
              <div className="r-stat-label">🏆 GLOBAL RANK</div>
              <div className="r-stat-val">#24</div>
              <div style={{color: 'var(--neon-green)', fontSize: '13px', fontWeight: '700'}}>Top 15%</div>
            </div>
            <div>
              <div className="r-stat-label">🇮🇳 INDIA RANK</div>
              <div className="r-stat-val">#5</div>
              <div style={{color: 'var(--neon-green)', fontSize: '13px', fontWeight: '700'}}>Top 5%</div>
            </div>
            <div>
              <div className="r-stat-label">👑 ACADEMY RANK</div>
              <div className="r-stat-val">#1</div>
              <div style={{color: 'var(--neon-green)', fontSize: '13px', fontWeight: '700'}}>Top 1%</div>
            </div>
          </div>
        </div>

        {/* Plan Card */}
        <div className="glass-card" style={{position: 'relative'}}>
          {/* Athlete fading background could go here */}
          <div className="plan-title-sm">TODAY'S PLAN</div>
          <div className="plan-title-lg">Full Body<br/>Strength</div>
          <div className="plan-tags">
            <div className="plan-tag">⏱ 45 min</div>
            <div className="plan-tag">🔥 420 kcal</div>
            <div className="plan-tag">📊 Advanced</div>
          </div>
          <button className="resume-btn">
            Resume Workout
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </button>
        </div>
      </div>

      {/* 5. MIDDLE GRID (AI Coach & Leaderboard) */}
      <div className="grid-2-col">
        {/* AI Coach */}
        <div className="glass-card coach-card">
          <div className="coach-header">AI COACH INSIGHT</div>
          <div className="coach-body">
            <div className="brain-icon">🧠</div>
            <div className="coach-text">
              Readiness is excellent today. It's a great day to push your limits! ⚡
            </div>
          </div>
          <button className="report-btn">
            View Full Report
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        {/* Leaderboard */}
        <div className="glass-card">
          <div className="lead-header">
            <div className="lead-title">LEADERBOARD TOP 3</div>
            <div className="lead-view">View All {'>'}</div>
          </div>
          <div className="podium">
            <div className="podium-profile" style={{marginBottom: '10px'}}>
              <div className="avatar-wrap" style={{width: '64px', height: '64px', border: '3px solid #C0C0C0', boxShadow: '0 0 15px rgba(192,192,192,0.3)'}}>
                <div className="rank-badge-num" style={{backgroundColor: '#C0C0C0'}}>2</div>
                <div style={{fontSize: '32px'}}>👤</div>
              </div>
              <div className="lead-name">Dinesh</div>
              <div className="lead-xp">1,100 XP</div>
            </div>

            <div className="podium-profile">
              <div className="avatar-wrap" style={{width: '80px', height: '80px', border: '3px solid #FACC15', boxShadow: '0 0 20px rgba(250,204,21,0.4)'}}>
                <div className="rank-badge-num" style={{backgroundColor: '#FACC15'}}>1</div>
                <div style={{fontSize: '40px'}}>👩</div>
              </div>
              <div className="lead-name">Pragati</div>
              <div className="lead-xp">1,250 XP</div>
            </div>

            <div className="podium-profile" style={{marginBottom: '20px'}}>
              <div className="avatar-wrap" style={{width: '56px', height: '56px', border: '3px solid #CD7F32', boxShadow: '0 0 15px rgba(205,127,50,0.3)'}}>
                <div className="rank-badge-num" style={{backgroundColor: '#CD7F32'}}>3</div>
                <div style={{fontSize: '28px'}}>👤</div>
              </div>
              <div className="lead-name">Athlete X</div>
              <div className="lead-xp">980 XP</div>
            </div>
          </div>
        </div>
      </div>

      {/* 6. BOTTOM STATS (6 Cards Grid) */}
      <div className="grid-3-col">
        {/* Card 1 */}
        <div className="b-stat-card">
          <div>
            <div className="b-stat-icon" style={{color: 'var(--neon-green)'}}>
              <span style={{border: '2px solid var(--neon-green)', padding: '4px', borderRadius: '8px', fontSize: '14px', fontWeight: '900'}}>XP</span>
            </div>
            <div className="b-stat-title">XP TODAY</div>
            <div className="b-stat-val">120</div>
            <div style={{color: 'var(--neon-green)', fontSize: '13px', fontWeight: '700'}}>+12%</div>
          </div>
          <div className="rank-bar-bg"><div className="rank-bar-fill" style={{width: '60%', background: 'var(--neon-green)', boxShadow: '0 0 8px var(--neon-green)'}}></div></div>
        </div>

        {/* Card 2 */}
        <div className="b-stat-card">
          <div>
            <div className="b-stat-icon">🔥</div>
            <div className="b-stat-title">CALORIES</div>
            <div className="b-stat-val">2,450</div>
            <div style={{color: 'var(--grey)', fontSize: '13px', fontWeight: '600'}}>Goal: 2,800</div>
          </div>
          <div className="rank-bar-bg"><div className="rank-bar-fill" style={{width: '85%', background: 'var(--orange)', boxShadow: '0 0 8px var(--orange)'}}></div></div>
        </div>

        {/* Card 3 */}
        <div className="b-stat-card">
          <div>
            <div className="b-stat-icon" style={{color: 'var(--neon-green)'}}>💚</div>
            <div className="b-stat-title">RECOVERY</div>
            <div className="b-stat-val">85%</div>
            <div style={{color: 'var(--neon-green)', fontSize: '13px', fontWeight: '700'}}>Good</div>
          </div>
          <div className="rank-bar-bg"><div className="rank-bar-fill" style={{width: '85%', background: 'var(--neon-green)', boxShadow: '0 0 8px var(--neon-green)'}}></div></div>
        </div>

        {/* Card 4 */}
        <div className="b-stat-card">
          <div>
            <div className="b-stat-icon" style={{color: 'var(--purple)'}}>🌙</div>
            <div className="b-stat-title">SLEEP SCORE</div>
            <div className="b-stat-val">78</div>
            <div style={{color: 'var(--grey)', fontSize: '13px', fontWeight: '600'}}>Good</div>
          </div>
          <div className="rank-bar-bg"><div className="rank-bar-fill" style={{width: '78%', background: 'var(--purple)', boxShadow: '0 0 8px var(--purple)'}}></div></div>
        </div>

        {/* Card 5 */}
        <div className="b-stat-card">
          <div>
            <div className="b-stat-icon" style={{color: 'var(--blue)'}}>💧</div>
            <div className="b-stat-title">WATER GOAL</div>
            <div className="b-stat-val">2.6 L</div>
            <div style={{color: 'var(--grey)', fontSize: '13px', fontWeight: '600'}}>Goal: 3.0 L</div>
          </div>
          <div className="rank-bar-bg"><div className="rank-bar-fill" style={{width: '86%', background: 'var(--blue)', boxShadow: '0 0 8px var(--blue)'}}></div></div>
        </div>

        {/* Card 6 */}
        <div className="b-stat-card">
          <div>
            <div className="b-stat-icon" style={{color: '#FACC15'}}>⚡</div>
            <div className="b-stat-title">STREAK</div>
            <div className="b-stat-val">7</div>
            <div style={{color: 'var(--grey)', fontSize: '13px', fontWeight: '600'}}>Days</div>
          </div>
          <div className="rank-bar-bg"><div className="rank-bar-fill" style={{width: '100%', background: '#FACC15', boxShadow: '0 0 8px #FACC15'}}></div></div>
        </div>
      </div>

      {/* 7. BOTTOM NAVIGATION */}
      <nav className="bottom-nav">
        <div className="nav-item active">
          <div className="nav-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </div>
          <div className="nav-text">Home</div>
        </div>
        
        <div className="nav-item">
          <div className="nav-icon">🏋️</div>
          <div className="nav-text">Training</div>
        </div>

        <div className="nav-item">
          <div className="nav-icon">🏆</div>
          <div className="nav-text">Tournaments</div>
        </div>

        <div className="nav-item">
          <div className="nav-icon">
            <span style={{border: '2px solid var(--grey)', borderRadius: '50%', padding: '2px 4px', fontSize: '12px', fontWeight: '900'}}>XP</span>
          </div>
          <div className="nav-text">DP</div>
        </div>

        <div className="nav-item">
          <div className="nav-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div className="nav-text">Profile</div>
        </div>
      </nav>

    </div>
  );
        }
