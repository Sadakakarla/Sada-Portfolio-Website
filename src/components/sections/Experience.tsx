"use client";

import SectionWrapper from "./SectionWrapper";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { useEffect } from "react";

const experiences = [
  {
    id: "handshake",
    company: "Handshake",
    role: "AI Researcher",
    period: "Feb 2026 – Present",
    location: "Remote, USA",
    bullets: [
      "Architected a multi-step agentic coding benchmark, generating synthetic post-training data across 5+ frontier models and 30+ custom tasks with rubric-based milestone scoring to drive model improvements for leading AI labs.",
      "Built automated end-to-end Python evaluation pipelines for preference ranking of AI-generated code, replacing manual rubric-based evaluation and powering synthetic alignment data for SimPO/DPO post-training.",
      "Orchestrated scalable RLVR post-training simulations to optimize agent policies, combining veRL (PPO) and PyTorch TorchTitan (FSDP) to train models across interactive Gymnasium coding environments and verifying autonomous reasoning improvements via ablation studies.",
    ],
    tags: ["Agentic AI", "RLVR", "PPO", "veRL", "PyTorch", "SimPO/DPO", "Python"],
  },
  {
    id: "a2il",
    company: "Artificial Intelligence Innovation Lab (A2IL)",
    role: "Applied AI Intern",
    period: "Sep 2025 – Feb 2026",
    location: "Buffalo, NY",
    bullets: [
      "Engineered a multimodal AI agent to automate complex document-extraction workflows, combining MCP tool execution and SigLIP embeddings for large-scale visual reasoning to reduce hallucinations by 45% and improve intent classification by 20%.",
      "Built a retrieval/ranking system to extract document-image evidence, improving nDCG@10 by 14% with RQ-VAE, ColPali, and LambdaMART.",
      "Trained offline RL policy (CQL) and RLHF feedback reward model on 5K+ agent trajectories, lifting long-horizon task completion rate by 12%.",
    ],
    tags: ["Multimodal", "MCP", "SigLIP", "RQ-VAE", "ColPali", "Offline RL", "RLHF"],
  },
  {
    id: "onepay",
    company: "OnePay",
    role: "Machine Learning Engineer Intern",
    period: "Jun 2025 – Aug 2025",
    location: "New York, NY",
    bullets: [
      "Owned end-to-end development of a debit rewards recommendation system across a 50M transaction marketplace, optimizing for CTR/CVR objectives, using Two-Tower retrieval and MMoE ranking to lift NDCG@10 by 30% and reward redemption by 14% in A/B tests.",
      "Engineered 40+ behavioral and temporal features in PySpark for CTR/CVR prediction across users, merchants, and transaction patterns.",
      "Improved sparse and cold-start user recommendations over Collaborative Filtering baselines via FAISS and InfoNCE, lifting MRR by 4%.",
      "Identified a user support bottleneck and built an internal LangGraph AI agent for intent-aware retrieval, reducing repetitive queries by 27%.",
    ],
    tags: ["Two-Tower", "MMoE", "PySpark", "FAISS", "LangGraph", "RecSys"],
  },
  {
    id: "cisfcr",
    company: "Centre for Information Security, Digital Forensics and Cyber Resilience (C-ISFCR)",
    role: "AI/ML Engineer",
    period: "May 2022 – Jun 2024",
    location: "Bengaluru, India",
    bullets: [
      "Developed a GenAI document-intelligence system on AWS for case triage, building a RAG pipeline with OCR and context-aware chunking across 20K+ heterogeneous records (policy documents, scanned forms, images) to streamline case reviews using citation-backed evidence.",
      "Designed a multi-step LLM pipeline to classify intent and document type, route to specific departments, and retrieve similar historical cases across multimodal inputs, integrating confidence-threshold routing to escalate uncertain queries and reduce triage time by 28%.",
      "Architected a hybrid retrieval system for precise evidence extraction, combining dense (BGE-v1.5) and late-interaction (ColBERT) models via Reciprocal Rank Fusion (RRF) and cross-encoder re-ranking to achieve a 92% Recall@5, outperforming a BM25 baseline.",
      "Fine-tuned Llama via DPO/QLoRA on case-resolution pairs, achieving an 88% RAGAS pass rate across 1K+ evals for faithfulness & relevance.",
    ],
    tags: ["RAG", "AWS", "BGE-v1.5", "ColBERT", "DPO/QLoRA", "LLM"],
  },
  {
    id: "un-academic-impact",
    company: "United Nations Academic Impact (MCN)",
    role: "Software Engineer, AI/ML Systems",
    period: "Oct 2021 – Apr 2022",
    location: "Bengaluru, India",
    bullets: [
      "Led fine-tuning and deployment of Falcon 7B and Llama-2 via scalable LLM microservices (FastAPI, LangChain, LlamaIndex), increasing automated task completion by 24% for pediatric follow-up workflows.",
      "Engineered two GraphRAG pipelines on Neo4j/Cypher — one grounding ASD clinical guidance (WHO protocols, care pathways) to cut unsupported AI guidance by 31%, another querying a 50K-node ops graph to surface healthcare supply bottlenecks and capacity risks.",
      "Built production ML pipelines combining DeBERTa-v3 NER for unstructured log extraction with LightGBM forecasting on live Kafka streams and Airflow retraining, reducing surge-forecasting RMSE by 18% versus ARIMA baselines.",
      "Led clinician-aligned (BMCRI) evaluation framework design and built PHI-redacted, human-in-the-loop triage on AWS SageMaker — cutting unsupported guidance by 33% and improving urgent-case routing by 18%.",
    ],
    tags: ["Falcon 7B", "Llama-2", "GraphRAG", "Neo4j", "LangChain", "LightGBM", "Kafka"],
  },
];

