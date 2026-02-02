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
      
      {/* Background Layer */}
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

      {/* Floating Icons (Hidden on Mobile) */}
      <FloatingElement Icon={Book} color="text-blue-500" position="top-[20%] left-[10%]" delay={0.2} />
      <FloatingElement Icon={Rocket} color="text-purple-500" position="bottom-[25%] left-[15%]" delay={0.5} />
      <FloatingElement Icon={Star} color="text-amber-500" position="top-[30%] right-[12%]" delay={0.8} />
      <FloatingElement Icon={Heart} color="text-rose-500" position="bottom-[20%] right-[10%]" delay={1} />

      {/* Main Content Container */}
      <div className="relative z-30 container mx-auto px-4 sm:px-6 flex flex-col items-center">
        
        {/* Admissions Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 sm:mb-8"
        >
          <div className="flex items-center gap-2 sm:gap-3 px-4 py-2 rounded-full bg-white/70 backdrop-blur-md border border-slate-200 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-slate-600">Enrollment Open 2024-25</span>
          </div>
        </motion.div>

        {/* Hero Headlines */}
        <div className="text-center space-y-1 sm:space-y-2 mb-8 sm:mb-10">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-[900] tracking-tight leading-[0.9] text-slate-900 uppercase italic"
          >
            Minervaa
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-black bg-gradient-to-r from-blue-600 via-indigo-500 to-rose-500 bg-clip-text text-transparent italic leading-tight"
          >
            Vidhya Mandhir
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-slate-500 text-base sm:text-lg md:text-2xl max-w-xs sm:max-w-2xl mx-auto font-medium mt-4 sm:mt-6 leading-relaxed"
          >
            Nurturing a future where every child finds their 
            <span className="text-slate-900 font-bold px-1 sm:px-2 underline decoration-rose-400 decoration-2 sm:decoration-4 underline-offset-4 block sm:inline">superpower.</span>
          </motion.p>
        </div>

        {/* CTA Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-4"
        >
          <button 
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-slate-900 text-white rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:bg-blue-600 transition-all shadow-xl flex items-center justify-center gap-3 group"
          >
            Begin Journey <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </button>
          
          <button className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-white/80 backdrop-blur-md text-slate-900 border border-slate-200 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:bg-white transition-all flex items-center justify-center gap-3">
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-slate-900 flex items-center justify-center">
              <Play size={12} className="text-white fill-white ml-0.5" />
            </div>
            Virtual Tour
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator (Hidden on small mobile) */}
      <motion.div 
        animate={{ y: [0, 10, 0] }} 
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 z-30 text-slate-300 hidden sm:block"
      >
        <ChevronDown size={32} />
      </motion.div>

      {/* Responsive Application Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-6 overflow-y-auto bg-slate-950/60 backdrop-blur-xl">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0"
            />
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-[850px] bg-white rounded-[1.5rem] sm:rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row my-auto"
            >
              {/* Modal Sidebar - Stacks on Top on Mobile */}
              <div className="w-full md:w-1/3 bg-slate-900 p-6 sm:p-8 text-white flex flex-col justify-between relative overflow-hidden">
                <div className="relative z-10">
                  <Sparkles className="text-amber-400 mb-4 sm:mb-6" size={32} />
                  <h3 className="text-2xl sm:text-3xl font-black leading-tight italic">Join the Elite.</h3>
                  <p className="text-slate-400 mt-2 sm:mt-4 text-xs sm:text-sm leading-relaxed">Secure your child's spot in our award-winning curriculum.</p>
                </div>
                
                <div className="relative z-10 flex flex-row md:flex-col gap-4 mt-6 md:mt-8">
                   <div className="flex items-center gap-2 text-[10px] sm:text-xs font-bold text-slate-300">
                      <ShieldCheck className="text-emerald-400" size={14} /> Data Secured
                   </div>
                   <div className="flex items-center gap-2 text-[10px] sm:text-xs font-bold text-slate-300">
                      <Calendar className="text-blue-400" size={14} /> 2024 Sessions
                   </div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl hidden md:block" />
              </div>

              {/* Modal Form */}
              <div className="flex-1 p-6 sm:p-10 lg:p-12 relative bg-white">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full transition-colors z-20"
                >
                  <X size={20} className="text-slate-400" />
                </button>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-3">
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={18} />
                      <input required type="text" placeholder="Parent Name" className="w-full pl-11 pr-4 py-3.5 sm:py-4 bg-slate-50 border-2 border-transparent focus:border-blue-500/20 focus:bg-white rounded-xl outline-none transition-all font-semibold text-slate-700 text-sm sm:text-base placeholder:text-slate-400" />
                    </div>
                    
                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={18} />
                      <input required type="email" placeholder="Email Address" className="w-full pl-11 pr-4 py-3.5 sm:py-4 bg-slate-50 border-2 border-transparent focus:border-blue-500/20 focus:bg-white rounded-xl outline-none transition-all font-semibold text-slate-700 text-sm sm:text-base placeholder:text-slate-400" />
                    </div>

                    <div className="relative group">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={18} />
                      <input required type="tel" placeholder="Mobile Number" className="w-full pl-11 pr-4 py-3.5 sm:py-4 bg-slate-50 border-2 border-transparent focus:border-blue-500/20 focus:bg-white rounded-xl outline-none transition-all font-semibold text-slate-700 text-sm sm:text-base placeholder:text-slate-400" />
                    </div>

                    <div className="relative group">
                      <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={18} />
                      <select required className="w-full pl-11 pr-10 py-3.5 sm:py-4 bg-slate-50 border-2 border-transparent focus:border-blue-500/20 focus:bg-white rounded-xl outline-none transition-all font-semibold text-slate-700 text-sm sm:text-base appearance-none cursor-pointer">
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
                    className="w-full py-4 sm:py-5 bg-blue-600 text-white font-black rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 active:scale-[0.98] transition-all text-base sm:text-lg mt-2"
                  >
                    Submit Inquiry
                  </button>
                  <p className="text-[9px] sm:text-[10px] text-center text-slate-400 font-bold uppercase tracking-widest pt-2">Our team responds within 2 hours</p>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}