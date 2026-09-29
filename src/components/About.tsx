import {
  GraduationCap,
  Calendar,
  Sparkles,
  Terminal,
  Flame,
  CheckCircle2
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export function About() {
  const iconMap: Record<string, React.ReactNode> = {
    GraduationCap: <GraduationCap className="w-5 h-5 text-blue-600" aria-hidden="true" />,
    Calendar: <Calendar className="w-5 h-5 text-blue-600" aria-hidden="true" />,
    Sparkles: <Sparkles className="w-5 h-5 text-blue-600" aria-hidden="true" />,
    Terminal: <Terminal className="w-5 h-5 text-blue-600" aria-hidden="true" />,
    Flame: <Flame className="w-5 h-5 text-blue-600" aria-hidden="true" />
  };

  return (
    <section id="about" className="py-16 md:py-20 bg-white border-y border-slate-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
            Background & Profile
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            About Me
          </h2>
          <div className="w-12 h-1 bg-blue-600 mt-2 mb-6 rounded-full" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-4">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              {PORTFOLIO_DATA.profile.aboutBio}
            </p>

            <div className="pt-4 space-y-3">
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">
                What drives my engineering curiosity
              </h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Curiosity-driven learning:</strong> Exploring the core mechanics of how programming languages and the internet function.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Learning by building:</strong> Creating working Python scripts and web prototypes rather than purely memorizing syntax.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Collaborative spirit:</strong> Actively participating in student hackathons and ideathons to share ideas and solve problems with teammates.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Quick Info Cards Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {PORTFOLIO_DATA.infoCards.map((card, idx) => (
              <div
                key={card.title}
                className={`p-4 rounded-xl border border-slate-200/90 bg-slate-50/50 hover:bg-slate-50 hover:border-slate-300 transition-all ${
                  idx === 4 ? 'sm:col-span-2' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white border border-slate-200/80 shadow-2xs">
                    {iconMap[card.icon]}
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">
                      {card.title}
                    </div>
                    <div className="text-sm font-bold text-slate-900 leading-snug">
                      {card.value}
                    </div>
                  </div>
                </div>
                <div className="mt-2.5 pt-2 border-t border-slate-200/60 text-[11px] text-slate-500">
                  {card.detail}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
