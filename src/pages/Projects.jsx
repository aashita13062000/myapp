import React from 'react';

const projects = [
  {
    title: 'E-commerce Backend',
    description: 'RESTful API built with Spring Boot, JWT Auth, PostgreSQL, and Mail integration.',
    github: 'https://github.com/yourusername/ecommerce-backend',
    demo: 'https://demo-link.com', // optional
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio built using React, Tailwind CSS, and deployed via Netlify.',
    github: 'https://github.com/yourusername/portfolio',
    demo: '',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 text-center px-4">
      <h2 className="text-4xl font-bold mb-10">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 text-left hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
