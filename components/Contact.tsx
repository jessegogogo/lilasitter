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
            ? "Ready to explore if this is the right path for you? Book a free 20-minute consultation to discuss your intentions and ask any questions." 
            : "准备好了解这是否是适合你的路径了吗？预约一个免费的 20 分钟咨询，讨论你的意图并提出任何问题。"}
        </p>

        <div className="flex flex-col items-center gap-6">
          <a 
            href="https://calendar.app.google/hoYGKExCrUwRkwVH7"
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-earth-500 text-forest-950 rounded-sm font-sans font-medium tracking-widest uppercase text-sm hover:bg-earth-400 transition-all shadow-lg"
          >
            {lang === 'en' ? 'Book a Free Call' : '预约免费通话'}
          </a>

          <div className="flex flex-col items-center gap-2 mt-4">
            <a href="mailto:care@lilasitter.com" className="text-earth-300 hover:text-earth-200 transition-colors flex items-center gap-2">
              <Mail size={14} />
              <span className="tracking-widest uppercase text-[10px]">care@lilasitter.com</span>
            </a>
            <div className="flex items-center gap-2 text-stone-500 text-xs tracking-wide">
              <MapPin size={12} />
              <span>San Francisco Bay Area</span>
            </div>
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
