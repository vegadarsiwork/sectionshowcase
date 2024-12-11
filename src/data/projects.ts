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
  },
  {
    title: "ContactNIAT",
    description: "A platform designed for personalized service management made with only HTML and CSS. Made by Sanjay, Srujan and Sidarth.",
    imageUrl: "https://res.cloudinary.com/dhyhfalvs/image/upload/v1733913849/978397c0-3b29-4dec-9be4-f05bf0286938.png",
    technologies: ["HTML","CSS","Bootstrap"],
    liveUrl: "https://ephemeral-raindrop-23bbea.netlify.app/",
    githubUrl: "#"
  },
  {
    title: "NetflixClone",
    description: "Netflix clone homepage made with only HTML and CSS. Made by Pranay Yx.",
    imageUrl: "https://res.cloudinary.com/dhyhfalvs/image/upload/v1733913815/fdaae75e-b52a-4fb7-bcec-57cbff8dc1ae.png",
    technologies: ["HTML","CSS","Bootstrap"],
    liveUrl: "https://ypranaynetflix.niat.tech/",
    githubUrl: "#"
  }
];