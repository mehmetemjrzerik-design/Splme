"use client"

import { useEffect, useState } from "react"

export function GameLogo() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className={`relative transition-all duration-1000 ${mounted ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"}`}>
      {/* Glow Effect */}
      <div className="absolute -inset-8 animate-pulse rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-emerald-500/20 blur-3xl" />
      
      {/* Logo Container */}
      <div className="relative">
        {/* Main Title */}
        <h1 className="relative text-center">
          <span className="block text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/60 drop-shadow-2xl sm:text-7xl lg:text-8xl">
            BATTLE
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400">
              VERSE
            </span>
          </span>
          <span className="absolute -right-2 top-0 text-4xl font-bold text-cyan-400 sm:-right-4 sm:text-5xl lg:text-6xl">.io</span>
        </h1>

        {/* Subtitle */}
        <div className="mt-4 flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500/50" />
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-white/50">
            Build. Fight. Survive.
          </p>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500/50" />
        </div>

        {/* Animated underline */}
        <div className="mx-auto mt-4 h-1 w-48 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/2 animate-[shimmer_2s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-500" />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -left-16 top-1/2 hidden h-24 w-24 -translate-y-1/2 lg:block">
        <div className="absolute inset-0 animate-spin-slow rounded-lg border border-cyan-500/20" style={{ animationDuration: "20s" }} />
        <div className="absolute inset-2 animate-spin-slow rounded-lg border border-blue-500/20" style={{ animationDuration: "15s", animationDirection: "reverse" }} />
        <div className="absolute inset-4 animate-spin-slow rounded-lg border border-emerald-500/20" style={{ animationDuration: "10s" }} />
      </div>
      <div className="absolute -right-16 top-1/2 hidden h-24 w-24 -translate-y-1/2 lg:block">
        <div className="absolute inset-0 animate-spin-slow rounded-lg border border-emerald-500/20" style={{ animationDuration: "20s" }} />
        <div className="absolute inset-2 animate-spin-slow rounded-lg border border-blue-500/20" style={{ animationDuration: "15s", animationDirection: "reverse" }} />
        <div className="absolute inset-4 animate-spin-slow rounded-lg border border-cyan-500/20" style={{ animationDuration: "10s" }} />
      </div>
    </div>
  )
}
