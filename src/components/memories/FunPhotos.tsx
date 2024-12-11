import React from 'react';
import { motion } from 'framer-motion';
import { funPhotos } from '../../data/funPhotos';

export function FunPhotos() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
      <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
        Fun Moments
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {funPhotos.map((photo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-lg overflow-hidden group"
          >
            <img
              src={photo.imageUrl}
              alt="Fun moment"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}