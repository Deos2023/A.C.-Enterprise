import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Homepage from './components/home/HomePage'
import MakeupPage from './components/makeup/Makeup'
import AboutUs from './components/about-us/About'
import ContactUs from './components/contactus/Contact'
import Footer from './components/footer/Footer'
import PerfumeSection from './components/perfume-section/Perfume'
import HairAccessoriesSection from './components/hair-accesories/Hair'


function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/makeup" element={<MakeupPage />} />
        <Route path='/perfumes' element={<PerfumeSection />} />
        <Route path='/hair-accessories' element={<HairAccessoriesSection />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/contact' element={<ContactUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App
