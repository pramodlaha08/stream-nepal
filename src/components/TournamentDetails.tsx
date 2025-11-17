"use client";

import { Tournament } from "@/data";
import {
  Trophy,
  Calendar,
  Shield,
  Zap,
  ExternalLink,
  MapPin,
  Clock,
} from "lucide-react";
import Image from "next/image";

interface TournamentDetailsProps {
  tournament: Tournament;
}

export default function TournamentDetails({
  tournament,
}: TournamentDetailsProps) {
  const formatDate = (dateString?: string) => {
    if (!dateString) return "Coming Soon";

    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return "Coming Soon";

      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return "Coming Soon";
    }
  };

  const getDateDisplay = (
    start?: string,
    end?: string,
    customMessage?: string
  ) => {
    // If custom message exists, show it
    if (customMessage) {
      return customMessage;
    }

    // If both dates exist, show both
    if (start && end) {
      return `${formatDate(start)} - ${formatDate(end)}`;
    }

    // If only start exists
    if (start) {
      return formatDate(start);
    }

    // If only end exists
    if (end) {
      return formatDate(end);
    }

    // Default fallback
    return "Coming Soon";
  };

  return (
    <div className="space-y-8">
      {/* Prize Pool Breakdown - Gaming Edition */}
      <div className="relative bg-black rounded-3xl p-2 border border-cyan-500/30 overflow-hidden">
        {/* Animated Border Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl opacity-75 animate-pulse"></div>

        {/* Corner Blade Effects */}
        <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-cyan-400/30 to-transparent transform -rotate-45 -translate-x-10 -translate-y-10"></div>
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-400/30 to-transparent transform rotate-45 translate-x-10 -translate-y-10"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-pink-400/30 to-transparent transform rotate-45 -translate-x-10 translate-y-10"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-yellow-400/30 to-transparent transform -rotate-45 translate-x-10 translate-y-10"></div>

        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-80"></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce opacity-70"></div>

        <div className="relative bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-black/95 rounded-2xl p-8 backdrop-blur-sm border border-slate-700/30">
          {/* Glowing Background Effects */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/5 via-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-yellow-500/5 via-orange-500/5 to-red-500/5 rounded-full blur-2xl animate-pulse delay-1000"></div>

          <div className="relative z-10">
            {/* Epic Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl blur animate-pulse"></div>
                  <div className="relative p-4 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-cyan-400/50">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                      <Trophy className="w-8 h-8 text-white drop-shadow-lg" />
                    </div>
                  </div>
                </div>
                <div className="text-left">
                  <h2 className="text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text animate-pulse">
                    PRIZE POOL
                  </h2>
                  <div className="text-2xl md:text-3xl font-bold text-yellow-400 animate-pulse">
                    {tournament.prizePool.total} {tournament.prizePool.currency}
                  </div>
                </div>
              </div>

              {/* Epic Subtitle */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent flex-1"></div>
                <span className="text-slate-400 font-medium tracking-wider uppercase text-sm">
                  🏆 COMPETE FOR GLORY 🏆
                </span>
                <div className="h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent flex-1"></div>
              </div>
            </div>

            {/* Prize Cards - Gaming Style */}
            <div className="flex flex-wrap justify-center gap-8">
              {tournament.prizePool.breakdown.map((prize, index) => {
                const isFirst = index === 0;
                const isSecond = index === 1;
                const isThird = index === 2;

                return (
                  <div
                    key={index}
                    className={`group relative w-full sm:w-auto sm:min-w-[220px] sm:max-w-[280px] flex-shrink-0 transform transition-all duration-500 hover:scale-105 ${
                      isFirst
                        ? "hover:scale-110 sm:-translate-y-4"
                        : isSecond || isThird
                        ? "hover:scale-108 sm:-translate-y-2"
                        : "hover:scale-105"
                    }`}
                  >
                    {/* Animated Glow Ring */}
                    <div
                      className={`absolute -inset-2 rounded-3xl blur-lg opacity-60 group-hover:opacity-100 transition-all duration-500 animate-pulse ${
                        isFirst
                          ? "bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400"
                          : isSecond
                          ? "bg-gradient-to-r from-gray-300 via-slate-400 to-gray-300"
                          : isThird
                          ? "bg-gradient-to-r from-amber-600 via-orange-700 to-amber-600"
                          : "bg-gradient-to-r from-slate-500 via-slate-600 to-slate-500"
                      }`}
                    ></div>

                    {/* Sharp Corner Blades */}
                    <div className="absolute -top-3 -left-3 w-6 h-6 bg-gradient-to-br from-cyan-400 to-transparent transform rotate-45"></div>
                    <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-bl from-purple-400 to-transparent transform -rotate-45"></div>
                    <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-gradient-to-tr from-pink-400 to-transparent transform -rotate-45"></div>
                    <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-gradient-to-tl from-yellow-400 to-transparent transform rotate-45"></div>

                    {/* Main Card */}
                    <div
                      className={`relative bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-black/90 rounded-2xl border-2 backdrop-blur-sm overflow-hidden ${
                        isFirst
                          ? "border-yellow-400/60 shadow-2xl shadow-yellow-400/25"
                          : isSecond
                          ? "border-gray-300/60 shadow-2xl shadow-gray-300/25"
                          : isThird
                          ? "border-amber-600/60 shadow-2xl shadow-amber-600/25"
                          : "border-slate-600/60 shadow-xl shadow-slate-600/25"
                      }`}
                    >
                      {/* Rank Badge */}
                      <div
                        className={`absolute -top-4 left-1/2 transform -translate-x-1/2 z-20 ${
                          isFirst ? "w-16 h-16" : "w-14 h-14"
                        }`}
                      >
                        <div
                          className={`relative w-full h-full rounded-full border-4 flex items-center justify-center font-black text-xl shadow-2xl ${
                            isFirst
                              ? "bg-gradient-to-br from-yellow-300 to-yellow-600 border-yellow-200 text-yellow-900 animate-pulse"
                              : isSecond
                              ? "bg-gradient-to-br from-gray-200 to-gray-400 border-gray-100 text-gray-800"
                              : isThird
                              ? "bg-gradient-to-br from-amber-500 to-amber-700 border-amber-300 text-amber-100"
                              : "bg-gradient-to-br from-slate-600 to-slate-800 border-slate-500 text-slate-200"
                          }`}
                        >
                          #{index + 1}
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="pt-10 pb-8 px-6">
                        <div className="text-center space-y-4">
                          {/* Position Label */}
                          <div
                            className={`text-sm font-bold uppercase tracking-wider ${
                              isFirst
                                ? "text-yellow-400"
                                : isSecond
                                ? "text-gray-300"
                                : isThird
                                ? "text-amber-500"
                                : "text-slate-400"
                            }`}
                          >
                            {prize.position}
                          </div>

                          {/* Prize Amount - Epic Style */}
                          <div
                            className={`text-3xl font-black tracking-tight ${
                              isFirst
                                ? "text-transparent bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text animate-pulse"
                                : isSecond
                                ? "text-transparent bg-gradient-to-r from-gray-200 via-gray-300 to-slate-300 bg-clip-text"
                                : isThird
                                ? "text-transparent bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text"
                                : "text-slate-300"
                            }`}
                            style={
                              isFirst || isSecond || isThird
                                ? {
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                  }
                                : {}
                            }
                          >
                            {prize.amount}
                          </div>

                          {/* Winner Crown for First Place */}
                          {isFirst && (
                            <div className="flex justify-center">
                              <div className="text-yellow-400 text-2xl animate-bounce">
                                👑
                              </div>
                            </div>
                          )}

                          {/* Medal Icons */}
                          {isSecond && (
                            <div className="flex justify-center">
                              <div className="text-gray-300 text-xl">🥈</div>
                            </div>
                          )}

                          {isThird && (
                            <div className="flex justify-center">
                              <div className="text-amber-600 text-xl">🥉</div>
                            </div>
                          )}
                        </div>

                        {/* Animated Bottom Bar */}
                        <div
                          className={`mt-6 h-1 rounded-full overflow-hidden ${
                            isFirst
                              ? "bg-yellow-400/20"
                              : isSecond
                              ? "bg-gray-300/20"
                              : isThird
                              ? "bg-amber-600/20"
                              : "bg-slate-600/20"
                          }`}
                        >
                          <div
                            className={`h-full w-full origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ${
                              isFirst
                                ? "bg-gradient-to-r from-yellow-400 to-orange-500"
                                : isSecond
                                ? "bg-gradient-to-r from-gray-300 to-slate-400"
                                : isThird
                                ? "bg-gradient-to-r from-amber-600 to-orange-700"
                                : "bg-gradient-to-r from-slate-500 to-slate-600"
                            }`}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Epic Call to Action - Registration Button */}
            <div className="text-center mt-12">
              <a
                href={tournament.registrationUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl border border-cyan-400/30 backdrop-blur-sm hover:from-cyan-500/30 hover:via-purple-500/30 hover:to-pink-500/30 hover:border-cyan-400/50 hover:scale-105 transform transition-all duration-300 group cursor-pointer"
              >
                <span className="text-slate-300 font-medium group-hover:text-white transition-colors">
                  ⚡ REGISTER NOW TO CLAIM YOUR SHARE ⚡
                </span>
                <ExternalLink className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Tournament Schedule */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 border border-slate-700/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl"></div>

          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-500/20 rounded-xl">
                <Calendar className="w-8 h-8 text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">
                Tournament Schedule
              </h2>
            </div>

            <div className="space-y-6">
              {/* Registration Opens */}
              {tournament.dates.registration.customMessage ? (
                <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                  <div>
                    <div className="text-slate-400 text-sm">Registration</div>
                    <div className="text-white font-semibold">
                      {tournament.dates.registration.customMessage}
                    </div>
                  </div>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              ) : (
                <>
                  {tournament.dates.registration.start && (
                    <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                      <div>
                        <div className="text-slate-400 text-sm">
                          Registration Opens
                        </div>
                        <div className="text-white font-semibold">
                          {formatDate(tournament.dates.registration.start)}
                        </div>
                      </div>
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                  )}

                  {tournament.dates.registration.end && (
                    <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                      <div>
                        <div className="text-slate-400 text-sm">
                          Registration Closes
                        </div>
                        <div className="text-white font-semibold">
                          {formatDate(tournament.dates.registration.end)}
                        </div>
                      </div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    </div>
                  )}
                </>
              )}

              {/* Tournament Dates */}
              {tournament.dates.tournament.customMessage ? (
                <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                  <div>
                    <div className="text-slate-400 text-sm">Tournament</div>
                    <div className="text-white font-semibold">
                      {tournament.dates.tournament.customMessage}
                    </div>
                  </div>
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                </div>
              ) : (
                <>
                  {tournament.dates.tournament.start && (
                    <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                      <div>
                        <div className="text-slate-400 text-sm">
                          Tournament Starts
                        </div>
                        <div className="text-white font-semibold">
                          {formatDate(tournament.dates.tournament.start)}
                        </div>
                      </div>
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    </div>
                  )}

                  {tournament.dates.tournament.end && (
                    <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                      <div>
                        <div className="text-slate-400 text-sm">
                          Tournament Ends
                        </div>
                        <div className="text-white font-semibold">
                          {formatDate(tournament.dates.tournament.end)}
                        </div>
                      </div>
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>

        {/* Tournament Rules */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 border border-slate-700/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-red-500/10 to-transparent rounded-full blur-3xl"></div>

          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-red-500/20 rounded-xl">
                <Shield className="w-8 h-8 text-red-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">
                Tournament Rules
              </h2>
            </div>

            <div className="space-y-4">
              {tournament.rules.map((rule, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 bg-slate-800/30 rounded-xl border border-slate-700/30"
                >
                  <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  </div>
                  <div className="text-slate-300 text-sm leading-relaxed">
                    {rule}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tournament Format & Sponsors */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Tournament Format */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 border border-slate-700/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl"></div>

          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-purple-500/20 rounded-xl">
                <Zap className="w-8 h-8 text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">
                Tournament Format
              </h2>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                  <div className="text-slate-400 text-sm">Game</div>
                  <div className="text-white font-semibold">
                    {tournament.game}
                  </div>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                  <div className="text-slate-400 text-sm">Format</div>
                  <div className="text-white font-semibold">
                    {tournament.format}
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                <div className="text-slate-400 text-sm mb-2">Platforms</div>
                <div className="flex gap-2">
                  {tournament.platform.map((platform, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sponsors */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 border border-slate-700/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>

          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-cyan-500/20 rounded-xl">
                <ExternalLink className="w-8 h-8 text-cyan-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Our Sponsors</h2>
            </div>

            <div className="space-y-4">
              {tournament.sponsors.map((sponsor, index) => (
                <a
                  key={index}
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center overflow-hidden">
                      {sponsor.logo ? (
                        <Image
                          src={sponsor.logo}
                          alt={sponsor.name}
                          width={40}
                          height={40}
                          className="w-10 h-10 object-contain rounded-lg"
                          onError={(
                            e: React.SyntheticEvent<HTMLImageElement, Event>
                          ) => {
                            // Fallback to gradient background with initials if image fails to load
                            const target = e.target as HTMLImageElement;
                            target.style.display = "none";
                            const fallback =
                              target.nextElementSibling as HTMLElement;
                            if (fallback) fallback.style.display = "flex";
                          }}
                        />
                      ) : null}
                      {/* Fallback div with initials */}
                      <div
                        className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center text-white text-sm font-bold"
                        style={{ display: sponsor.logo ? "none" : "flex" }}
                      >
                        {sponsor.name
                          .split(" ")
                          .map((word) => word[0])
                          .join("")
                          .slice(0, 2)}
                      </div>
                    </div>
                    <div>
                      <div className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                        {sponsor.name}
                      </div>
                      <div className="text-slate-400 text-sm">
                        {sponsor.website}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Match Schedule */}
      {tournament.matchSchedule && tournament.matchSchedule.length > 0 && (
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 border border-slate-700/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-green-500/10 to-transparent rounded-full blur-3xl"></div>

          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-green-500/20 rounded-xl">
                <Clock className="w-8 h-8 text-green-400" />
              </div>
              <h2 className="text-3xl font-bold text-white">Match Schedule</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tournament.matchSchedule.map((match, index) => (
                <div key={match.matchNumber} className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                  <div className="relative bg-slate-800/80 p-6 rounded-2xl border border-slate-600/50 backdrop-blur-sm">
                    <div className="space-y-4">
                      {/* Match Header */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                            {match.matchNumber}
                          </div>
                          <span className="text-slate-400 text-sm font-medium">
                            {match.round}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-green-400">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm font-semibold">
                            {match.time}
                          </span>
                        </div>
                      </div>

                      {/* Match Name */}
                      <div>
                        <h3 className="text-white font-bold text-lg leading-tight">
                          {match.matchName}
                        </h3>
                      </div>

                      {/* Map Info */}
                      <div className="flex items-center gap-2 p-3 bg-slate-700/50 rounded-xl">
                        <MapPin className="w-5 h-5 text-blue-400" />
                        <div>
                          <div className="text-slate-400 text-xs">Map</div>
                          <div className="text-white font-semibold">
                            {match.map}
                          </div>
                        </div>
                      </div>

                      {/* Match Status Indicator */}
                      <div className="flex items-center justify-between pt-2">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            index === 0
                              ? "bg-yellow-500/20 text-yellow-400"
                              : index <= 2
                              ? "bg-blue-500/20 text-blue-400"
                              : "bg-slate-600/50 text-slate-400"
                          }`}
                        >
                          {index === 0
                            ? "Next"
                            : index <= 2
                            ? "Upcoming"
                            : "Scheduled"}
                        </span>
                        <div className="text-slate-500 text-xs">
                          Match {match.matchNumber}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Schedule Notes */}
            <div className="mt-8 p-4 bg-slate-800/30 rounded-xl border border-slate-700/30">
              <div className="flex items-start gap-3">
                <div className="p-1 bg-blue-500/20 rounded">
                  <Calendar className="w-4 h-4 text-blue-400" />
                </div>
                <div className="text-sm text-slate-400">
                  <strong className="text-white">Note:</strong> All times are in
                  local timezone. Schedule may be subject to change based on
                  tournament progress. Follow our official channels for
                  real-time updates.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
