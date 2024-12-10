import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Image, Projector, Users } from 'lucide-react';

const navItems = [
  { name: 'Gallery', icon: Image, href: '#gallery' },
  { name: 'Memories', icon: Users, href: '#memories' },
  { name: 'Projects', icon: Projector, href: '#projects' },
  { name: 'About Us', icon: Sparkles, href: '#about' }
];

export function Navbar() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href) return;
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <motion.header 
      className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-40"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Sparkles className="h-6 w-6 text-indigo-600" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
              Section 11
            </h1>
          </div>
          
          <nav className="hidden sm:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={scrollToSection}
                className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors duration-200"
              >
                <item.icon className="h-4 w-4" />
                <span className="text-sm font-medium">{item.name}</span>
              </a>
            ))}
          </nav>

          <div className="sm:hidden">
            <nav className="flex items-center gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={scrollToSection}
                  className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </motion.header>
  );
}