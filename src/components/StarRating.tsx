import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export default function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={12}
          className={`${i < rating ? 'text-gold fill-gold' : 'text-gray-300'}`}
        />
      ))}
    </div>
  );
}
