import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  Database, 
  CloudArrowUp, 
  FlowArrow, 
  ShieldCheckered, 
  ChartBar, 
  TerminalWindow 
} from "@phosphor-icons/react";

// --- MAGNETIC COMPONENT ---
const MagneticIcon = ({ children }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((clientX - centerX) * 0.4);
    y.set((clientY - centerY) * 0.4);
  };

  const reset = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.div>
  );
};

const UnifiedExpertise = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spotlight Effect for the background
  function handleMouseMove({ clientX, clientY, currentTarget }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative py-12 md:py-28 bg-[#030303] overflow-hidden text-white group/section"
    >
      {/* --- KINETIC BACKGROUND ANIMATION --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        
        {/* 1. Animated Mesh Orbs */}
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -80, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full"
        />

        {/* 2. Interactive Spotlight Follower */}
        <motion.div
          className="absolute inset-0 z-0 opacity-0 group-hover/section:opacity-100 transition-opacity duration-500"
          style={{
            background: useTransform(
              [mouseX, mouseY],
              ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(99, 102, 241, 0.06), transparent 80%)`
            ),
          }}
        />

        {/* 3. Floating Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.15]" 
          style={{ 
            backgroundImage: `linear-gradient(#1e1e1e 1px, transparent 1px), linear-gradient(90deg, #1e1e1e 1px, transparent 1px)`,
            backgroundSize: '50px 50px' 
          }} 
        />

        {/* 4. Ambient Data Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.4, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              delay: i * 2,
            }}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-5 md:px-6 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="mb-12 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="h-[1.5px] w-10 bg-indigo-500" />
            <span className="text-indigo-500 font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase">Core Capabilities</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]"
          >
            Data <span className="text-neutral-800">&</span> <br className="md:hidden" /> Cloud
          </motion.h2>
        </div>

        {/* --- BENTO GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-4 md:gap-6 auto-rows-fr">
          
          {/* 1. DATA PIPELINES */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -5 }}
            className="col-span-1 sm:col-span-2 md:col-span-8 bg-neutral-900/30 border border-white/5 rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 relative overflow-hidden group"
          >
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <MagneticIcon>
                  <div className="mb-8 w-14 h-14 md:w-20 md:h-20 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-2xl md:rounded-3xl flex items-center justify-center shadow-2xl shadow-indigo-500/20">
                    <Database size={32} weight="duotone" className="md:scale-125" />
                  </div>
                </MagneticIcon>
                <h3 className="text-2xl md:text-4xl font-bold mb-4 tracking-tight uppercase">Data Engineering</h3>
                <p className="text-neutral-400 text-sm md:text-lg max-w-lg leading-relaxed font-light">
                  Architecting resilient ETL/ELT frameworks using <span className="text-white">Apache Spark</span> and <span className="text-white font-medium">AWS Glue</span> for high-throughput pipelines.
                </p>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-2">
                {["PySpark", "Kafka", "Airflow", "Redshift"].map((t) => (
                  <motion.span 
                    whileHover={{ scale: 1.1, color: "#fff", backgroundColor: "rgba(255,255,255,0.1)" }}
                    key={t} 
                    className="px-3 md:px-5 py-1.5 md:py-2 rounded-full bg-white/5 border border-white/10 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-indigo-300 transition-colors"
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </div>
            
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute -right-20 -bottom-20 opacity-[0.03] group-hover:opacity-[0.1] transition-opacity duration-700"
            >
              <FlowArrow size={400} weight="thin" />
            </motion.div>
          </motion.div>

          {/* 2. CLOUD INFRASTRUCTURE */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="col-span-1 md:col-span-4 bg-white/[0.02] border border-white/5 rounded-[2rem] md:rounded-[3rem] p-8 md:p-10 flex flex-col justify-between group overflow-hidden"
          >
            <div className="space-y-6">
              <MagneticIcon>
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 transition-colors shadow-lg shadow-blue-500/5">
                  <CloudArrowUp size={32} weight="duotone" />
                </div>
              </MagneticIcon>
              <h3 className="text-xl md:text-2xl font-bold uppercase italic tracking-tighter">Cloud Architect</h3>
              <p className="text-neutral-500 text-xs md:text-sm leading-relaxed font-light">
                Infrastructure as Code (Terraform) focusing on <span className="text-blue-400">Zero-Trust</span> security and auto-scaling logic.
              </p>
            </div>

            <div className="pt-8 space-y-3">
              <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.2em] text-blue-400/60">
                <span>Infrastructure Health</span>
                <motion.span 
                  animate={{ opacity: [1, 0.4, 1] }} 
                  transition={{ duration: 2, repeat: Infinity }}
                >99.9%</motion.span>
              </div>
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '99.9%' }}
                  transition={{ duration: 2.5, ease: "circOut" }}
                  className="h-full bg-gradient-to-r from-blue-600 to-indigo-500" 
                />
              </div>
            </div>
          </motion.div>

          {/* 3. ADAPTIVE ROW */}
          {/* {[
            { icon: ShieldCheckered, title: "Security", color: "text-emerald-400" },
            { icon: TerminalWindow, title: "Automation", color: "text-orange-400" },
            { icon: ChartBar, title: "Real-time", color: "text-pink-400" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.05)", y: -5 }}
              className="col-span-1 md:col-span-4 bg-neutral-900/20 border border-white/5 rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-8 flex items-center gap-5 group transition-all"
            >
              <div className={`${item.color} p-4 bg-white/[0.03] rounded-2xl group-hover:rotate-[15deg] group-hover:bg-white/5 transition-all`}>
                <item.icon size={28} weight="duotone" />
              </div>
              <h4 className="font-bold text-xs md:text-sm uppercase tracking-wider">{item.title}</h4>
            </motion.div>
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default UnifiedExpertise;