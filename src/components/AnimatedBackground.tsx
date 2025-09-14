"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ParticleProps {
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
}

const ParticleSystem = () => {
  const [particles, setParticles] = useState<ParticleProps[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      // Only generate particles if window is available
      if (typeof window === "undefined") return;

      const newParticles: ParticleProps[] = [];
      const colors = ["#22d3ee", "#a855f7", "#ec4899", "#f59e0b", "#10b981"];

      for (let i = 0; i < 100; i++) {
        newParticles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 4 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          delay: Math.random() * 5,
        });
      }

      setParticles(newParticles);
    };

    generateParticles();
    window.addEventListener("resize", generateParticles);

    return () => window.removeEventListener("resize", generateParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}40`,
          }}
          animate={{
            y: [particle.y, particle.y - 100, particle.y],
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

const FloatingElements = () => {
  const gameIcons = ["🎮", "🏆", "⚡", "🎯", "👾", "🚀", "💎", "⭐"];

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {gameIcons.map((icon, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 360],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: index * 2,
            ease: "easeInOut",
          }}
        >
          {icon}
        </motion.div>
      ))}
    </div>
  );
};

const GlowingOrbs = () => {
  const orbs = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    size: 200 + Math.random() * 300,
    color: ["cyan", "purple", "pink", "blue", "green"][i % 5],
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className={`absolute rounded-full blur-3xl opacity-20`}
          style={{
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${
              orb.color === "cyan"
                ? "#22d3ee"
                : orb.color === "purple"
                ? "#a855f7"
                : orb.color === "pink"
                ? "#ec4899"
                : orb.color === "blue"
                ? "#3b82f6"
                : "#10b981"
            }40, transparent)`,
          }}
          animate={{
            x: ["-10%", "110%"],
            y: ["110%", "-10%"],
            scale: [0.8, 1.5, 0.8],
          }}
          transition={{
            duration: 20 + orb.id * 5,
            repeat: Infinity,
            ease: "linear",
            delay: orb.id * 4,
          }}
        />
      ))}
    </div>
  );
};

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden">
      <ParticleSystem />
      <FloatingElements />
      <GlowingOrbs />

      {/* Grid Animation */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "50px 50px"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </div>
  );
};

export default AnimatedBackground;
