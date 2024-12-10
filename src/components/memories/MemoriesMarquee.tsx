import React from 'react';
import { memories } from '../../data/memories';

export function MemoriesMarquee() {
  return (
    <div className="overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8">Our Memories</h2>
      <div className="relative">
        <div className="flex gap-4 animate-scroll">
          {[...memories, ...memories].map((memory, index) => (
            <div
              key={index}
              className="flex-none w-[300px] md:w-[400px] lg:w-[500px] relative rounded-lg overflow-hidden"
            >
              <div className="aspect-video">
                <img
                  src={memory.imageUrl}
                  alt={memory.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-white font-semibold">{memory.title}</h3>
                <p className="text-gray-200 text-sm">{memory.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}