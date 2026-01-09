import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Globe, Send, Terminal, ShieldCheck, Cpu } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('IDLE');

  return (
    <section id="contact" className="py-32 bg-black relative overflow-hidden">
      {/* Background Pulse Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <div className="mb-20 border-b border-white/10 pb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <p className="font-mono text-blue-500 text-xs tracking-[0.4em] uppercase mb-4">// Establishing_Connection</p>
              <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none">
                Start <br /> <span className="text-neutral-900" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.05)' }}>Transmission.</span>
              </h2>
            </div>
            <div className="text-[10px] font-mono text-neutral-600 uppercase flex flex-col items-end">
              <span>Encryption: Enabled</span>
              <span>Protocol: TLS 1.3</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-start">

            {/* LEFT: CLI Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="lg:col-span-5 space-y-12"
            >
              <div className="bg-neutral-900/40 border border-white/5 p-8 rounded-sm font-mono text-sm relative overflow-hidden group">
                <div className="flex items-center gap-2 mb-6 text-neutral-500 border-b border-white/5 pb-2">
                  <Terminal size={14} /> <span>USER_IDENTITY_v2.log</span>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="text-blue-900 leading-none">{'>'}</span>
                    <div>
                      <span className="text-neutral-500 uppercase block text-[10px] mb-1">Email_Address</span>
                      <span className="text-white group-hover:text-blue-400 transition-colors">nidhi@example.com</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-blue-900 leading-none">{'>'}</span>
                    <div>
                      <span className="text-neutral-500 uppercase block text-[10px] mb-1">Current_Region</span>
                      <span className="text-white">Vadodara, GJ, IN // (IST)</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-blue-900 leading-none">{'>'}</span>
                    <div>
                      <span className="text-neutral-500 uppercase block text-[10px] mb-1">Freelance_Availability</span>
                      <span className="text-emerald-500 font-bold uppercase animate-pulse">Accepted</span>
                    </div>
                  </div>
                </div>

                <ShieldCheck size={100} className="absolute -bottom-4 -right-4 opacity-[0.02] text-white rotate-12" />
              </div>

              {/* Server Status Indicators */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/5">
                  <Cpu size={12} className="text-blue-500" />
                  <span className="text-[9px] font-mono text-neutral-400 uppercase">Latency: 12ms</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/5">
                  <Globe size={12} className="text-purple-500" />
                  <span className="text-[9px] font-mono text-neutral-400 uppercase">Timezone: UTC+5:30</span>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: Secure Message Form */}
            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="lg:col-span-7 space-y-6 bg-[#080808] p-10 border border-white/10 rounded-sm relative"
              onSubmit={(e) => {
                e.preventDefault();
                setStatus('SENDING');
                setTimeout(() => setStatus('SUCCESS'), 2000);
              }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-neutral-600 uppercase">Input_Name</span>
                  <input
                    type="text"
                    required
                    className="w-full bg-black border border-white/10 rounded-sm px-4 py-4 text-sm font-mono text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Full_Name"
                  />
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-neutral-600 uppercase">Return_Path_Email</span>
                  <input
                    type="email"
                    required
                    className="w-full bg-black border border-white/10 rounded-sm px-4 py-4 text-sm font-mono text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="client@domain.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-mono text-neutral-600 uppercase">Transmission_Body</span>
                <textarea
                  required
                  rows={4}
                  className="w-full bg-black border border-white/10 rounded-sm px-4 py-4 text-sm font-mono text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Describe the architectural requirements or project details..."
                />
              </div>

              <button
                type="submit"
                disabled={status !== 'IDLE'}
                className="w-full h-16 bg-white text-black font-black uppercase text-xs tracking-[0.4em] flex items-center justify-center gap-3 hover:bg-blue-600 hover:text-white transition-all group disabled:bg-neutral-800 disabled:text-neutral-500"
              >
                {status === 'IDLE' && <>{'Execute_Submission'} <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>}
                {status === 'SENDING' && <>{'Transmitting_Packets...'} <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" /></>}
                {status === 'SUCCESS' && <>{'Connection_Established_OK'}</>}
              </button>

              <div className="flex justify-between items-center text-[9px] font-mono text-neutral-700 uppercase pt-4">
                <span>By submitting, you agree to P2P communication.</span>
                <span>Ref: SYNC_2026</span>
              </div>
            </motion.form>

          </div>
        </div>
      </div>

      {/* Removed style jsx block to fix React warning */}
    </section>
  );
};

export default Contact;