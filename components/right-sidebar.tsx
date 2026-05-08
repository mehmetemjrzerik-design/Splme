"use client";

export function RightSidebar() {
  return (
    <aside className="w-32 flex flex-col items-center py-4 gap-3">
      {/* Game Ad - Shoot Up */}
      <div className="w-24 h-28 rounded-lg overflow-hidden border-3 border-[#1a1a2e] shadow-lg cursor-pointer hover:scale-105 transition-transform">
        <div className="w-full h-full bg-gradient-to-br from-[#4a90a4] to-[#2d5a6b] flex flex-col items-center justify-center p-2">
          <div className="text-[#ff6b35] font-bold text-xs mb-1" style={{ fontFamily: "'Lilita One', sans-serif" }}>
            SHOOT
          </div>
          <div className="text-[#ffd93d] font-bold text-lg" style={{ fontFamily: "'Lilita One', sans-serif" }}>
            UP
          </div>
          <div className="flex gap-1 mt-1">
            <CharacterMini color="#4ade80" />
            <CharacterMini color="#60a5fa" />
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex flex-col gap-2 mt-2">
        {/* Heart Icon */}
        <button className="w-8 h-8 bg-[#e74c3c] hover:bg-[#c0392b] rounded-lg flex items-center justify-center transition-colors">
          <HeartIcon />
        </button>

        {/* Pin/Bookmark Icon */}
        <button className="w-8 h-8 bg-[#e74c3c] hover:bg-[#c0392b] rounded-lg flex items-center justify-center transition-colors">
          <PinIcon />
        </button>

        {/* Card Icon */}
        <button className="w-8 h-8 bg-white hover:bg-gray-100 rounded-lg flex items-center justify-center transition-colors">
          <CardIcon />
        </button>
      </div>

      {/* Small mascot */}
      <div className="mt-2">
        <SmallMascot />
      </div>

      {/* Fullscreen buttons */}
      <div className="flex flex-col gap-2 mt-auto">
        <button className="w-8 h-8 bg-[#2d3436]/80 hover:bg-[#3d4852]/80 rounded-lg flex items-center justify-center border border-[#1a1a2e] transition-colors">
          <FullscreenIcon />
        </button>
        <button className="w-8 h-8 bg-[#2d3436]/80 hover:bg-[#3d4852]/80 rounded-lg flex items-center justify-center border border-[#1a1a2e] transition-colors">
          <WindowIcon />
        </button>
      </div>

      {/* Discord Icon */}
      <button className="w-10 h-10 bg-[#5865f2] hover:bg-[#4752c4] rounded-lg flex items-center justify-center transition-colors mt-2">
        <DiscordIcon />
      </button>
    </aside>
  );
}

function CharacterMini({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 20 24" className="w-4 h-5">
      <ellipse cx="10" cy="14" rx="8" ry="9" fill={color} />
      <ellipse cx="10" cy="10" rx="6" ry="5" fill="#e8d4b8" />
      <circle cx="8" cy="9" r="1.5" fill="#1a1a2e" />
      <circle cx="12" cy="9" r="1.5" fill="#1a1a2e" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-white">
      <path
        fill="currentColor"
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-white">
      <path
        fill="currentColor"
        d="M16 12V4h1V2H7v2h1v8l-2 2v2h5.2v6h1.6v-6H18v-2l-2-2z"
      />
    </svg>
  );
}

function CardIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#1a1a2e]">
      <rect x="3" y="4" width="18" height="16" rx="2" fill="currentColor" />
      <circle cx="8" cy="9" r="2" fill="white" />
      <circle cx="16" cy="15" r="2" fill="white" />
    </svg>
  );
}

function SmallMascot() {
  return (
    <svg viewBox="0 0 30 36" className="w-8 h-10">
      <ellipse cx="15" cy="26" rx="10" ry="8" fill="#e8d4b8" stroke="#8b7355" strokeWidth="1" />
      <ellipse cx="15" cy="18" rx="12" ry="10" fill="#e8d4b8" stroke="#8b7355" strokeWidth="1" />
      <ellipse cx="11" cy="16" rx="2" ry="3" fill="white" />
      <ellipse cx="19" cy="16" rx="2" ry="3" fill="white" />
      <circle cx="11" cy="17" r="1" fill="#1a1a2e" />
      <circle cx="19" cy="17" r="1" fill="#1a1a2e" />
      <ellipse cx="15" cy="20" rx="1.5" ry="1" fill="#ffb6c1" />
    </svg>
  );
}

function FullscreenIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-white/60">
      <path
        fill="currentColor"
        d="M5 5h5V3H3v7h2V5zm9-2v2h5v5h2V3h-7zm7 14h-2v5h-5v2h7v-7zM5 19v-5H3v7h7v-2H5z"
      />
    </svg>
  );
}

function WindowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-white/60">
      <path
        fill="currentColor"
        d="M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 14H5V8h14v10z"
      />
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-white">
      <path
        fill="currentColor"
        d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"
      />
    </svg>
  );
}
