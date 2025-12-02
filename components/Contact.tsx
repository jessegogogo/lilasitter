import React from 'react';
import { SectionId, ContentProps } from '../types';
import { Mail, MapPin } from 'lucide-react';

export const Contact: React.FC<ContentProps> = ({ lang }) => {
  return (
    <section id={SectionId.CONTACT} className="py-32 bg-forest-900 relative">
      <div className="max-w-2xl mx-auto px-6 text-center">
        
        <h2 className="font-serif text-3xl text-mist-100 mb-8">
          {lang === 'en' ? 'Connect' : '开始对话'}
        </h2>
        
        <p className="text-mist-200/70 font-light mb-12 leading-relaxed text-lg">
          {lang === 'en' 
            ? "Curious if this path is right for you? You can book a gentle 20-minute call." 
            : "想了解是否适合开始？可以预约一个轻松、安静的 20 分钟通话。"}
        </p>

        <div className="flex flex-col items-center gap-6">
          <a href="mailto:care@lilasitter.com" className="inline-flex items-center gap-3 px-8 py-3 border border-earth-500/30 rounded-sm text-earth-300 hover:bg-forest-800 hover:border-earth-500 transition-all">
            <Mail size={16} />
            <span className="tracking-widest uppercase text-xs">care@lilasitter.com</span>
          </a>

          <div className="flex items-center gap-2 text-stone-500 text-sm tracking-wide">
            <MapPin size={14} />
            <span>San Francisco Bay Area</span>
          </div>
          
          <div className="text-stone-600 text-xs tracking-widest mt-2">
            {lang === 'en' ? '🌲 Chinese & English available' : '🌿 支持中文 & English'}
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-white/5 opacity-40 text-[10px] tracking-[0.3em] uppercase">
           Lila Sitter • Conscious Care
        </div>

      </div>
    </section>
  );
};