"use client";

import SectionWrapper from "./SectionWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SiGithub } from "@icons-pack/react-simple-icons";

const projects = [
  {
    id: "inferroute",
    name: "InferRoute",
    tagline: "Multi-Provider LLM Inference Gateway",
    bullets: [
      "Built a Go-based inference gateway for long-horizon agentic workflows, routing requests across 6 LLM providers using cached latency, cost, context-window, and tool-use metadata with sub-10ms routing overhead.",
      "Scaled 5K+ concurrent long-running agent streams with failover, circuit breakers, Redis coordination, Kafka events & execution observability.",
    ],
    tags: ["Go", "gRPC", "Redis", "Kafka", "Docker", "Kubernetes", "AWS EKS", "OpenTelemetry"],
    github: "#",
  },
  {
    id: "to3d",
    name: "To3D",
    tagline: "Monocular ViT 3D Scene Reconstruction",
    bullets: [
      "Built a multi-stage perception pipeline using ResNet object detection and ViT depth estimation, converting single images into point clouds, meshes, and voxel grids with 85% mAP on object localization.",
      "Integrated Llama-Mesh for language-driven spatial reasoning over reconstructed 3D scenes, using geometric tool calls for distance, proximity, and occlusion checks to answer 75% of complex spatial queries correctly.",
    ],
    tags: ["ResNet", "ViT", "Llama-Mesh", "Point Cloud", "Python"],
    github: "#",
  },
  {
    id: "glucochat",
    name: "GlucoChat",
    tagline: "Bilingual Conversational AI Assistant for Diabetic Care",
    bullets: [
      "Designed a GraphRAG QA assistant over a medical knowledge graph and NIH biomedical corpora to answer grounded medical knowledge queries, improving multi-hop answer accuracy by 30% with BGE-M3 retrieval and HyDE query rewriting.",
      "Reduced unsafe medical recommendations by 32% with an XGBoost safety pipeline, delivered through a Next.js/TypeScript interface.",
    ],
    tags: ["GraphRAG", "BGE-M3", "HyDE", "XGBoost", "Next.js", "TypeScript"],
    github: "#",
  },
  {
    id: "powersight",
    name: "PowerSight",
    tagline: "Temporal Fusion Transformers for Renewable Energy Forecasting",
    bullets: [
      "Developed a forecasting system for hourly electricity load across Germany and the UK, integrating 5+ years of ENTSO-E grid data with weather signals from the Open-Meteo API.",
      "Trained a 1.4M-parameter Temporal Fusion Transformer in PyTorch Lightning for 24-hour multi-horizon load forecasting, achieving 3.1% validation SMAPE with LSTM/ARIMA baselines, interpretable attention, variable selection, and a Streamlit dashboard for visualization.",
    ],
    tags: ["PyTorch", "LSTM", "scikit-learn", "XGBoost", "Open-Meteo API", "Streamlit"],
    github: "#",
  },
  {
    id: "negotiableai",
    name: "NegotiableAI",
    tagline: "Hierarchical RL Agent for Autonomous Deal Negotiation",
    bullets: [
      "Developed a hierarchical RL negotiation agent via LangGraph, pairing a Double DQN intent-selector with a Qwen-2.5 7B dialogue model trained via PPO self-play and RLHF reward modeling, boosting agreement rates from 40% to 60%.",
      "Engineered Pydantic guardrails across Ray-distributed simulations to enforce pricing/discount rules, lifting constraint compliance by 18%.",
    ],
    tags: ["Python", "LangGraph", "PyTorch", "Ray", "PPO", "Double DQN"],
    github: "#",
  },
  {
    id: "autismdiagnose",
    name: "AutismDiagnose",
    tagline: "Multi-Modal VQA System for Early Autism Spectrum Disorder Analysis",
    bullets: [
      "Architected a Visual Question Answering system to analyze child interaction videos for early ASD indicators by combining facial expression recognition, gaze patterns, visual behavioral cues, and textual question-response signals.",
      "Engineered a temporal deep learning pipeline using a dual LSTM to model long-term behavioral dependencies across video sequences, achieving 98% predictive accuracy and earned Best Capstone Project recognition for its clinical and social impact.",
    ],
    tags: ["Python", "PyTorch", "OpenCV", "LSTM", "BERT", "CNNs"],
    github: "#",
  },
  {
    id: "eagleeye",
    name: "EagleEye",
    tagline: "Edge Vision System for Drone & Traffic Anomaly Detection",
    bullets: [
      "Built a real-time edge computer vision pipeline to detect, track, and classify vehicles, pedestrians, drones, and anomalous motion patterns from live or recorded video streams using YOLO, OpenCV, and ByteTrack/DeepSORT.",
      "Hardened edge deployment with robustness testing for low light, motion blur, dropped frames, and occlusion, then served the model through FastAPI and ONNX/TensorRT with latency monitoring and model versioning.",
    ],
    tags: ["YOLO", "OpenCV", "ByteTrack", "FastAPI", "Docker", "ONNX/TensorRT"],
    github: "#",
  },
];

