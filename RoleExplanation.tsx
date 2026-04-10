import React from 'react';
import { SectionId, ContentProps } from '../types';

export const RoleExplanation: React.FC<ContentProps> = ({ lang }) => {
  return (
    <section id={SectionId.ROLE_EXPLANATION} className="py-24 bg-forest-950 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <h2 className="font-serif text-3xl text-mist-100 mb-12 italic text-center">
          {lang === 'en' ? 'What does a trip sitter actually do?' : '陪伴者到底在做什么？'}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8 font-sans text-sm md:text-base text-mist-200/80 leading-relaxed font-light">
            {lang === 'en' ? (
              <>
                <p>
                  A trip sitter is not a guide who directs your experience, nor a therapist who analyzes it in real-time. My role is to provide a steady, non-judgmental presence that allows your own inner healing intelligence to take the lead.
                </p>
                <p>
                  I am there to ensure your physical safety, manage the environment, and offer grounding support if the experience becomes challenging. I don't "fix" or "change" what is happening; I hold the space so you can fully encounter it.
                </p>
              </>
            ) : (
              <>
                <p>
                  陪伴者（Trip Sitter）不是带领你体验的向导，也不是实时分析你的治疗师。我的角色是提供一个稳定、无评判的在场，让你内在的自愈智慧占据主导。
                </p>
                <p>
                  我的存在是为了确保你的身体安全，管理环境，并在体验变得具有挑战性时提供稳固的支持。我不去“修复”或“改变”正在发生的事情；我守住这个空间，让你能完整地面对它。
                </p>
              </>
            )}
          </div>
          
          <div className="space-y-8 font-sans text-sm md:text-base text-mist-200/80 leading-relaxed font-light">
            {lang === 'en' ? (
              <>
                <p>
                  This work is grounded in harm reduction and safety. By handling the logistics and maintaining a calm atmosphere, I help reduce the anxiety that can arise when navigating altered states of consciousness.
                </p>
                <p>
                  Whether it's offering a hand to hold, adjusting the music, or simply being a silent witness, my focus is entirely on your process. This allows you to go deeper, knowing that you are not alone and that you are safe.
                </p>
              </>
            ) : (
              <>
                <p>
                  这项工作植根于降低伤害和安全保障。通过处理后勤事务和维持冷静的氛围，我帮助减轻在探索改变的意识状态时可能产生的焦虑。
                </p>
                <p>
                  无论是提供一个可以握住的手，调整音乐，还是仅仅作为一个沉默的见证者，我的注意力完全集中在你的过程中。这让你能走得更深，因为你知道自己并不孤单，而且是安全的。
                </p>
              </>
            )}
          </div>
        </div>

        <div className="mt-16 p-8 border border-earth-500/10 bg-forest-900/30 rounded-sm">
          <h3 className="font-serif text-xl text-earth-300 mb-4 italic">
            {lang === 'en' ? 'Safety & Trust' : '安全与信任'}
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-xs md:text-sm text-mist-200/60 leading-relaxed">
            <div>
              <h4 className="text-earth-400 uppercase tracking-widest mb-2">
                {lang === 'en' ? 'Non-Interference' : '不干预'}
              </h4>
              <p>{lang === 'en' ? 'I respect your autonomy. I do not impose my own beliefs or directions on your journey.' : '我尊重你的自主权。我不会将自己的信仰或方向强加于你的旅程。'}</p>
            </div>
            <div>
              <h4 className="text-earth-400 uppercase tracking-widest mb-2">
                {lang === 'en' ? 'Physical Safety' : '身体安全'}
              </h4>
              <p>{lang === 'en' ? 'From hydration to movement, I ensure your physical needs are met without interrupting your flow.' : '从水分补充到身体移动，我确保你的身体需求得到满足，而不中断你的心流。'}</p>
            </div>
            <div>
              <h4 className="text-earth-400 uppercase tracking-widest mb-2">
                {lang === 'en' ? 'Confidentiality' : '保密性'}
              </h4>
              <p>{lang === 'en' ? 'Your experience is sacred and private. Everything shared remains strictly confidential.' : '你的体验是神圣且私密的。所有分享的内容都将严格保密。'}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
