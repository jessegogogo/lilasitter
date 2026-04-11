import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { SectionId, Language } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  avatarUrl?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, avatarUrl }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: SectionId) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: SectionId.ABOUT, label: lang === 'en' ? 'About' : '关于我' },
    { id: SectionId.ROLE_EXPLANATION, label: lang === 'en' ? 'The Role' : '角色说明' },
    { id: SectionId.HOW_I_WORK, label: lang === 'en' ? 'Philosophy' : '理念' },
    { id: SectionId.MEDICINES, label: lang === 'en' ? 'Substances' : '物质介绍' },
    { id: SectionId.SESSIONS, label: lang === 'en' ? 'Sessions' : '服务' },
    { id: SectionId.FAQ, label: lang === 'en' ? 'FAQ' : '常见问题' },
    { id: SectionId.CONTACT, label: lang === 'en' ? 'Contact' : '联系' },
  ];

  const displayAvatar = avatarUrl || "https://images.unsplash.com/photo-1542259648-5c6c64601362?q=80&w=1000&auto=format&fit=crop";

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${scrolled ? 'bg-forest-950/90 backdrop-blur-sm py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Brand / Logo Area */}
        <a 
          href={`#${SectionId.HOME}`}
          className="flex items-center gap-3 cursor-pointer group"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(SectionId.HOME);
          }}
        >
          {/* Avatar (Small Circle) */}
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-earth-400/30 group-hover:border-earth-400/80 transition-colors">
            <img 
              src={displayAvatar} 
              alt="Yuheng" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <span className="font-serif text-sm tracking-[0.2em] text-mist-200 group-hover:text-white transition-colors">
            LILA SITTER
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
              className="text-[11px] uppercase tracking-[0.15em] text-stone-400 hover:text-earth-300 transition-colors"
            >
              {item.label}
            </a>
          ))}
          
          {/* Language Toggle */}
          <div className="flex items-center gap-3 text-[10px] tracking-widest ml-6 pl-6 border-l border-white/10 text-stone-500 whitespace-nowrap">
            <button 
              onClick={() => setLang('en')}
              className={`transition-colors hover:text-white ${lang === 'en' ? 'text-earth-300' : ''}`}
            >
              EN
            </button>
            <span>|</span>
            <button 
              onClick={() => setLang('zh')}
              className={`transition-colors hover:text-white ${lang === 'zh' ? 'text-earth-300' : ''}`}
            >
              中文
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
           <div className="flex items-center gap-2 text-xs text-stone-500 whitespace-nowrap">
            <button onClick={() => setLang('en')} className={lang === 'en' ? 'text-earth-300' : ''}>EN</button>
            <span>|</span>
            <button onClick={() => setLang('zh')} className={lang === 'zh' ? 'text-earth-300' : ''}>中文</button>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="text-stone-300">
            {isOpen ? <X strokeWidth={1} /> : <Menu strokeWidth={1} />}
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-forest-950 flex flex-col items-center justify-center space-y-8 z-40">
           {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
              className="text-xl font-serif text-mist-100 italic"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};