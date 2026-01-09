
import React from 'react';
import { CheckCircle2, FileText, User, DollarSign } from 'lucide-react';

interface ChecklistProps {
  onOpenAi: () => void;
}

const categories = [
  {
    title: 'একাডেমিক ডকুমেন্টস',
    icon: FileText,
    items: [
      'SSC ও HSC সার্টিফিকেট (অরিজিনাল)',
      'মার্কশিট ও ট্রান্সক্রিপ্ট (সকল)',
      'IELTS স্কোর (৬.০) *স্কলারশিপের জন্য',
      'রিসার্থ প্রপোজাল (১০০০ শব্দ)',
    ],
  },
  {
    title: 'ব্যক্তিগত তথ্য',
    icon: User,
    items: [
      'পাসপোর্ট (ন্যূনতম ৬ মাস-১ বছর মেয়াদ)',
      '২টি রিকমেন্ডেশন লেটার (MIS এর জন্য)',
      'আপডেটেড কারিকুলাম ভিটা (CV)',
      'পুলিশ ক্লিয়ারেন্স সার্টিফিকেট',
    ],
  },
  {
    title: 'আর্থিক ও অন্যান্য',
    icon: DollarSign,
    items: [
      'ব্যাংক স্টেটমেন্ট ও সলভেন্সি',
      'ইউনিভার্সিটি অ্যাডমিশন লেটার',
      'হেলথ ডিক্লারেশন ফরম',
      'MQA স্বীকৃতি যাচাইকরণ',
    ],
  },
];

const Checklist: React.FC<ChecklistProps> = ({ onOpenAi }) => {
  return (
    <section id="checklist" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-indigo-900 rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-800 rounded-full -mr-32 -mt-32 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-800 rounded-full -ml-24 -mb-24 opacity-50"></div>

          <div className="relative z-10">
            <h2 className="text-white text-3xl font-extrabold mb-4 text-center">
              প্রয়োজনীয় ডকুমেন্টস চেকলিস্ট
            </h2>
            <p className="text-indigo-200 text-center mb-12 max-w-xl mx-auto">
              ভিসা এবং স্কলারশিপ আবেদনের জন্য নিচের কাগজগুলো প্রস্তুত রাখুন। সঠিক ডকুমেন্ট আপনার সফলতার সম্ভাবনা বাড়িয়ে দেয়।
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {categories.map((cat, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/20 transition-colors">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-amber-400 rounded-lg text-slate-900">
                      <cat.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-white font-bold text-lg">{cat.title}</h3>
                  </div>
                  <ul className="space-y-4">
                    {cat.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-indigo-100">
                        <CheckCircle2 className="h-5 w-5 text-green-400 shrink-0 mt-0.5" />
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-indigo-200 text-sm mb-6 italic">
                * বিঃদ্রঃ MIS স্কলারশিপের জন্য সকল ডকুমেন্টস অবশ্যই ইংরেজিতে হতে হবে।
              </p>
              <button 
                onClick={onOpenAi}
                className="inline-flex items-center gap-2 bg-white text-indigo-900 px-8 py-3 rounded-full font-bold hover:bg-indigo-50 transition-all transform active:scale-95"
              >
                যোগ্যতা যাচাই করুন (AI)
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checklist;
