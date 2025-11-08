"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Facebook,
  Youtube,
  Gamepad2,
  Trophy,
  Users,
  Zap,
  ChevronRight,
  Heart,
  ArrowUp,
  Sparkles,
  Radio,
  Shield,
  Star,
  X,
  Clock,
  MessageCircle,
  CheckCircle,
  AlertCircle,
  Loader2,
  Instagram,
} from "lucide-react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [isLiveModalOpen, setIsLiveModalOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Newsletter state
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{
    show: boolean;
    type: "success" | "error";
    message: string;
  }>({ show: false, type: "success", message: "" });

  // Tournament countdown state
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set your next tournament date here (format: "YYYY-MM-DD HH:mm:ss")
  const nextTournamentDate = new Date("2025-11-14 09:00:00").getTime();

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = nextTournamentDate - now;

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [nextTournamentDate]);

  // Auto-hide toast after 5 seconds
  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        setToast({ ...toast, show: false });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [toast.show]);

  // Email validation
  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Newsletter submission handler
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!email.trim()) {
      setToast({
        show: true,
        type: "error",
        message: "🎮 GG! You forgot to enter your email, player!",
      });
      return;
    }

    if (!validateEmail(email)) {
      setToast({
        show: true,
        type: "error",
        message: "⚠️ Invalid email format! Check your setup, gamer!",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call (replace with your actual API endpoint)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Success
      setToast({
        show: true,
        type: "success",
        message: "🏆 VICTORY! Welcome to the champions league, warrior!",
      });
      setEmail("");
    } catch (error) {
      // Error
      setToast({
        show: true,
        type: "error",
        message: "💥 Connection lost! Respawn and try again, soldier!",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Check if we're on the home page
  const isHomePage = pathname === "/";

  const quickLinks = [
    { name: "Home", href: "#", sectionId: null },
    { name: "Services", href: "#services", sectionId: "services" },
    { name: "Tournaments", href: "#tournaments", sectionId: "tournaments" },
    { name: "Live Streams", href: "#streaming", sectionId: "streaming" },
    { name: "Contact", href: "#contact", sectionId: "contact" },
  ];

  const services = [
    {
      name: "PUBG Mobile Tournaments",
      href: "#tournaments",
      sectionId: "tournaments",
    },
    {
      name: "Free Fire Championships",
      href: "#tournaments",
      sectionId: "tournaments",
    },
    {
      name: "Live Streaming Support",
      href: "#streaming",
      sectionId: "streaming",
    },
    {
      name: "Tournament Organization",
      href: "#services",
      sectionId: "services",
    },
  ];

  // Handle navigation based on current page
  const handleNavClick = (item: {
    name: string;
    href: string;
    sectionId: string | null;
  }) => {
    if (isHomePage) {
      // If on home page, use smooth scroll to section
      if (item.sectionId) {
        const element = document.getElementById(item.sectionId);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      } else {
        // Home link - scroll to top
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    } else {
      // If on tournament page, navigate to home and then scroll
      if (item.sectionId) {
        router.push(`/#${item.sectionId}`);
      } else {
        router.push("/");
      }
    }
  };

  const socialPlatforms = [
    {
      name: "YouTube",
      icon: Youtube,
      href: "https://www.youtube.com/@MRSADY",
      color: "from-red-500 to-red-600",
      followers: "6.24K",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/MRSADDDY",
      color: "from-blue-500 to-blue-600",
      followers: "174+",
    },
    {
      name: "Discord",
      icon: MessageCircle,
      href: "https://discord.gg/tzNm6t3jZa",
      color: "from-indigo-500 to-purple-600",
      followers: "100+",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/mr_sady_2.0/",
      color: "from-pink-500 to-purple-500",
      followers: "75+",
    },
  ];

  const stats = [
    { label: "Active Players", value: "1.6K+", icon: Users },
    { label: "Tournaments Hosted", value: "10+", icon: Trophy },
    { label: "Live Streams", value: "1K+", icon: Radio },
    { label: "Community Members", value: "20+", icon: Shield },
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
                    className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center mr-3 p-2"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Image
                      src="/logo.png"
                      alt="StreamNepal Logo"
                      width={56}
                      height={56}
                      className="object-contain rounded-lg"
                    />
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
                    <span className="text-sm">streamnepal001@gmail.com</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <Phone className="w-4 h-4 mr-3" />
                    <span className="text-sm">+977-9820744881</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <MapPin className="w-4 h-4 mr-3" />
                    <span className="text-sm">Biratnagar, Nepal</span>
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
                      <motion.button
                        onClick={() => handleNavClick(link)}
                        className="flex items-center text-gray-400 hover:text-cyan-400 transition-all duration-300 group cursor-pointer w-full text-left"
                        whileHover={{ x: 5 }}
                      >
                        <ChevronRight className="w-4 h-4 mr-2 group-hover:text-cyan-400 transition-colors" />
                        <span>{link.name}</span>
                      </motion.button>
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
                      <motion.button
                        onClick={() => handleNavClick(service)}
                        className="flex items-center text-gray-400 hover:text-purple-400 transition-all duration-300 group cursor-pointer w-full text-left"
                        whileHover={{ x: 5 }}
                      >
                        <ChevronRight className="w-4 h-4 mr-2 group-hover:text-purple-400 transition-colors" />
                        <span className="text-sm">{service.name}</span>
                      </motion.button>
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
                <motion.form
                  onSubmit={handleNewsletterSubmit}
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isSubmitting}
                      className="flex-1 bg-black/50 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors text-sm min-w-0 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg px-4 py-2 text-white flex items-center justify-center gap-2 sm:flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                      whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span className="sm:hidden">Joining...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span className="sm:hidden">Subscribe</span>
                        </>
                      )}
                    </motion.button>
                  </div>
                </motion.form>
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
                  <a
                    href="https://pramodlaha.com.np"
                    target="_blank"
                    className="text-cyan-400 font-semibold"
                  >
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
            <span className="text-red-400 text-xs font-bold">LIVE</span>
          </motion.div>

          {/* Tournament Countdown */}
          <motion.div
            className="bg-black/50 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-3 text-center min-w-[160px]"
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-cyan-400 text-xs font-semibold mb-2">
              Next Tournament
            </p>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <p className="text-white text-lg font-bold">{countdown.days}</p>
                <p className="text-gray-400 text-xs">Days</p>
              </div>
              <div>
                <p className="text-white text-lg font-bold">
                  {countdown.hours}
                </p>
                <p className="text-gray-400 text-xs">Hrs</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div>
                <p className="text-white text-base font-bold">
                  {countdown.minutes}
                </p>
                <p className="text-gray-400 text-xs">Min</p>
              </div>
              <div>
                <p className="text-white text-base font-bold">
                  {countdown.seconds}
                </p>
                <p className="text-gray-400 text-xs">Sec</p>
              </div>
            </div>
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
            <span className="text-white text-xs font-bold">2</span>
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
                    <span className="text-white font-semibold">2</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-gray-300">
                      <span>PMWC</span>
                      <span className="text-cyan-400">2K viewers</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>FF Warzone</span>
                      <span className="text-cyan-400">1K viewers</span>
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
                    <div className="grid grid-cols-4 gap-2 mb-2">
                      <div>
                        <p className="text-white text-xl font-bold">
                          {countdown.days}
                        </p>
                        <p className="text-gray-400 text-xs">Days</p>
                      </div>
                      <div>
                        <p className="text-white text-xl font-bold">
                          {countdown.hours}
                        </p>
                        <p className="text-gray-400 text-xs">Hrs</p>
                      </div>
                      <div>
                        <p className="text-white text-xl font-bold">
                          {countdown.minutes}
                        </p>
                        <p className="text-gray-400 text-xs">Min</p>
                      </div>
                      <div>
                        <p className="text-white text-xl font-bold">
                          {countdown.seconds}
                        </p>
                        <p className="text-gray-400 text-xs">Sec</p>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm">
                      PUBG Mobile Warriors Cup 2.0
                    </p>
                    <p className="text-gray-500 text-xs mt-1">
                      14 Nov, 9:00 AM NPT
                    </p>
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <motion.a
                    href="https://www.youtube.com/@MRSADY/streams"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-red-500 to-red-600 rounded-xl py-3 px-4 text-white font-semibold text-sm text-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Watch Live
                  </motion.a>
                  <motion.a
                    href="https://wa.me/9779820744881?text=Hi%20Stream%20Nepal!%20I%20would%20like%20to%20know%20more%20about%20upcoming%20tournaments."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl py-3 px-4 text-white font-semibold text-sm text-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Contact
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Toast Notification */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            className="fixed top-8 right-8 z-[100] max-w-md"
            initial={{ opacity: 0, y: -50, x: 100, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, x: 100, scale: 0.5 }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 300,
            }}
          >
            <motion.div
              className={`relative backdrop-blur-xl border-2 rounded-2xl p-4 shadow-2xl overflow-hidden ${
                toast.type === "success"
                  ? "bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-400/50"
                  : "bg-gradient-to-r from-red-500/20 to-orange-500/20 border-red-400/50"
              }`}
              animate={{
                boxShadow:
                  toast.type === "success"
                    ? [
                        "0 0 0 0 rgba(34, 197, 94, 0.4)",
                        "0 0 0 20px rgba(34, 197, 94, 0)",
                        "0 0 0 0 rgba(34, 197, 94, 0)",
                      ]
                    : [
                        "0 0 0 0 rgba(239, 68, 68, 0.4)",
                        "0 0 0 20px rgba(239, 68, 68, 0)",
                        "0 0 0 0 rgba(239, 68, 68, 0)",
                      ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {/* Animated Background Effect */}
              <motion.div
                className={`absolute inset-0 ${
                  toast.type === "success"
                    ? "bg-gradient-to-r from-green-400/10 via-emerald-400/10 to-cyan-400/10"
                    : "bg-gradient-to-r from-red-400/10 via-orange-400/10 to-yellow-400/10"
                }`}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ backgroundSize: "200% 100%" }}
              />

              {/* Floating Particles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute ${
                      toast.type === "success"
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  >
                    {toast.type === "success" ? (
                      <Trophy className="w-3 h-3" />
                    ) : (
                      <Zap className="w-3 h-3" />
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Content */}
              <div className="relative z-10 flex items-start gap-3">
                {/* Icon */}
                <motion.div
                  className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${
                    toast.type === "success"
                      ? "bg-gradient-to-br from-green-400 to-emerald-500"
                      : "bg-gradient-to-br from-red-400 to-orange-500"
                  }`}
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {toast.type === "success" ? (
                    <CheckCircle className="w-6 h-6 text-white" />
                  ) : (
                    <AlertCircle className="w-6 h-6 text-white" />
                  )}
                </motion.div>

                {/* Message */}
                <div className="flex-1 min-w-0">
                  <motion.h4
                    className={`font-bold mb-1 ${
                      toast.type === "success"
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {toast.type === "success" ? "VICTORY ROYALE!" : "DEFEAT!"}
                  </motion.h4>
                  <motion.p
                    className="text-white text-sm"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {toast.message}
                  </motion.p>
                </div>

                {/* Close Button */}
                <motion.button
                  onClick={() => setToast({ ...toast, show: false })}
                  className="flex-shrink-0 w-6 h-6 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-4 h-4 text-white" />
                </motion.button>
              </div>

              {/* Progress Bar */}
              <motion.div
                className={`absolute bottom-0 left-0 h-1 ${
                  toast.type === "success"
                    ? "bg-gradient-to-r from-green-400 to-emerald-500"
                    : "bg-gradient-to-r from-red-400 to-orange-500"
                }`}
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 5, ease: "linear" }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
