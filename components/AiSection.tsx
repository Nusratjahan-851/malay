
import React, { useState, useEffect, useRef } from 'react';
import { Send, Bot, User, Loader2, Sparkles, BrainCircuit, CheckCircle, ShieldQuestion } from 'lucide-react';
import { VisaAiService } from '../services/geminiService';
import { Message } from '../types';

const AiSection: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'আসসালামু আলাইকুম! আমি আপনার মালয়েশিয়া ভিসা এবং স্কলারশিপ আবেদনের স্মার্ট গাইড। আপনার সিজিপিএ, বয়স বা প্রয়োজনীয় ডকুমেন্টস সম্পর্কে যেকোনো প্রশ্ন এখানে করতে পারেন।' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const aiServiceRef = useRef<VisaAiService | null>(null);

  useEffect(() => {
    aiServiceRef.current = new VisaAiService();
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
      setMessages(prev => [...prev, { role: 'model', text: 'দুঃখিত, বর্তমানে সার্ভারে সমস্যা হচ্ছে। অনুগ্রহ করে সরাসরি যোগাযোগ করুন।' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const suggestedQuestions = [
    "আমি কি MIS স্কলারশিপের জন্য যোগ্য?",
    "মালয়েশিয়া ভিসার খরচ কত?",
    "পড়াশোনার পাশাপাশি কাজের সুযোগ কেমন?",
    "২০২৬ সেশনে আবেদনের শেষ সময় কবে?"
  ];

  return (
    <section id="ai-check" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          
          {/* Info Side */}
          <div className="lg:w-1/3 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
              <Sparkles className="h-4 w-4" />
              <span>Smart AI Assistant</span>
            </div>
            <h2 className="text-4xl font-black text-slate-900 leading-tight mb-6">
              আপনার যোগ্যতা <br />
              যাচাই করুন <span className="text-indigo-600">এক নিমিষেই</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              আমাদের কৃত্রিম বুদ্ধিমত্তা চালিত অ্যাসিস্ট্যান্ট আপনার প্রোফাইল বিশ্লেষণ করে কয়েক সেকেন্ডের মধ্যে সঠিক পরামর্শ প্রদান করবে।
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <span className="font-semibold text-slate-700">১০০% নির্ভুল ও আপ-টু-ডেট তথ্য</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-indigo-100 p-2 rounded-lg">
                  <BrainCircuit className="h-5 w-5 text-indigo-600" />
                </div>
                <span className="font-semibold text-slate-700">MIS ২০২৫ স্কলারশিপ গাইড</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-amber-100 p-2 rounded-lg">
                  <ShieldQuestion className="h-5 w-5 text-amber-600" />
                </div>
                <span className="font-semibold text-slate-700">যেকোনো প্রশ্ন, যেকোনো সময়</span>
              </div>
            </div>

            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
              <p className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">সচরাচর জিজ্ঞাসিত প্রশ্ন:</p>
              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.map((q, i) => (
                  <button 
                    key={i}
                    onClick={() => setInput(q)}
                    className="text-xs bg-white hover:bg-indigo-600 hover:text-white border border-slate-200 px-3 py-2 rounded-xl transition-all shadow-sm"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Chat Side */}
          <div className="lg:w-2/3">
            <div className="bg-slate-950 rounded-[2.5rem] shadow-2xl h-[600px] flex flex-col overflow-hidden relative border border-slate-800">
              
              {/* Chat Header */}
              <div className="p-6 border-b border-slate-800 bg-slate-900/50 flex items-center gap-4">
                <div className="relative">
                  <div className="bg-indigo-500 p-3 rounded-2xl shadow-lg shadow-indigo-500/20">
                    <Bot className="h-6 w-6 text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-slate-900 rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-white font-bold leading-none">Smart Visa Bot</h3>
                  <span className="text-xs text-slate-500 mt-1 block">অনলাইনে সক্রিয় আছে</span>
                </div>
              </div>

              {/* Chat Body */}
              <div 
                ref={scrollRef}
                className="flex-grow overflow-y-auto p-8 space-y-6 scroll-smooth"
              >
                {messages.map((msg, idx) => (
                  <div 
                    key={idx} 
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-4 duration-500`}
                  >
                    <div className={`flex gap-3 max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                      <div className={`p-2 rounded-2xl h-10 w-10 flex-shrink-0 flex items-center justify-center shadow-lg ${msg.role === 'user' ? 'bg-amber-400' : 'bg-indigo-600'}`}>
                        {msg.role === 'user' ? <User className="h-5 w-5 text-slate-900" /> : <Bot className="h-5 w-5 text-white" />}
                      </div>
                      <div 
                        className={`p-5 rounded-[2rem] text-sm leading-relaxed shadow-xl ${
                          msg.role === 'user' 
                            ? 'bg-amber-400 text-slate-900 rounded-tr-none' 
                            : 'bg-slate-800 text-slate-100 rounded-tl-none border border-slate-700'
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-slate-800/50 p-4 rounded-[2rem] rounded-tl-none border border-slate-700 flex items-center gap-3">
                      <Loader2 className="h-5 w-5 text-indigo-400 animate-spin" />
                      <span className="text-sm text-indigo-400 font-bold tracking-widest uppercase">Thinking...</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Chat Input */}
              <div className="p-6 bg-slate-900/50 border-t border-slate-800">
                <div className="flex items-center gap-4 bg-slate-800 rounded-2xl p-2 border border-slate-700 focus-within:border-indigo-500 transition-all">
                  <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="আপনার প্রশ্নটি এখানে লিখুন..."
                    className="flex-grow bg-transparent border-none focus:ring-0 text-white px-4 py-2 text-sm placeholder-slate-500"
                  />
                  <button 
                    onClick={handleSend}
                    disabled={isLoading || !input.trim()}
                    className="bg-indigo-600 hover:bg-indigo-500 text-white p-3 rounded-xl transition-all shadow-lg shadow-indigo-600/20 active:scale-95 disabled:opacity-50"
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AiSection;
