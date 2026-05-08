"use client";

import type { UserData } from "@/app/page";

interface GameHeaderProps {
  userData: UserData;
  onLogin: () => void;
  onLogout: () => void;
}

export function GameHeader({ userData, onLogin }: GameHeaderProps) {
  return (
    <header className="flex items-center justify-between px-4 py-3">
      {/* Logo */}
      <div className="flex-1" />

      {/* Center Logo */}
      <div className="flex items-center justify-center">
        <div className="relative">
          {/* Cloud decorations */}
          <CloudSVG className="absolute -left-20 top-0 w-16 h-12 opacity-80" />
          <CloudSVG className="absolute -right-16 top-2 w-12 h-10 opacity-60" />

          {/* Main Logo */}
          <div className="flex items-center">
            <h1
              className="game-title text-5xl md:text-6xl text-[#ff6b35] tracking-tight"
              style={{ fontFamily: "'Lilita One', sans-serif" }}
            >
              SPL
              <span className="text-[#20b2aa]">OO</span>
              P
              <span className="text-white text-3xl">.io</span>
            </h1>
            {/* Character mascot */}
            <div className="ml-2 -mt-4">
              <GameMascot />
            </div>
          </div>

          {/* Rock decorations */}
          <RockSVG className="absolute -right-24 top-8 w-14 h-12" />
        </div>
      </div>

      {/* Right side - Auth buttons or User info */}
      <div className="flex-1 flex justify-end items-center gap-3">
        {userData.isLoggedIn ? (
          <>
            {/* User Badge */}
            <div className="flex items-center gap-2 bg-[#2d3436]/80 rounded-lg px-3 py-2">
              <div className="w-8 h-8 flex items-center justify-center">
                <FireBadge />
              </div>
              <span className="text-white font-bold text-sm">
                {userData.username}
                {userData.id}
              </span>
            </div>
            {/* Coins */}
            <div className="flex items-center gap-2 bg-[#2d3436]/80 rounded-lg px-3 py-2">
              <div className="w-6 h-6">
                <CoinIcon />
              </div>
              <span className="text-[#ffd93d] font-bold">
                {userData.coins.toLocaleString()}
              </span>
            </div>
          </>
        ) : (
          <>
            <button
              onClick={onLogin}
              className="game-btn bg-[#ff6b35] hover:bg-[#e55a2b] text-white px-4 py-2 text-sm"
            >
              GiRiS
              <br />
              YAPMAK
            </button>
            <button
              onClick={onLogin}
              className="game-btn bg-[#20b2aa] hover:bg-[#1a9994] text-white px-4 py-2 text-sm"
            >
              UYE
              <br />
              OLMAK
            </button>
          </>
        )}
      </div>
    </header>
  );
}

function CloudSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 60" className={className}>
      <ellipse cx="30" cy="40" rx="25" ry="18" fill="#4a5568" />
      <ellipse cx="55" cy="35" rx="30" ry="22" fill="#4a5568" />
      <ellipse cx="75" cy="42" rx="20" ry="15" fill="#4a5568" />
    </svg>
  );
}

function RockSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 50" className={className}>
      <path
        d="M10 45 L5 30 L15 15 L30 10 L45 15 L55 25 L50 45 Z"
        fill="#5a6268"
        stroke="#3d4145"
        strokeWidth="2"
      />
      <path d="M15 35 L20 25 L30 22 L35 28 L30 38 Z" fill="#4a5258" />
    </svg>
  );
}

function GameMascot() {
  return (
    <svg viewBox="0 0 50 60" className="w-14 h-16">
      {/* Body */}
      <ellipse cx="25" cy="45" rx="15" ry="12" fill="#d4a017" stroke="#8b7355" strokeWidth="2" />
      {/* Head */}
      <ellipse cx="25" cy="25" rx="18" ry="16" fill="#e8d4b8" stroke="#8b7355" strokeWidth="2" />
      {/* Eyes */}
      <ellipse cx="18" cy="22" rx="4" ry="5" fill="white" />
      <ellipse cx="32" cy="22" rx="4" ry="5" fill="white" />
      <circle cx="19" cy="23" r="2" fill="#1a1a2e" />
      <circle cx="33" cy="23" r="2" fill="#1a1a2e" />
      {/* Hat */}
      <ellipse cx="25" cy="12" rx="12" ry="4" fill="#228b22" />
      <path d="M13 12 Q25 -5 37 12" fill="#228b22" stroke="#1a5f1a" strokeWidth="1" />
      {/* Red dot on hat */}
      <circle cx="25" cy="5" r="3" fill="#e74c3c" />
    </svg>
  );
}

function FireBadge() {
  return (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path
        d="M12 2C12 2 8 6 8 10C8 12 9 14 10 15C9 14 8 12 8 10C8 8 10 6 12 4C14 6 16 8 16 10C16 12 15 14 14 15C15 14 16 12 16 10C16 6 12 2 12 2Z"
        fill="#e74c3c"
      />
      <path
        d="M12 6C12 6 10 8 10 10C10 11 10.5 12 11 12.5C10.5 12 10 11 10 10C10 9 11 8 12 7C13 8 14 9 14 10C14 11 13.5 12 13 12.5C13.5 12 14 11 14 10C14 8 12 6 12 6Z"
        fill="#f39c12"
      />
      <ellipse cx="12" cy="14" rx="4" ry="3" fill="#e74c3c" />
    </svg>
  );
}

function CoinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <circle cx="12" cy="12" r="10" fill="#ffd93d" stroke="#b8860b" strokeWidth="2" />
      <circle cx="12" cy="12" r="6" fill="#f0c419" stroke="#b8860b" strokeWidth="1" />
      <path d="M12 6 L12 18 M8 12 L16 12" stroke="#b8860b" strokeWidth="1.5" />
    </svg>
  );
}
