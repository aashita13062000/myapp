import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-gray-100 text-center px-4">
      <h2 className="text-4xl font-bold mb-6">Resume</h2>
      <p className="mb-4 text-lg text-gray-700">
        Download my resume or view it in-browser.
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="/Aashita-Resume.pdf"
          download
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          📥 Download Resume
        </a>
        <a
          href="/Aashita_Singh_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-900"
        >
          👁️ View Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
