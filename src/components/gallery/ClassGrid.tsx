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
  );
}