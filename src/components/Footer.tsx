"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Facebook,
  Youtube,
  Twitter,
  Instagram,
  Gamepad2,
  Trophy,
  Users,
  Zap,
  ChevronRight,
  ExternalLink,
  Heart,
  ArrowUp,
  Sparkles,
  Radio,
  Shield,
  Star,
  X,
  Clock,
} from "lucide-react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [isLiveModalOpen, setIsLiveModalOpen] = useState(false);

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "Tournaments", href: "#tournaments" },
    { name: "Games", href: "#games" },
    { name: "Live Streams", href: "#streams" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "PUBG Mobile Tournaments", href: "#pubg" },
    { name: "Free Fire Championships", href: "#freefire" },
    { name: "Live Streaming Support", href: "#streaming" },
    { name: "Tournament Organization", href: "#tournaments" },
    // { name: "Gaming Community", href: "#community" },
    // { name: "Esports Coaching", href: "#coaching" },
  ];

  const socialPlatforms = [
    {
      name: "YouTube",
      icon: Youtube,
      href: "https://youtube.com/@streamnepal",
      color: "from-red-500 to-red-600",
      followers: "12.5K",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://facebook.com/streamnepal",
      color: "from-blue-500 to-blue-600",
      followers: "8.3K",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com/streamnepal",
      color: "from-cyan-400 to-blue-500",
      followers: "5.7K",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/streamnepal",
      color: "from-pink-500 to-purple-500",
      followers: "9.8K",
    },
  ];

  const stats = [
    { label: "Active Players", value: "50K+", icon: Users },
    { label: "Tournaments Hosted", value: "200+", icon: Trophy },
    { label: "Live Streams", value: "1K+", icon: Radio },
    { label: "Community Members", value: "25K+", icon: Shield },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer ref={ref} className="relative bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Floating Gaming Elements */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-cyan-400/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            {i % 4 === 0 && <Gamepad2 className="w-6 h-6" />}
            {i % 4 === 1 && <Trophy className="w-5 h-5" />}
            {i % 4 === 2 && <Zap className="w-4 h-4" />}
            {i % 4 === 3 && <Star className="w-4 h-4" />}
          </motion.div>
        ))}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-slate-900/50 to-transparent" />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Stats Section */}
        <motion.div
          className="border-b border-white/10 py-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(34, 211, 238, 0)",
                        "0 0 0 10px rgba(34, 211, 238, 0.1)",
                        "0 0 0 0 rgba(34, 211, 238, 0)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Main Footer Links */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
              {/* Brand Section */}
              <motion.div
                className="lg:col-span-1"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <motion.div
                  className="flex items-center mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center mr-3"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Gamepad2 className="w-6 h-6 text-white" />
                  </motion.div>
                  <h2 className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    StreamNepal
                  </h2>
                </motion.div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  Nepal&apos;s premier esports tournament organizer. We bring
                  you the most exciting PUBG Mobile and Free Fire championships
                  with professional live streaming support.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <motion.div
                    className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <Mail className="w-4 h-4 mr-3" />
                    <span className="text-sm">contact@streamnepal.com</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <Phone className="w-4 h-4 mr-3" />
                    <span className="text-sm">+977-9876543210</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <MapPin className="w-4 h-4 mr-3" />
                    <span className="text-sm">Kathmandu, Nepal</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <h3 className="text-xl font-bold text-white mb-6 relative">
                  Quick Links
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "60px" } : {}}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  />
                </h3>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    >
                      <motion.a
                        href={link.href}
                        className="flex items-center text-gray-400 hover:text-cyan-400 transition-all duration-300 group"
                        whileHover={{ x: 5 }}
                      >
                        <ChevronRight className="w-4 h-4 mr-2 group-hover:text-cyan-400 transition-colors" />
                        <span>{link.name}</span>
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Services */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <h3 className="text-xl font-bold text-white mb-6 relative">
                  Our Services
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-transparent rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "60px" } : {}}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  />
                </h3>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <motion.li
                      key={service.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                    >
                      <motion.a
                        href={service.href}
                        className="flex items-center text-gray-400 hover:text-purple-400 transition-all duration-300 group"
                        whileHover={{ x: 5 }}
                      >
                        <ChevronRight className="w-4 h-4 mr-2 group-hover:text-purple-400 transition-colors" />
                        <span className="text-sm">{service.name}</span>
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Social Media & Newsletter */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <h3 className="text-xl font-bold text-white mb-6 relative">
                  Stay Connected
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-pink-400 to-transparent rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "60px" } : {}}
                    transition={{ delay: 1, duration: 0.8 }}
                  />
                </h3>

                {/* Social Media Links */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {socialPlatforms.map((platform, index) => (
                    <motion.a
                      key={platform.name}
                      href={platform.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative p-3 bg-gradient-to-br ${platform.color} rounded-xl overflow-hidden`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "0%" }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="relative z-10 flex items-center justify-between">
                        <platform.icon className="w-5 h-5 text-white" />
                        <div className="text-right">
                          <p className="text-xs text-white/90 font-semibold">
                            {platform.name}
                          </p>
                          <p className="text-xs text-white/70">
                            {platform.followers}
                          </p>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Newsletter Signup */}
                <motion.div
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  whileHover={{ borderColor: "rgba(255, 255, 255, 0.3)" }}
                >
                  <div className="flex items-center mb-3">
                    <Sparkles className="w-5 h-5 text-cyan-400 mr-2" />
                    <h4 className="text-white font-semibold">
                      Tournament Updates
                    </h4>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">
                    Get notified about upcoming tournaments and live streams!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-2">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="flex-1 bg-black/50 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors text-sm min-w-0"
                    />
                    <motion.button
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg px-4 py-2 text-white flex items-center justify-center gap-2 sm:flex-shrink-0"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Send className="w-4 h-4" />
                      <span className="sm:hidden">Subscribe</span>
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-white/10 py-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <div className="flex flex-col sm:flex-row items-center text-gray-400 text-sm text-center sm:text-left">
                <div className="flex items-center">
                  <span className="whitespace-nowrap">© 2025 StreamNepal.</span>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="mx-1"
                  >
                    <Heart className="w-4 h-4 text-red-500 fill-current" />
                  </motion.div>
                </div>
                <span className="mt-1 sm:mt-0 sm:ml-1">
                  Designed and Managed By{" "}
                  <a href="https://pramodlaha.com.np" target="_blank" className="text-cyan-400 font-semibold">
                    Pramod Laha
                  </a>
                </span>
              </div>

              {/* Legal Links */}
              <div className="flex items-center gap-6 text-sm">
                <motion.a
                  href="#privacy"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                  whileHover={{ y: -2 }}
                >
                  Privacy Policy
                </motion.a>
                <motion.a
                  href="#terms"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                  whileHover={{ y: -2 }}
                >
                  Terms of Service
                </motion.a>
                <motion.a
                  href="#cookies"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                  whileHover={{ y: -2 }}
                >
                  Cookie Policy
                </motion.a>
              </div>

              {/* Back to Top */}
              <motion.button
                onClick={scrollToTop}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full p-2 text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-shadow"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(34, 211, 238, 0.4)",
                    "0 0 0 10px rgba(34, 211, 238, 0)",
                    "0 0 0 0 rgba(34, 211, 238, 0)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <ArrowUp className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Action Elements - Desktop */}
      <div className="absolute top-8 right-8 hidden lg:block">
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 2, duration: 1 }}
        >
          {/* Live Status Indicator */}
          <motion.div
            className="bg-black/50 backdrop-blur-sm border border-red-500/30 rounded-full px-3 py-1 flex items-center gap-2"
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
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-red-400 text-xs font-bold">3 LIVE</span>
          </motion.div>

          {/* Tournament Countdown */}
          <motion.div
            className="bg-black/50 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-3 text-center min-w-[120px]"
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-cyan-400 text-xs font-semibold mb-1">
              Next Tournament
            </p>
            <p className="text-white text-lg font-bold">2:45:30</p>
            <p className="text-gray-400 text-xs">Hours Left</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile Floating Action Button */}
      <div className="fixed bottom-6 right-4 z-50 lg:hidden">
        <motion.button
          onClick={() => setIsLiveModalOpen(true)}
          className="relative bg-gradient-to-r from-red-500 to-purple-600 rounded-full w-14 h-14 flex items-center justify-center shadow-lg shadow-red-500/25"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(239, 68, 68, 0.4)",
              "0 0 0 20px rgba(239, 68, 68, 0)",
              "0 0 0 0 rgba(239, 68, 68, 0)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Radio className="w-6 h-6 text-white" />

          {/* Live Badge */}
          <motion.div
            className="absolute -top-2 -right-2 bg-red-500 rounded-full w-6 h-6 flex items-center justify-center"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-white text-xs font-bold">3</span>
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Live Status Modal */}
      {isLiveModalOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center p-4 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsLiveModalOpen(false)}
        >
          {/* Modal Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />

          {/* Modal Content */}
          <motion.div
            className="relative w-full max-w-sm"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Glassmorphism Background */}
            <div className="bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl">
              {/* Close Button */}
              <motion.button
                className="absolute top-4 right-4 w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 transition-colors"
                onClick={() => setIsLiveModalOpen(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-4 h-4 text-white" />
              </motion.button>

              {/* Header */}
              <div className="text-center mb-6">
                <motion.div
                  className="w-12 h-12 bg-gradient-to-br from-red-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-3"
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(239, 68, 68, 0.4)",
                      "0 0 0 15px rgba(239, 68, 68, 0)",
                      "0 0 0 0 rgba(239, 68, 68, 0)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Radio className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-1">
                  Live Status
                </h3>
                <p className="text-gray-400 text-sm">Current gaming activity</p>
              </div>

              {/* Live Streams */}
              <div className="space-y-4">
                {/* Live Now */}
                <motion.div
                  className="bg-gradient-to-r from-red-500/20 to-transparent border border-red-500/30 rounded-2xl p-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <motion.div
                        className="w-3 h-3 bg-red-500 rounded-full"
                        animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                      <span className="text-red-400 font-bold text-sm">
                        LIVE NOW
                      </span>
                    </div>
                    <span className="text-white font-semibold">3</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-gray-300">
                      <span>PUBG Championship</span>
                      <span className="text-cyan-400">15.2K viewers</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Free Fire Tournament</span>
                      <span className="text-cyan-400">8.7K viewers</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Community Stream</span>
                      <span className="text-cyan-400">2.1K viewers</span>
                    </div>
                  </div>
                </motion.div>

                {/* Next Tournament */}
                <motion.div
                  className="bg-gradient-to-r from-cyan-500/20 to-transparent border border-cyan-500/30 rounded-2xl p-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-4 h-4 text-cyan-400" />
                    <span className="text-cyan-400 font-bold text-sm">
                      NEXT TOURNAMENT
                    </span>
                  </div>
                  <div className="text-center">
                    <p className="text-white text-2xl font-bold mb-1">
                      2:45:30
                    </p>
                    <p className="text-gray-400 text-sm">
                      Valorant Pro League Finals
                    </p>
                    <p className="text-gray-500 text-xs mt-1">
                      Expected: 25K+ viewers
                    </p>
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <motion.button
                    className="flex-1 bg-gradient-to-r from-red-500 to-red-600 rounded-xl py-3 px-4 text-white font-semibold text-sm"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Watch Live
                  </motion.button>
                  <motion.button
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl py-3 px-4 text-white font-semibold text-sm"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Set Reminder
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </footer>
  );
};

export default Footer;
