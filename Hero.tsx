import React from 'react';
import { SectionId, ContentProps } from '../types';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC<ContentProps> = ({ lang, avatarUrl }) => {
  const displayAvatar = avatarUrl || "https://images.unsplash.com/photo-1542259648-5c6c64601362?q=80&w=1000&auto=format&fit=crop";

  return (
    <section id={SectionId.HOME} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* --- ATMOSPHERE (Local to Hero) --- */}
      {/* Note: The main deep forest texture now comes from LivingBackground.tsx */}
      
      {/* 1. Top Ridge Glow: Specific to the 'Hero' scene - Sunlight hitting the canopy */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[120%] h-[70%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-earth-400/10 via-forest-900/20 to-transparent blur-[80px] opacity-60"></div>

      {/* 2. Mist Layers (Bottom gradient to blend into next section) */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-forest-950 via-forest-950/60 to-transparent"></div>

      {/* 3. Drifting Leaves / Organic Elements */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Leaf 1: Top Left */}
        <div className="absolute top-[15%] left-[10%] opacity-20 text-forest-500 animate-leaf-float" style={{ animationDuration: '14s' }}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
             <path d="M12 2C7 2 4 7 4 12C4 17 8 22 12 22C16 22 20 17 20 12C20 7 17 2 12 2ZM12 20C9 20 6 16 6 12C6 8 9 4 12 4C15 4 18 8 18 12C18 16 15 20 12 20Z" opacity="0.6"/>
          </svg>
        </div>
        
        {/* Leaf 2: Top Right */}
        <div className="absolute top-[25%] right-[15%] opacity-15 text-moss-500 animate-leaf-float" style={{ animationDuration: '18s', animationDelay: '2s' }}>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
             <path d="M20.2 17.6c-2.8-5.6-7.8-8.6-13.2-8.6-1.5 0-2.9.2-4.2.7.4-4.2 2.6-7.8 6-9.7 0 0-3.3 2.2-4.9 6.2C2.3 9.7 1.5 13.6 2 17.6c.1.9.9 1.5 1.7 1.4.9-.1 1.5-.9 1.4-1.7-.4-3.4.2-6.7 1.8-9.2 1.1-.4 2.3-.6 3.5-.6 4.3 0 8.3 2.4 10.6 6.9.4.8 1.3 1.1 2.1.7.8-.4 1.1-1.3.7-2.1z"/>
          </svg>
        </div>

        {/* Leaf 3: Floating Spore (Large) */}
        <div className="absolute bottom-[40%] left-[20%] w-6 h-6 bg-earth-400/20 rounded-full blur-md animate-leaf-float" style={{ animationDuration: '20s', animationDelay: '5s' }}></div>

        {/* Leaf 4: Bottom Right */}
        <div className="absolute bottom-[20%] right-[20%] opacity-20 text-earth-500 animate-leaf-float" style={{ animationDuration: '22s', animationDelay: '1s' }}>
           <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C12 2 4 10 4 15C4 18.8 7.2 22 12 22C16.8 22 20 18.8 20 15C20 10 12 2 12 2Z" />
           </svg>
        </div>
      </div>

      {/* --- CONTENT --- */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-2 gap-4 sm:gap-12 items-center pt-20">
        
        {/* Left: Text */}
        <div className="text-left space-y-6 sm:space-y-10">
          
          <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-7xl text-mist-100 leading-tight tracking-wide opacity-0 animate-fade-in drop-shadow-lg" style={{ animationDelay: '0.2s' }}>
            {lang === 'en' ? (
              <>
                Psychedelic Trip Sitting <br />
                <span className="text-earth-300 italic">& Integration</span>
              </>
            ) : (
              <>
                致幻剂陪伴 <br />
                <span className="text-earth-300 italic">& 整合支持</span>
              </>
            )}
          </h1>

          <div className="w-12 sm:w-16 h-[1px] bg-earth-400/50 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}></div>

          <p className="font-serif text-sm sm:text-lg md:text-xl text-mist-200/90 leading-relaxed max-w-lg opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
             {lang === 'en' ? (
                "Grounded, one-on-one support in the San Francisco Bay Area"
             ) : (
                "旧金山湾区稳固的一对一支持"
             )}
          </p>

          <div className="pt-2 sm:pt-4 opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
            <a 
              href={`#${SectionId.CONTACT}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(SectionId.CONTACT)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-block px-4 py-2 sm:px-10 sm:py-4 bg-earth-500/10 hover:bg-earth-500/20 border border-earth-500/40 text-earth-300 font-serif italic tracking-widest transition-all duration-500 rounded-sm hover:translate-y-[-2px] uppercase text-[10px] sm:text-sm whitespace-nowrap"
            >
              {lang === 'en' ? 'Book a free call' : '预约免费咨询'}
            </a>
          </div>

        </div>

        {/* Right: Photo Placeholder (Mushroom Cap / Portrait) */}
        <div className="flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: '1s' }}>
           <div className="relative w-32 h-32 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border border-white/10 ring-1 ring-earth-500/30 group">
              {/* Image from placeholder URL - Removed grayscale classes */}
              <img 
                src={displayAvatar} 
                alt="Portrait in Nature" 
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1542259648-5c6c64601362?q=80&w=1000&auto=format&fit=crop";
                }}
                className="w-full h-full object-cover transition-transform duration-1000 transform group-hover:scale-105"
              />
           </div>
        </div>

      </div>

      {/* Scroll Hint */}
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-earth-400/60 hover:text-earth-300 transition-colors cursor-pointer animate-breath"
        onClick={() => document.getElementById(SectionId.ABOUT)?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown strokeWidth={1} size={32} />
      </div>

    </section>
  );
};