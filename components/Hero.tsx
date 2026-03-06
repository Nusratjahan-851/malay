import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Award } from 'lucide-react';

interface HeroProps { onOpenAi: () => void; }

const Hero: React.FC<HeroProps> = ({ onOpenAi }) => {
  return (
    <div id="home" className="relative bg-emerald-950 overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/40 to-transparent z-10"></div>
        {/* এখানে তোমার প্রোফাইল ছবিটি বসবে (profile.jpg) */}
        <img src="/profile.jpg" alt="Mohona Yesmin" className="w-full h-full object-cover object-top opacity-80" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="lg:w-3/5 text-left">
          <div className="inline-flex items-center gap-2 bg-green-500/20 rounded-full px-4 py-1.5 mb-8 text-green-400 text-sm font-bold">
            <Sparkles className="h-4 w-4" /> <span>Global Education Consultancy</span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl font-black text-white leading-tight mb-8">
            আপনার গ্লোবাল <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-200">
              ক্যারিয়ারের শুরু হোক
            </span> মালয়েশিয়ায়
          </h1>
          
          <p className="text-xl text-emerald-100/80 mb-10 max-w-xl leading-relaxed">
            EasyGlobal Education-এর সাথে বিশ্বমানের ডিগ্রি এবং ১০০% প্রফেশনাল ভিসা সহায়তা। মোহনা ইয়াসমিনের সরাসরি তত্ত্বাবধানে আপনার স্বপ্ন হোক সত্যি।
          </p>
          
          <div className="flex gap-5 mb-16">
            <button onClick={onOpenAi} className="bg-green-500 hover:bg-green-600 text-slate-900 px-8 py-4 rounded-xl font-black flex items-center gap-3">
              যোগ্যতা যাচাই (AI) <ArrowRight className="h-5 w-5" />
            </button>
            <a href="https://wa.me/60183172275" target="_blank" className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold flex items-center gap-2">
              ফ্রি পরামর্শ নিন
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
