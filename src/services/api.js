//import { CARS } from '../data/cars'

function getApiKey(){
const fromEnv = (typeof import.meta !== 'undefined') ? (import.meta.env?.VITE_AUTO_DEV_API_KEY) : undefined
// Allow fallback via window or localStorage so devs can set it without restarting
const fromWindow = typeof window !== 'undefined' ? (window.__AUTO_DEV_API_KEY__) : undefined
const fromStorage = typeof window !== 'undefined' ? window.localStorage?.getItem?.('AUTO_DEV_API_KEY') : undefined
return fromEnv || fromWindow || fromStorage
}

export function fetchCars() {
// simulate network delay
return new Promise((res) => setTimeout(() => res(CARS), 300))
}


export function createBooking(booking) {
// Normally: POST to server. Këtu thjesht resolve immediatly.
return new Promise((res) => setTimeout(() => res({ success: true, id: Date.now(), ...booking }), 400))
}


// Fetch car details by VIN from Auto.dev
export async function fetchCarByVin(vin) {
const apiKey = getApiKey()
if(!apiKey) throw new Error('Missing VITE_AUTO_DEV_API_KEY (or window.__AUTO_DEV_API_KEY__ / localStorage AUTO_DEV_API_KEY)')

const response = await fetch(`/api/auto/vin/${encodeURIComponent(vin)}`, {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json'
  }
})

if(!response.ok){
  const text = await response.text().catch(()=> '')
  throw new Error(`Auto.dev error ${response.status}: ${text}`)
}

const data = await response.json()
return mapAutoDevVinToCar(data)
}

// Fetch vehicle specifications by VIN
export async function fetchSpecsByVin(vin){
const apiKey = getApiKey()
if(!apiKey) throw new Error('Missing VITE_AUTO_DEV_API_KEY (or window.__AUTO_DEV_API_KEY__ / localStorage AUTO_DEV_API_KEY)')
const res = await fetch(`/api/auto/specs/${encodeURIComponent(vin)}`,{
  headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type':'application/json' }
})
if(!res.ok) throw new Error(`Specs error ${res.status}`)
return res.json()
}

// Fetch photos by VIN
export async function fetchPhotosByVin(vin){
const apiKey = getApiKey()
if(!apiKey) throw new Error('Missing VITE_AUTO_DEV_API_KEY (or window.__AUTO_DEV_API_KEY__ / localStorage AUTO_DEV_API_KEY)')
const res = await fetch(`/api/auto/photos/${encodeURIComponent(vin)}`,{
  headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type':'application/json' }
})
if(!res.ok) throw new Error(`Photos error ${res.status}`)
return res.json()
}

// Fetch marketplace listings
export async function fetchListings(limit = 48){
const apiKey = getApiKey()
if(!apiKey) throw new Error('Missing VITE_AUTO_DEV_API_KEY (or window.__AUTO_DEV_API_KEY__ / localStorage AUTO_DEV_API_KEY)')
const url = `/api/auto/listings${Number.isFinite(limit) ? `?limit=${limit}` : ''}`
const res = await fetch(url,{
  headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type':'application/json' }
})
if(!res.ok) throw new Error(`Listings error ${res.status}`)
const json = await res.json()
// Accept multiple possible shapes
let listings = []
if(Array.isArray(json)) listings = json
else if(Array.isArray(json?.data)) listings = json.data
else if(Array.isArray(json?.listings)) listings = json.listings
else if(Array.isArray(json?.results)) listings = json.results
else if(json && typeof json === 'object') listings = Object.values(json).find(Array.isArray) || []

// First pass: fast map using inline photos if present
let cars = await Promise.all(listings.map(l => mapListingToCar(l)))

// Second pass: fill missing images for first N cars with limited concurrency
const MISSING = cars
  .map((c, idx) => ({car: c, listing: listings[idx]}))
  .filter(x => !x.car.image || x.car.image.includes('placeholder'))
  .slice(0, 30)

await runWithConcurrency(MISSING, 6, async ({car, listing}) => {
  const vin = listing?.vehicle?.vin || listing?.vin
  if(!vin) return
  try{
    const photos = await fetchPhotosByVin(vin)
    const img = extractBestPhotoFromPhotosResponse(photos)
    if(img) car.image = img
  }catch(_e){ /* ignore */ }
})

return cars
}

