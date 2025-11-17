import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';
import Demo from './components/Demo';

function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 text-white">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          <span className="font-semibold">Duatix</span>
        </div>
        <div className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#demo" className="hover:text-white">Demo</a>
          <a href="#get-started" className="rounded-md bg-white px-3 py-1.5 text-black">Get Started</a>
        </div>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black">
      <Navbar />
      <Hero />
      <Features />
      <Demo />
      <CTA />
      <footer className="border-t border-white/10 bg-black py-8 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Duatix — Built for concerts, conferences, and cinema.
      </footer>
    </div>
  );
}
