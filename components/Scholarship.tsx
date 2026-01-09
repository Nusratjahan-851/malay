
import React from 'react';
import { Award, GraduationCap, CheckCircle, ExternalLink, Calendar, Users } from 'lucide-react';

const Scholarship: React.FC = () => {
  return (
    <section id="scholarship" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 mb-6 text-amber-400 text-sm font-bold uppercase tracking-widest">
              <Award className="h-4 w-4" />
              <span>Full Funding Opportunity</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
              মালয়েশিয়া ইন্টারন্যাশনাল <br />
              <span className="text-amber-400">স্কলারশিপ (MIS) ২০২৫</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              বিশ্বের সেরা মেধাবীদের মালয়েশিয়ায় মাস্টার্স ও পিএইচডি করার সুযোগ দিতে মালয়েশিয়া সরকার এই বিশেষ স্কলারশিপ প্রদান করছে। বাংলাদেশ থেকে যোগ্য শিক্ষার্থীরা এতে আবেদন করতে পারবেন।
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-2xl border border-slate-700">
                <div className="p-2 bg-amber-500 rounded-lg text-slate-900">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Level of Study</p>
                  <p className="font-bold">Masters & PhD</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-2xl border border-slate-700">
                <div className="p-2 bg-amber-500 rounded-lg text-slate-900">
                  <Calendar className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Living Allowance</p>
                  <p className="font-bold">RM 1,500 / Month</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-10">
              <div className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-amber-400 shrink-0" />
                <p><span className="text-amber-400 font-bold">সম্পূর্ণ টিউশন ফি মওকুফ:</span> কোনো খরচ ছাড়াই পড়ার সুযোগ।</p>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-amber-400 shrink-0" />
                <p><span className="text-amber-400 font-bold">সিজিপিএ ৩.০০+:</span> স্নাতক বা স্নাতকোত্তরে ন্যূনতম ৩.০০ পয়েন্ট থাকতে হবে।</p>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-amber-400 shrink-0" />
                <p><span className="text-amber-400 font-bold">বয়স সীমা:</span> মাস্টার্সের জন্য ৪০ বছর এবং পিএইচডির জন্য ৪৫ বছর।</p>
              </div>
            </div>

            <a 
              href="https://biasiswa.mohe.gov.my/INTER/index.php" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 shadow-xl shadow-amber-500/20"
            >
              অফিসিয়াল পোর্টালে আবেদন করুন
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-[2.5rem] border border-slate-700 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-10">
                 <Users className="h-32 w-32" />
               </div>
               <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                 <div className="w-1 h-8 bg-amber-500 rounded-full"></div>
                 যোগ্যতার মানদণ্ড (Eligibility)
               </h3>
               <div className="space-y-6">
                 <div className="p-5 bg-slate-950/50 rounded-2xl border border-slate-800 hover:border-amber-500/30 transition-all">
                   <h4 className="text-amber-400 font-bold mb-2">একাডেমিক কোয়ালিফিকেশন</h4>
                   <p className="text-sm text-slate-400 leading-relaxed">মাস্টার্সের জন্য ব্যাচেলরে ২য় শ্রেণী (অনার্স) বা ন্যূনতম ৩.০০ সিজিপিএ এবং পিএইচডির জন্য মাস্টার্সে একই যোগ্যতা থাকতে হবে।</p>
                 </div>
                 <div className="p-5 bg-slate-950/50 rounded-2xl border border-slate-800 hover:border-amber-500/30 transition-all">
                   <h4 className="text-amber-400 font-bold mb-2">ইংরেজি ভাষায় দক্ষতা</h4>
                   <p className="text-sm text-slate-400 leading-relaxed">IELTS ব্যান্ড ৬.০ বা তার বেশি অথবা TOEFL (PBT) ৫৫০ স্কোর প্রয়োজন। পূর্ববর্তী ডিগ্রি ইংরেজিতে হলে লেটার অফ ইন্সট্রাকশন গ্রহণযোগ্য।</p>
                 </div>
                 <div className="p-5 bg-slate-950/50 rounded-2xl border border-slate-800 hover:border-amber-500/30 transition-all">
                   <h4 className="text-amber-400 font-bold mb-2">রিসার্চ প্রপোজাল</h4>
                   <p className="text-sm text-slate-400 leading-relaxed">রিসার্চ শিক্ষার্থীদের জন্য ন্যূনতম ১০০০ শব্দের একটি মানসম্মত রিসার্চ প্রপোজাল জমা দিতে হবে।</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scholarship;
