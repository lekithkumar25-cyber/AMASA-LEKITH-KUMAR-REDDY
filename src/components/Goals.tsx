import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Target, CheckCircle2 } from 'lucide-react';

export function Goals() {
  return (
    <section id="goals" className="py-16 md:py-20 bg-white border-y border-slate-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
            Aspirations & Roadmap
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            My Goals
          </h2>
          <div className="w-12 h-1 bg-blue-600 mt-2 mb-4 rounded-full" />
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Realistic, tangible targets I've set for my early undergraduate journey to transition from a beginner to a confident, disciplined software engineer.
          </p>
        </div>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PORTFOLIO_DATA.goals.map((goal, idx) => (
            <div
              key={goal.title}
              className="p-5 rounded-xl border border-slate-200/90 bg-slate-50/40 hover:bg-white hover:border-blue-200 hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-xs font-bold text-blue-600">
                    Goal 0{idx + 1}
                  </span>
                  <span className="text-[11px] font-medium text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200/80">
                    {goal.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {goal.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {goal.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs text-slate-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Target for B.Tech First Year</span>
              </div>
            </div>
          ))}
        </div>

        {/* Guiding Philosophy Callout */}
        <div className="mt-10 p-6 rounded-2xl bg-blue-50/70 border border-blue-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-blue-600 text-white shadow-xs shrink-0 mt-0.5">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Core Philosophy: Consistent Daily Progress
              </h4>
              <p className="text-xs text-slate-600 mt-1 max-w-xl">
                "Small improvements every single day lead to immense growth over a four-year engineering degree. Focused curiosity over premature complexity."
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="text-xs font-semibold text-blue-700 hover:text-blue-900 underline whitespace-nowrap"
          >
            Connect on this journey &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
