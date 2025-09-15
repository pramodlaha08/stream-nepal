import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import ServicesShowcase from "../components/ServicesShowcase";
import UpcomingTournaments from "../components/UpcomingTournaments";
import GamesSection from "../components/GamesSection";
import LiveStreamingSection from "../components/LiveStreamingSection";
import ContactUs from "../components/ContactUs";
import AnimatedBackground from "../components/AnimatedBackground";

export default function HomePage() {
  return (
    <div className="relative">
      <AnimatedBackground />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <ServicesShowcase />
        <UpcomingTournaments />
        <GamesSection />
        <LiveStreamingSection />
        <ContactUs />
      </main>
    </div>
  );
}
