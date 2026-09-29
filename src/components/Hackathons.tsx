import { Code, Lightbulb, Workflow, Users, Target, Rocket } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export function Hackathons() {
  const iconMap: Record<string, React.ReactNode> = {
    Code: <Code className="w-5 h-5 text-blue-600" aria-hidden="true" />,
    Lightbulb: <Lightbulb className="w-5 h-5 text-blue-600" aria-hidden="true" />,
    Workflow: <Workflow className="w-5 h-5 text-blue-600" aria-hidden="true" />
  };

  return (
    <section id="hackathons" className="py-16 md:py-20 bg-white border-y border-slate-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
            Teamwork & Applied Experience
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Hackathons & Ideathons
          </h2>
          <div className="w-12 h-1 bg-blue-600 mt-2 mb-4 rounded-full" />
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            I actively participate in hackathons and ideathons to explore real-world problems, develop ideas, collaborate with others, and gain practical experience.
          </p>
        </div>

        {/* 3 Core Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.hackathons.map((item) => (
            <div
              key={item.title}
              className="bg-slate-50/50 rounded-xl border border-slate-200/90 p-6 flex flex-col justify-between hover:bg-white hover:shadow-md hover:border-slate-300 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-white border border-slate-200/80 shadow-2xs group-hover:scale-105 transition-transform">
                    {iconMap[item.icon]}
                  </div>
                  <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                    {item.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-5 pt-4 border-t border-slate-200/60">
                  <div className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2.5">
                    Key Takeaways & Activities:
                  </div>
                  <ul className="space-y-2 text-xs text-slate-600">
                    {item.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>Role: First-Year Student Contributor</span>
                <span className="text-blue-600 font-semibold">Participating & Learning</span>
              </div>
            </div>
          ))}
        </div>

        {/* Realistic Pillars of Student Collaboration */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border border-slate-200/80 bg-white flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-900">Peer Collaboration</div>
              <div className="text-[11px] text-slate-500">Learning alongside fellow enthusiastic engineers</div>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-slate-200/80 bg-white flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-900">Pragmatic Scoping</div>
              <div className="text-[11px] text-slate-500">Focusing on executable prototypes and ideas</div>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-slate-200/80 bg-white flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
              <Rocket className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-900">Continuous Growth</div>
              <div className="text-[11px] text-slate-500">Applying post-hackathon feedback to coursework</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
