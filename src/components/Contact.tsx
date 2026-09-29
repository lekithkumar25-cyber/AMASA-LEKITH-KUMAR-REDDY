import { useState } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle2, Copy, Check, MessageSquare } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ContactProps {
  onOpenGithubNotice: () => void;
}

export function Contact({ onOpenGithubNotice }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      return;
    }

    setStatus('submitting');
    // Simulate frontend submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    }, 600);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
            Get In Touch
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Let's Connect
          </h2>
          <div className="w-12 h-1 bg-blue-600 mt-2 mb-4 rounded-full" />
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            I'm always interested in learning, building, collaborating, and connecting with people who share an interest in technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Links & Profile info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Student Availability Card */}
            <div className="bg-white rounded-xl border border-slate-200/90 p-6 shadow-2xs">
              <h3 className="text-base font-bold text-slate-900 mb-1">
                Open to Opportunities
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                As a first-semester B.Tech student, I am eager to connect with mentors, join hackathon teams, and learn about engineering practices.
              </p>

              <div className="mt-5 space-y-3">
                {/* LinkedIn link */}
                <a
                  href={PORTFOLIO_DATA.profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg border border-slate-200/90 hover:border-blue-300 hover:bg-blue-50/40 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">LinkedIn Profile</div>
                      <div className="text-[11px] text-slate-500">amasa-lekith-kumar-reddy</div>
                    </div>
                  </div>
                  <span className="text-xs text-blue-600 font-semibold group-hover:translate-x-0.5 transition-transform">
                    Connect &rarr;
                  </span>
                </a>

                {/* GitHub Placeholder Button */}
                <button
                  type="button"
                  onClick={onOpenGithubNotice}
                  className="w-full flex items-center justify-between p-3 rounded-lg border border-slate-200/90 hover:border-slate-300 hover:bg-slate-50 transition-all text-left group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-slate-100 text-slate-700 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">[GitHub Profile]</div>
                      <div className="text-[11px] text-slate-500">Student Code Repositories</div>
                    </div>
                  </div>
                  <span className="text-xs text-slate-600 font-medium">
                    View Info &rarr;
                  </span>
                </button>

                {/* Email Direct Contact */}
                <div className="p-3 rounded-lg border border-slate-200/90 bg-slate-50/60 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-white border border-slate-200 text-slate-600">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-900">Email Address</div>
                      <div className="text-[11px] text-slate-600 font-mono">
                        {PORTFOLIO_DATA.profile.email}
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="p-2 rounded-md bg-white border border-slate-200 hover:bg-slate-100 text-slate-600 transition-colors"
                    title="Copy email to clipboard"
                    aria-label="Copy email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Quick message guidelines */}
            <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 text-xs text-slate-600 space-y-1.5">
              <div className="font-semibold text-blue-900 flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Good topics to reach out about:</span>
              </div>
              <p>• Hackathon or ideathon team partnerships</p>
              <p>• Python, Web Dev, or Generative AI study resources</p>
              <p>• Mentorship advice for first-year engineering students</p>
            </div>

          </div>

          {/* Right Column: Clean Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl border border-slate-200/90 p-6 sm:p-8 shadow-2xs">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Feel free to drop a message or greeting. I'll get back to you promptly!
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Sharma"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-blue-600 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@example.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-blue-600 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-700 mb-1">
                    Subject / Topic (Optional)
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Hackathon collaboration / Tech chat"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-blue-600 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Lekith, I saw your portfolio and wanted to connect regarding..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-blue-600 focus:outline-none transition-colors resize-y"
                  />
                </div>

                {status === 'error' && (
                  <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs">
                    Please fill out your name, email, and message before sending.
                  </div>
                )}

                {status === 'success' && (
                  <div className="p-3.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>
                      Thank you for reaching out! Your message has been noted, and Lekith will be happy to connect with you soon.
                    </span>
                  </div>
                )}

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">
                    Direct inquiries welcome
                  </span>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-98 rounded-lg shadow-2xs transition-all disabled:opacity-60 cursor-pointer"
                  >
                    {status === 'submitting' ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
