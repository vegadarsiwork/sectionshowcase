import React from 'react';
import { motion } from 'framer-motion';
import { ClassmateCard } from './ClassmateCard';
import { classmates } from '../../data/classmates';

export function ClassGrid() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  return (
    <>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text mb-4">
          Welcome to Section 11!
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Meet the amazing students of Section 11 - a vibrant community of future tech leaders. 
          Together, we're learning, growing, and creating memories that will last a lifetime.
        </p>
        <p className="text-sm text-gray-500 mt-4 italic">
          Note: The frog photos you see are placeholders for students who haven't uploaded their photos yet 🐸
        </p>
      </div>
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-1"
      >
        {classmates.map((classmate, index) => (
          <ClassmateCard
            key={index}
            {...classmate}
            className={`
              ${index % 12 === 0 ? 'col-span-2' : ''}
              ${index % 15 === 7 ? 'md:col-span-2' : ''}
            `}
          />
        ))}
      </motion.div>
    </>
  );
}