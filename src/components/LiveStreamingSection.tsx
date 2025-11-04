"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Play,
  Eye,
  ExternalLink,
  Clock,
  Radio,
  Video,
  TrendingUp,
  Star,
  Sparkles,
  X,
} from "lucide-react";

// Stream Interface
interface Platform {
  name: string;
  url: string;
  color: string;
  icon: string;
}

interface Stream {
  id: number;
  title: string;
  status: "live" | "upcoming";
  thumbnail: string;
  viewers?: string;
  duration?: string;
  expectedViewers?: string;
  scheduledTime?: string;
  platforms: Platform[];
  game: string;
  streamer: string;
  isSpecial?: boolean;
}

const LiveStreamingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const liveStreams: Stream[] = [
    {
      id: 1,
      title: "🏆 Upcoming: PMWC 2.0",
      status: "upcoming",
      thumbnail: "/pmwc_v2/poster.png",
      expectedViewers: "",
      scheduledTime: "14 Nov, 9:00 AM",
      platforms: [
        {
          name: "YouTube",
          url: "https://www.youtube.com/@MRSADY",
          color: "from-red-500 to-red-600",
          icon: "📺",
        },
        {
          name: "Facebook",
          url: "https://www.facebook.com/MRSADDDY",
          color: "from-blue-500 to-blue-600",
          icon: "📘",
        },
      ],
      game: "PUBG Mobile",
      streamer: "StreamNepal Official",
      isSpecial: true,
    },
    {
      id: 2,
      title: "PUBG Mobile Warriors Cup",
      status: "live",
      thumbnail: "/pmwc/thumbnails/pmwc.png",
      viewers: "2K",
      duration: "4h 41m",
      platforms: [
        {
          name: "YouTube",
          url: "https://www.youtube.com/watch?v=UGR_VQ5NTV4&t=11131s",
          color: "from-red-500 to-red-600",
          icon: "📺",
        },
        {
          name: "Facebook",
          url: "https://www.facebook.com/MRSADDDY",
          color: "from-blue-500 to-blue-600",
          icon: "📘",
        },
      ],
      game: "PUBG Mobile",
      streamer: "StreamNepal Official",
    },
    {
      id: 3,
      title: "FreeFire Battle Royale Tournament",
      status: "live",
      thumbnail:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&h=300&fit=crop",
      viewers: "1K",
      duration: "1h 57m",
      platforms: [
        {
          name: "YouTube",
          url: "https://www.youtube.com/watch?v=zIcML4bu27c&t=299s",
          color: "from-red-500 to-red-600",
          icon: "📺",
        },
        {
          name: "Facebook",
          url: "https://www.facebook.com/MRSADDDY",
          color: "from-blue-500 to-blue-600",
          icon: "📘",
        },
      ],
      game: "Free Fire",
      streamer: "StreamNepal Gaming",
    },
    
  ];

  // Platform data for subscription modal
  const socialPlatforms = [
    {
      name: "YouTube",
      url: "https://www.youtube.com/@MRSADY",
      color: "from-red-500 to-red-600",
      icon: "📺",
      description: "Watch live tournaments & highlights",
      followers: "6.24K",
    },
    {
      name: "Facebook",
      url: "https://facebook.com/mrsady",
      color: "from-blue-500 to-blue-600",
      icon: "📘",
      description: "Join our gaming community",
      followers: "174",
    },
    // {
    //   name: "TikTok",
    //   url: "https://tiktok.com/@streamnepal",
    //   color: "from-pink-500 to-pink-600",
    //   icon: "🎵",
    //   description: "Gaming highlights & clips",
    //   followers: "15.2K",
    // },
    // {
    //   name: "Instagram",
    //   url: "https://instagram.com/streamnepal",
    //   color: "from-purple-400 to-pink-500",
    //   icon: "📸",
    //   description: "Behind the scenes content",
    //   followers: "9.8K",
    // },
    {
      name: "Discord",
      url: "https://discord.gg/tzNm6t3jZa",
      color: "from-indigo-500 to-purple-600",
      icon: "💬",
      description: "Chat with gamers",
      followers: "100",
    },
  ];

  const LiveIndicator = () => (
    <motion.div
      className="flex items-center space-x-2 bg-red-500/20 backdrop-blur-sm rounded-full px-3 py-1 border border-red-500/30"
      animate={{
        boxShadow: [
          "0 0 0 0 rgba(239, 68, 68, 0.4)",
          "0 0 0 10px rgba(239, 68, 68, 0)",
          "0 0 0 0 rgba(239, 68, 68, 0)",
        ],
      }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <motion.div
        className="w-2 h-2 bg-red-500 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [1, 0.7, 1],
        }}
        transition={{ duration: 1, repeat: Infinity }}
      />
      <span className="text-red-400 font-bold text-sm">LIVE</span>
    </motion.div>
  );

  const UpcomingIndicator = ({ isSpecial }: { isSpecial?: boolean }) => (
    <motion.div
      className={`flex items-center space-x-2 backdrop-blur-sm rounded-full px-3 py-1 border ${
        isSpecial
          ? "bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-yellow-500/30"
          : "bg-blue-500/20 border-blue-500/30"
      }`}
      animate={
        isSpecial
          ? {
              boxShadow: [
                "0 0 0 0 rgba(251, 191, 36, 0.6)",
                "0 0 0 15px rgba(251, 191, 36, 0)",
                "0 0 0 0 rgba(251, 191, 36, 0)",
              ],
            }
          : {}
      }
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      {isSpecial && (
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Star className="w-3 h-3 text-yellow-400 fill-current" />
        </motion.div>
      )}
      <span
        className={`font-bold text-sm ${
          isSpecial ? "text-yellow-400" : "text-blue-400"
        }`}
      >
        {isSpecial ? "SPECIAL EVENT" : "UPCOMING"}
      </span>
    </motion.div>
  );

  return (
    <section
      ref={ref}
      id="streaming"
      className="relative py-20 overflow-hidden bg-gradient-to-b from-slate-900 to-black"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Streaming Wave Animation */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage: `
              linear-gradient(45deg, transparent 30%, rgba(34, 211, 238, 0.1) 50%, transparent 70%),
              linear-gradient(-45deg, transparent 30%, rgba(168, 85, 247, 0.1) 50%, transparent 70%)
            `,
            backgroundSize: "400% 400%",
          }}
        />

        {/* Floating Stream Elements */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {i % 3 === 0 ? (
              <Radio className="w-4 h-4 text-cyan-400" />
            ) : i % 3 === 1 ? (
              <Video className="w-4 h-4 text-purple-400" />
            ) : (
              <TrendingUp className="w-4 h-4 text-pink-400" />
            )}
          </motion.div>
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_50%,black,transparent)]" />
        </div>
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
            <motion.div
              className="w-16 h-16 bg-gradient-to-br from-red-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4 relative"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(239, 68, 68, 0.4)",
                  "0 0 0 20px rgba(239, 68, 68, 0)",
                  "0 0 0 0 rgba(239, 68, 68, 0)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Radio className="w-8 h-8 text-white" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-red-500 to-purple-500 rounded-2xl blur-lg"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black">
              <span className="bg-gradient-to-r from-red-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                LIVE STREAMS
              </span>
            </h2>
          </motion.div>

          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Watch epic gaming tournaments live across all platforms. Experience
            the thrill, cheer for your favorite teams, and never miss a moment!
          </motion.p>
        </motion.div>

        {/* Live Streams Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {liveStreams.map((stream, index) => (
            <motion.div
              key={stream.id}
              className="group relative w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-md"
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{
                delay: index * 0.2 + 0.5,
                duration: 0.8,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Special Effect for Upcoming Special Stream */}
              {stream.isSpecial && (
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-yellow-500/30 via-orange-500/30 to-pink-500/30 rounded-3xl blur-2xl"
                  animate={{
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}

              {/* Card Glow Effect */}
              <div
                className={`absolute inset-0 rounded-3xl blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100 ${
                  stream.status === "live"
                    ? "bg-gradient-to-r from-red-500/20 via-purple-500/20 to-cyan-500/20"
                    : stream.isSpecial
                    ? "bg-gradient-to-r from-yellow-500/30 via-orange-500/30 to-pink-500/30"
                    : "bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20"
                }`}
              />

              {/* Main Card */}
              <div className="relative bg-black/50 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden group-hover:border-white/30 transition-all duration-300">
                {/* Stream Thumbnail */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={stream.thumbnail}
                    alt={stream.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    {stream.status === "live" ? (
                      <LiveIndicator />
                    ) : (
                      <UpcomingIndicator isSpecial={stream.isSpecial} />
                    )}
                  </div>

                  {/* Viewer Count / Expected Viewers */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-2">
                      <Eye className="w-4 h-4 text-cyan-400" />
                      <span className="text-white text-sm font-semibold">
                        {stream.status === "live"
                          ? stream.viewers
                          : stream.expectedViewers}
                      </span>
                    </div>
                  </div>

                  {/* Duration / Scheduled Time */}
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-purple-400" />
                      <span className="text-white text-sm font-semibold">
                        {stream.status === "live"
                          ? stream.duration
                          : stream.scheduledTime}
                      </span>
                    </div>
                  </div>

                  {/* Play Button Overlay */}
                  {stream.status === "live" && (
                    <motion.div
                      className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.1 }}
                    >
                      <motion.div
                        className="w-16 h-16 bg-red-500/80 backdrop-blur-sm rounded-full flex items-center justify-center"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Play className="w-8 h-8 text-white ml-1" />
                      </motion.div>
                    </motion.div>
                  )}

                  {/* Special Effect Sparkles for Special Stream */}
                  {stream.isSpecial && (
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute text-yellow-400"
                          style={{
                            left: `${20 + Math.random() * 60}%`,
                            top: `${20 + Math.random() * 60}%`,
                          }}
                          animate={{
                            scale: [0, 1, 0],
                            rotate: [0, 180, 360],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.4,
                          }}
                        >
                          <Sparkles className="w-4 h-4" />
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Stream Title */}
                  <motion.h3
                    className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.2 + 0.9 }}
                  >
                    {stream.title}
                  </motion.h3>

                  <motion.div
                    className="flex items-center justify-between text-sm text-gray-400 mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.2 + 1 }}
                  >
                    <span>{stream.game}</span>
                    <span>{stream.streamer}</span>
                  </motion.div>

                  {/* Platform Links */}
                  <motion.div
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.2 + 1.1 }}
                  >
                    {stream.platforms.map((platform, platformIndex) => (
                      <motion.a
                        key={platform.name}
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group/btn relative px-3 py-2 bg-gradient-to-r ${platform.color} rounded-lg text-white text-sm font-semibold flex items-center space-x-2 overflow-hidden`}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          delay: index * 0.2 + 1.3 + platformIndex * 0.1,
                        }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/20"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "0%" }}
                          transition={{
                            type: "tween",
                            ease: "easeOut",
                            duration: 0.3,
                          }}
                        />
                        <span className="relative z-10 flex items-center space-x-1">
                          <span>{platform.icon}</span>
                          <span>{platform.name}</span>
                          <ExternalLink className="w-3 h-3" />
                        </span>
                      </motion.a>
                    ))}
                  </motion.div>
                </div>

                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-3xl opacity-0"
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
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.p
            className="text-gray-400 mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.7 }}
          >
            Follow us on all platforms to never miss a live stream!
          </motion.p>

          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-red-500 to-purple-600 rounded-xl font-bold text-white overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
            />
            <span className="relative z-10 flex items-center gap-2">
              <Radio className="w-5 h-5" />
              Subscribe to All Channels
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Subscription Modal */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsModalOpen(false)}
        >
          {/* Modal Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />

          {/* Modal Content */}
          <motion.div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-hidden"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 0.6, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Glassmorphism Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-gray-900/40 backdrop-blur-xl border border-white/20 rounded-3xl" />

            {/* Glowing Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl" />

            {/* Content Container */}
            <div className="relative p-8">
              {/* Close Button */}
              <motion.button
                className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 transition-colors"
                onClick={() => setIsModalOpen(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5 text-white" />
              </motion.button>

              {/* Modal Header */}
              <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-red-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 relative"
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(239, 68, 68, 0.4)",
                      "0 0 0 20px rgba(239, 68, 68, 0)",
                      "0 0 0 0 rgba(239, 68, 68, 0)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Radio className="w-8 h-8 text-white" />
                </motion.div>

                <h2 className="text-3xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                  Follow StreamNepal
                </h2>
                <p className="text-gray-300 text-lg">
                  Connect with us on all platforms for exclusive content!
                </p>
              </motion.div>

              {/* Platforms Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-96 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                {socialPlatforms.map((platform, index) => (
                  <motion.a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Gradient Background */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${platform.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                      whileHover={{ opacity: 0.2 }}
                    />

                    {/* Content */}
                    <div className="relative z-10 flex items-center space-x-4">
                      {/* Platform Icon */}
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${platform.color} rounded-xl flex items-center justify-center text-xl`}
                      >
                        {platform.icon}
                      </div>

                      {/* Platform Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="text-white font-bold text-lg truncate">
                            {platform.name}
                          </h3>
                          <div className="flex items-center space-x-1">
                            <span className="text-xs text-gray-400 font-semibold">
                              {platform.followers}
                            </span>
                            <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-white transition-colors" />
                          </div>
                        </div>
                        <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                          {platform.description}
                        </p>
                      </div>
                    </div>

                    {/* Hover Effect Line */}
                    <motion.div
                      className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${platform.color} rounded-full`}
                      initial={{ width: "0%" }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  </motion.a>
                ))}
              </div>

              {/* Modal Footer */}
              <motion.div
                className="text-center mt-8 pt-6 border-t border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <p className="text-gray-400 text-sm mb-4">
                  🎮 Join 50K+ gamers in our community!
                </p>
                <motion.button
                  className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 rounded-xl font-semibold text-white flex items-center gap-2 mx-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    // Open all social links
                    socialPlatforms.forEach((platform) => {
                      window.open(platform.url, "_blank");
                    });
                  }}
                >
                  <Sparkles className="w-4 h-4" />
                  Follow All Platforms
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default LiveStreamingSection;
