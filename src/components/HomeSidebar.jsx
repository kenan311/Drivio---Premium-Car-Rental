import React from 'react';
import { motion } from 'framer-motion';

export default function HomeSidebar({ lang = 'en', onNavigate }) {
  const content = {
    en: {
      title: "Why Choose Drivio?",
      features: [
        {
          icon: "🚗",
          title: "Premium Fleet",
          description: "Luxury cars from top brands"
        },
        {
          icon: "💰",
          title: "Best Prices",
          description: "Competitive rates guaranteed"
        },
        {
          icon: "⚡",
          title: "Instant Booking",
          description: "Reserve in minutes"
        },
        {
          icon: "🛡️",
          title: "24/7 Support",
          description: "Always here to help"
        }
      ],
      quickActions: {
        title: "Quick Actions",
        browseCars: "Browse All Cars",
        checkCar: "Check Your Car",
        contact: "Contact Us"
      },
      stats: {
        title: "Our Numbers",
        cars: "200+",
        customers: "10K+",
        rating: "4.9★"
      }
    },
    sq: {
      title: "Pse të Zgjidhni Drivio?",
      features: [
        {
          icon: "🚗",
          title: "Flota Premium",
          description: "Makinat luksoze nga markat më të mira"
        },
        {
          icon: "💰",
          title: "Çmimet Më të Mira",
          description: "Tarifat konkurruese të garantuara"
        },
        {
          icon: "⚡",
          title: "Rezervim i Menjëhershëm",
          description: "Rezervo për pak minuta"
        },
        {
          icon: "🛡️",
          title: "Mbështetje 24/7",
          description: "Gjithmonë këtu për t'ju ndihmuar"
        }
      ],
      quickActions: {
        title: "Veprime të Shpejta",
        browseCars: "Shfleto Të Gjitha Makinat",
        checkCar: "Kontrollo Makinën Tënde",
        contact: "Na Kontaktoni"
      },
      stats: {
        title: "Numrat Tanë",
        cars: "200+",
        customers: "10K+",
        rating: "4.9★"
      }
    }
  }
  const t = content[lang] || content.en

  return (
    <div className="space-y-6">
      {/* Why Choose Us */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 font-display">{t.title}</h3>
        <div className="space-y-4">
          {t.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-3"
            >
              <div className="text-2xl">{feature.icon}</div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">{feature.title}</h4>
                <p className="text-xs text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 font-display">{t.quickActions.title}</h3>
        <div className="space-y-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate && onNavigate('cars')}
            className="w-full p-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 active:bg-slate-700 transition-colors duration-200 text-sm font-medium touch-manipulation"
          >
            {t.quickActions.browseCars}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate && onNavigate('checkcar')}
            className="w-full p-4 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors duration-200 text-sm font-medium touch-manipulation"
          >
            {t.quickActions.checkCar}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate && onNavigate('contact')}
            className="w-full p-4 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors duration-200 text-sm font-medium touch-manipulation"
          >
            {t.quickActions.contact}
          </motion.button>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-gradient-to-br from-slate-900 to-gray-900 rounded-2xl shadow-lg p-6 text-white">
        <h3 className="text-lg font-semibold mb-4 font-display">{t.stats.title}</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold">{t.stats.cars}</div>
            <div className="text-xs text-gray-300">Cars</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{t.stats.customers}</div>
            <div className="text-xs text-gray-300">Customers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{t.stats.rating}</div>
            <div className="text-xs text-gray-300">Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
}
