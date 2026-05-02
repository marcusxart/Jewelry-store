import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-20 px-10 py-12 border-t border-gold/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link to="/" className="text-xl font-serif tracking-[0.2em] uppercase text-gold">
            Aurum <span className="text-charcoal">&</span> Stone
          </Link>
          <p className="text-[9px] uppercase tracking-[0.3em] opacity-40">© 2026 Aurum & Stone Ltd. All Rights Reserved.</p>
        </div>

        <div className="flex gap-10 text-[9px] uppercase tracking-[0.3em] font-bold opacity-40">
          <Link to="/faq" className="hover:text-gold transition-colors">Privacy Policy</Link>
          <Link to="/faq" className="hover:text-gold transition-colors">Terms of Sale</Link>
          <Link to="/about" className="hover:text-gold transition-colors">Sustainability</Link>
        </div>

        <div className="flex gap-6 opacity-40">
          <Link to="#" className="hover:text-gold transition-all hover:scale-110"><Instagram size={18} /></Link>
          <Link to="#" className="hover:text-gold transition-all hover:scale-110"><Facebook size={18} /></Link>
          <Link to="#" className="hover:text-gold transition-all hover:scale-110"><Twitter size={18} /></Link>
        </div>
      </div>
    </footer>
  );
}
