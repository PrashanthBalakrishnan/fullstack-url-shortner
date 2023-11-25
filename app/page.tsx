import Hero from "@/app/components/Hero";
import Nav from "@/app/components/Nav";
import UrlShortner from "./components/UrlShortner";

export default function Home() {
  return (
    <main className="mx-auto max-w-screen-xl p-5">
      <header>
        <Nav />
      </header>
      <Hero />
      <UrlShortner />
    </main>
  );
}
