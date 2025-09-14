"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Trophy,
  Calendar,
  Clock,
  DollarSign,
  Users,
  ExternalLink,
  Target,
  Gamepad2,
  Zap,
  Award,
} from "lucide-react";

const UpcomingTournaments = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const tournaments = [
    {
      id: 1,
      title: "PUBG Mobile Championship",
      game: "PUBG Mobile",
      date: "20/01/2025",
      time: "18:00 NPT",
      prize: "₹50,000",
      seats: "Limited Seats",
      status: "open", // coming_soon, open, closed
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=250&fit=crop",
      gameIcon: Target,
      registrationLink: "https://forms.google.com/dummy-pubg-tournament",
    },
    {
      id: 2,
      title: "FreeFire Battle Royale",
      game: "Free Fire",
      date: "25/01/2025",
      time: "20:00 NPT",
      prize: "₹30,000",
      seats: "48 Teams",
      status: "coming_soon",
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=250&fit=crop",
      gameIcon: Zap,
      registrationLink: "https://forms.google.com/dummy-freefire-tournament",
    },
    {
      id: 3,
      title: "Valorant Strike Championship",
      game: "Valorant",
      date: "15/02/2025",
      time: "19:30 NPT",
      prize: "₹75,000",
      seats: "32 Teams",
      status: "coming_soon",
      image:
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=250&fit=crop",
      gameIcon: Award,
      registrationLink: "https://forms.google.com/dummy-valorant-tournament",
    },
    {
      id: 4,
      title: "Mobile Legends Tournament",
      game: "Mobile Legends",
      date: "28/01/2025",
      time: "17:00 NPT",
      prize: "₹25,000",
      seats: "Full",
      status: "closed",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop",
      gameIcon: Gamepad2,
      registrationLink: "https://forms.google.com/dummy-ml-tournament",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "coming_soon":
        return "from-yellow-500 to-orange-500";
      case "open":
        return "from-green-500 to-emerald-500";
      case "closed":
        return "from-red-500 to-pink-500";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "coming_soon":
        return "Coming Soon";
      case "open":
        return "Open";
      case "closed":
        return "Closed";
      default:
        return "Unknown";
    }
  };

  return (
    <section
      ref={ref}
      className="relative py-20 overflow-hidden bg-gradient-to-b from-black to-slate-900"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(168,85,247,0.15)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(34,211,238,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(30deg,transparent_48%,rgba(255,255,255,0.03)_49%,rgba(255,255,255,0.03)_51%,transparent_52%)] bg-[size:30px_30px]" />
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
            className="flex items-center justify-center mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-5xl md:text-7xl font-black">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                UPCOMING TOURNAMENTS
              </span>
            </h2>
          </motion.div>

          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Join competitive tournaments with exciting prizes and prove your
            skills against the best players in Nepal.
          </motion.p>
        </motion.div>

        {/* Tournaments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {tournaments.map((tournament, index) => (
            <motion.div
              key={tournament.id}
              className="group relative"
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{
                delay: index * 0.2 + 0.5,
                duration: 0.8,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.02, y: -8 }}
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-200 opacity-0 group-hover:opacity-100" />

              {/* Main Card */}
              <div className="relative bg-black/50 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden group-hover:border-white/20 transition-all duration-200">
                {/* Tournament Image with Status Badge */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={tournament.image}
                    alt={tournament.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <motion.div
                      className={`px-3 py-1 bg-gradient-to-r ${getStatusColor(
                        tournament.status
                      )} rounded-full`}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: index * 0.2 + 0.8 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className="text-white text-sm font-bold">
                        {getStatusText(tournament.status)}
                      </span>
                    </motion.div>
                  </div>

                  {/* Game Icon Overlay */}
                  <div className="absolute top-4 left-4">
                    <motion.div
                      className="w-12 h-12 bg-black/60 backdrop-blur-sm rounded-xl flex items-center justify-center"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <tournament.gameIcon className="w-6 h-6 text-cyan-400" />
                    </motion.div>
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Tournament Title */}
                  <motion.h3
                    className="text-2xl font-bold text-white mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.2 + 0.9 }}
                  >
                    {tournament.title}
                  </motion.h3>

                  <motion.p
                    className="text-purple-400 font-semibold mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.2 + 1 }}
                  >
                    {tournament.game}
                  </motion.p>

                  {/* Tournament Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <motion.div
                      className="flex items-center space-x-2 text-gray-300"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: index * 0.2 + 1.1 }}
                    >
                      <Calendar className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm">{tournament.date}</span>
                    </motion.div>

                    <motion.div
                      className="flex items-center space-x-2 text-gray-300"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: index * 0.2 + 1.2 }}
                    >
                      <Clock className="w-4 h-4 text-purple-400" />
                      <span className="text-sm">{tournament.time}</span>
                    </motion.div>

                    <motion.div
                      className="flex items-center space-x-2 text-gray-300"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: index * 0.2 + 1.3 }}
                    >
                      <DollarSign className="w-4 h-4 text-green-400" />
                      <span className="text-sm font-semibold text-green-400">
                        {tournament.prize}
                      </span>
                    </motion.div>

                    <motion.div
                      className="flex items-center space-x-2 text-gray-300"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: index * 0.2 + 1.4 }}
                    >
                      <Users className="w-4 h-4 text-pink-400" />
                      <span className="text-sm">{tournament.seats}</span>
                    </motion.div>
                  </div>

                  {/* Register Button */}
                  <motion.a
                    href={tournament.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group/btn relative w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-bold text-white overflow-hidden flex items-center justify-center space-x-2 transition-all duration-200 ${
                      tournament.status === "closed"
                        ? "opacity-50 cursor-not-allowed pointer-events-none"
                        : "hover:from-pink-500 hover:to-purple-500"
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.2 + 1.5 }}
                    whileHover={
                      tournament.status !== "closed" ? { scale: 1.02 } : {}
                    }
                    whileTap={
                      tournament.status !== "closed" ? { scale: 0.98 } : {}
                    }
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{
                        type: "tween",
                        ease: "easeOut",
                        duration: 0.3,
                      }}
                    />
                    <span className="relative z-10 flex items-center space-x-2">
                      {tournament.status === "closed" ? (
                        <>
                          <Users className="w-4 h-4" />
                          <span>Tournament Closed</span>
                        </>
                      ) : (
                        <>
                          <ExternalLink className="w-4 h-4" />
                          <span>Register Now</span>
                        </>
                      )}
                    </span>
                  </motion.a>
                </div>

                {/* Hover Overlay Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-3xl opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 2, duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.p
            className="text-gray-400 mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 2.2 }}
          >
            Don't see your favorite game? Contact us to organize custom
            tournaments!
          </motion.p>

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
              <Trophy className="w-5 h-5" />
              Request Custom Tournament
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default UpcomingTournaments;
