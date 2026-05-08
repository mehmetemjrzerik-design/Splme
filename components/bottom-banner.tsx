"use client";

export function BottomBanner() {
  return (
    <div className="w-full max-w-3xl mt-6 mb-4">
      <div className="relative rounded-xl overflow-hidden border-4 border-[#1a1a2e] shadow-xl cursor-pointer hover:scale-[1.01] transition-transform">
        {/* Background gradient */}
        <div className="bg-gradient-to-r from-[#ffecd2] via-[#fcb69f] to-[#ff8c69] p-4">
          <div className="flex items-center justify-between">
            {/* Left - Dragon Character */}
            <div className="flex-shrink-0">
              <DragonCharacter />
            </div>

            {/* Right - Text Content */}
            <div className="text-right pr-4">
              <h2 
                className="text-[#8b4513] text-3xl md:text-4xl font-bold leading-tight"
                style={{ fontFamily: "'Lilita One', sans-serif", textShadow: "2px 2px 0 rgba(0,0,0,0.1)" }}
              >
                RIDE
                <br />
                LEGENDARY
                <br />
                ANIMALS
              </h2>
              <p className="text-[#1a1a2e] text-sm mt-1">ON</p>
              <h3 
                className="text-[#20b2aa] text-4xl md:text-5xl font-bold"
                style={{ fontFamily: "'Lilita One', sans-serif", textShadow: "3px 3px 0 #000" }}
              >
                TAMING.IO
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DragonCharacter() {
  return (
    <svg viewBox="0 0 200 180" className="w-48 md:w-56 h-auto">
      {/* Dragon Body */}
      <ellipse cx="100" cy="130" rx="70" ry="45" fill="#cc5500" stroke="#8b3a00" strokeWidth="3" />
      
      {/* Wings */}
      <path
        d="M40 100 Q20 60 60 40 L80 80 Q60 90 50 100 Z"
        fill="#e74c3c"
        stroke="#c0392b"
        strokeWidth="2"
      />
      <path
        d="M160 100 Q180 60 140 40 L120 80 Q140 90 150 100 Z"
        fill="#e74c3c"
        stroke="#c0392b"
        strokeWidth="2"
      />
      
      {/* Dragon Head */}
      <ellipse cx="100" cy="80" rx="50" ry="40" fill="#e65c00" stroke="#8b3a00" strokeWidth="3" />
      
      {/* Snout */}
      <ellipse cx="100" cy="100" rx="25" ry="15" fill="#cc5500" stroke="#8b3a00" strokeWidth="2" />
      
      {/* Eyes */}
      <ellipse cx="80" cy="70" rx="12" ry="15" fill="white" stroke="#8b3a00" strokeWidth="1" />
      <ellipse cx="120" cy="70" rx="12" ry="15" fill="white" stroke="#8b3a00" strokeWidth="1" />
      <ellipse cx="82" cy="72" rx="6" ry="8" fill="#1a1a2e" />
      <ellipse cx="122" cy="72" rx="6" ry="8" fill="#1a1a2e" />
      <circle cx="84" cy="68" r="2" fill="white" />
      <circle cx="124" cy="68" r="2" fill="white" />
      
      {/* Eyebrows */}
      <path d="M68 58 Q80 52 92 58" fill="none" stroke="#8b3a00" strokeWidth="3" strokeLinecap="round" />
      <path d="M108 58 Q120 52 132 58" fill="none" stroke="#8b3a00" strokeWidth="3" strokeLinecap="round" />
      
      {/* Nostrils */}
      <circle cx="90" cy="100" r="4" fill="#8b3a00" />
      <circle cx="110" cy="100" r="4" fill="#8b3a00" />
      
      {/* Horns */}
      <path d="M60 55 Q50 30 65 20 L70 45 Z" fill="#d4a017" stroke="#8b7355" strokeWidth="2" />
      <path d="M140 55 Q150 30 135 20 L130 45 Z" fill="#d4a017" stroke="#8b7355" strokeWidth="2" />
      
      {/* Cowboy Hat */}
      <ellipse cx="100" cy="45" rx="45" ry="12" fill="#8b4513" stroke="#5d2e0c" strokeWidth="2" />
      <path d="M65 45 Q70 10 100 5 Q130 10 135 45" fill="#a0522d" stroke="#5d2e0c" strokeWidth="2" />
      <rect x="85" y="30" width="30" height="8" rx="2" fill="#d4a017" />
      
      {/* Teeth */}
      <path d="M85 108 L88 115 L91 108" fill="white" stroke="#ddd" strokeWidth="0.5" />
      <path d="M109 108 L112 115 L115 108" fill="white" stroke="#ddd" strokeWidth="0.5" />
      
      {/* Legs */}
      <ellipse cx="60" cy="165" rx="15" ry="12" fill="#cc5500" stroke="#8b3a00" strokeWidth="2" />
      <ellipse cx="140" cy="165" rx="15" ry="12" fill="#cc5500" stroke="#8b3a00" strokeWidth="2" />
    </svg>
  );
}
