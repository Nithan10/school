"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, ChevronDown, Play, X, User, Phone, 
  Mail, GraduationCap, Star, Book, Heart, 
  Zap, Rocket, Sparkles, Calendar, ShieldCheck
} from "lucide-react";

export default function HeroPrimarySchool() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Application Received! Welcome to the family.");
    setIsModalOpen(false);
  };

  // Floating Element Component for 3D depth
  const FloatingElement = ({ Icon, color, position, delay = 0 }: any) => (
    <motion.div
      className={`absolute ${position} z-20 hidden lg:block`}
      initial={{ y: 0, opacity: 0 }}
      animate={{ 
        y: [0, -20, 0],
        opacity: 1,
        rotate: [0, 5, -5, 0]
      }}
      transition={{
        y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay },
        opacity: { duration: 1, delay },
        rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" }
      }}
    >
      <div className={`p-4 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/50 shadow-2xl ${color}`}>
        <Icon size={32} strokeWidth={1.5} />
      </div>
    </motion.div>
  );

  return (
    <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-[#fafafa]">
      
      {/* Background Layer: Video & Gradients */}
      <motion.div className="absolute inset-0 z-0" style={{ y, opacity }}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white z-10" />
        <video
          ref={videoRef}
          autoPlay muted loop playsInline
          className="w-full h-full object-cover saturate-[1.2] brightness-[0.95]"
        >
          <source src="/background-4k.mp4" type="video/mp4" />
          <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022" alt="Background" />
        </video>
      </motion.div>

      {/* Decorative Floating Assets */}
      <FloatingElement Icon={Book} color="text-blue-500" position="top-[20%] left-[10%]" delay={0.2} />
      <FloatingElement Icon={Rocket} color="text-purple-500" position="bottom-[25%] left-[15%]" delay={0.5} />
      <FloatingElement Icon={Star} color="text-amber-500" position="top-[30%] right-[12%]" delay={0.8} />
      <FloatingElement Icon={Heart} color="text-rose-500" position="bottom-[20%] right-[10%]" delay={1} />

      {/* Main Content */}
      <div className="relative z-30 container mx-auto px-6 flex flex-col items-center">
        
        {/* Admissions Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 px-5 py-2 rounded-full bg-white/70 backdrop-blur-md border border-slate-200 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">Enrollment Open 2024-25</span>
          </div>
        </motion.div>

        {/* Hero Headlines */}
        <div className="text-center space-y-2 mb-10">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl sm:text-8xl md:text-[10rem] font-[900] tracking-tight leading-[0.85] text-slate-900 uppercase italic"
          >
            Minervaa
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-8xl font-black bg-gradient-to-r from-blue-600 via-indigo-500 to-rose-500 bg-clip-text text-transparent italic"
          >
            Vidhya Mandhir
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-slate-500 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto font-medium mt-6 leading-relaxed"
          >
            Crafting a future where every child finds their 
            <span className="text-slate-900 font-bold px-2 underline decoration-rose-400 decoration-4 underline-offset-4">superpower.</span>
          </motion.p>
        </div>

        {/* CTA Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <button 
            onClick={() => setIsModalOpen(true)}
            className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-blue-600 transition-all shadow-xl hover:shadow-blue-500/25 flex items-center justify-center gap-3 group"
          >
            Begin Journey <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
          
          <button className="px-10 py-5 bg-white/80 backdrop-blur-md text-slate-900 border border-slate-200 rounded-2xl font-bold text-lg hover:bg-white transition-all flex items-center justify-center gap-3">
            <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center">
              <Play size={14} className="text-white fill-white ml-0.5" />
            </div>
            Virtual Tour
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }} 
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 z-30 text-slate-300"
      >
        <ChevronDown size={32} />
      </motion.div>

      {/* Premium Application Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-xl"
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              className="relative w-full max-w-[850px] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row"
            >
              {/* Modal Sidebar */}
              <div className="md:w-1/3 bg-slate-900 p-8 text-white flex flex-col justify-between relative overflow-hidden">
                <div className="relative z-10">
                  <Sparkles className="text-amber-400 mb-6" size={40} />
                  <h3 className="text-3xl font-black leading-tight italic">Join the Elite.</h3>
                  <p className="text-slate-400 mt-4 text-sm leading-relaxed">Secure your child's spot in our award-winning curriculum.</p>
                </div>
                
                <div className="relative z-10 space-y-4 mt-8">
                   <div className="flex items-center gap-3 text-xs font-bold text-slate-300">
                      <ShieldCheck className="text-emerald-400" size={16} /> Data Secured
                   </div>
                   <div className="flex items-center gap-3 text-xs font-bold text-slate-300">
                      <Calendar className="text-blue-400" size={16} /> 2024 Sessions
                   </div>
                </div>

                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl" />
              </div>

              {/* Modal Form */}
              <div className="flex-1 p-8 sm:p-12 relative bg-white">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full transition-colors"
                >
                  <X size={20} className="text-slate-400" />
                </button>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-3">
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={18} />
                      <input required type="text" placeholder="Parent / Guardian Name" className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-transparent focus:border-blue-500/20 focus:bg-white rounded-xl outline-none transition-all font-semibold text-slate-700" />
                    </div>
                    
                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={18} />
                      <input required type="email" placeholder="Email Address" className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-transparent focus:border-blue-500/20 focus:bg-white rounded-xl outline-none transition-all font-semibold text-slate-700" />
                    </div>

                    <div className="relative group">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={18} />
                      <input required type="tel" placeholder="Mobile Number" className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-transparent focus:border-blue-500/20 focus:bg-white rounded-xl outline-none transition-all font-semibold text-slate-700" />
                    </div>

                    <div className="relative group">
                      <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={18} />
                      <select className="w-full pl-12 pr-10 py-4 bg-slate-50 border-2 border-transparent focus:border-blue-500/20 focus:bg-white rounded-xl outline-none transition-all font-semibold text-slate-700 appearance-none cursor-pointer">
                        <option value="" disabled selected>Select Grade</option>
                        <option>Pre-Primary</option>
                        <option>Primary (Grade 1-5)</option>
                        <option>Secondary</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-5 bg-blue-600 text-white font-black rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all text-lg mt-2"
                  >
                    Submit Inquiry
                  </button>
                  <p className="text-[10px] text-center text-slate-400 font-bold uppercase tracking-widest pt-2">Our team typically responds within 2 hours</p>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}