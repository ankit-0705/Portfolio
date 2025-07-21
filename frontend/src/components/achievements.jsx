import React, { useEffect, useRef, useState } from 'react';
import VanillaTilt from 'vanilla-tilt';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ExternalLink } from 'lucide-react';
import achievementsData from '../assets/data/achievementData';

const categories = ['All', 'Education', 'Sports', 'Internship'];

function TiltCard({ children }) {
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      VanillaTilt.init(cardRef.current, {
        glare: true,
        "max-glare": 0.3,
        gyroscope: false,
        scale: 1,
        max: 0,
        speed: 0,
        perspective: 0,
      });
    }

    return () => {
      if (cardRef.current?.vanillaTilt) {
        cardRef.current.vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <div ref={cardRef} className="rounded-xl overflow-hidden cursor-pointer">
      {children}
    </div>
  );
}

function Achievements() {
  const [selected, setSelected] = useState('All');
  const [modalData, setModalData] = useState(null);

  const filtered =
    selected === 'All'
      ? achievementsData
      : achievementsData.filter((item) => item.category === selected);

  const handleOpenModal = (item) => {
    setModalData(item);
  };

  const handleCloseModal = () => {
    setModalData(null);
  };

  // Scroll lock on modal open
  useEffect(() => {
    if (modalData) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [modalData]);

  return (
    <section
      id="achievements"
      className="min-h-screen bg-black px-4 py-24 text-white text-center bg-gradient-to-b from-[#0B0B19] to-[#120A22]"
    >
      <h2 className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">
        <span className="mr-2" style={{ color: 'initial' }}>🎯</span>Highlights & Achievements
      </h2>
      <p className="text-gray-300 text-base mb-10">
        A journey of code, creativity, and accomplishments — spanning education, internships, and beyond.
      </p>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-16 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-5 py-2 rounded-md border text-sm font-semibold transition duration-300 cursor-pointer
              ${
                selected === cat
                  ? 'bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white shadow-md'
                  : 'border-purple-400 text-fuchsia-300 hover:bg-fuchsia-600/10 hover:text-white'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        <AnimatePresence>
          {filtered.map((item, index) => (
            <motion.div
              key={item.title}
              layout
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TiltCard>
                <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl h-full p-5 border border-white/10 hover:border-purple-500/40 hover:shadow-purple-700/30 transition-all duration-300 group">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-300 line-clamp-3">{item.description}</p>

                  {/* Action Buttons - Always visible on mobile */}
                  <div className="absolute top-4 right-4 flex gap-2 transition-opacity opacity-100 md:opacity-0 md:group-hover:opacity-100">
                    <button
                      onClick={() => handleOpenModal(item)}
                      className="text-white bg-purple-600 p-1 rounded-full hover:bg-purple-700"
                    >
                      <Plus size={18} />
                    </button>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white bg-purple-600 p-1 rounded-full hover:bg-purple-700"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalData && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 w-full max-w-lg relative border border-purple-700/30 shadow-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={handleCloseModal}
                className="absolute top-3 right-3 text-white hover:text-purple-400 text-xl"
              >
                ✕
              </button>
              <img
                src={modalData.image}
                alt={modalData.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-purple-300 mb-2">{modalData.title}</h3>
              <p className="text-gray-300 text-sm whitespace-pre-line">
                {modalData.fullDescription || modalData.description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Achievements;
