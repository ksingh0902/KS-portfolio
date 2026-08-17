import React from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import { whyWorkWithMeData } from '../data/whyWorkWithMe';
import { Award, Layers, ShieldCheck, Cpu, TrendingUp, Handshake, CheckCircle2, Star } from 'lucide-react';
import { TiltCard } from '../components/3d/TiltCard';

export const WhyWorkWithMe: React.FC = () => {
  const getIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-cyan-400' };
    switch (iconName) {
      case 'Award': return <Award {...props} />;
      case 'Layers': return <Layers {...props} className="text-blue-400" />;
      case 'ShieldCheck': return <ShieldCheck {...props} className="text-indigo-400" />;
      case 'Cpu': return <Cpu {...props} className="text-purple-400" />;
      case 'TrendingUp': return <TrendingUp {...props} className="text-emerald-400" />;
      case 'Handshake': return <Handshake {...props} className="text-amber-400" />;
      default: return <Star {...props} />;
    }
  };

  return (
    <section id="why" className="py-16 sm:py-20 lg:py-28 relative overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <SectionHeader
          badge="Value Proposition"
          badgeIcon={<ShieldCheck className="w-4 h-4" />}
          title={
            <span>
              Why Partner <span className="gradient-text-cyan">With Me</span>
            </span>
          }
          subtitle="Enterprise-tested engineering excellence designed to de-risk delivery, eliminate technical debt, and accelerate time-to-market."
        />

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 select-none">
          {whyWorkWithMeData.map((item, idx) => (
            <TiltCard key={item.id} maxTilt={6} className="h-full">
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800/90 shadow-xl h-full flex flex-col justify-between space-y-6 hover:border-cyan-500/40 transition-all duration-300 group cursor-default select-none">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 group-hover:scale-110 transition-transform">
                      {getIcon(item.icon)}
                    </div>
                    <span className="text-xs font-mono text-slate-500 font-bold">
                      0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400 font-medium mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-800 select-none">
                    {item.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-300 select-none">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span className="select-none">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>Reliability</span>
                  <span className="text-emerald-400">● 100% Commitment</span>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};
