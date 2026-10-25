import React, { useState } from 'react';
import { HeroAI } from '../components/heroAI';

interface Source {
  document: string;
  services: string[];
  chunk: number;
  similarity: number;
}

interface SearchData {
  answer: string;
  sources: Source[];
}

interface HomeProps {
  lang?: 'en' | 'np';
}

export const Home: React.FC<HomeProps> = ({ lang = 'en' }) => {
  const [lastQuery, setLastQuery] = useState<string>('');
  const [lastResult, setLastResult] = useState<SearchData | null>(null);

  const handleSearchSubmit = (userQuery: string, data?: SearchData) => {
    setLastQuery(userQuery);
    if (data) {
      setLastResult(data);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      <HeroAI lang={lang} onSearchSubmit={handleSearchSubmit} />
    </main>
  );
};

export default Home;