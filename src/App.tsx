import React, { useState, useEffect } from 'react';
import { ClassGrid } from './components/gallery/ClassGrid';
import { AboutSection } from './components/about/AboutSection';
import { MemoriesMarquee } from './components/memories/MemoriesMarquee';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/navigation/Navbar';
import { HeroSection } from './components/HeroSection';
import { MentorsSection } from './components/mentors/MentorsSection';
import { motion } from 'framer-motion';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-[#000000]"
      >
        <Navbar />
        <HeroSection />

        {/* Gallery Section */}
        <section id="gallery" className="py-16 bg-[#1a1a2e] scroll-mt-16">
          <div className="max-w-[2000px] mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-white text-center mb-12">Our Amazing Class</h2>
              <ClassGrid />
            </motion.div>
          </div>
        </section>

        {/* Mentors Section */}
        <section id="mentors" className="scroll-mt-16">
          <MentorsSection />
        </section>

        {/* Memories Marquee */}
        <section id="memories" className="py-16 bg-[#16213e] scroll-mt-16">
          <MemoriesMarquee />
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 bg-[#0f3460] scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProjectsSection />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-[#1a1a2e] scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AboutSection />
          </div>
        </section>
      </motion.div>
    </>
  );
}