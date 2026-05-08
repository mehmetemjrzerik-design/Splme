"use client";

import { useState } from "react";

type FilterType = "gunluk" | "ay" | "tum";

const leaderboardData = [
  { rank: 1, badge: "diamond", name: "#201349", score: "6.406.817.837" },
  { rank: 2, badge: "diamond", name: "Heex-02-#170561", score: "3.982.697.842" },
  { rank: 3, badge: "diamond", name: "Linhdz#64514", score: "3.580.642.910" },
  { rank: 4, badge: "diamond", name: "Player#12345", score: "2.841.523.621" },
  { rank: 5, badge: "gold", name: "GamerPro#98765", score: "1.923.456.789" },
];

export function LeaderboardTab() {
  const [golFilter, setGolFilter] = useState<FilterType>("gunluk");
  const [oldurmekFilter, setOldurmekFilter] = useState<FilterType>("gunluk");

  return (
    <div className="flex gap-6 items-start justify-center">
      {/* Left - Filter Panel */}
      <div className="game-panel p-4 w-64">
        {/* Rank Badge */}
        <div className="flex justify-center mb-4">
          <button className="game-btn bg-[#20b2aa] hover:bg-[#1a9994] text-white text-sm px-6 py-2">
            Siralama Listesi
          </button>
        </div>

        {/* Rank Section */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <WreathLeftIcon />
          <button className="game-btn bg-[#ff6b35] hover:bg-[#e55a2b] text-white px-6 py-2">
            Rutbe
          </button>
          <WreathRightIcon />
        </div>

        {/* GOL Section */}
        <div className="mb-4">
          <h3 className="text-white font-bold text-center mb-2" style={{ fontFamily: "'Lilita One', sans-serif" }}>
            GOL
          </h3>
          <div className="flex gap-2 justify-center">
            <FilterButton
              label="Gunluk"
              active={golFilter === "gunluk"}
              onClick={() => setGolFilter("gunluk")}
            />
            <FilterButton
              label="Ay"
              active={golFilter === "ay"}
              onClick={() => setGolFilter("ay")}
            />
            <FilterButton
              label="Tum"
              active={golFilter === "tum"}
              onClick={() => setGolFilter("tum")}
            />
          </div>
        </div>

        {/* OLDURMEK Section */}
        <div>
          <h3 className="text-white font-bold text-center mb-2" style={{ fontFamily: "'Lilita One', sans-serif" }}>
            OLDURMEK
          </h3>
          <div className="flex gap-2 justify-center">
            <FilterButton
              label="Gunluk"
              active={oldurmekFilter === "gunluk"}
              onClick={() => setOldurmekFilter("gunluk")}
            />
            <FilterButton
              label="Ay"
              active={oldurmekFilter === "ay"}
              onClick={() => setOldurmekFilter("ay")}
            />
            <FilterButton
              label="Tum"
              active={oldurmekFilter === "tum"}
              onClick={() => setOldurmekFilter("tum")}
            />
          </div>
        </div>
      </div>

      {/* Right - Leaderboard Table */}
      <div className="game-panel p-4 w-[480px]">
        {/* Table Header */}
        <div className="grid grid-cols-4 gap-2 mb-2 px-2">
          <div className="text-[#20b2aa] font-bold text-sm bg-[#20b2aa]/20 rounded px-2 py-1">
            Rut...
          </div>
          <div className="text-[#20b2aa] font-bold text-sm bg-[#20b2aa]/20 rounded px-2 py-1">
            Rozet
          </div>
          <div className="text-[#20b2aa] font-bold text-sm bg-[#20b2aa]/20 rounded px-2 py-1">
            isim
          </div>
          <div className="text-[#20b2aa] font-bold text-sm bg-[#20b2aa]/20 rounded px-2 py-1">
            Gol
          </div>
        </div>

        {/* Table Rows */}
        <div className="flex flex-col gap-1 max-h-64 overflow-y-auto">
          {leaderboardData.map((player) => (
            <div
              key={player.rank}
              className="leaderboard-row grid grid-cols-4 gap-2 items-center px-2 py-2"
            >
              <div className="text-white font-bold">#{player.rank}</div>
              <div className="flex justify-center">
                <BadgeIcon type={player.badge} />
              </div>
              <div className="text-white text-sm truncate">{player.name}</div>
              <div className="text-white text-sm font-semibold">{player.score}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface FilterButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

function FilterButton({ label, active, onClick }: FilterButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`game-btn px-4 py-2 text-sm ${
        active
          ? "bg-[#20b2aa] hover:bg-[#1a9994]"
          : "bg-[#4a5568] hover:bg-[#5a6578]"
      } text-white`}
    >
      {label}
    </button>
  );
}

function WreathLeftIcon() {
  return (
    <svg viewBox="0 0 30 40" className="w-8 h-10">
      <path
        d="M25 5 Q15 15 20 25 Q10 20 15 35"
        fill="none"
        stroke="#d4a017"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M22 8 Q12 12 17 20"
        fill="none"
        stroke="#d4a017"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <ellipse cx="25" cy="6" rx="4" ry="3" fill="#d4a017" />
      <ellipse cx="20" cy="12" rx="3" ry="2" fill="#d4a017" />
      <ellipse cx="18" cy="20" rx="3" ry="2" fill="#d4a017" />
      <ellipse cx="15" cy="28" rx="3" ry="2" fill="#d4a017" />
    </svg>
  );
}

function WreathRightIcon() {
  return (
    <svg viewBox="0 0 30 40" className="w-8 h-10 -scale-x-100">
      <path
        d="M25 5 Q15 15 20 25 Q10 20 15 35"
        fill="none"
        stroke="#d4a017"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M22 8 Q12 12 17 20"
        fill="none"
        stroke="#d4a017"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <ellipse cx="25" cy="6" rx="4" ry="3" fill="#d4a017" />
      <ellipse cx="20" cy="12" rx="3" ry="2" fill="#d4a017" />
      <ellipse cx="18" cy="20" rx="3" ry="2" fill="#d4a017" />
      <ellipse cx="15" cy="28" rx="3" ry="2" fill="#d4a017" />
    </svg>
  );
}

function BadgeIcon({ type }: { type: string }) {
  if (type === "diamond") {
    return (
      <svg viewBox="0 0 32 32" className="w-8 h-8">
        {/* Diamond shape */}
        <path
          d="M16 4 L28 14 L16 28 L4 14 Z"
          fill="#87ceeb"
          stroke="#5a9fc9"
          strokeWidth="1"
        />
        <path
          d="M16 4 L20 14 L16 28 L12 14 Z"
          fill="#b0e0e6"
          stroke="#5a9fc9"
          strokeWidth="0.5"
        />
        {/* Flame effect */}
        <path
          d="M12 12 Q14 8 16 12 Q18 8 20 12 Q18 14 16 11 Q14 14 12 12"
          fill="#60a5fa"
        />
        <path
          d="M14 14 Q15 12 16 14 Q17 12 18 14 Q17 15 16 13 Q15 15 14 14"
          fill="#93c5fd"
        />
      </svg>
    );
  }
  
  if (type === "gold") {
    return (
      <svg viewBox="0 0 32 32" className="w-8 h-8">
        <circle cx="16" cy="16" r="12" fill="#ffd93d" stroke="#b8860b" strokeWidth="2" />
        <circle cx="16" cy="16" r="8" fill="#f0c419" />
        <path d="M16 8 L18 14 L24 14 L19 18 L21 24 L16 20 L11 24 L13 18 L8 14 L14 14 Z" fill="#b8860b" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 32 32" className="w-8 h-8">
      <circle cx="16" cy="16" r="12" fill="#9ca3af" stroke="#6b7280" strokeWidth="2" />
    </svg>
  );
}
