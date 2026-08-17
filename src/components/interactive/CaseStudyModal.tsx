import React, { useState, useEffect } from 'react';
import type { Project } from '../../data/projects';
import { X, Layers, CheckCircle2, ArrowRight, ExternalLink, Cpu } from 'lucide-react';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';

interface CaseStudyModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenLightbox: (images: { src: string; caption: string; description: string; projectTitle: string }[], index: number) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  isOpen,
  onClose,
  onOpenLightbox
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'responsibilities' | 'screenshots'>('overview');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setActiveTab('overview');
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, project]);

  if (!isOpen || !project) return null;

  const lightboxImages = project.screenshots.map(s => ({
    ...s,
    projectTitle: project.name
  }));

  const architectureLayers = project.architecture ? project.architecture.split('→') : [];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[92vh] flex flex-col bg-slate-900/95 border border-slate-700/90 rounded-2xl sm:rounded-3xl shadow-2xl shadow-cyan-950/40 overflow-hidden text-slate-100 animate-in zoom-in-95 duration-300"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="relative p-6 sm:p-8 border-b border-slate-800 bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 flex-shrink-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <Badge variant="cyan" size="sm">
                  {project.industry}
                </Badge>
                <Badge variant="purple" size="sm">
                  {project.role}
                </Badge>
                {project.companyOrOrg && (
                  <span className="text-xs text-slate-400 font-mono">
                    Client/Project: {project.companyOrOrg}
                  </span>
                )}
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {project.name}
              </h2>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-red-500/20 hover:text-red-400 text-slate-400 border border-slate-700 hover:border-red-500/40 transition-colors cursor-pointer"
              title="Close (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 mt-6 overflow-x-auto no-scrollbar border-b border-slate-800 pb-2">
            {[
              { id: 'overview', label: 'Overview & Features', icon: <Layers className="w-4 h-4" /> },
              { id: 'architecture', label: 'Architecture & Pipeline', icon: <Cpu className="w-4 h-4" /> },
              { id: 'responsibilities', label: 'Engineering Responsibilities', icon: <CheckCircle2 className="w-4 h-4" /> },
              { id: 'screenshots', label: `Screenshots (${project.screenshots.length})`, icon: <ExternalLink className="w-4 h-4" /> }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border border-transparent'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-8 custom-scrollbar">
          {activeTab === 'overview' && (
            <div className="space-y-8 animate-in fade-in duration-200">
              {/* Description */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-400 mb-2 font-mono">
                  Project Summary
                </h3>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              {/* Architecture Highlight Pill */}
              {project.architecture && (
                <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-cyan-500/30 shadow-lg">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                    <Cpu className="w-4 h-4" />
                    <span>SYSTEM ARCHITECTURE FLOW</span>
                  </div>
                  <div className="font-mono text-sm sm:text-base font-semibold text-white break-words">
                    {project.architecture}
                  </div>
                </div>
              )}

              {/* Key Features */}
              {project.features && project.features.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-400 mb-4 font-mono">
                    Key Features &amp; Functional Deliverables
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-800/40 border border-slate-800 hover:border-slate-700 transition-colors"
                      >
                        <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-200">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-400 mb-3 font-mono">
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="slate" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-400 mb-2 font-mono">
                  End-to-End System Topology
                </h3>
                <p className="text-sm text-slate-400 mb-4">
                  Multi-tier enterprise data flow designed for strict isolation, sub-second latency, and horizontal scalability.
                </p>
              </div>

              {project.architecture && architectureLayers.length > 0 ? (
                <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-3 font-mono">
                    <span>ARCHITECTURE BREAKDOWN</span>
                    <span className="text-emerald-400">● Production Verified</span>
                  </div>

                  <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 py-4">
                    {architectureLayers.map((node, i) => (
                      <React.Fragment key={i}>
                        <div className="flex-1 p-3.5 rounded-xl bg-slate-900 border border-cyan-500/20 text-center shadow-md">
                          <span className="text-xs text-cyan-400 font-mono block mb-1">
                            LAYER {i + 1}
                          </span>
                          <span className="text-sm font-semibold text-white">
                            {node.trim()}
                          </span>
                        </div>
                        {i < architectureLayers.length - 1 && (
                          <div className="flex items-center justify-center text-cyan-500 font-bold rotate-90 md:rotate-0">
                            →
                          </div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
                    <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                      <span className="text-xs text-slate-400 block font-mono">Security</span>
                      <span className="text-xs text-slate-200 font-medium">JWT/RBAC, AWS IAM, Sanitized Queries</span>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                      <span className="text-xs text-slate-400 block font-mono">Resilience</span>
                      <span className="text-xs text-slate-200 font-medium">Graceful Retries &amp; Redis Cache Layer</span>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                      <span className="text-xs text-slate-400 block font-mono">Data State</span>
                      <span className="text-xs text-slate-200 font-medium">PostgreSQL Relational ACID Transactions</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 text-center text-slate-400">
                  Direct client application architecture with responsive state isolation.
                </div>
              )}
            </div>
          )}

          {activeTab === 'responsibilities' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-400 mb-2 font-mono">
                  Key Technical Responsibilities
                </h3>
                <p className="text-sm text-slate-400 mb-4">
                  Hands-on engineering contributions delivered throughout the application lifecycle.
                </p>
              </div>

              <div className="space-y-2.5">
                {project.responsibilities.map((resp, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-800/40 border border-slate-800 hover:border-slate-700 transition-colors"
                  >
                    <span className="w-6 h-6 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center flex-shrink-0 text-xs font-mono font-bold mt-0.5 border border-cyan-500/20">
                      {idx + 1}
                    </span>
                    <span className="text-sm sm:text-base text-slate-200">
                      {resp}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'screenshots' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-400 mb-2 font-mono">
                  Production Work Previews &amp; UI Mockups
                </h3>
                <p className="text-sm text-slate-400 mb-4">
                  Click on any screenshot to expand into high-definition fullscreen lightbox.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.screenshots.map((s, idx) => (
                  <div
                    key={idx}
                    onClick={() => onOpenLightbox(lightboxImages, idx)}
                    className="group relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 cursor-pointer shadow-lg hover:border-cyan-400 transition-all duration-300"
                  >
                    <div className="aspect-video w-full overflow-hidden bg-slate-900">
                      <img
                        src={s.src}
                        alt={s.caption}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4 bg-slate-900/90 border-t border-slate-800">
                      <h4 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                        <span>{s.caption}</span>
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
                      </h4>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                        {s.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 border-t border-slate-800 bg-slate-950/80 flex flex-wrap items-center justify-between gap-4 flex-shrink-0">
          <div className="text-xs text-slate-400 font-mono">
            {project.tags.join(' • ')}
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={onClose}
            >
              Close
            </Button>
            <Button
              variant="primary"
              size="sm"
              href="#contact"
              onClick={onClose}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Discuss Similar Project
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
