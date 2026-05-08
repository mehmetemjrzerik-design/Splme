"use client";

import type { UserData } from "@/app/page";
import { useState } from "react";

interface StoreTabProps {
  userData: UserData;
}

const hatItems = [
  { id: 1, type: "blank", color: "#e8d4b8" },
  { id: 2, type: "cat", color: "#e8d4b8" },
  { id: 3, type: "bear", color: "#d4a017" },
  { id: 4, type: "pig", color: "#ff69b4" },
  { id: 5, type: "panda", color: "#ffffff" },
  { id: 6, type: "frog", color: "#4ade80" },
  { id: 7, type: "lion", color: "#f59e0b" },
  { id: 8, type: "bunny", color: "#ffc0cb" },
  { id: 9, type: "devil", color: "#e74c3c" },
  { id: 10, type: "monkey", color: "#8b4513" },
  { id: 11, type: "teddy", color: "#d4a017" },
  { id: 12, type: "cow", color: "#e8d4b8" },
  { id: 13, type: "duck", color: "#ffd93d" },
  { id: 14, type: "alien", color: "#4ade80" },
  { id: 15, type: "bird", color: "#f97316" },
  { id: 16, type: "heart1", color: "#ffd93d" },
  { id: 17, type: "heart2", color: "#ff69b4" },
  { id: 18, type: "heart3", color: "#87ceeb" },
];

export function StoreTab({ userData }: StoreTabProps) {
  const [selectedHat, setSelectedHat] = useState<number | null>(1);

  return (
    <div className="flex gap-6 items-start justify-center">
      {/* Left - Character Preview */}
      <div className="character-preview w-44 h-52 flex flex-col items-center justify-center relative">
        <span className="absolute top-3 left-3 text-[#1a1a2e] font-bold text-sm">Hicbiri</span>
        <CharacterPreview />
        <div className="absolute bottom-3 left-3">
          <button className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center">
            <EyeIcon />
          </button>
        </div>
      </div>

      {/* Center - Hat Items Grid */}
      <div className="bg-[#ffd93d] rounded-xl p-4 w-[420px]">
        <div className="grid grid-cols-6 gap-2">
          {hatItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedHat(item.id)}
              className={`aspect-square rounded-lg border-3 transition-all hover:scale-105 ${
                selectedHat === item.id
                  ? "border-[#1a1a2e] shadow-lg"
                  : "border-[#b8860b]/50"
              }`}
              style={{ backgroundColor: "#fff8dc" }}
            >
              <HatIcon type={item.type} color={item.color} />
            </button>
          ))}
        </div>
      </div>

      {/* Right - Promo Panel */}
      <div className="promo-card w-56 h-52 p-4 flex flex-col items-center justify-center text-center">
        <p className="text-[#1a1a2e] font-bold text-lg mb-2" style={{ fontFamily: "'Lilita One', sans-serif" }}>
          EN iYi .iO OYUN
          <br />
          SECENEKLERiNi
          <br />
          DENEYiN
        </p>
        <button className="game-btn bg-[#f39c12] hover:bg-[#d68910] text-white text-sm px-4 py-2 mt-2">
          Daha fazla .iO oyunu
        </button>
      </div>
    </div>
  );
}

function CharacterPreview() {
  return (
    <svg viewBox="0 0 80 100" className="w-24 h-32">
      {/* Body */}
      <ellipse cx="40" cy="75" rx="25" ry="20" fill="#e8d4b8" stroke="#8b7355" strokeWidth="3" />
      {/* Head */}
      <ellipse cx="40" cy="40" rx="30" ry="28" fill="#e8d4b8" stroke="#8b7355" strokeWidth="3" />
      {/* Eyes */}
      <ellipse cx="30" cy="38" rx="6" ry="8" fill="white" />
      <ellipse cx="50" cy="38" rx="6" ry="8" fill="white" />
      <circle cx="32" cy="40" r="3" fill="#1a1a2e" />
      <circle cx="52" cy="40" r="3" fill="#1a1a2e" />
    </svg>
  );
}

