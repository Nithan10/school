"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle2, Star, Heart, Sun } from "lucide-react";
import { Button } from "@heroui/react";

const programs = [
  {
    id: 1,
    title: "Correspondent's Message",
    category: "Our Vision",
    image: "/programs/program1.webp",
    description: "At Minervaa Vidhya Mandhir, education is about nurturing confident, compassionate individuals in a safe and inspiring environment.",
    points: ["Holistic child development", "Safe & inclusive campus", "Strong moral values"],
    // Bright Gradient: Violet to Pink
    color: "from-violet-500 to-fuchsia-500",
    shadow: "shadow-fuchsia-200",
    border: "border-fuchsia-200",
    icon: <Heart className="w-4 h-4 text-white" />
  },
  {
    id: 2,
    title: "Community Welfare",
    category: "Responsibility",
    image: "/programs/program2.webp",
    description: "Students actively engage in social welfare projects to build empathy, leadership, and responsibility towards the society.",
    points: ["Community outreach", "Environmental awareness", "Charity initiatives"],
    // Bright Gradient: Emerald to Teal
    color: "from-emerald-400 to-teal-500",
    shadow: "shadow-teal-200",
    border: "border-teal-200",
    icon: <Sun className="w-4 h-4 text-white" />
  },
  {
    id: 3,
    title: "Principal's Message",
    category: "Leadership",
    image: "/programs/program3.webp",
    description: "Education transforms individuals into responsible citizens with discipline, confidence, and purpose.",
    points: ["Academic excellence", "Discipline & values", "Student-centered approach"],
    // Bright Gradient: Orange to Red
    color: "from-orange-400 to-rose-500",
    shadow: "shadow-orange-200",
    border: "border-orange-200",
    icon: <Star className="w-4 h-4 text-white" />
  },
];

