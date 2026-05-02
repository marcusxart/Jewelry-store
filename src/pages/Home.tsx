import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, Plus, MapPin, Mail, Phone, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS, TESTIMONIALS, TEAM, FAQS } from '../constants';
import StarRating from '../components/StarRating';

export default function Home() {
  const signatureProduct = PRODUCTS[0];
  const bestSellers = PRODUCTS.slice(1, 3);
  const mainTestimonial = TESTIMONIALS[0];
  const mainMaker = TEAM.find(t => t.role === 'Master Goldsmith') || TEAM[1];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-10 py-12"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-6 gap-6 h-auto md:h-[calc(100vh-14rem)] min-h-[800px]">
        
        {/* Cell 1: Hero Piece (7x4) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="md:col-span-7 md:row-span-4 bento-card-muted relative group overflow-hidden flex flex-col p-10"
        >
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-4 group-hover:tracking-wide transition-all duration-700">
              The Ethereal <br /><span className="italic">Lumière Ring</span>
            </h1>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">Signature Collection 2026</p>
          </div>
          
          <div className="mt-auto relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 sm:gap-0 pt-10">
            <Link 
              to="/store"
              className="px-10 py-4 bg-charcoal text-ivory text-[10px] uppercase tracking-widest font-bold hover:bg-gold transition-colors duration-300 rounded-sm"
            >
              Discover Piece
            </Link>
            <div className="text-left sm:text-right">
              <p className="font-serif text-3xl text-gold">${signatureProduct.price.toLocaleString()}</p>
              <p className="text-[9px] uppercase tracking-widest opacity-50 mt-1 max-w-[200px] leading-relaxed">
                18k Gold & Ethically Sourced Diamond
              </p>
            </div>
          </div>

          {/* Abstract background element */}
          <div className="absolute -right-20 -top-10 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-gold/10 to-transparent blur-3xl group-hover:from-gold/20 transition-all duration-700" />
          <img 
            src={signatureProduct.image} 
            alt="Hero Piece" 
            className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-2/3 object-contain mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Cell 2: Store Preview (5x3) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="md:col-span-5 md:row-span-3 bento-card p-8 flex flex-col"
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-serif text-2xl">Curation</h2>
            <div className="flex gap-2">
              {['Gold', 'Silver'].map(filter => (
                <span key={filter} className="px-3 py-1 bg-soft-ivory rounded text-[9px] uppercase tracking-tighter border border-gold/20 text-gold font-bold">
                  {filter}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 flex-grow">
            {bestSellers.map(product => (
              <Link to="/store" key={product.id} className="group cursor-pointer">
                <div className="aspect-square bg-soft-ivory border border-stone-muted rounded-lg p-3 flex flex-col justify-between hover:border-gold/50 transition-colors">
                  <div className="w-full h-2/3 overflow-hidden rounded">
                    <img src={product.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                  </div>
                  <div className="mt-3">
                    <p className="text-[10px] font-bold uppercase truncate">{product.name}</p>
                    <p className="text-gold font-serif text-sm">${product.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <Link to="/store" className="mt-8 text-[10px] uppercase tracking-widest font-bold text-gray-400 hover:text-gold flex items-center gap-2 transition-colors">
            View All Collection <ChevronRight size={14} />
          </Link>
        </motion.div>

        {/* Cell 3: Testimonial (3x2) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="md:col-span-3 md:row-span-2 bg-charcoal text-ivory rounded-xl p-8 flex flex-col justify-between"
        >
          <div>
            <StarRating rating={mainTestimonial.rating} />
            <p className="italic font-serif text-lg leading-relaxed mt-6">
              "{mainTestimonial.content}"
            </p>
          </div>
          <div className="mt-6 border-t border-white/10 pt-4">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gold">— {mainTestimonial.name}, {mainTestimonial.location}</p>
          </div>
        </motion.div>

        {/* Cell 4: About/The Makers (4x2) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="md:col-span-4 md:row-span-2 bento-card-muted p-8 flex flex-col justify-between"
        >
          <div>
            <h3 className="font-serif text-xl mb-6">Our Makers</h3>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl overflow-hidden border border-gold shadow-lg">
                <img src={mainMaker.image} alt={mainMaker.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest">{mainMaker.name}</p>
                <p className="text-[9px] uppercase tracking-wider text-gold font-medium">{mainMaker.role}</p>
              </div>
            </div>
          </div>
          <p className="text-[11px] leading-relaxed opacity-70 mt-4 italic font-serif">
            Every piece is hand-wrought in our Paris studio, honoring four generations of artisanal heritage.
          </p>
        </motion.div>

        {/* Cell 5: FAQ Preview (2x3) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="md:col-span-2 md:row-span-3 bento-card p-6 flex flex-col"
        >
          <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-gold mb-8">Service</h3>
          <div className="space-y-6 flex-grow">
            {FAQS.slice(0, 4).map(faq => (
              <Link to="/faq" key={faq.id} className="group block border-b border-gold/10 pb-2 flex justify-between items-center">
                <span className="text-[10px] font-serif uppercase tracking-tight group-hover:text-gold transition-colors">{faq.question.split(' ')[0]}</span>
                <span className="text-gold text-[10px] group-hover:scale-125 transition-transform"><Plus size={12} /></span>
              </Link>
            ))}
          </div>
          <Link to="/faq" className="mt-8 text-gold flex items-center justify-center">
            <ChevronDown size={14} className="animate-bounce" />
          </Link>
        </motion.div>

        {/* Cell 6: Contact & Map (3x3) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="md:col-span-3 md:row-span-3 bento-card relative overflow-hidden flex flex-col"
        >
          <div className="p-8 border-b border-gold/10 bg-white relative z-10">
            <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-3">Visit Us</h3>
            <p className="text-[11px] font-serif leading-relaxed opacity-80">24 Rue de la Paix,<br />Paris, 75002</p>
            <div className="mt-6 flex flex-col gap-2">
              <a href="tel:+33123456789" className="text-[9px] uppercase tracking-widest font-bold flex items-center gap-2 hover:text-gold transition-colors">
                <Phone size={10} /> +33 1 23 45 67 89
              </a>
              <a href="mailto:atelier@aurum.stone" className="text-[9px] uppercase tracking-widest font-bold flex items-center gap-2 hover:text-gold transition-colors">
                <Mail size={10} /> atelier@aurum.stone
              </a>
            </div>
          </div>
          <div className="flex-grow bg-stone-muted relative group">
            {/* Map Placeholder */}
            <div className="absolute inset-0 opacity-40 group-hover:opacity-80 transition-opacity duration-700 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600')] bg-cover grayscale" />
            <div className="absolute inset-0 bg-gold/10 mix-blend-overlay" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-4 h-4 bg-charcoal rotate-45 border border-ivory shadow-lg flex items-center justify-center">
                <div className="w-1 h-1 bg-gold rounded-full" />
              </div>
            </div>
            <Link to="/contact" className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-ivory/90 backdrop-blur-sm border border-gold/30 px-6 py-2 text-[8px] uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Get Directions
            </Link>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}
