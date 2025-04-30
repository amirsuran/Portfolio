"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/atoms/Button";

interface ProjectCardProps {
  title: string;
  role: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  codeUrl?: string;
  index: number;
}

export default function ProjectCard({
  title,
  role,
  description,
  image,
  technologies,
  demoUrl,
  codeUrl,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-lg dark:bg-gray-800 dark:shadow-gray-800"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Project Image */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="flex-grow p-6">
        <div className="mb-3">
          <h3 className="mb-1 text-xl font-bold">{title}</h3>
          <p className="text-sm text-text-muted dark:text-gray-400">{role}</p>
        </div>

        {/* Tech Stack */}
        <div className="mb-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="inline-block rounded-full bg-gray-100 px-2 py-1 text-xs dark:bg-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </div>

      {/* Project Links */}
      <div className="mt-auto flex gap-4 px-6 pb-6">
        {demoUrl && (
          <Button href={demoUrl} variant="primary" className="flex-1">
            Live Demo
          </Button>
        )}

        {codeUrl && (
          <Button href={codeUrl} variant="secondary" className="flex-1">
            View Code
          </Button>
        )}
      </div>
    </motion.div>
  );
}
