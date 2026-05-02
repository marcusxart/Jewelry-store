import { motion } from 'motion/react';
import { TEAM } from '../constants';

export default function About() {
  const owner = TEAM.find(p => p.id === 'owner');
  const otherTeam = TEAM.filter(p => p.id !== 'owner');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Narrative Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-xs uppercase tracking-[0.3em] font-bold text-gold mb-6">Our Legacy</p>
            <h1 className="text-5xl md:text-7xl font-serif mb-10 leading-tight">The Art of the <br /><span className="italic">Imperfect Gem.</span></h1>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                Founded in 2004 by Aurelia Vane, our boutique began with a simple philosophy: jewelry should be as unique as the person wearing it. We don't believe in mass production—we believe in mass distinction.
              </p>
              <p>
                Located in the heart of Paris, our atelier serves as a sanctuary for collectors of rare materials and lovers of sophisticated, understated design. Every piece we create is a collaborative journey between the client, the artisan, and the earth itself.
              </p>
            </div>
          </motion.div>
          <div className="relative">
            <div className="rounded-[4rem] overflow-hidden aspect-[4/5] shadow-2xl scale-95 hover:scale-100 transition-transform duration-700">
              <img
                src="https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&q=80&w=1000"
                alt="Jewelry Atelier"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Abstract Graphic Element */}
            <div className="absolute -z-10 -top-10 -right-10 w-64 h-64 border border-gold opacity-20 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Meet the Owner */}
      <section className="py-32 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16 md:gap-32">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 aspect-square md:aspect-[3/4] overflow-hidden rounded-full md:rounded-t-full"
            >
              <img
                src={owner?.image}
                alt={owner?.name}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <h2 className="text-gold font-serif text-4xl md:text-5xl mb-4 italic">{owner?.name}</h2>
              <p className="text-xs uppercase tracking-[0.4em] font-bold mb-8 opacity-60">{owner?.role}</p>
              <p className="text-xl leading-relaxed text-gray-300 italic mb-8 font-serif">
                "{owner?.bio}"
              </p>
              <div className="w-20 h-[1px] bg-gold" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Team Grid */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-gold mb-3">The Artisans</p>
          <h2 className="text-4xl md:text-5xl font-serif">Behind the Craft</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {otherTeam.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="aspect-[4/5] overflow-hidden bg-gray-100 mb-8 rounded-2xl relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="font-serif text-2xl mb-1">{member.name}</h3>
              <p className="text-[10px] uppercase tracking-widest text-gold font-bold mb-4">{member.role}</p>
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto italic">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
