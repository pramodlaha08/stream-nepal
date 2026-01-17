"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { Play, Trophy, Zap, Users, Star } from "lucide-react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => window.innerWidth < 768;
    setIsMobile(checkMobile());

    // Throttle mouse tracking for better performance
    let rafId: number;
    let lastTime = 0;
    const throttleDelay = 50; // Update every 50ms instead of every frame

    const handleMouseMove = (e: MouseEvent) => {
      const currentTime = Date.now();
      if (currentTime - lastTime < throttleDelay) return;

      lastTime = currentTime;
      if (rafId) cancelAnimationFrame(rafId);

      rafId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    const handleResize = () => {
      setIsMobile(checkMobile());
    };

    // Only add mouse tracking on desktop
    if (!checkMobile()) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      {/* Simplified Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Reduced Floating Particles - only on desktop */}
      {!isMobile && (
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/60 rounded-full will-change-transform"
              initial={{
                x:
                  Math.random() *
                  (typeof window !== "undefined" ? window.innerWidth : 1000),
                y:
                  Math.random() *
                  (typeof window !== "undefined" ? window.innerHeight : 1000),
                opacity: 0,
              }}
              animate={{
                y: [null, Math.random() * 100 - 50],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: Math.random() * 8 + 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      )}

      {/* Cursor Follow Effect - Desktop Only */}
      {!isMobile && (
        <motion.div
          className="fixed w-64 h-64 bg-gradient-radial from-cyan-500/10 to-transparent rounded-full pointer-events-none z-10 will-change-transform"
          animate={{
            x: mousePosition.x - 128,
            y: mousePosition.y - 128,
          }}
          transition={{ type: "spring", damping: 50, stiffness: 150 }}
        />
      )}

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 pt-24 sm:pt-20">
        {/* Logo/Brand - Simplified Animation */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 text-center"
        >
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
            STREAM
          </h1>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black bg-gradient-to-r from-pink-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">
            NEPAL
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-base sm:text-xl md:text-2xl text-gray-300 font-light mb-3">
            Elite Gaming Tournaments & Live Streaming Excellence
          </p>
          <p className="text-sm sm:text-base text-gray-400">
            PUBG • FreeFire • Technical Support • Esports Revolution
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <motion.a
            href="https://wa.me/9779820744881?text=Hi%20Stream%20Nepal!%20I%20would%20like%20to%20know%20more%20about%20your%20tournaments%20and%20streaming%20services.%20Please%20provide%20me%20with%20more%20details."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-bold text-white overflow-hidden inline-block text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Play className="w-4 h-4 sm:w-5 sm:h-5" />
              WhatsApp
            </span>
          </motion.a>

          <motion.button
            onClick={() => {
              const tournamentsSection = document.getElementById("tournaments");
              tournamentsSection?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-bold relative overflow-hidden cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Trophy className="w-4 h-4 sm:w-5 sm:h-5" />
              View Tournaments
            </span>
          </motion.button>
        </motion.div>

        {/* Stats Counter - Simplified */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center max-w-4xl"
        >
          {[
            { icon: Trophy, value: "6+", label: "Tournaments" },
            { icon: Users, value: "1.5K+", label: "Gamers" },
            { icon: Zap, value: "24/7", label: "Support" },
            { icon: Star, value: "4.9★", label: "Rating" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="group"
              whileHover={{ scale: 1.08, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-xl flex items-center justify-center">
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 group-hover:text-purple-400 transition-colors" />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-gray-400 text-xs sm:text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
