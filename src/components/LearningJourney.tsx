import { PORTFOLIO_DATA } from '../data/portfolioData';
import { CheckCircle2, Clock, Compass } from 'lucide-react';

export function LearningJourney() {
  return (
    <section id="journey" className="py-16 md:py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
            Structured Evolution
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            My Learning Journey
          </h2>
          <div className="w-12 h-1 bg-blue-600 mt-2 mb-4 rounded-full" />
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            A clear timeline documenting my step-by-step progress from foundational programming to upcoming full-stack development.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-200 ml-4 md:ml-6 space-y-10 pl-6 md:pl-8">
          {PORTFOLIO_DATA.learningJourney.map((item) => {
            const isCurrent = item.status === 'In Progress';

            return (
              <div key={item.stage} className="relative group">
                {/* Timeline node icon */}
                <div
                  className={`absolute -left-[35px] md:-left-[43px] top-1.5 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                    isCurrent
                      ? 'bg-blue-600 border-white text-white shadow-sm ring-4 ring-blue-100'
                      : 'bg-white border-slate-300 text-slate-400'
                  }`}
                  aria-hidden="true"
                >
                  {isCurrent ? (
                    <Clock className="w-4 h-4" />
                  ) : (
                    <Compass className="w-4 h-4" />
                  )}
                </div>

                {/* Stage Card */}
                <div className="bg-white rounded-xl border border-slate-200/90 p-5 sm:p-6 hover:border-slate-300 hover:shadow-xs transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-blue-600 uppercase">
                        Stage {item.stage}
                      </span>
                      <span className="text-slate-300">·</span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        {item.title}
                      </h3>
                    </div>
                    <span
                      className={`text-xs font-semibold px-2.5 py-0.5 rounded-md ${
                        isCurrent
                          ? 'bg-blue-50 text-blue-700 border border-blue-100'
                          : 'bg-slate-100 text-slate-600 border border-slate-200'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Key Topic Chips */}
                  <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-2 items-center">
                    <span className="text-xs font-medium text-slate-500">Focus areas:</span>
                    {item.keyTopics.map((topic) => (
                      <span
                        key={topic}
                        className="text-xs text-slate-700 bg-slate-50 border border-slate-200/70 px-2 py-0.5 rounded"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Milestone Indicator */}
        <div className="mt-12 p-5 rounded-xl bg-white border border-slate-200/90 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Semester 1 Milestone</div>
              <div className="text-xs text-slate-500">
                Strengthening logic, version control basics, and foundational syntax before advancing.
              </div>
            </div>
          </div>
          <div className="text-xs font-medium text-slate-600 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
            Current Term: 1st Semester B.Tech (2026)
          </div>
        </div>

      </div>
    </section>
  );
}
