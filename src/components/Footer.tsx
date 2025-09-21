"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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
} from "lucide-react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

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
    { name: "Gaming Community", href: "#community" },
    { name: "Esports Coaching", href: "#coaching" },
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
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="flex-1 bg-black/50 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors text-sm"
                    />
                    <motion.button
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg px-4 py-2 text-white"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Send className="w-4 h-4" />
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
              <div className="flex items-center text-gray-400 text-sm">
                <span>© 2025 StreamNepal. Made with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mx-1"
                >
                  <Heart className="w-4 h-4 text-red-500 fill-current" />
                </motion.div>
                <span>for the gaming community</span>
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

      {/* Floating Action Elements */}
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
    </footer>
  );
};

export default Footer;
