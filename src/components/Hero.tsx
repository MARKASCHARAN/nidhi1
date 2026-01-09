import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Cloud, Database, Cpu } from 'lucide-react';

const MonolithHero = () => {
  // Animation Variants
  const containerVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVars = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section className="relative min-h-screen bg-[#050505] flex flex-col justify-center px-6 md:px-12 overflow-hidden">
      
      {/* --- BACKGROUND ACCENTS --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Gradient Orb */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px]" 
        />
        {/* Grain Overlay (CSS Only) */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150" />
      </div>

      <motion.div 
        variants={containerVars}
        initial="initial"
        animate="animate"
        className="relative z-10 w-full max-w-7xl mx-auto"
      >
        {/* --- TOP STATUS BAR --- */}
        <motion.div variants={itemVars} className="flex items-center gap-4 mb-12">
          <div className="flex -space-x-2">
            {[Cloud, Database, Cpu].map((Icon, i) => (
              <div key={i} className="w-10 h-10 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-indigo-400">
                <Icon size={18} />
              </div>
            ))}
          </div>
          <div className="h-[1px] w-12 bg-white/20" />
          <span className="text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase">
            Specializing in AWS Ecosystem
          </span>
        </motion.div>

        {/* --- MAIN TITLE --- */}
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-9">
            <motion.h1 
              variants={itemVars}
              className="text-[14vw] lg:text-[10vw] font-black text-white leading-[0.8] tracking-tighter uppercase"
            >
              Cloud <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-white to-white">Engineer</span>
            </motion.h1>
          </div>
          
          <div className="lg:col-span-3 pb-4">
            <motion.p 
              variants={itemVars}
              className="text-neutral-400 text-lg font-light leading-relaxed border-l border-indigo-500 pl-6 mb-8"
            >
              Architecting high-availability data pipelines and serverless infrastructures that scale with your vision.
            </motion.p>
          </div>
        </div>

        {/* --- ACTIONS & STATS --- */}
        <motion.div 
          variants={itemVars}
          className="mt-16 flex flex-col md:flex-row items-start md:items-center gap-12"
        >
          <div className="flex gap-4">
            <a href="#work" className="group relative px-10 py-5 bg-white text-black font-black uppercase text-xs tracking-widest overflow-hidden transition-transform active:scale-95">
              <span className="relative z-10 flex items-center gap-3">
                View Portfolio <ArrowUpRight size={16} />
              </span>
              <div className="absolute inset-0 bg-indigo-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            
            <a href="#contact" className="px-10 py-5 border border-white/10 text-white font-black uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all duration-300">
              Get in Touch
            </a>
          </div>

          <div className="flex gap-12 border-l border-white/10 pl-12">
            <div>
              <div className="text-white text-3xl font-black">99.9%</div>
              <div className="text-[9px] text-neutral-500 uppercase font-bold tracking-widest mt-1">Uptime SLA</div>
            </div>
            <div>
              <div className="text-white text-3xl font-black">50+</div>
              <div className="text-[9px] text-neutral-500 uppercase font-bold tracking-widest mt-1">AWS Deployments</div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* --- SIDE KINETIC TEXT --- */}
      <div className="absolute right-[-100px] top-1/2 -translate-y-1/2 rotate-90 hidden xl:block">
        <span className="text-[120px] font-black text-white/[0.02] whitespace-nowrap uppercase select-none">
          Data Architecture • AWS Expert • Serverless
        </span>
      </div>
    </section>
  );
};

export default MonolithHero;