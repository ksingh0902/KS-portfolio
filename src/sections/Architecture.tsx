import React from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import { ArchitectureExplorer } from '../components/interactive/ArchitectureExplorer';
import { Cpu } from 'lucide-react';

export const Architecture: React.FC = () => {
  return (
    <section id="architecture" className="py-16 sm:py-20 lg:py-28 relative bg-slate-950/60 overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <SectionHeader
          badge="Enterprise Blueprint"
          badgeIcon={<Cpu className="w-4 h-4" />}
          title={
            <span>
              End-to-End <span className="gradient-text-cyan">System Architecture</span>
            </span>
          }
          subtitle="How I connect frontend client frameworks, high-throughput APIs, caching layers, relational databases, cloud infrastructure, and modern AI into a cohesive production engine."
        />

        <ArchitectureExplorer />
      </div>
    </section>
  );
};
