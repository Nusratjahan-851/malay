
import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Bot, User, Loader2 } from 'lucide-react';
import { VisaAiService } from '../services/geminiService';
import { Message } from '../types';

interface AiAssistantProps {
  onClose: () => void;
}

const AiAssistant: React.FC<AiAssistantProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'আসসালামু আলাইকুম! আমি মালয়েশিয়া সাকসেস কনসালটেন্সির এআই অ্যাসিস্ট্যান্ট। আমি কি আপনাকে ২০২৬ সেশনের ভিসা সম্পর্কে সাহায্য করতে পারি?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const aiServiceRef = useRef<VisaAiService | null>(null);

  useEffect(() => {
    aiServiceRef.current = new VisaAiService();
    // Auto-focus input on mount
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      if (aiServiceRef.current) {
        const response = await aiServiceRef.current.sendMessage(userMessage);
        setMessages(prev => [...prev, { role: 'model', text: response }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: 'দুঃখিত, সংযোগ বিচ্ছিন্ন হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।' }]);
    } finally {
      setIsLoading(false);
      // Refocus input after sending
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  return (
    <div className="fixed inset-y-0 right-0 w-full sm:w-96 bg-white z-[70] shadow-2xl flex flex-col animate-in slide-in-from-right duration-300 border-l border-slate-200">
      {/* Header */}
      <div className="p-4 bg-indigo-600 text-white flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-full">
            <Bot className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-bold leading-none">ভিসা অ্যাসিস্ট্যান্ট (AI)</h3>
            <span className="text-xs text-indigo-200">সর্বদা অনলাইনে আপনার পাশে</span>
          </div>
        </div>
        <button onClick={onClose} className="hover:bg-indigo-500 p-2 rounded-lg transition-colors">
          <X className="h-6 w-6" />
        </button>
      </div>

      {/* Messages */}
      <div 
        ref={scrollRef}
        className="flex-grow overflow-y-auto p-4 space-y-4 bg-slate-50 scroll-smooth"
      >
        {messages.map((msg, idx) => (
          <div 
            key={idx} 
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}
          >
            <div className={`flex gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`p-2 rounded-full h-8 w-8 flex-shrink-0 flex items-center justify-center ${msg.role === 'user' ? 'bg-amber-100' : 'bg-indigo-100'}`}>
                {msg.role === 'user' ? <User className="h-4 w-4 text-amber-600" /> : <Bot className="h-4 w-4 text-indigo-600" />}
              </div>
              <div 
                className={`p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-amber-500 text-slate-900 rounded-tr-none' 
                    : 'bg-white text-slate-700 rounded-tl-none border border-slate-100'
                }`}
              >
                {msg.text}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start animate-pulse">
            <div className="bg-indigo-100 p-3 rounded-2xl rounded-tl-none flex items-center gap-2">
              <Loader2 className="h-4 w-4 text-indigo-600 animate-spin" />
              <span className="text-xs text-indigo-600 font-medium">এআই টাইপ করছে...</span>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-slate-100 bg-white">
        <div className="flex items-center gap-2">
          <input 
            ref={inputRef}
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="আপনার প্রশ্ন এখানে লিখুন..."
            className="flex-grow p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm transition-all"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="bg-indigo-600 text-white p-3 rounded-xl hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-95"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
        <p className="text-[10px] text-slate-400 mt-3 text-center">
          * এটি একটি এআই চালিত সেবা। নির্ভুল তথ্যের জন্য সরাসরি যোগাযোগ করুন।
        </p>
      </div>
    </div>
  );
};

export default AiAssistant;
