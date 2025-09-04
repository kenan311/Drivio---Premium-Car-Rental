import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CheckCar from "./pages/CheckCar";
import { useEffect, useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [lang, setLang] = useState('en'); // 'en' | 'sq'

  useEffect(()=>{
    const k = import.meta?.env?.VITE_AUTO_DEV_API_KEY
    if(k){
      console.log('VITE_AUTO_DEV_API_KEY is set:', k.slice(0,6) + '…' + k.slice(-4))
    }else{
      console.warn('VITE_AUTO_DEV_API_KEY is MISSING')
    }
  },[])

  const renderPage = () => {
    switch(currentPage) {
      case 'cars':
        return <Cars lang={lang} />;
      case 'checkcar':
        return <CheckCar lang={lang} />;
      case 'about':
        return <About lang={lang} />;
      case 'contact':
        return <Contact lang={lang} />;
      default:
        return <Home onNavigate={setCurrentPage} lang={lang} />;
    }
  };

  return (
    <div className="font-sans min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} lang={lang} setLang={setLang} />
      <div className="flex-1">
        {currentPage === 'home' && <Hero lang={lang} onNavigate={setCurrentPage} />}
        {renderPage()}
      </div>
      <Footer lang={lang} />
    </div>
  );
}

export default App;
