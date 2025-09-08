import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Filters({ 
  location, setLocation, locations, 
  type, setType, types, 
  seats, setSeats, 
  driveMode, setDriveMode, driveModes,
  priceRange, setPriceRange,
  selectedBrand, setSelectedBrand, brands,
  selectedFuel, setSelectedFuel, fuels,
  selectedFeatures, setSelectedFeatures, allFeatures,
  availabilityFilter, setAvailabilityFilter,
  sortBy, setSortBy,
  sortOrder, setSortOrder,
  lang = 'en' 
}) {
  const [isExpanded, setIsExpanded] = useState(false)
  
  const content = {
    en: {
      title: "Advanced Filters",
      location: "Location",
      vehicleType: "Vehicle Type",
      seats: "Seats",
      driveMode: "Drive Mode",
      brand: "Brand",
      fuel: "Fuel Type",
      priceRange: "Price Range",
      features: "Features",
      availability: "Availability",
      sortBy: "Sort By",
      all: "All",
      available: "Available",
      unavailable: "Unavailable",
      price: "Price",
      rating: "Rating",
      popularity: "Popularity",
      year: "Year",
      mileage: "Mileage",
      asc: "Ascending",
      desc: "Descending",
      clearFilters: "Clear All Filters",
      showMore: "Show More",
      showLess: "Show Less"
    },
    sq: {
      title: "Filtrat e Avancuar",
      location: "Vendndodhja",
      vehicleType: "Lloji i Automjetit",
      seats: "Vende",
      driveMode: "Mënyra e Drejtimit",
      brand: "Marka",
      fuel: "Lloji i Karburantit",
      priceRange: "Gama e Çmimeve",
      features: "Karakteristikat",
      availability: "Disponueshmëria",
      sortBy: "Rendit Sipas",
      all: "Të Gjitha",
      available: "Në Dispozicion",
      unavailable: "Jo në Dispozicion",
      price: "Çmimi",
      rating: "Vlerësimi",
      popularity: "Popullariteti",
      year: "Viti",
      mileage: "Kilometrazhi",
      asc: "Rritës",
      desc: "Zbritës",
      clearFilters: "Pastro Të Gjitha Filtrat",
      showMore: "Shfaq Më Shumë",
      showLess: "Shfaq Më Pak"
    }
  }
  const t = content[lang] || content.en
  const handleFeatureToggle = (feature) => {
    setSelectedFeatures(prev => 
      prev.includes(feature) 
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    );
  };

  const clearFilters = () => {
    setLocation('Prishtina')
    setType('All')
    setSeats('All')
    setDriveMode('All')
    setPriceRange([0, 250])
    setSelectedBrand('')
    setSelectedFuel('')
    setSelectedFeatures([])
    setAvailabilityFilter('all')
    setSortBy('popularity')
    setSortOrder('desc')
  };

return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900">{t.title}</h3>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 font-medium"
        >
          <span>{isExpanded ? t.showLess : t.showMore}</span>
          <motion.svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </motion.svg>
        </button>
</div>

      {/* Basic Filters - Always Visible */}
      <div className="space-y-4">
<div>
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">{t.location}</label>
<select 
  value={location} 
  onChange={(e)=>setLocation(e.target.value)} 
            className="w-full p-3 sm:p-4 rounded-xl border border-gray-200 focus:border-slate-900 focus:ring-2 focus:ring-slate-200 transition-all duration-300 bg-white text-sm sm:text-base touch-manipulation"
>
{locations.map(l => <option key={l} value={l}>{l}</option>)}
</select>
</div>

<div>
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">{t.vehicleType}</label>
<select 
  value={type} 
  onChange={(e)=>setType(e.target.value)} 
            className="w-full p-3 sm:p-4 rounded-xl border border-gray-200 focus:border-slate-900 focus:ring-2 focus:ring-slate-200 transition-all duration-300 bg-white text-sm sm:text-base touch-manipulation"
>
{types.map(t => <option key={t} value={t}>{t}</option>)}
</select>
</div>

<div>
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">{t.seats}</label>
<select 
  value={seats} 
  onChange={(e)=>setSeats(e.target.value)} 
            className="w-full p-3 sm:p-4 rounded-xl border border-gray-200 focus:border-slate-900 focus:ring-2 focus:ring-slate-200 transition-all duration-300 bg-white text-sm sm:text-base touch-manipulation"
>
{["All","2+","4+","5+","7+"].map(s => <option key={s} value={s}>{s} seats</option>)}
</select>
</div>

<div>
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">{t.driveMode}</label>
<select 
  value={driveMode} 
  onChange={(e)=>setDriveMode(e.target.value)} 
            className="w-full p-3 sm:p-4 rounded-xl border border-gray-200 focus:border-slate-900 focus:ring-2 focus:ring-slate-200 transition-all duration-300 bg-white text-sm sm:text-base touch-manipulation"
>
{driveModes.map(m => <option key={m} value={m}>{m}</option>)}
</select>
</div>
</div>

      {/* Advanced Filters - Collapsible */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden space-y-4 border-t border-gray-200 pt-4"
          >
            {/* Brand Filter */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">{t.brand}</label>
              <select 
                value={selectedBrand} 
                onChange={(e)=>setSelectedBrand(e.target.value)} 
                className="w-full p-3 sm:p-4 rounded-xl border border-gray-200 focus:border-slate-900 focus:ring-2 focus:ring-slate-200 transition-all duration-300 bg-white text-sm sm:text-base touch-manipulation"
              >
                <option value="">{t.all}</option>
                {brands.map(brand => <option key={brand} value={brand}>{brand}</option>)}
              </select>
            </div>

            {/* Fuel Filter */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">{t.fuel}</label>
              <select 
                value={selectedFuel} 
                onChange={(e)=>setSelectedFuel(e.target.value)} 
                className="w-full p-3 sm:p-4 rounded-xl border border-gray-200 focus:border-slate-900 focus:ring-2 focus:ring-slate-200 transition-all duration-300 bg-white text-sm sm:text-base touch-manipulation"
              >
                <option value="">{t.all}</option>
                {fuels.map(fuel => <option key={fuel} value={fuel}>{fuel}</option>)}
              </select>
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                {t.priceRange}: €{priceRange[0]} - €{priceRange[1]}
              </label>
              <div className="space-y-2">
                <input
                  type="range"
                  min="0"
                  max="250"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <input
                  type="range"
                  min="0"
                  max="250"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>
            </div>

            {/* Availability Filter */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">{t.availability}</label>
              <select 
                value={availabilityFilter} 
                onChange={(e)=>setAvailabilityFilter(e.target.value)} 
                className="w-full p-3 sm:p-4 rounded-xl border border-gray-200 focus:border-slate-900 focus:ring-2 focus:ring-slate-200 transition-all duration-300 bg-white text-sm sm:text-base touch-manipulation"
              >
                <option value="all">{t.all}</option>
                <option value="available">{t.available}</option>
                <option value="unavailable">{t.unavailable}</option>
              </select>
            </div>

            {/* Features Filter */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">{t.features}</label>
              <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
                {allFeatures.map(feature => (
                  <button
                    key={feature}
                    onClick={() => handleFeatureToggle(feature)}
                    className={`px-2 py-1 rounded-full text-xs transition-all duration-200 ${
                      selectedFeatures.includes(feature)
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {feature}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort Options */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">{t.sortBy}</label>
                <select 
                  value={sortBy} 
                  onChange={(e)=>setSortBy(e.target.value)} 
                  className="w-full p-3 sm:p-4 rounded-xl border border-gray-200 focus:border-slate-900 focus:ring-2 focus:ring-slate-200 transition-all duration-300 bg-white text-sm sm:text-base touch-manipulation"
                >
                  <option value="popularity">{t.popularity}</option>
                  <option value="price">{t.price}</option>
                  <option value="rating">{t.rating}</option>
                  <option value="year">{t.year}</option>
                  <option value="mileage">{t.mileage}</option>
                </select>
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Order</label>
                <select 
                  value={sortOrder} 
                  onChange={(e)=>setSortOrder(e.target.value)} 
                  className="w-full p-3 sm:p-4 rounded-xl border border-gray-200 focus:border-slate-900 focus:ring-2 focus:ring-slate-200 transition-all duration-300 bg-white text-sm sm:text-base touch-manipulation"
                >
                  <option value="desc">{t.desc}</option>
                  <option value="asc">{t.asc}</option>
                </select>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="pt-3 sm:pt-4 border-t border-gray-200">
<button 
          onClick={clearFilters}
          className="w-full p-3 text-gray-700 border border-gray-300 rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors duration-300 text-sm sm:text-base touch-manipulation"
        >
          {t.clearFilters}
</button>
</div>
    </div>
  )
}