import React from 'react';
import { SectionId, ContentProps } from '../types';

export const Sessions: React.FC<ContentProps> = ({ lang }) => {
  return (
    <section id={SectionId.SESSIONS} className="py-24 bg-forest-950 border-t border-white/5 relative">
      
      <div className="max-w-4xl mx-auto px-6">
        
        {/* --- SERVICES --- */}
        <div className="mb-24">
           <h2 className="font-serif text-3xl text-mist-100 mb-12">
             {lang === 'en' ? 'Services' : '服务内容'}
           </h2>

           <div className="space-y-12 border-l border-earth-500/20 pl-8 md:pl-12">
             
             {/* Prep */}
             <div className="relative">
               <div className="absolute -left-[39px] md:-left-[55px] top-2 w-3 h-3 rounded-full bg-earth-500/50"></div>
               <h3 className="text-earth-300 text-lg uppercase tracking-widest mb-2 font-sans">
                 {lang === 'en' ? 'Preparation' : '旅程准备'}
               </h3>
               <p className="font-serif text-lg text-mist-200 font-light leading-relaxed">
                 {lang === 'en' 
                   ? "Clarifying intention, emotional patterns, and the landscape of your inner world."
                   : "理解你的意图、情绪模式、身体状态，以及可能会在深层意识中出现的内容。"}
               </p>
             </div>

             {/* SITTING */}
             <div className="relative">
               <div className="absolute -left-[39px] md:-left-[55px] top-2 w-3 h-3 rounded-full bg-moss-500"></div>
               <h3 className="text-earth-300 text-lg uppercase tracking-widest mb-2 font-sans">
                 {lang === 'en' ? 'Trip Sitting' : '旅程陪伴'}
               </h3>
               <p className="text-xs text-earth-500 mb-2 uppercase tracking-wide">Psilocybin / LSD / MDMA</p>
               <p className="font-serif text-lg text-mist-200 font-light leading-relaxed">
                 {lang === 'en' 
                   ? "I stay awake, grounded, and fully present. You explore. I hold the clarity."
                   : "整个过程中，我保持清醒、稳度和觉知。你探索，我守住空间。"}
               </p>
             </div>

             {/* Integration */}
             <div className="relative">
               <div className="absolute -left-[39px] md:-left-[55px] top-2 w-3 h-3 rounded-full bg-earth-500/50"></div>
               <h3 className="text-earth-300 text-lg uppercase tracking-widest mb-2 font-sans">
                 {lang === 'en' ? 'Integration' : '整合'}
               </h3>
               <p className="font-serif text-lg text-mist-200 font-light leading-relaxed">
                 {lang === 'en' 
                   ? "Bringing the experience into your body and life. Where insight becomes transformation."
                   : "把体验带回生活、关系与身体里。让 insight 变成改变。"}
               </p>
             </div>

           </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 border-t border-white/5 pt-16">
          
          {/* --- PRICING --- */}
          <div>
            <h4 className="font-serif text-xl text-mist-100 mb-6 italic">
              {lang === 'en' ? 'Exchange' : '费用'}
            </h4>
            <div className="p-6 border border-earth-500/20 bg-forest-900/50 rounded-sm">
              <div className="flex justify-between items-baseline mb-6">
                <span className="text-earth-300 font-serif text-2xl">$800</span>
                <span className="text-mist-200/60 text-[10px] uppercase tracking-widest">
                  {lang === 'en' ? 'Full Journey Package' : '全程陪伴套餐'}
                </span>
              </div>
              <ul className="space-y-4 font-sans text-sm text-mist-200/80 font-light">
                <li className="flex items-start gap-3 border-b border-white/5 pb-2">
                  <span className="text-earth-500 mt-1">/</span>
                  <span>{lang === 'en' ? '2-hour Preparation Session' : '2小时旅程准备会谈'}</span>
                </li>
                <li className="flex items-start gap-3 border-b border-white/5 pb-2">
                  <span className="text-earth-500 mt-1">/</span>
                  <span>{lang === 'en' ? 'Full-day Trip Companionship' : '全天旅程陪伴'}</span>
                </li>
                <li className="flex items-start gap-3 border-b border-white/5 pb-2">
                  <span className="text-earth-500 mt-1">/</span>
                  <span>{lang === 'en' ? '1 Integration Session' : '1次整合会谈'}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* --- ETHICS --- */}
          <div>
            <h4 className="font-serif text-xl text-mist-100 mb-6 italic">
              {lang === 'en' ? 'Boundaries & Ethics' : '原则与边界'}
            </h4>
            <div className="font-sans text-xs md:text-sm text-mist-200/60 space-y-2 leading-relaxed tracking-wide">
              {lang === 'en' ? (
                <>
                  <p>I do not provide substances.</p>
                  <p>This is not therapy or diagnosis.</p>
                  <p>My work is presence, grounding, and awareness.</p>
                  <p>Journeys take place in your home or a mutually agreed location.</p>
                  <p className="text-earth-400">Your safety comes first.</p>
                </>
              ) : (
                <>
                  <p>我不提供任何物质。</p>
                  <p>我不做诊断，也不提供心理治疗。</p>
                  <p>我的工作是保持在场、稳度与觉知。</p>
                  <p>旅程在你家中或双方同意的地点进行。</p>
                  <p className="text-earth-400">安全永远是核心。</p>
                </>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};