function extractBestPhotoFromPhotosResponse(resp){
return resp?.data?.retail?.[0]?.url
  || resp?.data?.auction?.[0]?.url
  || resp?.data?.[0]?.url
  || null
}

async function runWithConcurrency(items, limit, worker){
const queue = [...items]
const runners = new Array(Math.min(limit, queue.length)).fill(null).map(async function runner(){
  while(queue.length){
    const next = queue.shift()
    await worker(next)
  }
})
await Promise.all(runners)
}

async function mapListingToCar(listing){
const vehicle = listing?.vehicle || {}
const vin = vehicle?.vin || listing?.vin
// Try multiple photo locations commonly used
let image = listing?.retailListing?.photo
  || listing?.photo
  || listing?.images?.[0]?.url
  || listing?.media?.photos?.[0]?.url
  || listing?.media?.[0]?.url

const make = vehicle?.make
const model = vehicle?.model
const year = Number(vehicle?.year)
const fuel = vehicle?.fuelType || vehicle?.engine?.fuelType
const transmission = vehicle?.transmission || vehicle?.drivetrain
const seats = Number(vehicle?.seatingCapacity || 5)

// Price: use retail price if present; fallback to heuristic per-day
const retailPrice = listing?.retailListing?.price
const pricePerDay = retailPrice ? Math.max(35, Math.round(retailPrice / 100)) : estimatePricePerDay({ make, model, year })

return {
  id: vin || listing?.id || `${make || 'car'}-${model || 'model'}-${year || 'year'}`,
  brand: make || 'Unknown',
  model: model || 'Unknown',
  type: vehicle?.bodyStyle || vehicle?.bodyType || 'Sedan',
  year: Number.isFinite(year) ? year : undefined,
  seats: Number.isFinite(seats) ? seats : 5,
  transmission: transmission || 'Automatic',
  fuel: fuel || 'Unknown',
  pricePerDay,
  rating: 4.6,
  locations: ['Prishtina'],
  image: image || '/cars/placeholder.jpg',
  features: []
}
}

// Map Auto.dev VIN response to our app's car model shape
function mapAutoDevVinToCar(data){
// The shape below is defensive; adjust field paths once exact schema is confirmed
const make = data?.make || data?.manufacturer || data?.vehicle?.make
const model = data?.model || data?.vehicle?.model
const year = Number(data?.year || data?.vehicle?.year)
const image = data?.images?.[0]?.url || data?.photo || '/cars/placeholder.jpg'
const fuel = data?.fuel_type || data?.engine?.fuel || 'Unknown'
const transmission = data?.transmission || data?.drivetrain || 'Automatic'
const seats = Number(data?.seats || data?.vehicle?.seating_capacity || 5)

return {
  id: data?.vin || data?.id || `${make || 'car'}-${model || 'model'}-${year || 'year'}`,
  brand: make || 'Unknown',
  model: model || 'Unknown',
  type: data?.body_style || data?.body_type || 'Sedan',
  year: Number.isFinite(year) ? year : undefined,
  seats: Number.isFinite(seats) ? seats : 5,
  transmission,
  fuel,
  pricePerDay: estimatePricePerDay({ make, model, year }),
  rating: 4.7,
  locations: ['Prishtina'],
  image,
  features: []
}
}

function estimatePricePerDay({ make, model, year }){
const base = 45
const premiumMakes = ['Tesla','BMW','Audi','Mercedes-Benz','Porsche']
let price = base
if(premiumMakes.includes(String(make))) price += 30
if(Number(year) >= 2022) price += 15
return price
}