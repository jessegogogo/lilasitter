import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Loader2, MessageCircle } from 'lucide-react';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage, ContentProps } from '../types';

export const AiAssistant: React.FC<ContentProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: 'init',
          role: 'model',
          text: lang === 'en' 
            ? "I am listening. How is your inner landscape today?" 
            : "我在听。今天你的内在天气如何？"
        }
      ]);
    }
  }, [lang]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const history = messages
        .filter(m => !m.isError && m.id !== 'init')
        .map(m => ({ role: m.role, text: m.text }));

      const responseText = await getGeminiResponse(input, history, lang);

      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'model',
        text: "Connection lost.",
        isError: true
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-40 bg-forest-800 text-earth-300 border border-earth-500/30 p-4 rounded-full shadow-2xl hover:bg-forest-700 transition-all duration-500 ${isOpen ? 'hidden' : 'flex'}`}
      >
        <MessageCircle size={20} strokeWidth={1} />
      </button>

      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-[380px] h-[550px] bg-forest-900 rounded-sm shadow-2xl flex flex-col overflow-hidden border border-earth-500/20 animate-fade-in font-serif">
          
          {/* Header */}
          <div className="bg-forest-950 p-4 flex justify-between items-center border-b border-white/5">
            <span className="text-earth-400 text-xs tracking-widest uppercase">Mycelial Guide</span>
            <button onClick={() => setIsOpen(false)} className="text-stone-500 hover:text-earth-300 transition-colors">
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-forest-700">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'text-mist-100 font-sans'
                      : 'text-earth-300/90 italic'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                 <Loader2 className="animate-spin text-earth-500" size={16} />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-forest-950 border-t border-white/5">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={lang === 'en' ? "Type here..." : "在此输入..."}
                className="flex-1 p-2 bg-transparent border-b border-earth-500/20 focus:outline-none focus:border-earth-400 text-mist-100 placeholder-forest-700 text-sm font-sans"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="text-earth-500 hover:text-earth-300 disabled:opacity-30 transition-colors"
              >
                <Send size={16} strokeWidth={1} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};