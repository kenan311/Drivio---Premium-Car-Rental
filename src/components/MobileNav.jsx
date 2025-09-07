import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileNav({ currentPage, onNavigate, lang = 'en', setLang }) {
  const [isOpen, setIsOpen] = useState(false);

  // Escape + Scroll Lock
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const labels = {
    en: { home: 'Home', cars: 'Cars', checkcar: 'Check your car', about: 'About', contact: 'Contact', en: 'EN', sq: 'SQ' },
    sq: { home: 'Ballina', cars: 'Makinat', checkcar: 'Kontrollo makinën', about: 'Rreth nesh', contact: 'Kontakti', en: 'EN', sq: 'SQ' }
  };
  const t = labels[lang] || labels.en;

  const navItems = [
    { id: 'home', label: t.home, icon: '🏠' },
    { id: 'cars', label: t.cars, icon: '🚗' },
    { id: 'checkcar', label: t.checkcar, icon: '🔍' },
    { id: 'about', label: t.about, icon: 'ℹ️' },
    { id: 'contact', label: t.contact, icon: '📞' }
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden relative z-50 p-2 rounded-lg hover:bg-gray-100 transition-colors touch-manipulation"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          className="w-6 h-6 flex flex-col justify-center items-center"
        >
          <motion.span
            animate={{
              rotate: isOpen ? 45 : 0,
              y: isOpen ? 0 : -6,
              scaleX: isOpen ? 0.8 : 1
            }}
            className="w-5 h-0.5 bg-gray-800 block origin-center transition-all duration-300"
          />
          <motion.span
            animate={{
              opacity: isOpen ? 0 : 1,
              scaleX: isOpen ? 0 : 1
            }}
            className="w-5 h-0.5 bg-gray-800 block mt-1 origin-center transition-all duration-300"
          />
          <motion.span
            animate={{
              rotate: isOpen ? -45 : 0,
              y: isOpen ? 0 : 6,
              scaleX: isOpen ? 0.8 : 1
            }}
            className="w-5 h-0.5 bg-gray-800 block mt-1 origin-center transition-all duration-300"
          />
        </motion.div>
      </button>

      {/* Overlay (nga transparent → bardhë) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0, backgroundColor: "rgba(255,255,255,0)" }}
            animate={{ opacity: 1, backgroundColor: "rgba(255,255,255,1)" }}
            exit={{ opacity: 0, backgroundColor: "rgba(255,255,255,0)" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden fixed inset-0 z-[65]"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            key="menu"
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{
              type: 'spring',
              damping: 25,
              stiffness: 300,
              mass: 0.7,
              opacity: { duration: 0.2 }
            }}
            className="md:hidden fixed top-0 left-0 z-[70] w-full h-full bg-white shadow-2xl"
          >
            {/* Solid white backdrop to guarantee no transparency */}
            <div className="absolute inset-0 bg-white"></div>

            {/* Content wrapper */}
            <div className="relative min-h-full flex flex-col">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 p-6 pt-16">
              <div className="flex items-center justify-between">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <h2 className="text-lg font-semibold text-gray-900 font-display">Menu</h2>
                  <p className="text-xs text-gray-500 mt-1">Navigation</p>
                </motion.div>
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors touch-manipulation"
                  aria-label="Close menu"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>
            </div>

            <div className="p-6 bg-white flex flex-col h-full">
              {/* Language Toggle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-6"
              >
                <h3 className="text-xs sm:text-sm font-medium text-gray-500 mb-3 flex items-center gap-2">
                  <span>🌐</span>
                  Language / Gjuha
                </h3>
                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm border transition-all duration-200 ${
                      lang === 'en'
                        ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'
                    }`}
                    onClick={() => setLang && setLang('en')}
                  >
                    {t.en}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm border transition-all duration-200 ${
                      lang === 'sq'
                        ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'
                    }`}
                    onClick={() => setLang && setLang('sq')}
                  >
                    {t.sq}
                  </motion.button>
                </div>
              </motion.div>

              {/* Navigation Items */}
              <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex-1 space-y-3"
              >
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.5 + index * 0.1,
                      type: 'spring',
                      stiffness: 100
                    }}
                    onClick={() => {
                      onNavigate(item.id);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 group ${
                      currentPage === item.id
                        ? 'bg-slate-900 text-white shadow-lg scale-[1.02]'
                        : 'text-gray-700 hover:bg-gray-100 active:bg-gray-200 hover:shadow-md'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.span
                      className="text-2xl flex-shrink-0"
                      animate={{
                        rotate: currentPage === item.id ? [0, -10, 10, 0] : 0,
                        scale: currentPage === item.id ? 1.1 : 1
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.icon}
                    </motion.span>
                    <span className="font-medium text-base flex-1">{item.label}</span>
                    {currentPage === item.id && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="ml-auto w-2 h-2 bg-white rounded-full shadow-sm"
                      />
                    )}
                  </motion.button>
                ))}
              </motion.nav>

              {/* Footer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-6 pt-4 border-t border-gray-200"
              >
                <div className="text-center text-sm text-gray-500">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="font-medium text-gray-700"
                  >
                    Drivio - Premium Car Rental
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.0 }}
                    className="mt-1"
                  >
                    © 2025 All rights reserved
                  </motion.p>
                </div>
              </motion.div>
            </div>
            </div>{/* end content wrapper */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
