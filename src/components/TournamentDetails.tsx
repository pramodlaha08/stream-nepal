"use client";

import { Tournament } from "@/data/tournaments";
import { Trophy, Calendar, Shield, Zap, ExternalLink } from "lucide-react";

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
                    <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center">
                      <ExternalLink className="w-6 h-6 text-cyan-400" />
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
    </div>
  );
}
