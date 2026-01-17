import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import AnimatedBackground from "../components/AnimatedBackground";
import Footer from "../components/Footer";
import ServicesShowcase from "../components/ServicesShowcase";
import UpcomingTournaments from "../components/UpcomingTournaments";
import LiveStreamingSection from "../components/LiveStreamingSection";
import ContactUs from "../components/ContactUs";

export default function HomePage() {
  return (
    <div className="relative">
      <AnimatedBackground />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <ServicesShowcase />
        <UpcomingTournaments />
        <LiveStreamingSection />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}
