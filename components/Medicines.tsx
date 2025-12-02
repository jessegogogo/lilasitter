import React from 'react';
import { SectionId, ContentProps } from '../types';

export const Medicines: React.FC<ContentProps> = ({ lang }) => {
  return (
    <section id={SectionId.MEDICINES} className="py-24 bg-forest-900 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="block text-earth-400 text-xs tracking-[0.2em] uppercase mb-4">
            {lang === 'en' ? 'Education' : '物质科普'}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-mist-100 italic">
            {lang === 'en' ? 'Understanding the Medicines' : '关于致幻剂的专业视角'}
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-mist-200/60 text-sm font-light leading-relaxed">
            {lang === 'en' 
              ? "A professional overview of the substances commonly encountered in this work. This information is for educational and harm-reduction purposes only."
              : "以下是关于常见致幻物质的客观介绍。本信息仅用于科普教育与降低伤害（Harm Reduction），不构成使用建议。"}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Psilocybin */}
          <div className="bg-forest-950/50 p-8 border border-white/5 hover:border-moss-500/30 transition-all duration-500 group">
            <div className="text-moss-500 mb-6 opacity-80 group-hover:opacity-100">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M12 2a5 5 0 0 1 5 5v1a5 5 0 0 1-5 5H7a5 5 0 0 1 5-5V7a5 5 0 0 1-5-5h5Z" />
                <path d="M12 13v9" />
                <path d="M8 22h8" />
              </svg>
            </div>
            <h3 className="text-xl font-serif text-mist-100 mb-2">Psilocybin</h3>
            <p className="text-xs text-earth-400 uppercase tracking-wider mb-6">Mushrooms / Tryptamine</p>
            
            <div className="space-y-4 text-sm text-mist-200/70 leading-relaxed font-light">
              <p>
                {lang === 'en' 
                  ? "Often called the 'organic teacher.' Psilocybin is known for its earthy, emotional, and sometimes ancestral quality. It promotes neuroplasticity and can facilitate deep emotional release and ego dissolution."
                  : "常被称为“有机导师”。具有大地感、强烈的情感流动和某种“古老”的特质。科学研究表明其能促进神经可塑性（Neuroplasticity），有助于深层情绪释放和自我瓦解（Ego Dissolution）。"}
              </p>
              <div className="pt-4 border-t border-white/5 flex justify-between text-xs text-stone-500">
                <span>{lang === 'en' ? 'Duration: 4-6 hrs' : '时长: 4-6 小时'}</span>
                <span>{lang === 'en' ? 'Nature: Organic' : '特质: 有机/内省'}</span>
              </div>
            </div>
          </div>

          {/* LSD */}
          <div className="bg-forest-950/50 p-8 border border-white/5 hover:border-sky-800/50 transition-all duration-500 group">
             <div className="text-sky-600 mb-6 opacity-80 group-hover:opacity-100">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <circle cx="12" cy="12" r="10" />
                <path d="m4.93 4.93 14.14 14.14" />
                <path d="m14.83 9.17-5.66 5.66" />
              </svg>
            </div>
            <h3 className="text-xl font-serif text-mist-100 mb-2">LSD</h3>
            <p className="text-xs text-earth-400 uppercase tracking-wider mb-6">Lysergamide</p>
            
            <div className="space-y-4 text-sm text-mist-200/70 leading-relaxed font-light">
              <p>
                {lang === 'en'
                  ? "Known for clarity, pattern recognition, and a 'cosmic' analytical perspective. LSD acts as a non-specific amplifier of consciousness, often dissolving boundaries between the self and the external environment."
                  : "以清晰度、模式识别和“宇宙视角”著称。LSD 是一种非特异性的意识放大器，常会消融自我与外部环境的界限，带来高度的分析感与联结感。"}
              </p>
              <div className="pt-4 border-t border-white/5 flex justify-between text-xs text-stone-500">
                <span>{lang === 'en' ? 'Duration: 8-12 hrs' : '时长: 8-12 小时'}</span>
                <span>{lang === 'en' ? 'Nature: Analytical' : '特质: 清晰/宏大'}</span>
              </div>
            </div>
          </div>

          {/* MDMA */}
          <div className="bg-forest-950/50 p-8 border border-white/5 hover:border-earth-400/30 transition-all duration-500 group">
             <div className="text-earth-400 mb-6 opacity-80 group-hover:opacity-100">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </div>
            <h3 className="text-xl font-serif text-mist-100 mb-2">MDMA</h3>
            <p className="text-xs text-earth-400 uppercase tracking-wider mb-6">Empathogen</p>
            
            <div className="space-y-4 text-sm text-mist-200/70 leading-relaxed font-light">
              <p>
                {lang === 'en'
                  ? "A powerful heart-opener. It reduces activity in the amygdala (fear center), allowing difficult memories or trauma to be processed with self-compassion and safety. It is grounding and relational."
                  : "强大的“开心”物质（Heart Opener）。它能降低杏仁核（恐惧中心）的活跃度，让人能在极大的安全感与自我慈悲中处理创伤记忆。它具有很强的落地感和关系疗愈力。"}
              </p>
              <div className="pt-4 border-t border-white/5 flex justify-between text-xs text-stone-500">
                <span>{lang === 'en' ? 'Duration: 4-6 hrs' : '时长: 4-6 小时'}</span>
                <span>{lang === 'en' ? 'Nature: Relational' : '特质: 温暖/安全'}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Disclaimer */}
        <div className="mt-16 p-6 border border-earth-500/20 bg-forest-950/30 text-center">
            <p className="text-xs text-stone-500 font-sans tracking-wide">
                {lang === 'en' 
                 ? "Safety Note: Set (mindset) and Setting (environment) are crucial for all these substances. Contraindications exist for certain medical conditions."
                 : "安全提示：所有药物体验都高度依赖于 Set（心态）与 Setting（环境）。特定的身体或心理状况可能存在禁忌症。"}
            </p>
        </div>

      </div>
    </section>
  );
};