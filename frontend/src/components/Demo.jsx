import { useEffect, useState } from 'react';

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function Demo() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${API}/events`);
        const data = await res.json();
        setEvents(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <section id="demo" className="w-full bg-black py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h3 className="text-2xl font-semibold md:text-3xl">Live demo data</h3>
        <p className="mt-2 text-white/70">This section fetches events from the API you just spun up.</p>

        {loading ? (
          <p className="mt-6 text-white/70">Loading events…</p>
        ) : events.length === 0 ? (
          <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-6">
            <p className="text-white/80">No events yet. Try creating one with a POST to /events.</p>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((e) => (
              <div key={e.id} className="rounded-xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-wide text-white/60">{new Date(e.start_time).toLocaleString()}</p>
                <h4 className="mt-2 text-xl font-semibold">{e.title}</h4>
                <p className="mt-1 line-clamp-3 text-white/70">{e.description}</p>
                <p className="mt-3 text-sm text-white/60">{e.venue}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
