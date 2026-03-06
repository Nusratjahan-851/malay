import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-950 border-t border-emerald-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white text-2xl font-bold mb-4">
              EasyGlobal <span className="text-green-400">Education</span>
            </h3>
            <p className="text-emerald-200/60 max-w-sm leading-relaxed">
              মালয়েশিয়ার সেরা ইউনিভার্সিটিগুলোতে ভর্তি এবং ভিসা প্রক্রিয়ায় আপনার বিশ্বস্ত গাইড। মোহনা ইয়াসমিনের নেতৃত্বে আমরা দিচ্ছি সর্বোচ্চ স্বচ্ছতার নিশ্চয়তা।
            </p>
          </div>
          {/* ... Keep the links part ... */}
        </div>

        <div className="pt-8 border-t border-emerald-900 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-emerald-500/60 text-sm">
            &copy; 2024 EasyGlobal Education Consultancy | Mohona Yesmin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
