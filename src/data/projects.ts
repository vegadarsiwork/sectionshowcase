interface Project {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    title: "EcoTracker",
    description: "A web application that helps students track and reduce their carbon footprint through daily activities and challenges.",
    imageUrl: "https://source.unsplash.com/random/800x600?nature,technology",
    technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
    liveUrl: "https://eco-tracker.example.com",
    githubUrl: "https://github.com/class2024/eco-tracker"
  },
  {
    title: "StudyBuddy",
    description: "A collaborative learning platform where students can form study groups, share resources, and track their progress together.",
    imageUrl: "https://source.unsplash.com/random/800x600?study,education",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    liveUrl: "https://study-buddy.example.com",
    githubUrl: "https://github.com/class2024/study-buddy"
  },
  {
    title: "Virtual Art Gallery",
    description: "An immersive virtual space showcasing our class's artistic projects and creative works throughout the year.",
    imageUrl: "https://source.unsplash.com/random/800x600?art,gallery",
    technologies: ["Three.js", "React", "WebGL"],
    liveUrl: "https://art-gallery.example.com",
    githubUrl: "https://github.com/class2024/virtual-gallery"
  },
  {
    title: "Class Chronicle",
    description: "A digital yearbook and blog platform documenting our journey through memorable events and achievements.",
    imageUrl: "https://source.unsplash.com/random/800x600?yearbook,memories",
    technologies: ["Next.js", "Sanity.io", "Vercel"],
    liveUrl: "https://class-chronicle.example.com",
    githubUrl: "https://github.com/class2024/class-chronicle"
  },
  {
    title: "SkillShare Hub",
    description: "A platform where students can teach and learn from each other through video tutorials and interactive workshops.",
    imageUrl: "https://source.unsplash.com/random/800x600?teaching,skills",
    technologies: ["React", "Express", "PostgreSQL"],
    liveUrl: "https://skillshare-hub.example.com",
    githubUrl: "https://github.com/class2024/skillshare-hub"
  },
  {
    title: "Community Connect",
    description: "A social platform connecting our class with local community service opportunities and volunteer projects.",
    imageUrl: "https://source.unsplash.com/random/800x600?community,volunteer",
    technologies: ["React Native", "Firebase", "Redux"],
    liveUrl: "https://community-connect.example.com",
    githubUrl: "https://github.com/class2024/community-connect"
  }
];