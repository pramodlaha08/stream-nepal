/**
 * TournamentSlotsLive Component
 *
 * Displays live tournament registration data from Google Sheets
 * with real-time updates and smooth animations
 */

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Users,
  Trophy,
  Calendar,
  CheckCircle,
  Clock,
  XCircle,
  AlertCircle,
  RefreshCw,
  Loader2,
} from "lucide-react";
import Image from "next/image";

interface SlotData {
  slot: string;
  logoLink: string;
  teamName: string;
  status: "confirmed" | "pending" | "cancelled" | "waitlist";
  date: string;
}

interface StatsData {
  total: number;
  confirmed: number;
  pending: number;
  cancelled: number;
  waitlist: number;
}

interface TournamentSlotsLiveProps {
  maxTeams: number;
  initialSlots?: SlotData[];
  initialStats?: StatsData | null;
  fetchError?: string | null;
}

export default function TournamentSlotsLive({
  maxTeams,
  initialSlots = [],
  initialStats = null,
  fetchError: initialError = null,
}: TournamentSlotsLiveProps) {
  const [slots, setSlots] = useState<SlotData[]>(initialSlots);
  const [stats, setStats] = useState<StatsData | null>(initialStats);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(initialError);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  // Auto-refresh every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      fetchSlots();
    }, 30000); // 30 seconds

    return () => clearInterval(interval);
  }, []);

  const fetchSlots = async () => {
    setIsRefreshing(true);
    setError(null);

    try {
      const response = await fetch("/api/sheets/slots");
      const result = await response.json();

      if (result.success) {
        setSlots(result.data);
        setStats(result.count);
        setLastUpdated(new Date(result.lastUpdated));
      } else {
        setError(result.message || "Failed to fetch data");
      }
    } catch (err) {
      setError("Connection error. Please try again.");
      console.error("Error fetching slots:", err);
    } finally {
      setIsRefreshing(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "confirmed":
        return <CheckCircle className="w-4 h-4 text-green-400" />;
      case "pending":
        return <Clock className="w-4 h-4 text-yellow-400" />;
      case "cancelled":
        return <XCircle className="w-4 h-4 text-red-400" />;
      case "waitlist":
        return <AlertCircle className="w-4 h-4 text-blue-400" />;
      default:
        return <Clock className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "pending":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "cancelled":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      case "waitlist":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const availableSlots = maxTeams - (stats?.confirmed || 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            LIVE REGISTRATIONS
          </motion.h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Real-time updates from Google Sheets • Last updated:{" "}
            {lastUpdated.toLocaleTimeString()}
          </p>
        </div>

        {/* Refresh Button */}
        <motion.button
          onClick={fetchSlots}
          disabled={isRefreshing}
          className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-semibold text-white disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base w-full sm:w-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isRefreshing ? (
            <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
          ) : (
            <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5" />
          )}
          {isRefreshing ? "Refreshing..." : "Refresh Data"}
        </motion.button>
      </div>

      {/* Stats Cards */}
      {stats && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <motion.div
            className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-6"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
              </div>
              <div className="min-w-0">
                <p className="text-2xl sm:text-3xl font-bold text-white">
                  {stats.confirmed}
                </p>
                <p className="text-xs sm:text-sm text-gray-400 truncate">
                  Confirmed
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-6"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-cyan-500/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
              </div>
              <div className="min-w-0">
                <p className="text-2xl sm:text-3xl font-bold text-white">
                  {availableSlots}
                </p>
                <p className="text-xs sm:text-sm text-gray-400 truncate">
                  Available
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-6"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-500/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
              </div>
              <div className="min-w-0">
                <p className="text-2xl sm:text-3xl font-bold text-white">
                  {stats.pending}
                </p>
                <p className="text-xs sm:text-sm text-gray-400 truncate">
                  Pending
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-6"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-500/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
              </div>
              <div className="min-w-0">
                <p className="text-2xl sm:text-3xl font-bold text-white">
                  {stats.total}
                </p>
                <p className="text-xs sm:text-sm text-gray-400 truncate">
                  Total Teams
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Error Message */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 flex items-center gap-3"
          >
            <AlertCircle className="w-5 h-5 text-red-400" />
            <p className="text-red-400">{error}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Slots Table */}
      <motion.div
        className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        {/* Table Header - Desktop Only */}
        <div className="hidden md:block bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-b border-white/10 p-4 lg:p-6">
          <div className="grid grid-cols-12 gap-2 lg:gap-4 text-xs lg:text-sm font-semibold text-gray-400">
            <div className="col-span-1">SLOT</div>
            <div className="col-span-1">LOGO</div>
            <div className="col-span-4">TEAM NAME</div>
            <div className="col-span-3">STATUS</div>
            <div className="col-span-3">DATE</div>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-b border-white/10 p-4">
          <h3 className="text-base font-bold text-white">Registered Teams</h3>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-white/5">
          <AnimatePresence mode="popLayout">
            {slots.length > 0 ? (
              slots.map((slot, index) => (
                <motion.div
                  key={slot.slot}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ delay: index * 0.05 }}
                  className="hover:bg-white/5 transition-colors"
                >
                  {/* Desktop Layout */}
                  <div className="hidden md:grid grid-cols-12 gap-2 lg:gap-4 p-4 lg:p-6">
                    {/* Slot Number */}
                    <div className="col-span-1 flex items-center">
                      <span className="text-xl lg:text-2xl font-bold text-cyan-400">
                        #{slot.slot}
                      </span>
                    </div>

                    {/* Team Logo */}
                    <div className="col-span-1 flex items-center">
                      {slot.logoLink ? (
                        <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/10 rounded-xl overflow-hidden flex-shrink-0">
                          <Image
                            src={slot.logoLink}
                            alt={slot.teamName}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                            }}
                          />
                        </div>
                      ) : (
                        <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Users className="w-5 h-5 lg:w-6 lg:h-6 text-cyan-400" />
                        </div>
                      )}
                    </div>

                    {/* Team Name */}
                    <div className="col-span-4 flex items-center">
                      <span className="text-white font-semibold text-sm lg:text-base truncate">
                        {slot.teamName || "TBD"}
                      </span>
                    </div>

                    {/* Status */}
                    <div className="col-span-3 flex items-center">
                      <div
                        className={`flex items-center gap-2 px-2 lg:px-3 py-1 rounded-full border text-xs lg:text-sm ${getStatusColor(
                          slot.status
                        )}`}
                      >
                        {getStatusIcon(slot.status)}
                        <span className="font-semibold capitalize hidden lg:inline">
                          {slot.status}
                        </span>
                      </div>
                    </div>

                    {/* Date */}
                    <div className="col-span-3 flex items-center text-gray-400 text-xs lg:text-sm">
                      <Calendar className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2 flex-shrink-0" />
                      <span className="truncate">{slot.date || "N/A"}</span>
                    </div>
                  </div>

                  {/* Mobile Card Layout */}
                  <div className="md:hidden p-4">
                    <div className="flex items-start gap-3">
                      {/* Slot Number Badge */}
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-sm">
                          #{slot.slot}
                        </span>
                      </div>

                      {/* Team Logo */}
                      <div className="flex-shrink-0">
                        {slot.logoLink ? (
                          <div className="w-14 h-14 bg-white/10 rounded-xl overflow-hidden">
                            <Image
                              src={slot.logoLink}
                              alt={slot.teamName}
                              width={56}
                              height={56}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.currentTarget.style.display = "none";
                              }}
                            />
                          </div>
                        ) : (
                          <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                            <Users className="w-7 h-7 text-cyan-400" />
                          </div>
                        )}
                      </div>

                      {/* Team Info */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-bold text-base mb-2 break-words">
                          {slot.teamName || "TBD"}
                        </h4>

                        {/* Status Badge */}
                        <div className="mb-2">
                          <div
                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs ${getStatusColor(
                              slot.status
                            )}`}
                          >
                            {getStatusIcon(slot.status)}
                            <span className="font-semibold capitalize">
                              {slot.status}
                            </span>
                          </div>
                        </div>

                        {/* Date */}
                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar className="w-3.5 h-3.5 mr-1.5 flex-shrink-0" />
                          <span>{slot.date || "N/A"}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-8 md:p-12 text-center"
              >
                <Users className="w-12 h-12 md:w-16 md:h-16 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400 text-base md:text-lg">
                  No registrations yet. Be the first to register!
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}
