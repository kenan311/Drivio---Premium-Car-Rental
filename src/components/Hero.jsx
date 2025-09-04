import { motion } from "framer-motion";

export default function Hero({ lang = 'en', onNavigate }) {
  const content = {
    en: {
      title: "Rent Your Dream Car Today",
      subtitle: "Affordable prices, luxury cars, and easy booking at your fingertips.",
      cta: "Book Now"
    },
    sq: {
      title: "Vozite Makinën e Ëndrrave Sot",
      subtitle: "Çmime të arsyeshme, makinat luksoze dhe rezervimi i lehtë në majë të gishtave.",
      cta: "Rezervo Tani"
    }
  }
  const t = content[lang] || content.en

  return (
    <section className="h-[80vh] flex items-center justify-center bg-gradient-to-r from-slate-800 via-slate-900 to-gray-900 text-white">
      <div className="text-center max-w-2xl px-4 sm:px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 font-display leading-tight"
        >
          {t.title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-6 sm:mb-8 text-base sm:text-lg text-gray-200"
        >
          {t.subtitle}
        </motion.p>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onNavigate && onNavigate('cars')}
          className="px-6 py-3 bg-white text-slate-900 font-semibold rounded-lg shadow-lg hover:bg-gray-100 active:bg-gray-200 transition-colors duration-300 touch-manipulation text-sm sm:text-base"
        >
          {t.cta}
        </motion.button>
      </div>
    </section>
  );
}
