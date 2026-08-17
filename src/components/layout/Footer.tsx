import React from 'react';
import { ArrowUp, Mail, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../../data/config';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800 text-slate-400 py-16 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center font-mono font-bold text-cyan-400">
                &lt;/&gt;
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  Senior Full-Stack &amp; AI Engineer
                </h3>
                <p className="text-xs font-mono text-cyan-400">
                  9+ Years Enterprise Production Experience
                </p>
              </div>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Engineering enterprise-grade web applications, scalable APIs, data platforms, and AI-powered solutions across React, Angular, Node.js, GraphQL, PostgreSQL, SQL, AWS, GCP, and modern AI technologies.
            </p>
            <div className="flex items-center gap-3 text-xs text-emerald-400 font-mono">
              <ShieldCheck className="w-4 h-4" />
              <span>Available for high-impact contracts, enterprise consulting &amp; long-term partnerships</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 mb-4 font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">About &amp; Overview</a>
              </li>
              <li>
                <a href="#expertise" className="hover:text-cyan-400 transition-colors">Technical Expertise</a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-cyan-400 transition-colors">System Architecture</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition-colors">Selected Projects</a>
              </li>
              <li>
                <a href="#ai" className="hover:text-cyan-400 transition-colors">AI Capabilities</a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">Services Offered</a>
              </li>
            </ul>
          </div>

          {/* Connect & Legal */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 mb-4 font-semibold">
              Connect &amp; Inquiries
            </h4>
            <div className="space-y-3">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2.5 text-sm text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span className="truncate">{siteConfig.contact.email}</span>
              </a>
              <div className="flex items-center gap-2 pt-2">
                <a
                  href={siteConfig.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-colors flex items-center justify-center"
                  aria-label="GitHub Profile"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
                <a
                  href={siteConfig.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-colors flex items-center justify-center"
                  aria-label="LinkedIn Profile"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href={siteConfig.contact.upwork}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors flex items-center gap-1.5"
                >
                  <span>Upwork</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <p className="text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} Senior Full-Stack &amp; AI Engineer Portfolio. Built for production-ready solutions.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-slate-500">
              React 19 • TypeScript • Vite • Tailwind
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800 transition-colors flex items-center gap-1 cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
