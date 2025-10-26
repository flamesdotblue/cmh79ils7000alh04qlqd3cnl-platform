import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Skull } from 'lucide-react';

const Card = ({ icon: Icon, title, desc, badges, tone }) => (
  <motion.div
    initial={{ y: 16, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.5 }}
    className={`group relative overflow-hidden rounded-2xl border p-6 shadow-lg ${
      tone === 'red'
        ? 'border-red-500/20 bg-red-600/5 hover:bg-red-600/10'
        : tone === 'blue'
        ? 'border-blue-500/20 bg-blue-600/5 hover:bg-blue-600/10'
        : 'border-emerald-500/20 bg-emerald-600/5 hover:bg-emerald-600/10'
    }`}
  >
    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-20 blur-3xl transition group-hover:opacity-30 group-hover:blur-2xl" style={{ background: tone === 'red' ? '#ef4444' : tone === 'blue' ? '#3b82f6' : '#10b981' }} />
    <div className="relative z-10">
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white ring-1 ring-inset ring-white/10">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-1 text-sm text-slate-300">{desc}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {badges.map((b) => (
          <span
            key={b}
            className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200"
          >
            {b}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

export default function Spotlight() {
  return (
    <section id="highlights" className="relative py-16 md:py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_50%_at_50%_0%,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Spotlight</h2>
            <p className="mt-1 text-sm text-slate-300">Abilities, suits, and the rogues that keep Spidey on his toes.</p>
          </div>
          <a href="#about" className="text-sm text-slate-300 underline decoration-white/20 underline-offset-4 hover:text-white">Learn more</a>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <Card
            icon={Zap}
            title="Uncanny Abilities"
            desc="From wall-crawling to the tingling sixth sense, agility and intellect make a potent combo."
            badges={["Wall-Crawling", "Web-Slinging", "Spidey-Sense"]}
            tone="emerald"
          />
          <Card
            icon={Shield}
            title="Iconic Suits"
            desc="Classic threads and cutting-edge tech: adapt to any universe with style."
            badges={["Red & Blue", "Iron Spider", "Stealth Suit"]}
            tone="blue"
          />
          <Card
            icon={Skull}
            title="Rogues Gallery"
            desc="A hero is measured by his villains: cunning, chaos, and symbiotes abound."
            badges={["Green Goblin", "Doc Ock", "Venom"]}
            tone="red"
          />
        </div>
      </div>
      <div id="about" className="mx-auto mt-16 max-w-3xl px-4 text-slate-300">
        <p className="leading-relaxed">
          Across countless realities, the mask symbolizes hope, humor, and heart. Whether you're swinging between Manhattan's skyscrapers or debugging code into the night, remember: doing the right thing starts with small choices. This site is a homage to the friendly neighborhood hero and the creativity of the Spider-Verse.
        </p>
      </div>
    </section>
  );
}
