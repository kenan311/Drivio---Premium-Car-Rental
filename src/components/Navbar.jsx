import { motion } from "framer-motion";
import MobileNav from "./MobileNav";

export default function Navbar({ currentPage, onNavigate, lang = 'en', setLang }) {
  const labels = {
    en: { home: 'Home', cars: 'Cars', checkcar: 'Check your car', about: 'About', contact: 'Contact', en: 'EN', sq: 'SQ' },
    sq: { home: 'Ballina', cars: 'Makinat', checkcar: 'Kontrollo makinën', about: 'Rreth nesh', contact: 'Kontakti', en: 'EN', sq: 'SQ' }
  }
  const t = labels[lang] || labels.en
  const navItems = [
    { id: 'home', label: t.home },
    { id: 'cars', label: t.cars },
    { id: 'checkcar', label: t.checkcar },
    { id: 'about', label: t.about },
    { id: 'contact', label: t.contact }
  ];

  return (
    <motion.nav 
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100 z-50"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4">
        <motion.div 
          className="cursor-pointer"
          onClick={() => onNavigate('home')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img 
            src="/logo.png" 
            alt="CarRent Logo" 
            className="h-8 sm:h-10 w-auto object-contain"
          />
        </motion.div>
        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 lg:gap-8 text-gray-800 font-medium items-center">
          {navItems.map((item) => (
            <motion.li 
              key={item.id}
              className={`relative cursor-pointer transition-all duration-300 text-sm lg:text-base ${
                currentPage === item.id 
                  ? 'text-slate-900 font-semibold' 
                  : 'hover:text-slate-900 hover:font-medium text-gray-600'
              }`}
              onClick={() => onNavigate(item.id)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
              {currentPage === item.id && (
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-slate-900 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.li>
          ))}
          <li>
            <div className="flex items-center gap-2 ml-4">
              <button 
                className={`px-2 py-1 rounded-md text-sm border touch-manipulation ${lang==='en' ? 'bg-slate-900 text-white border-slate-900' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}
                onClick={() => setLang && setLang('en')}
              >{t.en}</button>
              <button 
                className={`px-2 py-1 rounded-md text-sm border touch-manipulation ${lang==='sq' ? 'bg-slate-900 text-white border-slate-900' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}
                onClick={() => setLang && setLang('sq')}
              >{t.sq}</button>
            </div>
          </li>
        </ul>

        {/* Mobile Navigation */}
        <MobileNav 
          currentPage={currentPage} 
          onNavigate={onNavigate} 
          lang={lang} 
          setLang={setLang} 
        />
      </div>
    </motion.nav>
  );
}
