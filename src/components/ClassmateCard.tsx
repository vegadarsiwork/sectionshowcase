import React from 'react';

interface ClassmateProps {
  name: string;
  role: string;
  quote: string;
  imageUrl: string;
  className?: string;
}

export function ClassmateCard({ name, role, quote, imageUrl, className = '' }: ClassmateProps) {
  return (
    <div className={`group relative overflow-hidden rounded-lg bg-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${className}`}>
      <div className="aspect-square w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
        <h3 className="text-lg font-semibold text-white">{name}</h3>
        <p className="text-sm text-gray-200">{role}</p>
        <p className="mt-1 text-md text-gray-300 line-clamp-2">
          {quote}
        </p>
      </div>
    </div>
  );
}