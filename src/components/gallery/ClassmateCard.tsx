import React from 'react';
import { motion } from 'framer-motion';

interface ClassmateProps {
  name: string;
  role: string;
  quote: string;
  imageUrl: string;
  className?: string;
}

export function ClassmateCard({ name, role, quote, imageUrl, className = '' }: ClassmateProps) {
  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <motion.div 
      variants={item}
      className={`group relative overflow-hidden rounded-sm bg-white transition-all duration-300 hover:z-10 hover:scale-[1.02] hover:shadow-xl ${className}`}
    >
      <div className="aspect-square w-full h-full overflow-hidden">
        <img
          src={imageUrl || 'https://source.unsplash.com/random/400x400?portrait,student'}
          alt={name || 'Student'}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
        <h3 className="text-sm font-semibold text-white">{name || 'Student Name'}</h3>
        <p className="text-xs text-gray-200">{role || 'Role'}</p>
        <p className="mt-1 text-xs text-gray-300 line-clamp-2">
          {quote || 'Student quote'}
        </p>
      </div>
    </motion.div>
  );
}