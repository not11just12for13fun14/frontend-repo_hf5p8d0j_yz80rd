import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zks9uYILDPSX-UX6/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 pt-24 md:pt-28">
        <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs uppercase tracking-widest text-white/80 backdrop-blur">Duatix Event Management</span>
        <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
          Transform Your Events with Complete Digital Control
        </h1>
        <p className="max-w-2xl text-white/80 md:text-lg">
          Sell tickets online, scan at the door, run promotions, and track everything in real time — all in one platform.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <a href="#get-started" className="rounded-lg bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90">Get Started</a>
          <a href="#features" className="rounded-lg border border-white/20 bg-transparent px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:border-white/40">Explore Features</a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
