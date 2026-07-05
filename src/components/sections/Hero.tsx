"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";
import MagneticButton from "@/components/ui/magnetic-button";
import FloatingSparkles from "@/components/ui/floating-sparkles";

const name = "Sada Kakarla";
const chars = name.split("");

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.6], [0, -60]);

  return (
    <motion.section
      ref={ref}
      style={{ opacity, y }}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-16 overflow-hidden"
    >
      <FloatingSparkles />

      {/* Content — split layout */}
      <div className="relative z-10 max-w-[1600px] w-full flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Left — text */}
        <div className="flex flex-col gap-5 flex-1">

          {/* Label — pill badge */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6, duration: 0.5 }}
            className="font-sans text-xs text-muted-foreground border border-border rounded-full px-4 py-1.5 w-fit tracking-wide uppercase"
          >
            San Francisco Bay Area
          </motion.p>

          {/* Name — character by character */}
          <h1 className="font-heading text-6xl md:text-8xl font-bold tracking-tight text-foreground leading-none">
            {chars.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 2.7 + i * 0.04,
                  duration: 0.4,
                  ease: "easeOut",
                }}
                className={char === " " ? "inline-block w-4" : "inline-block"}
              >
                {char}
              </motion.span>
            ))}
          </h1>

          {/* Script tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.1, duration: 0.5 }}
            className="font-script text-4xl md:text-5xl text-[color:var(--peach-text)] -mt-2"
          >
            Applied AI &amp; ML Engineer
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.4, duration: 0.6 }}
            className="font-sans text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            Building production ML systems — LLMs, agentic workflows,
            reinforcement learning, retrieval pipelines, and recommender systems at scale.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.7, duration: 0.5 }}
            className="flex items-center gap-4 mt-2"
          >
            <MagneticButton>
              <Link
                href="#experience"
                className="font-sans text-base font-medium bg-primary text-primary-foreground px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
              >
                My Work
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link
                href="#contact"
                className="font-sans text-base font-medium bg-[color:var(--peach)] text-[#1B3A35] px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
              >
                Get in Touch
              </Link>
            </MagneticButton>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.0, duration: 0.5 }}
            className="flex items-center gap-6 mt-2"
          >
            <a
              href="https://github.com/Sadakakarla"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs text-muted-foreground hover:text-primary transition-colors tracking-widest uppercase"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sada-kakarla/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs text-muted-foreground hover:text-primary transition-colors tracking-widest uppercase"
            >
              LinkedIn
            </a>
            <a
              href="mailto:sadaa.kakarla@gmail.com"
              className="font-sans text-xs text-muted-foreground hover:text-primary transition-colors tracking-widest uppercase"
            >
              Email
            </a>
            <a
              href="https://drive.google.com/file/d/1IrJIj-Yrv3u-_UaBzsz2cH5djYEsdICZ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs text-muted-foreground hover:text-primary transition-colors tracking-widest uppercase"
            >
              Resume
            </a>
          </motion.div>
        </div>

        {/* Right — photo with bold arch shape */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3.2, duration: 0.7, ease: "easeOut" }}
          className="relative flex-shrink-0 mt-16 md:mt-24 w-[340px] h-[500px] sm:w-[480px] sm:h-[640px] md:w-[560px] md:h-[78vh] md:max-h-[700px]"
        >
          {/* Sparkle accent near photo */}
          <motion.svg
            initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 3.0, duration: 0.5 }}
            viewBox="0 0 40 40"
            className="absolute -top-8 left-2 md:-top-10 md:left-6 w-9 h-9 md:w-12 md:h-12 text-primary z-20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M20 2v36M2 20h36M7 7l26 26M33 7L7 33" />
          </motion.svg>

          {/* Solid arch shape behind photo */}
          <div className="absolute top-0 right-[6%] w-[80%] h-[92%] rounded-t-full bg-[color:var(--gold)]" />
          {/* Teal quarter-circle bleeding off top-right corner */}
          <div className="absolute -top-14 -right-14 w-44 h-44 md:w-60 md:h-60 rounded-full bg-primary" />
          {/* Peach dot accent inside corner circle */}
          <div className="absolute top-2 right-6 md:top-4 md:right-10 w-4 h-4 md:w-5 md:h-5 rounded-full bg-[color:var(--peach)]" />

          {/* Photo — aligned to arch bounds */}
          <div className="absolute top-0 right-[6%] w-[80%] h-[92%] flex items-end justify-center z-10">
            <div className="w-[80%] h-[95%]">
              <Image
                src="/profile.png"
                alt="Sada Kakarla"
                width={560}
                height={760}
                className="object-cover object-bottom h-full w-full drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Floating sticky note */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: -4 }}
            transition={{ delay: 4.1, duration: 0.5 }}
            className="absolute bottom-12 -left-8 md:-left-14 w-56 md:w-64 bg-primary text-primary-foreground rounded-2xl px-6 py-5 shadow-xl z-20"
          >
            <p className="font-script text-2xl md:text-3xl leading-snug">
              Turning ideas into intelligent systems
            </p>
            <Heart size={18} className="mt-2 fill-current" />
          </motion.div>
        </motion.div>

      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.4, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-sans text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-primary opacity-60"
        />
      </motion.div>
    </motion.section>
  );
}
