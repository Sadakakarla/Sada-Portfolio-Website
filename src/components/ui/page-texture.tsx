"use client";

import { motion } from "framer-motion";

const GRAIN_SVG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='200' height='200' filter='url(#n)'/></svg>`
  );

type Doodle = {
  top: string;
  left: string;
  size: number;
  color: string;
  rotate: number;
  kind: "sparkle" | "plus" | "ring" | "squiggle";
  duration: number;
  delay: number;
};

const doodles: Doodle[] = [
  { top: "4%", left: "6%", size: 34, color: "var(--primary)", rotate: -12, kind: "sparkle", duration: 9, delay: 0 },
  { top: "9%", left: "90%", size: 26, color: "var(--primary)", rotate: 20, kind: "plus", duration: 8, delay: 1 },
  { top: "18%", left: "46%", size: 24, color: "var(--peach)", rotate: 8, kind: "ring", duration: 10, delay: 0.5 },
  { top: "27%", left: "8%", size: 30, color: "var(--primary)", rotate: -6, kind: "squiggle", duration: 8.5, delay: 1.6 },
  { top: "34%", left: "86%", size: 32, color: "var(--primary)", rotate: 15, kind: "sparkle", duration: 9.5, delay: 0.8 },
  { top: "43%", left: "4%", size: 26, color: "var(--peach)", rotate: -18, kind: "plus", duration: 9, delay: 2 },
  { top: "51%", left: "92%", size: 28, color: "var(--primary)", rotate: 10, kind: "ring", duration: 8.2, delay: 1.2 },
  { top: "60%", left: "48%", size: 34, color: "var(--primary)", rotate: -8, kind: "squiggle", duration: 10.5, delay: 0.3 },
  { top: "68%", left: "6%", size: 28, color: "var(--peach)", rotate: 22, kind: "sparkle", duration: 8.8, delay: 1.8 },
  { top: "76%", left: "88%", size: 24, color: "var(--primary)", rotate: -14, kind: "plus", duration: 9.2, delay: 0.6 },
  { top: "84%", left: "42%", size: 30, color: "var(--peach)", rotate: 12, kind: "ring", duration: 9.8, delay: 1.4 },
  { top: "92%", left: "10%", size: 28, color: "var(--primary)", rotate: -20, kind: "squiggle", duration: 8.6, delay: 2.2 },
  { top: "2%", left: "60%", size: 22, color: "var(--peach)", rotate: 25, kind: "plus", duration: 9.4, delay: 1.3 },
  { top: "13%", left: "20%", size: 26, color: "var(--primary)", rotate: -10, kind: "ring", duration: 8.7, delay: 0.4 },
  { top: "22%", left: "70%", size: 28, color: "var(--primary)", rotate: 14, kind: "sparkle", duration: 9.9, delay: 1.9 },
  { top: "31%", left: "30%", size: 22, color: "var(--peach)", rotate: -22, kind: "squiggle", duration: 8.3, delay: 0.9 },
  { top: "39%", left: "64%", size: 26, color: "var(--primary)", rotate: 18, kind: "plus", duration: 9.6, delay: 1.7 },
  { top: "47%", left: "24%", size: 30, color: "var(--primary)", rotate: -6, kind: "ring", duration: 8.9, delay: 0.2 },
  { top: "56%", left: "76%", size: 24, color: "var(--peach)", rotate: 10, kind: "sparkle", duration: 9.1, delay: 1.5 },
  { top: "64%", left: "30%", size: 28, color: "var(--primary)", rotate: -16, kind: "squiggle", duration: 8.4, delay: 0.7 },
  { top: "72%", left: "60%", size: 24, color: "var(--primary)", rotate: 20, kind: "plus", duration: 9.7, delay: 2.1 },
  { top: "80%", left: "22%", size: 26, color: "var(--peach)", rotate: -12, kind: "ring", duration: 8.1, delay: 1.1 },
  { top: "88%", left: "68%", size: 30, color: "var(--primary)", rotate: 8, kind: "sparkle", duration: 9.3, delay: 0.5 },
  { top: "96%", left: "36%", size: 22, color: "var(--primary)", rotate: -24, kind: "squiggle", duration: 8.8, delay: 1.6 },
  { top: "6%", left: "34%", size: 24, color: "var(--peach)", rotate: 16, kind: "plus", duration: 9.0, delay: 0.3 },
  { top: "11%", left: "76%", size: 28, color: "var(--primary)", rotate: -20, kind: "ring", duration: 8.6, delay: 1.9 },
  { top: "16%", left: "58%", size: 22, color: "var(--primary)", rotate: 10, kind: "sparkle", duration: 9.8, delay: 0.6 },
  { top: "21%", left: "4%", size: 26, color: "var(--peach)", rotate: -14, kind: "squiggle", duration: 8.4, delay: 2.0 },
  { top: "24%", left: "94%", size: 24, color: "var(--primary)", rotate: 18, kind: "plus", duration: 9.3, delay: 1.0 },
  { top: "29%", left: "40%", size: 30, color: "var(--primary)", rotate: -8, kind: "ring", duration: 8.9, delay: 0.2 },
  { top: "36%", left: "16%", size: 22, color: "var(--peach)", rotate: 22, kind: "sparkle", duration: 9.5, delay: 1.4 },
  { top: "40%", left: "48%", size: 26, color: "var(--primary)", rotate: -18, kind: "squiggle", duration: 8.2, delay: 0.8 },
  { top: "45%", left: "80%", size: 24, color: "var(--primary)", rotate: 12, kind: "plus", duration: 9.7, delay: 2.2 },
  { top: "49%", left: "12%", size: 28, color: "var(--peach)", rotate: -10, kind: "ring", duration: 8.7, delay: 0.4 },
  { top: "54%", left: "60%", size: 22, color: "var(--primary)", rotate: 20, kind: "sparkle", duration: 9.2, delay: 1.7 },
  { top: "58%", left: "36%", size: 26, color: "var(--primary)", rotate: -16, kind: "squiggle", duration: 8.5, delay: 0.5 },
  { top: "62%", left: "94%", size: 24, color: "var(--peach)", rotate: 14, kind: "plus", duration: 9.9, delay: 1.2 },
  { top: "66%", left: "20%", size: 28, color: "var(--primary)", rotate: -22, kind: "ring", duration: 8.3, delay: 0.9 },
  { top: "70%", left: "42%", size: 22, color: "var(--primary)", rotate: 8, kind: "sparkle", duration: 9.6, delay: 1.8 },
  { top: "74%", left: "78%", size: 26, color: "var(--peach)", rotate: -12, kind: "squiggle", duration: 8.1, delay: 0.6 },
  { top: "78%", left: "8%", size: 24, color: "var(--primary)", rotate: 24, kind: "plus", duration: 9.4, delay: 2.1 },
  { top: "82%", left: "56%", size: 28, color: "var(--primary)", rotate: -14, kind: "ring", duration: 8.8, delay: 1.0 },
  { top: "86%", left: "30%", size: 22, color: "var(--peach)", rotate: 18, kind: "sparkle", duration: 9.1, delay: 0.3 },
  { top: "90%", left: "84%", size: 26, color: "var(--primary)", rotate: -8, kind: "squiggle", duration: 8.6, delay: 1.5 },
  { top: "94%", left: "50%", size: 24, color: "var(--primary)", rotate: 20, kind: "plus", duration: 9.8, delay: 0.7 },
  { top: "98%", left: "70%", size: 28, color: "var(--peach)", rotate: -18, kind: "ring", duration: 8.4, delay: 1.9 },
  { top: "7%", left: "12%", size: 22, color: "var(--primary)", rotate: 12, kind: "sparkle", duration: 9.3, delay: 0.4 },
  { top: "15%", left: "88%", size: 26, color: "var(--primary)", rotate: -20, kind: "squiggle", duration: 8.9, delay: 1.3 },
];

const KINDS: Doodle["kind"][] = ["sparkle", "plus", "ring", "squiggle"];
const COLORS = ["var(--primary)", "var(--primary)", "var(--peach)"];

const extraDoodles: Doodle[] = Array.from({ length: 25 }, (_, i) => {
  const n = i + 1;
  return {
    top: `${(n * 37) % 100}%`,
    left: `${(n * 53) % 100}%`,
    size: 22 + ((n * 7) % 12),
    color: COLORS[n % COLORS.length],
    rotate: ((n * 29) % 40) - 20,
    kind: KINDS[n % KINDS.length],
    duration: 8 + ((n * 3) % 20) / 10,
    delay: (n % 12) / 5,
  };
});

doodles.push(...extraDoodles);

function DoodleIcon({ kind, size, color }: { kind: Doodle["kind"]; size: number; color: string }) {
  const common = {
    width: size,
    height: size,
    fill: "none" as const,
    stroke: color,
    strokeWidth: 2.4,
    strokeLinecap: "round" as const,
  };
  if (kind === "sparkle") {
    return (
      <svg viewBox="0 0 40 40" {...common}>
        <path d="M20 4v32M4 20h32M9 9l22 22M31 9L9 31" />
      </svg>
    );
  }
  if (kind === "plus") {
    return (
      <svg viewBox="0 0 40 40" {...common}>
        <path d="M20 6v28M6 20h28" />
      </svg>
    );
  }
  if (kind === "ring") {
    return (
      <svg viewBox="0 0 40 40" {...common}>
        <circle cx="20" cy="20" r="13" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 40 20" {...common}>
      <path d="M2 10 Q10 2 20 10 T38 10" />
    </svg>
  );
}

export function GrainOverlay() {
  return (
    <div
      className="fixed inset-0 z-40 pointer-events-none opacity-[0.22] mix-blend-overlay"
      style={{ backgroundImage: `url("${GRAIN_SVG}")`, backgroundSize: "200px 200px", backgroundRepeat: "repeat" }}
    />
  );
}

export function DoodleField() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {doodles.map((d, i) => (
        <motion.div
          key={i}
          className="absolute opacity-40"
          style={{ top: d.top, left: d.left, rotate: d.rotate }}
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: d.duration, delay: d.delay, repeat: Infinity, ease: "easeInOut" }}
        >
          <DoodleIcon kind={d.kind} size={d.size} color={d.color} />
        </motion.div>
      ))}
    </div>
  );
}
