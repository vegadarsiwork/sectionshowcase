import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects } from '../../data/projects';
import { ExternalLink } from 'lucide-react';

export function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="max-w-6xl mx-auto" ref={ref}>
      <h2 className="text-4xl font-bold text-center mb-12 text-white">
        Our Class Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[#1a1a2e] rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-[#5334b3]/20 group"
          >
            <div className="aspect-video relative overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#5334b3] transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-white/70 mb-4 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-[#5334b3]/20 text-[#5334b3] rounded-full border border-[#5334b3]/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#5334b3] hover:text-white transition-colors duration-300"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}