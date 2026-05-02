import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import CustomDesign from './pages/CustomDesign';

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-ivory selection:bg-gold selection:text-ivory">
      <Navbar />
      <main className="pt-24 md:pt-32">
        <AnimatePresence mode="wait">
          <div key={location.pathname}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/store" element={<Store />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/custom" element={<CustomDesign />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
