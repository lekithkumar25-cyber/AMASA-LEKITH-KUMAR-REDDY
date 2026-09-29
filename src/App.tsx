/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { CurrentFocus } from './components/CurrentFocus';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Hackathons } from './components/Hackathons';
import { LearningJourney } from './components/LearningJourney';
import { Goals } from './components/Goals';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { GithubModal } from './components/GithubModal';

export default function App() {
  const [githubModalOpen, setGithubModalOpen] = useState(false);

  const scrollToContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* 1. Navigation Bar */}
      <Navbar onOpenConnectModal={scrollToContact} />

      {/* Main Content */}
      <main id="main-content">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. About Me Section */}
        <About />

        {/* 8. Current Focus Section: "What I'm Currently Learning" */}
        <CurrentFocus />

        {/* 4. Skills & Current Learning Section */}
        <Skills />

        {/* 5. Projects Section */}
        <Projects onOpenGithubNotice={() => setGithubModalOpen(true)} />

        {/* 6. Hackathons & Ideathons Section */}
        <Hackathons />

        {/* 7. Learning Journey Section */}
        <LearningJourney />

        {/* 9. Goals Section */}
        <Goals />

        {/* 10. Contact Section */}
        <Contact onOpenGithubNotice={() => setGithubModalOpen(true)} />
      </main>

      {/* 11. Footer */}
      <Footer onOpenGithubNotice={() => setGithubModalOpen(true)} />

      {/* Academic GitHub Repository Notice Modal */}
      <GithubModal
        isOpen={githubModalOpen}
        onClose={() => setGithubModalOpen(false)}
      />
    </div>
  );
}
