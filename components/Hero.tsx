"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, ChevronDown, Play, X, User, Phone, 
  Mail, GraduationCap, Star, Sun, Book, Heart, 
  School, Zap, Rocket, Sparkles, Calendar,
  MapPin, Users, Award, Brain
} from "lucide-react";

export default function HeroPrimarySchool() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Request submitted! We will contact you shortly.");
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.play();
        }
      });
    }
  }, []);

  // Enhanced 3D Floating Component with glass morphism
  const FloatingIcon = ({ 
    Icon, color, bgColor, position, delay = 0, duration = 6, size = "md" 
  }: any) => {
    const sizeClasses = {
      sm: "w-12 h-12 sm:w-14 sm:h-14",
      md: "w-16 h-16 sm:w-20 sm:h-20",
      lg: "w-20 h-20 sm:w-24 sm:h-24"
    }[size as "sm" | "md" | "lg"];

    return (
      <motion.div
        className={`absolute ${position} z-20`}
        initial={{ opacity: 0, scale: 0, rotate: -20 }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          rotate: 0,
          y: [0, -30, 0],
          x: [0, 5, 0]
        }}
        transition={{
          opacity: { delay, duration: 1 },
          scale: { delay, duration: 0.8, type: "spring", bounce: 0.6 },
          y: { duration, repeat: Infinity, ease: "easeInOut" },
          x: { duration: duration * 1.5, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <div 
          className={`${bgColor} ${sizeClasses} rounded-3xl border-2 border-white/50 flex items-center justify-center shadow-2xl backdrop-blur-lg transition-all duration-300 hover:scale-110 hover:shadow-3xl active:scale-95`}
          style={{ 
            boxShadow: `0 20px 40px -15px ${color}40, inset 0 -4px 0 rgba(255,255,255,0.4)`,
            backdropFilter: 'blur(12px)'
          }}
        >
          <Icon className={`w-1/2 h-1/2 ${color}`} strokeWidth={2.5} />
        </div>
      </motion.div>
    );
  };

  // Stats Component
  const StatCard = ({ icon: Icon, value, label, color }: any) => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/40 shadow-lg"
    >
      <div className={`p-3 rounded-xl ${color} mb-3`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="text-3xl font-bold text-slate-900">{value}</div>
      <div className="text-sm text-slate-600 font-medium">{label}</div>
    </motion.div>
  );

  return (
    <section className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30" id="home">
      
      {/* Cinematic Background with Parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y, opacity }}>
        <video
          ref={videoRef}
          autoPlay muted loop playsInline
          className="w-full h-full object-cover scale-110 saturate-[1.15] brightness-[1.08]"
          poster="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop" 
        >
          <source src="/background-4k.mp4" type="video/mp4" />
        </video>
        
        {/* Enhanced Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/60 to-white/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 via-transparent to-rose-100/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-white/30 to-white/80" />
      </motion.div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0002_1px,transparent_1px),linear-gradient(to_bottom,#0002_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Interactive Floating Canvas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <FloatingIcon Icon={Book} color="text-blue-600" bgColor="bg-blue-100/90" position="top-[15%] left-[5%]" size="lg" delay={0.2} duration={7} />
        <FloatingIcon Icon={Heart} color="text-rose-600" bgColor="bg-rose-100/90" position="top-[25%] right-[8%]" size="md" delay={0.4} duration={6.5} />
        <FloatingIcon Icon={Zap} color="text-amber-600" bgColor="bg-amber-100/90" position="bottom-[30%] left-[10%]" size="md" delay={0.6} duration={8} />
        <FloatingIcon Icon={Rocket} color="text-purple-600" bgColor="bg-purple-100/90" position="bottom-[20%] right-[10%]" size="lg" delay={0.3} duration={7.5} />
        <FloatingIcon Icon={Brain} color="text-emerald-600" bgColor="bg-emerald-100/90" position="top-[40%] left-[15%]" size="sm" delay={0.5} duration={6} />
        <FloatingIcon Icon={Award} color="text-indigo-600" bgColor="bg-indigo-100/90" position="bottom-[40%] right-[20%]" size="sm" delay={0.7} duration={7} />
      </div>

      {/* Main Content */}
      <div className="relative z-30 container mx-auto px-4 sm:px-6 pt-20 pb-32 flex flex-col items-center text-center">
        
        {/* Badge with Animation */}
        <motion.div 
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 0.5, 
            type: "spring",
            stiffness: 200,
            damping: 15 
          }}
          className="mb-10"
        >
          <div className="group cursor-default inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-rose-50 backdrop-blur-md border border-white/60 shadow-[0_20px_40px_-15px_rgba(59,130,246,0.2)] hover:shadow-blue-200/50 hover:scale-105 transition-all duration-300">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
            </div>
            <span className="text-slate-800 text-sm font-bold uppercase tracking-widest bg-gradient-to-r from-blue-600 to-rose-600 bg-clip-text text-transparent">
              Admissions 2024-25 Now Open
            </span>
            <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-2 transition-transform" />
          </div>
        </motion.div>

        {/* Main Heading with Gradient */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1, 
            ease: [0.22, 1, 0.36, 1],
            delay: 0.1
          }}
          className="space-y-4 max-w-6xl"
        >
          <div className="relative">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-slate-900 tracking-tight leading-[0.85]">
              <span className="block italic">Minervaa</span>
              <span className="block bg-gradient-to-r from-blue-700 via-violet-700 to-rose-600 bg-clip-text text-transparent italic">
                Vidhya Mandhir
              </span>
            </h1>
            {/* Decorative Underline */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full opacity-60" />
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1.2 }}
          className="mt-12 text-xl sm:text-2xl md:text-3xl text-slate-700 max-w-4xl font-medium leading-relaxed"
        >
          Where young minds blossom into{' '}
          <span className="relative inline-block px-2">
            <span className="relative z-10 font-bold bg-gradient-to-r from-blue-700 to-rose-600 bg-clip-text text-transparent">
              future leaders
            </span>
            <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" preserveAspectRatio="none">
              <path d="M0 8 C 40 2, 80 10, 120 8 C 160 6, 200 2, 200 8" 
                stroke="url(#underline-gradient)" 
                strokeWidth="4" 
                fill="transparent" 
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="underline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#EC4899" />
                </linearGradient>
              </defs>
            </svg>
          </span>{' '}
          through innovative education.
        </motion.p>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl w-full"
        >
          <StatCard icon={Users} value="2,500+" label="Happy Students" color="bg-blue-500" />
          <StatCard icon={Award} value="150+" label="Awards Won" color="bg-amber-500" />
          <StatCard icon={GraduationCap} value="98%" label="Success Rate" color="bg-emerald-500" />
          <StatCard icon={MapPin} value="15" label="Acres Campus" color="bg-violet-500" />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 flex flex-col sm:flex-row gap-6 w-full max-w-2xl"
        >
          <button 
            onClick={() => setIsModalOpen(true)}
            className="group relative px-12 py-5 bg-gradient-to-r from-slate-900 to-blue-900 text-white rounded-2xl font-bold text-lg shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Calendar className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Schedule Campus Visit</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform" />
          </button>

          <button className="group px-12 py-5 bg-white/90 backdrop-blur-sm text-slate-900 border-2 border-white/40 rounded-2xl font-bold text-lg hover:bg-white hover:border-blue-200 hover:shadow-2xl transition-all duration-300 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] flex items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-50 to-rose-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Play className="fill-slate-900 w-5 h-5 ml-0.5" />
            </div>
            <span>Watch Our Story</span>
          </button>
        </motion.div>

        {/* Trust Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-12 flex items-center gap-3 text-slate-600"
        >
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-r from-blue-200 to-rose-200" />
            ))}
          </div>
          <span className="text-sm font-medium">
            <span className="font-bold text-slate-900">500+ parents</span> visited this month
          </span>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-0 w-full px-6 flex justify-center items-center z-30">
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-sm text-slate-600 font-medium">Scroll to explore</span>
          <ChevronDown className="w-6 h-6 text-slate-400" />
        </motion.div>
      </div>

      {/* Enhanced Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[9999] flex items-start justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/60 backdrop-blur-lg pt-[10vh]">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0"
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ 
                type: "spring", 
                damping: 25, 
                stiffness: 300,
                mass: 0.8
              }}
              className="relative w-full max-w-2xl bg-gradient-to-br from-white to-slate-50/95 rounded-[2.5rem] shadow-[0_60px_120px_-20px_rgba(0,0,0,0.3)] overflow-hidden mb-20 border border-white/40"
            >
              {/* Modal Header */}
              <div className="relative bg-gradient-to-r from-slate-900 to-blue-900 p-8 sm:p-10 text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-600/30 to-rose-500/20 blur-3xl" />
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-2xl transition-all duration-300 z-10 hover:rotate-90"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="relative z-10">
                  <h3 className="text-3xl sm:text-4xl font-black tracking-tight">Experience Excellence</h3>
                  <p className="text-slate-300 mt-2 text-lg font-medium">Schedule your personalized campus tour today</p>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { label: "Parent Name", icon: User, placeholder: "John Doe", type: "text" },
                    { label: "Phone Number", icon: Phone, placeholder: "+91 98765 43210", type: "tel" },
                    { label: "Email Address", icon: Mail, placeholder: "john@example.com", type: "email" },
                    { label: "Preferred Date", icon: Calendar, placeholder: "Select a date", type: "date" },
                  ].map((field, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i + 0.2 }}
                      className="space-y-3"
                    >
                      <label className="text-xs font-bold text-slate-600 uppercase tracking-widest ml-1">
                        {field.label}
                      </label>
                      <div className="relative group">
                        <field.icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                        <input 
                          type={field.type}
                          required 
                          placeholder={field.placeholder}
                          className="w-full pl-12 pr-4 py-4 bg-white border-2 border-slate-100 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all duration-300 font-medium text-slate-800 placeholder:text-slate-400 shadow-sm"
                        />
                      </div>
                    </motion.div>
                  ))}
                  
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="space-y-3 sm:col-span-2"
                  >
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-widest ml-1">
                      Student Grade Level
                    </label>
                    <div className="relative group">
                      <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                      <select className="w-full pl-12 pr-10 py-4 bg-white border-2 border-slate-100 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none appearance-none font-medium text-slate-800 cursor-pointer shadow-sm">
                        <option>Select Grade Level</option>
                        {['Pre-K', 'Kindergarten', 'Grade 1-2', 'Grade 3-5', 'Grade 6-8'].map((grade) => (
                          <option key={grade}>{grade}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                    </div>
                  </motion.div>
                </div>
                
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-5 bg-gradient-to-r from-slate-900 to-blue-900 text-white font-bold text-lg rounded-2xl shadow-[0_20px_40px_-10px_rgba(59,130,246,0.4)] hover:shadow-blue-500/30 transition-all duration-300 group"
                >
                  <span className="flex items-center justify-center gap-3">
                    Book Personalized Tour
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                </motion.button>
                
                <p className="text-center text-sm text-slate-500">
                  We'll contact you within 24 hours to confirm your visit
                </p>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}