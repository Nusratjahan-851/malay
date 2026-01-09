
import React, { useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'হোম', href: '#home' },
    { name: 'সেবা', href: '#services' },
    { name: 'স্কলারশিপ', href: '#scholarship' },
    { name: 'চেকলিস্ট', href: '#checklist' },
    { name: 'যোগাযোগ', href: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = 90; // Slightly larger offset for better clearance
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-[60] shadow-xl border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a 
              href="#home" 
              onClick={(e) => scrollToSection(e, '#home')}
              className="flex-shrink-0 flex items-center gap-2"
            >
              <span className="text-lg md:text-xl font-black tracking-tight flex flex-col md:flex-row md:gap-2 leading-none">
                <span>MY GLOBAL EDUCATION</span>
                <span className="text-amber-400">& IT OFFICE</span>
              </span>
            </a>
          </div>
          
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="hover:text-amber-400 px-3 py-2 rounded-md text-sm font-semibold transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-6 py-2.5 rounded-xl text-sm font-black transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/20"
              >
                আবেদন করুন
              </a>
            </div>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none transition-colors border border-slate-800"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-slate-300 hover:bg-slate-800 hover:text-white block px-4 py-4 rounded-xl text-lg font-semibold flex items-center justify-between transition-all"
              >
                {link.name}
                <ChevronRight className="h-5 w-5 text-slate-600" />
              </a>
            ))}
            <div className="pt-4">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="w-full bg-amber-500 text-slate-900 block px-4 py-5 rounded-2xl text-xl font-black text-center shadow-2xl active:scale-95 transition-transform"
              >
                আবেদন করুন
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
