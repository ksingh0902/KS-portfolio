import React, { useState } from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import { projectsData } from '../data/projects';
import type { Project } from '../data/projects';
import { Briefcase, ArrowRight, Cpu, CheckCircle2 } from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { TiltCard } from '../components/3d/TiltCard';
import { CaseStudyModal } from '../components/interactive/CaseStudyModal';
import { Lightbox } from '../components/common/Lightbox';
import type { LightboxImage } from '../components/common/Lightbox';

export const Projects: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState<boolean>(false);

  // Lightbox State
  const [lightboxImages, setLightboxImages] = useState<LightboxImage[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  const tags = ['All', 'Enterprise', 'React', 'Angular', 'Node.js', 'Cloud & DB', 'AI & Analytics'];

  const filteredProjects = selectedTag === 'All'
    ? projectsData
    : projectsData.filter(p => p.tags.includes(selectedTag as any));

  const handleOpenCaseStudy = (project: Project) => {
    setActiveProject(project);
    setIsCaseStudyOpen(true);
  };

  const handleOpenLightbox = (images: LightboxImage[], index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-28 relative overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <SectionHeader
          badge="Selected Work"
          badgeIcon={<Briefcase className="w-4 h-4" />}
          title={
            <span>
              Production-Grade <span className="gradient-text-cyan">Case Studies</span>
            </span>
          }
          subtitle="Explore 9 enterprise applications and platforms engineered across banking, insurance, IT consulting, logistics, and data analytics."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                selectedTag === tag
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/20'
                  : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
              }`}
            >
              {tag} {tag === 'All' ? `(${projectsData.length})` : ''}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <TiltCard key={project.id} maxTilt={6} className="h-full">
              <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/90 border border-slate-800/90 shadow-xl h-full flex flex-col justify-between space-y-6 hover:border-cyan-500/40 transition-all duration-300 group">
                <div className="space-y-4">
                  {/* Top Meta Header */}
                  <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-3.5">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <Badge variant="cyan" size="sm">
                        {project.industry}
                      </Badge>
                      <Badge variant="slate" size="sm">
                        {project.role}
                      </Badge>
                    </div>
                    <span className="text-xs font-mono text-slate-500 font-bold">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    onClick={() => handleOpenCaseStudy(project)}
                    className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors cursor-pointer leading-snug"
                  >
                    {project.name}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Architecture Flow Tag */}
                  {project.architecture && (
                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs font-mono text-slate-300">
                      <div className="flex items-center gap-1.5 text-cyan-400 font-semibold mb-1">
                        <Cpu className="w-3.5 h-3.5" />
                        <span>Architecture</span>
                      </div>
                      <p className="text-[11px] text-slate-400 line-clamp-1">
                        {project.architecture}
                      </p>
                    </div>
                  )}

                  {/* Key Features Preview */}
                  {project.features && project.features.length > 0 && (
                    <div className="space-y-1.5 pt-1">
                      {project.features.slice(0, 2).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400/80 flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="space-y-1.5 pt-2">
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                      Technologies
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 6).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-950 text-slate-300 border border-slate-800"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 6 && (
                        <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-950 text-cyan-400 border border-slate-800">
                          +{project.technologies.length - 6}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => handleOpenCaseStudy(project)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer group/btn"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>

                  <span className="text-xs font-mono text-slate-500">
                    Production Verified
                  </span>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      {/* Interactive Case Study Modal */}
      <CaseStudyModal
        project={activeProject}
        isOpen={isCaseStudyOpen}
        onClose={() => setIsCaseStudyOpen(false)}
        onOpenLightbox={handleOpenLightbox}
      />

      {/* Lightbox Modal */}
      <Lightbox
        images={lightboxImages}
        currentIndex={lightboxIndex}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        onNavigate={setLightboxIndex}
      />
    </section>
  );
};
