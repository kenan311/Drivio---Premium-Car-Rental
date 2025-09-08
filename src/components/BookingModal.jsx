import React, { useMemo, useState } from 'react'
import { createBooking } from '../services/api'
import PaymentModal from './PaymentModal'
import LoadingSpinner from './LoadingSpinner'

export default function BookingModal({ open, onClose, car, onBooked, lang = 'en' }) {
  const content = {
    en: {
      title: "Booking",
      close: "Close",
      pickup: "Pick-up",
      dropoff: "Drop-off",
      days: "Days",
      total: "Total",
      cancel: "Cancel",
      completeRent: "Complete Rent",
      processing: "Processing...",
      error: "Problem with booking. Try again."
    },
    sq: {
      title: "Rezervim",
      close: "Mbyll",
      pickup: "Marrje",
      dropoff: "Dorëzim",
      days: "Ditë",
      total: "Totali",
      cancel: "Anulo",
      completeRent: "Përfundo Qiranë",
      processing: "Duke përpunuar...",
      error: "Problem me rezervimin. Provo përsëri."
    }
  }
  const t = content[lang] || content.en

  const [pickup, setPickup] = useState('')
  const [dropoff, setDropoff] = useState('')
  const [loading, setLoading] = useState(false)
  const [activeIdx, setActiveIdx] = useState(0)
  const [showPayment, setShowPayment] = useState(false)
  const [bookingData, setBookingData] = useState(null)

  if (!open || !car) return null

  const days = (() => {
    if (!pickup || !dropoff) return 1
    const s = new Date(pickup)
    const e = new Date(dropoff)
    const diff = Math.ceil((e - s) / (1000 * 60 * 60 * 24))
    return diff > 0 ? diff : 1
  })()

  const base = car.pricePerDay * days

  // Build gallery: prefer local `car.gallery`, fallback to `car.image` and online seeds
  const gallery = useMemo(() => {
    if (Array.isArray(car.gallery) && car.gallery.length > 0) {
      return car.gallery
    }
    const seed = `${car.brand || 'car'}-${car.model || 'model'}`
    const fallbacks = [1, 2, 3, 4].map(
      (n) => `https://picsum.photos/seed/${encodeURIComponent(seed + '-' + n)}/800/500`
    )
    const unique = (arr) => Array.from(new Set(arr.filter(Boolean)))
    return unique([car.image, ...(Array.isArray(car.images) ? car.images : []), ...fallbacks])
  }, [car])

  async function handleConfirm() {
    setLoading(true)
    const res = await createBooking({ carId: car.id, pickup, dropoff, total: base })
    setLoading(false)
    if (res && res.success) {
      setBookingData({ ...res, pickup, dropoff, days, total: base })
      setShowPayment(true)
    } else {
      alert(t.error)
    }
  }

  function handlePaymentSuccess() {
    onBooked(bookingData)
    setShowPayment(false)
    setBookingData(null)
    onClose()
  }

  return (
    <>
      <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-2 sm:p-4">
        <div className="w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto bg-white rounded-2xl">
          <div className="p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base sm:text-lg font-medium">
                {t.title} — {car.brand} {car.model}
              </h3>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 p-1 touch-manipulation"
              >
                {t.close}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Gallery */}
              <div>
                <div className="aspect-[16/10] w-full overflow-hidden rounded-xl bg-gray-100">
                  <img
                    src={gallery[activeIdx]}
                    alt={`${car.brand} ${car.model}`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-3 flex gap-2 sm:gap-3 overflow-x-auto pb-1">
                  {gallery.slice(0, 6).map((src, idx) => (
                    <button
                      key={src + idx}
                      onClick={() => setActiveIdx(idx)}
                      className={`h-12 sm:h-16 min-w-16 sm:min-w-24 overflow-hidden rounded-lg border touch-manipulation ${
                        idx === activeIdx
                          ? 'ring-2 ring-slate-900 border-slate-900'
                          : 'border-gray-200'
                      }`}
                    >
                      <img
                        src={src}
                        alt={`thumb-${idx}`}
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Booking form */}
              <div>
                <div className="grid grid-cols-1 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm text-gray-600 mb-1">
                      {t.pickup}
                    </label>
                    <input
                      type="date"
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      className="w-full p-3 sm:p-2 border rounded-lg mt-1 text-sm sm:text-base touch-manipulation"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm text-gray-600 mb-1">
                      {t.dropoff}
                    </label>
                    <input
                      type="date"
                      value={dropoff}
                      onChange={(e) => setDropoff(e.target.value)}
                      className="w-full p-3 sm:p-2 border rounded-lg mt-1 text-sm sm:text-base touch-manipulation"
                    />
                  </div>
                </div>

                <div className="mt-4 p-3 sm:p-4 rounded-lg border bg-gray-50">
                  <div className="flex items-center justify-between text-sm sm:text-base">
                    <div>{t.days}</div>
                    <div>{days}</div>
                  </div>
                  <div className="flex items-center justify-between font-semibold mt-2 text-base sm:text-lg">
                    <div>{t.total}</div>
                    <div>€{base}</div>
                  </div>
                </div>

                <div className="mt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2 sm:gap-2">
                  <button
                    onClick={onClose}
                    className="px-4 py-3 sm:py-2 rounded-lg border border-gray-300 bg-white text-slate-700 hover:bg-gray-50 active:bg-gray-100 touch-manipulation text-sm sm:text-base"
                  >
                    {t.cancel}
                  </button>
                  <button
                    onClick={handleConfirm}
                    disabled={loading}
                    className="px-4 py-3 sm:py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 active:bg-slate-700 disabled:opacity-60 flex items-center justify-center gap-2 touch-manipulation text-sm sm:text-base"
                  >
                    {loading ? <LoadingSpinner size="sm" /> : null}
                    {loading ? t.processing : t.completeRent}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      <PaymentModal
        open={showPayment}
        onClose={() => setShowPayment(false)}
        car={car}
        booking={bookingData}
        onSuccess={handlePaymentSuccess}
        lang={lang}
      />
    </>
  )
}
