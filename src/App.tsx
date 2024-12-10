import React from 'react';
import { GraduationCap } from 'lucide-react';
import { ClassGrid } from './components/gallery/ClassGrid';
import { AboutSection } from './components/about/AboutSection';
import { MemoriesMarquee } from './components/memories/MemoriesMarquee';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <GraduationCap className="h-6 w-6 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-900">Class of 2024</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Gallery Section */}
        <section className="py-8">
          <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
            <ClassGrid />
          </div>
        </section>

        {/* Memories Marquee */}
        <section className="py-12 bg-white">
          <MemoriesMarquee />
        </section>

        {/* About Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AboutSection />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;