import React, { useState } from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import { skillsData } from '../data/skills';
import { Layout, Server, Database, Cloud, Sparkles, Terminal, CheckCircle2 } from 'lucide-react';
import { TiltCard } from '../components/3d/TiltCard';

export const TechnicalExpertise: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const getCategoryIcon = (iconName: string) => {
    const props = { className: 'w-5 h-5' };
    switch (iconName) {
      case 'Layout': return <Layout {...props} className="text-cyan-400" />;
      case 'Server': return <Server {...props} className="text-blue-400" />;
      case 'Database': return <Database {...props} className="text-amber-400" />;
      case 'Cloud': return <Cloud {...props} className="text-sky-400" />;
      case 'Sparkles': return <Sparkles {...props} className="text-purple-400" />;
      case 'Terminal': return <Terminal {...props} className="text-emerald-400" />;
      default: return <Server {...props} className="text-cyan-400" />;
    }
  };

  const categories = [
    { id: 'all', label: 'All Technologies' },
    ...skillsData.map(s => ({ id: s.id, label: s.name }))
  ];

  const displayedCategories = activeTab === 'all'
    ? skillsData
    : skillsData.filter(s => s.id === activeTab);

  return (
    <section id="expertise" className="py-16 sm:py-20 lg:py-28 relative overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <SectionHeader
          badge="Technical Skills Matrix"
          badgeIcon={<Terminal className="w-4 h-4" />}
          title={
            <span>
              Enterprise <span className="gradient-text-cyan">Technical Expertise</span>
            </span>
          }
          subtitle="A comprehensive toolkit refined across 9+ years of engineering production applications, high-throughput APIs, and modern AI integrations."
        />

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/20'
                  : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map(category => (
            <TiltCard key={category.id} maxTilt={6} className="h-full">
              <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/90 border border-slate-800/90 shadow-xl h-full flex flex-col justify-between space-y-6 hover:border-cyan-500/40 transition-all duration-300">
                <div className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 border-b border-slate-800 pb-4">
                    <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800">
                      {getCategoryIcon(category.icon)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {category.name}
                      </h3>
                      <p className="text-xs text-slate-400 font-mono">
                        {category.skills.length} Core Technologies
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills Pill List */}
                  <div className="space-y-2 pt-2">
                    {category.skills.map((skill, idx) => (
                      <div
                        key={idx}
                        className={`flex items-center justify-between p-2.5 rounded-xl border transition-all ${
                          skill.highlight
                            ? 'bg-slate-950 border-cyan-500/30 text-white font-semibold shadow-sm'
                            : 'bg-slate-950/60 border-slate-800/80 text-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className={`w-3.5 h-3.5 ${skill.highlight ? 'text-cyan-400' : 'text-slate-500'}`} />
                          <span className="text-xs sm:text-sm">{skill.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                            {skill.experience}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>Standard: Production-Grade</span>
                  <span className="text-emerald-400">● Battle Tested</span>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};
