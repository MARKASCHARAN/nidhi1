import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Activity,
  Github, Monitor, Trophy,
  Bug, ArrowRight
} from "lucide-react";

// --- PROJECT DATA ---
const projects = [
  {
    id: "CL-AI-00",
    title: 'CoughLens AI',
    category: 'Video Analytics / ML',
    image: '/assets/coughlens.png',
    description: 'Voice-driven diagnostic assistant for Asthma/Pneumonia detection using YAMNet and OpenAI Realtime Voice API.',
    tags: ['FastAPI', 'YAMNet', 'IPFS'],
    award: "Multilingual Respiratory Screening",
    links: { github: "https://github.com/MARKASCHARAN/coughlens-ai", demo: "https://coughlens-ai.vercel.app" }
  },
  {
    id: "SM-AI-01",
    title: 'SafeMeds AI',
    category: 'LLM / Healthcare',
    image: '/assets/safemeds.png',
    description: '1st Runner-Up Hackathon Winner. Clinical tool using LLaMA3-8B for real-time drug interaction safety analysis.',
    tags: ['LLaMA3', 'AWS EC2', 'Groq API'],
    award: "1st Runner-Up | AI/ML Hackathon 2.0",
    links: { github: "https://github.com/tech-nidhi/safemeds-frontend", demo: "http://www.safemedss.me/" }
  },
  {
    id: "ACT-02",
    title: 'AWS Cost Tracker',
    category: 'IaC / DevOps',
    image: '/assets/cost_tracker.jpg',
    description: 'Terraform-based solution for AWS Budgets and SNS alerts to enable proactive cloud cost management.',
    tags: ['Terraform', 'HCL', 'AWS SNS'],
    links: { github: "https://github.com/tech-nidhi/AWS-COST-TRACKER", demo: "#" }
  },
  {
    id: "WS-03",
    title: 'Scalable Scraper',
    category: 'Automation / Cloud',
    image: '/assets/Web-Scraping-at-Scale.jpg',
    description: 'Containerized bot on ECS Fargate orchestrated with Step Functions. Crawls 10k+ pages daily with structured data storage in Aurora.',
    tags: ['Docker', 'ECS Fargate', 'Step Functions', 'Aurora'],
    links: { github: "#", demo: "#" }
  }
];