function HatIcon({ type, color }: { type: string; color: string }) {
  switch (type) {
    case "blank":
      return (
        <svg viewBox="0 0 40 40" className="w-full h-full p-1">
          <ellipse cx="20" cy="24" rx="14" ry="12" fill={color} stroke="#8b7355" strokeWidth="1" />
          <ellipse cx="16" cy="22" rx="3" ry="4" fill="white" />
          <ellipse cx="24" cy="22" rx="3" ry="4" fill="white" />
          <circle cx="17" cy="23" r="1.5" fill="#1a1a2e" />
          <circle cx="25" cy="23" r="1.5" fill="#1a1a2e" />
        </svg>
      );
    case "cat":
      return (
        <svg viewBox="0 0 40 40" className="w-full h-full p-1">
          <ellipse cx="20" cy="24" rx="14" ry="12" fill={color} stroke="#8b7355" strokeWidth="1" />
          <path d="M8 20 L12 8 L16 16" fill={color} stroke="#8b7355" strokeWidth="1" />
          <path d="M32 20 L28 8 L24 16" fill={color} stroke="#8b7355" strokeWidth="1" />
          <ellipse cx="16" cy="22" rx="3" ry="4" fill="white" />
          <ellipse cx="24" cy="22" rx="3" ry="4" fill="white" />
          <circle cx="17" cy="23" r="1.5" fill="#1a1a2e" />
          <circle cx="25" cy="23" r="1.5" fill="#1a1a2e" />
          <path d="M18 28 Q20 30 22 28" fill="none" stroke="#8b7355" strokeWidth="1" />
        </svg>
      );
    case "bear":
      return (
        <svg viewBox="0 0 40 40" className="w-full h-full p-1">
          <circle cx="10" cy="14" r="6" fill={color} stroke="#8b7355" strokeWidth="1" />
          <circle cx="30" cy="14" r="6" fill={color} stroke="#8b7355" strokeWidth="1" />
          <ellipse cx="20" cy="24" rx="14" ry="12" fill={color} stroke="#8b7355" strokeWidth="1" />
          <ellipse cx="16" cy="22" rx="3" ry="4" fill="white" />
          <ellipse cx="24" cy="22" rx="3" ry="4" fill="white" />
          <circle cx="17" cy="23" r="1.5" fill="#1a1a2e" />
          <circle cx="25" cy="23" r="1.5" fill="#1a1a2e" />
          <ellipse cx="20" cy="28" rx="3" ry="2" fill="#8b4513" />
        </svg>
      );
    case "pig":
      return (
        <svg viewBox="0 0 40 40" className="w-full h-full p-1">
          <ellipse cx="20" cy="24" rx="14" ry="12" fill={color} stroke="#db7093" strokeWidth="1" />
          <ellipse cx="10" cy="16" rx="4" ry="5" fill={color} stroke="#db7093" strokeWidth="1" />
          <ellipse cx="30" cy="16" rx="4" ry="5" fill={color} stroke="#db7093" strokeWidth="1" />
          <ellipse cx="16" cy="22" rx="3" ry="4" fill="white" />
          <ellipse cx="24" cy="22" rx="3" ry="4" fill="white" />
          <circle cx="17" cy="23" r="1.5" fill="#1a1a2e" />
          <circle cx="25" cy="23" r="1.5" fill="#1a1a2e" />
          <ellipse cx="20" cy="28" rx="5" ry="3" fill="#ffb6c1" />
          <circle cx="18" cy="28" r="1" fill="#db7093" />
          <circle cx="22" cy="28" r="1" fill="#db7093" />
        </svg>
      );
    case "panda":
      return (
        <svg viewBox="0 0 40 40" className="w-full h-full p-1">
          <circle cx="10" cy="14" r="6" fill="#1a1a2e" />
          <circle cx="30" cy="14" r="6" fill="#1a1a2e" />
          <ellipse cx="20" cy="24" rx="14" ry="12" fill={color} stroke="#ddd" strokeWidth="1" />
          <ellipse cx="14" cy="22" rx="5" ry="6" fill="#1a1a2e" />
          <ellipse cx="26" cy="22" rx="5" ry="6" fill="#1a1a2e" />
          <ellipse cx="15" cy="22" rx="2" ry="3" fill="white" />
          <ellipse cx="27" cy="22" rx="2" ry="3" fill="white" />
          <ellipse cx="20" cy="28" rx="3" ry="2" fill="#1a1a2e" />
        </svg>
      );
    case "frog":
      return (
        <svg viewBox="0 0 40 40" className="w-full h-full p-1">
          <ellipse cx="20" cy="26" rx="14" ry="10" fill={color} stroke="#22c55e" strokeWidth="1" />
          <circle cx="12" cy="14" r="7" fill={color} stroke="#22c55e" strokeWidth="1" />
          <circle cx="28" cy="14" r="7" fill={color} stroke="#22c55e" strokeWidth="1" />
          <ellipse cx="12" cy="14" rx="3" ry="4" fill="white" />
          <ellipse cx="28" cy="14" rx="3" ry="4" fill="white" />
          <circle cx="12" cy="15" r="2" fill="#1a1a2e" />
          <circle cx="28" cy="15" r="2" fill="#1a1a2e" />
        </svg>
      );
    case "heart1":
    case "heart2":
    case "heart3":
      return (
        <svg viewBox="0 0 40 40" className="w-full h-full p-1">
          <path
            d="M20 35 C10 28 5 20 5 14 C5 8 10 5 15 5 C18 5 20 7 20 10 C20 7 22 5 25 5 C30 5 35 8 35 14 C35 20 30 28 20 35"
            fill={color}
            stroke={type === "heart1" ? "#b8860b" : type === "heart2" ? "#db7093" : "#5a9fc9"}
            strokeWidth="1"
          />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 40 40" className="w-full h-full p-1">
          <ellipse cx="20" cy="24" rx="14" ry="12" fill={color} stroke="#8b7355" strokeWidth="1" />
          <ellipse cx="16" cy="22" rx="3" ry="4" fill="white" />
          <ellipse cx="24" cy="22" rx="3" ry="4" fill="white" />
          <circle cx="17" cy="23" r="1.5" fill="#1a1a2e" />
          <circle cx="25" cy="23" r="1.5" fill="#1a1a2e" />
        </svg>
      );
  }
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#1a1a2e]">
      <path
        fill="currentColor"
        d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3z"
      />
    </svg>
  );
}
