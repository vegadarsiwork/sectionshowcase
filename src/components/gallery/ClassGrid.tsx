import React from 'react';
import { ClassmateCard } from './ClassmateCard';
import { classmates } from '../../data/classmates';

export function ClassGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 auto-rows-min">
      {classmates.map((classmate, index) => (
        <ClassmateCard
          key={index}
          {...classmate}
          className={`
            ${index % 20 === 0 ? 'col-span-2 row-span-2' : ''}
            ${index % 15 === 7 ? 'col-span-2' : ''}
            ${index % 12 === 4 ? 'row-span-2' : ''}
          `}
        />
      ))}
    </div>
  );
}