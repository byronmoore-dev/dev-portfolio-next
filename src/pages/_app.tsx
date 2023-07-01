import HeroBlock from "@/components/hero";
import "@/styles/globals.css";

export default function App() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-beige-100 overflow-x-hidden">
      {/*Noise Filter */}
      <div className="fixed z-10 opacity-50 left-0 top-0 noise w-full h-screen pointer-events-none bg-white/10" />

      <HeroBlock />
      <HeroBlock />
    </main>
  );
}
