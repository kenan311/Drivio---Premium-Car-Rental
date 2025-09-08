import React, { useMemo, useState } from "react";
import CarCard from "../components/CarCard";
import Filters from "../components/Filters";
import AdvancedSearch from "../components/AdvancedSearch";
import BookingModal from "../components/BookingModal";
import cars from "../data/cars";

const TYPES = ["All", "SUV", "Sedan", "Hatchback", "Sport", "Luxury", "EV"];

export default function Cars({ lang = 'en' }) {
  const content = {
    en: {
      title: "Available Cars",
      carsFound: "car",
      carsFoundPlural: "cars",
      foundIn: "found in",
      noCarsFound: "No cars found",
      tryAdjusting: "Try adjusting your filters or search terms",
      bookingSuccess: "Booking completed!"
    },
    sq: {
      title: "Makinat në Dispozicion",
      carsFound: "makinë",
      carsFoundPlural: "makina",
      foundIn: "u gjetën në",
      noCarsFound: "Nuk u gjetën makina",
      tryAdjusting: "Provo të rregullosh filtrat ose termat e kërkimit",
      bookingSuccess: "Rezervimi u përfundua!"
    }
  }
  const t = content[lang] || content.en
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("Prishtina");
  const [type, setType] = useState("All");
  const [seats, setSeats] = useState("All");
  const [driveMode, setDriveMode] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 250]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedFuel, setSelectedFuel] = useState("");
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [availabilityFilter, setAvailabilityFilter] = useState("all");
  const [sortBy, setSortBy] = useState("popularity");
  const [sortOrder, setSortOrder] = useState("desc");
  const [filteredCars, setFilteredCars] = useState(cars);
  const [openCar, setOpenCar] = useState(null);
  const [bookings, setBookings] = useState([]);

  const locations = useMemo(() => {
    const set = new Set();
    cars.forEach((c) => c.locations.forEach((l) => set.add(l)));
    return Array.from(set);
  }, []);

  const driveModes = useMemo(() => {
    const set = new Set();
    cars.forEach((c) => {
      if (c.transmission) set.add(c.transmission);
    });
    return ["All", ...Array.from(set)];
  }, []);

  const brands = useMemo(() => [...new Set(cars.map(car => car.brand))], [cars]);
  const fuels = useMemo(() => [...new Set(cars.map(car => car.fuel))], [cars]);
  const allFeatures = useMemo(() => {
    const features = new Set();
    cars.forEach(car => {
      if (car.features) {
        car.features.forEach(feature => features.add(feature));
      }
    });
    return [...features];
  }, [cars]);

  const filtered = useMemo(() => {
    let filtered = cars.filter((c) => {
      // Basic filters
      if (type !== "All" && c.type !== type) return false;
      if (!c.locations.includes(location)) return false;
      if (driveMode !== "All" && c.transmission !== driveMode) return false;
      if (seats !== "All") {
        const min = parseInt(seats);
        if (Number.isFinite(min) && c.seats < min) return false;
      }

      // Advanced filters
      if (selectedBrand && c.brand !== selectedBrand) return false;
      if (selectedFuel && c.fuel !== selectedFuel) return false;
      if (c.pricePerDay < priceRange[0] || c.pricePerDay > priceRange[1]) return false;
      if (availabilityFilter === 'available' && !c.availability) return false;
      if (availabilityFilter === 'unavailable' && c.availability) return false;
      if (selectedFeatures.length > 0) {
        const hasAllFeatures = selectedFeatures.every(feature => 
          c.features && c.features.includes(feature)
        );
        if (!hasAllFeatures) return false;
      }

      return true;
    });

    // Sort cars
    filtered.sort((a, b) => {
      let aValue, bValue;
      
      switch (sortBy) {
        case 'price':
          aValue = a.pricePerDay;
          bValue = b.pricePerDay;
          break;
        case 'rating':
          aValue = a.rating || 0;
          bValue = b.rating || 0;
          break;
        case 'popularity':
          aValue = a.popularity || 0;
          bValue = b.popularity || 0;
          break;
        case 'year':
          aValue = a.year || 0;
          bValue = b.year || 0;
          break;
        case 'mileage':
          aValue = a.mileage || 0;
          bValue = b.mileage || 0;
          break;
        default:
          aValue = a.popularity || 0;
          bValue = b.popularity || 0;
      }

      if (sortOrder === 'asc') {
        return aValue - bValue;
      } else {
        return bValue - aValue;
      }
    });

    return filtered;
  }, [type, location, driveMode, seats, selectedBrand, selectedFuel, priceRange, availabilityFilter, selectedFeatures, sortBy, sortOrder]);

  function handleBooked(res) {
    setBookings((prev) => [res, ...prev]);
    alert(t.bookingSuccess);
  }

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* Advanced Search - Real-time search bar */}
        <AdvancedSearch 
          cars={cars} 
          onFilteredCars={setFilteredCars} 
          lang={lang} 
        />

        <div className="grid grid-cols-1 lg:grid-cols-[300px,1fr] gap-6 lg:gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:sticky lg:top-24">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6">
              <Filters
                location={location}
                setLocation={setLocation}
                locations={locations.length ? locations : ["Prishtina"]}
                type={type}
                setType={setType}
                types={TYPES}
                seats={seats}
                setSeats={setSeats}
                driveMode={driveMode}
                setDriveMode={setDriveMode}
                driveModes={driveModes}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                selectedBrand={selectedBrand}
                setSelectedBrand={setSelectedBrand}
                brands={brands}
                selectedFuel={selectedFuel}
                setSelectedFuel={setSelectedFuel}
                fuels={fuels}
                selectedFeatures={selectedFeatures}
                setSelectedFeatures={setSelectedFeatures}
                allFeatures={allFeatures}
                availabilityFilter={availabilityFilter}
                setAvailabilityFilter={setAvailabilityFilter}
                sortBy={sortBy}
                setSortBy={setSortBy}
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}
                lang={lang}
              />
            </div>
          </aside>

          <section className="w-full">
            <div className="mb-6 sm:mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 font-display">
                  {t.title}
                </h1>
                <div className="text-sm text-gray-700 bg-white px-3 sm:px-4 py-2 rounded-xl border border-gray-200 self-start sm:self-auto">
                  {filtered.length} {filtered.length !== 1 ? t.carsFoundPlural : t.carsFound} {t.foundIn}{" "}
                  <strong className="text-slate-900">{location}</strong>
                </div>
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-8 sm:py-12">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {t.noCarsFound}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {t.tryAdjusting}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {filtered.map((car) => (
                  <CarCard key={car.id} car={car} onOpen={() => setOpenCar(car)} lang={lang} />
                ))}
              </div>
            )}
          </section>
        </div>
      </main>

      {openCar && (
        <BookingModal
          open={Boolean(openCar)}
          onClose={() => setOpenCar(null)}
          car={openCar}
          onBooked={handleBooked}
          lang={lang}
        />
      )}
    </div>
  );
}
