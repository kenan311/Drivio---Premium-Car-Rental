import { motion } from "framer-motion";
import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

export default function CarCard({ car, onOpen, lang = 'en' }) {
  const [imageLoading, setImageLoading] = useState(true);
  const [showFeatures, setShowFeatures] = useState(false);
  const imageSrc = car.image || '/cars/placeholder.jpg'
  const title = `${car.brand || ''} ${car.model || ''}`.trim() || 'Car'
  
  const content = {
    en: {
      seats: "seats",
      rentNow: "Rent Now",
      perDay: "per day",
      year: "Year",
      mileage: "km",
      features: "Features",
      showMore: "Show More",
      showLess: "Show Less",
      unavailable: "Unavailable"
    },
    sq: {
      seats: "vende",
      rentNow: "Rezervo Tani",
      perDay: "në ditë",
      year: "Viti",
      mileage: "km",
      features: "Karakteristikat",
      showMore: "Shfaq Më Shumë",
      showLess: "Shfaq Më Pak",
      unavailable: "Jo në Dispozicion"
    }
  }
  const t = content[lang] || content.en
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
      className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 group h-full flex flex-col"
    >
      <div className="relative overflow-hidden">
        {imageLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <LoadingSpinner size="md" />
          </div>
        )}
        <img 
          src={imageSrc}
          alt={title}
          loading="lazy"
          onLoad={() => setImageLoading(false)}
          onError={(e)=>{ 
            e.currentTarget.onerror=null; 
            e.currentTarget.src='/cars/placeholder.jpg';
            setImageLoading(false);
          }}
          className={`w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500 ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
        />
        <div className="absolute top-3 right-3 bg-slate-900 text-white px-3 py-1 rounded-full text-xs font-semibold">
          {car.type}
        </div>
        {!car.availability && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
            {t.unavailable}
          </div>
        )}
        {car.rating && (
          <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-gray-900 px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
            <svg className="w-3 h-3 fill-current text-amber-500" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            {car.rating}
          </div>
        )}
      </div>
      
      <div className="p-4 sm:p-6 flex-1 flex flex-col">
        <div className="mb-4 sm:mb-6 flex-1">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight min-h-[2.5rem] sm:min-h-[3rem] flex items-start">{car.brand} {car.model}</h3>
          
          {/* Car Details */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 mb-3">
            <span className="flex items-center gap-1 flex-shrink-0">
              <svg className="w-3 sm:w-4 h-3 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              {car.seats} {t.seats}
            </span>
            <span className="flex items-center gap-1 flex-shrink-0">
              <svg className="w-3 sm:w-4 h-3 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
              {car.transmission}
            </span>
            <span className="flex items-center gap-1 flex-shrink-0">
              <svg className="w-3 sm:w-4 h-3 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
              {car.fuel}
            </span>
          </div>

          {/* Additional Info */}
          <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
            {car.year && (
              <span className="flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                </svg>
                {car.year}
              </span>
            )}
            {car.mileage && (
              <span className="flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                </svg>
                {car.mileage.toLocaleString()} {t.mileage}
              </span>
            )}
          </div>

          {/* Features */}
          {car.features && car.features.length > 0 && (
            <div className="mb-3">
              <button
                onClick={() => setShowFeatures(!showFeatures)}
                className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-700 font-medium mb-2"
              >
                <span>{t.features}</span>
                <motion.svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ rotate: showFeatures ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>
              <motion.div
                initial={false}
                animate={{ height: showFeatures ? 'auto' : 0, opacity: showFeatures ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="flex flex-wrap gap-1">
                  {car.features.slice(0, 6).map((feature, index) => (
                    <span
                      key={index}
                      className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                    >
                      {feature}
                    </span>
                  ))}
                  {car.features.length > 6 && (
                    <span className="inline-block bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                      +{car.features.length - 6} more
                    </span>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </div>
        
        <div className="mt-auto">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <div className="flex flex-col">
              <div className="text-xl sm:text-2xl font-bold text-slate-900">€{car.pricePerDay}</div>
              <div className="text-xs text-gray-500">{t.perDay}</div>
            </div>
            {car.popularity && (
              <div className="flex items-center gap-1 text-blue-500">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <span className="text-xs font-medium text-gray-600">{car.popularity}%</span>
              </div>
            )}
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={!car.availability}
            className={`w-full font-semibold py-3 px-4 sm:px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl touch-manipulation text-sm sm:text-base ${
              car.availability 
                ? 'bg-slate-900 hover:bg-slate-800 active:bg-slate-700 text-white' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            onClick={() => car.availability && onOpen && onOpen(car)}
          >
            {car.availability ? t.rentNow : t.unavailable}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
