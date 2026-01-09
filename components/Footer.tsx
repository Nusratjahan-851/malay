
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white text-2xl font-bold mb-4">
              MY GLOBAL EDUCATION <span className="text-amber-400">& IT</span>
            </h3>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              আমরা মালয়েশিয়ার সেরা ইউনিভার্সিটিগুলোর অফিসিয়াল রিপ্রেজেন্টেটিভ। স্বচ্ছতা এবং দ্রুত ভিসার নিশ্চয়তা দেওয়াই আমাদের প্রধান লক্ষ্য। রাজশাহী অফিস থেকে আমরা সেবা প্রদান করছি।
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">লিংকসমূহ</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-slate-400 hover:text-amber-400 transition-colors">হোম</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-amber-400 transition-colors">সেবা</a></li>
              <li><a href="#checklist" className="text-slate-400 hover:text-amber-400 transition-colors">চেকলিস্ট</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-amber-400 transition-colors">যোগাযোগ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">অফিস সময়</h4>
            <ul className="space-y-2">
              <li className="text-slate-400">শনিবার - বৃহস্পতিবার</li>
              <li className="text-slate-400">সকাল ১০:০০ - সন্ধ্যা ০৬:০০</li>
              <li className="text-amber-400 font-medium">শুক্রবার - বন্ধ</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-slate-500 text-sm">
            &copy; ২০২৬ মালয়েশিয়া সাকসেস কনসালটেন্সি | MY Global Education & IT Office.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-slate-500 hover:text-slate-300">প্রাইভেসি পলিসি</a>
            <a href="#" className="text-slate-500 hover:text-slate-300">শর্তাবলী</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
