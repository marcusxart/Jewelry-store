import { motion } from 'motion/react';
import React, { useState } from 'react';
import { Send, Upload, Sparkles, Scale, DollarSign } from 'lucide-react';

export default function CustomDesign() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    material: 'Gold',
    style: '',
    budget: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormState({ name: '', email: '', phone: '', material: 'Gold', style: '', budget: '' });
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-10 py-20"
    >
      <div className="text-center mb-20">
        <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold mb-4">Bespoke Atelier</p>
        <h1 className="text-5xl md:text-7xl font-serif mb-6">Your Vision, <span className="italic">Our Craft.</span></h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          The journey of a custom piece is a collaborative art form. Share your inspiration with our master designers, and let us translate your story into an eternal heirloom.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="bento-card p-12"
        >
          <h2 className="font-serif text-3xl mb-10">Bespoke Inquiry</h2>
          
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-widest font-bold opacity-40">Client Name</label>
                <input 
                  type="text" 
                  required 
                  className="w-full bg-soft-ivory border-b border-gold/20 py-4 px-2 outline-none focus:border-gold transition-colors font-serif text-lg"
                  value={formState.name}
                  onChange={e => setFormState({...formState, name: e.target.value})}
                  placeholder="e.g. Julianne Vane"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-widest font-bold opacity-40">Phone Number</label>
                <input 
                  type="tel" 
                  required 
                  className="w-full bg-soft-ivory border-b border-gold/20 py-4 px-2 outline-none focus:border-gold transition-colors font-serif text-lg"
                  value={formState.phone}
                  onChange={e => setFormState({...formState, phone: e.target.value})}
                  placeholder="+33 1 00 00 00"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[9px] uppercase tracking-widest font-bold opacity-40">Email Address</label>
              <input 
                type="email" 
                required 
                className="w-full bg-soft-ivory border-b border-gold/20 py-4 px-2 outline-none focus:border-gold transition-colors font-serif text-lg"
                value={formState.email}
                onChange={e => setFormState({...formState, email: e.target.value})}
                placeholder="studio@bespoke.co"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-widest font-bold opacity-40 flex items-center gap-2">
                  <Scale size={10} /> Preferred Material
                </label>
                <select 
                  className="w-full bg-soft-ivory border-b border-gold/20 py-4 px-2 outline-none focus:border-gold transition-colors font-serif text-lg appearance-none cursor-pointer"
                  value={formState.material}
                  onChange={e => setFormState({...formState, material: e.target.value})}
                >
                  <option>18k Yellow Gold</option>
                  <option>18k Rose Gold</option>
                  <option>Pure Platinum</option>
                  <option>Sterling Silver</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-widest font-bold opacity-40 flex items-center gap-2">
                  <DollarSign size={10} /> Estimated Budget
                </label>
                <input 
                  type="text" 
                  className="w-full bg-soft-ivory border-b border-gold/20 py-4 px-2 outline-none focus:border-gold transition-colors font-serif text-lg"
                  value={formState.budget}
                  onChange={e => setFormState({...formState, budget: e.target.value})}
                  placeholder="$5,000 - $10,000"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[9px] uppercase tracking-widest font-bold opacity-40 flex items-center gap-2">
                <Sparkles size={10} /> Design Inspiration
              </label>
              <textarea 
                rows={4}
                className="w-full bg-soft-ivory border-b border-gold/20 py-4 px-2 outline-none focus:border-gold transition-colors font-serif text-lg resize-none"
                value={formState.style}
                onChange={e => setFormState({...formState, style: e.target.value})}
                placeholder="Tell us about the piece you imagine..."
              />
            </div>

            <div className="border-2 border-dashed border-gold/20 rounded-xl p-10 text-center hover:bg-gold/5 transition-colors cursor-pointer group">
              <Upload className="mx-auto mb-4 text-gold/40 group-hover:text-gold transition-colors" size={32} />
              <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 group-hover:text-charcoal">Upload Reference Images</p>
              <p className="text-[9px] opacity-40 mt-2">PDF, JPG, or PNG (Max 10MB)</p>
            </div>

            <button 
              disabled={isSubmitting || isSent}
              className="w-full bg-charcoal text-ivory py-6 uppercase tracking-[0.3em] font-bold text-xs hover:bg-gold transition-all duration-500 rounded-sm disabled:bg-gray-200 disabled:text-gray-400 flex items-center justify-center gap-4"
            >
              {isSubmitting ? 'Consulting Artisans...' : isSent ? 'Request Received' : (
                <>Submit Design Brief <Send size={16} /></>
              )}
            </button>
          </form>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col gap-8"
        >
          <div className="bento-card-muted p-12 flex-grow">
            <h3 className="font-serif text-3xl mb-8">Process Timeline</h3>
            <div className="space-y-10">
              {[
                { step: "01", title: "Creative Consultation", desc: "A one-on-one session with our master designer to define the soul of the piece." },
                { step: "02", title: "Stone Selection", desc: "Our gemologists source the finest ethically-sourced diamonds or colored gems for your approval." },
                { step: "03", title: "Digital Rendering", desc: "3D visualization of your design, allowing for precise refinements before forging begins." },
                { step: "04", title: "Hand-Forging", desc: "Weeks of meticulous craftsmanship in our Paris atelier by our master goldsmiths." },
              ].map(item => (
                <div key={item.step} className="flex gap-6">
                  <span className="font-serif text-3xl text-gold/30">{item.step}</span>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest mb-2">{item.title}</h4>
                    <p className="text-[11px] leading-relaxed opacity-60 italic font-serif">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bento-card p-10 bg-charcoal text-ivory flex items-center gap-8">
            <div className="w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center shrink-0">
              <Sparkles size={24} className="text-gold" />
            </div>
            <div>
              <p className="text-xs font-serif italic mb-1">"Bespoke is not just about the final object; it is about the story we tell through the metal and the stone."</p>
              <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-gold opacity-80">— Aurelia Vane</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