function TimelineEntry({
  exp,
  index,
  isActive,
  onActive,
}: {
  exp: {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  tags: string[];
};
  index: number;
  isActive: boolean;
  onActive: (i: number) => void;
}) {
//   const ref = useRef<HTMLDivElement>(null);
//   const inView = useInView(ref, { margin: "-30% 0px -60% 0px" });

//   useEffect(() => {
    // if (inView) onActive(index);
//   }, [inView, index, onActive]);

  return (
    <div className="flex items-start gap-4 cursor-pointer" onClick={() => onActive(index)}>
      {/* Dot */}
      <div className="relative flex-shrink-0 mt-1.5">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
          viewport={{ once: true }}
          className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
            isActive
              ? "border-primary bg-primary shadow-[0_0_12px_rgba(27,107,92,0.5)]"
              : "border-border bg-background"
          }`}
        />
        {isActive && (
          <motion.div
            className="absolute inset-0 rounded-full bg-primary"
            animate={{ scale: [1, 2.2, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col gap-0.5 pb-70">
        <span
          className={`font-heading text-base font-bold transition-colors duration-300 ${
            isActive ? "text-foreground" : "text-muted-foreground"
          }`}
        >
          {exp.company}
        </span>
        <span
          className={`font-sans text-xs transition-colors duration-300 ${
            isActive ? "text-primary" : "text-muted-foreground"
          }`}
        >
          {exp.role}
        </span>
        <span className="font-sans text-xs text-muted-foreground">{exp.period}</span>
        <span className="font-sans text-xs text-muted-foreground">{exp.location}</span>
      </div>
    </div>
  );
}

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 70%", "end 30%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
        const n = experiences.length;
        let newIndex = 0;
        for (let i = 1; i < n; i++) {
        // const midpoint = ((i - 1) / (n - 1) + i / (n - 1)) / 2;
        // if (v >= midpoint) newIndex = i;
        const dotPos = i / n;
        if (v >= dotPos) newIndex = i;
        }
        setActiveIndex(newIndex);
    });
    return unsubscribe;
    }, [scrollYProgress]);

  return (
    <SectionWrapper id="experience">
      <div className="flex flex-col gap-12">

        <div className="flex items-center gap-4">
          <span className="font-sans text-xs text-muted-foreground border border-border rounded-full px-4 py-1.5 tracking-wide uppercase">
            03. Experience
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
          Where I've built<span className="text-primary">.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-15 items-start">

          {/* Left: Timeline */}
          <div ref={timelineRef} className="relative">
            <div className="absolute left-[5px] top-2 bottom-0 w-px bg-border" />
            <motion.div
              className="absolute left-[5px] top-2 w-px bg-primary origin-top"
              style={{ height: lineHeight }}
            />
            {experiences.map((exp, i) => (
              <TimelineEntry
                key={exp.id}
                exp={exp}
                index={i}
                isActive={activeIndex === i}
                onActive={setActiveIndex}
              />             
            ))}
          </div>
          

          {/* Right: Sticky detail */}
          <div className="md:sticky md:top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={experiences[activeIndex].id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="flex flex-col gap-6 border border-border bg-card p-8 rounded-2xl"
              >
                <div className="flex flex-col gap-1">
                  <span className="font-sans text-xs text-primary uppercase tracking-widest">
                    {experiences[activeIndex].period} · {experiences[activeIndex].location}
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-foreground">
                    {experiences[activeIndex].role}
                  </h3>
                  <span className="font-script text-xl text-[color:var(--peach-text)]">
                    {experiences[activeIndex].company}
                  </span>
                </div>

                <ul className="flex flex-col gap-3">
                  {experiences[activeIndex].bullets.map((b, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07 }}
                      className="flex items-start gap-3 font-sans text-sm text-muted-foreground leading-relaxed"
                    >
                      <span className="text-primary mt-1 flex-shrink-0">▸</span>
                      {b}
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {experiences[activeIndex].tags.map((tag, ti) => (
                    <span
                      key={tag}
                      className="font-sans text-xs px-3 py-1 rounded-full"
                      style={
                        ti % 2 === 0
                          ? { color: "var(--peach-text)", border: "1px solid color-mix(in srgb, var(--peach) 40%, transparent)", background: "color-mix(in srgb, var(--peach) 8%, transparent)" }
                          : { color: "var(--gold-text)", border: "1px solid color-mix(in srgb, var(--gold) 45%, transparent)", background: "color-mix(in srgb, var(--gold) 12%, transparent)" }
                      }
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}