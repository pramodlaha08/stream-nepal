"use client";

import Image from "next/image";
import { Tournament } from "@/data";
import {
  Calendar,
  Trophy,
  Users,
  DollarSign,
  Clock,
  GamepadIcon,
  Play,
  ExternalLink,
} from "lucide-react";

interface TournamentHeaderProps {
  tournament: Tournament;
}

export default function TournamentHeader({
  tournament,
}: TournamentHeaderProps) {
  const getStatusBadge = (status: string) => {
    const baseClasses =
      "px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider";

    switch (status) {
      case "registration":
        return `${baseClasses} bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/30`;
      case "upcoming":
        return `${baseClasses} bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-lg shadow-blue-500/30`;
      case "live":
        return `${baseClasses} bg-gradient-to-r from-red-500 to-pink-600 text-white shadow-lg shadow-red-500/30 animate-pulse`;
      case "finished":
        return `${baseClasses} bg-gradient-to-r from-gray-500 to-slate-600 text-white shadow-lg shadow-gray-500/30`;
      default:
        return baseClasses;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getProgressPercentage = () => {
    return (tournament.registeredTeams / tournament.maxTeams) * 100;
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/50 rounded-2xl md:rounded-3xl">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-20"></div>
        <div className="absolute top-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-bl from-cyan-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative p-6 md:p-8 lg:p-12">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-start">
          {/* Tournament Logo & Basic Info */}
          <div className="flex-shrink-0 mx-auto lg:mx-0">
            <div className="relative group">
              <div className="absolute -inset-1 md:-inset-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-slate-800 p-4 md:p-6 rounded-2xl border border-slate-600/50">
                <div className="w-20 h-20 md:w-32 md:h-32 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center overflow-hidden">
                  {tournament.logo ? (
                    <Image
                      src={tournament.logo}
                      alt={`${tournament.name} logo`}
                      width={128}
                      height={128}
                      className="w-full h-full object-contain rounded-xl"
                      onError={(e) => {
                        // Fallback to gamepad icon if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        const fallback =
                          target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = "flex";
                      }}
                    />
                  ) : null}
                  {/* Fallback gamepad icon */}
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{ display: tournament.logo ? "none" : "flex" }}
                  >
                    <GamepadIcon className="w-10 h-10 md:w-16 md:h-16 text-cyan-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tournament Details */}
          <div className="flex-1 space-y-4 md:space-y-6 text-center lg:text-left">
            <div className="space-y-3 md:space-y-4">
              <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center lg:justify-start gap-3 md:gap-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
                  {tournament.name}
                </h1>
                <div className={getStatusBadge(tournament.status)}>
                  {tournament.status === "registration"
                    ? "Registration Open"
                    : tournament.status}
                </div>
              </div>

              <p className="text-slate-300 text-base md:text-lg max-w-3xl leading-relaxed mx-auto lg:mx-0">
                {tournament.description}
              </p>

              {/* Streaming Platforms */}
              {tournament.streamingPlatforms &&
                tournament.streamingPlatforms.length > 0 && (
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-gradient-to-r from-red-500/20 to-blue-500/20 rounded-lg">
                        <Play className="w-5 h-5 text-cyan-400" />
                      </div>
                      <span className="text-white font-semibold text-lg">
                        Live Streaming:
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      {tournament.streamingPlatforms.map((platform, index) => (
                        <a
                          key={index}
                          href={platform.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative"
                        >
                          <div
                            className={`absolute -inset-1 bg-gradient-to-r ${platform.color} rounded-xl blur opacity-70 group-hover:opacity-100 transition duration-300`}
                          ></div>
                          <div className="relative flex items-center gap-2 bg-slate-800 px-4 py-3 rounded-xl border border-slate-600/50 hover:border-slate-500 transition-all duration-300 group-hover:scale-105">
                            {platform.icon === "youtube" ? (
                              <svg
                                className="w-6 h-6 text-red-500"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                              </svg>
                            ) : (
                              <svg
                                className="w-6 h-6 text-blue-600"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                              </svg>
                            )}
                            <span className="text-white font-medium text-sm">
                              {platform.name}
                            </span>
                            <ExternalLink className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
            </div>

            {/* Key Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {/* Prize Pool */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-4 md:p-6 rounded-xl md:rounded-2xl border border-slate-700/50 backdrop-blur-sm">
                <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                  <div className="p-1.5 md:p-2 bg-yellow-500/20 rounded-lg md:rounded-xl">
                    <Trophy className="w-4 h-4 md:w-6 md:h-6 text-yellow-400" />
                  </div>
                  <span className="text-slate-400 text-xs md:text-sm font-medium">
                    Prize Pool
                  </span>
                </div>
                <div className="text-xl md:text-2xl font-bold text-yellow-400">
                  {tournament.prizePool.currency} {tournament.prizePool.total}
                </div>
              </div>

              {/* Teams Progress */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-4 md:p-6 rounded-xl md:rounded-2xl border border-slate-700/50 backdrop-blur-sm">
                <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                  <div className="p-1.5 md:p-2 bg-blue-500/20 rounded-lg md:rounded-xl">
                    <Users className="w-4 h-4 md:w-6 md:h-6 text-blue-400" />
                  </div>
                  <span className="text-slate-400 text-xs md:text-sm font-medium">
                    Teams
                  </span>
                </div>
                <div className="text-xl md:text-2xl font-bold text-blue-400">
                  {tournament.registeredTeams}/{tournament.maxTeams}
                </div>
                <div className="mt-2">
                  <div className="bg-slate-700 rounded-full h-1.5 md:h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 h-1.5 md:h-2 rounded-full transition-all duration-500"
                      style={{ width: `${getProgressPercentage()}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Tournament Date */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-4 md:p-6 rounded-xl md:rounded-2xl border border-slate-700/50 backdrop-blur-sm">
                <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                  <div className="p-1.5 md:p-2 bg-purple-500/20 rounded-lg md:rounded-xl">
                    <Calendar className="w-4 h-4 md:w-6 md:h-6 text-purple-400" />
                  </div>
                  <span className="text-slate-400 text-xs md:text-sm font-medium">
                    Tournament
                  </span>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                    <div className="text-xs md:text-sm font-bold text-purple-400">
                      {formatDate(tournament.dates.tournament.start)}
                    </div>
                  </div>
                  {tournament.dates.tournament.start !==
                    tournament.dates.tournament.end && (
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-pink-400"></div>
                      <div className="text-xs md:text-sm font-bold text-purple-400">
                        {formatDate(tournament.dates.tournament.end)}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Entry Fee */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-4 md:p-6 rounded-xl md:rounded-2xl border border-slate-700/50 backdrop-blur-sm">
                <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                  <div className="p-1.5 md:p-2 bg-green-500/20 rounded-lg md:rounded-xl">
                    <DollarSign className="w-4 h-4 md:w-6 md:h-6 text-green-400" />
                  </div>
                  <span className="text-slate-400 text-xs md:text-sm font-medium">
                    Entry Fee
                  </span>
                </div>
                <div className="text-xl md:text-2xl font-bold text-green-400">
                  {tournament.entryFee.currency} {tournament.entryFee.amount}
                </div>
              </div>
            </div>

            {/* Additional Info Row */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 md:gap-6 pt-4 border-t border-slate-700/50 text-sm md:text-base">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <GamepadIcon className="w-4 h-4 md:w-5 md:h-5 text-slate-400" />
                <span className="text-slate-300">{tournament.game}</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Users className="w-4 h-4 md:w-5 md:h-5 text-slate-400" />
                <span className="text-slate-300">{tournament.format}</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Clock className="w-4 h-4 md:w-5 md:h-5 text-slate-400" />
                <span className="text-slate-300 text-center lg:text-left">
                  Registration:{" "}
                  {formatDate(tournament.dates.registration.start)} -{" "}
                  {formatDate(tournament.dates.registration.end)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
