import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Cpu, Database, ShieldCheck, ChartLineUp, Coins } from "@phosphor-icons/react";

const expertise = [
  { 
    icon: Cloud, 
    title: 'Cloud Architecture', 
    desc: 'High-availability multi-AZ systems.', 
    color: '#3b82f6', 
    accent: 'bg-blue-500/20' 
  },
  { 
    icon: Cpu, 
    title: 'Compute Power', 
    desc: 'Serverless Lambda & Elastic Containers.', 
    color: '#a855f7', 
    accent: 'bg-purple-500/20' 
  },
  { 
    icon: Database, 
    title: 'Data Storage', 
    desc: 'Scalable S3 & DynamoDB performance.', 
    color: '#f59e0b', 
    accent: 'bg-amber-500/20' 
  },
  { 
    icon: ShieldCheck, 
    title: 'Security First', 
    desc: 'Zero-Trust IAM & Network Isolation.', 
    color: '#10b981', 
    accent: 'bg-emerald-500/20' 
  }
];

const AWSPortal = () => {
  return (
    <section className="bg-[#050505] text-white min-h-screen font-sans">
      <div className="flex flex-col lg:flex-row">
        
        {/* LEFT SIDE: Pinned Title (Desktop) */}
        <div className="lg:w-1/2 lg:h-screen lg:sticky lg:top-0 p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
          <div>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="font-mono text-blue-500 text-sm tracking-widest uppercase mb-4"
            >
              Expertise // 2026
            </motion.p>
            <h2 className="text-6xl md:text-8xl font-black uppercase leading-none tracking-tighter">
              AWS <br />
              <span className="text-neutral-800">Engine</span>
            </h2>
          </div>
          
          <div className="mt-20 lg:mt-0">
            <p className="text-neutral-500 max-w-sm text-lg font-light italic">
              "Building the backbone of modern digital scale through automated infrastructure."
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: Scrolling Large Animation Cards */}
        <div className="lg:w-1/2 p-6 lg:p-20 space-y-20 lg:space-y-40">
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              {/* Massive Background Icon (The Large Animation) */}
              <div className="absolute -top-10 -right-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700">
                <item.icon size={300} weight="thin" />
              </div>

              {/* The Card Content */}
              <div className={`p-8 lg:p-12 rounded-[2.5rem] bg-neutral-900/30 border border-white/5 backdrop-blur-sm relative z-10 overflow-hidden`}>
                <div className={`w-16 h-16 rounded-2xl ${item.accent} flex items-center justify-center mb-8`}>
                  <item.icon size={40} weight="duotone" color={item.color} />
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-bold mb-4">{item.title}</h3>
                <p className="text-neutral-400 text-lg leading-relaxed mb-8 max-w-md">
                  {item.desc}
                </p>

                {/* Animated "Progress" Line */}
                <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
                  <motion.div 
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "0%" }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent w-1/2"
                  />
                </div>
                
                <div className="mt-6 flex justify-between items-center text-[10px] font-mono text-neutral-600 uppercase tracking-widest">
                  <span>Standard Pattern: AWS-WELL-ARCHITECTED</span>
                  <span>0{index + 1}</span>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Footer spacer for desktop */}
          <div className="h-20 hidden lg:block" />
        </div>
      </div>
    </section>
  );
};

export default AWSPortal;