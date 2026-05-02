import { motion } from 'motion/react';
import { Send, MapPin, Mail, Phone, Clock } from 'lucide-react';
import React, { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormState({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-20 px-6 max-w-7xl mx-auto"
    >
      <header className="mb-20 text-center">
        <p className="text-xs uppercase tracking-[0.3em] font-bold text-gold mb-3">Get in Touch</p>
        <h1 className="text-5xl md:text-6xl font-serif">Visit the Atelier</h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Contact Form */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-white p-10 md:p-14 shadow-sm border border-charcoal/5 rounded-2xl">
            <h3 className="font-serif text-3xl mb-2">Speak with our Designers</h3>
            <p className="text-gray-400 text-sm mb-10">Use the form below for general inquiries or to book a bespoke consultation.</p>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 opacity-50">Full Name</label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-transparent border-b border-charcoal/10 py-3 focus:border-gold outline-none transition-colors font-serif text-xl"
                  placeholder="e.g. Elena Rossi"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 opacity-50">Email Address</label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-transparent border-b border-charcoal/10 py-3 focus:border-gold outline-none transition-colors font-serif text-xl"
                  placeholder="hello@example.com"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 opacity-50">Your Message</label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-transparent border-b border-charcoal/10 py-3 focus:border-gold outline-none transition-colors font-serif text-xl resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                disabled={isSubmitting || isSent}
                className="w-full bg-charcoal text-ivory py-5 rounded-lg flex items-center justify-center gap-3 uppercase tracking-[0.2em] font-bold text-xs hover:bg-gold transition-all disabled:bg-gray-200 disabled:text-gray-400"
              >
                {isSubmitting ? 'Sending...' : isSent ? 'Message Sent' : (
                  <>Send Message <Send size={16} /></>
                )}
              </button>
            </form>
          </div>
        </motion.div>

        {/* Map & Info */}
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col gap-10"
        >
          {/* Map Placeholder */}
          <div className="relative aspect-video lg:aspect-square bg-gray-100 rounded-2xl overflow-hidden group">
            <div className="absolute inset-0 grayscale contrast-125 opacity-40 group-hover:opacity-100 transition-opacity duration-700 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000')] bg-cover" />
            <div className="absolute inset-0 bg-gold/10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-charcoal text-ivory p-6 rounded-2xl shadow-2xl text-center transform group-hover:scale-110 transition-transform duration-500">
                <MapPin size={32} className="text-gold mx-auto mb-3" />
                <p className="font-serif text-xl">24 Rue de la Paix</p>
                <p className="text-[10px] uppercase tracking-widest opacity-60">Paris, France</p>
              </div>
            </div>
            {/* Stylized Google Maps Overlay simulation */}
            <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded text-[8px] uppercase tracking-widest font-bold">
              Google Maps
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <h5 className="font-bold text-[10px] uppercase tracking-widest mb-1">Call Us</h5>
                <p className="font-serif text-lg text-charcoal">+33 1 23 45 67 89</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <h5 className="font-bold text-[10px] uppercase tracking-widest mb-1">Email</h5>
                <p className="font-serif text-lg text-charcoal">atelier@aurelia.co</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                <Clock size={20} />
              </div>
              <div>
                <h5 className="font-bold text-[10px] uppercase tracking-widest mb-1">Opening Hours</h5>
                <p className="font-serif text-lg text-charcoal">Tue - Sat: 10:00 - 19:00</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
