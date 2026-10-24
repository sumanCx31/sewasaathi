import React, { useState } from 'react';
import { HeroAI } from '../components/heroAI';

interface HomeProps {
  lang?: 'en' | 'np';
}

export const Home: React.FC<HomeProps> = ({ lang = 'en' }) => {
  const handleSearchSubmit = (userQuery: string) => {
    console.log('Searching for:', userQuery);
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-emerald-100 selection:text-emerald-900 pt-16">
      <HeroAI lang={lang} onSearchSubmit={handleSearchSubmit} />
    </main>
  );
};

export default Home;