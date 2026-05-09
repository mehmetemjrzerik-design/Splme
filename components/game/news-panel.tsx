"use client"

import { useState } from "react"

const newsItems = [
  {
    id: 1,
    type: "update",
    title: "v0.9.2 Patch Notes",
    description: "New Ruby weapons, balance changes, and performance improvements",
    date: "2 hours ago",
    isNew: true,
  },
  {
    id: 2,
    type: "event",
    title: "Weekend Tournament",
    description: "Join the arena for exclusive rewards and prizes!",
    date: "Starts in 3h",
    isNew: true,
  },
  {
    id: 3,
    type: "news",
    title: "New Map: Volcanic Island",
    description: "Explore the dangerous volcanic terrain with new resources",
    date: "1 day ago",
    isNew: false,
  },
]

export function NewsPanel() {
  const [isExpanded, setIsExpanded] = useState(false)

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "update":
        return (
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10">
            <svg className="h-4 w-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
        )
      case "event":
        return (
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10">
            <svg className="h-4 w-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </div>
        )
      default:
        return (
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10">
            <svg className="h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
        )
    }
  }

  return (
    <div className="w-full">
      {/* Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] px-4 py-3 backdrop-blur-xl transition-all hover:border-cyan-500/30"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10">
            <svg className="h-5 w-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>
          <div className="text-left">
            <p className="text-xs font-medium uppercase tracking-wider text-white/50">News & Updates</p>
            <p className="font-semibold text-white">Latest Activity</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
            {newsItems.filter((n) => n.isNew).length}
          </span>
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

      {/* Expanded News List */}
      {isExpanded && (
        <div className="mt-2 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-xl">
          {newsItems.map((item) => (
            <button
              key={item.id}
              className="flex w-full items-start gap-3 px-4 py-3 text-left transition-all hover:bg-white/5"
            >
              {getTypeIcon(item.type)}
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="truncate font-medium text-white">{item.title}</p>
                  {item.isNew && (
                    <span className="shrink-0 rounded bg-cyan-500/20 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-cyan-400">
                      New
                    </span>
                  )}
                </div>
                <p className="mt-0.5 truncate text-xs text-white/50">{item.description}</p>
                <p className="mt-1 text-[10px] text-white/30">{item.date}</p>
              </div>
            </button>
          ))}
          
          {/* View All Button */}
          <button className="w-full border-t border-white/10 py-3 text-xs font-medium text-cyan-400 transition-colors hover:bg-cyan-500/10">
            View All Updates
          </button>
        </div>
      )}
    </div>
  )
}
