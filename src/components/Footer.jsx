import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-slate-400 md:flex-row">
        <p>
          © {new Date().getFullYear()} Spider-Verse Fan Site. Not affiliated with Marvel or Sony.
        </p>
        <div className="flex items-center gap-4">
          <a href="#home" className="hover:text-white">Back to top</a>
          <a
            href="https://www.marvel.com/characters/spider-man-peter-parker"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            Official Character Page
          </a>
        </div>
      </div>
    </footer>
  );
}
