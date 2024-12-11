import React from 'react';

export function AboutSection() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About Our Class</h2>
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-6">
            Welcome to our amazing class! We are a diverse group of 75 talented individuals, each bringing unique perspectives and skills to our learning journey. Our class is more than just a collection of students - we're a community of future innovators, creators, and leaders.
          </p>
          <p className="text-gray-600 mb-6">
            Throughout our time together, we've collaborated on numerous projects, supported each other's growth, and created lasting memories. From intense study sessions to fun class activities, every moment has contributed to our collective growth.
          </p>
          <p className="text-gray-600">
            Our class values include mutual respect, continuous learning, and the pursuit of excellence. We believe in the power of collaboration and the importance of maintaining a positive learning environment where everyone can thrive.
          </p>
        </div>
      </div>
      <div className="text-center mt-12 text-gray-600 flex items-center justify-center gap-2">
        Made with <Heart className="text-red-500 animate-pulse" size={16} /> by Vega for S11
      </div>
    </div>
  );
}