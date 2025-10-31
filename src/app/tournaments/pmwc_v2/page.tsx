import { pmwc_v2Tournament, pmwc_v2Slots, isTournamentStreamed } from "@/data";
import TournamentHeader from "@/components/TournamentHeader";
import TournamentDetails from "@/components/TournamentDetails";
import TournamentSlots from "@/components/TournamentSlots";
import CallToAction from "@/components/CallToAction";
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

        {/* Add proper spacing from navbar */}
        <div className="pt-24 md:pt-28 lg:pt-32">
          <div className="container mx-auto px-4 pb-8 space-y-16">
            {/* Tournament Header */}
            <section>
              <TournamentHeader tournament={pmwc_v2Tournament} />
            </section>

            {/* Tournament Details */}
            <section>
              <TournamentDetails tournament={pmwc_v2Tournament} />
            </section>

            {/* Tournament Slots */}
            <section>
              <TournamentSlots
                slots={pmwc_v2Slots}
                maxTeams={pmwc_v2Tournament.maxTeams}
              />
            </section>

            {/* Call to Action Section */}
            <CallToAction
              isStreamed={isTournamentStreamed(pmwc_v2Tournament)}
              registrationUrl={pmwc_v2Tournament.registrationUrl}
              youtubeVideoId={pmwc_v2Tournament.youtubeVideoId}
              tournamentName={pmwc_v2Tournament.name}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
