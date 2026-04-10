import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { HowIWork } from './components/HowIWork';
import { Medicines } from './components/Medicines';
import { Sessions } from './components/Sessions';
import { Contact } from './components/Contact';
import { FAQ } from './components/FAQ';
import { AiAssistant } from './components/AiAssistant';
import { LivingBackground } from './components/LivingBackground';
import { RoleExplanation } from './components/RoleExplanation';
import { Language } from './types';

function App() {
  const [lang, setLang] = useState<Language>('en');

  // Updated with the user provided DIRECT image link + cache buster
  const AVATAR_URL = 'https://i.ibb.co/ccLtRHDN/avatar.jpg?t=force';

  return (
    <div className="font-sans text-stone-200 min-h-screen relative selection:bg-forest-700 selection:text-stone-100">
      
      {/* Dynamic Background System */}
      <LivingBackground />
      
      {/* Global Static Noise Overlay (CSS class in index.html) */}
      <div className="texture-overlay"></div>
      
      {/* Content Container - Z-index 20 ensures it is ABOVE the texture overlay (z-5) */}
      <div className="relative z-20">
        <Navbar lang={lang} setLang={setLang} avatarUrl={AVATAR_URL} />
        <main>
          <Hero lang={lang} avatarUrl={AVATAR_URL} />
          <About lang={lang} />
          <HowIWork lang={lang} />
          <RoleExplanation lang={lang} />
          <Medicines lang={lang} />
          <Sessions lang={lang} />
          <Contact lang={lang} />
        </main>
        <AiAssistant lang={lang} />
      </div>
    </div>
  );
}

export default App;