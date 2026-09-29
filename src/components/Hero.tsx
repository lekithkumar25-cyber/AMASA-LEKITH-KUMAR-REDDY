import { useState } from 'react';
import { ArrowRight, Mail, Terminal, Sparkles, BookOpen } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import studentIllustration from '../assets/images/student_developer_illustration_1790679754925.jpg';

export function Hero() {
  const [imgError, setImgError] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      {/* Subtle background ambient warmth */}
      <div
        className="absolute top-0 right-0 -z-10 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 -z-10 w-80 h-80 bg-slate-100/70 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Identity & Introductions */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Clean unboxed metadata separator */}
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-4 tracking-wide uppercase">
              <span className="inline-flex items-center gap-1.5 text-blue-700 font-semibold">
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                First-Semester B.Tech
              </span>
              <span aria-hidden="true">·</span>
              <span>Aspiring Software Engineer</span>
              <span aria-hidden="true">·</span>
              <span>2026 Cohort</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight sm:leading-tight lg:leading-[1.15] text-balance">
              Hi, I'm{' '}
              <span className="text-slate-900">
                {PORTFOLIO_DATA.profile.shortName}
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg font-semibold text-blue-700 leading-snug">
              {PORTFOLIO_DATA.profile.subheading}
            </p>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl text-pretty">
              {PORTFOLIO_DATA.profile.bio}
            </p>

            {/* Honest Student Highlights (unboxed metadata row) */}
            <div className="mt-6 pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500">
              <div className="flex items-center gap-1.5 font-medium text-slate-700">
                <Terminal className="w-4 h-4 text-blue-600" aria-hidden="true" />
                <span>Python Fundamentals</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium text-slate-700">
                <BookOpen className="w-4 h-4 text-blue-600" aria-hidden="true" />
                <span>Active Student Learner</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium text-slate-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500" aria-hidden="true" />
                <span>Open for Hackathons & Mentorship</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 active:scale-98 transition-all shadow-sm focus-visible:outline-blue-600 cursor-pointer"
              >
                View My Projects
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 hover:text-slate-900 active:scale-98 transition-all shadow-xs focus-visible:outline-slate-900 cursor-pointer"
              >
                Connect With Me
                <Mail className="w-4 h-4 text-slate-500" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual illustration representing a first-year student developer */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Subtle aesthetic card frame */}
              <div className="relative bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden p-3 sm:p-4">
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-100 flex items-center justify-center">
                  {!imgError ? (
                    <img
                      src={studentIllustration}
                      alt="Illustration of a first-semester B.Tech student studying and coding at a desk"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-102"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    /* Fallback clean SVG container */
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-slate-50">
                      <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                        <Terminal className="w-8 h-8" />
                      </div>
                      <h4 className="text-base font-bold text-slate-800">Lekith Kumar Reddy</h4>
                      <p className="text-xs text-slate-500 mt-1">B.Tech Student & Aspiring Engineer</p>
                      <div className="mt-3 text-[11px] text-blue-600 font-mono bg-blue-50 px-2.5 py-1 rounded">
                        print("Hello World!")
                      </div>
                    </div>
                  )}
                </div>

                {/* Quiet caption underneath */}
                <div className="mt-3 px-2 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-medium text-slate-700">Lekith Kumar Reddy Amasa</span>
                  <span>1st Semester · B.Tech</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
