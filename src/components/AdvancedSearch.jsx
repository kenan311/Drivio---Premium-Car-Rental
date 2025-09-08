import React, { useState, useEffect, useMemo } from 'react';

const AdvancedSearch = ({ cars, onFilteredCars, lang }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Debounced search
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Filter cars based on search term
  const filteredCars = useMemo(() => {
    if (!debouncedSearchTerm) return cars;
    
    const searchLower = debouncedSearchTerm.toLowerCase();
    return cars.filter(car => 
      car.brand.toLowerCase().includes(searchLower) ||
      car.model.toLowerCase().includes(searchLower) ||
      car.type.toLowerCase().includes(searchLower) ||
      car.fuel.toLowerCase().includes(searchLower)
    );
  }, [cars, debouncedSearchTerm]);

  // Update parent component with filtered cars
  useEffect(() => {
    onFilteredCars(filteredCars);
  }, [filteredCars, onFilteredCars]);

  const translations = {
    en: {
      search: "Search cars..."
    },
    sq: {
      search: "Kërko makina..."
    }
  };

  const t = translations[lang] || translations.en;

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-6">
      {/* Search Bar */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={t.search}
          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            <svg className="h-5 w-5 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

    </div>
  );
};

export default AdvancedSearch;
