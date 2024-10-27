"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "GraphQL"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis", "Docker"]
  },
  {
    category: "Others",
    items: ["AWS", "Prisma", "Drizzle", "Bun.js", "Hono.js", "Clerk"]
  },
  {
    category: "Tools",
    items: ["Git", "VS Code", "Figma", "Postman", "Cursor", "Colab"]
  }
];

export function SkillsGrid() {
  return (
    <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {skills.map((category, index) => (
        <motion.div
          key={category.category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-card shadow-lg hover:shadow-xl p-6 rounded-lg transition-all"
        >
          <h3 className="mb-4 font-semibold text-xl">{category.category}</h3>
          <ul className="space-y-2">
            {category.items.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center space-x-2"
              >
                <span className="bg-primary rounded-full w-2 h-2" />
                <span className="text-muted-foreground">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}