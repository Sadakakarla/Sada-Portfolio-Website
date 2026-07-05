"use client";

import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const publications = [
  {
    id: "paper-1",
    title: "Deep Dive into Predictive Modeling for Autism Spectrum Disorder using Facial Features and Machine Learning",
    venue: "2024 International Conference on Communication, Computing and Internet of Things (IC3IoT) / IEEE",
    authors: "S. Kakarla, et al.",
    year: "2024",
    doi: "10.1109/IC3IoT60841.2024.10550416",
    description: "This paper proposes a low-compute video-based feature extraction pipeline for ASD prediction, comparing Logistic Regression, Decision Trees, and Neural Networks, with the Neural Network achieving the highest accuracy (99.8%) while also addressing the scarcity of public autism video datasets.",
    link: "https://ieeexplore.ieee.org/document/10550416",
  },
  {
    id: "paper-2",
    title: "Leukaemia: A Comparative Analysis of Deep Learning Models Using ALL Dataset",
    venue: "IEEE Recent Advances in Intelligent Computational Systems (RAICS)",
    authors: "S. Kakarla, et al.",
    year: "2024",
    doi: "https://doi.org/10.1109/RAICS61201.2024.10689761",
    description: "This paper presents a comparative analysis of Deep CNN models for automated identification and classification of leukaemia from microscopic white blood cell images using the ALL dataset, aiming to improve on slow, expertise-dependent manual pathology methods.",
    link: "https://ieeexplore.ieee.org/document/10689761",
  },
  {
    id: "paper-3",
    title: "Advancements in Al for Mental Health: Exploring ASD, ADHD and Schizophrenia, Video Datasets, and Future Directions",
    venue: "Computational Intelligence for Oncology and Neurologival Disorders Book (Chapter 1: page 3 - 15)",
    authors: "S. Kakarla, et al.",
    year: "2024",
    doi: "10.1201/9781003450153-2",
    description: "Published a comprehensive analysis evaluating state-of-the-art AI techniques and video datasets for detecting ASD, ADHD, and Schizophrenia to establish a roadmap for future automated mental health diagnostics.",
    link: "https://www.google.com/books/edition/Computational_Intelligence_for_Oncology/lRSNEQAAQBAJ?hl=en&gbpv=1&dq=COMPUTATIONAL%20INTELLIGENCE%20FOR%20ONCOLOGY%20AND%20NEUROLOGICAL%20DISORDERS&pg=PT25&printsec=frontcover",
  }
];

export default function Publications() {
  return (
    <SectionWrapper id="publications">
      <div className="flex flex-col gap-12">

        <div className="flex items-center gap-4">
          <span className="font-sans text-xs text-muted-foreground border border-border rounded-full px-4 py-1.5 tracking-wide uppercase">
            06. Publications
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
          What I've published<span className="text-[color:var(--peach-text)] dark:text-primary">.</span>
        </h2>

        <div className="flex flex-col gap-6">
          {publications.map((pub, i) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="border border-border bg-card rounded-2xl p-8 flex flex-col gap-4"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <div className="flex flex-col gap-1">
                  <h3 className="font-heading text-xl font-bold text-foreground">{pub.title}</h3>
                  <span className="font-script text-xl text-[color:var(--peach-text)]">{pub.venue}</span>
                  <span className="font-sans text-xs text-muted-foreground">{pub.authors}</span>
                  {pub.doi && (
                    <span className="font-sans text-xs text-muted-foreground">DOI: {pub.doi}</span>
                  )}
                </div>
                <span className="font-sans text-xs text-muted-foreground flex-shrink-0">{pub.year}</span>
              </div>

              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                {pub.description}
              </p>

              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-sans text-xs font-medium text-primary-foreground bg-primary hover:opacity-90 transition-opacity px-5 py-2.5 rounded-full w-fit"
              >
                <ExternalLink size={14} />
                View Paper
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </SectionWrapper>
  );
}
