import { Ticket, QrCode, CreditCard, BarChart3, Gift, Layers3 } from 'lucide-react';

const features = [
  {
    icon: Ticket,
    title: 'Online Ticketing',
    desc: 'Create and sell tickets in minutes. Seat selection, mobile-ready checkout, instant confirmations.'
  },
  {
    icon: CreditCard,
    title: 'Secure Payments',
    desc: 'Integrated processors with encrypted transactions, cards and digital wallets supported.'
  },
  {
    icon: QrCode,
    title: 'Smart Scanning',
    desc: 'Mobile app scanning with instant validation, duplicate prevention, and live attendance.'
  },
  {
    icon: Gift,
    title: 'Vouchers & Promotions',
    desc: 'Create discount codes, control validity windows, limits, and VIP pricing.'
  },
  {
    icon: BarChart3,
    title: 'Real-Time Dashboard',
    desc: 'Track sales, revenue, and attendance. Export reports in one click.'
  },
  {
    icon: Layers3,
    title: 'Multi-Event Management',
    desc: 'Run multiple events from one place. Separate pages, ticket types, and settings.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-black py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold md:text-4xl">Everything you need to run unforgettable events</h2>
        <p className="mt-3 max-w-2xl text-white/70">From ticket creation to real-time scanning and analytics, Duatix gives you complete control.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-white/10 p-2"><Icon className="h-5 w-5" /></div>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
