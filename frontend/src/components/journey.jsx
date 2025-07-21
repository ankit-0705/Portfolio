import { motion } from 'framer-motion';

const journeyData = [
  {
    title: "Schooling at MLZSH",
    description: "Completed my main schooling from MLZSH (6th to 12th grade), building a strong academic foundation and early curiosity for technology.",
    year: "2016 - 2023",
    side: "left",
    icon: "🎓",
  },
  {
    title: "Discovered Figma & UI/UX",
    description: "In my first semester of college, I was introduced to UI/UX design. Started exploring Figma, attending workshops, and creating design prototypes.",
    year: "2023",
    side: "right",
    icon: "🎨",
  },
  {
    title: "Started Web Development",
    description: "By the end of first year, I stepped into web development. Began with HTML, CSS, and JavaScript, and gradually built projects to strengthen the basics.",
    year: "2024",
    side: "left",
    icon: "💻",
  },
  {
    title: "Advanced to MERN & Leadership",
    description: "In my second year, developed a strong grip on the MERN stack. Became Admin Co-Lead of Webytes Club and mentored juniors in full-stack development.",
    year: "2024",
    side: "right",
    icon: "🌐",
  },
  {
    title: "Internship at Unified Mentor",
    description: "Completed a 3-month internship where I worked on full-stack web applications, gaining real-world project experience and teamwork exposure.",
    year: "2024",
    side: "left",
    icon: "🏢",
  },
  {
    title: "Exploring Data Science",
    description: "From 5th semester onwards, began exploring data science deeply — focusing on Python, data analytics, and foundational AI concepts.",
    year: "2025 - Present",
    side: "right",
    icon: "📊",
  },
];


function Journey() {
  return (
    <section
      id="journey"
      className="min-h-screen bg-gradient-to-b from-[#120A22] to-[#0B0B19] py-24 px-4 text-white flex justify-center"
    >
      <div className="w-full max-w-6xl relative">
        {/* Title */}
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4 text-center">
          <span className="mr-2" style={{ color: 'initial' }}>🧭</span>My Journey
        </h2>
        <p className="text-gray-300 text-center mb-16 max-w-xl mx-auto">
          A timeline of my growth, experiences, and milestones — fueled by passion and persistence.
        </p>

        {/* Line */}
        <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-1 bg-purple-500 h-[calc(100%-8rem)] z-0 hidden md:block" />
        <div className="absolute top-32 left-6 w-1 bg-purple-500 h-[calc(100%-8rem)] z-0 block md:hidden" />

        {/* Timeline Entries */}
        <div className="space-y-24 relative z-10">
          {journeyData.map((item, index) => {
            const isLeft = item.side === 'left';

            return (
              <div
                key={index}
                className={`w-full flex md:flex-row flex-col items-center ${
                  isLeft ? 'md:justify-start' : 'md:justify-end'
                } relative`}
              >
                {/* Icon (Dot for Desktop / Emoji for Mobile) */}
                <motion.div
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`absolute ${
                    isLeft ? 'md:left-1/2' : 'md:left-1/2'
                  } left-[6px] transform md:-translate-x-1/2 text-lg z-10`}
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-purple-500 border-4 border-white/10 shadow-lg">
                    {item.icon}
                  </div>
                </motion.div>

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className={`w-full md:w-1/2 flex ${
                    isLeft ? 'md:justify-end' : 'md:justify-start'
                  } px-4 mt-10 md:mt-0`}
                >
                  <div className="bg-white/5 border border-white/20 p-5 rounded-xl backdrop-blur-md max-w-md w-full">
                    <div className="flex items-center justify-between mb-2 text-purple-300 text-sm">
                      <span>{item.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="text-gray-300 mt-1">{item.description}</p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Journey;
