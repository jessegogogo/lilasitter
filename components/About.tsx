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
                My approach is grounded in safety, presence, and deep listening. I don't see this work as a clinical procedure or a purely spiritual ritual, but as a deeply human process of exploration. My role is to be a steady anchor, ensuring you are safe and supported so you can navigate your inner landscape with confidence.
              </p>
              <p>
                Over the years, I’ve learned that the most important thing I can offer is a clear, non-judgmental space. I don't aim to control your journey or impose my own interpretations. Instead, I focus on whether you remain connected to your own core, allowing the experience to unfold naturally.
              </p>
              <div className="pl-6 border-l border-earth-500/30 italic text-earth-300/90 text-xl">
                "You walk toward the source. I keep the process unclouded."
              </div>
              <p>
                Whether you are seeking healing, clarity, or a deeper understanding of yourself, I am here to walk beside you. I bring a balance of practical grounding and intuitive awareness to every session, ensuring that you feel seen, heard, and entirely safe.
              </p>
            </>
          ) : (
            <>
              <p>
                我的方法植根于安全、在场和深度倾听。我不认为这项工作是一个临床程序或纯粹的灵性仪式，而是一个深刻的人类探索过程。我的角色是作为一个稳定的锚，确保你是安全且得到支持的，这样你就可以满怀信心地探索你的内在景观。
              </p>
              <p>
                多年来，我了解到我能提供的最重要的事情是一个清晰、无评判的空间。我的目的不是控制你的旅程或强加我自己的解释。相反，我关注你是否仍然连接到你自己的核心，让体验自然展开。
              </p>
              <div className="pl-6 border-l border-earth-500/30 text-earth-300/90 text-xl font-medium">
                “你走向本源，我让过程不被干扰。”
              </div>
              <p>
                无论你是在寻求治愈、清晰，还是对自己有更深的理解，我都在这里陪你一起走。我为每一次会谈带来务实的落地感和直觉觉知的平衡，确保你感到被看见、被听见，并且完全安全。
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