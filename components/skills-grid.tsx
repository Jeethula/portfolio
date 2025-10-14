"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const skills = [
  {
    category: "Frontend Development",
    description: "Modern web interfaces and user experiences",
    items: [
      "React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "GraphQL",
      "Vue.js", "Svelte", "Webpack", "Vite", "Jest", "Cypress"
    ]
  },
  {
    category: "Backend Development",
    description: "Server-side architecture and APIs",
    items: [
      "Node.js", "Python", "PostgreSQL", "MongoDB", "Redis", "Docker",
      "Express.js", "FastAPI", "Prisma", "Drizzle", "Bun.js", "Hono.js"
    ]
  },
  {
    category: "AI & Machine Learning",
    description: "Intelligent systems and automation",
    items: [
      "LangChain", "OpenAI API", "Agent Building", "AI Bots", "Vector Databases",
      "Pinecone", "Weaviate", "Chroma", "TensorFlow", "PyTorch", "Scikit-learn"
    ]
  },
  {
    category: "Cloud & DevOps",
    description: "Infrastructure and deployment",
    items: [
      "AWS", "Vercel", "Railway", "Supabase", "PlanetScale", "Clerk",
      "GitHub Actions", "Kubernetes", "Terraform", "Nginx", "PM2", "Docker Compose"
    ]
  },
  {
    category: "Development Tools",
    description: "Productivity and workflow optimization",
    items: [
      "Git", "VS Code", "Figma", "Postman", "Cursor", "Colab",
      "Linear", "Notion", "Slack", "Discord", "Chrome DevTools", "Insomnia"
    ]
  }
];

export function SkillsGrid() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Category Navigation */}
      <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-10 justify-center">
        {skills.map((category, index) => (
          <motion.button
            key={category.category}
            onClick={() => setActiveCategory(index)}
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className={`px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 text-xs sm:text-sm ${
              activeCategory === index
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            <span className="hidden sm:inline">{category.category}</span>
            <span className="sm:hidden">
              {category.category.split(' ')[0]}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Skills Display */}
      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-card/50 backdrop-blur-sm border rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg"
      >
        {/* Category Header */}
        <div className="text-center mb-6 sm:mb-10">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            {skills[activeCategory].category}
          </h3>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
            {skills[activeCategory].description}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-3 lg:gap-4">
          {skills[activeCategory].items.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="group relative"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  y: -3,
                  rotateY: 5,
                  rotateX: 5
                }}
                whileTap={{ scale: 0.95 }}
                className="relative p-2 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl border bg-background/80 hover:bg-background transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/40 text-center cursor-pointer"
              >
                {/* Skill name with responsive text */}
                <motion.div
                  animate={{ 
                    scale: hoveredSkill === skill ? 1.1 : 1,
                    y: hoveredSkill === skill ? -1 : 0
                  }}
                  transition={{ duration: 0.2 }}
                  className="font-medium text-xs sm:text-sm text-foreground/90 group-hover:text-foreground relative z-10"
                >
                  {skill}
                </motion.div>
                
                {/* Animated background gradient */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: hoveredSkill === skill ? 1 : 0,
                    scale: hoveredSkill === skill ? 1 : 0.8
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-lg sm:rounded-xl pointer-events-none"
                />

                {/* Shimmer effect */}
                <motion.div
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ 
                    x: hoveredSkill === skill ? "100%" : "-100%",
                    opacity: hoveredSkill === skill ? 1 : 0
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-lg sm:rounded-xl pointer-events-none"
                />

                {/* Glow effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: hoveredSkill === skill ? 0.3 : 0,
                    scale: hoveredSkill === skill ? 1.1 : 1
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute -inset-1 bg-primary/20 rounded-lg sm:rounded-xl blur-sm pointer-events-none"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Category Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-6 sm:mt-10 pt-4 sm:pt-6 border-t border-border/50"
        >
          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-muted/50 text-xs sm:text-sm text-muted-foreground hover:bg-muted/70 transition-colors"
            >
              <motion.span 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-primary"
              />
              {skills[activeCategory].items.length} Technologies
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}