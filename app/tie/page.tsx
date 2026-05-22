'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ArrowDown, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

interface Slide {
  type: 'hero' | 'content' | 'comparison';
  title: string;
  subtitle?: string;
  content?: string[];
  image?: string;
  leftTitle?: string;
  rightTitle?: string;
  left?: string[];
  right?: string[];
}

const slides: Slide[] = [
  {
    type: 'hero',
    title: 'Orchestrating AI to Build a Zero-Cost SaaS with Vibe Engineering',
    subtitle:
      'A practical workshop on building real-world products using AI-native engineering workflows',
  },
  {
    type: 'content',
    title: 'Let’s Set the Expectation',
    content: [
      'Over the next 3 hours, we are NOT going to just watch AI generate code.',
      'We are going to think like engineers.',
      'We are going to identify a real problem.',
      'We are going to use AI systems to engineer a working solution.',
      'By the end of the session, we will have a deployed SaaS product solving a real problem.',
    ],
  },
  {
    type: 'content',
    title: 'Coming Back to the Title',
    content: [
      'Orchestrating AI to Build a Zero-Cost SaaS with Vibe Engineering',
      'What does this title actually mean?',
      'Orchestrating AI → Using multiple AI systems strategically',
      'Zero-Cost SaaS → Building production-ready systems using free-tier infrastructure',
      'Vibe Engineering → Moving beyond random prompting into structured engineering workflows',
    ],
  },
  {
    type: 'content',
    title: 'Two Ways of Using AI',
    content: [
      'AI as Companion → AI assists your existing workflow',
      'AI as Complete System → AI becomes part of the engineering pipeline',
      'Today, we are focusing on AI as a complete engineering system.',
      'Our goal is NOT to build a unicorn startup today.',
      'Our goal is to solve a REAL problem for REAL people.',
      'Even if only 10 people use it, if it solves a real pain point, it matters.',
    ],
  },
  {
    type: 'comparison',
    title: 'Vibe Coding vs Vibe Engineering',
    leftTitle: 'Vibe Coding',
    rightTitle: 'Vibe Engineering',
    left: [
      'Random prompting',
      'No architecture thinking',
      'AI generates chaos',
      'No verification process',
      'Hard to scale or maintain',
    ],
    right: [
      'Structured specifications',
      'Architecture-first mindset',
      'AI orchestration workflows',
      'Verification and debugging loops',
      'Production-ready engineering',
    ],
  },
  {
    type: 'content',
    title: 'Let’s Solve a Problem',
    content: [
      'Before writing code, let’s identify a real-world problem.',
      'What pain points do people around you face every day?',
      'What repetitive process can be simplified?',
      'What problem would YOU personally use a solution for?',
      'Today we are building an AI-powered group expense manager.',
    ],
  },
  {
    type: 'hero',
    title: 'Antigravity',
    subtitle:
      'Using AI-native workflows to move from idea → specification → architecture → deployment',
  },
  {
    type: 'content',
    title: 'Connect With Me',
    content: [
      'Scan the QR code to connect with me on LinkedIn.',
      'Follow along during the workshop.',
      'Ask questions, share ideas, and build together.',
    ],
    image: '/linkedinmy.png',
  },
  {
    type: 'content',
    title: 'Today’s Product',
    content: [
      'AI Personal Expense & Group Split Manager',
      'Voice-based expense input',
      'AI understands natural language',
      'Automatic expense categorization',
      'Group expense splitting',
      'Realtime balances and analytics',
    ],
  },
  {
    type: 'content',
    title: 'The Future of Engineering',
    content: [
      'The future developer is not the person who types the fastest.',
      'The future developer is the engineer who can orchestrate intelligence effectively.',
      'AI is not replacing engineering.',
      'AI is compressing implementation time.',
      'Engineering thinking becomes MORE valuable in the AI era.',
    ],
  },
];

