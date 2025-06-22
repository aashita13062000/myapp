import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white text-center px-4">
      <h2 className="text-4xl font-bold mb-6">About Me</h2>
      
      <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-8">
        I’m a cloud-native Java developer passionate about building scalable backend systems and interactive UIs. I focus on clean code, microservices architecture, and cloud-native deployment.
      </p>

      <h3 className="text-2xl font-semibold mb-4">Tech Stack</h3>
      
      <div className="flex flex-wrap justify-center gap-4 text-gray-800">
        <span className="bg-gray-100 px-4 py-2 rounded-full shadow-sm">Java</span>
        <span className="bg-gray-100 px-4 py-2 rounded-full shadow-sm">Spring Boot</span>
        <span className="bg-gray-100 px-4 py-2 rounded-full shadow-sm">React</span>
        <span className="bg-gray-100 px-4 py-2 rounded-full shadow-sm">Tailwind CSS</span>
        <span className="bg-gray-100 px-4 py-2 rounded-full shadow-sm">PostgreSQL</span>
        <span className="bg-gray-100 px-4 py-2 rounded-full shadow-sm">Docker</span>
        <span className="bg-gray-100 px-4 py-2 rounded-full shadow-sm">Kubernetes</span>
        <span className="bg-gray-100 px-4 py-2 rounded-full shadow-sm">Git & GitHub</span>
      </div>
    </section>
  );
};

export default About;
