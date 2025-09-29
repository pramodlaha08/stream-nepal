"use client";

import { Tournament } from "@/data/tournaments";
import { Calendar, Trophy, Users, GamepadIcon, ArrowRight } from "lucide-react";
import Link from "next/link";

interface TournamentListingProps {
  tournaments: Tournament[];
}

export default function TournamentListing({
  tournaments,
}: TournamentListingProps) {
  const getStatusBadge = (status: string) => {
    const baseClasses =
      "px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider";

    switch (status) {
      case "registration":
        return `${baseClasses} bg-gradient-to-r from-green-500 to-emerald-600 text-white`;
      case "upcoming":
        return `${baseClasses} bg-gradient-to-r from-blue-500 to-cyan-600 text-white`;
      case "live":
        return `${baseClasses} bg-gradient-to-r from-red-500 to-pink-600 text-white animate-pulse`;
      case "finished":
        return `${baseClasses} bg-gradient-to-r from-gray-500 to-slate-600 text-white`;
      default:
        return baseClasses;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Tournaments
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Join exciting esports tournaments and compete with the best teams in
          Nepal.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tournaments.map((tournament) => (
          <div
            key={tournament.id}
            className="group bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-6 border border-slate-700/50 relative overflow-hidden hover:border-cyan-500/30 transition-all duration-500 transform hover:-translate-y-2"
          >
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-2xl group-hover:from-cyan-500/20 transition-all duration-500"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-2xl group-hover:from-purple-500/20 transition-all duration-500"></div>

            <div className="relative space-y-6">
              {/* Tournament Header */}
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-slate-700 rounded-xl">
                      <GamepadIcon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className={getStatusBadge(tournament.status)}>
                      {tournament.status === "registration"
                        ? "Open"
                        : tournament.status}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {tournament.shortName}
                  </h3>
                  <p className="text-slate-400 text-sm line-clamp-2">
                    {tournament.description}
                  </p>
                </div>
              </div>

              {/* Tournament Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-yellow-400">
                    <Trophy className="w-4 h-4" />
                    <span className="text-xs font-medium">Prize Pool</span>
                  </div>
                  <div className="text-lg font-bold text-white">
                    {tournament.prizePool.currency} {tournament.prizePool.total}
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-blue-400">
                    <Users className="w-4 h-4" />
                    <span className="text-xs font-medium">Teams</span>
                  </div>
                  <div className="text-lg font-bold text-white">
                    {tournament.registeredTeams}/{tournament.maxTeams}
                  </div>
                </div>
              </div>

              {/* Tournament Details */}
              <div className="space-y-3 pt-4 border-t border-slate-700/50">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm">Game</span>
                  <span className="text-white text-sm font-medium">
                    {tournament.game}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm">Format</span>
                  <span className="text-white text-sm font-medium">
                    {tournament.format}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm">
                    Tournament Date
                  </span>
                  <span className="text-white text-sm font-medium">
                    {formatDate(tournament.dates.tournament.start)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm">Entry Fee</span>
                  <span className="text-white text-sm font-medium">
                    {tournament.entryFee.currency} {tournament.entryFee.amount}
                  </span>
                </div>
              </div>

              {/* Registration Progress */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Registration Progress</span>
                  <span className="text-white font-medium">
                    {Math.round(
                      (tournament.registeredTeams / tournament.maxTeams) * 100
                    )}
                    %
                  </span>
                </div>
                <div className="bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                    style={{
                      width: `${
                        (tournament.registeredTeams / tournament.maxTeams) * 100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>

              {/* Action Button */}
              <Link
                href={`/tournaments/${tournament.id.replace(/-\d{4}$/, "")}`}
                className="block w-full"
              >
                <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 group flex items-center justify-center gap-2">
                  <span>View Tournament</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
