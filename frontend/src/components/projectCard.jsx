"use client";
import { Button as MovingBorderWrapper } from "./ui/moving-border";
import { ExternalLink, Github } from "lucide-react";


function ProjectCard({ title, description, image, tags, demoLink, codeLink }) {

  return (
    <div className="relative group transition-transform duration-300 hover:scale-[1.015] rounded-2xl overflow-hidden">
      {/* 📦 Subtle inner background glow layer */}
      <div className="absolute inset-0 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 -z-20 pointer-events-none" />

      {/* 💠 Actual Card Content */}
      <MovingBorderWrapper
        borderRadius="1.25rem"
        className="bg-transparent w-full h-full p-4 text-left rounded-2xl"
        containerClassName="!w-full !h-full !p-[2px] rounded-2xl"
      >
        <div className="flex flex-col h-full relative z-10">
          {/* 🖼 Project Image */}
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover rounded-xl mb-4"
          />

          {/* 🔠 Title & Description */}
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-sm text-gray-300 mb-4">{description}</p>

          {/* 🏷 Tech Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs rounded bg-white/10 text-gray-300 border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* 🔗 Links */}
          <div className="flex gap-3 mt-auto flex-wrap">
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-4 py-2 border border-white/20 rounded-md text-white text-sm hover:bg-white/10 transition"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
            {codeLink && (
              <a
                href={codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-4 py-2 border border-white/20 rounded-md text-white text-sm hover:bg-white/10 transition"
              >
                <Github size={16} />
                Source Code
              </a>
            )}
          </div>
        </div>
      </MovingBorderWrapper>
    </div>
  );
}

export default ProjectCard;
