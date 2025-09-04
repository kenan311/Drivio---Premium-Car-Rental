import React, { useState } from 'react'

export default function Contact({ lang = 'en' }){
  const content = {
    en: {
      title: "Contact Us",
      subtitle: "Have questions or need assistance? We're here to help. Send us a message and we'll get back to you as soon as possible.",
      getInTouch: "Get in Touch",
      email: "Email",
      phone: "Phone",
      address: "Address",
      messageSent: "Message Sent!",
      thanks: "Thanks",
      messageReceived: "your message has been received! We'll get back to you soon.",
      fullName: "Full Name",
      emailAddress: "Email Address",
      message: "Message",
      namePlaceholder: "Enter your full name",
      emailPlaceholder: "you@example.com",
      messagePlaceholder: "How can we help you?",
      sendMessage: "Send Message",
      fillAllFields: "Please fill in all fields.",
      validEmail: "Please enter a valid email address."
    },
    sq: {
      title: "Na Kontaktoni",
      subtitle: "Keni pyetje ose keni nevojë për ndihmë? Ne jemi këtu për t'ju ndihmuar. Dërgoni një mesazh dhe do t'ju përgjigjemi sa më shpejt të jetë e mundur.",
      getInTouch: "Lidhuni me Ne",
      email: "Email",
      phone: "Telefon",
      address: "Adresa",
      messageSent: "Mesazhi u Dërgua!",
      thanks: "Faleminderit",
      messageReceived: "mesazhi juaj u mor! Do t'ju përgjigjemi së shpejti.",
      fullName: "Emri i Plotë",
      emailAddress: "Adresa e Email-it",
      message: "Mesazhi",
      namePlaceholder: "Shkruani emrin tuaj të plotë",
      emailPlaceholder: "ju@shembull.com",
      messagePlaceholder: "Si mund t'ju ndihmojmë?",
      sendMessage: "Dërgo Mesazhin",
      fillAllFields: "Ju lutemi plotësoni të gjitha fushat.",
      validEmail: "Ju lutemi shkruani një adresë email të vlefshme."
    }
  }
  const t = content[lang] || content.en
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [message, setMessage] = useState('')
const [submitted, setSubmitted] = useState(false)

function handleSubmit(e){
e.preventDefault()
if(!name.trim() || !email.trim() || !message.trim()){
alert(t.fillAllFields)
return
}
if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
alert(t.validEmail)
return
}
setSubmitted(true)
}

return (
<div className="pt-20 bg-slate-50 min-h-screen">
<section className="max-w-4xl mx-auto px-4 py-16">
<div className="text-center mb-16">
<h1 className="text-4xl font-bold text-gray-900 mb-6 font-display">{t.title}</h1>
<p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.subtitle}</p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
<div>
<h2 className="text-2xl font-bold text-gray-900 mb-6">{t.getInTouch}</h2>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
<svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg>
</div>
<div>
<h3 className="font-semibold text-gray-900 mb-1">{t.email}</h3>
<p className="text-gray-600">info@carrent.com</p>
</div>
</div>

<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
<svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
</svg>
</div>
<div>
<h3 className="font-semibold text-gray-900 mb-1">{t.phone}</h3>
<p className="text-gray-600">+383 44 123 456</p>
</div>
</div>

<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
<svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
</div>
<div>
<h3 className="font-semibold text-gray-900 mb-1">{t.address}</h3>
<p className="text-gray-600">Prishtina, Kosovo</p>
</div>
</div>
</div>
</div>

<div>
{submitted ? (
<div className="p-8 rounded-2xl bg-green-50 border border-green-200 text-center">
<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
<svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
</svg>
</div>
<h3 className="text-xl font-semibold text-green-800 mb-2">{t.messageSent}</h3>
<p className="text-green-700">{t.thanks} {name}, {t.messageReceived}</p>
</div>
) : (
<form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">{t.fullName}</label>
<input 
  value={name} 
  onChange={e=>setName(e.target.value)} 
  className="w-full p-4 rounded-xl border border-gray-200 focus:border-slate-900 focus:ring-2 focus:ring-slate-200 transition-all duration-300" 
  placeholder={t.namePlaceholder} 
/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">{t.emailAddress}</label>
<input 
  value={email} 
  onChange={e=>setEmail(e.target.value)} 
  className="w-full p-4 rounded-xl border border-gray-200 focus:border-slate-900 focus:ring-2 focus:ring-slate-200 transition-all duration-300" 
  placeholder={t.emailPlaceholder} 
/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">{t.message}</label>
<textarea 
  value={message} 
  onChange={e=>setMessage(e.target.value)} 
  className="w-full p-4 rounded-xl border border-gray-200 focus:border-slate-900 focus:ring-2 focus:ring-slate-200 transition-all duration-300 h-32 resize-none" 
  placeholder={t.messagePlaceholder} 
/>
</div>
<div className="flex justify-end">
<button 
  type="submit" 
  className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
>
  {t.sendMessage}
</button>
</div>
</form>
)}
</div>
</div>
</section>
</div>
)
}
