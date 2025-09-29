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
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="space-y-8">
      {/* Prize Pool Breakdown */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 border border-slate-700/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-yellow-500/10 to-transparent rounded-full blur-3xl"></div>

        <div className="relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-yellow-500/20 rounded-xl">
              <Trophy className="w-8 h-8 text-yellow-400" />
            </div>
            <h2 className="text-3xl font-bold text-white">
              Prize Pool Distribution
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tournament.prizePool.breakdown.map((prize, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative bg-slate-800/80 p-6 rounded-2xl border border-slate-600/50 backdrop-blur-sm">
                  <div className="text-center space-y-3">
                    <div
                      className={`text-2xl font-bold ${
                        index === 0
                          ? "text-yellow-400"
                          : index === 1
                          ? "text-gray-300"
                          : index === 2
                          ? "text-amber-600"
                          : "text-slate-400"
                      }`}
                    >
                      #{index + 1}
                    </div>
                    <div className="text-slate-300 font-medium">
                      {prize.position}
                    </div>
                    <div className="text-xl font-bold text-white">
                      {prize.amount}
                    </div>
                  </div>
                </div>
              </div>
            ))}
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

              <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <div>
                  <div className="text-slate-400 text-sm">Tournament Ends</div>
                  <div className="text-white font-semibold">
                    {formatDate(tournament.dates.tournament.end)}
                  </div>
                </div>
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              </div>
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
