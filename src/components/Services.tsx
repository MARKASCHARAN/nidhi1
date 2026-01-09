import React from 'react';
import { motion } from 'framer-motion';
import { CloudCog, DatabaseZap, ShieldCheck, Code2, ArrowUpRight, Globe, Layers } from 'lucide-react';

const services = [
    {
        icon: CloudCog,
        title: 'Cloud Migration',
        description: 'Zero-downtime migration of legacy systems to AWS Multi-AZ Landing Zones.',
        accent: 'bg-blue-50',
        iconColor: 'text-blue-600',
        dotColor: 'bg-blue-400'
    },
    {
        icon: DatabaseZap,
        title: 'Pipeline Engineering',
        description: 'Automated ETL/ELT workflows using Glue, Spark, and Airflow for data readiness.',
        accent: 'bg-emerald-50',
        iconColor: 'text-emerald-600',
        dotColor: 'bg-emerald-400'
    },
    {
        icon: ShieldCheck,
        title: 'Security Audits',
        description: 'Deep-dive compliance audits for cost optimization and zero-trust IAM security.',
        accent: 'bg-purple-50',
        iconColor: 'text-purple-600',
        dotColor: 'bg-purple-400'
    },
    {
        icon: Code2,
        title: 'Backend Scalability',
        description: 'High-performance microservices and Serverless APIs using Python and Node.js.',
        accent: 'bg-orange-50',
        iconColor: 'text-orange-600',
        dotColor: 'bg-orange-400'
    }
];

const ServicesLight = () => {
    return (
        <section id="services" className="py-32 bg-[#FDFCFB] relative overflow-hidden">
            {/* Soft decorative blob for depth */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl pointer-events-none" />
            
            <div className="container mx-auto px-6 relative z-10">
                
                {/* Header: Minimalist & Clean */}
                <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
                    <div className="max-w-xl">
                        <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: 40 }}
                            className="h-1 bg-slate-900 mb-6" 
                        />
                        <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none mb-6">
                            Solution <br /> <span className="text-slate-300 italic">Frameworks.</span>
                        </h2>
                        <p className="text-slate-500 text-lg leading-relaxed font-medium">
                            Engineering resilient, scalable, and automated cloud systems for the modern enterprise.
                        </p>
                    </div>
                    
                    <div className="hidden lg:flex flex-col items-end gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        <span>// Version 2.0.6</span>
                        <span>// Global Availability</span>
                    </div>
                </div>

                {/* Service Grid: Clean Card Design */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative bg-white border border-slate-100 p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500"
                        >
                            <div className="relative z-10 h-full flex flex-col">
                                <div className={`w-16 h-16 ${service.accent} ${service.iconColor} rounded-2xl flex items-center justify-center mb-10 transition-transform group-hover:scale-110 duration-500`}>
                                    <service.icon size={32} />
                                </div>

                                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                                    {service.title}
                                </h3>
                                
                                <p className="text-slate-500 text-sm leading-relaxed mb-12 flex-grow font-medium">
                                    {service.description}
                                </p>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className={`w-2 h-2 rounded-full ${service.dotColor}`} />
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active_Spec</span>
                                    </div>
                                    <ArrowUpRight size={18} className="text-slate-300 group-hover:text-slate-900 transition-colors translate-y-0 group-hover:-translate-y-1 group-hover:translate-x-1" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Interactive Status Footer */}
                <div className="mt-32 p-10 bg-white border border-slate-100 rounded-[3rem] shadow-xl shadow-slate-200/40 flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-3">
                            <Globe size={20} className="text-blue-500" />
                            <span className="text-sm font-bold text-slate-900">Multi-Region Support</span>
                        </div>
                        <div className="w-px h-8 bg-slate-100 hidden md:block" />
                        <div className="flex items-center gap-3">
                            <Layers size={20} className="text-emerald-500" />
                            <span className="text-sm font-bold text-slate-900">Infrastructure as Code</span>
                        </div>
                    </div>
                    
                    <button className="px-10 py-4 bg-slate-900 text-white rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-blue-600 transition-colors shadow-lg">
                        Consultation Channel
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ServicesLight;