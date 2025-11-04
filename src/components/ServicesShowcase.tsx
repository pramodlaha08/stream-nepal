"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Trophy,
  Users,
  Video,
  Target,
  Headphones,
  Gamepad2,
} from "lucide-react";

const ServicesShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      title: "PUBG Tournaments",
      subtitle: "Battle Royale Excellence",
      description:
        "Competitive PUBG tournaments with professional organization, live streaming, and prize pools that attract Nepal's top gamers.",
      icon: Target,
      color: "from-orange-500 to-red-600",
      features: [
        "Professional Organization",
        "Live Broadcasting",
        "Prize Pools",
        "Ranking System",
      ],
      image: "🎯",
    },
    {
      title: "FreeFire Esports",
      subtitle: "Mobile Gaming Revolution",
      description:
        "High-energy FreeFire tournaments designed for mobile gaming enthusiasts with seamless tournament management.",
      icon: Gamepad2,
      color: "from-purple-500 to-pink-600",
      features: [
        "Mobile Optimized",
        "Real-time Updates",
        "Community Building",
        "Pro Leagues",
      ],
      image: "🎮",
    },
    {
      title: "Live Stream Support",
      subtitle: "Technical Excellence",
      description:
        "Complete technical support for live streaming events with professional setup, monitoring, and technical assistance.",
      icon: Video,
      color: "from-cyan-500 to-blue-600",
      features: [
        "24/7 Support",
        "Professional Setup",
        "Multi-platform Streaming",
        "Technical Monitoring",
      ],
      image: "📺",
    },
  ];

  const achievements = [
    { number: "6+", label: "Tournaments Organized", icon: Trophy },
    { number: "1.5K+", label: "Active Gamers", icon: Users },
    { number: "10+", label: "Successful Streams", icon: Video },
    { number: "24/7", label: "Technical Support", icon: Headphones },
  ];

  return (
    <section
      ref={ref}
      id="services"
      className="relative py-20 overflow-hidden bg-gradient-to-b from-slate-900 to-black"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(255,255,255,0.05)_49%,rgba(255,255,255,0.05)_51%,transparent_52%)] bg-[size:20px_20px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl md:text-7xl font-black mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              OUR SERVICES
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            From organizing elite gaming tournaments to providing professional
            live streaming support, we&apos;re your complete esports solution in
            Nepal.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
              whileHover={{ scale: 1.02, y: -10 }}
            >
              {/* Card Background with Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-200 opacity-0 group-hover:opacity-100" />

              <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-full group-hover:border-white/20 transition-all duration-200">
                {/* Service Icon & Image */}
                <div className="flex items-center justify-between mb-6">
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="text-4xl">{service.image}</div>
                </div>

                {/* Service Title */}
                <motion.h3
                  className="text-2xl font-bold text-white mb-2"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.8 }}
                >
                  {service.title}
                </motion.h3>

                <motion.p
                  className={`text-sm bg-gradient-to-r ${service.color} bg-clip-text text-transparent font-semibold mb-4`}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: index * 0.2 + 1 }}
                >
                  {service.subtitle}
                </motion.p>

                {/* Description */}
                <motion.p
                  className="text-gray-300 mb-6"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: index * 0.2 + 1.2 }}
                >
                  {service.description}
                </motion.p>

                {/* Features */}
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2 + 1.4 }}
                >
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-center space-x-2 text-sm text-gray-400"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        delay: index * 0.2 + 1.6 + featureIndex * 0.1,
                      }}
                    >
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Hover Effect Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-600/5 rounded-2xl opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl border border-white/10 p-8">
            <motion.h3
              className="text-3xl font-bold text-center mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.8, duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Our Impact
              </span>
            </motion.h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 2 + index * 0.2, duration: 0.8 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <motion.div
                    className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-purple-600/30 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.4 }}
                  >
                    <achievement.icon className="w-8 h-8 text-cyan-400" />
                  </motion.div>
                  <motion.div
                    className="text-3xl font-bold text-white mb-2"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 2.2 + index * 0.2 }}
                  >
                    {achievement.number}
                  </motion.div>
                  <div className="text-gray-400 text-sm">
                    {achievement.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            onClick={() => {
              const tournamentsSection = document.getElementById("tournaments");
              tournamentsSection?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-bold text-white overflow-hidden cursor-pointer"
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
              Start Your Gaming Journey
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
