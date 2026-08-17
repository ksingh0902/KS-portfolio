import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Terminal, Cpu } from 'lucide-react';
import { siteConfig } from '../data/config';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { HeroCanvas3D } from '../components/3d/HeroCanvas3D';
import { TiltCard } from '../components/3d/TiltCard';
import profileImage from '../assets/profile.jpg';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Senior Title Pill */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <Badge variant="cyan" size="lg" glow icon={<Sparkles className="w-4 h-4" />}>
                Senior Full-Stack Engineer
              </Badge>
              <Badge variant="purple" size="lg" glow icon={<Cpu className="w-4 h-4" />}>
                AI Engineer
              </Badge>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-6.5xl font-black tracking-tight text-white leading-[1.08]">
              9+ Years Building{' '}
              <span className="gradient-text-cyan">
                Scalable Full-Stack
              </span>{' '}
              &amp;{' '}
              <span className="gradient-text-ai">
                AI-Powered Applications
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {siteConfig.heroDescription}
            </p>

            {/* Additional Positioning Note */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-md max-w-2xl mx-auto lg:mx-0 text-xs sm:text-sm text-slate-300 flex items-start gap-3 shadow-md">
              <ShieldCheck className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
              <span>
                <strong>From frontend architecture to backend systems</strong>, cloud infrastructure, databases, analytics, and AI — I build complete production-ready solutions.
              </span>
            </div>

            {/* Technology Badges Matrix */}
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                Core Production Stack
              </span>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                {siteConfig.heroBadges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-900/90 text-slate-200 border border-slate-700/80 hover:border-cyan-400 hover:text-cyan-300 hover:bg-slate-850 transition-all duration-200 shadow-sm"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                href="#contact"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Let's Discuss Your Project
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href="#projects"
              >
                View Projects
              </Button>
            </div>
          </div>

          {/* Right Column: 3D Visual & Senior Developer Card */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            {/* 3D Particle Constellation / Tech Orb in Canvas */}
            <div className="w-full relative flex items-center justify-center">
              <div className="absolute inset-0 z-0">
                <HeroCanvas3D />
              </div>

              {/* Developer Visual / Card */}
              <div className="relative z-10 w-full max-w-md">
                <TiltCard maxTilt={10} className="w-full">
                  <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/90 border border-slate-700/80 shadow-2xl backdrop-blur-2xl space-y-6">
                    {/* Top Row: Headshot / Profile + Status */}
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-cyan-400 shadow-lg shadow-cyan-500/25 bg-slate-950">
                          <img
                            src={profileImage}
                            alt="Senior Full-Stack & AI Engineer Profile"
                            className="w-full h-full object-cover object-top"
                          />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-slate-900 flex items-center justify-center shadow-sm">
                          <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-extrabold text-white text-lg">
                            Senior Lead Engineer
                          </h3>
                        </div>
                        <p className="text-xs font-mono text-cyan-400 font-semibold">
                          Full-Stack &amp; AI Architect
                        </p>
                        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          <span>Ready for New Engagements</span>
                        </div>
                      </div>
                    </div>

                    {/* Developer Pillars Grid */}
                    <div className="grid grid-cols-2 gap-3 pt-1 border-t border-slate-800">
                      <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/30 transition-colors">
                        <span className="text-2xl font-black text-white font-mono block">
                          9+ Years
                        </span>
                        <span className="text-xs text-slate-400 font-medium">
                          Experience
                        </span>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/30 transition-colors">
                        <span className="text-lg font-bold text-cyan-300 font-mono block">
                          Full-Stack
                        </span>
                        <span className="text-xs text-slate-400 font-medium">
                          Engineering
                        </span>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/30 transition-colors">
                        <span className="text-lg font-bold text-indigo-300 font-mono block">
                          Enterprise
                        </span>
                        <span className="text-xs text-slate-400 font-medium">
                          Applications
                        </span>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/30 transition-colors">
                        <span className="text-lg font-bold text-purple-300 font-mono block">
                          AI &amp; Modern
                        </span>
                        <span className="text-xs text-slate-400 font-medium">
                          Technologies
                        </span>
                      </div>
                    </div>

                    {/* Quick Micro Badge Footer */}
                    <div className="p-3 rounded-xl bg-slate-950/90 border border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
                      <span className="flex items-center gap-1.5 text-cyan-400">
                        <Terminal className="w-3.5 h-3.5" />
                        <span>Production SLA</span>
                      </span>
                      <span className="text-slate-300">Clean Architecture</span>
                    </div>
                  </div>
                </TiltCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