export default function Programs3DCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const AUTO_PLAY_INTERVAL = 5000;

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % programs.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? programs.length - 1 : prev - 1));
  };

  // Auto-play
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(nextSlide, AUTO_PLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [paused, nextSlide]);

  // Mobile: Simple vertical layout (Cards are white now)
  if (isMobile) {
    return (
      <section className="py-12 bg-sky-50 overflow-hidden relative" id="programs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-yellow-200 shadow-sm text-sm font-bold text-yellow-600 mb-3">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              Our Programs
            </div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Shaping <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-pink-500">Future Leaders</span>
            </h2>
          </div>

          <div className="space-y-6">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-3xl shadow-xl overflow-hidden border-2 ${program.border}`}
              >
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute top-3 left-3 px-3 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${program.color} shadow-md flex items-center gap-1`}>
                    {program.icon} {program.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{program.title}</h3>
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed">{program.description}</p>
                  <div className="space-y-2 mb-6">
                    {program.points.map((point, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className={`p-1 rounded-full bg-gradient-to-r ${program.color}`}>
                          <CheckCircle2 className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-slate-700 font-medium text-sm">{point}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className={`w-full bg-gradient-to-r ${program.color} text-white font-bold shadow-lg ${program.shadow}`}
                    endContent={<ArrowRight size={16} />}
                  >
                    Learn More
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Desktop: 3D Carousel (Bright Theme)
  return (
    <section className="py-24 bg-sky-50 overflow-hidden relative" id="programs">
      
      {/* Background Decorative Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-200/50 rounded-full blur-[80px] mix-blend-multiply" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-200/50 rounded-full blur-[80px] mix-blend-multiply" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-white/40 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
             whileHover={{ scale: 1.05 }}
             className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border-2 border-yellow-200 shadow-lg shadow-yellow-100/50 text-sm font-bold text-yellow-700 mb-4 cursor-default"
          >
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 animate-spin-slow" />
            Our Programs
          </motion.div>
          <h2 className="text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">
            Shaping <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-pink-500 to-orange-500">Future Leaders</span>
          </h2>
        </div>

        <div className="relative h-[550px] flex items-center justify-center perspective-1000">
          {programs.map((program, index) => {
            const offset = (index - currentIndex + programs.length) % programs.length;
            let style: any = {};

            // 3D Logic stays the same, visuals change
            if (offset === 0) {
              style = { zIndex: 20, opacity: 1, scale: 1, x: 0, rotateY: 0 };
            } else if (offset === 1) {
              style = { zIndex: 10, opacity: 0.6, scale: 0.85, x: "60%", rotateY: -15 };
            } else if (offset === programs.length - 1) {
              style = { zIndex: 10, opacity: 0.6, scale: 0.85, x: "-60%", rotateY: 15 };
            } else {
              style = { zIndex: 0, opacity: 0, scale: 0.5, x: 0 };
            }

            return (
              <motion.div
                key={program.id}
                className={`absolute w-full max-w-4xl h-full bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border-4 ${program.border}`}
                animate={style}
                transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
                style={{ transformStyle: "preserve-3d" }}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              >
                {/* Image Section */}
                <div className="w-full md:w-1/2 h-64 md:h-full relative overflow-hidden group">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gentle gradient overlay for text readability if needed, but keeping it clean here */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  
                  <div className={`absolute top-6 left-6 z-20 px-4 py-2 rounded-full text-sm font-bold text-white bg-gradient-to-r ${program.color} shadow-lg flex items-center gap-2`}>
                    {program.icon} {program.category}
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="w-full md:w-1/2 p-10 flex flex-col justify-center bg-white relative">
                  {/* Decorative faint background icon */}
                  <div className="absolute right-[-20px] top-[-20px] opacity-5 rotate-12">
                    {program.icon && <div className="scale-[10] text-slate-900">{program.icon}</div>}
                  </div>

                  <h3 className="text-3xl font-black text-slate-800 mb-4">{program.title}</h3>
                  <p className="text-slate-600 mb-8 text-lg leading-relaxed font-medium">{program.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {program.points.map((point, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className={`shrink-0 p-1.5 rounded-full bg-gradient-to-r ${program.color}`}>
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-slate-700 font-bold text-base">{point}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={`bg-gradient-to-r ${program.color} text-white font-bold text-lg py-6 px-8 rounded-xl shadow-xl ${program.shadow} w-fit hover:scale-105 transition-transform`}
                    endContent={<ArrowRight size={20} />}
                  >
                    Learn More
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Controls - Bright & Bouncy */}
        <div className="flex flex-col items-center gap-4 mt-16">
          <div className="flex items-center gap-6 bg-white/80 backdrop-blur-sm p-2 rounded-full border border-white shadow-xl shadow-slate-200/50">
            <button 
              onClick={() => { setPaused(true); prevSlide(); }}
              className="p-3 rounded-full bg-white border-2 border-slate-100 text-slate-400 hover:text-indigo-600 hover:border-indigo-200 hover:bg-indigo-50 transition-all shadow-sm"
            >
              <ArrowLeft size={24} />
            </button>
            <div className="flex gap-3">
              {programs.map((program, i) => (
                <button 
                  key={i} 
                  onClick={() => { setPaused(true); setCurrentIndex(i); }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${i === currentIndex ? `w-8 bg-gradient-to-r ${program.color}` : 'bg-slate-200 hover:bg-slate-300'}`}
                />
              ))}
            </div>
            <button 
              onClick={() => { setPaused(true); nextSlide(); }}
              className="p-3 rounded-full bg-white border-2 border-slate-100 text-slate-400 hover:text-indigo-600 hover:border-indigo-200 hover:bg-indigo-50 transition-all shadow-sm"
            >
              <ArrowRight size={24} />
            </button>
          </div>
          <div className="text-xs font-bold uppercase tracking-widest text-slate-400">
            {paused ? "Hovering" : "Auto-playing"}
          </div>
        </div>
      </div>
    </section>
  );
}