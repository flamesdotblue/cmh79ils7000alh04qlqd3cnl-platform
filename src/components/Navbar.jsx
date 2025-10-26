import React from 'react';
import { Star } from 'lucide-react';

const SpiderIcon = ({ className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    className={className}
    aria-hidden="true"
  >
    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="32" cy="28" r="6" />
      <path d="M32 2v10M32 46v16M10 28H2M62 28h-8M13 13l7 7M51 13l-7 7M13 43l7-7M51 43l-7-7" />
    </g>
  </svg>
);

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#home" className="group flex items-center gap-2">
          <span className="relative grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-red-600 to-red-700 text-white ring-1 ring-white/20 transition-transform group-hover:rotate-12">
            <SpiderIcon className="h-5 w-5" />
          </span>
          <span className="font-semibold tracking-tight">Spider-Verse</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <a href="#home" className="text-slate-300 transition hover:text-white">Home</a>
          <a href="#highlights" className="text-slate-300 transition hover:text-white">Highlights</a>
          <a href="#about" className="text-slate-300 transition hover:text-white">About</a>
        </nav>
        <a
          href="#join"
          className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-600/10 px-4 py-2 text-sm font-medium text-red-200 shadow-[0_0_15px_rgba(220,38,38,0.2)] transition hover:bg-red-600/20 hover:text-white"
        >
          <Star className="h-4 w-4" />
          Join the Spidey-Squad
        </a>
      </div>
    </header>
  );
}
