import React from "react";
import ModelViewer from "./modelViewr";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react"; // You can use any icon library here

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

function About() {
  const paragraphs = [
    <>
      Whether it’s <span className="text-white font-semibold">volleyball</span>,{" "}
      <span className="text-white font-semibold">badminton</span>, or building something cool on my system,
      I’ve always enjoyed challenging myself — physically, mentally, and creatively.
    </>,
    <>
      I spend a lot of time at my{" "}
      <span
        className="tooltip tooltip-bottom text-purple-300 cursor-help"
        data-tip="My battleground of ideas!"
      >
        desktop setup
      </span>
      , immersed in code, design, or discovery. For me, it’s not just a screen and a keyboard — it's a space where
      passion meets productivity, and curiosity turns into creation.
    </>,
    <>
      My interests revolve around building interactive, thoughtful experiences — whether through clean{" "}
      <span className="text-white font-semibold">UI/UX design</span> or scalable web apps.
      I believe in constantly evolving, learning from mistakes, and staying open to new ideas.
    </>,
    <>
      Lately, I’ve been diving deep into{" "}
      <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-semibold">
        Data Science
      </span>{" "}
      and{" "}
      <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-semibold">
        AI
      </span>
      , exploring how technology can solve real-world problems and enhance human capabilities.
      It's a journey that excites me every day.
    </>
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-24 gap-12 bg-gradient-to-b from-[#0B0B19] to-[#120A22] text-[#CFCFCF] overflow-x-hidden"
    >
      {/* Left: 3D Model */}
      <motion.div
        className="w-full md:w-[50%] h-[400px] md:h-[600px] flex justify-center items-center will-change-transform"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
      >
        <ModelViewer />
      </motion.div>

      {/* Right: Textual Content */}
      <motion.div
        className="w-full md:w-[50%] space-y-6 will-change-transform"
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.2, delayChildren: 0.4 }}
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {}
        }}
      >
        <motion.h2
          className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent leading-tight flex items-center gap-2"
          variants={textVariants}
        >
          <Sparkles className="w-6 h-6 text-purple-300" />
          About Me
        </motion.h2>

        {/* Badges */}
        <motion.div
          className="flex flex-wrap gap-2"
          variants={textVariants}
        >
          <span className="badge badge-outline badge-accent">Web Dev</span>
          <span className="badge badge-outline badge-info">AI</span>
          <span className="badge badge-outline badge-secondary">UI/UX</span>
          <span className="badge badge-outline badge-success">Data Science</span>
          <span className="badge badge-outline badge-warning">Competitive Spirit</span>
        </motion.div>

        {/* Paragraphs */}
        {paragraphs.map((para, i) => (
          <motion.p
            key={i}
            className="text-lg text-gray-300 leading-relaxed"
            variants={textVariants}
          >
            {para}
          </motion.p>
        ))}
      </motion.div>
    </section>
  );
}

export default About;
