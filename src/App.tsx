import React from 'react';
import { GraduationCap } from 'lucide-react';
import { ClassGrid } from './components/gallery/ClassGrid';
import { AboutSection } from './components/about/AboutSection';
import { MemoriesMarquee } from './components/memories/MemoriesMarquee';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Header */}
      <motion.header 
        className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <GraduationCap className="h-6 w-6 text-indigo-600" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
              Class of 2024
            </h1>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main>
        {/* Gallery Section */}
        <section className="py-16">
          <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
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
        <section className="py-12 bg-white/50 backdrop-blur-sm">
          <MemoriesMarquee />
        </section>

        {/* Projects Section */}
        <section className="py-16 bg-gradient-to-br from-indigo-50/50 to-purple-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProjectsSection />
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-white/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AboutSection />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;