export default function Projects() {
  const [activeId, setActiveId] = useState("");

  return (
    <SectionWrapper id="projects">
      <div className="flex flex-col gap-12">

        <div className="flex items-center gap-4">
          <span className="font-sans text-xs text-muted-foreground border border-border rounded-full px-4 py-1.5 tracking-wide uppercase">
            04. Projects
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
          Ideas turned into systems<span className="text-[color:var(--peach)]">.</span>
        </h2>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => {
            const isActive = activeId === p.id;
            return (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ layout: { duration: 0.4, ease: "easeInOut" }, delay: i * 0.06 }}
                viewport={{ once: true }}
                onClick={() => setActiveId(isActive ? "" : p.id)}
                whileHover={!isActive ? { rotate: i % 2 === 0 ? -1 : 1, y: -2 } : {}}
                className={`cursor-pointer rounded-2xl border p-5 flex flex-col gap-4 transition-colors duration-300 ${
                  isActive ? "sm:col-span-2 lg:col-span-3" : ""
                } ${
                  isActive
                    ? "border-primary bg-card shadow-[0_0_20px_rgba(27,107,92,0.18)]"
                    : "border-border bg-card hover:border-primary/40"
                }`}
              >
                <motion.div layout="position" className="flex flex-col gap-1">
                  <span className="font-heading text-base font-bold text-foreground">{p.name}</span>
                  {isActive ? (
                    <span className="font-script text-xl text-[color:var(--peach)] leading-relaxed">{p.tagline}</span>
                  ) : (
                    <span className="font-sans text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                      {p.tagline}
                    </span>
                  )}
                </motion.div>

                <AnimatePresence>
                  {isActive && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col gap-3 overflow-hidden"
                    >
                      {p.bullets.map((b, bi) => (
                        <li key={bi} className="flex items-start gap-3 font-sans text-sm text-muted-foreground leading-relaxed">
                          <span className="text-primary mt-1 flex-shrink-0">▸</span>
                          {b}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>

                <motion.div layout="position" className="flex flex-wrap gap-1.5 mt-auto">
                  {(isActive ? p.tags : p.tags.slice(0, 3)).map((tag, ti) => (
                    <span
                      key={tag}
                      className="font-sans text-[10px] px-2 py-0.5 rounded-full"
                      style={
                        ti % 2 === 0
                          ? { color: "var(--peach)", border: "1px solid color-mix(in srgb, var(--peach) 40%, transparent)", background: "color-mix(in srgb, var(--peach) 8%, transparent)" }
                          : { color: "var(--gold)", border: "1px solid color-mix(in srgb, var(--gold) 45%, transparent)", background: "color-mix(in srgb, var(--gold) 12%, transparent)" }
                      }
                    >
                      {tag}
                    </span>
                  ))}
                  {!isActive && p.tags.length > 3 && (
                    <span className="font-sans text-[10px] text-muted-foreground px-2 py-0.5">
                      +{p.tags.length - 3}
                    </span>
                  )}
                </motion.div>

                <AnimatePresence>
                  {isActive && (
                    <motion.a
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 font-sans text-xs font-medium text-primary-foreground bg-primary hover:opacity-90 transition-opacity px-5 py-2.5 rounded-full w-fit"
                    >
                      <SiGithub size={14} />
                      View on GitHub
                    </motion.a>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}