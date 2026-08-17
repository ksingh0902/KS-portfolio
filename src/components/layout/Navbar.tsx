import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Button } from '../common/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Projects', href: '#projects' },
    { name: 'AI', href: '#ai' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section scrollspy
      const sections = navLinks.map(l => l.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sections[i]);
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80 py-3 shadow-lg shadow-black/30'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 group cursor-pointer focus-visible:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-[1.5px] shadow-md shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <span className="font-mono font-black text-cyan-400 text-base group-hover:scale-110 transition-transform">
                &lt;/&gt;
              </span>
            </div>
          </div>

          <div>
            <div className="font-extrabold text-white text-base tracking-tight flex items-center gap-2">
              <span>Full-Stack &amp; AI</span>
              <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                9+ YRS
              </span>
            </div>
            <p className="text-[11px] font-mono text-slate-400">
              Senior Enterprise Engineer
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 p-1.5 rounded-full bg-slate-900/70 border border-slate-800 backdrop-blur-md">
          {navLinks.map(link => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-300 shadow-sm border border-cyan-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            variant="primary"
            size="sm"
            href="#contact"
            icon={<ArrowUpRight className="w-4 h-4" />}
          >
            Let's Talk
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          <Button
            variant="primary"
            size="sm"
            href="#contact"
            className="!px-3 !py-1.5 !text-xs"
          >
            Let's Talk
          </Button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/40"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800 p-6 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-2">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl text-sm font-semibold text-slate-200 hover:bg-slate-900 hover:text-cyan-400 border border-transparent hover:border-slate-800 transition-all"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-slate-800 flex flex-col gap-3">
              <Button
                variant="primary"
                size="md"
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full justify-center"
              >
                Let's Discuss Your Project
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
