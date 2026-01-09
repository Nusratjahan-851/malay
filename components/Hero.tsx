
import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Award } from 'lucide-react';

interface HeroProps {
  onOpenAi: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenAi }) => {
  return (
    <div id="home" className="relative bg-slate-950 overflow-hidden min-h-[90vh] flex items-center">
      {/* Visual Focal Point (The Graduate Image) - Desktop only */}
      <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
          alt="Successful Graduate" 
          className="w-full h-full object-cover object-center opacity-80 animate-softScaleDown"
        />
        
        {/* Floating Badge */}
        <div className="absolute bottom-12 right-12 z-20 animate-fadeInUp delay-700">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl animate-float">
             <div className="flex items-center gap-3">
               <div className="bg-amber-500 p-3 rounded-2xl shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                 <Award className="h-6 w-6 text-slate-900" />
               </div>
               <div>
                 <p className="text-white font-black text-xl leading-none">Class of 2026</p>
                 <p className="text-amber-400 text-xs uppercase tracking-widest mt-1">Enrollment Open</p>
               </div>
             </div>
          </div>
        </div>
      </div>

      {/* Mobile Background (Integrated Graduate Image) */}
      <div className="absolute inset-0 z-0 lg:hidden">
        <img 
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
          alt="Successful Graduate" 
          className="w-full h-full object-cover opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 xs:py-16 sm:py-20 lg:py-32">
        <div className="lg:w-3/5 text-center sm:text-left">
          {/* Badge Animation */}
          <div className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-500/30 rounded-full px-4 py-1.5 mb-6 sm:mb-8 text-indigo-400 text-xs sm:text-sm font-bold animate-fadeInUp">
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 animate-pulse" />
            <span>MY Global Education & IT Office</span>
          </div>
          
          {/* Headline Animation with Responsive Sizing */}
          <h1 className="text-4xl xs:text-5xl sm:text-7xl font-black text-white leading-[1.1] mb-6 sm:mb-8 tracking-tight animate-fadeInUp delay-100">
            আপনার উজ্জ্বল <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-yellow-500 animate-text-shimmer">
              ভবিষ্যতের শুরু হোক
            </span>
            <br className="hidden xs:block" /> মালয়েশিয়ায়
          </h1>
          
          {/* Subtitle Animation */}
          <p className="text-lg sm:text-xl text-slate-300 mb-8 sm:mb-10 max-w-xl mx-auto sm:mx-0 leading-relaxed font-medium animate-fadeInUp delay-200">
            বিশ্বমানের ডিগ্রি, সাশ্রয়ী টিউশন ফি এবং ২০২৬ সেশনে পড়াশোনার সুবর্ণ সুযোগ। আপনার স্বপ্ন পূরণে আমরা দিচ্ছি ১০০% প্রফেশনাল ভিসা সহায়তা।
          </p>
          
          {/* Buttons Animation with Shimmer Overlay */}
          <div className="flex flex-col xs:flex-row items-center justify-center sm:justify-start gap-4 sm:gap-5 mb-12 sm:mb-16 animate-fadeInUp delay-300">
            <button 
              onClick={onOpenAi}
              className="w-full xs:w-auto shimmer-overlay bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-lg sm:text-xl font-black flex items-center justify-center gap-3 transition-all transform hover:scale-[1.03] active:scale-95 shadow-2xl shadow-amber-500/40"
            >
              যোগ্যতা যাচাই (AI)
              <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <a 
              href="https://www.facebook.com/ApurbaMohona"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full xs:w-auto bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/20 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-lg sm:text-xl font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-[1.03] active:scale-95 shadow-xl group"
            >
              ফ্রি পরামর্শ নিন
              <span className="opacity-0 group-hover:opacity-100 transition-opacity ml-1">✨</span>
            </a>
          </div>

          {/* Trust Indicators Animation */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center sm:justify-start gap-8 sm:gap-12 text-slate-400 border-t border-white/10 pt-8 sm:pt-10 animate-fadeInUp delay-400">
            <div className="flex items-center gap-4 group">
              <div className="bg-green-500/10 p-3 rounded-2xl border border-green-500/20 group-hover:bg-green-500/20 group-hover:scale-110 transition-all duration-300">
                <ShieldCheck className="h-6 w-6 sm:h-7 sm:w-7 text-green-400" />
              </div>
              <div className="text-left">
                <p className="text-white font-bold text-base sm:text-lg leading-tight tracking-tight">গভর্নমেন্ট রেজিস্টার্ড</p>
                <p className="text-xs sm:text-sm text-slate-500">স্বচ্ছতা ও নিশ্চয়তা</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="bg-indigo-500/10 p-3 rounded-2xl border border-indigo-500/20 group-hover:bg-indigo-500/20 group-hover:scale-110 transition-all duration-300">
                <Award className="h-6 w-6 sm:h-7 sm:w-7 text-indigo-400" />
              </div>
              <div className="text-left">
                <p className="text-white font-bold text-base sm:text-lg leading-tight tracking-tight">১৫+ বছরের অভিজ্ঞতা</p>
                <p className="text-xs sm:text-sm text-slate-500">হাজারো সফল কাহিনী</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Overlay for Desktop */}
      <div className="hidden lg:flex absolute right-12 top-1/2 -translate-y-1/2 flex-col gap-6 z-30">
        <div className="bg-slate-900/40 backdrop-blur-2xl border border-white/10 p-6 rounded-[2rem] w-64 transform hover:rotate-1 hover:scale-105 transition-all duration-500 cursor-default group shadow-2xl animate-fadeInRight delay-500">
          <p className="text-amber-400 text-5xl font-black mb-1 group-hover:scale-110 transition-transform">৫০০০+</p>
          <p className="text-slate-300 text-xs font-black uppercase tracking-[0.2em]">সফল স্টুডেন্ট</p>
        </div>
        <div className="bg-slate-900/40 backdrop-blur-2xl border border-white/10 p-6 rounded-[2rem] w-64 transform hover:-rotate-1 hover:scale-105 transition-all duration-500 cursor-default group ml-12 shadow-2xl animate-fadeInRight delay-700">
          <p className="text-indigo-400 text-5xl font-black mb-1 group-hover:scale-110 transition-transform">৫০+</p>
          <p className="text-slate-300 text-xs font-black uppercase tracking-[0.2em]">পার্টনার ইউনিভার্সিটি</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
