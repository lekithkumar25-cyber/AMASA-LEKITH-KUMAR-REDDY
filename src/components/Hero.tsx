import { ArrowRight, Mail, Terminal, Sparkles, BookOpen, Code2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export function Hero() {
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

          {/* Right Column: Clean Vector Developer Illustration */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Subtle aesthetic card frame */}
              <div className="relative bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden p-4 sm:p-5">
                
                {/* Modern Student Engineer Vector Illustration */}
                <div className="relative aspect-square w-full rounded-xl bg-gradient-to-b from-blue-50/70 via-slate-50 to-slate-100 flex flex-col items-center justify-between p-5 border border-slate-100 overflow-hidden">
                  
                  {/* Decorative Terminal Header on the Desk */}
                  <div className="w-full bg-white/90 backdrop-blur-xs rounded-lg border border-slate-200/90 shadow-2xs p-3 mb-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-400">btech_student.py</span>
                    </div>
                    <div className="font-mono text-[11px] text-slate-700 space-y-1">
                      <div className="text-blue-600 font-semibold">
                        <span className="text-slate-400">01</span> class <span className="text-slate-900">StudentEngineer</span>:
                      </div>
                      <div className="text-slate-600 pl-4">
                        <span className="text-slate-400">02</span> term = <span className="text-emerald-700">"1st Semester"</span>
                      </div>
                      <div className="text-slate-600 pl-4">
                        <span className="text-slate-400">03</span> passion = [<span className="text-emerald-700">"Python"</span>, <span className="text-emerald-700">"Web"</span>, <span className="text-emerald-700">"GenAI"</span>]
                      </div>
                      <div className="text-blue-600 pl-4">
                        <span className="text-slate-400">04</span> def <span className="text-slate-900 font-semibold">build_future</span>(self):
                      </div>
                      <div className="text-emerald-700 pl-8 font-semibold">
                        <span className="text-slate-400">05</span> return <span className="text-blue-700">"Continuous Learning 🚀"</span>
                      </div>
                    </div>
                  </div>

                  {/* Central Student Developer Character Silhouette & Laptop */}
                  <div className="relative flex-1 flex items-center justify-center w-full">
                    <svg
                      viewBox="0 0 240 120"
                      className="w-48 h-auto"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="Student coding at computer"
                    >
                      {/* Desk surface */}
                      <rect x="10" y="105" width="220" height="8" rx="4" fill="#cbd5e1" />
                      
                      {/* Laptop Base & Screen */}
                      <rect x="75" y="55" width="90" height="50" rx="4" fill="#1e293b" />
                      <rect x="80" y="60" width="80" height="40" rx="2" fill="#0f172a" />
                      {/* Laptop code glow */}
                      <rect x="85" y="66" width="35" height="3" rx="1.5" fill="#38bdf8" />
                      <rect x="85" y="73" width="55" height="3" rx="1.5" fill="#a78bfa" />
                      <rect x="85" y="80" width="45" height="3" rx="1.5" fill="#34d399" />
                      <rect x="85" y="87" width="25" height="3" rx="1.5" fill="#f472b6" />
                      <rect x="70" y="102" width="100" height="4" rx="2" fill="#64748b" />
                      
                      {/* Coffee Mug */}
                      <rect x="185" y="82" width="16" height="23" rx="3" fill="#3b82f6" />
                      <path d="M201 88 C 206 88, 206 97, 201 97" stroke="#3b82f6" strokeWidth="2.5" fill="none" />
                      <path d="M190 77 Q 192 72, 194 77" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M194 76 Q 196 71, 198 76" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />

                      {/* Notebook */}
                      <rect x="35" y="92" width="28" height="13" rx="2" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
                      <line x1="39" y1="96" x2="55" y2="96" stroke="#64748b" strokeWidth="1" />
                      <line x1="39" y1="100" x2="50" y2="100" stroke="#64748b" strokeWidth="1" />
                    </svg>
                  </div>

                  {/* Status Tag */}
                  <div className="w-full flex items-center justify-between pt-2 border-t border-slate-200/60 text-[11px] text-slate-500">
                    <span className="flex items-center gap-1.5 font-medium text-slate-700">
                      <Code2 className="w-3.5 h-3.5 text-blue-600" />
                      Hands-on Code Practice
                    </span>
                    <span className="text-emerald-700 font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Active Student
                    </span>
                  </div>

                </div>

                {/* Quiet caption underneath */}
                <div className="mt-3 px-1 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-slate-800">Lekith Kumar Reddy Amasa</span>
                  <span className="font-medium text-blue-600">B.Tech First Year</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
