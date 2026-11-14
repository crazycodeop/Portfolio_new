import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaFileAlt } from 'react-icons/fa';

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
        <h1
          className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl animate-reveal"
          style={{ animationDelay: '40ms' }}
        >
          <Link href="/">Roshan Yadav</Link>
        </h1>
        <h2
          className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl animate-reveal"
          style={{ animationDelay: '90ms' }}
        >
          Full Stack Engineer &amp; AI Engineer
        </h2>

        {/* Exact Supporting Description — 16px text-base matching Brittany reference */}
        <div
          className="mt-4 max-w-xs space-y-1.5 text-base leading-normal text-slate-400 animate-reveal"
          style={{ animationDelay: '140ms' }}
        >
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
            {/* Resume navigation item (commented out for now)
            <li>
              <Link
                href="/resume"
                className="group flex items-center py-3"
              >
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all motion-reduce:transition-none group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200" />
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 transition-colors group-hover:text-slate-200 group-focus-visible:text-slate-200 flex items-center gap-1.5">
                  Resume
                  <span className="text-teal-300 font-medium">↗</span>
                </span>
              </Link>
            </li>
            */}
          </ul>
        </nav>
      </div>

      {/* Social Links & Direct Contacts — Filled icons matching reference */}
      <ul
        className="ml-1 mt-8 flex items-center gap-5 animate-reveal"
        style={{ animationDelay: '200ms' }}
        aria-label="Social media"
      >
        <li className="shrink-0">
          <a
            href="https://github.com/crazycodeop"
            target="_blank"
            rel="noreferrer noopener"
            className="block text-slate-400 hover:text-slate-200 transition-colors"
            aria-label="GitHub (opens in a new tab)"
            title="GitHub"
          >
            <span className="sr-only">GitHub</span>
            <FaGithub className="h-6 w-6" />
          </a>
        </li>
        <li className="shrink-0">
          <a
            href="https://linkedin.com/in/roshanyadav026"
            target="_blank"
            rel="noreferrer noopener"
            className="block text-slate-400 hover:text-slate-200 transition-colors"
            aria-label="LinkedIn (opens in a new tab)"
            title="LinkedIn"
          >
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin className="h-6 w-6" />
          </a>
        </li>
        <li className="shrink-0">
          <a
            href="mailto:roshany.ir.ry@gmail.com"
            className="block text-slate-400 hover:text-slate-200 transition-colors"
            aria-label="Email Roshan Yadav"
            title="Email"
          >
            <span className="sr-only">Email</span>
            <FaEnvelope className="h-6 w-6" />
          </a>
        </li>
        <li className="shrink-0">
          <a
            href="tel:+919834905805"
            className="block text-slate-400 hover:text-slate-200 transition-colors"
            aria-label="Call Roshan Yadav"
            title="Phone"
          >
            <span className="sr-only">Phone</span>
            <FaPhone className="h-5 w-5" />
          </a>
        </li>
        <li className="shrink-0">
          <a
            href="/Roshan_Yadav_Resume.pdf"
            target="_blank"
            rel="noreferrer noopener"
            className="block text-slate-400 hover:text-teal-300 transition-colors"
            aria-label="Open Resume PDF (opens in a new tab)"
            title="Resume PDF"
          >
            <span className="sr-only">Resume PDF</span>
            <FaFileAlt className="h-6 w-6" />
          </a>
        </li>
      </ul>
    </header>
  );
};
