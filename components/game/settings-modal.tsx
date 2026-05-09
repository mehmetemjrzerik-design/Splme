"use client"

import { useState } from "react"

type SettingsTab = "graphics" | "keybinds" | "audio"

const defaultKeybinds = [
  { action: "Spike", key: "R", description: "Place spike when pressed" },
  { action: "Food", key: "Q", description: "Use food to heal" },
  { action: "Trap", key: "F", description: "Place trap/boost pad" },
  { action: "Windmill", key: "T", description: "Place windmill" },
  { action: "Hat Store", key: "H", description: "Open hat store" },
  { action: "Clan Menu", key: "B", description: "Open clan menu" },
]

interface SettingsModalProps {
  onClose: () => void
}

export function SettingsModal({ onClose }: SettingsModalProps) {
  const [activeTab, setActiveTab] = useState<SettingsTab>("graphics")
  const [settings, setSettings] = useState({
    renderGrid: true,
    renderParticles: true,
    showPing: true,
    nativeRender: false,
    friendlyIndicator: true,
    masterVolume: 80,
    sfxVolume: 70,
    musicVolume: 50,
  })

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#1a1f2e] to-[#0f1219]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <h2 className="text-xl font-bold text-white">Settings</h2>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-white/50 transition-colors hover:bg-white/10 hover:text-white"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 border-b border-white/10 px-4">
          {(["graphics", "keybinds", "audio"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 text-sm font-medium capitalize transition-all ${
                activeTab === tab
                  ? "border-b-2 border-cyan-500 text-cyan-400"
                  : "text-white/50 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="max-h-[60vh] overflow-y-auto p-6">
          {activeTab === "graphics" && (
            <div className="space-y-4">
              <ToggleSetting
                label="Render Grid"
                description="Disabling can slightly improve game performance"
                checked={settings.renderGrid}
                onChange={(checked) => setSettings({ ...settings, renderGrid: checked })}
              />
              <ToggleSetting
                label="Render Particles"
                description="Disable it to increase the performance of the game"
                checked={settings.renderParticles}
                onChange={(checked) => setSettings({ ...settings, renderParticles: checked })}
              />
              <ToggleSetting
                label="Show Ping"
                description="Shows how long it takes for a packet to travel to/from the server"
                checked={settings.showPing}
                onChange={(checked) => setSettings({ ...settings, showPing: checked })}
              />
              <ToggleSetting
                label="Native Render"
                description="Render at screen resolution for sharper visuals"
                checked={settings.nativeRender}
                onChange={(checked) => setSettings({ ...settings, nativeRender: checked })}
              />
              <ToggleSetting
                label="Friendly Indicator"
                description="Show which structures are yours"
                checked={settings.friendlyIndicator}
                onChange={(checked) => setSettings({ ...settings, friendlyIndicator: checked })}
              />
            </div>
          )}

          {activeTab === "keybinds" && (
            <div className="space-y-3">
              <div className="mb-4 flex justify-end">
                <button className="flex items-center gap-2 rounded-lg bg-red-500/10 px-3 py-1.5 text-xs font-medium text-red-400 transition-colors hover:bg-red-500/20">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Reset All
                </button>
              </div>
              {defaultKeybinds.map((keybind) => (
                <KeybindSetting key={keybind.action} {...keybind} />
              ))}
            </div>
          )}

          {activeTab === "audio" && (
            <div className="space-y-6">
              <SliderSetting
                label="Master Volume"
                value={settings.masterVolume}
                onChange={(value) => setSettings({ ...settings, masterVolume: value })}
              />
              <SliderSetting
                label="Sound Effects"
                value={settings.sfxVolume}
                onChange={(value) => setSettings({ ...settings, sfxVolume: value })}
              />
              <SliderSetting
                label="Music"
                value={settings.musicVolume}
                onChange={(value) => setSettings({ ...settings, musicVolume: value })}
              />
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 border-t border-white/10 px-6 py-4">
          <button
            onClick={onClose}
            className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/70 transition-all hover:bg-white/10 hover:text-white"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-cyan-500/25"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}

function ToggleSetting({
  label,
  description,
  checked,
  onChange,
}: {
  label: string
  description: string
  checked: boolean
  onChange: (checked: boolean) => void
}) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-lg bg-white/5 p-4">
      <div>
        <p className="font-medium text-white">{label}</p>
        <p className="mt-0.5 text-xs text-white/50">{description}</p>
      </div>
      <button
        onClick={() => onChange(!checked)}
        className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
          checked ? "bg-cyan-500" : "bg-white/20"
        }`}
      >
        <span
          className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-md transition-all ${
            checked ? "left-5" : "left-0.5"
          }`}
        />
      </button>
    </div>
  )
}

function KeybindSetting({
  action,
  key: defaultKey,
  description,
}: {
  action: string
  key: string
  description: string
}) {
  const [currentKey, setCurrentKey] = useState(defaultKey)
  const [isEditing, setIsEditing] = useState(false)

  const handleKeyDown = (e: React.KeyboardEvent) => {
    e.preventDefault()
    setCurrentKey(e.key.toUpperCase())
    setIsEditing(false)
  }

  return (
    <div className="flex items-center justify-between rounded-lg bg-white/5 p-4">
      <div>
        <p className="font-medium text-white">{action}</p>
        <p className="mt-0.5 text-xs text-white/50">{description}</p>
      </div>
      <button
        onClick={() => setIsEditing(true)}
        onKeyDown={isEditing ? handleKeyDown : undefined}
        onBlur={() => setIsEditing(false)}
        className={`flex h-10 w-16 items-center justify-center rounded-lg border font-mono text-sm font-bold transition-all ${
          isEditing
            ? "border-cyan-500 bg-cyan-500/10 text-cyan-400"
            : "border-white/20 bg-white/5 text-white hover:border-white/40"
        }`}
      >
        {isEditing ? "..." : currentKey}
      </button>
    </div>
  )
}

function SliderSetting({
  label,
  value,
  onChange,
}: {
  label: string
  value: number
  onChange: (value: number) => void
}) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <p className="font-medium text-white">{label}</p>
        <span className="text-sm font-medium text-cyan-400">{value}%</span>
      </div>
      <div className="relative h-2 rounded-full bg-white/10">
        <div
          className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
          style={{ width: `${value}%` }}
        />
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
        />
        <div
          className="absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-cyan-500 bg-white shadow-lg"
          style={{ left: `calc(${value}% - 8px)` }}
        />
      </div>
    </div>
  )
}
