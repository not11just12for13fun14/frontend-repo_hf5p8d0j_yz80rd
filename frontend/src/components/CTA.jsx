export default function CTA() {
  return (
    <section id="get-started" className="w-full bg-black py-16 text-white">
      <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 text-center backdrop-blur">
        <h3 className="text-2xl font-semibold md:text-3xl">Launch your first event today</h3>
        <p className="mt-3 text-white/70">Set up ticket types, connect payments, and go live in minutes. No code required.</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a href="#demo" className="rounded-lg bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90">Create an Event</a>
          <a href="#demo" className="rounded-lg border border-white/20 bg-transparent px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:border-white/40">View Demo</a>
        </div>
      </div>
    </section>
  );
}
