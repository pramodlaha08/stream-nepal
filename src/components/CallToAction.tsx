"use client";

import { ExternalLink, Calendar, Play } from "lucide-react";

interface CallToActionProps {
  isStreamed: boolean;
  registrationUrl?: string;
  youtubeVideoId?: string;
  tournamentName: string;
}

export default function CallToAction({
  isStreamed,
  registrationUrl = "#register",
  youtubeVideoId = "UGR_VQ5NTV4", // Default to PMWC tournament video
  tournamentName,
}: CallToActionProps) {
  const handleRegistrationClick = () => {
    if (registrationUrl.startsWith("http")) {
      window.open(registrationUrl, "_blank", "noopener noreferrer");
    } else {
      // Handle internal routing or scroll to section
      const element = document.querySelector(registrationUrl);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  if (isStreamed) {
    // Show YouTube stream/replay
    return (
      <section className="text-center py-8 md:py-16">
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-slate-700/50 relative overflow-hidden mx-4 md:mx-0">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-purple-500/5 to-pink-500/5"></div>

          <div className="relative space-y-4 md:space-y-6">
            {/* Stream Header */}
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-3">
                <div className="p-2 bg-red-500/20 rounded-xl">
                  <Play className="w-6 h-6 text-red-500" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Tournament Replay
                </h2>
              </div>
              <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto px-4">
                Watch the epic moments from {tournamentName}. Relive the action,
                amazing plays, and crowning moments!
              </p>
            </div>

            {/* YouTube Video Player */}
            <div className="relative">
              <div className="aspect-video max-w-4xl mx-auto bg-slate-800 rounded-xl md:rounded-2xl overflow-hidden border border-slate-600/50 shadow-2xl">
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=0&rel=0&showinfo=0&modestbranding=1`}
                  title={`${tournamentName} - Live Tournament | Stream Nepal`}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Video Controls Overlay */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-slate-800/90 backdrop-blur-sm px-4 py-2 rounded-xl border border-slate-600/50 flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-slate-300 text-sm font-medium">
                    Tournament Concluded
                  </span>
                </div>
              </div>
            </div>

            {/* Stream Actions */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-6">
              <button
                onClick={() =>
                  window.open(
                    `https://www.youtube.com/watch?v=${youtubeVideoId}`,
                    "_blank"
                  )
                }
                className="px-8 md:px-10 py-3 md:py-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 text-white font-bold text-base md:text-lg rounded-xl md:rounded-2xl transition-all duration-300 shadow-2xl shadow-red-500/25 hover:shadow-red-500/40 transform hover:-translate-y-2 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5" />
                Watch on YouTube
                <ExternalLink className="w-4 h-4" />
              </button>
              <button className="px-8 md:px-10 py-3 md:py-4 bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white font-bold text-base md:text-lg rounded-xl md:rounded-2xl transition-all duration-300 shadow-lg shadow-slate-500/25 hover:shadow-slate-500/40 transform hover:-translate-y-1">
                View Highlights
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Show Registration Call to Action
  return (
    <section className="text-center py-8 md:py-16">
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl md:rounded-3xl p-8 md:p-12 border border-slate-700/50 relative overflow-hidden mx-4 md:mx-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>

        <div className="relative space-y-4 md:space-y-6">
          {/* Registration Header */}
          <div className="space-y-3">
            <div className="flex items-center justify-center gap-3">
              <div className="p-2 bg-green-500/20 rounded-xl">
                <Calendar className="w-6 h-6 text-green-500" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Ready to Compete?
              </h2>
            </div>
            <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto px-4">
              Join the most exciting PUBG Mobile tournament in Nepal. Register
              your team now and compete for the ultimate prize.
            </p>
          </div>

          {/* Registration Status Indicator */}
          <div className="flex items-center justify-center">
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl px-4 py-2 flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-medium text-sm">
                Registration Open
              </span>
            </div>
          </div>

          {/* Registration Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-4 md:pt-6">
            <button
              onClick={handleRegistrationClick}
              className="px-8 md:px-10 py-3 md:py-4 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 hover:from-cyan-400 hover:via-purple-500 hover:to-pink-400 text-white font-bold text-base md:text-lg rounded-xl md:rounded-2xl transition-all duration-300 shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transform hover:-translate-y-2 hover:scale-105 flex items-center justify-center gap-2"
            >
              Register Now
              <ExternalLink className="w-4 h-4" />
            </button>
            <button className="px-8 md:px-10 py-3 md:py-4 bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white font-bold text-base md:text-lg rounded-xl md:rounded-2xl transition-all duration-300 shadow-lg shadow-slate-500/25 hover:shadow-slate-500/40 transform hover:-translate-y-1">
              Learn More
            </button>
          </div>

          {/* Registration Deadline */}
          <div className="pt-4 border-t border-slate-700/50">
            <p className="text-slate-400 text-sm">
              <strong className="text-white">Registration Deadline:</strong>{" "}
              Don&apos;t miss out - slots are filling fast!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
