import React from 'react';
import { SectionId, ContentProps } from '../types';

export const About: React.FC<ContentProps> = ({ lang }) => {
  return (
    <section id={SectionId.ABOUT} className="py-32 bg-forest-900 relative border-t border-white/5">
      <div className="max-w-3xl mx-auto px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-16">
          <span className="block text-earth-400 text-xs tracking-[0.2em] uppercase mb-6">
            {lang === 'en' ? 'About Me' : '关于我'}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-mist-100 italic leading-snug">
            {lang === 'en' ? (
              "I don’t lead your journey.\nI walk with you."
            ) : (
              "我并不带领你，\n我陪着你。"
            )}
          </h2>
        </div>

        {/* Content Body */}
        <div className="space-y-10 font-serif text-lg md:text-xl leading-loose text-mist-200/90 font-light">
          
          {lang === 'en' ? (
            <>
              <p>
                My life has taken me through experiences that changed the way I see consciousness and the human mind. Those processes brought me into direct contact with the deeper layers of being, and taught me how opening, contraction, and integration actually unfold. They were not “mystical events,” but something that kept moving me toward what is more real.
              </p>
              <p>
                Over the years, I’ve moved through ego dissolution, dark-night stretches, the body speaking for itself, old memories resurfacing, and a quiet sense of the sacred that has no form but is unmistakably clear. When you’re close to it, you simply know what you’re aligning with. None of this made me special. It just made me steadier, clearer, and more able to understand what it means to be human.
              </p>
              <div className="pl-6 border-l border-earth-500/30 italic text-earth-300/90 text-xl">
                "You walk toward the source. I keep the process unclouded."
              </div>
              <p>
                When consciousness begins to move inward, the noise of the world fades and the real core becomes more visible. My attention stays on whether you are still connected to that layer, allowing your process to unfold in its own way. What arises from the deep doesn’t need to be pushed. It needs space.
              </p>
            </>
          ) : (
            <>
              <p>
                我对意识的变化一直敏感，也走过一些会改变观看方式的深层经验。那些过程让我直接触到人的核心位置，也让我理解意识如何打开、收缩、整合。它们不是神秘体验，更像是一种持续把人带向更真实地方的力量。
              </p>
              <p>
                过去几年里，我经历过 ego 的瓦解、黑夜时期、身体开始说话、旧有记忆被重新呈现，以及一种极为安静的神性存在感。它没有形象，却非常清楚。靠近它时，人会自然知道自己正在对齐什么。这些体验没有让我“变得特别”，它们只是让我变得更稳、更清晰，对人类的心与生命有更多理解。
              </p>
              <div className="pl-6 border-l border-earth-500/30 text-earth-300/90 text-xl font-medium">
                “你走向本源，我让过程不被干扰。”
              </div>
              <p>
                当意识往深处移动时，世界的噪音会变得很远，而真正的核心开始变得清楚。我的注意力放在你是否仍然连接着那一层，让你能完整经历属于你的过程。深处的东西会自己出现，我们只需要让它有出现的空间。
              </p>
            </>
          )}
        </div>

        {/* Signature/End Mark */}
        <div className="mt-20 opacity-40 text-earth-500">
           ↟
        </div>

      </div>
    </section>
  );
};