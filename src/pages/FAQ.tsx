import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { FAQS } from '../constants';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-20 px-6 max-w-3xl mx-auto"
    >
      <header className="mb-20 text-center">
        <p className="text-xs uppercase tracking-[0.3em] font-bold text-gold mb-3">Assistance</p>
        <h1 className="text-5xl md:text-6xl font-serif">Your Questions</h1>
      </header>

      <div className="space-y-4">
        {FAQS.map((faq) => (
          <div key={faq.id} className="border-b border-charcoal/10 pb-4">
            <button
              onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              className="w-full flex justify-between items-center py-6 text-left group"
            >
              <h3 className={`font-serif text-xl md:text-2xl transition-colors ${openId === faq.id ? 'text-gold' : 'text-charcoal group-hover:text-gold'}`}>
                {faq.question}
              </h3>
              <motion.div
                animate={{ rotate: openId === faq.id ? 180 : 0 }}
                className="text-gold"
              >
                <ChevronDown size={24} />
              </motion.div>
            </button>
            <AnimatePresence>
              {openId === faq.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-500 leading-relaxed pb-8 pr-12">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <div className="mt-20 p-12 bg-charcoal text-ivory rounded-3xl text-center">
        <h4 className="font-serif text-3xl mb-4 text-gold italic">Still have questions?</h4>
        <p className="text-gray-400 mb-8 max-w-sm mx-auto text-sm">Our concierge is available Tuesday through Saturday to assist you with any inquiries.</p>
        <a href="/contact" className="text-xs uppercase tracking-[0.2em] font-bold border border-gold px-8 py-3 rounded-full hover:bg-gold hover:text-charcoal transition-all">
          Contact Concierge
        </a>
      </div>
    </motion.div>
  );
}
