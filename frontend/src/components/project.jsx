import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './projectCard'; // Adjust path if needed

const projects = [
  {
    title: 'Macrology – Indian Food Macro Tracker',
    description:
      'A calorie and macro tracking web app tailored for Indian meals. Features daily macro tracking, charts, streak tracking, and a clean responsive UI.',
    image: '/projects/Macrology.jpg',
    tags: ['React', 'TailwindCSS', 'DaisyUI', 'Node.js', 'MongoDB'],
    demoLink: 'https://macrology.vercel.app',
    codeLink: 'https://github.com/AnkitSangwan03/macrology',
  },
  {
    title: 'Vehicle Plate Recognition System',
    description:
      'Real-time vehicle number plate detection using YOLOv11n and text extraction using EasyOCR. Includes correction mechanism for OCR errors.',
    image: '/projects/ANPR.png',
    tags: ['Python', 'YOLOv11n', 'EasyOCR', 'OpenCV', 'Roboflow'],
    codeLink: 'https://github.com/AnkitSangwan03/vehicle-plate-recognition',
  },
  {
    title: 'Real-Time Chat Application',
    description:
      'A MERN-based real-time chat app with socket.io, login system, and responsive design. Built for group and personal messaging.',
    image: '/projects/ChatApp.jpg',
    tags: ['React', 'Node.js', 'Express', 'Socket.io', 'MongoDB'],
    codeLink: 'https://github.com/AnkitSangwan03/chat-application',
  },
  {
    title: 'Sentiment Analysis of Tweets',
    description:
      'Python tool that classifies tweet sentiment (positive, neutral, or negative) using TextBlob. Extracts tweets from JSON and cleans them with regex.',
    image: '/projects/Sentiment.jpg',
    tags: ['Python', 'TextBlob', 'Regex', 'JSON'],
    codeLink: 'https://github.com/AnkitSangwan03/sentiment-analysis-tweets',
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen px-4 py-20 text-white bg-gradient-to-b from-[#120A22] to-[#0B0B19]"
    >
      <div className="max-w-6xl mx-auto rounded-3xl p-6 sm:p-10">
        {/* Animated Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-extrabold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            <span className="mr-2" style={{ color: 'initial' }}>💼</span>Projects
          </h2>
          <p className="text-gray-300 text-center mb-12 max-w-xl mx-auto">
            A showcase of real-world, impactful projects — blending technology, creativity, and teamwork.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
