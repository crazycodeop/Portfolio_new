import React, { useState, useEffect } from 'react';
import Link from 'next/link';

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

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#09090b]/92 backdrop-blur-md border-b border-white/[0.08] py-3.5 sm:py-4'
            : 'bg-[#09090b]/40 backdrop-blur-sm sm:bg-transparent border-b border-white/[0.04] py-4 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 flex items-center justify-between">
          {/* Brand */}
          <Link
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm sm:text-base font-semibold tracking-[0.25em] text-white uppercase hover:opacity-80 transition-opacity py-2"
          >
            ROSHAN<span className="text-neutral-500">.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-9">
            {navLinks.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12.5px] font-medium tracking-[0.18em] uppercase text-neutral-400 hover:text-white transition-colors duration-200 py-1"
                >
                  {item.label}
                </a>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[12.5px] font-medium tracking-[0.18em] uppercase text-neutral-400 hover:text-white transition-colors duration-200 py-1"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>

          {/* Mobile Menu Button (44x44px touch target) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-11 h-11 flex items-center justify-center text-neutral-300 hover:text-white focus:outline-none focus:ring-1 focus:ring-white/20 rounded-md transition-colors"
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
      </header>

      {/* Full-Screen Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-[#09090b]/98 backdrop-blur-xl flex flex-col justify-between pt-24 pb-10 px-6 sm:px-10 transition-all duration-300 animate-fadeIn"
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
                  className="flex items-center justify-between min-h-[52px] py-3 text-base sm:text-lg font-medium tracking-[0.2em] uppercase text-neutral-300 active:text-white border-b border-white/[0.06] transition-colors"
                >
                  <span>{item.label}</span>
                  <span className="text-xs font-mono text-neutral-500 tracking-normal">
                    PDF &rarr;
                  </span>
                </a>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="flex items-center justify-between min-h-[52px] py-3 text-base sm:text-lg font-medium tracking-[0.2em] uppercase text-neutral-300 active:text-white border-b border-white/[0.06] transition-colors"
                >
                  <span>{item.label}</span>
                  <span className="text-neutral-600 text-sm">&rarr;</span>
                </a>
              )
            )}
          </nav>

          {/* Mobile Drawer Bottom Info */}
          <div className="pt-8 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-neutral-400">
            <span>ROSHAN YADAV</span>
            <a
              href="mailto:roshany.ir.ry@gmail.com"
              className="text-neutral-300 underline underline-offset-4"
            >
              roshany.ir.ry@gmail.com
            </a>
          </div>
        </div>
      )}
    </>
  );
};
