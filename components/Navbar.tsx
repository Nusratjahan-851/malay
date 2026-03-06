import React, { useState } from 'react';
import { Menu, X, ChevronRight, GraduationCap } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // ... (keep the existing navLinks and scrollToSection functions) ...

  return (
    <nav className="bg-emerald-900 text-white sticky top-0 z-[60] shadow-xl border-b border-emerald-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#home" className="flex-shrink-0 flex items-center gap-3">
              <GraduationCap className="h-8 w-8 text-green-400" />
              <span className="text-xl md:text-2xl font-black tracking-tight flex flex-col leading-none">
                <span>EasyGlobal</span>
                <span className="text-green-400 text-sm font-semibold tracking-widest uppercase">Education</span>
              </span>
            </a>
          </div>
          {/* ... Keep the rest of the navbar code, just change 'amber-500' to 'green-500' for buttons ... */}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
