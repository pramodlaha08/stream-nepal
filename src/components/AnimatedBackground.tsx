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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => window.innerWidth < 768;
    setIsMobile(checkMobile());

    const generateParticles = () => {
      if (typeof window === "undefined") return;

      const newParticles: ParticleProps[] = [];
      const colors = ["#22d3ee", "#a855f7", "#ec4899"];
      // Reduce particles: 10 on mobile, 20 on desktop (was 100)
      const particleCount = checkMobile() ? 10 : 20;

      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 3 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          delay: Math.random() * 5,
        });
      }

      setParticles(newParticles);
    };

    generateParticles();

    // Debounce resize handler
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        setIsMobile(checkMobile());
        generateParticles();
      }, 250);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full will-change-transform"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
          }}
          animate={{
            y: [particle.y, particle.y - 80, particle.y],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

// Simplified GlowingOrbs with fewer orbs and less intensive blur
const GlowingOrbs = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  // Reduce from 5 to 3 orbs, smaller on mobile
  const orbs = Array.from({ length: isMobile ? 2 : 3 }, (_, i) => ({
    id: i,
    size: isMobile ? 150 : 250,
    color: ["cyan", "purple", "pink"][i % 3],
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full blur-2xl opacity-10"
          style={{
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${
              orb.color === "cyan"
                ? "#22d3ee"
                : orb.color === "purple"
                  ? "#a855f7"
                  : "#ec4899"
            }30, transparent)`,
            willChange: "transform",
          }}
          animate={{
            x: ["-10%", "110%"],
            y: ["110%", "-10%"],
          }}
          transition={{
            duration: 30 + orb.id * 10,
            repeat: Infinity,
            ease: "linear",
            delay: orb.id * 5,
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
      <GlowingOrbs />

      {/* Static Grid - no animation for better performance */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34, 211, 238, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 211, 238, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>
    </div>
  );
};

export default AnimatedBackground;
