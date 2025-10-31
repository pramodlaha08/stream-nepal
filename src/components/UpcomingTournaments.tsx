"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  Trophy,
  Calendar,
  Clock,
  DollarSign,
  Users,
  ExternalLink,
  Target,
  Zap,
  ArrowRight,
  LucideIcon,
} from "lucide-react";

// Tournament Interface
interface Tournament {
  id: number;
  title: string;
  game: string;
  date: string;
  time: string;
  prize: string;
  seats: string;
  status: "coming_soon" | "open" | "closed";
  image: string;
  gameIcon: LucideIcon;
  registrationLink: string;
}

const UpcomingTournaments = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const tournaments: Tournament[] = [
    {
      id: 1,
      title: "PUBG Mobile Warriors Cup 2.0",
      game: "PUBG Mobile",
      date: "14/11/2025",
      time: "9:00 NPT",
      prize: "₹10,000",
      seats: "Slots Available",
      status: "open", // coming_soon, open, closed
      image: "/pmwc_v2/poster.png",
      gameIcon: Target,
      registrationLink: "/tournaments/pmwc_v2",
    },
    {
      id: 2,
      title: "PUBG Mobile Warriors Cup",
      game: "PUBG Mobile",
      date: "20/09/2025",
      time: "11:00 NPT",
      prize: "₹8,000",
      seats: "Slots Filled",
      status: "closed", // coming_soon, open, closed
      image:
        "/pmwc/thumbnails/pmwc.png",
      gameIcon: Target,
      registrationLink: "/tournaments/pmwc",
    },
    {
      id: 3,
      title: "FreeFire Warzone",
      game: "Free Fire",
      date: "25/01/2025",
      time: "20:00 NPT",
      prize: "₹30,000",
      seats: "Slots Filled",
      status: "closed",
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=250&fit=crop",
      gameIcon: Zap,
      registrationLink: "/tournaments/ffwarzone",
    },
  ];

  const getStatusColor = (status: Tournament["status"]): string => {
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

  const getStatusText = (status: Tournament["status"]): string => {
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
      id="tournaments"
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
            className="flex items-center justify-center flex-col sm:flex-row mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black">
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
          {tournaments.map((tournament: Tournament, index: number) => (
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
                <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-800/50">
                  <motion.img
                    src={tournament.image}
                    alt={tournament.title}
                    className="w-full h-full object-contain"
                    whileHover={{ scale: 1.05 }}
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

                  {/* Action Buttons - Native Links */}
                  <div className="flex gap-3">
                    {/* Learn More Button */}
                    {tournament.registrationLink.startsWith("/") ? (
                      <Link
                        href={tournament.registrationLink}
                        className="group relative flex-1 px-4 py-3 bg-black/80 backdrop-blur-sm border border-cyan-400/30 rounded-xl font-bold text-white overflow-hidden cursor-pointer hover:border-cyan-400/80 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                      >
                        {/* Animated Background Lines */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
                          <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse"></div>
                          <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-transparent via-pink-400 to-transparent animate-pulse"></div>
                          <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-yellow-400 to-transparent animate-pulse"></div>
                        </div>

                        {/* Corner Blades */}
                        <div className="absolute -top-1 -left-1 w-3 h-3 bg-gradient-to-br from-cyan-400/60 to-transparent transform rotate-45 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-bl from-purple-400/60 to-transparent transform -rotate-45 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                        <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-gradient-to-tr from-pink-400/60 to-transparent transform -rotate-45 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-gradient-to-tl from-yellow-400/60 to-transparent transform rotate-45 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

                        {/* Button Content */}
                        <div className="relative z-10 flex items-center justify-center space-x-2">
                          <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                          <span className="text-sm font-semibold tracking-wider group-hover:text-cyan-300 transition-colors">
                            LEARN MORE
                          </span>
                          <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                        </div>

                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </Link>
                    ) : (
                      <a
                        href={tournament.registrationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex-1 px-4 py-3 bg-black/80 backdrop-blur-sm border border-cyan-400/30 rounded-xl font-bold text-white overflow-hidden cursor-pointer hover:border-cyan-400/80 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                      >
                        {/* Animated Background Lines */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
                          <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse"></div>
                          <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-transparent via-pink-400 to-transparent animate-pulse"></div>
                          <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-yellow-400 to-transparent animate-pulse"></div>
                        </div>

                        {/* Corner Blades */}
                        <div className="absolute -top-1 -left-1 w-3 h-3 bg-gradient-to-br from-cyan-400/60 to-transparent transform rotate-45 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-bl from-purple-400/60 to-transparent transform -rotate-45 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                        <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-gradient-to-tr from-pink-400/60 to-transparent transform -rotate-45 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-gradient-to-tl from-yellow-400/60 to-transparent transform rotate-45 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

                        {/* Button Content */}
                        <div className="relative z-10 flex items-center justify-center space-x-2">
                          <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                          <span className="text-sm font-semibold tracking-wider group-hover:text-cyan-300 transition-colors">
                            LEARN MORE
                          </span>
                          <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                        </div>

                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </a>
                    )}

                    {/* Register Button */}
                    {tournament.status === "closed" ? (
                      <div className="group relative flex-1 px-4 py-3 bg-gradient-to-r from-gray-500 to-gray-600 rounded-xl font-bold text-white overflow-hidden opacity-50 cursor-not-allowed">
                        <div className="relative z-10 flex items-center justify-center space-x-2">
                          <Users className="w-4 h-4" />
                          <span className="text-sm">Closed</span>
                        </div>
                      </div>
                    ) : (
                      <a
                        href={tournament.registrationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex-1 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-bold text-white overflow-hidden cursor-pointer hover:from-pink-500 hover:to-purple-500 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                      >
                        {/* Sliding Background Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></div>

                        {/* Button Content */}
                        <div className="relative z-10 flex items-center justify-center space-x-2">
                          <ExternalLink className="w-4 h-4" />
                          <span className="text-sm">Register</span>
                        </div>
                      </a>
                    )}
                  </div>
                </div>

                {/* Hover Overlay Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-3xl opacity-0 pointer-events-none -z-10"
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
            Don&apos;t see your favorite game? Contact us to organize custom
            tournaments!
          </motion.p>

          <motion.a
            href="https://wa.me/9779876543210?text=Hi%20Stream%20Nepal!%20I%20would%20like%20to%20request%20a%20custom%20tournament.%20Please%20provide%20me%20with%20more%20details%20about%20organizing%20a%20tournament%20for%20my%20preferred%20game."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-bold text-white overflow-hidden cursor-pointer inline-block"
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
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default UpcomingTournaments;
