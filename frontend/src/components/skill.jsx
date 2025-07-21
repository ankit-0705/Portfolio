import React from "react";
import { motion } from "framer-motion";

const skills = {
  Languages: ["JavaScript", "HTML", "CSS", "Python", "MySQL"],
  Frontend: [
    "React",
    "Context API",
    "Tailwind CSS",
    "Framer Motion",
    "Aceternity UI",
    "DaisyUI"
  ],
  Backend: [
    "Node.js",
    "Express",
    "MongoDB",
    "REST API",
    "OpenCV",
    "Pandas",
    "Matplotlib",
    "Seaborn"
  ],
  "Tools & Others": [
    "Git",
    "GitHub",
    "VS Code",
    "Figma",
    "Postman",
    "Jupyter Notebook",
    "Google Colab"
  ],
};

// Animation config
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const textVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-24 bg-[#120A22] text-white"
    >
      <motion.div
        className="max-w-6xl mx-auto rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_0_40px_rgba(255,255,255,0.05)] p-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-purple-400 mb-4 tracking-tight flex items-center gap-2"
          variants={textVariants}
        >
          💻{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            My TechStack
          </span>
        </motion.h2>

        <motion.p
          className="text-base md:text-lg text-gray-300 mb-12"
          variants={textVariants}
        >
          Technologies I use to build full‑stack & data‑driven experiences.
        </motion.p>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
        >
          {Object.entries(skills).map(([category, items]) => (
            <motion.div
                key={category}
                variants={cardVariants}
                className="rounded-2xl p-6 text-left bg-gradient-to-br from-[#1c1530] to-[#1a0e2a] shadow-md border border-white/10 transform-gpu cursor-pointer hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition duration-300 ease-out"
                style={{ willChange: "opacity" }}>
              <h3 className="text-lg font-semibold text-white mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-full border border-current text-white"
                    style={{
                      borderColor:
                        category === "Languages"
                          ? "#F97316"
                          : category === "Frontend"
                          ? "#38BDF8"
                          : category === "Backend"
                          ? "#22C55E"
                          : "#FACC15",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="text-gray-500 text-sm mt-16 text-center"
          variants={textVariants}
        >
          "Combining full-stack development with hands-on Python experience to build intelligent, user-focused web applications.
        </motion.p>
      </motion.div>
    </section>
  );
}
