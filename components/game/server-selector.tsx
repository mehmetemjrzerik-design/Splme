"use client"

import { useState } from "react"

const servers = [
  { id: "eu1", name: "Europe #1", region: "Frankfurt", players: 89, maxPlayers: 100, ping: 24, status: "online" },
  { id: "eu2", name: "Europe #2", region: "Amsterdam", players: 45, maxPlayers: 100, ping: 31, status: "online" },
  { id: "us1", name: "USA East", region: "New York", players: 67, maxPlayers: 100, ping: 85, status: "online" },
  { id: "us2", name: "USA West", region: "Los Angeles", players: 23, maxPlayers: 100, ping: 120, status: "online" },
  { id: "asia1", name: "Asia", region: "Singapore", players: 56, maxPlayers: 100, ping: 180, status: "online" },
  { id: "br1", name: "Brazil", region: "Sao Paulo", players: 34, maxPlayers: 100, ping: 150, status: "online" },
]

export function ServerSelector() {
  const [selectedServer, setSelectedServer] = useState("eu1")
  const [isExpanded, setIsExpanded] = useState(false)

  const currentServer = servers.find((s) => s.id === selectedServer)

  const getPingColor = (ping: number) => {
    if (ping < 50) return "text-emerald-400"
    if (ping < 100) return "text-yellow-400"
    return "text-red-400"
  }

  const getStatusDot = (ping: number) => {
    if (ping < 50) return "bg-emerald-400"
    if (ping < 100) return "bg-yellow-400"
    return "bg-red-400"
  }

  return (
    <div className="w-full">
      {/* Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] px-4 py-3 backdrop-blur-xl transition-all hover:border-cyan-500/30"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10">
            <ServerIcon className="h-5 w-5 text-cyan-400" />
          </div>
          <div className="text-left">
            <p className="text-xs font-medium uppercase tracking-wider text-white/50">Server</p>
            <p className="font-semibold text-white">{currentServer?.name}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className={`text-sm font-bold ${getPingColor(currentServer?.ping || 0)}`}>
              {currentServer?.ping}ms
            </p>
            <p className="text-xs text-white/50">
              {currentServer?.players}/{currentServer?.maxPlayers}
            </p>
          </div>
          <svg
            className={`h-5 w-5 text-white/50 transition-transform ${isExpanded ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Expanded Server List */}
      {isExpanded && (
        <div className="mt-2 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-xl">
          <div className="max-h-64 overflow-y-auto">
            {servers.map((server) => (
              <button
                key={server.id}
                onClick={() => {
                  setSelectedServer(server.id)
                  setIsExpanded(false)
                }}
                className={`flex w-full items-center justify-between px-4 py-3 transition-all hover:bg-white/5 ${
                  selectedServer === server.id ? "bg-cyan-500/10" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`h-2 w-2 rounded-full ${getStatusDot(server.ping)} animate-pulse`} />
                  <div className="text-left">
                    <p className="font-medium text-white">{server.name}</p>
                    <p className="text-xs text-white/40">{server.region}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-xs text-white/50">Players</p>
                    <p className="text-sm font-medium text-white">
                      {server.players}
                      <span className="text-white/40">/{server.maxPlayers}</span>
                    </p>
                  </div>
                  <div className="w-12 text-right">
                    <p className={`text-sm font-bold ${getPingColor(server.ping)}`}>{server.ping}ms</p>
                  </div>
                  {selectedServer === server.id && (
                    <svg className="h-5 w-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function ServerIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
      />
    </svg>
  )
}
