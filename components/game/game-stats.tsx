"use client"

import { useEffect, useState } from "react"

export function GameStats() {
  const [stats, setStats] = useState({
    playersOnline: 12847,
    gamesPlayed: 89234,
    serversOnline: 24,
  })

  // Simulate live player count updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        ...prev,
        playersOnline: prev.playersOnline + Math.floor(Math.random() * 21) - 10,
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute left-4 top-4 hidden lg:block">
      <div className="overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl">
        {/* Live Indicator */}
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2">
          <div className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </div>
          <span className="text-xs font-medium uppercase tracking-wider text-emerald-400">Live Stats</span>
        </div>

        {/* Stats */}
        <div className="grid gap-3 p-4">
          <StatItem
            icon={<UsersIcon />}
            label="Players Online"
            value={stats.playersOnline.toLocaleString()}
            color="text-cyan-400"
          />
          <StatItem
            icon={<GamepadIcon />}
            label="Games Today"
            value={stats.gamesPlayed.toLocaleString()}
            color="text-blue-400"
          />
          <StatItem
            icon={<ServerIcon />}
            label="Servers Online"
            value={stats.serversOnline.toString()}
            color="text-emerald-400"
          />
        </div>
      </div>
    </div>
  )
}

function StatItem({
  icon,
  label,
  value,
  color,
}: {
  icon: React.ReactNode
  label: string
  value: string
  color: string
}) {
  return (
    <div className="flex items-center gap-3">
      <div className={`flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 ${color}`}>
        {icon}
      </div>
      <div>
        <p className="text-xs text-white/50">{label}</p>
        <p className={`font-bold ${color}`}>{value}</p>
      </div>
    </div>
  )
}

function UsersIcon() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  )
}

function GamepadIcon() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
    </svg>
  )
}

function ServerIcon() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    </svg>
  )
}
