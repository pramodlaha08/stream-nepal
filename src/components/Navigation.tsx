"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import {
  Menu,
  X,
  Home,
  Trophy,
  Headphones,
  Info,
  Phone,
  Gamepad2,
} from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Check if we're on the home page
  const isHomePage = pathname === "/";

  // Handle scrolling to section when navigating from other pages
  useEffect(() => {
    if (isHomePage && window.location.hash) {
      const sectionId = window.location.hash.replace("#", "");
      // Small delay to ensure page is loaded
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  }, [isHomePage, pathname]);

  const navItems = [
    { name: "Home", icon: Home, href: "#", sectionId: null },
    {
      name: "Tournaments",
      icon: Trophy,
      href: "#tournaments",
      sectionId: "tournaments",
    },
    { name: "Games", icon: Gamepad2, href: "#games", sectionId: "games" },
    {
      name: "Streaming",
      icon: Headphones,
      href: "#streaming",
      sectionId: "streaming",
    },
    { name: "Services", icon: Info, href: "#services", sectionId: "services" },
    { name: "Contact", icon: Phone, href: "#contact", sectionId: "contact" },
  ];

  // Handle navigation based on current page
  const handleNavClick = (item: (typeof navItems)[0]) => {
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
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-3"
            whileHover={{
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              borderColor: "rgba(34, 211, 238, 0.3)",
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between">
              {/* Logo */}
              <motion.div
                className="flex items-center space-x-2 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() =>
                  handleNavClick({
                    name: "Home",
                    icon: Home,
                    href: "#",
                    sectionId: null,
                  })
                }
              >
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                  <Gamepad2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  StreamNepal
                </span>
              </motion.div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-1">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavClick(item)}
                    className="group relative px-4 py-2 rounded-xl text-gray-300 hover:text-white transition-colors overflow-hidden cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10 flex items-center space-x-2">
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </span>
                  </motion.button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-lg flex items-center justify-center text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
              className="absolute right-0 top-0 h-full w-80 bg-black/90 backdrop-blur-xl border-l border-white/10"
            >
              <div className="flex flex-col pt-20 px-6">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavClick(item)}
                    className="group flex items-center space-x-4 px-4 py-4 rounded-xl text-gray-300 hover:text-white transition-colors cursor-pointer w-full text-left"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    whileHover={{
                      scale: 1.05,
                      x: 10,
                      backgroundColor: "rgba(34, 211, 238, 0.1)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-lg flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-purple-600/30 transition-colors">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className="font-medium">{item.name}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
