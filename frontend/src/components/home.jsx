import { useContext } from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile.jpg';
import PortfolioContext from '../context/portfolioContext';

import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from 'lucide-react';

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

function Home() {
  const { theme } = useContext(PortfolioContext);

  const handleNav = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section
      id="home"
      data-theme={theme}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative min-h-screen bg-[#0B0B19] overflow-hidden text-white flex items-center justify-center px-6"
    >
      {/* Purple Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[480px] h-[480px] bg-purple-500/30 rounded-full blur-[180px] z-0 animate-pulseGlow" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between w-full gap-8 pt-24">

        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          className="w-full md:w-1/2 space-y-6"
        >
          <motion.div variants={childVariants} className="inline-block px-4 py-1 text-sm font-semibold rounded-full bg-white/10 text-white border border-white/20 backdrop-blur-md">
            Aspiring Data Scientist & Web Developer
          </motion.div>

          <motion.h1 variants={childVariants} className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Hey, I'm <span className="text-purple-400">Ankit</span>
          </motion.h1>

          <motion.h2 variants={childVariants} className="text-2xl sm:text-3xl font-semibold text-white">
            Turning ideas into digital experiences.
          </motion.h2>

          <motion.p variants={childVariants} className="text-gray-300 max-w-md">
            Passionate about full-stack development and AI. Currently working with the MERN stack and building
            hands-on projects while deepening my skills in Python for data-driven applications.
          </motion.p>

          <motion.div variants={childVariants} className="flex gap-4">
            <a
              href="/resume.pdf"
              className="bg-white/10 text-white px-5 py-2 rounded-full font-medium border border-white/20 transition hover:bg-purple-500/20 hover:scale-105 backdrop-blur-md shadow-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
            <a
              href="#contact"
              className="bg-white/5 text-white px-5 py-2 rounded-full font-medium border border-white/20 transition hover:bg-white/10 hover:scale-105 backdrop-blur-md"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div variants={childVariants} className="flex items-center gap-5 pt-4 w-max">
            {[
              { icon: <Github size={22} />, url: 'https://github.com/ankit-0705', label: 'GitHub' },
              { icon: <Linkedin size={22} />, url: 'https://www.linkedin.com/in/ankit-sangwan-0786b5293/', label: 'LinkedIn' },
              { icon: <Twitter size={22} />, url: 'https://x.com/ank71535', label: 'Twitter' },
              { icon: <Instagram size={22} />, url: 'https://www.instagram.com/ankitsangwan0705/', label: 'Instagram' },
            ].map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="transition transform hover:scale-110"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-md bg-white/10 border border-white/20 shadow-md hover:bg-purple-500/20 transition duration-300">
                  {item.icon}
                </div>
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
            className="w-full md:w-1/2 relative flex items-center justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-xl border border-white/10">
            <img
              src={profileImage}
              alt="Your Profile"
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Button - Positioned Right on Small Screens */}
      <motion.div
  variants={childVariants}
  className="absolute w-full m-1 bottom-6 px-6 flex justify-end">
  <button
    className="group flex flex-col items-center text-sm font-medium text-white hover:text-purple-400"
    onClick={handleNav}
  >
    <span className="animate-bounce my-1">View My Work</span>
    <span className="animate-bounce text-2xl">↓</span>
  </button>
</motion.div>

    </motion.section>
  );
}

export default Home;
