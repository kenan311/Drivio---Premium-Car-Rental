import React from 'react'

export default function Filters({ query, setQuery, location, setLocation, locations, type, setType, types, seats, setSeats, driveMode, setDriveMode, driveModes, lang = 'en' }) {
  const content = {
    en: {
      title: "Search & Filters",
      searchPlaceholder: "Search cars by brand, model, or type...",
      location: "Location",
      vehicleType: "Vehicle Type",
      seats: "Seats",
      driveMode: "Drive Mode",
      clearFilters: "Clear All Filters"
    },
    sq: {
      title: "Kërko & Filtro",
      searchPlaceholder: "Kërko makina sipas markës, modelit ose llojit...",
      location: "Vendndodhja",
      vehicleType: "Lloji i Automjetit",
      seats: "Vende",
      driveMode: "Mënyra e Drejtimit",
      clearFilters: "Pastro Të Gjitha Filtrat"
    }
  }
  const t = content[lang] || content.en
return (
<div className="space-y-4 sm:space-y-6">
<div>
<h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">{t.title}</h3>
<div className="relative">
<input 
  value={query} 
  onChange={(e)=>setQuery(e.target.value)} 
  placeholder={t.searchPlaceholder} 
  className="w-full p-3 sm:p-4 pl-10 sm:pl-12 rounded-xl border border-gray-200 focus:border-slate-900 focus:ring-2 focus:ring-slate-200 transition-all duration-300 bg-white text-sm sm:text-base"
/>
<svg className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
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

<div className="pt-3 sm:pt-4 border-t border-gray-200">
<button 
  onClick={() => {
    setQuery('')
    setLocation('Prishtina')
    setType('All')
    setSeats('All')
    setDriveMode('All')
  }}
  className="w-full p-3 text-gray-700 border border-gray-300 rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors duration-300 text-sm sm:text-base touch-manipulation"
>
  {t.clearFilters}
</button>
</div>
</div>
)
}