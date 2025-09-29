import {
  ffwarzoneeTournament,
  ffwarzoneSlots,
  isTournamentStreamed,
} from "@/data";
import TournamentHeader from "@/components/TournamentHeader";
import TournamentDetails from "@/components/TournamentDetails";
import TournamentSlots from "@/components/TournamentSlots";
import CallToAction from "@/components/CallToAction";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FFWC - Free Fire Warzone Championship | Stream Nepal",
  description:
    "Join Nepal's premier Free Fire tournament featuring intense battle royale action and massive prize pools.",
  keywords:
    "Free Fire, tournament, esports, gaming, Nepal, FFWC, warzone, battle royale",
};

export default function FFWarzonePage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-slate-950">
        {/* Background Effects */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-l from-red-500/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-to-t from-yellow-500/10 to-transparent rounded-full blur-3xl"></div>
        </div>

        {/* Add proper spacing from navbar */}
        <div className="pt-24 md:pt-28 lg:pt-32">
          <div className="container mx-auto px-4 pb-8 space-y-16">
            {/* Tournament Header */}
            <section>
              <TournamentHeader tournament={ffwarzoneeTournament} />
            </section>

            {/* Tournament Details */}
            <section>
              <TournamentDetails tournament={ffwarzoneeTournament} />
            </section>

            {/* Tournament Slots */}
            <section>
              <TournamentSlots
                slots={ffwarzoneSlots}
                maxTeams={ffwarzoneeTournament.maxTeams}
              />
            </section>

            {/* Call to Action Section */}
            <CallToAction
              isStreamed={isTournamentStreamed(ffwarzoneeTournament)}
              registrationUrl={ffwarzoneeTournament.registrationUrl}
              youtubeVideoId={ffwarzoneeTournament.youtubeVideoId}
              tournamentName={ffwarzoneeTournament.name}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
