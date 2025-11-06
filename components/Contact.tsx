
import React from 'react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="text-center py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        <span className="gradient-text">Let's Connect</span>
      </h2>
      <p className="max-w-2xl mx-auto text-slate-400 mb-8">
        I'm currently open to new opportunities in Data Analysis, AI/ML, and Data Science. Feel free to reach out if you have a project in mind or just want to connect!
      </p>
      <a 
        href="mailto:rohan.hiwrale.connect@email.com" 
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition-transform duration-300 transform hover:scale-105 inline-block"
      >
        Get in Touch
      </a>
       <div className="mt-12 text-sm text-slate-500">
        © {new Date().getFullYear()} Rohan Hiwrale. All rights reserved.
      </div>
    </footer>
  );
};

export default Contact;
