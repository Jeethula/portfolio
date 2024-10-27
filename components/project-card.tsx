"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    demo: string;
    github: string;
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="relative flex flex-col bg-card shadow-lg hover:shadow-xl rounded-lg overflow-hidden group"
    >
      <Link href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-grow">
        <div className="relative h-48">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0" />
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex justify-center items-center bg-primary/10 backdrop-blur-sm"
          >
            <span className="flex items-center gap-2 text-white">
              View Demo <ArrowRight className="w-4 h-4" />
            </span>
          </motion.div>
        </div>
        <motion.div
          className="p-6"
          initial={{ y: 0 }}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <h3 className="group-hover:text-primary mb-2 font-semibold text-xl transition-colors">{project.title}</h3>
          <p className="mb-4 text-muted-foreground">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="bg-primary/10 px-2 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </Link>
      <div className="mt-auto p-6 pt-0">
        <Button variant="outline" size="sm" asChild className="w-full">
          <Link href={project.github} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 w-4 h-4" /> View Code
          </Link>
        </Button>
      </div>
    </motion.div>
  );
}
