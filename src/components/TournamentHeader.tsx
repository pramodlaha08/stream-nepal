"use client";

import Image from "next/image";
import { Tournament } from "@/data/tournaments";
import {
  Calendar,
  Trophy,
  Users,
  DollarSign,
  Clock,
  GamepadIcon,
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
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/50 rounded-3xl">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative p-8 md:p-12">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Tournament Logo & Basic Info */}
          <div className="flex-shrink-0">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-slate-800 p-6 rounded-2xl border border-slate-600/50">
                <div className="w-32 h-32 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center">
                  <GamepadIcon className="w-16 h-16 text-cyan-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Tournament Details */}
          <div className="flex-1 space-y-6">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-4">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {tournament.name}
                </h1>
                <div className={getStatusBadge(tournament.status)}>
                  {tournament.status === "registration"
                    ? "Registration Open"
                    : tournament.status}
                </div>
              </div>

              <p className="text-slate-300 text-lg max-w-3xl leading-relaxed">
                {tournament.description}
              </p>
            </div>

            {/* Key Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Prize Pool */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-yellow-500/20 rounded-xl">
                    <Trophy className="w-6 h-6 text-yellow-400" />
                  </div>
                  <span className="text-slate-400 text-sm font-medium">
                    Prize Pool
                  </span>
                </div>
                <div className="text-2xl font-bold text-yellow-400">
                  {tournament.prizePool.currency} {tournament.prizePool.total}
                </div>
              </div>

              {/* Teams Progress */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-500/20 rounded-xl">
                    <Users className="w-6 h-6 text-blue-400" />
                  </div>
                  <span className="text-slate-400 text-sm font-medium">
                    Teams
                  </span>
                </div>
                <div className="text-2xl font-bold text-blue-400">
                  {tournament.registeredTeams}/{tournament.maxTeams}
                </div>
                <div className="mt-2">
                  <div className="bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${getProgressPercentage()}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Tournament Date */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-purple-500/20 rounded-xl">
                    <Calendar className="w-6 h-6 text-purple-400" />
                  </div>
                  <span className="text-slate-400 text-sm font-medium">
                    Tournament
                  </span>
                </div>
                <div className="text-lg font-bold text-purple-400">
                  {formatDate(tournament.dates.tournament.start)}
                </div>
              </div>

              {/* Entry Fee */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-green-500/20 rounded-xl">
                    <DollarSign className="w-6 h-6 text-green-400" />
                  </div>
                  <span className="text-slate-400 text-sm font-medium">
                    Entry Fee
                  </span>
                </div>
                <div className="text-2xl font-bold text-green-400">
                  {tournament.entryFee.currency} {tournament.entryFee.amount}
                </div>
              </div>
            </div>

            {/* Additional Info Row */}
            <div className="flex flex-wrap gap-6 pt-4 border-t border-slate-700/50">
              <div className="flex items-center gap-2">
                <GamepadIcon className="w-5 h-5 text-slate-400" />
                <span className="text-slate-300">{tournament.game}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-slate-400" />
                <span className="text-slate-300">{tournament.format}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-slate-400" />
                <span className="text-slate-300">
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
