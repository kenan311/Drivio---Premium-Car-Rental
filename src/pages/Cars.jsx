import React, { useMemo, useState } from "react";
import CarCard from "../components/CarCard";
import Filters from "../components/Filters";
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

  const filtered = useMemo(() => {
    return cars.filter((c) => {
      if (type !== "All" && c.type !== type) return false;
      if (!c.locations.includes(location)) return false;
      if (driveMode !== "All" && c.transmission !== driveMode) return false;
      if (seats !== "All") {
        const min = parseInt(seats);
        if (Number.isFinite(min) && c.seats < min) return false;
      }
      const q = query.trim().toLowerCase();
      if (
        q &&
        !(
          c.brand.toLowerCase().includes(q) ||
          c.model.toLowerCase().includes(q) ||
          c.type.toLowerCase().includes(q)
        )
      )
        return false;
      return true;
    });
  }, [query, location, type, seats, driveMode]);

  function handleBooked(res) {
    setBookings((prev) => [res, ...prev]);
    alert(t.bookingSuccess);
  }

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[300px,1fr] gap-6 lg:gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6">
              <Filters
                query={query}
                setQuery={setQuery}
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
