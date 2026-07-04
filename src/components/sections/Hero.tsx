"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";
import MagneticButton from "@/components/ui/magnetic-button";

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
      className="relative min-h-screen flex flex-col items-center justify-center px-8 overflow-hidden"
    >
      {/* Content — split layout */}
      <div className="relative z-10 max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12">

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
          <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-none">
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
            className="font-script text-3xl md:text-4xl text-[color:var(--peach)] -mt-2"
          >
            AI Researcher &amp; ML Engineer
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.4, duration: 0.6 }}
            className="font-sans text-sm md:text-base text-muted-foreground max-w-xl leading-relaxed"
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
                className="font-sans text-sm font-medium bg-primary text-primary-foreground px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
              >
                My Work
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link
                href="#contact"
                className="font-sans text-sm font-medium bg-[color:var(--peach)] text-[#1B3A35] px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
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
              href="https://drive.google.com/file/d/1GfZDbRwEOTZTGZUYbyV49pffLSjh4JrJ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs text-muted-foreground hover:text-primary transition-colors tracking-widest uppercase"
            >
              Resume
            </a>
          </motion.div>
        </div>

        {/* Right — photo with blob shapes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3.2, duration: 0.7, ease: "easeOut" }}
          className="relative flex-shrink-0 w-72 h-[480px] md:w-[360px] md:h-[560px]"
        >
          {/* Blob shapes behind photo */}
          <div className="absolute -top-6 -left-6 w-[85%] h-[85%] rounded-[45%_55%_60%_40%/50%_45%_55%_50%] bg-primary opacity-25 blur-2xl" />
          <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-[color:var(--peach)] opacity-30 blur-2xl" />
          <div className="absolute top-4 right-4 w-56 h-56 md:w-64 md:h-64 rounded-[42%_58%_55%_45%/55%_42%_58%_45%] bg-primary/15 border border-primary/20" />

          {/* Photo — cutout, no clipping mask */}
          <div className="absolute inset-0 flex items-end justify-center z-10">
            <Image
              src="/profile.png"
              alt="Sada Kakarla"
              width={340}
              height={520}
              className="object-contain object-bottom max-h-full w-auto drop-shadow-2xl"
              priority
            />
          </div>

          {/* Sticker badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: -8 }}
            transition={{ delay: 3.9, duration: 0.5 }}
            className="absolute -top-3 -right-3 md:top-2 md:right-0 w-24 h-24 rounded-full bg-background border-2 border-primary flex flex-col items-center justify-center gap-1 z-20 shadow-lg"
          >
            <span className="font-sans text-[9px] font-bold text-primary uppercase tracking-wide text-center leading-tight px-2">
              Open to Work
            </span>
          </motion.div>

          {/* Floating sticky note */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: -4 }}
            transition={{ delay: 4.1, duration: 0.5 }}
            className="absolute bottom-6 -left-8 md:-left-10 w-44 bg-primary text-primary-foreground rounded-2xl px-4 py-3 shadow-xl z-20"
          >
            <p className="font-script text-lg leading-snug">
              Turning ideas into intelligent systems
            </p>
            <Heart size={14} className="mt-1 fill-current" />
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
