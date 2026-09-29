import { Linkedin, Github, ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  onOpenGithubNotice: () => void;
}

export function Footer({ onOpenGithubNotice }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Copyright */}
          <div className="text-center md:text-left">
            <div className="text-sm font-bold text-slate-900">
              {PORTFOLIO_DATA.profile.shortName}
            </div>
            <p className="mt-1 text-xs text-slate-500">
              © 2026 Lekith Kumar Reddy. Built with curiosity, code, and continuous learning.
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            {/* LinkedIn */}
            <a
              href={PORTFOLIO_DATA.profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-500 hover:text-blue-600 hover:bg-slate-50 transition-colors"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            {/* GitHub Placeholder */}
            <button
              type="button"
              onClick={onOpenGithubNotice}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors cursor-pointer"
              aria-label="GitHub Profile Placeholder"
              title="[GitHub Profile] Info"
            >
              <Github className="w-5 h-5" />
            </button>

            {/* Back to top */}
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer ml-2"
              aria-label="Back to top"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
