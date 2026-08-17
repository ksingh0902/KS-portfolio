import React from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import { servicesData } from '../data/services';
import { Layers, Atom, Shield, Server, Share2, Database, Cloud, Sparkles, BarChart3, RefreshCw, Check } from 'lucide-react';
import { TiltCard } from '../components/3d/TiltCard';

export const Services: React.FC = () => {
  const getServiceIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-cyan-400' };
    switch (iconName) {
      case 'Layers': return <Layers {...props} />;
      case 'Atom': return <Atom {...props} className="text-cyan-400" />;
      case 'Shield': return <Shield {...props} className="text-red-400" />;
      case 'Server': return <Server {...props} className="text-emerald-400" />;
      case 'Share2': return <Share2 {...props} className="text-indigo-400" />;
      case 'Database': return <Database {...props} className="text-amber-400" />;
      case 'Cloud': return <Cloud {...props} className="text-sky-400" />;
      case 'Sparkles': return <Sparkles {...props} className="text-purple-400" />;
      case 'BarChart3': return <BarChart3 {...props} className="text-blue-400" />;
      case 'RefreshCw': return <RefreshCw {...props} className="text-teal-400" />;
      default: return <Layers {...props} />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Engineering Services"
          badgeIcon={<Layers className="w-4 h-4" />}
          title={
            <span>
              Specialized <span className="gradient-text-cyan">Engineering Services</span>
            </span>
          }
          subtitle="From greenfield architecture to enterprise modernization and AI infusing — scalable solutions delivered with high craftsmanship."
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map(service => (
            <TiltCard key={service.id} maxTilt={6} className="h-full">
              <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/90 border border-slate-800/90 shadow-xl h-full flex flex-col justify-between space-y-6 hover:border-cyan-500/40 transition-all duration-300 group">
                <div className="space-y-4">
                  {/* Icon & Title */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 group-hover:scale-110 transition-transform">
                      {getServiceIcon(service.icon)}
                    </div>
                    <span className="text-xs font-mono text-slate-500">
                      {service.technologies[0]}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm font-semibold text-cyan-400/90 font-mono">
                    {service.shortDesc}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {service.fullDesc}
                  </p>

                  {/* Key Deliverables */}
                  <div className="space-y-2 pt-2 border-t border-slate-800">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                      Core Deliverables
                    </span>
                    {service.deliverables.map((deliv, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Stack Tags */}
                <div className="pt-3 border-t border-slate-800 flex flex-wrap gap-1.5">
                  {service.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950 text-slate-400 border border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};
