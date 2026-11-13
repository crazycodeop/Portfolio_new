import React from 'react';
import Link from 'next/link';
import { VscGithubAlt } from 'react-icons/vsc';
import { GrLinkedinOption } from 'react-icons/gr';
import { FiMail, FiPhone, FiFileText } from 'react-icons/fi';

interface SidebarProps {
  activeSection: string;
}

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeSection }) => {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        {/* Name & Heading */}
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <Link href="/">Roshan Yadav</Link>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Full Stack Engineer &amp; AI Engineer
        </h2>

        {/* Exact Supporting Description */}
        <div className="mt-4 max-w-xs space-y-1.5 text-sm leading-normal text-slate-400">
          <p>2+ years architecting scalable cloud-native B2B SaaS platforms.</p>
          <p>Specialized in distributed backend systems and enterprise GenAI architectures.</p>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`group flex items-center py-3 ${isActive ? 'active' : ''}`}
                  >
                    <span
                      className={`nav-indicator mr-4 h-px transition-all motion-reduce:transition-none ${
                        isActive
                          ? 'w-16 bg-slate-200'
                          : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200'
                      }`}
                    />
                    <span
                      className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors ${
                        isActive
                          ? 'text-slate-200'
                          : 'text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'
                      }`}
                    >
                      {item.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Social Links & Direct Contacts */}
      <ul className="ml-1 mt-6 sm:mt-8 flex items-center gap-5" aria-label="Social media">
        <li>
          <a
            href="https://github.com/crazycodeop"
            target="_blank"
            rel="noreferrer noopener"
            className="block text-slate-400 hover:text-slate-200 transition-colors"
            aria-label="GitHub (opens in a new tab)"
            title="GitHub"
          >
            <span className="sr-only">GitHub</span>
            <VscGithubAlt className="h-6 w-6" />
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/roshanyadav026"
            target="_blank"
            rel="noreferrer noopener"
            className="block text-slate-400 hover:text-slate-200 transition-colors"
            aria-label="LinkedIn (opens in a new tab)"
            title="LinkedIn"
          >
            <span className="sr-only">LinkedIn</span>
            <GrLinkedinOption className="h-5 w-5" />
          </a>
        </li>
        <li>
          <a
            href="mailto:roshany.ir.ry@gmail.com"
            className="block text-slate-400 hover:text-slate-200 transition-colors"
            aria-label="Email Roshan Yadav"
            title="Email"
          >
            <span className="sr-only">Email</span>
            <FiMail className="h-5 w-5" />
          </a>
        </li>
        <li>
          <a
            href="tel:+919834905805"
            className="block text-slate-400 hover:text-slate-200 transition-colors"
            aria-label="Call Roshan Yadav"
            title="Phone"
          >
            <span className="sr-only">Phone</span>
            <FiPhone className="h-5 w-5" />
          </a>
        </li>
        <li>
          <a
            href="/Roshan_Yadav_Resume.pdf"
            target="_blank"
            rel="noreferrer noopener"
            className="block text-slate-400 hover:text-teal-300 transition-colors"
            aria-label="Open Resume PDF (opens in a new tab)"
            title="Resume PDF"
          >
            <span className="sr-only">Resume PDF</span>
            <FiFileText className="h-5 w-5" />
          </a>
        </li>
      </ul>
    </header>
  );
};
