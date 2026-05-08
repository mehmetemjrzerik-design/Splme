"use client";

import { useState } from "react";

const skinColors = [
  { id: 1, color: "#ff8c42", name: "Turuncu" },
  { id: 2, color: "#d4c4a8", name: "Bej" },
  { id: 3, color: "#e8c872", name: "Sari" },
  { id: 4, color: "#8b6914", name: "Kahverengi" },
  { id: 5, color: "#ffb6c1", name: "Pembe" },
  { id: 6, color: "#87ceeb", name: "Mavi" },
];

const accessories = [
  { id: 1, type: "mustache1", icon: "mustache" },
  { id: 2, type: "mustache2", icon: "mustache2" },
  { id: 3, type: "mustache3", icon: "mustache3" },
  { id: 4, type: "hair", icon: "hair" },
];

export function SkinsTab() {
  const [selectedSkin, setSelectedSkin] = useState<number>(1);
  const [selectedAccessory, setSelectedAccessory] = useState<number | null>(null);

  return (
    <div className="flex gap-6 items-start justify-center">
      {/* Left - Character Preview */}
      <div className="character-preview w-44 h-56 flex flex-col items-center justify-center relative">
        <span className="absolute top-3 left-3 text-[#1a1a2e] font-bold text-sm">Hicbiri</span>
        <CharacterPreviewWithSkin
          skinColor={skinColors.find((s) => s.id === selectedSkin)?.color || "#e8d4b8"}
          accessory={selectedAccessory}
        />
        <div className="absolute bottom-3 left-3">
          <button className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center">
            <EyeIcon />
          </button>
        </div>
        <button className="absolute bottom-3 left-1/2 -translate-x-1/2 game-btn bg-[#20b2aa] hover:bg-[#1a9994] text-white text-xs px-4 py-2">
          KiLiDi ACILDI
        </button>
      </div>

      {/* Center - Accessory Selection */}
      <div className="flex flex-col gap-2">
        {accessories.map((acc) => (
          <button
            key={acc.id}
            onClick={() =>
              setSelectedAccessory(selectedAccessory === acc.id ? null : acc.id)
            }
            className={`accessory-btn w-14 h-14 flex items-center justify-center ${
              selectedAccessory === acc.id ? "selected" : ""
            }`}
          >
            <AccessoryIcon type={acc.type} />
          </button>
        ))}
      </div>

      {/* Skin Color Selection */}
      <div className="flex flex-col gap-2">
        {skinColors.map((skin) => (
          <button
            key={skin.id}
            onClick={() => setSelectedSkin(skin.id)}
            className={`skin-btn ${selectedSkin === skin.id ? "selected" : ""}`}
            style={{ backgroundColor: skin.color }}
          >
            <SkinPreviewMini color={skin.color} />
          </button>
        ))}
      </div>

      {/* Right - Discord Promo */}
      <div className="discord-card w-56 h-56 p-4 flex flex-col items-center justify-center text-center relative z-10">
        <p className="text-white font-bold text-lg mb-3" style={{ fontFamily: "'Lilita One', sans-serif" }}>
          Discord topluluguna
          <br />
          katilin ve
          <br />
          gorunumlerinizi
          <br />
          paylasin!
        </p>
        <button className="game-btn bg-white hover:bg-gray-100 text-[#5865f2] text-sm px-6 py-2 mt-2 flex items-center gap-2">
          <DiscordIcon />
          DiSCORD
        </button>
      </div>
    </div>
  );
}

interface CharacterPreviewWithSkinProps {
  skinColor: string;
  accessory: number | null;
}

function CharacterPreviewWithSkin({ skinColor, accessory }: CharacterPreviewWithSkinProps) {
  return (
    <svg viewBox="0 0 80 100" className="w-24 h-32">
      {/* Body */}
      <ellipse cx="40" cy="75" rx="25" ry="20" fill={skinColor} stroke="#8b7355" strokeWidth="3" />
      {/* Head */}
      <ellipse cx="40" cy="40" rx="30" ry="28" fill={skinColor} stroke="#8b7355" strokeWidth="3" />
      {/* Eyes */}
      <ellipse cx="30" cy="38" rx="6" ry="8" fill="white" />
      <ellipse cx="50" cy="38" rx="6" ry="8" fill="white" />
      <circle cx="32" cy="40" r="3" fill="#1a1a2e" />
      <circle cx="52" cy="40" r="3" fill="#1a1a2e" />
      
      {/* Accessory - Mustache */}
      {accessory === 1 && (
        <path d="M30 52 Q35 48 40 52 Q45 48 50 52" fill="#4a3728" stroke="#2d1f14" strokeWidth="1" />
      )}
      {accessory === 2 && (
        <>
          <path d="M25 50 Q30 46 35 50" fill="#4a3728" stroke="#2d1f14" strokeWidth="1" />
          <path d="M45 50 Q50 46 55 50" fill="#4a3728" stroke="#2d1f14" strokeWidth="1" />
        </>
      )}
      {accessory === 3 && (
        <ellipse cx="40" cy="52" rx="12" ry="5" fill="#4a3728" stroke="#2d1f14" strokeWidth="1" />
      )}
      {accessory === 4 && (
        <path d="M15 25 Q25 5 40 15 Q55 5 65 25 L60 30 Q50 20 40 25 Q30 20 20 30 Z" fill="#4a3728" stroke="#2d1f14" strokeWidth="1" />
      )}
    </svg>
  );
}

function SkinPreviewMini({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 40 40" className="w-full h-full">
      <ellipse cx="20" cy="24" rx="14" ry="12" fill={color} stroke="#8b7355" strokeWidth="1" />
      <ellipse cx="16" cy="22" rx="3" ry="4" fill="white" />
      <ellipse cx="24" cy="22" rx="3" ry="4" fill="white" />
      <circle cx="17" cy="23" r="1.5" fill="#1a1a2e" />
      <circle cx="25" cy="23" r="1.5" fill="#1a1a2e" />
    </svg>
  );
}

function AccessoryIcon({ type }: { type: string }) {
  switch (type) {
    case "mustache":
      return (
        <svg viewBox="0 0 32 32" className="w-8 h-8">
          <path d="M8 18 Q14 12 16 18 Q18 12 24 18" fill="#4a3728" stroke="#2d1f14" strokeWidth="1" />
        </svg>
      );
    case "mustache2":
      return (
        <svg viewBox="0 0 32 32" className="w-8 h-8">
          <path d="M6 16 Q10 12 14 16" fill="#4a3728" stroke="#2d1f14" strokeWidth="1" />
          <path d="M18 16 Q22 12 26 16" fill="#4a3728" stroke="#2d1f14" strokeWidth="1" />
        </svg>
      );
    case "mustache3":
      return (
        <svg viewBox="0 0 32 32" className="w-8 h-8">
          <ellipse cx="16" cy="18" rx="10" ry="4" fill="#4a3728" stroke="#2d1f14" strokeWidth="1" />
        </svg>
      );
    case "hair":
      return (
        <svg viewBox="0 0 32 32" className="w-8 h-8">
          <path d="M6 20 Q10 6 16 12 Q22 6 26 20 L24 22 Q20 14 16 18 Q12 14 8 22 Z" fill="#4ade80" stroke="#22c55e" strokeWidth="1" />
        </svg>
      );
    default:
      return null;
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

function DiscordIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5">
      <path
        fill="currentColor"
        d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"
      />
    </svg>
  );
}
