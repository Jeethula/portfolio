import { thoughts } from "@/lib/data";
import { ArrowRight, Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { NavMenu } from "@/components/nav-menu";
import { ImageCarousel } from "@/components/image-carousel";
import { ProjectCard } from "@/components/project-card";
import { SkillsGrid } from "@/components/skills-grid";
import { ThoughtCard } from "@/components/thought-card";
import { ContactForm } from "@/components/contact-form";
import profile from "../profile.png";

export default function Home() {
  return (
    <main className="bg-background min-h-screen text-foreground">
      {/* Fixed Navigation */}
      <NavMenu />

      {/* Hero Section with Contact */}
      <section id="home" className="relative pt-16 min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background/0 animate-gradient" />
        <div className="mx-auto px-4 sm:px-6 lg:px-8 pt-20 max-w-7xl">
          <div className="flex lg:flex-row flex-col items-center gap-12">
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight animate-fade-in">
                Hi, I&apos;m <span className="text-primary">Jeeththenthar LA</span>
                <br />
                <span className="bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 text-transparent">
                  Product Engineer
                </span>
              </h1>
              <p className="mx-auto lg:mx-0 max-w-2xl text-lg text-muted-foreground sm:text-xl animate-fade-in-delay">
              Empowering innovation through AI-driven development—by leveraging powerful AI tools, I accelerate the entire product-building process from concept to launch. Lets create impactful digital solutions, faster and smarter
              </p>
              {/* <div className="flex sm:flex-row flex-col justify-center lg:justify-start gap-4 animate-fade-in-delay-2">
                <Link href="#contact" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full group">
                    Get in Touch
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <div className="flex justify-center gap-4">
                  <a 
                    href="https://github.com/Jeethula" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="rounded-full hover:scale-110 transition-transform"
                    >
                      <Github className="w-5 h-5" />
                    </Button>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/jeethula/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="rounded-full hover:scale-110 transition-transform"
                    >
                      <Linkedin className="w-5 h-5" />
                    </Button>
                  </a>
                  <a 
                    href="mailto:jeeththenthar@gmail.com"
                    className="block"
                  >
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="rounded-full hover:scale-110 transition-transform"
                    >
                      <Mail className="w-5 h-5" />
                    </Button>
                  </a>
                </div>
              </div> */}
               <div className="relative z-10 flex sm:flex-row flex-col justify-center lg:justify-start gap-4 opacity-0 animate-[fadeIn_1s_ease-in_forwards_0.4s]">
      <Link href="#contact" className="relative w-full sm:w-auto">
        <Button size="lg" className="relative hover:opacity-90 w-full transition-opacity group">
          Get in Touch
          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </Link>
      
      <div className="flex justify-center gap-4">
        <a
          href="https://github.com/Jeethula"
          target="_blank"
          rel="noopener noreferrer"
          className="block relative"
        >
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:scale-110 relative transition-transform"
          >
            <Github className="w-5 h-5" />
          </Button>
        </a>
        
        <a
          href="https://www.linkedin.com/in/jeethula/"
          target="_blank"
          rel="noopener noreferrer"
          className="block relative"
        >
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:scale-110 relative transition-transform"
          >
            <Linkedin className="w-5 h-5" />
          </Button>
        </a>
        
        <a
          href="mailto:jeeththenthar@gmail.com"
          className="block relative"
        >
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:scale-110 relative transition-transform"
          >
            <Mail className="w-5 h-5" />
          </Button>
        </a>
      </div>
    </div>
            </div>
            <div className="relative w-72 lg:w-96 h-72 lg:h-96 animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-3xl rounded-full animate-pulse" />
              <Image
                src={profile}
                alt="Profile"
                fill
                className="rounded-full ring-4 ring-primary/20 object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Image Carousel */}
      <section id="about" className="bg-primary/5 py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="mb-12 font-bold text-3xl text-center">About Me</h2>
          <div className="items-center gap-12 grid lg:grid-cols-2">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
              As a Product engineer passionate about crafting innovative solutions, I bring ideas to life through clean code and intuitive design. When I’m not coding, youll find me following football and cricket, exploring new destinations, or enjoying great music
              </p>
              <div className="gap-6 grid grid-cols-2">
                <div className="space-y-2">
                  <h3 className="font-semibold">Interests</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>✈️ Travel</li>
                    <li>🎸 Music </li>
                    <li>🏏 Cricket & Football</li>
                    <li>🤪 Politics</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Fun Facts</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>🌍 Visited 8 states in India</li>
                    <li>🎵 <span className="line-through"> K - pop</span> Hip Hop 💪  </li>
                    <li>📚 Love sci-fi videos</li>
                    <li>☕ Coffee enthusiast</li>
                  </ul>
                </div>
              </div>
            </div>
            <ImageCarousel />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="mb-12 font-bold text-3xl text-center">Featured Projects</h2>
          <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Thoughts Section */}
      <section id="thoughts" className="bg-primary/5 py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="mb-12 font-bold text-3xl text-center">My Thoughts</h2>
          <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {thoughts.map((thought, index) => (
              <ThoughtCard key={index} thought={thought} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="mb-12 font-bold text-3xl text-center">Skills & Expertise</h2>
          <SkillsGrid />
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="bg-primary/5 py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="mb-12 font-bold text-3xl text-center">Let&apos;s Connect</h2>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}

const projects = [
  {
    title: "Analysedb",
    description: "Natural language engine that transforms databases into actionable business intelligence.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop", // Reusing a relevant image from the original set
    technologies: ["NLP", "Multi-LLM Intelligence", "Data Visualization", "SQL Generation", "Database Governance"],
    demo: "https://www.analysedb.live/",
    github: "https://www.analysedb.live/" // As requested, using the demo link for GitHub
  },
  {
    title: "UniOps",
    description: "A comprehensive platform for managing university operations",
    image: "https://cdn.prod.website-files.com/5fae79706d8334674145afcd/60d0f632e466177e8a213c55_Student-App-Feature-2.png",
    technologies: ["Nextjs", "Websocket", "MongoDB", "prisma", "clerk"],
    demo: "https://www.mithreshvar.tech",
    github: "https://github.com/jeethula"
  },
  {
    title: "Weather prediction using AI",
    description: "A machine learning model to predict weather using historical data",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    technologies: ["Next.js", "TensorFlow.js", "GraphQL", "AWS"],
    demo: "https://weather-steel-mu.vercel.app",
    github: "https://github.com/jeethula/"
  }
];
