"use client";

import Image from "next/image";

export interface Project {
  id: string;
  title: string;
  description: string;
  fullContent: string;
  image: string;
  badges: string[];
  link?: string;
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer group flex flex-col h-full overflow-hidden rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-zinc-700 hover:shadow-xl hover:shadow-black/50"
    >
      {/* Immagine con leggero effetto zoom all'hover */}
      <div className="relative w-full h-48 overflow-hidden bg-zinc-950">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Contenuto Testo */}
      <div className="flex flex-col justify-between flex-1 p-5 gap-4">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white transition-colors group-hover:text-purple-400">
            {project.title}
          </h3>
          <p className="text-sm text-zinc-400 line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Badge Tag */}
        <div className="flex flex-wrap gap-2 pt-3 border-t border-zinc-800/60">
          {project.badges.map((badge, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 text-xs font-medium rounded-md bg-zinc-800 text-zinc-300 border border-zinc-700/50"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}