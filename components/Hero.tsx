"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, Play, X, User, Phone, Mail, GraduationCap, Star, Sun, Book, Heart, School, Zap, Rocket, Sparkles } from "lucide-react";

export default function HeroPrimarySchool() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 120]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Request submitted! We will contact you shortly.");
    setIsModalOpen(false);
  };

  // Ensure video plays on mobile
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay prevented:", error);
        // Fallback: try muted autoplay
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.play().catch(e => console.log("Muted autoplay also prevented:", e));
        }
      });
    }
  }, []);

  // Floating 3D Icon Component
  const FloatingIcon = ({ 
    Icon, 
    color, 
    bgColor, 
    position, 
    delay = 0,
    duration = 4 
  }: { 
    Icon: any; 
    color: string; 
    bgColor: string; 
    position: string;
    delay?: number;
    duration?: number;
  }) => (
    <motion.div
      className={`absolute ${position} z-20`}
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        rotate: 0,
        y: [0, -15, 0],
      }}
      transition={{
        opacity: { delay, duration: 0.6 },
        scale: { delay, duration: 0.6, type: "spring" },
        rotate: { delay, duration: 0.8 },
        y: { 
          delay: delay + 0.8,
          duration, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }
      }}
    >
      <div 
        className={`${bgColor} p-3 md:p-4 rounded-2xl shadow-2xl border-4 border-white transform hover:scale-110 hover:rotate-12 transition-all duration-300 cursor-pointer backdrop-blur-sm`}
        style={{
          boxShadow: `0 10px 40px -10px ${color}40, 0 0 0 4px white`
        }}
      >
        <Icon className={`w-6 h-6 md:w-8 md:h-8 ${color}`} strokeWidth={2.5} />
      </div>
    </motion.div>
  );

  return (
    <section className="relative h-[100dvh] min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-sky-50 text-slate-900" id="home">
      
      {/* Background Video - Bright & Sunny */}
      <motion.div className="absolute inset-0 z-0 h-full w-full" style={{ y }}>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover contrast-[1.05] saturate-[1.2] brightness-[1.1]"
          poster="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop" 
        >
          <source src="/background-4k.mp4" type="video/mp4" />
          <source src="/background-mobile.mp4" type="video/mp4" />
          {/* Fallback - Rainbow Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 via-pink-200 to-sky-200" />
        </video>
        
        {/* Overlay: Warm fade from bottom up (White/Orange) to make text readable */}
        <div className="absolute inset-0 bg-yellow-100/20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-orange-50/90 via-white/60 to-transparent" />
      </motion.div>

      {/* Decorative Floating Blobs */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} 
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-20 left-[10%] w-16 h-16 bg-yellow-400 rounded-full blur-2xl opacity-60 z-10 hidden md:block"
      />
      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }} 
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-40 right-[10%] w-24 h-24 bg-pink-400 rounded-full blur-3xl opacity-50 z-10 hidden md:block"
      />

      {/* Floating 3D Icons - Positioned around the content */}
      <FloatingIcon 
        Icon={Book} 
        color="text-blue-500" 
        bgColor="bg-blue-100" 
        position="top-[15%] left-[8%] hidden lg:block"
        delay={0.2}
        duration={4.5}
      />
      
      <FloatingIcon 
        Icon={Heart} 
        color="text-pink-500" 
        bgColor="bg-pink-100" 
        position="top-[20%] left-[15%] hidden md:block lg:hidden"
        delay={0.4}
        duration={3.8}
      />
      
      <FloatingIcon 
        Icon={School} 
        color="text-indigo-500" 
        bgColor="bg-indigo-100" 
        position="top-[18%] right-[10%] hidden lg:block"
        delay={0.6}
        duration={4.2}
      />
      
      <FloatingIcon 
        Icon={Zap} 
        color="text-yellow-500" 
        bgColor="bg-yellow-100" 
        position="top-[25%] right-[5%] hidden md:block lg:hidden"
        delay={0.8}
        duration={3.5}
      />
      
      <FloatingIcon 
        Icon={Rocket} 
        color="text-purple-500" 
        bgColor="bg-purple-100" 
        position="bottom-[25%] left-[12%] hidden lg:block"
        delay={1}
        duration={4.8}
      />
      
      <FloatingIcon 
        Icon={Sparkles} 
        color="text-emerald-500" 
        bgColor="bg-emerald-100" 
        position="bottom-[30%] right-[15%] hidden lg:block"
        delay={1.2}
        duration={4}
      />

      {/* Mobile Floating Icons - Fewer and positioned differently */}
      <FloatingIcon 
        Icon={Heart} 
        color="text-pink-500" 
        bgColor="bg-pink-100" 
        position="top-[12%] left-[5%] md:hidden"
        delay={0.3}
        duration={3.5}
      />
      
      <FloatingIcon 
        Icon={Star} 
        color="text-yellow-500" 
        bgColor="bg-yellow-100" 
        position="top-[15%] right-[8%] md:hidden"
        delay={0.5}
        duration={4}
      />
      
      <FloatingIcon 
        Icon={Sparkles} 
        color="text-emerald-500" 
        bgColor="bg-emerald-100" 
        position="bottom-[20%] left-[8%] md:hidden"
        delay={0.7}
        duration={3.8}
      />
      
      <FloatingIcon 
        Icon={Rocket} 
        color="text-purple-500" 
        bgColor="bg-purple-100" 
        position="bottom-[25%] right-[10%] md:hidden"
        delay={0.9}
        duration={4.2}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl px-4 sm:px-6 md:px-8 text-center space-y-4 md:space-y-6 mt-16 md:mt-0">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          {/* Badge: Sticker style with shadow */}
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border-2 border-yellow-400 text-yellow-600 text-xs sm:text-sm font-black tracking-wide uppercase shadow-[4px_4px_0px_rgba(250,204,21,0.4)] transform rotate-[-2deg] hover:rotate-0 transition-transform">
            <Sun className="w-4 h-4 text-yellow-500 animate-spin-slow" />
            Admissions Open 2024-25
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight px-2"
        >
          <span className="block text-slate-900 drop-shadow-sm">Minervaa</span>
          {/* Gradient Text: Playful Rainbow/Crayon effect */}
          <span className="block bg-gradient-to-r from-rose-500 via-orange-400 to-violet-500 bg-clip-text text-transparent drop-shadow-md pb-3">
            Vidhya Mandhir
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 max-w-xs sm:max-w-md md:max-w-2xl mx-auto font-medium leading-relaxed px-2"
        >
          Providing a world-class foundation for students from <span className="inline-block bg-sky-100 text-sky-700 px-2 rounded-md font-bold -rotate-1 mx-1">Standard 1 to 5</span> in a safe, creative, and joyful campus.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-5 pt-4 md:pt-6 px-2"
        >
          {/* Primary Button: Vibrant Pink/Rose with "Pop" shadow */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="group w-full sm:w-auto px-6 py-3.5 md:px-8 md:py-4 bg-rose-500 hover:bg-rose-400 rounded-full font-extrabold text-white shadow-[0_8px_20px_-6px_rgba(244,63,94,0.5)] hover:shadow-[0_12px_25px_-8px_rgba(244,63,94,0.6)] hover:-translate-y-1 active:translate-y-0 active:scale-95 transition-all duration-300 text-sm md:text-lg flex items-center justify-center gap-2 border-b-4 border-rose-700 hover:border-rose-600"
          >
            Book a Campus Visit <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          {/* Secondary Button: White with Violet accents */}
          <button className="w-full sm:w-auto px-6 py-3.5 md:px-8 md:py-4 bg-white hover:bg-violet-50 border-2 border-violet-100 rounded-full font-bold text-violet-600 hover:text-violet-700 shadow-lg shadow-violet-100/50 hover:-translate-y-1 active:scale-95 transition-all duration-300 text-sm md:text-lg flex items-center justify-center gap-2">
            <Play className="w-5 h-5 fill-violet-600" /> Watch School Life
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator - Playful Bounce */}
      <motion.div
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <div className="p-3 rounded-full bg-white/80 backdrop-blur-md border border-white shadow-lg shadow-orange-500/10">
          <ChevronDown className="w-6 h-6 text-orange-400" />
        </div>
      </motion.div>

      {/* Modal - Bright & Clean */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[9999] flex items-end md:items-center justify-center p-0 md:p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ y: "100%", scale: 0.9 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: "100%", scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full md:w-[500px] bg-white rounded-t-3xl md:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90dvh] md:max-h-[85dvh]"
            >
              {/* Modal Header: Professional Gradient */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white flex justify-between items-center shrink-0 relative overflow-hidden">
                {/* Decorative circle in header */}
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/20 rounded-full blur-xl"></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold flex items-center gap-2">
                    Plan Your Visit <Star className="w-5 h-5 text-amber-300 fill-amber-300" />
                  </h3>
                  <p className="text-blue-100 text-sm">Come say hello to our happy campus!</p>
                </div>
                <button 
                  onClick={() => setIsModalOpen(false)} 
                  className="relative z-10 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors hover:rotate-90 duration-300"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
              
              {/* Modal Form */}
              <div className="overflow-y-auto p-6 pb-8 bg-slate-50">
                <form onSubmit={handleSubmit} className="space-y-5 text-slate-800">
                  
                  {/* Parent Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-blue-700 uppercase tracking-wider ml-1">Parent Name</label>
                    <div className="relative group">
                      <div className="absolute left-3 top-3.5 w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 group-focus-within:bg-blue-600 group-focus-within:text-white transition-colors">
                        <User className="w-5 h-5" />
                      </div>
                      <input 
                        type="text" 
                        required 
                        placeholder="Mom or Dad's Name" 
                        className="w-full pl-14 pr-4 py-3.5 bg-white border-2 border-slate-200 rounded-2xl text-sm font-medium focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder:text-slate-400 text-slate-700"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-teal-700 uppercase tracking-wider ml-1">Phone</label>
                    <div className="relative group">
                      <div className="absolute left-3 top-3.5 w-9 h-9 bg-teal-50 rounded-lg flex items-center justify-center text-teal-600 group-focus-within:bg-teal-600 group-focus-within:text-white transition-colors">
                        <Phone className="w-5 h-5" />
                      </div>
                      <input 
                        type="tel" 
                        required 
                        placeholder="+91 99999 99999" 
                        className="w-full pl-14 pr-4 py-3.5 bg-white border-2 border-slate-200 rounded-2xl text-sm font-medium focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all placeholder:text-slate-400 text-slate-700"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-cyan-700 uppercase tracking-wider ml-1">Email</label>
                    <div className="relative group">
                      <div className="absolute left-3 top-3.5 w-9 h-9 bg-cyan-50 rounded-lg flex items-center justify-center text-cyan-600 group-focus-within:bg-cyan-600 group-focus-within:text-white transition-colors">
                        <Mail className="w-5 h-5" />
                      </div>
                      <input 
                        type="email" 
                        required 
                        placeholder="email@example.com" 
                        className="w-full pl-14 pr-4 py-3.5 bg-white border-2 border-slate-200 rounded-2xl text-sm font-medium focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all placeholder:text-slate-400 text-slate-700"
                      />
                    </div>
                  </div>

                  {/* Grade */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-amber-700 uppercase tracking-wider ml-1">Grade Interest</label>
                    <div className="relative group">
                      <div className="absolute left-3 top-3.5 w-9 h-9 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600 group-focus-within:bg-amber-600 group-focus-within:text-white transition-colors">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <select className="w-full pl-14 pr-4 py-3.5 bg-white border-2 border-slate-200 rounded-2xl text-sm font-medium focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 outline-none appearance-none text-slate-700 cursor-pointer">
                        <option>Grade 1</option>
                        <option>Grade 2</option>
                        <option>Grade 3</option>
                        <option>Grade 4</option>
                        <option>Grade 5</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-2xl shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 mt-4"
                  >
                    Confirm Booking
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}