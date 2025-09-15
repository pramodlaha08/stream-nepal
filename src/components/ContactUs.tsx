"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  Building2,
  Trophy,
  Sparkles,
  MessageSquare,
  Gamepad2,
  Crown,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  contactType: "player" | "company" | "";
  inquiryType: string;
  message: string;
}

const ContactUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    contactType: "",
    inquiryType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const contactTypes = [
    {
      id: "player",
      title: "Player / Gamer",
      description: "Tournament requests, queries, or gaming support",
      icon: Gamepad2,
      gradient: "from-cyan-500 to-blue-600",
      inquiryTypes: [
        "Tournament Registration",
        "Tournament Inquiry",
        "Technical Support",
        "Prize Information",
        "Gaming Community",
        "Other Gaming Query",
      ],
    },
    {
      id: "company",
      title: "Company / Business",
      description: "Sponsorship, partnerships, or event organization",
      icon: Building2,
      gradient: "from-purple-500 to-pink-600",
      inquiryTypes: [
        "Event Sponsorship",
        "Tournament Organization",
        "Live Stream Setup",
        "Brand Partnership",
        "Corporate Event",
        "Other Business Inquiry",
      ],
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Store form data in JSON format (for future API integration)
    const contactFormData = {
      ...formData,
      timestamp: new Date().toISOString(),
      id: Date.now().toString(),
    };

    console.log("Contact Form Data:", JSON.stringify(contactFormData, null, 2));
    // Here you can integrate with Resend API later

    setIsSubmitting(false);
    setShowSuccess(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        contactType: "",
        inquiryType: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <section
      ref={ref}
      className="relative py-20 overflow-hidden bg-gradient-to-b from-black to-slate-900"
    >
      {/* Animated Star Field Background */}
      <div className="absolute inset-0">
        {/* Twinkling Stars */}
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}

        {/* Floating Sparkles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute text-cyan-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: Math.random() * 8 + 5,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            <Sparkles className="w-4 h-4" />
          </motion.div>
        ))}

        {/* Nebula Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "4s" }}
          />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.1)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
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
              className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4 relative"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.8 }}
            >
              <Mail className="w-8 h-8 text-white" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-2xl blur-lg"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                CONTACT US
              </span>
            </h2>
          </motion.div>

          <motion.p
            className="text-xl text-gray-300 max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Ready to level up your gaming experience? Whether you&apos;re a player
            seeking tournaments or a company looking for partnerships, we&apos;re
            here to make it happen!
          </motion.p>

          {/* Contact Info Cards */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {[
              {
                icon: Mail,
                title: "Email",
                info: "hello@streamnepal.com",
                gradient: "from-cyan-500 to-blue-600",
              },
              {
                icon: Phone,
                title: "Phone",
                info: "+977 98XXXXXXXX",
                gradient: "from-purple-500 to-pink-600",
              },
              {
                icon: MapPin,
                title: "Location",
                info: "Kathmandu, Nepal",
                gradient: "from-green-500 to-emerald-600",
              },
            ].map((contact, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.8 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${contact.gradient} opacity-20 rounded-xl blur-xl group-hover:opacity-40 transition-all duration-300`}
                />
                <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6 group-hover:border-white/30 transition-all duration-300">
                  <motion.div
                    className={`w-12 h-12 bg-gradient-to-r ${contact.gradient} rounded-xl flex items-center justify-center mb-4 mx-auto`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.4 }}
                  >
                    <contact.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h4 className="text-white font-bold mb-2">{contact.title}</h4>
                  <p className="text-gray-300 text-sm">{contact.info}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Contact Type Selection */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-8">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Choose Your Path
            </span>
          </h3>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {contactTypes.map((type, index) => (
              <motion.div
                key={type.id}
                className={`group relative cursor-pointer ${
                  formData.contactType === type.id ? "scale-105" : ""
                }`}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1 + index * 0.2, duration: 0.8 }}
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    contactType: type.id as "player" | "company",
                    inquiryType: "",
                  }))
                }
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${
                    type.gradient
                  } opacity-20 rounded-2xl blur-xl group-hover:opacity-40 transition-all duration-300 ${
                    formData.contactType === type.id ? "opacity-60" : ""
                  }`}
                />

                <div
                  className={`relative bg-black/40 backdrop-blur-xl border-2 rounded-2xl p-8 transition-all duration-300 ${
                    formData.contactType === type.id
                      ? "border-cyan-400/50 bg-black/60"
                      : "border-white/10 group-hover:border-white/30"
                  }`}
                >
                  <motion.div
                    className={`w-20 h-20 bg-gradient-to-r ${type.gradient} rounded-2xl flex items-center justify-center mb-6 mx-auto relative`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <type.icon className="w-10 h-10 text-white" />
                    {formData.contactType === type.id && (
                      <motion.div
                        className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 25,
                        }}
                      >
                        <Crown className="w-3 h-3 text-white" />
                      </motion.div>
                    )}
                  </motion.div>

                  <h4 className="text-2xl font-bold text-white mb-3 text-center">
                    {type.title}
                  </h4>
                  <p className="text-gray-300 text-center mb-4">
                    {type.description}
                  </p>

                  <div className="flex flex-wrap gap-2 justify-center">
                    {type.inquiryTypes.slice(0, 3).map((inquiry, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300"
                      >
                        {inquiry}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        {formData.contactType && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl" />

              <form
                onSubmit={handleSubmit}
                className="relative bg-black/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label className="flex text-white font-semibold mb-2 items-center">
                      <User className="w-4 h-4 mr-2 text-cyan-400" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                      placeholder="Enter your full name"
                    />
                  </motion.div>

                  {/* Email Field */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="flex text-white font-semibold mb-2 items-center">
                      <Mail className="w-4 h-4 mr-2 text-cyan-400" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                      placeholder="Enter your email address"
                    />
                  </motion.div>

                  {/* Phone Field */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="flex text-white font-semibold mb-2 items-center">
                      <Phone className="w-4 h-4 mr-2 text-cyan-400" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                      placeholder="Enter your phone number"
                    />
                  </motion.div>

                  {/* Company Field (conditional) */}
                  {formData.contactType === "company" && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <label className="flex text-white font-semibold mb-2 items-center">
                        <Building2 className="w-4 h-4 mr-2 text-cyan-400" />
                        Company Name *
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                        placeholder="Enter your company name"
                      />
                    </motion.div>
                  )}

                  {/* Inquiry Type */}
                  <motion.div
                    className={
                      formData.contactType === "company" ? "" : "md:col-span-1"
                    }
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <label className="flex text-white font-semibold mb-2 items-center">
                      <MessageSquare className="w-4 h-4 mr-2 text-cyan-400" />
                      Inquiry Type *
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                    >
                      <option value="" disabled>
                        Select inquiry type
                      </option>
                      {contactTypes
                        .find((type) => type.id === formData.contactType)
                        ?.inquiryTypes.map((type, index) => (
                          <option
                            key={index}
                            value={type}
                            className="bg-black text-white"
                          >
                            {type}
                          </option>
                        ))}
                    </select>
                  </motion.div>
                </div>

                {/* Message Field */}
                <motion.div
                  className="mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <label className="flex text-white font-semibold mb-2 items-center">
                    <MessageSquare className="w-4 h-4 mr-2 text-cyan-400" />
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all resize-none"
                    placeholder="Tell us about your inquiry in detail..."
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  className="mt-8 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-bold text-white overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{
                        type: "tween",
                        ease: "easeOut",
                        duration: 0.3,
                      }}
                    />
                    <span className="relative z-10 flex items-center gap-2">
                      {isSubmitting ? (
                        <>
                          <motion.div
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </span>
                  </motion.button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        )}

        {/* Success Message */}
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: -50 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          >
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-xl border border-green-500/30 rounded-3xl p-8 text-center max-w-md mx-4">
              <motion.div
                className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"
                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                transition={{ duration: 1 }}
              >
                <Trophy className="w-10 h-10 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Message Sent Successfully!
              </h3>
              <p className="text-gray-300">
                We&apos;ll get back to you within 24 hours. Game on! 🎮
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ContactUs;
