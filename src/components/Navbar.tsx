import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Collection', path: '/store' },
    { name: 'Custom Design', path: '/custom' },
    { name: 'Heritage', path: '/about' },
    { name: 'Inquiry', path: '/faq' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-ivory/80 backdrop-blur-md border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-10 h-24 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link to="/" className="text-2xl font-serif tracking-[0.2em] uppercase text-gold hover:opacity-80 transition-opacity">
            Aurum <span className="text-charcoal">&</span> Stone
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'text-gold opacity-100' : 'text-charcoal'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex w-10 h-10 rounded-full border border-gold/30 items-center justify-center text-[10px] uppercase font-bold text-gold cursor-pointer hover:bg-gold hover:text-ivory transition-colors">
            EN
          </div>
          <button className="w-10 h-10 rounded-full bg-charcoal flex items-center justify-center text-ivory hover:bg-gold transition-colors">
            <ShoppingBag size={18} />
          </button>
          
          {/* Mobile Toggle */}
          <button className="md:hidden text-charcoal ml-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-24 left-0 w-full bg-ivory border-b border-gold/10 px-10 py-12 flex flex-col gap-8 items-center shadow-xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-lg uppercase tracking-widest font-serif text-charcoal hover:text-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="text-lg uppercase tracking-widest font-serif text-charcoal hover:text-gold transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
