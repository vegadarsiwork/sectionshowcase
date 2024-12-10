import React from 'react';
import { ClassmateCard } from './ClassmateCard';
import { classmates } from '../../data/classmates';

export function ClassGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
      {classmates.map((classmate, index) => (
        <ClassmateCard
          key={index}
          {...classmate}
          className={`
            ${index % 16 === 0 ? 'sm:col-span-2 sm:row-span-2' : ''}
            ${index % 8 === 4 ? 'md:col-span-2' : ''}
          `}
        />
      ))}
    </div>
  );
}