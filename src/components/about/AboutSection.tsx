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
          <p className="text-gray-600 mb-6">
            Our class values include mutual respect, continuous learning, and the pursuit of excellence. We believe in the power of collaboration and the importance of maintaining a positive learning environment where everyone can thrive.
          </p>
          <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-6">Class Achievements</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0">
            <li className="bg-indigo-50 p-4 rounded-lg">
              <span className="font-semibold text-indigo-600">12</span>
              <span className="text-gray-700"> Group Projects Completed</span>
            </li>
            <li className="bg-indigo-50 p-4 rounded-lg">
              <span className="font-semibold text-indigo-600">5</span>
              <span className="text-gray-700"> Community Service Events</span>
            </li>
            <li className="bg-indigo-50 p-4 rounded-lg">
              <span className="font-semibold text-indigo-600">1st Place</span>
              <span className="text-gray-700"> Inter-class Competition</span>
            </li>
            <li className="bg-indigo-50 p-4 rounded-lg">
              <span className="font-semibold text-indigo-600">95%</span>
              <span className="text-gray-700"> Average Attendance Rate</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}