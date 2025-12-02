import React from 'react';
import { SectionId, ContentProps } from '../types';

export const HowIWork: React.FC<ContentProps> = ({ lang }) => {
  return (
    <section id={SectionId.HOW_I_WORK} className="py-24 bg-forest-950 border-t border-white/5 relative overflow-hidden">
      
      {/* Abstract Line Art Background - Asymmetrical */}
      <div className="absolute top-20 -left-20 w-[500px] h-[500px] border border-stone-800 rounded-full opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] border-l border-t border-stone-800 opacity-20 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 grid md:grid-cols-12 gap-12 items-start">
        
        {/* Title Column */}
        <div className="md:col-span-4 sticky top-32">
          <h2 className="font-serif text-3xl md:text-4xl text-stone-200 mb-6">
            {lang === 'en' ? 'How I Work' : '工作方式'}
          </h2>
          <div className="w-12 h-[1px] bg-earth-400"></div>
        </div>

        {/* Text Column */}
        <div className="md:col-span-8">
          <div className="font-serif text-lg text-stone-300 leading-loose font-light space-y-12">
            {lang === 'en' ? (
              <>
                <p>
                  Before entering a deep experience, we begin by setting direction, boundaries, and capacity, so your system has the stability it needs to go inward. This part is not about seeking an experience, but about finding a clear position from which the work can start.
                </p>
                <p>
                  During the journey, my focus is on whether you remain connected to your core. Images and emotions may appear, but they are background. I keep the field steady and clear so you can move through your process without being pulled by fear or by what isn’t true.
                </p>
                <p>
                  After the journey, we look at what actually shifted. Not everything that feels intense becomes real change. We sort through what came from the deeper layer and help it find its place in your life. Integration is the movement of letting that depth become lived, rather than leaving it as a momentary state.
                </p>
              </>
            ) : (
              <>
                <p>
                  在正式进入深层体验之前，我会先和你确认方向、边界与承受度，让你的系统有足够的稳定性去进入那一层。准备阶段不追求体验，而是让你回到一个清楚的位置，为整个过程打好基础。
                </p>
                <p>
                  在工作里，我更关心你在深处时是否仍然连着核心，画面和情绪只是背景。我会尽量让现场保持清明和稳定，让你能完整经过这个过程，不被恐惧或幻象带偏。
                </p>
                <p>
                  旅程结束后，我会和你一起把关键的部分整理出来，让那些来自深处的东西有机会在现实里落地。整合的用意，是让这些深度经验逐渐成为你生命的一部分，而不只是一次状态的出现。
                </p>
              </>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};