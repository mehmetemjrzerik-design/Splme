"use client"

import { useState } from "react"

type AuthMode = "play" | "login" | "signup"

export function LoginPanel() {
  const [mode, setMode] = useState<AuthMode>("play")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handlePlay = () => {
    if (!username.trim()) return
    setIsLoading(true)
    // Simulate game start
    setTimeout(() => setIsLoading(false), 1500)
  }

  return (
    <div className="w-full max-w-sm">
      {/* Panel Container */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-6 backdrop-blur-xl">
        {/* Animated Border Glow */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-transparent to-emerald-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Mode Tabs */}
        <div className="mb-6 flex gap-1 rounded-xl bg-white/5 p-1">
          {[
            { key: "play" as const, label: "PLAY" },
            { key: "login" as const, label: "LOGIN" },
            { key: "signup" as const, label: "SIGN UP" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setMode(tab.key)}
              className={`flex-1 rounded-lg py-2.5 text-xs font-bold tracking-wider transition-all ${
                mode === tab.key
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25"
                  : "text-white/50 hover:text-white/80"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Play Mode */}
        {mode === "play" && (
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-white/50">
                <UserIcon className="h-3.5 w-3.5" />
                Nickname
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your name..."
                maxLength={16}
                className="h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-base font-medium text-white placeholder:text-white/30 focus:border-cyan-500/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
              />
              <p className="text-right text-[10px] text-white/30">{username.length}/16</p>
            </div>

            <button
              onClick={handlePlay}
              disabled={!username.trim() || isLoading}
              className="group relative h-14 w-full overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-emerald-500 font-bold uppercase tracking-widest text-white shadow-lg shadow-cyan-500/25 transition-all hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:hover:scale-100"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                {isLoading ? (
                  <>
                    <LoadingSpinner />
                    CONNECTING...
                  </>
                ) : (
                  <>
                    <PlayIcon />
                    ENTER ARENA
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 opacity-0 transition-opacity group-hover:opacity-100" />
            </button>

            <p className="text-center text-xs text-white/40">
              Play as guest or{" "}
              <button onClick={() => setMode("login")} className="text-cyan-400 hover:underline">
                login
              </button>{" "}
              to save progress
            </p>
          </div>
        )}

        {/* Login Mode */}
        {mode === "login" && (
          <div className="space-y-4">
            <InputField
              icon={<EmailIcon />}
              label="Email"
              type="email"
              value={email}
              onChange={setEmail}
              placeholder="your@email.com"
            />
            <InputField
              icon={<LockIcon />}
              label="Password"
              type="password"
              value={password}
              onChange={setPassword}
              placeholder="Enter password..."
            />
            
            <button className="h-12 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-bold uppercase tracking-widest text-white shadow-lg shadow-cyan-500/25 transition-all hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98]">
              LOGIN
            </button>

            <button className="w-full text-xs text-cyan-400 hover:underline">
              Forgot your password?
            </button>
          </div>
        )}

        {/* Sign Up Mode */}
        {mode === "signup" && (
          <div className="space-y-4">
            <InputField
              icon={<EmailIcon />}
              label="Email"
              type="email"
              value={email}
              onChange={setEmail}
              placeholder="your@email.com"
            />
            <InputField
              icon={<UserIcon />}
              label="Username"
              type="text"
              value={username}
              onChange={setUsername}
              placeholder="Choose a username..."
            />
            <InputField
              icon={<LockIcon />}
              label="Password"
              type="password"
              value={password}
              onChange={setPassword}
              placeholder="Create password..."
            />

            <button className="h-12 w-full rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 font-bold uppercase tracking-widest text-white shadow-lg shadow-emerald-500/25 transition-all hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98]">
              CREATE ACCOUNT
            </button>
          </div>
        )}

        {/* Decorative corner elements */}
        <div className="pointer-events-none absolute left-0 top-0 h-16 w-16">
          <div className="absolute left-2 top-2 h-4 w-px bg-gradient-to-b from-cyan-500/50 to-transparent" />
          <div className="absolute left-2 top-2 h-px w-4 bg-gradient-to-r from-cyan-500/50 to-transparent" />
        </div>
        <div className="pointer-events-none absolute right-0 top-0 h-16 w-16">
          <div className="absolute right-2 top-2 h-4 w-px bg-gradient-to-b from-emerald-500/50 to-transparent" />
          <div className="absolute right-2 top-2 h-px w-4 bg-gradient-to-l from-emerald-500/50 to-transparent" />
        </div>
      </div>
    </div>
  )
}

function InputField({
  icon,
  label,
  type,
  value,
  onChange,
  placeholder,
}: {
  icon: React.ReactNode
  label: string
  type: string
  value: string
  onChange: (value: string) => void
  placeholder: string
}) {
  return (
    <div className="space-y-2">
      <label className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-white/50">
        <span className="h-3.5 w-3.5">{icon}</span>
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-base font-medium text-white placeholder:text-white/30 focus:border-cyan-500/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
      />
    </div>
  )
}

function UserIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  )
}

function EmailIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

function LockIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

function LoadingSpinner() {
  return (
    <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
  )
}
