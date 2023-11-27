import Hero from "@/app/components/Hero";
import Nav from "@/app/components/Nav";
import UrlShortner from "./components/UrlShortner";
import Urls from "./components/Urls";

export default function Home() {
  return (
    <main className="mx-auto max-w-screen-xl p-5">
      <header>
        <Nav />
      </header>
      <Hero />
      <UrlShortner />
      <Urls />
    </main>
  );
}