// --- HELPER COMPONENT: LOG STREAM ---
const LogStream = ({ active, type }) => {
  const [logs, setLogs] = useState(["[SYSTEM] Ready", "[AUTH] Secure link established"]);
  const msgs = type === "WS-03"
    ? ["CRAWLING_PAGE_842...", "PARSING_TABLE_DATA", "AURORA_WRITE_SUCCESS", "NEXT_JOB_QUEUED"]
    : ["FETCH_SUCCESS", "LLaMA_INF_200", "S3_SYNC_COMPLETE", "EC2_HEALTH_OK"];

  useEffect(() => {
    if (!active) return;
    const interval = setInterval(() => {
      setLogs(p => [...p.slice(-3), `[${new Date().toLocaleTimeString()}] ${msgs[Math.floor(Math.random() * msgs.length)]}`]);
    }, 2000);
    return () => clearInterval(interval);
  }, [active]);

  return (
    <div className="font-mono text-[9px] text-neutral-500 space-y-1">
      {logs.map((log, i) => (
        <div key={i} className="flex gap-2">
          <span className="text-blue-900">{'>'}</span>{log}
        </div>
      ))}
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-32 px-4 md:px-8 relative bg-[#020202]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header - More compact on mobile */}
        <div className="mb-12 md:mb-32 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/10 pb-6 md:pb-10 gap-4">
          <div className="w-full">
            <h2 className="text-3xl sm:text-4xl md:text-7xl font-black uppercase tracking-tighter text-white">Project_Manifest</h2>
            <p className="text-neutral-600 font-mono text-[9px] md:text-xs mt-2 uppercase tracking-[0.2em] italic">Production grade cloud solutions</p>
          </div>
          <div className="text-right font-mono text-[9px] text-neutral-800 hidden md:block uppercase leading-loose">
            Security: AES-256 <br /> Region: Multi-Region
          </div>
        </div>

        <div className="space-y-16 md:space-y-48">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 md:gap-20 group`}
            >

              {/* Visual Side */}
              <div className="relative w-full lg:w-[58%] aspect-[16/10] sm:aspect-video border border-white/5 overflow-hidden bg-neutral-900 rounded-lg">
                {/* Award Badge - Scaled for mobile */}
                {p.award && (
                  <div className="absolute top-0 right-0 z-20 bg-emerald-600 text-white px-2 py-1 md:px-4 md:py-2 font-mono text-[8px] md:text-[10px] font-bold flex items-center gap-1.5 md:gap-2 animate-pulse uppercase">
                    <Trophy size={12} className="md:w-[14px]" /> {p.award}
                  </div>
                )}

                <img 
                  src={p.image} 
                  className="w-full h-full object-cover grayscale opacity-60 md:opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-in-out" 
                  alt={p.title} 
                />
                <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-transparent transition-colors duration-700" />

                {/* PROJECT CODE WATERMARK */}
                <div className="absolute top-3 left-3 md:top-4 md:left-4 z-20 font-mono text-[8px] md:text-[10px] text-white/40 bg-black/80 px-2 py-0.5 border border-white/10">
                  ID: {p.id}
                </div>

                {/* Console Overlay - Adjusted for better touch interaction and tablet view */}
                <div className="hidden sm:block absolute bottom-0 inset-x-0 p-4 md:p-6 bg-black/90 backdrop-blur-xl translate-y-full group-hover:translate-y-0 transition-transform duration-500 border-t border-white/10">
                  <LogStream active={true} type={p.id} />
                </div>
              </div>

              {/* Info Side */}
              <div className="w-full lg:w-[42%] flex flex-col justify-center">
                <div className="space-y-4 md:space-y-6">
                  
                  {/* Category & Icon */}
                  <div className="flex items-center gap-2 md:gap-3 text-blue-500 font-mono text-[9px] md:text-xs uppercase tracking-[0.3em] font-bold">
                    {p.id === "WS-03" ? <Bug size={14} /> : <Activity size={14} />}
                    <span className="opacity-80">{p.category}</span>
                  </div>

                  {/* Title - Responsive size */}
                  <h3 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter group-hover:text-blue-500 transition-colors duration-500 leading-none text-white">
                    {p.title}
                  </h3>

                  {/* Description - Adjusted padding and size */}
                  <p className="text-neutral-400 text-xs sm:text-sm md:text-lg font-light leading-relaxed border-l-2 border-blue-900/30 pl-4 md:pl-8 italic">
                    {p.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 md:gap-2 pt-2">
                    {p.tags.map((t, idx) => (
                      <span key={idx} className="text-[8px] md:text-[10px] font-mono border border-white/5 px-2 py-1 md:px-3 md:py-1.5 uppercase text-neutral-500 hover:text-blue-400 hover:border-blue-500 transition-all bg-white/[0.02] rounded-sm">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links - Larger touch targets for mobile */}
                  <div className="flex flex-row gap-6 md:gap-10 pt-6 md:pt-10 border-t border-white/5">
                    <a 
                      href={p.links.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 text-[10px] md:text-xs font-black uppercase tracking-widest text-neutral-400 hover:text-white transition-all group/link"
                    >
                      <Github size={18} className="group-hover/link:scale-110 transition-transform" /> 
                      <span>Source</span>
                    </a>
                    {p.links.demo !== "#" && (
                      <a 
                        href={p.links.demo} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-2 text-[10px] md:text-xs font-black uppercase tracking-widest text-neutral-400 hover:text-blue-500 transition-all group/link"
                      >
                        <Monitor size={18} className="group-hover/link:scale-110 transition-transform" /> 
                        <span>Live_View</span>
                      </a>
                    )}
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;