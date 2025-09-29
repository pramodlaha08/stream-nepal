import { pmwcTournament, pmwcSlots } from "@/data/tournaments";
import TournamentHeader from "@/components/TournamentHeader";
import TournamentDetails from "@/components/TournamentDetails";
import TournamentSlots from "@/components/TournamentSlots";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PMWC - Pubg Mobile Warriors Cup | Stream Nepal",
  description:
    "Join the ultimate PUBG Mobile tournament featuring the best teams from Nepal. Battle for glory and massive prize pools.",
  keywords:
    "PUBG Mobile, tournament, esports, gaming, Nepal, PMWC, warriors cup",
};

export default function PMWCPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-slate-950">
        {/* Background Effects */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-l from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-to-t from-pink-500/10 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 py-8 space-y-16">
          {/* Tournament Header */}
          <section>
            <TournamentHeader tournament={pmwcTournament} />
          </section>

          {/* Tournament Details */}
          <section>
            <TournamentDetails tournament={pmwcTournament} />
          </section>

          {/* Tournament Slots */}
          <section>
            <TournamentSlots
              slots={pmwcSlots}
              maxTeams={pmwcTournament.maxTeams}
            />
          </section>

          {/* Call to Action Section */}
          <section className="text-center py-16">
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-12 border border-slate-700/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
              <div className="relative space-y-6">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Ready to Compete?
                </h2>
                <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                  Join the most exciting PUBG Mobile tournament in Nepal.
                  Register your team now and compete for the ultimate prize.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                  <button className="px-10 py-4 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 hover:from-cyan-400 hover:via-purple-500 hover:to-pink-400 text-white font-bold text-lg rounded-2xl transition-all duration-300 shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transform hover:-translate-y-2 hover:scale-105">
                    Register Now
                  </button>
                  <button className="px-10 py-4 bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white font-bold text-lg rounded-2xl transition-all duration-300 shadow-lg shadow-slate-500/25 hover:shadow-slate-500/40 transform hover:-translate-y-1">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
