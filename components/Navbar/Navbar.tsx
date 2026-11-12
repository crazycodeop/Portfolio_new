import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';

const navLinks = [
  { label: 'EXP', href: '#experience' },
  { label: 'WORK', href: '#work' },
  { label: 'STACK', href: '#stack' },
  { label: 'ABOUT', href: '#about' },
  { label: 'CONTACT', href: '#contact' },
  { label: 'RESUME', href: '/Roshan_Yadav_Resume.pdf', external: true },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [mobileMenuOpen]);

  // Handle ESC key to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const isDark = mounted ? theme === 'dark' : true;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#ffffff]/90 dark:bg-[#18181b]/90 backdrop-blur-md border-b border-[#e4e4e7] dark:border-[#3f3f46] py-3.5 sm:py-4 shadow-sm dark:shadow-none'
            : 'bg-transparent border-b border-transparent py-4 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 flex items-center justify-between">
          {/* Brand */}
          <Link
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm sm:text-base font-semibold tracking-[0.25em] text-[#1f2937] dark:text-[#e4e4e7] uppercase hover:opacity-80 transition-opacity py-2"
          >
            ROSHAN<span className="text-[#6b7280] dark:text-[#a1a1aa]">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-9">
            <nav className="flex items-center space-x-9">
              {navLinks.map((item) =>
                item.external ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[12.5px] font-medium tracking-[0.18em] uppercase text-[#4b5563] hover:text-[#1f2937] dark:text-[#a1a1aa] dark:hover:text-[#e4e4e7] transition-colors duration-200 py-1"
                  >
                    {item.label}
                  </a>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-[12.5px] font-medium tracking-[0.18em] uppercase text-[#4b5563] hover:text-[#1f2937] dark:text-[#a1a1aa] dark:hover:text-[#e4e4e7] transition-colors duration-200 py-1"
                  >
                    {item.label}
                  </a>
                )
              )}
            </nav>

            {/* Desktop Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="w-9 h-9 flex items-center justify-center rounded-md text-[#4b5563] hover:text-[#1f2937] dark:text-[#a1a1aa] dark:hover:text-[#e4e4e7] border border-[#e4e4e7] dark:border-[#3f3f46] hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-all duration-200"
            >
              {isDark ? (
                <FiSun className="w-4 h-4 transition-transform duration-200 rotate-0 hover:rotate-45" />
              ) : (
                <FiMoon className="w-4 h-4 transition-transform duration-200 -rotate-12 hover:rotate-0" />
              )}
            </button>
          </div>

          {/* Mobile Right Controls: Theme Toggle + Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="w-10 h-10 flex items-center justify-center rounded-md text-[#4b5563] hover:text-[#1f2937] dark:text-[#a1a1aa] dark:hover:text-[#e4e4e7] border border-[#e4e4e7] dark:border-[#3f3f46] active:scale-95 transition-all"
            >
              {isDark ? (
                <FiSun className="w-4 h-4" />
              ) : (
                <FiMoon className="w-4 h-4" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 flex items-center justify-center text-[#4b5563] hover:text-[#1f2937] dark:text-[#a1a1aa] dark:hover:text-[#e4e4e7] border border-[#e4e4e7] dark:border-[#3f3f46] rounded-md transition-colors"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.75}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.75}
                    d="M4 7h16M4 17h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-[#ffffff]/98 dark:bg-[#18181b]/98 backdrop-blur-xl flex flex-col justify-between pt-24 pb-10 px-6 sm:px-10 transition-all duration-300"
          style={{ height: '100dvh' }}
        >
          {/* Navigation Links */}
          <nav className="flex flex-col space-y-2 mt-4">
            {navLinks.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                  className="flex items-center justify-between min-h-[52px] py-3 text-base sm:text-lg font-medium tracking-[0.2em] uppercase text-[#1f2937] dark:text-[#e4e4e7] border-b border-[#e4e4e7] dark:border-[#3f3f46] transition-colors"
                >
                  <span>{item.label}</span>
                  <span className="text-xs font-mono text-[#6b7280] dark:text-[#a1a1aa] tracking-normal">
                    PDF &rarr;
                  </span>
                </a>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="flex items-center justify-between min-h-[52px] py-3 text-base sm:text-lg font-medium tracking-[0.2em] uppercase text-[#1f2937] dark:text-[#e4e4e7] border-b border-[#e4e4e7] dark:border-[#3f3f46] transition-colors"
                >
                  <span>{item.label}</span>
                  <span className="text-[#6b7280] dark:text-[#a1a1aa] text-sm">&rarr;</span>
                </a>
              )
            )}
          </nav>

          {/* Mobile Drawer Bottom Info */}
          <div className="pt-8 border-t border-[#e4e4e7] dark:border-[#3f3f46] flex items-center justify-between text-xs font-mono text-[#6b7280] dark:text-[#a1a1aa]">
            <span>ROSHAN YADAV</span>
            <a
              href="mailto:roshany.ir.ry@gmail.com"
              className="text-[#1f2937] dark:text-[#e4e4e7] underline underline-offset-4"
            >
              roshany.ir.ry@gmail.com
            </a>
          </div>
        </div>
      )}
    </>
  );
};
