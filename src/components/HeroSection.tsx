import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ChevronDown } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 gradient-bg"></div>
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <Sparkles className="w-20 h-20 text-white mb-8" />
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            Section 11 welcomes you!
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Explore our journey, memories, and achievements at NIAT. Together, we're building the future of technology.
          </p>
          <p className="text-sm text-white/80 italic bg-[#16213e] px-4 py-2 rounded-full mb-12">
            Note: Students shown with frog photos haven't submitted their pictures yet 🐸
          </p>
          
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="cursor-pointer"
            onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ChevronDown className="w-8 h-8 text-white/80" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}