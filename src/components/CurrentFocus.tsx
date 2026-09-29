import { FileCode2, Layout, Cpu, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export function CurrentFocus() {
  const iconMap: Record<string, React.ReactNode> = {
    FileCode2: <FileCode2 className="w-6 h-6 text-blue-600" aria-hidden="true" />,
    Layout: <Layout className="w-6 h-6 text-blue-600" aria-hidden="true" />,
    Cpu: <Cpu className="w-6 h-6 text-blue-600" aria-hidden="true" />
  };

  return (
    <section className="py-16 md:py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
            Weekly Technical Dedication
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight text-balance">
            What I'm Currently Learning
          </h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto mt-2 mb-4 rounded-full" />
          <p className="text-sm sm:text-base text-slate-600">
            Active technical domains I spend my study and coding hours on during my first semester.
          </p>
        </div>

        {/* 3 Primary Focus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.currentFocus.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl border border-slate-200/90 p-6 flex flex-col justify-between hover:shadow-md hover:border-blue-200 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {iconMap[item.icon]}
                  </div>
                  <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                    {item.tagline}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-5 pt-4 border-t border-slate-100">
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    Key Topics In Practice:
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {item.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" aria-hidden="true" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Active Learning
                </span>
                <a
                  href="#skills"
                  className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors font-medium"
                >
                  View Details
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
