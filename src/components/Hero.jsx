import React from 'react';
import { motion } from 'framer-motion';

const WebBackground = () => (
  <svg
    className="pointer-events-none absolute inset-0 h-full w-full"
    viewBox="0 0 1200 800"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <defs>
      <radialGradient id="rg" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stopColor="rgba(239,68,68,0.20)" />
        <stop offset="50%" stopColor="rgba(2,6,23,0)" />
        <stop offset="100%" stopColor="rgba(2,6,23,0)" />
      </radialGradient>
    </defs>
    <rect width="1200" height="800" fill="url(#rg)" />
    {[...Array(12)].map((_, i) => (
      <path
        key={i}
        d={`M ${100 + i * 80} -50 C ${200 + i * 80} 150, ${0 + i * 80} 400, ${100 + i * 80} 850`}
        stroke="rgba(148,163,184,0.15)"
        strokeWidth="1"
        fill="none"
      />
    ))}
  </svg>
);

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <WebBackground />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(59,130,246,0.15),transparent_50%)]" />
      </div>
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-24 pt-16 md:grid-cols-2 md:gap-12 md:pb-28 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-600/10 px-3 py-1 text-xs text-red-200">
            Friendly Neighborhood Website
          </span>
          <h1 className="font-extrabold tracking-tight text-white">
            <span className="block text-4xl leading-tight sm:text-5xl md:text-6xl">
              With great power
            </span>
            <span className="block bg-gradient-to-r from-red-500 via-red-400 to-rose-300 bg-clip-text text-4xl leading-tight text-transparent sm:text-5xl md:text-6xl">
              comes great responsibility
            </span>
          </h1>
          <p className="max-w-xl text-base text-slate-300 md:text-lg">
            Swing through the Spider-Verse, explore iconic suits, uncanny abilities, and the legendary foes that test our hero. Built with React, Tailwind, and a dash of spidey-sense.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#highlights"
              className="rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(220,38,38,0.35)] transition hover:bg-red-500"
            >
              Swing In
            </a>
            <a
              href="https://www.youtube.com/results?search_query=spider-man+trailer"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-white/30 hover:text-white"
            >
              Watch Trailers
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="relative mx-auto aspect-square w-80 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-2xl ring-1 ring-white/5 md:w-[28rem]">
            <div className="absolute inset-0 bg-[radial-gradient(75%_60%_at_50%_40%,rgba(239,68,68,0.2),transparent_60%)]" />
            <div className="absolute -left-28 -top-28 h-56 w-56 rounded-full bg-red-600/20 blur-3xl" />
            <div className="absolute -bottom-28 -right-24 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />
            <motion.div
              initial={{ rotate: -10 }}
              animate={{ rotate: 10 }}
              transition={{ repeat: Infinity, repeatType: 'reverse', duration: 4, ease: 'easeInOut' }}
              className="absolute inset-6"
            >
              <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden>
                <g stroke="currentColor" strokeWidth="0.7" fill="none" className="text-slate-300/30">
                  {[...Array(6)].map((_, i) => (
                    <circle key={i} cx="50" cy="50" r={15 + i * 8} />
                  ))}
                  {[...Array(12)].map((_, i) => (
                    <line
                      key={i}
                      x1="50"
                      y1="50"
                      x2={50 + 50 * Math.cos((i * Math.PI) / 6)}
                      y2={50 + 50 * Math.sin((i * Math.PI) / 6)}
                    />
                  ))}
                </g>
              </svg>
            </motion.div>
            <div className="relative z-10 mt-28 text-center md:mt-32">
              <p className="text-xs uppercase tracking-widest text-slate-300">Earth-616</p>
              <p className="mt-1 text-2xl font-black tracking-tight text-white">Spider-Man</p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">Peter Parker</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
