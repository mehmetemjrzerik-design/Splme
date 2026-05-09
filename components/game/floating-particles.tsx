"use client"

import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  color: string
}

export function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const colors = [
      "bg-cyan-500/30",
      "bg-blue-500/30",
      "bg-emerald-500/30",
      "bg-cyan-400/20",
      "bg-blue-400/20",
    ]

    const newParticles: Particle[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 10,
      color: colors[Math.floor(Math.random() * colors.length)],
    }))

    setParticles(newParticles)
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute rounded-full ${particle.color} blur-sm`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animation: `float ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
      
      {/* Large ambient orbs */}
      <div className="absolute -left-32 top-1/4 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl animate-pulse" />
      <div className="absolute -right-32 bottom-1/4 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-3xl" />

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-30px) translateX(10px);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-15px) translateX(-15px);
            opacity: 0.4;
          }
          75% {
            transform: translateY(-40px) translateX(5px);
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  )
}
