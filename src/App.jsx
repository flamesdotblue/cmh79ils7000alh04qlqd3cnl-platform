import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Spotlight from './components/Spotlight';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 selection:bg-red-600/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Spotlight />
      </main>
      <Footer />
    </div>
  );
}

export default App;
