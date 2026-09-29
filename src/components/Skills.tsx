import { useState } from 'react';
import { PORTFOLIO_DATA, SkillItem } from '../data/portfolioData';
import { Terminal, Globe, Cpu, Wrench, Layers } from 'lucide-react';

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Areas', icon: <Layers className="w-3.5 h-3.5" /> },
    { id: 'programming', label: 'Programming', icon: <Terminal className="w-3.5 h-3.5" /> },
    { id: 'web', label: 'Web Development', icon: <Globe className="w-3.5 h-3.5" /> },
    { id: 'ai', label: 'AI & Emerging Tech', icon: <Cpu className="w-3.5 h-3.5" /> },
    { id: 'tools', label: 'Tools & Workflow', icon: <Wrench className="w-3.5 h-3.5" /> },
  ];

  const filteredSkills =
    activeCategory === 'all'
      ? PORTFOLIO_DATA.skills
      : PORTFOLIO_DATA.skills.filter((skill) => skill.category === activeCategory);

  const getCategoryBadge = (category: SkillItem['category']) => {
    switch (category) {
      case 'programming':
        return 'bg-blue-50 text-blue-700 border-blue-100';
      case 'web':
        return 'bg-emerald-50 text-emerald-700 border-emerald-100';
      case 'ai':
        return 'bg-indigo-50 text-indigo-700 border-indigo-100';
      case 'tools':
        return 'bg-slate-100 text-slate-700 border-slate-200';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  const getCategoryLabel = (category: SkillItem['category']) => {
    switch (category) {
      case 'programming':
        return 'Programming';
      case 'web':
        return 'Web Dev';
      case 'ai':
        return 'AI & Emerging Tech';
      case 'tools':
        return 'Tools';
    }
  };

  return (
    <section id="skills" className="py-16 md:py-20 bg-white border-y border-slate-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
            Technical Repertoire
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Skills & Current Learning
          </h2>
          <div className="w-12 h-1 bg-blue-600 mt-2 mb-4 rounded-full" />
          <p className="text-sm sm:text-base text-slate-600">
            A transparent overview of the technologies, concepts, and developer tools I am studying as a first-semester B.Tech student. No fabricated percentages—strictly honest, growth-oriented learning.
          </p>
        </div>

        {/* Interactive Segmented Filter Controls */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100/90 rounded-xl max-w-fit mb-8 border border-slate-200/70">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-4 rounded-xl border border-slate-200/90 bg-white hover:border-slate-300 hover:shadow-2xs transition-all flex flex-col justify-between"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="text-sm font-semibold text-slate-900">
                  {skill.name}
                </span>
                <span
                  className={`text-[11px] font-medium px-2 py-0.5 rounded border ${getCategoryBadge(
                    skill.category
                  )} shrink-0`}
                >
                  {getCategoryLabel(skill.category)}
                </span>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-mono text-[11px]">Level:</span>
                <span className="font-medium text-slate-700 bg-slate-50 px-2 py-0.5 rounded text-[11px]">
                  {skill.levelText}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Honest Transparency Note */}
        <div className="mt-8 p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
          <div className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 shrink-0" />
          <p className="text-xs text-slate-600 leading-relaxed">
            <strong>Student Commitment:</strong> As a beginner, I focus on consistent daily practice, writing clean syntax, and understanding computer science first principles. Rather than arbitrary mastery ratings, each skill reflects my current stage of active study, lab assignments, and project application.
          </p>
        </div>

      </div>
    </section>
  );
}
