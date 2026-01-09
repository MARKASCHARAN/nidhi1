import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, Calendar, Building, ExternalLink, ShieldCheck } from 'lucide-react';

const certifications = [
    {
        title: "Software Engineering",
        issuer: "HackerRank",
        date: "JAN 2026",
        verified: true,
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
        description: "Strengthening foundations in coding, logic, and software design through algorithmic challenges.",
        certificateImage: "assets/software_engineer_certificate.jpg" 
    },
    {
        title: "AWS AI Practitioner", // Shortened for mobile fit
        issuer: "AWS",
        date: "MAY 2025",
        verified: true,
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
        description: "Mastering AI/ML fundamentals on AWS, including generative AI and foundation models.",
        certificateImage: "assets/ai_aws.jpeg"
    },
    {
        title: "Cisco CCNA",
        issuer: "Cisco",
        date: "DEC 2024",
        verified: true,
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg",
        description: "Validated expertise in networking fundamentals, IP connectivity, and security.",
        certificateImage: "assets/cn.jpg"
    },
    {
        title: "Operating Systems",
        issuer: "Cisco",
        date: "JAN 2025",
        verified: true,
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg",
        description: "Deep dive into kernel structures, memory management, and file systems.",
        certificateImage: "assets/OS.jpeg"
    },
    {
        title: "AIML Specialization",
        issuer: "BrightGeeks",
        date: "JAN 2024",
        verified: true,
        logo: null,
        description: "Advanced specialization in predictive modeling and neural networks.",
        certificateImage: "public/assets/ai-ml-min (1).png"
    }
];

const CertCard = ({ cert, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-[#111113] border border-white/5 hover:border-blue-500/30 rounded-xl p-5 md:p-8 transition-all duration-500 overflow-hidden mb-4"
        >
            {/* Animated Border Beam (Hidden on small mobile to save battery/performance) */}
            <div className="hidden md:block absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

            <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
                {/* Logo Container - Center on mobile, left on desktop */}
                <div className="flex-shrink-0 flex justify-start lg:block">
                    <div className="w-14 h-14 md:w-20 md:h-20 bg-black/40 border border-white/10 rounded-lg p-3 md:p-4 flex items-center justify-center relative overflow-hidden">
                        {cert.logo ? (
                            <img src={cert.logo} alt={cert.issuer} className="w-full h-full object-contain relative z-10 grayscale group-hover:grayscale-0 transition-all duration-500" />
                        ) : (
                            <Award size={28} className="text-blue-500 relative z-10" />
                        )}
                        <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                </div>

                {/* Text Content */}
                <div className="flex-1 space-y-3 md:space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors leading-tight">
                            {cert.title}
                        </h3>
                        {cert.verified && (
                            <span className="inline-flex items-center w-fit gap-1.5 px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 text-[9px] md:text-[10px] font-mono border border-blue-500/20">
                                <ShieldCheck size={10} /> <span className="hidden xs:inline">VERIFIED_</span>CREDENTIAL
                            </span>
                        )}
                    </div>

                    {/* Metadata: Stacks on mobile */}
                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-[10px] md:text-[11px] font-mono text-neutral-500 uppercase tracking-widest">
                        <div className="flex items-center gap-1.5">
                            <Building size={12} className="text-blue-900" /> {cert.issuer}
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Calendar size={12} className="text-blue-900" /> {cert.date}
                        </div>
                    </div>

                    <p className="text-neutral-400 text-xs md:text-sm leading-relaxed max-w-2xl font-light italic">
                        "{cert.description}"
                    </p>

                    {/* Certificate Preview Image */}
                    {cert.certificateImage && (
                        <div className="mt-4 group/img relative rounded-lg border border-white/5 overflow-hidden bg-black/60 max-w-full md:max-w-md">
                            <img 
                                src={cert.certificateImage} 
                                alt="Certificate Preview" 
                                className="w-full h-auto opacity-60 md:opacity-40 group-hover/img:opacity-90 transition-all duration-700 blur-[0px] md:blur-[0.5px] md:group-hover/img:blur-0"
                            />
                            {/* Review Button: Fixed at bottom for mobile, center hover for desktop */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 lg:bg-transparent lg:opacity-0 lg:group-hover/img:opacity-100 transition-all">
                                <a 
                                    href={cert.certificateImage} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="bg-blue-600 text-white px-4 py-2 rounded text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-2xl scale-90 md:scale-100"
                                >
                                    Review <span className="hidden sm:inline">Document</span> <ExternalLink size={12} />
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            
            {/* Background ID Watermark - Hidden on small mobile to reduce clutter */}
            <div className="hidden sm:block absolute bottom-4 right-6 font-mono text-[8px] text-white/5 tracking-[0.5em] select-none">
                AUTH_UNIT_00{index + 1}
            </div>
        </motion.div>
    );
};

const ObsidianCertifications = () => {
    return (
        <section className="bg-[#0A0A0C] py-16 md:py-32 px-4 md:px-6 min-h-screen">
            <div className="max-w-6xl mx-auto">
                {/* Responsive Header */}
                <header className="mb-12 md:mb-24 border-b border-white/5 pb-8 md:pb-12">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <div className="w-6 md:w-8 h-px bg-blue-600" />
                                <span className="text-blue-600 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.4em]">Credentials_Vault</span>
                            </div>
                            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">
                                Verified <br /> 
                                <span className="text-neutral-900" style={{ WebkitTextStroke: '1px #222', fontSize: 'clamp(2rem, 10vw, 4.5rem)' }}>
                                    Excellence
                                </span>
                            </h2>
                        </div>
                        <div className="text-left md:text-right space-y-1 md:space-y-2">
                            <p className="text-[9px] md:text-[10px] font-mono text-neutral-600 uppercase tracking-widest leading-none">Archive: 2024-2026</p>
                            <p className="text-emerald-500 font-mono text-[9px] md:text-[10px] uppercase tracking-widest leading-none italic flex items-center gap-2 md:justify-end">
                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                System_Verified
                            </p>
                        </div>
                    </div>
                </header>

                {/* Cards Container */}
                <div className="flex flex-col gap-2">
                    {certifications.map((cert, index) => (
                        <CertCard key={index} cert={cert} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ObsidianCertifications;