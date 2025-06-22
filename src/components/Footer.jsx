import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center dark:bg-gray-800">
      <p className="mb-4 text-lg font-semibold">Let's Connect</p>

      <div className="flex justify-center gap-6 text-2xl">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/your-linkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin"></i>
        </a>

        {/* Gmail */}
        <a
          href="mailto:your.email@gmail.com"
          className="hover:text-red-400"
          aria-label="Gmail"
        >
          <i className="fas fa-envelope"></i>
        </a>

        {/* LeetCode (use a code icon or SVG) */}
        <a
          href="https://leetcode.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-400"
          aria-label="LeetCode"
        >
          <i className="fas fa-code"></i>
        </a>
      </div>

      <p className="mt-4 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Aashita. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
