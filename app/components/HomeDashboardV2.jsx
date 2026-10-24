<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sports Fit Zone</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,700;1,800&display=swap" rel="stylesheet">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: { sans: ['Inter', 'sans-serif'] },
                    colors: {
                        appBg: '#080a0f',
                        cardBg: '#12161f',
                        brandGreen: '#3eff00',
                        brandGreenDark: '#228b22',
                        brandPurple: '#9d4edd',
                        borderDark: '#232836',
                        textMuted: '#8b93a5'
                    }
                }
            }
        }
    </script>
    <style>
        body { background-color: #080a0f; color: white; -webkit-font-smoothing: antialiased; }
        /* Custom scrollbar hiding for horizontal scrolls */
        .hide-scroll::-webkit-scrollbar { display: none; }
        .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
    </style>
</head>
<body class="flex justify-center min-h-screen">

    <!-- Mobile Container Simulation -->
    <div class="w-full max-w-[430px] bg-appBg relative pb-24 overflow-x-hidden shadow-2xl shadow-black">
        
        <!-- TOP APP BAR -->
        <div class="flex items-center justify-between px-4 pt-6 pb-2">
            <!-- Left: Menu & Logo -->
            <div class="flex items-center gap-3">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                <div class="flex items-center gap-1">
                    <svg class="w-7 h-7 text-brandGreen" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 2L4 14h7v8l9.5-12h-7L13.5 2z"/></svg>
                    <div class="flex flex-col leading-none italic font-bold tracking-tight">
                        <span class="text-white text-[13px]">SPORTS</span>
                        <span class="text-brandGreen text-[13px]">FIT ZONE</span>
                    </div>
                </div>
            </div>

            <!-- Right: Stats & Notification -->
            <div class="flex items-center gap-2">
                <!-- Trophies -->
                <div class="flex items-center gap-1 bg-cardBg border border-borderDark rounded-full px-2 py-1">
                    <svg class="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l2.4 7.4h7.6l-6.2 4.5 2.4 7.4-6.2-4.5-6.2 4.5 2.4-7.4-6.2-4.5h7.6z"/></svg>
                    <span class="text-[12px] font-semibold text-white">12</span>
                </div>
                <!-- Fire -->
                <div class="flex items-center gap-1 bg-cardBg border border-borderDark rounded-full px-2 py-1">
                    <svg class="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c0 0-4 5-4 10a4 4 0 008 0c0-5-4-10-4-10z"/></svg>
                    <span class="text-[12px] font-semibold text-white">7</span>
                </div>
                <!-- XP -->
                <div class="flex items-center gap-1 bg-cardBg border border-borderDark rounded-full px-2 py-1">
                    <svg class="w-4 h-4 text-brandGreen" fill="currentColor" viewBox="0 0 24 24"><polygon points="12,2 22,8 22,16 12,22 2,16 2,8"/></svg>
                    <span class="text-[12px] font-semibold text-white">468</span>
                </div>
                <!-- Bell -->
                <div class="relative ml-1">
                    <svg class="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                    <div class="absolute top-0 right-0 w-2.5 h-2.5 bg-brandGreen rounded-full border border-appBg"></div>
                </div>
            </div>
        </div>

        <!-- SEARCH BAR -->
        <div class="px-4 mt-3">
            <div class="flex items-center bg-[#151924] border border-[#232836] rounded-full px-4 py-2.5">
                <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <input type="text" placeholder="Search workouts, plans, tournaments..." class="bg-transparent border-none outline-none text-sm text-gray-300 w-full ml-3 placeholder-gray-500" readonly>
                <svg class="w-5 h-5 text-brandPurple" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
            </div>
        </div>

        <!-- HERO SECTION -->
        <div class="px-4 mt-5">
            <div class="bg-cardBg border border-borderDark rounded-2xl relative overflow-hidden flex shadow-lg">
                
                <!-- Left side: Dinesh / Image -->
                <div class="w-[60%] p-5 relative z-10">
                    <div class="absolute left-0 top-4 w-1 h-6 bg-brandGreen rounded-r-md"></div>
                    <h1 class="text-3xl font-extrabold tracking-tight text-white mb-1">DINESH</h1>
                    <div class="flex items-center gap-1.5 mb-6">
                        <span class="text-sm font-medium text-gray-300">Elite Athlete</span>
                        <svg class="w-4 h-4 text-brandGreen" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                    </div>
                    
                    <p class="text-[12px] text-gray-400 leading-tight mb-8">
                        Discipline today,<br>
                        <span class="text-brandGreen font-semibold">Domination</span> tomorrow.
                    </p>

                    <div class="bg-[#191f2c]/80 border border-[#2a3241] rounded-xl p-3 inline-block backdrop-blur-sm">
                        <div class="flex items-center gap-2 mb-1">
                            <div class="w-2.5 h-2.5 bg-brandGreen rounded-full shadow-[0_0_8px_#3eff00]"></div>
                            <span class="text-[13px] font-semibold text-brandGreen">Ready To Train</span>
                        </div>
                        <p class="text-[11px] text-gray-400">Your body. Your mind. Your moment.</p>
                    </div>
                </div>

                <!-- Athlete Background Gradient fade -->
                <div class="absolute inset-0 z-0">
                    <!-- Placeholder athlete image that mimics the green hue -->
                    <div class="absolute right-0 top-0 w-2/3 h-full bg-[url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
                    <!-- Gradient to seamlessly blend the image into the dark card -->
                    <div class="absolute inset-0 bg-gradient-to-r from-cardBg via-cardBg/80 to-transparent"></div>
                    <div class="absolute inset-0 bg-brandGreen/5 mix-blend-overlay"></div>
                </div>

                <!-- Right side: Readiness Circle -->
                <div class="w-[40%] flex flex-col items-center justify-center relative z-10 border-l border-[#1e2330] bg-[#0c1017]/80 backdrop-blur-sm pt-4 pb-4">
                    <div class="absolute top-3 right-3 flex flex-col items-end">
                        <div class="flex items-center gap-1">
                            <svg class="w-5 h-5 text-brandPurple" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>
                            <div>
                                <div class="text-[10px] font-bold text-brandPurple uppercase leading-tight tracking-wider">Level 1</div>
                                <div class="text-[9px] text-gray-400 uppercase leading-tight tracking-wider">Athlete</div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Circular Progress -->
                    <div class="relative w-28 h-28 mt-6">
                        <svg class="w-full h-full transform -rotate-90">
                            <!-- Background track -->
                            <circle cx="56" cy="56" r="46" stroke="#1c222e" stroke-width="8" fill="none" />
                            <!-- Progress track (92%) -->
                            <circle cx="56" cy="56" r="46" stroke="#3eff00" stroke-width="8" fill="none" stroke-dasharray="289" stroke-dashoffset="23" stroke-linecap="round" />
                        </svg>
                        <div class="absolute inset-0 flex flex-col items-center justify-center">
                            <svg class="w-5 h-5 text-brandGreen mb-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            <span class="text-3xl font-extrabold text-white tracking-tighter">92%</span>
                        </div>
                    </div>
                    <div class="text-center mt-3">
                        <div class="text-[11px] font-bold text-brandGreen tracking-widest uppercase">Readiness</div>
                        <div class="text-[13px] font-semibold text-brandGreen mt-2">OPTIMAL</div>
                        <div class="text-[10px] text-gray-400">You are in the zone!</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- TWO COLUMN CARDS: Rank & Plan -->
        <div class="px-4 mt-4 grid grid-cols-2 gap-3">
            
            <!-- Rank Card -->
            <div class="bg-gradient-to-br from-[#1d1538] to-cardBg border border-[#3b2a63] rounded-2xl p-4 flex flex-col justify-between relative overflow-hidden shadow-lg">
                <!-- Decorative background glow -->
                <div class="absolute -top-10 -left-10 w-32 h-32 bg-brandPurple/30 blur-[40px] rounded-full"></div>
                
                <div class="relative z-10 flex items-start gap-3 mb-4">
                    <!-- Shield Icon Representation -->
                    <div class="w-12 h-14 bg-gradient-to-b from-brandPurple to-blue-900 rounded-b-xl flex items-center justify-center border border-purple-400/50 shadow-[0_0_15px_rgba(157,78,221,0.4)]">
                        <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 12.5l-10-5V17l10 5 10-5V9.5l-10 5z"/></svg>
                    </div>
                    <div>
                        <div class="text-[10px] font-bold text-brandPurple tracking-wider uppercase mb-0.5">Your Rank</div>
                        <div class="text-[15px] font-extrabold text-white leading-tight">LEVEL 1 ATHLETE</div>
                        <div class="text-[10px] text-gray-400 mt-0.5">Top 15% Among All Athletes</div>
                    </div>
                </div>
                
                <!-- Progress Bar -->
                <div class="relative z-10 w-full h-1.5 bg-[#1f1636] rounded-full mb-4">
                    <div class="absolute top-0 left-0 h-1.5 bg-brandPurple rounded-full w-[85%] shadow-[0_0_8px_#9d4edd]"></div>
                </div>
                
                <!-- Rank Stats -->
                <div class="relative z-10 flex justify-between">
                    <!-- Global -->
                    <div class="flex flex-col">
                        <div class="flex items-center gap-1 mb-0.5">
                            <svg class="w-3.5 h-3.5 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                            <span class="text-[8px] text-gray-400 uppercase tracking-wide">Global Rank</span>
                        </div>
                        <div class="text-sm font-bold text-white leading-none mb-1">#24</div>
                        <div class="text-[9px] text-brandGreen">Top 15%</div>
                    </div>
                    <!-- India -->
                    <div class="flex flex-col">
                        <div class="flex items-center gap-1 mb-0.5">
                            <div class="w-3.5 h-3.5 rounded-full bg-white overflow-hidden flex border border-gray-500">
                                <div class="w-full h-1/3 bg-[#FF9933]"></div>
                                <div class="w-full h-1/3 bg-white flex items-center justify-center"><div class="w-1 h-1 rounded-full bg-blue-800"></div></div>
                                <div class="w-full h-1/3 bg-[#138808]"></div>
                            </div>
                            <span class="text-[8px] text-gray-400 uppercase tracking-wide">India Rank</span>
                        </div>
                        <div class="text-sm font-bold text-white leading-none mb-1">#5</div>
                        <div class="text-[9px] text-brandGreen">Top 5%</div>
                    </div>
                    <!-- Academy -->
                    <div class="flex flex-col">
                        <div class="flex items-center gap-1 mb-0.5">
                            <svg class="w-3.5 h-3.5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l2.4 7.4h7.6l-6.2 4.5 2.4 7.4-6.2-4.5-6.2 4.5 2.4-7.4-6.2-4.5h7.6z"/></svg>
                            <span class="text-[8px] text-gray-400 uppercase tracking-wide">Academy Rank</span>
                        </div>
                        <div class="text-sm font-bold text-white leading-none mb-1">#1</div>
                        <div class="text-[9px] text-brandGreen">Top 1%</div>
                    </div>
                </div>
            </div>

            <!-- Today's Plan Card -->
            <div class="bg-cardBg border border-borderDark rounded-2xl relative overflow-hidden flex flex-col justify-between shadow-lg group">
                <!-- Background Image (Cable workout mimic) -->
                <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center opacity-60"></div>
                <div class="absolute inset-0 bg-gradient-to-t from-[#0e1118] via-[#0e1118]/80 to-transparent"></div>
                
                <div class="relative z-10 p-4">
                    <div class="text-[10px] font-bold text-brandGreen tracking-widest uppercase mb-1">Today's Plan</div>
                    <div class="text-lg font-extrabold text-white leading-tight w-[70%]">Full Body<br>Strength</div>
                    
                    <div class="mt-4 flex flex-col gap-1.5">
                        <div class="flex items-center gap-1.5 text-gray-300">
                            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
                            <span class="text-[11px] font-medium">45 min</span>
                        </div>
                        <div class="flex items-center gap-1.5 text-gray-300">
                            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path></svg>
                            <span class="text-[11px] font-medium">420 kcal</span>
                        </div>
                        <div class="flex items-center gap-1.5 text-gray-300">
                            <svg class="w-3.5 h-3.5 text-brandPurple" fill="currentColor" viewBox="0 0 24 24"><path d="M3 17h4v4H3zm6-6h4v10H9zm6-6h4v16h-4z"/></svg>
                            <span class="text-[11px] font-medium">Advanced</span>
                        </div>
                    </div>
                </div>

                <div class="relative z-10 p-3 pt-0">
                    <button class="w-full bg-brandGreen hover:bg-[#32cc00] text-[#061800] text-[13px] font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 transition-colors">
                        Resume Workout
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- AI COACH & LEADERBOARD -->
        <div class="px-4 mt-4 grid grid-cols-2 gap-3">
            
            <!-- AI Coach Insight -->
            <div class="bg-[#0b1424] border border-[#1e345e] rounded-2xl p-4 flex flex-col justify-between shadow-lg">
                <div class="text-[10px] font-bold text-[#00b4d8] tracking-widest uppercase mb-3">AI Coach Insight</div>
                <div class="flex items-start gap-3 mb-4">
                    <!-- Brain Icon -->
                    <div class="w-10 h-10 flex-shrink-0 text-[#00b4d8]">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>
                    </div>
                    <p class="text-[11px] text-gray-300 leading-snug">
                        Readiness is excellent today. It's a great day to push your limits! <span class="text-yellow-500">⚡</span>
                    </p>
                </div>
                <button class="w-full bg-transparent border border-[#1e345e] rounded-lg py-2 flex items-center justify-between px-3">
                    <span class="text-[11px] font-medium text-[#00b4d8]">View Full Report</span>
                    <svg class="w-3.5 h-3.5 text-[#00b4d8]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path></svg>
                </button>
            </div>

            <!-- Leaderboard -->
            <div class="bg-cardBg border border-borderDark rounded-2xl p-4 shadow-lg">
                <div class="flex items-center justify-between mb-4">
                    <div class="text-[10px] font-bold text-yellow-500 tracking-widest uppercase">Leaderboard Top 3</div>
                    <div class="flex items-center gap-1 text-[10px] text-gray-400">
                        View All <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path></svg>
                                     </div>
                </div>
                
                <div class="flex justify-between items-end mt-2">
                    <!-- #1 Pragati -->
                    <div class="flex flex-col items-center relative -mt-4">
                        <div class="w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center text-[9px] font-bold text-black absolute -top-1 -left-1 z-10 border border-cardBg">1</div>
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop" class="w-10 h-10 rounded-full border-2 border-yellow-500 object-cover mb-1.5" alt="Pragati">
                        <div class="text-[11px] font-semibold text-white">Pragati</div>
                        <div class="text-[9px] text-brandGreen">1,250 XP</div>
                    </div>
                    <!-- #2 Dinesh -->
                    <div class="flex flex-col items-center relative">
                        <div class="w-4 h-4 bg-gray-300 rounded-full flex items-center justify-center text-[9px] font-bold text-black absolute -top-1 -left-1 z-10 border border-cardBg">2</div>
                        <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=150&auto=format&fit=crop" class="w-10 h-10 rounded-full border-2 border-gray-300 object-cover mb-1.5 opacity-80" alt="Dinesh">
                        <div class="text-[11px] font-semibold text-white">Dinesh</div>
                        <div class="text-[9px] text-brandGreen">1,100 XP</div>
                    </div>
                    <!-- #3 Athlete X -->
                    <div class="flex flex-col items-center relative">
                        <div class="w-4 h-4 bg-[#cd7f32] rounded-full flex items-center justify-center text-[9px] font-bold text-black absolute -top-1 -left-1 z-10 border border-cardBg">3</div>
                        <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=150&auto=format&fit=crop" class="w-10 h-10 rounded-full border-2 border-[#cd7f32] object-cover mb-1.5 opacity-80" alt="Athlete X">
                        <div class="text-[11px] font-semibold text-white">Athlete X</div>
                        <div class="text-[9px] text-brandGreen">980 XP</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- STATS HORIZONTAL SCROLL -->
        <div class="pl-4 mt-4 pb-6">
            <div class="flex gap-3 overflow-x-auto hide-scroll pr-4 pb-2">
                
                <!-- XP Today -->
                <div class="bg-cardBg border border-borderDark rounded-xl p-3 min-w-[90px] flex-shrink-0 flex flex-col items-center text-center">
                    <svg class="w-6 h-6 text-brandGreen mb-2" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><polygon points="12,2 22,8 22,16 12,22 2,16 2,8"/></svg>
                    <div class="text-[9px] font-bold text-gray-400 tracking-wider uppercase mb-1">XP Today</div>
                    <div class="text-xl font-bold text-white leading-none mb-1">120</div>
                    <div class="text-[10px] text-brandGreen mb-2">+12%</div>
                    <div class="w-full h-1 bg-[#1a202c] rounded-full"><div class="h-1 bg-brandGreen rounded-full w-[60%]"></div></div>
                </div>

                <!-- Calories -->
                <div class="bg-cardBg border border-borderDark rounded-xl p-3 min-w-[90px] flex-shrink-0 flex flex-col items-center text-center">
                    <svg class="w-6 h-6 text-orange-500 mb-2" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path></svg>
                    <div class="text-[9px] font-bold text-gray-400 tracking-wider uppercase mb-1">Calories</div>
                    <div class="text-xl font-bold text-white leading-none mb-1">2,450</div>
                    <div class="text-[10px] text-gray-500 mb-2">Goal: 2,800</div>
                    <div class="w-full h-1 bg-[#1a202c] rounded-full"><div class="h-1 bg-orange-500 rounded-full w-[85%]"></div></div>
                </div>

                <!-- Recovery -->
                <div class="bg-cardBg border border-borderDark rounded-xl p-3 min-w-[90px] flex-shrink-0 flex flex-col items-center text-center">
                    <svg class="w-6 h-6 text-brandGreen mb-2" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.5l2 2 4-4"></path></svg>
                    <div class="text-[9px] font-bold text-gray-400 tracking-wider uppercase mb-1">Recovery</div>
                    <div class="text-xl font-bold text-white leading-none mb-1">85%</div>
                    <div class="text-[10px] text-gray-400 mb-2">Good</div>
                    <div class="w-full h-1 bg-[#1a202c] rounded-full"><div class="h-1 bg-brandGreen rounded-full w-[85%]"></div></div>
                </div>

                <!-- Sleep Score -->
                <div class="bg-cardBg border border-borderDark rounded-xl p-3 min-w-[90px] flex-shrink-0 flex flex-col items-center text-center">
                    <svg class="w-6 h-6 text-brandPurple mb-2" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
                    <div class="text-[9px] font-bold text-gray-400 tracking-wider uppercase mb-1">Sleep Score</div>
                    <div class="text-xl font-bold text-white leading-none mb-1">78</div>
                    <div class="text-[10px] text-gray-400 mb-2">Good</div>
                    <div class="w-full h-1 bg-[#1a202c] rounded-full"><div class="h-1 bg-brandPurple rounded-full w-[78%]"></div></div>
                </div>

                <!-- Water Goal -->
                <div class="bg-cardBg border border-borderDark rounded-xl p-3 min-w-[90px] flex-shrink-0 flex flex-col items-center text-center">
                    <svg class="w-6 h-6 text-[#00b4d8] mb-2" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16a4 4 0 100-8 4 4 0 000 8z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M12 3c-2.5 3-4 5.5-4 8a4 4 0 008 0c0-2.5-1.5-5-4-8z"></path></svg>
                    <div class="text-[9px] font-bold text-gray-400 tracking-wider uppercase mb-1">Water Goal</div>
                    <div class="text-xl font-bold text-white leading-none mb-1">2.6 L</div>
                    <div class="text-[10px] text-gray-500 mb-2">Goal: 3.0 L</div>
                    <div class="w-full h-1 bg-[#1a202c] rounded-full"><div class="h-1 bg-[#00b4d8] rounded-full w-[86%]"></div></div>
                </div>

                <!-- Streak -->
                <div class="bg-cardBg border border-borderDark rounded-xl p-3 min-w-[90px] flex-shrink-0 flex flex-col items-center text-center">
                    <svg class="w-6 h-6 text-yellow-500 mb-2" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    <div class="text-[9px] font-bold text-gray-400 tracking-wider uppercase mb-1">Streak</div>
                    <div class="text-xl font-bold text-white leading-none mb-1">7</div>
                    <div class="text-[10px] text-gray-400 mb-2">Days</div>
                    <div class="w-full h-1 bg-[#1a202c] rounded-full"><div class="h-1 bg-yellow-500 rounded-full w-[70%]"></div></div>
                </div>
            </div>
        </div>

        <!-- BOTTOM NAVIGATION -->
        <div class="absolute bottom-0 left-0 w-full bg-[#05070a]/95 backdrop-blur-md border-t border-borderDark px-6 py-3 flex justify-between items-center z-50">
            <!-- Home (Active) -->
            <div class="flex flex-col items-center gap-1 cursor-pointer">
                <div class="relative">
                    <div class="absolute inset-0 bg-brandGreen/20 blur-md rounded-full"></div>
                    <svg class="w-7 h-7 text-brandGreen relative z-10" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path><polygon points="12 9 13.09 11.26 15.5 11.61 13.75 13.34 14.16 15.74 12 14.61 9.84 15.74 10.25 13.34 8.5 11.61 10.91 11.26" fill="currentColor" stroke="none"/></svg>
                </div>
                <span class="text-[10px] font-semibold text-brandGreen">Home</span>
            </div>
            
            <!-- Training -->
            <div class="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-300 cursor-pointer transition-colors">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 10v4m12-4v4m-2-4h4m-4 4h4m-16-4h4m-4 4h4m4-6v8m4-8v8"></path></svg>
                <span class="text-[10px] font-medium">Training</span>
            </div>
            
            <!-- Tournaments -->
            <div class="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-300 cursor-pointer transition-colors">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                <span class="text-[10px] font-medium">Tournaments</span>
            </div>

            <!-- DP (XP) -->
            <div class="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-300 cursor-pointer transition-colors">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><polygon points="12 2 22 8 22 16 12 22 2 16 2 8" stroke-linecap="round" stroke-linejoin="round"/><text x="12" y="15" text-anchor="middle" font-size="7" font-weight="bold" fill="currentColor" stroke="none">XP</text></svg>
                <span class="text-[10px] font-medium">DP</span>
            </div>

            <!-- Profile -->
            <div class="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-300 cursor-pointer transition-colors">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M16 21v-2a4 4 0 00-4-4H5"></path></svg>
                <span class="text-[10px] font-medium">Profile</span>
            </div>
        </div>
    </div>
</body>
</html>
