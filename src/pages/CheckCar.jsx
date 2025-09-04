import React, { useState } from 'react'
import CarCard from '../components/CarCard'
import { fetchCarByVin } from '../services/api'

export default function CheckCar({ lang = 'en' }){
  const content = {
    en: {
      title: "Check your car",
      placeholder: "Enter VIN (e.g., WP0AF2A99KS165242)",
      fetchVin: "Fetch VIN",
      loading: "Loading…",
      enterVin: "Please enter a VIN",
      fetchFailed: "Failed to fetch VIN"
    },
    sq: {
      title: "Kontrollo makinën tënde",
      placeholder: "Shkruani VIN (p.sh., WP0AF2A99KS165242)",
      fetchVin: "Merr VIN",
      loading: "Duke ngarkuar…",
      enterVin: "Ju lutemi shkruani një VIN",
      fetchFailed: "Dështoi marrja e VIN"
    }
  }
  const t = content[lang] || content.en
const [vin, setVin] = useState('')
const [loading, setLoading] = useState(false)
const [car, setCar] = useState(null)
const [error, setError] = useState('')

async function onSubmit(e){
e.preventDefault()
setError('')
if(!vin.trim()){
  setError(t.enterVin)
  return
}
try{
  setLoading(true)
  const result = await fetchCarByVin(vin.trim())
  setCar(result)
}catch(err){
  setCar(null)
  setError(err?.message || t.fetchFailed)
}finally{
  setLoading(false)
}
}

return (
  <div className="pt-20 bg-slate-50 min-h-screen">
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 font-display">{t.title}</h1>
      <form onSubmit={onSubmit} className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col md:flex-row gap-3">
        <input 
          value={vin}
          onChange={e=>setVin(e.target.value)}
          placeholder={t.placeholder}
          className="flex-1 p-3 rounded-lg border border-gray-200 focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-5 py-3 rounded-lg bg-slate-900 text-white disabled:opacity-60"
        >{loading ? t.loading : t.fetchVin}</button>
      </form>
      {error && <p className="text-red-600 mt-3">{error}</p>}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {car && (
          <CarCard car={car} onOpen={()=>{}} lang={lang} />
        )}
      </div>
    </main>
  </div>
)
}




