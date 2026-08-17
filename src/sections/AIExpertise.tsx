import React, { useState } from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import { aiCapabilitiesData } from '../data/aiCapabilities';
import { Sparkles, Bot, Layers, Network, Zap, MessageSquare, Search, Code2, ShieldCheck, Share2, Cpu, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { TiltCard } from '../components/3d/TiltCard';
import { Button } from '../components/common/Button';

export const AIExpertise: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [showAll, setShowAll] = useState<boolean>(false);

  const categories = ['All', 'Applications', 'Integration', 'Automation', 'Enterprise'];

  const categoryFiltered = selectedCategory === 'All'
    ? aiCapabilitiesData
    : aiCapabilitiesData.filter(c => c.category === selectedCategory);

  // When 'All' is selected and showAll is false, only show the first 3 cards
  const displayedCapabilities = (selectedCategory === 'All' && !showAll)
    ? categoryFiltered.slice(0, 3)
    : categoryFiltered;

  const hasMore = selectedCategory === 'All' && categoryFiltered.length > 3;

  const getIcon = (iconName: string) => {
    const props = { className: 'w-5 h-5 text-purple-400' };
    switch (iconName) {
      case 'Cpu': return <Cpu {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'Network': return <Network {...props} />;
      case 'Zap': return <Zap {...props} />;
      case 'MessageSquare': return <MessageSquare {...props} />;
      case 'Search': return <Search {...props} />;
      case 'Bot': return <Bot {...props} />;
      case 'Code2': return <Code2 {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'Share2': return <Share2 {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <section id="ai" className="py-20 lg:py-28 relative bg-slate-950/40">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Specialized AI Engineering"
          badgeIcon={<Sparkles className="w-4 h-4 text-purple-400" />}
          badgeVariant="purple"
          title={
            <span>
              Full-Stack Engineering <span className="gradient-text-ai">Meets AI</span>
            </span>
          }
          subtitle="I combine traditional full-stack engineering with modern AI technologies to build intelligent, scalable applications."
        />

        {/* Philosophy Note Banner */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-950/40 via-slate-900 to-cyan-950/40 border border-purple-500/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-purple-500/10 text-purple-300 border border-purple-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Stack + AI Synergies</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Practical, Production-Grade AI Integrations
            </h3>
            <p className="text-sm text-slate-300 max-w-2xl">
              Rather than generic isolated prototypes, I embed Large Language Models, streaming interfaces, semantic indexing, and automated agents directly into enterprise-grade React, Node.js, and PostgreSQL architectures.
            </p>
          </div>

          <Button
            variant="glow"
            size="md"
            href="#contact"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Discuss AI Integration
          </Button>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                if (cat !== 'All') setShowAll(true);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-purple-500/20 text-purple-300 border border-purple-500/50 shadow-md shadow-purple-500/20'
                  : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat} {cat === 'All' ? `(${aiCapabilitiesData.length})` : ''}
            </button>
          ))}
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCapabilities.map(cap => (
            <TiltCard key={cap.id} maxTilt={6} className="h-full">
              <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800/90 shadow-xl h-full flex flex-col justify-between space-y-5 hover:border-purple-500/40 transition-all duration-300 group">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20 group-hover:scale-110 transition-transform">
                      {getIcon(cap.icon)}
                    </div>
                    <Badge variant="purple" size="sm">
                      {cap.category}
                    </Badge>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                    {cap.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {cap.description}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-slate-800">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">Target Stack:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cap.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-950 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-purple-300/90 font-medium">
                    ✦ {cap.benefit}
                  </p>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Show More / Show Less Toggle Button */}
        {hasMore && (
          <div className="mt-10 flex flex-col items-center justify-center space-y-3">
            <button
              onClick={() => setShowAll(prev => !prev)}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl text-sm font-bold bg-slate-900/90 hover:bg-purple-950/40 text-purple-300 border border-purple-500/40 hover:border-purple-400 shadow-lg shadow-purple-500/10 transition-all duration-300 cursor-pointer group"
            >
              <Sparkles className="w-4 h-4 text-purple-400 group-hover:rotate-12 transition-transform" />
              <span>
                {showAll
                  ? 'Show Less Capabilities'
                  : `Click Here to Show More (${categoryFiltered.length - 3} More Capabilities)`}
              </span>
              {showAll ? (
                <ChevronUp className="w-4 h-4 text-purple-400 group-hover:-translate-y-0.5 transition-transform" />
              ) : (
                <ChevronDown className="w-4 h-4 text-purple-400 group-hover:translate-y-0.5 transition-transform" />
              )}
            </button>
            <span className="text-xs font-mono text-slate-500">
              Showing {displayedCapabilities.length} of {categoryFiltered.length} AI capabilities
            </span>
          </div>
        )}
      </div>
    </section>
  );
};
