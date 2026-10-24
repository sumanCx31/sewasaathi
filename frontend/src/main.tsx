import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Navbar from './components/navbar/navbar.tsx'
import Home from './pages/home.tsx'
import Footer from './components/footer/footer.tsx'
import ServicesPage from './pages/services.tsx'

function App() {
  const [lang, setLang] = useState<'en' | 'np'>('en');

  return (
    <>
      <Navbar currentLang={lang} onLanguageChange={setLang} />
      <Home lang={lang} />
      <ServicesPage lang={lang} />
      <Footer lang={lang} />
    </>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)