
import React from 'react';
import { Info, MapPin, CheckCircle, UserCheck, MessageCircle } from 'lucide-react';

const VisaInfo: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Realities of Study Visa Card */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-xl border border-slate-100 border-t-[10px] border-t-indigo-700">
            <div className="flex items-center gap-3 mb-6">
              <Info className="h-8 w-8 text-indigo-700" />
              <h2 className="text-2xl font-black text-slate-900 leading-tight">মালয়েশিয়ায় উচ্চশিক্ষার সুযোগ ও বাস্তব তথ্য</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-bold text-indigo-900 border-l-4 border-indigo-600 pl-3">📌 গুরুত্বপূর্ণ তথ্য</h3>
                <ul className="space-y-3">
                  <li className="flex gap-2 text-sm text-slate-600"><CheckCircle className="h-4 w-4 text-green-600 shrink-0" /> বর্তমানে কলিং ভিসার মাধ্যমে কাজের ভিসা বন্ধ।</li>
                  <li className="flex gap-2 text-sm text-slate-600"><CheckCircle className="h-4 w-4 text-green-600 shrink-0" /> স্টুডেন্ট ভিসায় এখনো মালয়েশিয়ায় আসা বৈধভাবে সম্ভব।</li>
                  <li className="flex gap-2 text-sm text-slate-600"><CheckCircle className="h-4 w-4 text-green-600 shrink-0" /> স্টুডেন্ট ভিসা শুধুমাত্র পড়াশোনার জন্য প্রযোজ্য।</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-bold text-indigo-900 border-l-4 border-indigo-600 pl-3">🎓 পড়াশোনা ও বাস্তবতা</h3>
                <ul className="space-y-3">
                  <li className="flex gap-2 text-sm text-slate-600"><CheckCircle className="h-4 w-4 text-green-600 shrink-0" /> অনেক শিক্ষার্থী পড়াশোনার পাশাপাশি নিজের খরচ পরিচালনা করেন।</li>
                  <li className="flex gap-2 text-sm text-slate-600"><CheckCircle className="h-4 w-4 text-green-600 shrink-0" /> মালয়েশিয়ার জব মার্কেট বর্তমানে সক্রিয়।</li>
                  <li className="flex gap-2 text-sm text-slate-600"><CheckCircle className="h-4 w-4 text-green-600 shrink-0" /> সবকিছুই ব্যক্তিগত দায়িত্ব ও সঠিক পরিকল্পনার বিষয়।</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-4 bg-indigo-50 rounded-2xl border border-indigo-100 text-indigo-900 text-sm font-medium leading-relaxed italic">
              "স্বচ্ছভাবে কাজ করা আমাদের বৈশিষ্ট্য। স্টুডেন্ট ভিসা প্রসেসিং আমরা সম্পূর্ণ নিজ দায়িত্বে এবং কোনো গোপন শর্ত ছাড়াই সম্পন্ন করি।"
            </div>
          </div>

          {/* Contact Person Card */}
          <div className="bg-indigo-900 rounded-3xl p-8 text-white shadow-xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
              <UserCheck className="h-32 w-32" />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-4">আমাদের টিম</h3>
              <p className="text-indigo-200 mb-8 leading-relaxed">
                আপনার পরিচিত কেউ যদি পড়াশোনা বা মালয়েশিয়ায় আসার একটি বাস্তব ও বৈধ পথ খুঁজে থাকেন, তবে সরাসরি আমাদের অফিসে যোগাযোগ করুন।
              </p>
              
              <div className="space-y-4">
                <a href="https://wa.me/60183172275" target="_blank" rel="noopener noreferrer" className="block bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 hover:bg-white/20 transition-all">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-indigo-300 font-bold mb-1">Office Owner (Malaysia)</p>
                      <h4 className="text-xl font-black mb-0">Mohona Easmin Apurba</h4>
                    </div>
                    <MessageCircle className="h-5 w-5 text-green-400" />
                  </div>
                </a>
                <a href="https://wa.me/8801311998527" target="_blank" rel="noopener noreferrer" className="block bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 hover:bg-white/20 transition-all">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-indigo-300 font-bold mb-1">Office Manager (BD)</p>
                      <h4 className="text-xl font-black mb-0">MD Mahamuddin Nabi</h4>
                    </div>
                    <MessageCircle className="h-5 w-5 text-green-400" />
                  </div>
                </a>
              </div>
            </div>

            <div className="relative z-10 mt-8 pt-6 border-t border-white/20 text-center">
              <p className="text-[10px] text-indigo-300">📍 রাজশাহী অফিস: কোর্ট পুলিশ লাইন রোড, রাজশাহী।</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisaInfo;
