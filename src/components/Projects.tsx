import { useState } from 'react';
import { Terminal, Play, ExternalLink, Code2 } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  onOpenGithubNotice: () => void;
}

export function Projects({ onOpenGithubNotice }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-16 md:py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
            Practical Implementation
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Projects
          </h2>
          <div className="w-12 h-1 bg-blue-600 mt-2 mb-4 rounded-full" />
          <p className="text-sm sm:text-base text-slate-600">
            Small projects that helped me build my programming fundamentals.
          </p>
        </div>

        {/* Projects 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_DATA.projects.map((proj) => (
            <div
              key={proj.id}
              className="bg-white rounded-xl border border-slate-200/90 p-6 flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all group"
            >
              <div>
                {/* Header row */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-blue-50 text-blue-600 border border-blue-100 group-hover:scale-105 transition-transform">
                      <Terminal className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {proj.title}
                    </h3>
                  </div>
                  <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 shrink-0">
                    {proj.technologies.join(', ')}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {proj.description}
                </p>

                {/* Concepts Learned Section */}
                <div className="pt-3 border-t border-slate-100 mb-5">
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                    Concepts Learned:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.concepts.map((concept) => (
                      <span
                        key={concept}
                        className="text-xs text-slate-700 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200/70"
                      >
                        {concept}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProject(proj)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-2xs transition-colors cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>Test Logic & View Code</span>
                </button>

                <button
                  type="button"
                  onClick={onOpenGithubNotice}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-700 hover:text-slate-950 bg-slate-50 hover:bg-slate-100 border border-slate-200/90 rounded-lg transition-colors cursor-pointer"
                >
                  <Code2 className="w-3.5 h-3.5 text-slate-500" />
                  <span>[GitHub Profile]</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note on genuine first-year projects */}
        <div className="mt-8 p-4 rounded-xl bg-white border border-slate-200/90 text-xs text-slate-600 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span>
              <strong>Academic Integrity:</strong> All four projects were constructed as part of my initial programming practice in Python.
            </span>
          </div>
          <button
            type="button"
            onClick={onOpenGithubNotice}
            className="text-blue-600 hover:text-blue-800 font-semibold underline text-xs cursor-pointer"
          >
            Learn about repository access
          </button>
        </div>

      </div>

      {/* Interactive Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenGithubNotice={onOpenGithubNotice}
        />
      )}
    </section>
  );
}
