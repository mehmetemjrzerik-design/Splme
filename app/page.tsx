"use client"

import { useState } from "react"
import { GameLogo } from "@/components/game/game-logo"
import { LoginPanel } from "@/components/game/login-panel"
import { ServerSelector } from "@/components/game/server-selector"
import { SocialLinks } from "@/components/game/social-links"
import { SettingsModal } from "@/components/game/settings-modal"
import { FloatingParticles } from "@/components/game/floating-particles"
import { GameStats } from "@/components/game/game-stats"
import { NewsPanel } from "@/components/game/news-panel"

export default function GameEntryPage() {
  const [showSettings, setShowSettings] = useState(false)

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0e1a]">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.15)_0%,_transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(16,185,129,0.1)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
      </div>

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-8">
        {/* Settings Button */}
        <button
          onClick={() => setShowSettings(true)}
          className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 backdrop-blur-sm transition-all hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-400"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>

        {/* Game Stats - Top Left */}
        <GameStats />

        {/* Logo */}
        <GameLogo />

        {/* Main Panel */}
        <div className="mt-8 flex w-full max-w-4xl flex-col items-center gap-6 lg:flex-row lg:items-start lg:justify-center">
          {/* Login Panel */}
          <LoginPanel />

          {/* Right Side - Server & News */}
          <div className="flex w-full max-w-sm flex-col gap-4">
            <ServerSelector />
            <NewsPanel />
          </div>
        </div>

        {/* Social Links */}
        <SocialLinks />

        {/* Footer */}
        <footer className="absolute bottom-4 left-0 right-0 text-center">
          <p className="text-xs text-white/30">
            BATTLEVERSE.io - Build. Fight. Survive. v0.9.2
          </p>
        </footer>
      </div>

      {/* Settings Modal */}
      {showSettings && <SettingsModal onClose={() => setShowSettings(false)} />}
    </main>
  )
}
