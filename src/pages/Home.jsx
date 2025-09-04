// src/pages/Home.jsx
import React, { useMemo, useState } from "react";
import CarCard from "../components/CarCard";
import HomeSidebar from "../components/HomeSidebar";
import BookingModal from "../components/BookingModal";
import CARS from "../data/cars";

const BRANDS = ["Volkswagen", "VW", "Golf", "BMW", "Audi", "Mercedes"];

export default function Home({ onNavigate, lang = 'en' }) {
  const content = {
    en: {
      title: "Budget Friendly Picks",
      carsAvailable: "car",
      carsAvailablePlural: "cars",
      availableIn: "available in",
      noCarsFound: "No cars found",
      tryAdjusting: "Try adjusting your filters or search terms",
      bookingSuccess: "Booking completed! ID:"
    },
    sq: {
      title: "Zgjedhje të Arsyesshme",
      carsAvailable: "makinë",
      carsAvailablePlural: "makina",
      availableIn: "në dispozicion në",
      noCarsFound: "Nuk u gjetën makina",
      tryAdjusting: "Provo të rregullosh filtrat ose termat e kërkimit",
      bookingSuccess: "Rezervimi u përfundua! ID:"
    }
  }
  const t = content[lang] || content.en
  const [openCar, setOpenCar] = useState(null);
  const [bookings, setBookings] = useState([]);

  const cars = CARS;

  // Show only budget-friendly cars from selected brands, sorted by price
  const filtered = useMemo(() => {
    return cars
      .filter((c) => {
        // Only selected brands
        const brandMatch = BRANDS.some((b) =>
          c.brand.toLowerCase().includes(b.toLowerCase())
        );
        return brandMatch;
      })
      .sort((a, b) => a.pricePerDay - b.pricePerDay) // sort by price
      .slice(0, 6); // take only 6 cheapest
  }, [cars]);

  function handleBooked(res) {
    setBookings((prev) => [res, ...prev]);
    alert(t.bookingSuccess + " " + res.id);
  }

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[300px,1fr] gap-6 lg:gap-8">
          {/* Sidebar - Hidden on mobile, shown on desktop */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <HomeSidebar lang={lang} onNavigate={onNavigate} />
            </div>
          </aside>

          <section className="w-full">
            <div className="mb-6 sm:mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 font-display">
                  {t.title}
                </h1>
                <div className="text-sm text-gray-700 bg-white px-3 sm:px-4 py-2 rounded-xl border border-gray-200 self-start sm:self-auto">
                  {filtered.length} {filtered.length !== 1 ? t.carsAvailablePlural : t.carsAvailable} {t.availableIn} <strong className="text-slate-900">Kosovo</strong>
                </div>
              </div>
              {filtered.length === 0 && (
                <div className="text-center py-8 sm:py-12">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                    {t.noCarsFound}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {t.tryAdjusting}
                  </p>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {filtered.map((car) => (
                <CarCard key={car.id} car={car} onOpen={(c) => setOpenCar(c)} lang={lang} />
              ))}
            </div>
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