export default function VibeEngineeringPresentation() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSlide = useCallback((index: number) => {
    if (index < 0 || index >= slides.length) return;
    const el = document.getElementById(`slide-${index}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const scrollHeight = target.scrollHeight - target.clientHeight;
    if (scrollHeight > 0) {
      const progress = (target.scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    }
  }, []);

  const handleProgressBarClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    const targetIndex = Math.min(
      Math.max(Math.round(percentage * (slides.length - 1)), 0),
      slides.length - 1
    );
    scrollToSlide(targetIndex);
  }, [scrollToSlide]);


  // Intersection Observer to keep activeSlide in sync with manual scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveSlide(index);
          }
        });
      },
      {
        root: null,
        threshold: 0.5,
      }
    );

    slides.forEach((_, index) => {
      const el = document.getElementById(`slide-${index}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA'
      ) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        if (activeSlide < slides.length - 1) {
          scrollToSlide(activeSlide + 1);
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        if (activeSlide > 0) {
          scrollToSlide(activeSlide - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSlide, scrollToSlide]);

  return (
    <div className="bg-background text-foreground h-screen overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth relative">
      {/* Custom styles for hidden scrollbar but keeping scrollability */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        /* Hide scrollbars for Chrome, Safari and Opera */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbars for IE, Edge and Firefox */
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>

      {/* Top Slide Progress Bar */}
      <div
        onClick={handleProgressBarClick}
        className="fixed top-0 left-0 w-full h-1.5 hover:h-3 bg-foreground/5 hover:bg-foreground/10 z-50 cursor-pointer transition-all duration-200"
        title="Click to navigate"
      >
        <div
          className="h-full bg-gradient-to-r from-teal-500 to-indigo-500 transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>


      {/* Workshop Logo & Theme Toggle Overlay */}
      <div className="fixed top-6 right-6 z-50 flex items-center gap-3">
        <div className="rounded-full border border-border bg-card/75 backdrop-blur-xl px-5 py-3 text-sm text-muted-foreground select-none shadow-md">
          Vibe Engineering Workshop
        </div>
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-border bg-card/75 backdrop-blur-xl hover:bg-accent text-foreground hover:scale-105 active:scale-95 transition-all duration-200 shadow-md"
          aria-label="Toggle theme"
        >
          {mounted ? (
            theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />
          ) : (
            <div className="w-5 h-5 rounded-full border-2 border-current border-t-transparent animate-spin" />
          )}
        </button>
      </div>

      {/* Sidebar Dots Navigation */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSlide(index)}
            className="group relative flex items-center justify-center p-1"
            aria-label={`Go to slide ${index + 1}`}
          >
            <span
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                activeSlide === index
                  ? 'bg-gradient-to-r from-teal-400 to-indigo-400 scale-125 shadow-[0_0_8px_rgba(45,212,191,0.6)]'
                  : 'bg-zinc-500/50 hover:bg-zinc-400 dark:bg-zinc-600 dark:hover:bg-zinc-400 hover:scale-110'
              }`}
            />
            <span className="absolute right-8 bg-card border border-border px-2 py-1 rounded text-xs text-card-foreground opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap shadow-md">
              Slide {index + 1}
            </span>
          </button>
        ))}
      </div>

      {/* Float Navigation Controls (Bottom Right) */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 md:left-auto md:right-8 md:translate-x-0 z-50 flex items-center gap-3 bg-card/75 backdrop-blur-xl border border-border px-4 py-2.5 rounded-full shadow-lg">
        <button
          onClick={() => scrollToSlide(activeSlide - 1)}
          disabled={activeSlide === 0}
          className="p-2 rounded-full hover:bg-accent active:bg-accent/80 disabled:opacity-20 disabled:pointer-events-none transition-all text-muted-foreground hover:text-foreground"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>

        <span className="text-xs font-semibold tracking-wider text-muted-foreground select-none px-1">
          {String(activeSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </span>

        <button
          onClick={() => scrollToSlide(activeSlide + 1)}
          disabled={activeSlide === slides.length - 1}
          className="p-2 rounded-full hover:bg-accent active:bg-accent/80 disabled:opacity-20 disabled:pointer-events-none transition-all text-muted-foreground hover:text-foreground"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Slides Container */}
      <div
        onScroll={handleScroll}
        className="h-screen overflow-y-auto snap-y snap-mandatory no-scrollbar"
      >
        {slides.map((slide, index) => (
          <section
            key={slide.title}
            id={`slide-${index}`}
            data-index={index}
            className="h-screen w-screen border-b border-border/50 px-6 md:px-24 py-8 md:py-12 flex items-center snap-start snap-always shrink-0 relative overflow-hidden"
          >
            <div className="max-w-7xl mx-auto w-full">
              {/* Slide Number */}
              <div className="text-zinc-200/60 dark:text-zinc-800/40 text-6xl md:text-8xl font-black leading-none mb-3 md:mb-5 select-none">
                {String(index + 1).padStart(2, '0')}
              </div>

              {slide.type === 'hero' && (
                <div>
                  <h1 className="text-4xl md:text-7xl font-black leading-tight max-w-6xl tracking-tight bg-gradient-to-r from-foreground via-foreground/80 to-foreground/55 bg-clip-text text-transparent">
                    {slide.title}
                  </h1>

                  <p className="text-xl md:text-3xl text-muted-foreground mt-6 md:mt-8 max-w-5xl leading-relaxed">
                    {slide.subtitle}
                  </p>
                </div>
              )}

              {slide.type === 'content' && (
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                  <div className="lg:col-span-7">
                    <h2 className="text-3xl md:text-5xl font-black leading-tight max-w-5xl text-foreground">
                      {slide.title}
                    </h2>

                    <div className="mt-6 md:mt-8 space-y-3">
                      {slide.content?.map((item) => (
                        <div
                          key={item}
                          className="rounded-xl border border-border/50 bg-card/40 hover:bg-accent/40 p-3 md:p-4 text-base md:text-lg text-muted-foreground hover:text-foreground leading-relaxed transition-all duration-300 shadow-sm"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-5 flex justify-center">
                    {slide.image ? (
                      <Image
                        src={slide.image}
                        alt="LinkedIn QR Code"
                        width={300}
                        height={300}
                        className="rounded-[1.5rem] border border-border bg-white p-4 w-full max-w-[260px] md:max-w-[300px] shadow-2xl transition-transform duration-500 hover:scale-105 dark:bg-zinc-100"
                      />
                    ) : (
                      <div className="rounded-[1.5rem] border border-border bg-gradient-to-br from-card to-background p-8 w-full h-[240px] md:h-[300px] flex items-center justify-center shadow-inner">
                        <div className="text-center">
                          <div className="text-6xl font-black text-zinc-300 dark:text-zinc-800">
                            {String(index + 1).padStart(2, '0')}
                          </div>
                          <div className="text-lg text-muted-foreground mt-4 max-w-xs leading-relaxed">
                            Engineering systems with AI instead of randomly prompting tools.
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {slide.type === 'comparison' && (
                <div>
                  <h2 className="text-3xl md:text-5xl font-black leading-tight max-w-5xl mb-6 md:mb-10 text-foreground">
                    {slide.title}
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6 md:gap-10">
                    <div className="rounded-xl border border-red-500/20 bg-red-500/5 hover:bg-red-500/10 transition-all p-6 md:p-8 shadow-sm">
                      <h3 className="text-2xl md:text-3xl font-black text-red-600 dark:text-red-400 mb-6">
                        {slide.leftTitle}
                      </h3>

                      <div className="space-y-3">
                        {slide.left?.map((item) => (
                          <div
                            key={item}
                            className="rounded-lg border border-border/30 bg-card/60 p-3 md:p-4 text-base md:text-lg text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-xl border border-green-500/20 bg-green-500/5 hover:bg-green-500/10 transition-all p-6 md:p-8 shadow-sm">
                      <h3 className="text-2xl md:text-3xl font-black text-emerald-600 dark:text-emerald-400 mb-6">
                        {slide.rightTitle}
                      </h3>

                      <div className="space-y-3">
                        {slide.right?.map((item) => (
                          <div
                            key={item}
                            className="rounded-lg border border-border/30 bg-card/60 p-3 md:p-4 text-base md:text-lg text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Clickable Bouncing Down Arrow to navigate to next slide */}
            {index < slides.length - 1 && (
              <button
                onClick={() => scrollToSlide(index + 1)}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40 hover:opacity-100 transition-opacity group cursor-pointer"
                aria-label="Next slide"
              >
                <span className="text-[10px] font-semibold tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">NEXT</span>
                <ArrowDown size={14} className="animate-bounce text-muted-foreground group-hover:text-foreground transition-colors" />
              </button>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
