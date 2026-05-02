import { motion } from 'motion/react';
import { Product } from '../types';
import { Plus } from 'lucide-react';

export default function ProductCard({ product }: { product: Product, key?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bento-card h-full flex flex-col p-6 hover:shadow-2xl transition-all duration-500"
    >
      <div className="relative overflow-hidden bg-soft-ivory mb-6 aspect-square rounded-lg border border-gold/5">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-charcoal/90 backdrop-blur-sm flex justify-center items-center">
          <button className="text-ivory text-[9px] uppercase tracking-[0.2em] font-bold flex items-center gap-2 hover:text-gold transition-colors">
            <Plus size={14} /> Add to Collection
          </button>
        </div>
      </div>
      <div className="flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="font-serif text-xl leading-tight group-hover:text-gold transition-colors">{product.name}</h3>
          <p className="font-serif text-gold text-lg">${product.price.toLocaleString()}</p>
        </div>
        <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-medium mt-auto border-t border-gold/10 pt-4">
          {product.material} • {product.category}
        </p>
      </div>
    </motion.div>
  );
}
