"use client";

import { useState } from "react";

export function PlayTab() {
  const [playerName, setPlayerName] = useState("");
  const [selectedServer, setSelectedServer] = useState("AB#1 Frankfurt");
  const [gameMode, setGameMode] = useState<"klasik" | "kumhavuzu" | "etkinlik">("klasik");

  const servers = [
    "AB#1 Frankfurt",
    "AB#2 Amsterdam",
    "AB#3 Paris",
    "US#1 New York",
    "US#2 Los Angeles",
    "AS#1 Singapore",
  ];

  return (
    <div className="flex gap-4 items-start justify-center">
      {/* Left Ad - Shoot Up */}
      <div className="w-56 h-64 rounded-lg overflow-hidden border-3 border-[#1a1a2e] shadow-lg cursor-pointer hover:scale-[1.02] transition-transform">
        <div className="w-full h-full bg-gradient-to-br from-[#87ceeb] to-[#4a90a4] relative">
          <div className="absolute top-2 left-2 right-2">
            <div className="bg-[#ff6b35] text-white px-2 py-1 rounded font-bold text-sm inline-block" style={{ fontFamily: "'Lilita One', sans-serif" }}>
              SHOOT UP
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#2d3436] to-transparent" />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <CarSVG />
          </div>
          <div className="absolute bottom-8 left-4">
            <ZombieSVG />
          </div>
        </div>
      </div>

      {/* Center - Play Panel */}
      <div className="game-panel p-6 w-80">
        {/* Name Input */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Adinizi girin"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            className="flex-1 bg-white text-[#1a1a2e] px-4 py-2 rounded-lg font-semibold placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#20b2aa]"
          />
          <div className="relative">
            <select
              value={selectedServer}
              onChange={(e) => setSelectedServer(e.target.value)}
              className="appearance-none bg-white text-[#1a1a2e] px-3 py-2 pr-8 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-[#20b2aa] cursor-pointer"
            >
              {servers.map((server) => (
                <option key={server} value={server}>
                  {server}
                </option>
              ))}
            </select>
            <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
              <ChevronDownIcon />
            </div>
          </div>
        </div>

        {/* Play Button */}
        <button className="w-full game-btn bg-[#20b2aa] hover:bg-[#1a9994] text-white text-3xl py-4 mb-4" style={{ fontFamily: "'Lilita One', sans-serif" }}>
          OYNAMA!
        </button>

        {/* Game Mode Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => setGameMode("klasik")}
            className={`flex-1 game-btn py-3 text-sm ${
              gameMode === "klasik"
                ? "bg-[#ff6b35] hover:bg-[#e55a2b]"
                : "bg-[#4a5568] hover:bg-[#5a6578]"
            } text-white`}
          >
            KLASiK
          </button>
          <button
            onClick={() => setGameMode("kumhavuzu")}
            className={`flex-1 game-btn py-3 text-sm ${
              gameMode === "kumhavuzu"
                ? "bg-[#20b2aa] hover:bg-[#1a9994]"
                : "bg-[#4a5568] hover:bg-[#5a6578]"
            } text-white`}
          >
            KUM
            <br />
            HAVUZU
          </button>
          <button
            onClick={() => setGameMode("etkinlik")}
            className={`flex-1 game-btn py-3 text-sm ${
              gameMode === "etkinlik"
                ? "bg-[#ff6b35] hover:bg-[#e55a2b]"
                : "bg-[#4a5568] hover:bg-[#5a6578]"
            } text-white`}
          >
            ETKiNLiK
          </button>
        </div>
      </div>

      {/* Right - WebGames Ad */}
      <div className="w-56 h-64 rounded-lg overflow-hidden border-3 border-[#1a1a2e] shadow-lg">
        <div className="w-full h-full bg-gradient-to-br from-[#4ade80] to-[#22c55e] p-2">
          <div className="text-white font-bold text-lg mb-2 text-center" style={{ fontFamily: "'Lilita One', sans-serif" }}>
            WEBGAMES
            <span className="text-xs block text-[#1a1a2e]/80">GAMES TO CRACK!</span>
          </div>
          <div className="grid grid-cols-2 gap-1">
            <GameThumbnail color="#8b5cf6" icon="ghost" />
            <GameThumbnail color="#f97316" icon="sword" />
            <GameThumbnail color="#fbbf24" icon="blob" />
            <GameThumbnail color="#22c55e" icon="knight" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ChevronDownIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#1a1a2e]">
      <path fill="currentColor" d="M7 10l5 5 5-5z" />
    </svg>
  );
}

function CarSVG() {
  return (
    <svg viewBox="0 0 80 40" className="w-20 h-10">
      <rect x="5" y="15" width="70" height="20" rx="4" fill="#ffd93d" stroke="#b8860b" strokeWidth="2" />
      <rect x="15" y="8" width="40" height="12" rx="2" fill="#87ceeb" stroke="#5a9fc9" strokeWidth="1" />
      <circle cx="18" cy="35" r="6" fill="#2d3436" stroke="#1a1a2e" strokeWidth="2" />
      <circle cx="62" cy="35" r="6" fill="#2d3436" stroke="#1a1a2e" strokeWidth="2" />
      <rect x="60" y="18" width="12" height="6" rx="1" fill="#ff6b35" />
    </svg>
  );
}

function ZombieSVG() {
  return (
    <svg viewBox="0 0 40 50" className="w-10 h-12">
      <ellipse cx="20" cy="35" rx="12" ry="14" fill="#4ade80" stroke="#22c55e" strokeWidth="2" />
      <ellipse cx="20" cy="20" rx="14" ry="12" fill="#4ade80" stroke="#22c55e" strokeWidth="2" />
      <ellipse cx="14" cy="18" rx="4" ry="5" fill="white" />
      <ellipse cx="26" cy="18" rx="4" ry="5" fill="white" />
      <circle cx="15" cy="19" r="2" fill="#1a1a2e" />
      <circle cx="27" cy="19" r="2" fill="#1a1a2e" />
    </svg>
  );
}

function GameThumbnail({ color, icon }: { color: string; icon: string }) {
  return (
    <div
      className="aspect-square rounded-lg flex items-center justify-center"
      style={{ backgroundColor: color }}
    >
      {icon === "ghost" && <GhostIcon />}
      {icon === "sword" && <SwordIcon />}
      {icon === "blob" && <BlobIcon />}
      {icon === "knight" && <KnightIcon />}
    </div>
  );
}

function GhostIcon() {
  return (
    <svg viewBox="0 0 40 40" className="w-10 h-10">
      <path
        d="M20 5 C10 5 5 12 5 22 L5 35 L10 30 L15 35 L20 30 L25 35 L30 30 L35 35 L35 22 C35 12 30 5 20 5"
        fill="white"
        stroke="#ddd"
        strokeWidth="1"
      />
      <circle cx="14" cy="18" r="3" fill="#1a1a2e" />
      <circle cx="26" cy="18" r="3" fill="#1a1a2e" />
    </svg>
  );
}

function SwordIcon() {
  return (
    <svg viewBox="0 0 40 40" className="w-10 h-10">
      <path d="M8 32 L16 24 L14 22 L22 14 L32 4 L36 8 L26 18 L18 26 L20 28 L12 36 Z" fill="#9ca3af" stroke="#6b7280" strokeWidth="1" />
      <rect x="10" y="28" width="8" height="4" rx="1" fill="#8b4513" transform="rotate(-45 14 30)" />
    </svg>
  );
}

function BlobIcon() {
  return (
    <svg viewBox="0 0 40 40" className="w-10 h-10">
      <ellipse cx="20" cy="24" rx="14" ry="12" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2" />
      <ellipse cx="14" cy="20" rx="3" ry="4" fill="white" />
      <ellipse cx="26" cy="20" rx="3" ry="4" fill="white" />
      <circle cx="15" cy="21" r="1.5" fill="#1a1a2e" />
      <circle cx="27" cy="21" r="1.5" fill="#1a1a2e" />
    </svg>
  );
}

function KnightIcon() {
  return (
    <svg viewBox="0 0 40 40" className="w-10 h-10">
      <ellipse cx="20" cy="28" rx="10" ry="10" fill="#4ade80" stroke="#22c55e" strokeWidth="2" />
      <ellipse cx="20" cy="18" rx="12" ry="10" fill="#6b7280" stroke="#4b5563" strokeWidth="2" />
      <rect x="8" y="12" width="24" height="4" rx="1" fill="#9ca3af" />
      <ellipse cx="14" cy="20" rx="2" ry="3" fill="#1a1a2e" />
      <ellipse cx="26" cy="20" rx="2" ry="3" fill="#1a1a2e" />
    </svg>
  );
}
