import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, Code, Gear, CheckCircle } from "@phosphor-icons/react";

const skillGroups = [
    {
        category: "AWS Services",
        icon: Cpu,
        color: "text-orange-500",
        bg: "bg-orange-50",
        skills: ["EC2", "S3", "Lambda", "RDS", "DynamoDB", "Redshift", "Glue", "Athena", "Kinesis", "IAM", "CloudWatch", "VPC"]
    },
    {
        category: "Data Engineering",
        icon: Database,
        color: "text-blue-500",
        bg: "bg-blue-50",
        skills: ["Apache Spark", "Apache Kafka", "Airflow", "Snowflake", "dbt", "Hadoop", "Data Modeling", "ETL/ELT"]
    },
    {
        category: "Languages & Tools",
        icon: Code,
        color: "text-emerald-500",
        bg: "bg-emerald-50",
        skills: ["Python", "SQL", "Scala", "Java", "Docker", "Kubernetes", "Terraform", "Git", "Linux Shell"]
    },
    {
        category: "Methodologies",
        icon: Gear,
        color: "text-purple-500",
        bg: "bg-purple-50",
        skills: ["CI/CD", "Agile/Scrum", "DevOps", "Microservices", "Serverless", "Data Governance"]
    }
];

const SkillsLight = () => {
    return (
        <section className="py-24 bg-[#F8FAFC] text-slate-900 overflow-hidden font-sans">
            {/* Background Grid Accent (Subtle) */}
            <div className="absolute inset-0 opacity-[0.4] pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-6">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-[2px] bg-blue-500" />
                            <span className="text-blue-600 font-mono text-xs uppercase tracking-[0.3em] font-bold">Capabilities.v2</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                            Technical <br /> <span className="text-slate-300">Architecture.</span>
                        </h2>
                    </div>
                    <p className="text-slate-500 font-mono text-[10px] uppercase text-right hidden md:block">
                        Build Version: 2026.04.01 <br />
                        Environment: Production_Ready
                    </p>
                </div>

                {/* The Skill Matrix Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillGroups.map((group, groupIdx) => (
                        <motion.div 
                            key={groupIdx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: groupIdx * 0.1 }}
                            className="bg-white/70 backdrop-blur-md border border-white rounded-[2.5rem] p-10 shadow-xl shadow-slate-200/50 relative group overflow-hidden"
                        >
                            {/* Header Section */}
                            <div className="flex justify-between items-start mb-12">
                                <div className="flex items-center gap-4">
                                    <div className={`p-4 rounded-2xl ${group.bg} ${group.color} shadow-inner`}>
                                        <group.icon size={32} weight="duotone" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-black uppercase tracking-tight text-slate-800">
                                            {group.category}
                                        </h3>
                                        <span className="text-[9px] font-mono text-slate-400 font-bold tracking-widest uppercase">ID_PORT: 0x0{groupIdx}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Skills Display */}
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-2">
                                {group.skills.map((skill, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ x: 3 }}
                                        className="flex items-center gap-2 group/skill"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover/skill:bg-blue-500 transition-colors" />
                                        <span className="text-[13px] font-semibold text-slate-500 group-hover/skill:text-slate-900 transition-colors cursor-default">
                                            {skill}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Corner Accent */}
                            <div className="absolute top-0 right-0 p-8">
                                <div className={`w-2 h-2 rounded-full ${group.color} opacity-20 group-hover:opacity-100 animate-pulse`} />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Status Bar */}
                <div className="mt-16 py-6 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold font-mono text-slate-400 uppercase tracking-widest">System_Health:</span>
                            <span className="text-[10px] font-bold font-mono text-emerald-500 uppercase tracking-widest italic">Stable</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold font-mono text-slate-400 uppercase tracking-widest">Region:</span>
                            <span className="text-[10px] font-bold font-mono text-slate-900 uppercase tracking-widest italic">Global (Edge)</span>
                        </div>
                    </div>
                    <div className="text-[10px] font-black font-mono text-blue-600 uppercase tracking-widest">
                        // End of Manifest
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsLight;