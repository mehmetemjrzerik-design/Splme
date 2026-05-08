"use client";

import { useState } from "react";
import { GameHeader } from "@/components/game-header";
import { LeftSidebar } from "@/components/left-sidebar";
import { RightSidebar } from "@/components/right-sidebar";
import { MainContent } from "@/components/main-content";
import { BottomBanner } from "@/components/bottom-banner";

export type TabType = "profil" | "magaza" | "oyun" | "deriler" | "siralama";

export interface UserData {
  isLoggedIn: boolean;
  username: string;
  id: string;
  coins: number;
  totalPoints: number;
  totalDeaths: number;
  totalKills: number;
  rank: string;
  badge: string;
}

export default function GameLandingPage() {
  const [activeTab, setActiveTab] = useState<TabType>("oyun");
  const [userData, setUserData] = useState<UserData>({
    isLoggedIn: false,
    username: "",
    id: "",
    coins: 0,
    totalPoints: 0,
    totalDeaths: 0,
    totalKills: 0,
    rank: "Nolife",
    badge: "fire",
  });

  const handleLogin = () => {
    setUserData({
      isLoggedIn: true,
      username: "Hayat Yok",
      id: "#13991",
      coins: 1590,
      totalPoints: 109201380,
      totalDeaths: 3346,
      totalKills: 13641,
      rank: "Nolife",
      badge: "fire",
    });
  };

  const handleLogout = () => {
    setUserData({
      isLoggedIn: false,
      username: "",
      id: "",
      coins: 0,
      totalPoints: 0,
      totalDeaths: 0,
      totalKills: 0,
      rank: "Nolife",
      badge: "fire",
    });
  };

  return (
    <div className="game-background min-h-screen relative">
      {/* Header */}
      <GameHeader
        userData={userData}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />

      {/* Main Layout */}
      <div className="flex">
        {/* Left Sidebar */}
        <LeftSidebar />

        {/* Center Content */}
        <div className="flex-1 flex flex-col items-center px-4 pt-4">
          {/* Navigation Tabs */}
          <nav className="flex items-end gap-6 mb-6">
            <TabItem
              icon="profile"
              label="PROFiL"
              active={activeTab === "profil"}
              onClick={() => setActiveTab("profil")}
            />
            <TabItem
              icon="shop"
              label="MAGAZA"
              active={activeTab === "magaza"}
              onClick={() => setActiveTab("magaza")}
            />
            <TabItem
              icon="play"
              label="OYUN"
              active={activeTab === "oyun"}
              onClick={() => setActiveTab("oyun")}
            />
            <TabItem
              icon="skins"
              label="DERiLER"
              active={activeTab === "deriler"}
              onClick={() => setActiveTab("deriler")}
            />
            <TabItem
              icon="leaderboard"
              label="SIRALAMA"
              active={activeTab === "siralama"}
              onClick={() => setActiveTab("siralama")}
            />
          </nav>

          {/* Main Content Area */}
          <MainContent
            activeTab={activeTab}
            userData={userData}
            onLogin={handleLogin}
            onLogout={handleLogout}
          />

          {/* Bottom Banner */}
          <BottomBanner />
        </div>

        {/* Right Sidebar */}
        <RightSidebar />
      </div>

      {/* Policy Link */}
      <button className="fixed bottom-4 right-4 bg-[#2d3436] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#3d4852] transition-colors">
        Politika
      </button>
    </div>
  );
}

interface TabItemProps {
  icon: string;
  label: string;
  active: boolean;
  onClick: () => void;
}

function TabItem({ icon, label, active, onClick }: TabItemProps) {
  return (
    <button
      onClick={onClick}
      className={`tab-item flex flex-col items-center gap-1 ${
        active ? "active" : "text-white"
      }`}
    >
      <div className="w-12 h-12 flex items-center justify-center">
        <TabIcon icon={icon} />
      </div>
      <span
        className="text-lg font-bold tracking-wide"
        style={{ fontFamily: "'Lilita One', sans-serif" }}
      >
        {label}
      </span>
    </button>
  );
}

function TabIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "profile":
      return (
        <svg viewBox="0 0 40 50" className="w-10 h-12">
          <ellipse cx="20" cy="15" rx="12" ry="14" fill="#e8d4b8" stroke="#8b7355" strokeWidth="2" />
          <ellipse cx="20" cy="10" rx="8" ry="6" fill="#a0522d" />
          <path d="M10 45 Q20 35 30 45" fill="#2d3436" stroke="#1a1a2e" strokeWidth="2" />
        </svg>
      );
    case "shop":
      return (
        <svg viewBox="0 0 40 40" className="w-10 h-10">
          <rect x="5" y="20" width="30" height="18" rx="2" fill="#d4a017" stroke="#8b7355" strokeWidth="2" />
          <path d="M5 20 L10 8 H30 L35 20" fill="#ffd93d" stroke="#8b7355" strokeWidth="2" />
          <rect x="16" y="24" width="8" height="10" fill="#8b7355" />
        </svg>
      );
    case "play":
      return (
        <svg viewBox="0 0 50 40" className="w-12 h-10">
          <ellipse cx="25" cy="28" rx="18" ry="10" fill="#4a5568" />
          <circle cx="18" cy="22" r="8" fill="#2d3436" stroke="#1a1a2e" strokeWidth="2" />
          <circle cx="32" cy="22" r="8" fill="#2d3436" stroke="#1a1a2e" strokeWidth="2" />
          <ellipse cx="18" cy="22" rx="3" ry="4" fill="#e8d4b8" />
          <ellipse cx="32" cy="22" rx="3" ry="4" fill="#e8d4b8" />
        </svg>
      );
    case "skins":
      return (
        <svg viewBox="0 0 50 40" className="w-12 h-10">
          <ellipse cx="15" cy="25" rx="10" ry="12" fill="#8b4513" />
          <ellipse cx="35" cy="25" rx="10" ry="12" fill="#daa520" />
          <circle cx="15" cy="20" r="4" fill="#654321" />
          <circle cx="35" cy="20" r="4" fill="#b8860b" />
        </svg>
      );
    case "leaderboard":
      return (
        <svg viewBox="0 0 50 40" className="w-12 h-10">
          <path d="M10 35 L25 5 L40 35 Z" fill="#ffd93d" stroke="#b8860b" strokeWidth="2" />
          <circle cx="25" cy="20" r="6" fill="#ff6b35" stroke="#cc5500" strokeWidth="2" />
          <path d="M5 38 Q25 32 45 38" fill="#20b2aa" />
        </svg>
      );
    default:
      return null;
  }
}
