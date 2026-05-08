"use client";

import { useState } from "react";

export function LeftSidebar() {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <aside className="w-28 flex flex-col items-center py-4 gap-4">
      {/* Settings Button */}
      <button
        onClick={() => setShowSettings(!showSettings)}
        className="w-12 h-12 bg-[#d4a017] hover:bg-[#b8960d] rounded-full flex items-center justify-center border-3 border-[#8b7355] transition-colors"
      >
        <SettingsIcon />
      </button>

      {/* Berry Bushes */}
      <div className="flex flex-col gap-2">
        <BerryBush />
        <BerryBush />
        <BerryBush />
      </div>

      {/* New Badge and Help Section */}
      <div className="relative mt-4">
        {/* New badge */}
        <div className="absolute -top-2 -left-2 bg-[#4ade80] text-[#1a1a2e] text-xs font-bold px-2 py-0.5 rounded transform -rotate-12">
          YENi
        </div>
        
        {/* Changelog icon */}
        <button className="w-10 h-10 bg-[#ffd93d] hover:bg-[#e8c736] rounded-lg flex items-center justify-center border-2 border-[#b8860b] transition-colors">
          <ChangelogIcon />
        </button>
      </div>

      {/* Help button */}
      <div className="relative">
        <span className="absolute -top-1 -right-6 text-[#4ade80] text-xs font-bold italic">
          Yardim?
        </span>
        <button className="w-8 h-8 bg-[#2d3436] hover:bg-[#3d4852] rounded-full flex items-center justify-center border-2 border-[#1a1a2e] transition-colors">
          <HelpIcon />
        </button>
      </div>

      {/* Eye/Visibility Button */}
      <button className="w-10 h-10 bg-[#2d3436]/80 hover:bg-[#3d4852]/80 rounded-full flex items-center justify-center border-2 border-[#1a1a2e] mt-auto transition-colors">
        <EyeIcon />
      </button>
    </aside>
  );
}

function SettingsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 text-white">
      <path
        fill="currentColor"
        d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1c0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z"
      />
    </svg>
  );
}

function BerryBush() {
  return (
    <svg viewBox="0 0 40 40" className="w-10 h-10">
      {/* Bush base */}
      <ellipse cx="20" cy="28" rx="16" ry="10" fill="#2d5016" />
      <ellipse cx="20" cy="24" rx="14" ry="8" fill="#3d6b1f" />
      {/* Berries */}
      <circle cx="12" cy="20" r="4" fill="#dc2626" stroke="#991b1b" strokeWidth="1" />
      <circle cx="20" cy="18" r="4" fill="#dc2626" stroke="#991b1b" strokeWidth="1" />
      <circle cx="28" cy="20" r="4" fill="#dc2626" stroke="#991b1b" strokeWidth="1" />
      <circle cx="16" cy="26" r="3" fill="#dc2626" stroke="#991b1b" strokeWidth="1" />
      <circle cx="24" cy="26" r="3" fill="#dc2626" stroke="#991b1b" strokeWidth="1" />
    </svg>
  );
}

function ChangelogIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#1a1a2e]">
      <path
        fill="currentColor"
        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 2l5 5h-5V4zM6 20V4h6v6h6v10H6z"
      />
      <path fill="currentColor" d="M8 12h8v2H8zm0 4h8v2H8z" />
    </svg>
  );
}

function HelpIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#ffd93d]">
      <path
        fill="currentColor"
        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5c0-2.21-1.79-4-4-4z"
      />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-white/60">
      <path
        fill="currentColor"
        d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3z"
      />
    </svg>
  );
}
