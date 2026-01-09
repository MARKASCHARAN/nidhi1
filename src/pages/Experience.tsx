import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, Calendar, MapPin, CheckCircle, 
  Server, Cloud, Shield, Activity, Layers, ArrowUpRight 
} from 'lucide-react';

const experiences = [
    {
        role: "Data Engineer Intern",
        company: "Eternal Web Pvt Ltd",
        type: "Full-time",
        period: "May 2025 - June 2025",
        duration: "9 mos",
        location: "Ahmedabad, IN",
        mode: "On-site",
        description: "Leading digital transformation via AWS Cloud & AI Infrastructure.",
        skills: ["AWS EC2", "S3", "Lambda", "IAM", "CloudWatch", "Rekognition", "Big Data"],
        highlights: [
            "Architected scalable cloud applications using AWS EC2 & S3 storage buckets.",
            "Designed serverless event-driven workflows with AWS Lambda.",
            "Automated Computer Vision pipelines using Amazon Rekognition.",
            "Enforced Zero-Trust security models via granular IAM policies.",
            "Engineered real-time observability dashboards using CloudWatch."
        ],
        id: "DATA_NODE_01"
    }
];

const Experience = () => {
    return (
        <section className="bg-[#050505] py-32 px-6 min-h-screen text-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* --- HEADER: TECHNICAL SPECIFICATION --- */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-32 border-b border-white/10 pb-10">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-none">
                            Career <br /> <span className="text-blue-600">History.</span>
                        </h2>
                    </motion.div>
                    <div className="mt-8 md:mt-0 space-y-2 text-right">
                        <p className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest leading-none italic">// System_Log_Active</p>
                        <div className="flex items-center gap-2 justify-end">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="font-mono text-[11px] uppercase text-neutral-400">Current_Deployment: Ahmedabad</span>
                        </div>
                    </div>
                </div>

                {/* --- TIMELINE GRID --- */}
                <div className="relative">
                    {/* The Kinetic Rail */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block" />

                    {experiences.map((exp, index) => (
                        <div key={index} className="relative mb-40">
                            {/* Desktop Center Point */}
                            <div className="absolute left-1/2 top-0 -translate-x-1/2 hidden md:flex flex-col items-center">
                                <div className="w-10 h-10 rounded-full bg-black border border-blue-600 flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
                                </div>
                                <div className="h-20 w-px bg-gradient-to-b from-blue-600 to-transparent" />
                            </div>

                            <div className="flex flex-col md:flex-row gap-10 md:gap-0 items-start">
                                {/* LEFT SIDE: METADATA */}
                                <motion.div 
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    className="w-full md:w-1/2 md:pr-20 md:text-right space-y-4"
                                >
                                    <div className="space-y-1">
                                        <span className="font-mono text-xs text-blue-500 uppercase tracking-widest">{exp.id}</span>
                                        <h3 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight uppercase italic">{exp.role}</h3>
                                        <div className="text-xl font-medium text-neutral-400">{exp.company}</div>
                                    </div>
                                    
                                    <div className="flex flex-wrap md:justify-end gap-4 font-mono text-[10px] text-neutral-500 uppercase">
                                        <span className="flex items-center gap-2"><Calendar size={12}/> {exp.period}</span>
                                        <span className="flex items-center gap-2"><MapPin size={12}/> {exp.location}</span>
                                    </div>
                                </motion.div>

                                {/* RIGHT SIDE: BLUEPRINT CONTENT */}
                                <motion.div 
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    className="w-full md:w-1/2 md:pl-20 relative"
                                >
                                    <div className="bg-[#111] border border-white/5 p-8 rounded-sm hover:border-blue-600/50 transition-all duration-500 relative group">
                                        {/* Background Blueprint Lines */}
                                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none group-hover:opacity-[0.05] transition-opacity" 
                                             style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
                                        
                                        <p className="text-neutral-400 text-sm mb-8 leading-relaxed italic border-l-2 border-blue-600 pl-4">
                                            "{exp.description}"
                                        </p>

                                        <ul className="space-y-4 mb-10">
                                            {exp.highlights.map((text, i) => (
                                                <li key={i} className="flex items-start gap-4 group/list">
                                                    <ArrowUpRight size={14} className="mt-1 text-blue-500 group-hover/list:translate-x-1 group-hover/list:-translate-y-1 transition-transform" />
                                                    <span className="text-sm text-neutral-300 group-hover/list:text-white transition-colors leading-relaxed">
                                                        {text}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="pt-6 border-t border-white/5">
                                            <span className="text-[10px] font-mono text-neutral-600 uppercase mb-4 block tracking-widest">Infrastructure_Stack:</span>
                                            <div className="flex flex-wrap gap-2">
                                                {exp.skills.map((skill, skIdx) => (
                                                    <span key={skIdx} className="px-3 py-1 bg-white/5 border border-white/5 text-[9px] font-mono text-neutral-500 rounded-full hover:text-blue-400 transition-colors">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;