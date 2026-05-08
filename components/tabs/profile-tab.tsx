"use client";

import type { UserData } from "@/app/page";
import { useState } from "react";

interface ProfileTabProps {
  userData: UserData;
  onLogin: () => void;
  onLogout: () => void;
}

export function ProfileTab({ userData, onLogin, onLogout }: ProfileTabProps) {
  const [activeSubTab, setActiveSubTab] = useState<"rutbe" | "eniyi">("rutbe");

  if (!userData.isLoggedIn) {
    return (
      <div className="flex gap-6 items-start justify-center">
        {/* Login prompt */}
        <div className="game-panel p-8 text-center">
          <h2 className="text-white text-2xl font-bold mb-4" style={{ fontFamily: "'Lilita One', sans-serif" }}>
            Profilinizi goruntulemek icin giris yapin
          </h2>
          <div className="flex gap-4 justify-center">
            <button
              onClick={onLogin}
              className="game-btn bg-[#ff6b35] hover:bg-[#e55a2b] text-white px-6 py-3"
            >
              GiRiS YAP
            </button>
            <button
              onClick={onLogin}
              className="game-btn bg-[#20b2aa] hover:bg-[#1a9994] text-white px-6 py-3"
            >
              UYE OL
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-6 items-start justify-center">
      {/* Left - User Stats Panel */}
      <div className="game-panel p-4 w-96">
        {/* User Header */}
        <div className="flex items-center gap-3 mb-4">
          {/* Logout Button */}
          <button
            onClick={onLogout}
            className="game-btn bg-[#20b2aa] hover:bg-[#1a9994] text-white text-xs px-3 py-2"
          >
            Cikis yap
          </button>
          
          {/* Avatar and Name */}
          <div className="flex items-center gap-2">
            <div className="w-14 h-14 rounded-lg overflow-hidden">
              <FireBadgeLarge />
            </div>
            <div className="bg-[#1a1a2e] px-4 py-2 rounded-lg">
              <span className="text-white font-bold">{userData.rank}</span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <StatCard
            label="Toplam Puanlar"
            value={userData.totalPoints.toLocaleString("tr-TR")}
            color="#4ade80"
          />
          <StatCard
            label="Toplam Olumler"
            value={userData.totalDeaths.toLocaleString("tr-TR")}
            color="#4ade80"
          />
          <StatCard
            label="Toplam Oldurmeler"
            value={userData.totalKills.toLocaleString("tr-TR")}
            color="#4ade80"
          />
        </div>

        {/* Best Kill Section */}
        <div className="bg-[#1a1a2e]/50 rounded-lg p-3 mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-white/80 text-sm font-semibold">En iyi Oldurme</span>
            <span className="text-white/60 text-xs">Oldurme/Olum</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div className="w-8 h-8"><FireBadgeSmall /></div>
              <ArrowIcon />
              <div className="w-8 h-8"><WhiteBadgeSmall /></div>
            </div>
            <div className="text-[#4ade80] font-bold">6.898.620</div>
          </div>
          <p className="text-white/60 text-xs mt-1">bir sonraki siraya gecmek icin puan</p>
        </div>

        {/* Warning Text */}
        <p className="text-[#e74c3c] text-xs text-center uppercase font-bold">
          SKORUNUZ KUMSAL MODUNDA
          <br />
          KAYDEDiLMEMEKTEDiR
        </p>
      </div>

      {/* Right - Ranking Panel */}
      <div className="game-panel p-4 w-72">
        {/* Sub Tabs */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setActiveSubTab("rutbe")}
            className={`flex-1 game-btn py-2 text-sm ${
              activeSubTab === "rutbe"
                ? "bg-[#20b2aa] hover:bg-[#1a9994]"
                : "bg-[#4a5568] hover:bg-[#5a6578]"
            } text-white`}
          >
            Rutbe
          </button>
          <button
            onClick={() => setActiveSubTab("eniyi")}
            className={`flex-1 game-btn py-2 text-sm ${
              activeSubTab === "eniyi"
                ? "bg-[#20b2aa] hover:bg-[#1a9994]"
                : "bg-[#4a5568] hover:bg-[#5a6578]"
            } text-white`}
          >
            En iyi puanlar
          </button>
        </div>

        {/* Ranking Content */}
        <div className="h-48 flex items-center justify-center">
          <p className="text-white/40 text-sm">Siralamalar yukleniyor...</p>
        </div>
      </div>
    </div>
  );
}

interface StatCardProps {
  label: string;
  value: string;
  color: string;
}

function StatCard({ label, value, color }: StatCardProps) {
  return (
    <div className="bg-[#1a1a2e]/50 rounded-lg p-2 text-center">
      <p className="text-white/80 text-xs font-semibold mb-1">{label}</p>
      <p className="font-bold" style={{ color }}>{value}</p>
    </div>
  );
}

function FireBadgeLarge() {
  return (
    <svg viewBox="0 0 56 56" className="w-full h-full">
      <rect width="56" height="56" rx="8" fill="#2d3436" />
      <path
        d="M28 8C28 8 20 16 20 24C20 28 22 32 24 34C22 32 20 28 20 24C20 20 24 16 28 12C32 16 36 20 36 24C36 28 34 32 32 34C34 32 36 28 36 24C36 16 28 8 28 8Z"
        fill="#e74c3c"
      />
      <path
        d="M28 16C28 16 24 20 24 24C24 26 25 28 26 29C25 28 24 26 24 24C24 22 26 20 28 18C30 20 32 22 32 24C32 26 31 28 30 29C31 28 32 26 32 24C32 20 28 16 28 16Z"
        fill="#f39c12"
      />
      <ellipse cx="28" cy="36" rx="10" ry="8" fill="#e74c3c" />
    </svg>
  );
}

function FireBadgeSmall() {
  return (
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <circle cx="16" cy="16" r="14" fill="#e74c3c" />
      <path
        d="M16 6C16 6 12 10 12 14C12 16 13 18 14 19C13 18 12 16 12 14C12 12 14 10 16 8C18 10 20 12 20 14C20 16 19 18 18 19C19 18 20 16 20 14C20 10 16 6 16 6Z"
        fill="#f39c12"
      />
    </svg>
  );
}

function WhiteBadgeSmall() {
  return (
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <circle cx="16" cy="16" r="14" fill="#e8d4b8" stroke="#8b7355" strokeWidth="2" />
      <ellipse cx="16" cy="14" rx="6" ry="8" fill="#d4c4a8" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-white/60">
      <path fill="currentColor" d="M8 5v14l11-7z" />
    </svg>
  );
}
