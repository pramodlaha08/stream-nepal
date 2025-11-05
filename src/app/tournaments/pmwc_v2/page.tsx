/**
 * PMWC v2 Tournament Page with Google Sheets Integration
 */
import { pmwc_v2Tournament, isTournamentStreamed } from "@/data";
import TournamentHeader from "@/components/TournamentHeader";
import TournamentDetails from "@/components/TournamentDetails";
import TournamentSlotsLive from "@/components/TournamentSlotsLive";
import CallToAction from "@/components/CallToAction";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PMWC 2.0 - PUBG Mobile Warriors Cup | Stream Nepal",
  description:
    "Join the ultimate PUBG Mobile tournament featuring the best teams from Nepal. Battle for glory and massive prize pools.",
  keywords:
    "PUBG Mobile, tournament, esports, gaming, Nepal, PMWC, warriors cup, live registration",
};

// Revalidate every 30 seconds to keep data fresh
export const revalidate = 30;

export default async function PMWCv2Page() {
  // Fetch initial data from Google Sheets on server side
  let initialSlots = [];
  let initialStats = null;
  let fetchError = null;

  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const response = await fetch(`${baseUrl}/api/sheets/slots`, {
      next: { revalidate: 30 },
    });

    if (response.ok) {
      const result = await response.json();
      if (result.success) {
        initialSlots = result.data;
        initialStats = result.count;
      }
    }
  } catch (error) {
    console.error("Failed to fetch initial slots data:", error);
    fetchError = "Failed to load registration data";
  }
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

            {/* Live Tournament Slots from Google Sheets */}
            <section>
              <TournamentSlotsLive
                maxTeams={pmwc_v2Tournament.maxTeams}
                initialSlots={initialSlots}
                initialStats={initialStats}
                fetchError={fetchError}
              />
            </section>

            {/* Call to Action */}
            {isTournamentStreamed(pmwc_v2Tournament) && (
              <section>
                <CallToAction
                  isStreamed={isTournamentStreamed(pmwc_v2Tournament)}
                  registrationUrl={pmwc_v2Tournament.registrationUrl}
                  youtubeVideoId={pmwc_v2Tournament.youtubeVideoId}
                  tournamentName={pmwc_v2Tournament.name}
                />
              </section>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
