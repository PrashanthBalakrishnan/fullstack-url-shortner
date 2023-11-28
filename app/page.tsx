import Hero from "@/app/components/Hero";
import Nav from "@/app/components/Nav";
import UrlShortner from "./components/UrlShortner";
import Statistics from "./components/Statistics";
import Boost from "./components/Boost";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="">
      <header>
        <Nav />
      </header>
      <Hero />
      <div className="bg-gray-100">
        <UrlShortner />
        <Statistics />
      </div>
      <div className="bg-[var(--primary-2)]">
        <Boost />
      </div>
      <footer className="bg-[var(--neutral-400)]">
        <Footer />
      </footer>
    </main>
  );
}
