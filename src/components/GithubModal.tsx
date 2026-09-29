import { X, Github, Linkedin, ExternalLink, Code2, Check } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface GithubModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GithubModal({ isOpen, onClose }: GithubModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="github-modal-title"
    >
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xl max-w-md w-full overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-slate-900 text-white rounded-lg">
              <Github className="w-4 h-4" />
            </div>
            <div>
              <h3 id="github-modal-title" className="text-sm font-bold text-slate-900">
                [GitHub Profile] Status
              </h3>
              <p className="text-[11px] text-slate-500">
                Code Repository Information
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4 text-xs text-slate-600 leading-relaxed">
          <div className="p-3.5 bg-blue-50/70 border border-blue-100 rounded-xl">
            <div className="font-semibold text-blue-900 mb-1 flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5" />
              <span>Academic Transparency</span>
            </div>
            <p className="text-slate-600">
              As an honest first-semester B.Tech student, no artificial or unverified external repository URLs are invented. All project source code logic is verified and can be tested live directly inside the portfolio's built-in simulator!
            </p>
          </div>

          <div>
            <div className="font-semibold text-slate-900 mb-2">Projects Included in Code Portfolio:</div>
            <ul className="space-y-1.5">
              {PORTFOLIO_DATA.projects.map((p) => (
                <li key={p.id} className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span className="font-medium text-slate-800">{p.title}</span>
                  <span className="text-slate-400">({p.technologies[0]})</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-2 border-t border-slate-100">
            <p className="text-slate-500 text-[11px]">
              Want to review complete codebases or collaborate on hackathon repositories? Connect directly via LinkedIn or email!
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
          <a
            href={PORTFOLIO_DATA.profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>Connect on LinkedIn</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <button
            type="button"
            onClick={onClose}
            className="px-3.5 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
