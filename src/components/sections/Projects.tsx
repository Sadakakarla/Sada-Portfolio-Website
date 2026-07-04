"use client";

import SectionWrapper from "./SectionWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
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
  const [activeId, setActiveId] = useState(projects[0].id);
  const active = projects.find((p) => p.id === activeId)!;

  return (
    <SectionWrapper id="projects">
      <div className="flex flex-col gap-12">

        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-primary tracking-[0.3em] uppercase">04. Projects</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
          Ideas turned into systems<span className="text-primary">.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_500px] gap-10 items-start">

          {/* Left: Project Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projects.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                onClick={() => setActiveId(p.id)}
                className={`cursor-pointer rounded-xl border p-5 flex flex-col gap-3 transition-all duration-300 ${
                  activeId === p.id
                    ? "border-primary bg-primary/5 shadow-[0_0_20px_rgba(109,40,217,0.2)]"
                    : "border-border bg-card hover:border-primary/40"
                }`}
              >
                <div className="flex flex-col gap-1">
                  <span className="font-heading text-sm font-bold text-foreground">{p.name}</span>
                  <span className="font-mono text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                    {p.tagline}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {p.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] text-primary border border-primary/30 px-2 py-0.5 rounded-full bg-primary/5"
                    >
                      {tag}
                    </span>
                  ))}
                  {p.tags.length > 3 && (
                    <span className="font-mono text-[10px] text-muted-foreground px-2 py-0.5">
                      +{p.tags.length - 3}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Sticky Detail Panel */}
          <div className="md:sticky md:top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="flex flex-col gap-6 border border-border bg-card p-8 rounded-2xl"
              >
                <div className="flex flex-col gap-1">
                  <h3 className="font-heading text-2xl font-bold text-foreground">{active.name}</h3>
                  <span className="font-mono text-xs text-primary leading-relaxed">{active.tagline}</span>
                </div>

                <ul className="flex flex-col gap-3">
                  {active.bullets.map((b, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07 }}
                      className="flex items-start gap-3 font-mono text-sm text-muted-foreground leading-relaxed"
                    >
                      <span className="text-primary mt-1 flex-shrink-0">▸</span>
                      {b}
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {active.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs text-primary border border-primary/30 px-3 py-1 rounded-full bg-primary/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                    href={active.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-primary border border-border hover:border-primary/50 px-4 py-2 rounded-lg transition-all duration-200 w-fit"
                    >
                    <SiGithub size={14} />
                    View on GitHub
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}