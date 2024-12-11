import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Heart } from 'lucide-react';

export function MentorsSection() {
  const mentors = [
    {
      name: "Sravani Maam",
      role: "Mentor",
      image: "https://res.cloudinary.com/dhyhfalvs/image/upload/v1733836004/Sravani_maam_rwpuwa.jpg",
      description: "Our dedicated mentor who guides us through our technical journey with expertise and patience."
    },
    {
      name: "✨Arunanjali Maam✨",
      role: "Success Coach",
      image: "https://res.cloudinary.com/dhyhfalvs/image/upload/v1733936531/504c5e53-f011-4f64-a24a-428c724dd13f.png",
      description: "Our success coach who helps us develop essential soft skills and professional growth. 🙏🙏🙏"
    }
  ];

  return (
    <section className="py-16 bg-[#1a1a2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <GraduationCap className="w-12 h-12 text-[#5334b3] mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">Our Mentors</h2>
            <p className="text-gray-400">The guiding lights of our educational journey</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {mentors.map((mentor, index) => (
            <motion.div
              key={mentor.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#16213e] rounded-lg overflow-hidden shadow-xl" 
            >
              <div className="aspect-square">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{mentor.name}</h3>
                <p className="text-[#5334b3] font-medium mb-4">{mentor.role}</p>
                <p className="text-gray-400">{mentor.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            We're grateful for their guidance <Heart className="text-[#5334b3] w-4 h-4" />
          </p>
        </div>
      </div>
    </section>
  );
}