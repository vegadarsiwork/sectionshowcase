import React from 'react';
import { memories } from '../../data/memories';
import { FunPhotos } from './FunPhotos';

export function MemoriesMarquee() {
  return (
    <>
      <div className="overflow-hidden">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Memories</h2>
        <div className="relative">
          <div className="flex gap-4 animate-scroll">
            {[...memories, ...memories].map((memory, index) => (
              <div
                key={index}
                className="flex-none w-[300px] md:w-[400px] lg:w-[500px] relative rounded-lg overflow-hidden shadow-xl"
              >
                <div className="aspect-video">
                  <img
                    src={memory.imageUrl}
                    alt={memory.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-semibold text-white">{memory.title}</h3>
                  <p className="text-white/80 text-sm mt-2">{memory.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FunPhotos />
    </>
  );
}