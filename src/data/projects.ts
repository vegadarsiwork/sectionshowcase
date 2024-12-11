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
    title: "BachelorBites",
    description: "A website for bachelors for easy recipes. Made by Naeem, Purujith and Vega.",
    imageUrl: "https://res.cloudinary.com/dhyhfalvs/image/upload/v1733909021/120ab166-3b9e-4e84-b590-02beef7f8111.png",
    technologies: ["HTML","CSS","JS","Bootstrap"],
    liveUrl: "http://bachelorbites.niat.tech/",
    githubUrl: "#"
  },
  {
    title: "Eshelf",
    description: "A library website for books. Made by Tejeswar (ALON MUSK).",
    imageUrl: "https://res.cloudinary.com/dhyhfalvs/image/upload/v1733909080/cb6c54d3-b574-442f-baa4-e1f9dead54ed.png",
    technologies: ["HTML","CSS","JS","Bootstrap"],
    liveUrl: "https://tejeswar-eshelf.netlify.app/",
    githubUrl: "#"
  },
  {
    title: "Jarvis",
    description: "An AI model you can talk to. Made by Taj Kiran.",
    imageUrl: "https://res.cloudinary.com/dhyhfalvs/image/upload/v1733909111/bebf1c30-dfb2-449d-8b87-9ac71de1918f.png",
    technologies: ["HTML","CSS","JS","Bootstrap"],
    liveUrl: "http://jarviseai.niat.tech",
    githubUrl: "#"
  },
  {
    title: "Cybersafe (NIAT Hackathon Winner)",
    description: "Your one-stop learning hub for everything cybersecurity. Made by Vega and 2 others.",
    imageUrl: "https://res.cloudinary.com/dhyhfalvs/image/upload/v1733909145/99eda916-e40e-4e33-8db4-d5df9a9ba718.png",
    technologies: ["HTML","CSS","JS","Bootstrap"],
    liveUrl: "https://cybersafe-niat.netlify.app",
    githubUrl: "#"
  }
];