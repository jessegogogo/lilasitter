import React from 'react';
import { SectionId, ContentProps } from '../types';

export const FAQ: React.FC<ContentProps> = ({ lang }) => {
  const faqs = [
    {
      q: lang === 'en' ? "Do you provide the substances?" : "你提供物质吗？",
      a: lang === 'en' ? "No. I do not provide, sell, or facilitate the purchase of any illegal substances. My role is purely for harm reduction, safety, and integration support." : "不提供。我不提供、销售或协助购买任何非法物质。我的角色纯粹是为了降低伤害、保障安全和提供整合支持。"
    },
    {
      q: lang === 'en' ? "Is this therapy?" : "这是心理治疗吗？",
      a: lang === 'en' ? "No. Trip sitting is a peer-support and harm-reduction service. While it can be therapeutic, it is not a substitute for professional medical or psychological treatment." : "不是。旅程陪伴是一种同伴支持和降低伤害服务。虽然它可能具有疗愈性，但它不能替代专业的医疗或心理治疗。"
    },
    {
      q: lang === 'en' ? "Where do sessions take place?" : "会谈在哪里进行？",
      a: lang === 'en' ? "Typically in the comfort and safety of your own home within the San Francisco Bay Area. We can also discuss other private, safe locations." : "通常在旧金山湾区内您自己舒适且安全的家中进行。我们也可以讨论其他私密、安全的地方。"
    }
  ];

  return (
    <section id={SectionId.FAQ} className="py-24 bg-forest-900 border-t border-white/5 relative">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-serif text-3xl text-mist-100 mb-12 italic text-center">
          {lang === 'en' ? 'Frequently Asked Questions' : '常见问题'}
        </h2>
        
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-white/5 pb-8">
              <h3 className="font-serif text-xl text-earth-300 mb-4 italic">
                {faq.q}
              </h3>
              <p className="font-sans text-sm md:text-base text-mist-200/70 leading-relaxed font-light">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
