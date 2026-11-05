"use client";

import { useState } from "react";
import Image from "next/image";
import ProjectCard, { Project } from "@/components/ui/project-card";


// Projects extracted directly from your CV (Excluding Suvenir)
const PROJECTS: Project[] = [
  {
    id: "1",
    title: "HPC Parallelization in Formal Verification Engines",
    description: "Research on parallelizing state-space exploration in timed verification tools (TARZAN).",
    fullContent: "Pioneered self-directed research on parallelizing state-space exploration in timed verification tools (TARZAN), mitigating pointer-chasing and cache-miss bottlenecks on non-contiguous region graphs. Architected and evaluated 3 parallel execution paradigms (OpenMP, Intel oneTBB, OpenMPI). Achieved 5.8x speedup via oneTBB, outperforming sequential executin by 4.5x. Co-authoring a research manuscript submitted to ICSE 2027.",
    image: "/icse.png",
    badges: ["C++", "OpenMP", "Intel oneTBB", "OpenMPI", "Linux", "CMake"],
    link: "https://github.com/andreamanini98/TARZAN",
  },
  {
    id: "2",
    title: "HPC & GPU Optimization for Molecular Docking",
    description: "Re-engineered VINA scoring function and optimized CUDA batch execution for GPUs.",
    fullContent: "Ported a Python/NumPy baseline to native C++, establishing a robust benchmark and achieving a 9x single-threaded speedup. Scaled CUDA thread blocks to boost throughput to 660 ligands/ms (+65%). Analyzed instruction stalls via NVIDIA Nsight Compute to increase Active Executed IPC from 1.83 to 2.55, reducing global VRAM transactions by >40% using compacted Shared Memory (float4).",
    image: "/mol_dock.webp",
    badges: ["C++", "CUDA", "Python", "NVIDIA Nsight Compute", "GDB"],
    link: "https://github.com/elvispolimi/muDock",
  },
  {
    id: "3",
    title: "Distributed Replicated Chat System",
    description: "Fault-tolerant Java replicated chat infrastructure with leader election and ordered message delivery.",
    fullContent: "Architected a fault-tolerant distributed chat infrastructure in Java. Implemented broker coordination, dynamic leader election algorithms, crash recovery mechanisms, and total/causal message ordering protocols to ensure strong consistency across replicated nodes.",
    image: "/chat.png",
    badges: ["Java", "Distributed Systems", "Fault Tolerance", "Leader Election", "Networking"],
    link: "https://github.com/andrea02polimi/DS-Project",
  },
  {
    id: "4",
    title: "Real-Time Vulkan Graphics Engine",
    description: "Modular multi-pass C++/Vulkan graphics engine running at 60+ FPS.",
    fullContent: "Built a modular multi-pass C++/Vulkan graphics engine featuring offscreen depth passes, dynamic descriptor updates, and optimized memory allocation pipelines. Used RenderDoc to inspect command buffers and memory barriers, eliminating pipeline stalls and achieving a stable 60+ FPS (<16ms frame times) across complex multi-light scenes.",
    image: "/game.png",
    badges: ["C++", "Vulkan", "GLSL", "RenderDoc", "Computer Graphics"],
    link: "https://github.com/Haerikan/cg2526-project",
  },
];

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-zinc-950 font-sans text-zinc-100 flex flex-col items-center">

      {/* ─── HERO SECTION ─── */}
      <div className="hero bg-zinc-900/50 w-full py-12 border-b border-zinc-800">
        <div className="hero-content flex-col lg:flex-row-reverse gap-8 max-w-6xl w-full px-6">
          <img
            alt="Hero Image"
            src="/nice.jpg"
            className="max-w-md w-full rounded-2xl shadow-2xl border border-zinc-800 object-cover"
          />
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              Andrea Sbrogiò
            </h1>
            <p className="py-6 text-zinc-400 text-lg">
              Software Engineer & M.S. Student at Politecnico di Milano. Specialized in High-Performance Computing (HPC), GPU Programming (CUDA/Vulkan), and low-level system software.
            </p>
            <a href="mailto:andrea.sbrogio.dev@gmail.com" className="btn btn-primary">
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* ─── MAIN CONTENT / PROJECTS ─── */}
      <main className="relative z-10 flex flex-col items-center w-full max-w-6xl px-6 py-16 gap-12">
        <div className="text-center space-y-3">
          <h2 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent sm:text-5xl">
            My Projects
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            A selection of research projects in HPC, graphic engines, and system performance.
          </p>
        </div>

        {/* Projects Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </section>

        {/* ─── SUVENIR SECTION WITH YOUR EXACT MOCKUP PHONE ─── */}
        <section className="w-full my-12 p-8 sm:p-12 rounded-3xl bg-zinc-900/80 border border-zinc-800 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl">

          {/* Cambia text-[10px] o text-xs per regolare la grandezza del telefono */}
          <div className="mockup-phone text-[12px]">
            <div className="mockup-phone-camera"></div>
            <div className="mockup-phone-display overflow-hidden bg-black flex items-center justify-center">
              <video
                src="/suvenir_web.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* SUVENIR Details on the Right */}
          <div className="flex flex-col items-start space-y-5 lg:max-w-xl">
            <h3 className="text-4xl font-extrabold text-white">SUVENIR</h3>
            <p className="text-zinc-300 leading-relaxed text-base">
              Engineered a high-performance media engine available on both <b>iOS</b> and <b>Android</b>. Capable of indexing 60,000+ local assets instantaneously by leveraging <b>Dart Isolates</b> for background processing and <b>SQLite</b> for metadata caching. Features privacy-first on-device AI moderation via <b>TFLite</b> (&lt;100ms inference time) and automated CI/CD pipelines on Codemagic.
              <br /><br />
              With <b>$0 spent on marketing</b>, the app organically acquired and retained <b>60 active users for over a year</b>.
            </p>

            {/* Custom Link Button */}
            <a
              href="https://sbro.dev/download-suvenir" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-all shadow-lg shadow-purple-600/25 flex items-center gap-2"
            >
              Explore Suvenir
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </section>
      </main>

      {/* ─── MODAL DETAIL ─── */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute z-50 top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-full bg-zinc-800/60 hover:bg-zinc-800 transition-colors"
            >
              ✕
            </button>

            <div className="relative w-full h-64 rounded-2xl overflow-hidden border border-zinc-800">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white">{selectedProject.title}</h2>
              <div className="flex flex-wrap gap-2">
                {selectedProject.badges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-semibold rounded-md bg-purple-900/40 text-purple-300 border border-purple-700/50"
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <p className="text-zinc-300 text-base leading-relaxed whitespace-pre-line pt-2">
                {selectedProject.fullContent}
              </p>
            </div>

            {selectedProject.link && (
              <div className="pt-4 border-t border-zinc-800 flex justify-end">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium text-sm transition-colors shadow-lg shadow-purple-600/20"
                >
                  View on GitHub →
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ─── FOOTER ─── */}
      <footer className="w-full border-t border-zinc-800 bg-zinc-950 py-8 px-6 mt-12">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-400">
          <p>© {new Date().getFullYear()} Andrea Sbrogiò. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/AndreSbro03"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/andresbro/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}