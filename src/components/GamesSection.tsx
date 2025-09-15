"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Gamepad2, Trophy, Star, Zap, Users } from "lucide-react";

const GamesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const games = [
    {
      id: 1,
      name: "PUBG Mobile",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200&h=200&fit=crop",
      category: "Battle Royale",
      players: "100M+",
      gradient: "from-orange-500 to-red-600",
    },
    {
      id: 2,
      name: "Free Fire",
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=200&h=200&fit=crop",
      category: "Battle Royale",
      players: "80M+",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      id: 3,
      name: "Valorant",
      image:
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=200&h=200&fit=crop",
      category: "Tactical FPS",
      players: "15M+",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      id: 4,
      name: "Mobile Legends",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop",
      category: "MOBA",
      players: "75M+",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      id: 5,
      name: "Call of Duty Mobile",
      image:
        "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=200&h=200&fit=crop",
      category: "FPS",
      players: "50M+",
      gradient: "from-yellow-500 to-orange-600",
    },
    {
      id: 6,
      name: "Clash Royale",
      image:
        "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=200&h=200&fit=crop",
      category: "Strategy",
      players: "40M+",
      gradient: "from-indigo-500 to-purple-600",
    },
    {
      id: 7,
      name: "Among Us",
      image:
        "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=200&h=200&fit=crop",
      category: "Social Deduction",
      players: "30M+",
      gradient: "from-red-500 to-pink-600",
    },
    {
      id: 8,
      name: "Minecraft",
      image:
        "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=200&h=200&fit=crop",
      category: "Sandbox",
      players: "120M+",
      gradient: "from-green-500 to-lime-600",
    },
  ];

  // Duplicate games for seamless infinite scroll
  const duplicatedGames = [...games, ...games, ...games, ...games, ...games];

  const GameCard = ({
    game,
    index,
  }: {
    game: (typeof games)[0];
    index: number;
  }) => (
    <motion.div
      className="group relative flex-shrink-0 w-48 h-64 mx-4"
      initial={{ opacity: 0, y: 50, rotateY: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      whileHover={{ scale: 1.05, y: -10, rotateY: 5 }}
    >
      {/* Card Glow Effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${game.gradient} opacity-20 rounded-2xl blur-xl group-hover:blur-2xl group-hover:opacity-40 transition-all duration-300`}
      />

      {/* Main Card */}
      <div className="relative w-full h-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden group-hover:border-white/30 transition-all duration-300">
        {/* Game Image */}
        <div className="relative h-40 overflow-hidden">
          <motion.img
            src={game.image}
            alt={game.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.4 }}
          />

          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <div
              className={`px-3 py-1 bg-gradient-to-r ${game.gradient} rounded-full backdrop-blur-sm`}
            >
              <span className="text-white text-xs font-bold">
                {game.category}
              </span>
            </div>
          </div>

          {/* Player Count Badge */}
          <div className="absolute top-3 right-3">
            <div className="bg-black/60 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
              <Users className="w-3 h-3 text-cyan-400" />
              <span className="text-white text-xs font-semibold">
                {game.players}
              </span>
            </div>
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </div>

        {/* Card Content */}
        <div className="p-4 flex flex-col justify-between h-24">
          <div>
            <h3 className="text-white font-bold text-lg mb-1 group-hover:text-cyan-400 transition-colors">
              {game.name}
            </h3>
          </div>

          {/* Game Icon */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <motion.div
                className={`w-8 h-8 bg-gradient-to-r ${game.gradient} rounded-lg flex items-center justify-center`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.4 }}
              >
                <Gamepad2 className="w-4 h-4 text-white" />
              </motion.div>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 text-yellow-400 fill-current"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Hover Overlay */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${game.gradient} opacity-0 rounded-2xl`}
          whileHover={{ opacity: 0.1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );

  return (
    <section
      ref={ref}
      id="games"
      className="relative py-20 overflow-hidden bg-gradient-to-b from-slate-900 to-black"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.15)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(60deg,transparent_48%,rgba(255,255,255,0.04)_49%,rgba(255,255,255,0.04)_51%,transparent_52%)] bg-[size:25px_25px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="flex items-center justify-center mb-6 flex-col sm:flex-row"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-5xl md:text-7xl font-black">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                FEATURED GAMES
              </span>
            </h2>
          </motion.div>

          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Experience the most popular gaming titles with competitive
            tournaments, professional streaming support, and amazing prize
            pools.
          </motion.p>
        </motion.div>

        {/* Infinite Scrolling Games */}
        <div className="relative">
          {/* Top Row - Left to Right */}
          <div className="mb-8 overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: [0, -1920] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {duplicatedGames.slice(0, 12).map((game, index) => (
                <GameCard
                  key={`top-${game.id}-${index}`}
                  game={game}
                  index={index}
                />
              ))}
            </motion.div>
          </div>

          {/* Bottom Row - Right to Left */}
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: [-1920, 0] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {duplicatedGames
                .slice(0, 12)
                .reverse()
                .map((game, index) => (
                  <GameCard
                    key={`bottom-${game.id}-${index}`}
                    game={game}
                    index={index}
                  />
                ))}
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl border border-white/10 p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Gamepad2, number: "50+", label: "Games Supported" },
                {
                  icon: Trophy,
                  number: "1M+",
                  label: "Prize Pool Distributed",
                },
                { icon: Star, number: "4.9", label: "Average Rating" },
                { icon: Zap, number: "24/7", label: "Gaming Support" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.2 + index * 0.2, duration: 0.8 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <motion.div
                    className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-purple-600/30 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.4 }}
                  >
                    <stat.icon className="w-8 h-8 text-cyan-400" />
                  </motion.div>
                  <motion.div
                    className="text-3xl font-bold text-white mb-2"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 1.4 + index * 0.2 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-bold text-white overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
            />
            <span className="relative z-10 flex items-center gap-2">
              <Gamepad2 className="w-5 h-5" />
              Explore All Games
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default GamesSection;
