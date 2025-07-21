'use client';

import { useState, useContext, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Moon, Sun, Smile } from 'lucide-react'; // Smile icon for modal
import PortfolioContext from '../context/portfolioContext';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useContext(PortfolioContext);

  // Modal state for theme toggle notice
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Nav items
  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#journey', label: 'Journey' },  // New item as you had before
    { href: '#achievements', label: 'Achievements' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  // Scroll progress for floating visibility logic
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    const previous = scrollYProgress.getPrevious();
    const direction = current - previous;

    if (scrollYProgress.get() < 0.01) {
      setVisible(true); // Always show at top
    } else {
      if (direction < 0) {
        setVisible(true); // Scrolling up
      } else {
        setVisible(false); // Scrolling down
      }
    }
  });

  const [initialAnimationDone, setInitialAnimationDone] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setInitialAnimationDone(true);
    }, 700);
    return () => clearTimeout(timeout);
  }, []);

  // Smooth scroll handler
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Show modal instead of toggling theme
  const handleToggleClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -100 }}
        animate={
          initialAnimationDone
            ? { opacity: visible ? 1 : 0, y: visible ? 0 : -100 }
            : { opacity: 1, y: 0 }
        }
        transition={
          initialAnimationDone
            ? { duration: 0.3, ease: 'easeInOut' }
            : { duration: 0.5, delay: 0.35, ease: 'easeOut' }
        }
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full flex justify-center overflow-x-hidden"
      >
        <div className="max-w-5xl px-6">
          <nav className="w-full flex items-center justify-between px-6 py-3 rounded-2xl backdrop-blur-md bg-gradient-to-r from-[#1f1133]/80 via-[#2e1a52]/60 to-[#1f1133]/80 border border-purple-700 shadow-lg z-50">
            {/* Desktop Nav */}
            <ul className="hidden md:flex gap-8 text-sm font-medium text-white justify-center">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-purple-400 transition-colors duration-200"
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Right side: Toggle + Resume */}
            <div className="flex items-center gap-6 ml-6">
              <button
                onClick={handleToggleClick}
                className="p-2 rounded-full bg-[#3b2e7f]/50 hover:bg-[#3b2e7f]/80 border border-purple-600 text-white transition"
                aria-label="Toggle Theme"
                title="Theme toggle is coming soon!"
              >
                {theme === 'myportfolioDark' ? (
                  <Sun size={18} />
                ) : (
                  <Moon size={18} />
                )}
              </button>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-block text-sm font-semibold px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-700 transition shadow-md text-white"
              >
                Resume
              </a>

              {/* Mobile menu toggle */}
              <button
                className="md:hidden text-white text-2xl"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? '✖' : '☰'}
              </button>
            </div>
          </nav>

          {/* Mobile Dropdown */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="md:hidden mt-2 p-4 rounded-2xl backdrop-blur-md bg-[#1f1133]/70 border border-purple-700 shadow-lg flex flex-col items-center space-y-3 text-white"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium hover:text-purple-400"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              ))}

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-700 transition text-white"
              >
                Resume
              </a>
            </motion.div>
          )}
        </div>
      </motion.header>

      {/* Modal for theme toggle notice */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[9999]"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
        >
          <motion.div
            className="bg-[#2e1a52] text-white rounded-2xl p-8 max-w-xs mx-4 text-center shadow-lg"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            onClick={(e) => e.stopPropagation()} // Prevent modal close on clicking inside
          >
            <Smile
              size={48}
              className="mx-auto mb-4 text-purple-400"
            />
            <h2 className="text-xl font-semibold mb-2">Oops! 🎉</h2>
            <p className="mb-4 text-sm text-purple-200">
              The theme toggle is currently hardcoded and will be available soon. Thanks for your patience!
            </p>
            <button
              onClick={closeModal}
              className="mt-2 px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-full font-semibold transition"
              autoFocus
            >
              Got it
            </button>
          </motion.div>
        </div>
      )}
    </>
  );
}

export default Navbar;
