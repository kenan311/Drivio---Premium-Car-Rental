import React from 'react'

export default function About({ lang = 'en' }){
  const content = {
    en: {
      title: 'About Us',
      subtitle: 'Your trusted car rental partner in Kosovo',
      p1: 'We are a modern car rental service focused on comfort, safety, and flexibility. From compact city cars to luxury SUVs, our fleet is carefully selected to meet your needs.',
      p2: 'Book in minutes, pick up in your city, and enjoy transparent pricing with no hidden fees. Our support team is here to help 24/7.',
      stats: [
        { label: 'Cars Available', value: '200+' },
        { label: 'Cities Served', value: '10+' },
        { label: 'Customer Rating', value: '4.9/5' },
      ],
      cta: 'Browse Cars'
    },
    sq: {
      title: 'Rreth Nesh',
      subtitle: 'Partneri juaj i besueshëm për qira makinash në Kosovë',
      p1: 'Ne jemi një shërbim modern i qirasë së makinave, i fokusuar në komoditet, siguri dhe fleksibilitet. Nga makinat e qytetit deri te SUV luksozë, flota jonë është përzgjedhur me kujdes.',
      p2: 'Rezervo për pak minuta, merre në qytetin tënd dhe shijo çmime transparente pa kosto të fshehura. Ekipi ynë i mbështetjes është në dispozicion 24/7.',
      stats: [
        { label: 'Makina në dispozicion', value: '200+' },
        { label: 'Qytete të mbuluara', value: '10+' },
        { label: 'Vlerësimi i klientëve', value: '4.9/5' },
      ],
      cta: 'Shfleto Makinat'
    }
  }
  const t = content[lang] || content.en

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{t.title}</h1>
            <p className="text-lg text-gray-700 mb-6">{t.subtitle}</p>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>{t.p1}</p>
              <p>{t.p2}</p>
            </div>
            <button className="mt-8 px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800">{t.cta}</button>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border p-6">
            <div className="grid grid-cols-3 gap-6">
              {t.stats.map((s)=> (
                <div key={s.label} className="text-center">
                  <div className="text-3xl font-extrabold text-slate-900">{s.value}</div>
                  <div className="text-sm text-gray-600 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 h-48 rounded-xl bg-gradient-to-br from-slate-100 to-gray-50 grid place-items-center text-gray-500">
              <span className="text-sm">Our fleet image gallery coming soon</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}




