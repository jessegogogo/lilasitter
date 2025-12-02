import React, { useEffect, useState } from 'react';

export const LivingBackground: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-forest-950 pointer-events-none">
      
      {/* 1. Base Nature Texture - Deep Forest */}
      {/* A dark, rich forest texture that provides depth and the "body" of nature */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2600&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-luminosity"
        style={{ filter: 'contrast(1.2) brightness(0.8)' }}
      ></div>

      {/* 2. Drifting Mist Layers - The "Breath" */}
      {/* Layer 1: Slow drift to right */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-forest-900/30 to-transparent w-[200%] animate-mist-drift opacity-40 mix-blend-screen"></div>
      
      {/* Layer 2: Slow drift to left (offset) to create turbulence feel */}
      <div 
        className="absolute inset-0 bg-gradient-to-l from-transparent via-moss-900/20 to-transparent w-[200%] animate-mist-drift opacity-30 mix-blend-screen"
        style={{ animationDirection: 'reverse', animationDuration: '35s' }}
      ></div>

      {/* 3. Global Vignette for focus */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#0a120d_90%)]"></div>

      {/* 4. Floating Spores/Particles - The "Spirit" */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-earth-300/30 rounded-full blur-[1px]"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              left: Math.random() * 100 + '%',
              animation: `floatUp ${20 + Math.random() * 20}s linear infinite`,
              animationDelay: `-${Math.random() * 20}s`,
              opacity: Math.random() * 0.4 + 0.1
            }}
          ></div>
        ))}
      </div>
      
      {/* 5. Texture Noise to ground the digital feel */}
      <div className="absolute inset-0 bg-noise opacity-[0.05] mix-blend-overlay"></div>
    </div>
  );
};