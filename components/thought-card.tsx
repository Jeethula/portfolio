"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { format } from "date-fns";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ThoughtCardProps {
  thought: {
    title: string;
    slug: string;
    excerpt: string;
    date: string;
    category: string;
    image: string;
  };
}

export function ThoughtCard({ thought }: ThoughtCardProps) {
  return (
    <Link href={`/thoughts/${thought.slug}`}>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
        transition={{
          duration: 0.2,
          ease: "easeOut"
        }}
        className="relative bg-card shadow-lg hover:shadow-xl rounded-lg overflow-hidden group"
      >
        <div className="relative h-48">
          <Image
            src={thought.image}
            alt={thought.title}
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
              Read More <ArrowRight className="w-4 h-4" />
            </span>
          </motion.div>
          <span className="bottom-4 left-4 absolute bg-primary/80 px-2 py-1 rounded-full text-sm text-white">
            {thought.category}
          </span>
        </div>
        <motion.div
          className="p-6"
          initial={{ y: 0 }}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <time className="text-muted-foreground text-sm">
            {format(new Date(thought.date), "MMMM d, yyyy")}
          </time>
          <h3 className="group-hover:text-primary mt-2 mb-3 font-semibold text-xl transition-colors">
            {thought.title}
          </h3>
          <p className="text-muted-foreground">{thought.excerpt}</p>
        </motion.div>
      </motion.article>
    </Link>
  );
}
