import React from 'react';

export function AboutSection() {
  return (
    <div className="p-6 bg-white">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">About Our Class</h2>
      <div className="prose max-w-none">
        <p className="text-gray-600 mb-4">
          Welcome to our amazing class! We are a diverse group of 75 talented individuals, each bringing unique perspectives and skills to our learning journey. Our class is more than just a collection of students - we're a community of future innovators, creators, and leaders.
        </p>
        <p className="text-gray-600 mb-4">
          Throughout our time together, we've collaborated on numerous projects, supported each other's growth, and created lasting memories. From intense study sessions to fun class activities, every moment has contributed to our collective growth.
        </p>
        <p className="text-gray-600 mb-4">
          Our class values include mutual respect, continuous learning, and the pursuit of excellence. We believe in the power of collaboration and the importance of maintaining a positive learning environment where everyone can thrive.
        </p>
        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Class Achievements</h3>
        <ul className="list-disc pl-6 text-gray-600">
          <li>Successfully completed 12 group projects</li>
          <li>Organized 5 community service events</li>
          <li>Won the inter-class academic competition</li>
          <li>Achieved 95% attendance rate throughout the year</li>
        </ul>
      </div>
    </div>
  );
}