import React, { useState, useEffect } from 'react';
import { ClassGrid } from './components/gallery/ClassGrid';
import { AboutSection } from './components/about/AboutSection';
import { MemoriesMarquee } from './components/memories/MemoriesMarquee';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/navigation/Navbar';
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
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <Navbar />

        {/* Main Content */}
        <main>
          {/* Gallery Section */}
          <section id="gallery" className="py-8 scroll-mt-16">
            <div className="max-w-[2000px] mx-auto px-2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <ClassGrid />
              </motion.div>
            </div>
          </section>

          {/* Memories Marquee */}
          <section id="memories" className="py-8 bg-white/50 backdrop-blur-sm scroll-mt-16">
            <MemoriesMarquee />
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-8 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 scroll-mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <ProjectsSection />
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-8 bg-white/50 backdrop-blur-sm scroll-mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <AboutSection />
            </div>
          </section>
        </main>
      </div>
    </>
  );
}