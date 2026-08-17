import React from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import { siteConfig } from '../data/config';
import { Award, Layers, ShieldCheck, Sparkles } from 'lucide-react';
import { TiltCard } from '../components/3d/TiltCard';

export const About: React.FC = () => {
  const highlights = [
    {
      title: '9+ Years',
      subtitle: 'Experience',
      description: 'Battle-tested experience delivering production-ready web and enterprise solutions under stringent SLAs.',
      icon: <Award className="w-6 h-6 text-cyan-400" />,
      border: 'border-cyan-500/30'
    },
    {
      title: 'Full-Stack',
      subtitle: 'Engineering',
      description: 'End-to-end mastery across UI architecture, microservices, GraphQL/REST APIs, SQL databases, and cloud.',
      icon: <Layers className="w-6 h-6 text-blue-400" />,
      border: 'border-blue-500/30'
    },
    {
      title: 'Enterprise',
      subtitle: 'Applications',
      description: 'Direct domain depth across banking, insurance, financial services, logistics, analytics, and IT consulting.',
      icon: <ShieldCheck className="w-6 h-6 text-indigo-400" />,
      border: 'border-indigo-500/30'
    },
    {
      title: 'AI',
      subtitle: 'Integration',
      description: 'Specialization in infusing foundation LLMs, AI APIs, agents, and intelligent workflows into full-stack stacks.',
      icon: <Sparkles className="w-6 h-6 text-purple-400" />,
      border: 'border-purple-500/30'
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="About The Engineer"
          badgeIcon={<ShieldCheck className="w-4 h-4" />}
          title={
            <span>
              Engineering <span className="gradient-text-cyan">Complete Solutions</span>, Not Just Features
            </span>
          }
          subtitle="A holistic, senior-level approach to building resilient digital products that scale with your enterprise."
        />

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Left: Detailed Story Narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-slate-800 shadow-xl space-y-4">
              {siteConfig.aboutText.map((paragraph, idx) => (
                <p key={idx} className={idx === 0 ? 'text-white font-medium text-lg' : ''}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Quick Domain Expertise Tags */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="text-cyan-400 font-semibold">Domains:</span>
              {['Enterprise Banking', 'Insurance & Loans', 'Data Analytics', 'Logistics & Fleet', 'IT Services', 'Hospitality Tech'].map((dom, i) => (
                <span key={i} className="px-2.5 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800">
                  {dom}
                </span>
              ))}
            </div>
          </div>

          {/* Right: 4 Core Pillar Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => (
              <TiltCard key={idx} maxTilt={10} className="h-full">
                <div
                  className={`p-6 rounded-3xl bg-slate-900/90 border ${item.border} shadow-lg h-full flex flex-col justify-between space-y-4 transition-all duration-300 hover:scale-[1.02]`}
                >
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800">
                      {item.icon}
                    </div>
                    <span className="text-xs font-mono text-slate-500 font-bold">
                      0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-white tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm font-bold text-cyan-400 font-mono">
                      {item.subtitle}
                    </p>
                    <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
