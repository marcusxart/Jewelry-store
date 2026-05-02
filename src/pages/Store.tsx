import { motion } from 'motion/react';
import { useState } from 'react';
import { PRODUCTS, COLLECTIONS } from '../constants';
import { Material, Category, StyleCollection } from '../types';
import ProductCard from '../components/ProductCard';
import { Filter, X, Eye, Sparkles } from 'lucide-react';

export default function Store() {
  const [activeMaterial, setActiveMaterial] = useState<Material | 'All'>('All');
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const [activeCollection, setActiveCollection] = useState<StyleCollection | 'All'>('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const materials = ['All', ...Object.values(Material)];
  const categories = ['All', ...Object.values(Category)];
  const collections = ['All', ...Object.values(StyleCollection)];

  const filteredProducts = PRODUCTS.filter((p) => {
    const materialMatch = activeMaterial === 'All' || p.material === activeMaterial;
    const categoryMatch = activeCategory === 'All' || p.category === activeCategory;
    const collectionMatch = activeCollection === 'All' || p.collection === activeCollection;
    return materialMatch && categoryMatch && collectionMatch;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-12 px-6 max-w-7xl mx-auto"
    >
      <header className="mb-20">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-xl">
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold mb-4">Curation</p>
            <h1 className="text-5xl md:text-7xl font-serif">The Collection</h1>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => setIsFilterOpen(true)}
              className="flex items-center gap-3 text-[10px] uppercase tracking-widest font-bold border border-gold/20 px-8 py-3 rounded-sm hover:bg-gold hover:text-ivory transition-all"
            >
              <Filter size={14} /> Refine View
            </button>
          </div>
        </div>

        {/* Collections Scroller */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {COLLECTIONS.map((col) => (
            <motion.div
              key={col.id}
              whileHover={{ y: -5 }}
              onClick={() => setActiveCollection(col.id)}
              className={`bento-card relative group cursor-pointer aspect-[16/10] flex flex-col justify-end p-8 transition-all ${activeCollection === col.id ? 'ring-2 ring-gold scale-[1.02]' : ''}`}
            >
              <img src={col.image} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
              <div className="relative z-10">
                <h3 className="font-serif text-2xl text-ivory mb-2">{col.name}</h3>
                <p className="text-[10px] text-ivory/60 leading-relaxed uppercase tracking-wider line-clamp-2">{col.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Virtual Try-On Awareness */}
      <section className="bento-card-muted p-16 relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center text-gold">
              <Eye size={20} />
            </div>
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold">Visual Innovation</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Virtual Atelier: <br /><span className="italic">Proposing the AR Experience.</span></h2>
          <div className="space-y-6 text-gray-500 text-lg font-serif italic mb-10">
            <p>
              We are researching the integration of advanced Augmented Reality (AR) to bring our boutique directly to your sanctuary. 
            </p>
            <p>
              Our vision includes high-fidelity 3D modeling that allows users to "wear" necklaces and rings using their device's camera, ensuring perfect scale and reflection of 18k gold against your unique skin tone.
            </p>
          </div>
          <div className="flex flex-wrap gap-10">
            <div className="flex items-center gap-3">
              <Sparkles size={16} className="text-gold" />
              <span className="text-[10px] uppercase tracking-widest font-bold">Real-time Ray Tracing</span>
            </div>
            <div className="flex items-center gap-3">
              <Sparkles size={16} className="text-gold" />
              <span className="text-[10px] uppercase tracking-widest font-bold">Precise Ring Sizing</span>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/3 bg-gold/5 blur-[120px] pointer-events-none" />
      </section>

      {/* Mobile Filter Modal */}
      {isFilterOpen && (
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           className="fixed inset-0 z-[100] bg-charcoal/90 backdrop-blur-md flex items-center justify-center p-6"
        >
          <div className="bg-ivory w-full max-w-sm rounded-2xl p-10 relative">
            <button
              onClick={() => setIsFilterOpen(false)}
              className="absolute top-6 right-6 text-charcoal hover:text-gold"
            >
              <X size={20} />
            </button>
            <h3 className="font-serif text-2xl mb-10 text-center">Refine Selection</h3>
            
            <div className="space-y-10">
              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-bold mb-4 opacity-50">Collection</h4>
                <div className="flex flex-wrap gap-2">
                  {collections.map((c) => (
                    <button
                      key={c}
                      onClick={() => setActiveCollection(c as any)}
                      className={`px-4 py-2 text-[10px] uppercase tracking-widest border transition-all ${activeCollection === c ? 'bg-gold border-gold text-ivory' : 'border-gold/20 text-charcoal'}`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-bold mb-4 opacity-50">Material</h4>
                <div className="flex flex-wrap gap-2">
                  {materials.map((m) => (
                    <button
                      key={m}
                      onClick={() => setActiveMaterial(m as any)}
                      className={`px-4 py-2 text-[10px] uppercase tracking-widest border transition-all ${activeMaterial === m ? 'bg-gold border-gold text-ivory' : 'border-gold/20 text-charcoal'}`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setIsFilterOpen(false)}
                className="w-full bg-charcoal text-ivory py-4 text-xs uppercase tracking-widest font-bold rounded-lg hover:bg-gold transition-colors"
              >
                Show Results
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
