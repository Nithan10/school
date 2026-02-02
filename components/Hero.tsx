"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Play,
  X,
  User,
  Phone,
  Mail,
  GraduationCap,
  Star,
  Book,
  Heart,
  Zap,
  Rocket,
  Sparkles,
} from "lucide-react";

export default function HeroPrimarySchool() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 180]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  const FloatingIcon = ({ Icon, color, bgColor, position, delay = 0, size = "md" }: any) => {
    const sizeMap: any = {
      sm: "w-10 h-10 sm:w-12 sm:h-12",
      md: "w-12 h-12 sm:w-16 sm:h-16",
      lg: "w-16 h-16 sm:w-20 sm:h-20",
    };

    return (
      <motion.div
        className={`absolute ${position} z-20`}
        initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
        animate={{ opacity: 1, scale: 1, rotate: 0, y: [0, -20, 0] }}
        transition={{ delay, duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className={`${bgColor} ${sizeMap[size]} rounded-3xl border-2 border-white flex items-center justify-center shadow-xl backdrop-blur-md hover:scale-110 transition-transform`}
        >
          <Icon className={`w-1/2 h-1/2 ${color}`} strokeWidth={2.5} />
        </div>
      </motion.div>
    );
  };

  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden bg-slate-50 flex items-center justify-center">
      {/* Background Video */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-105"
          poster="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022"
        >
          <source src="/background-4k.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/40 via-transparent to-rose-50/40" />
      </motion.div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingIcon Icon={Book} color="text-blue-500" bgColor="bg-blue-50/80" position="top-[18%] left-[8%]" size="lg" delay={0.2} />
        <FloatingIcon Icon={Heart} color="text-rose-500" bgColor="bg-rose-50/80" position="top-[30%] right-[10%]" delay={0.4} />
        <FloatingIcon Icon={Zap} color="text-amber-500" bgColor="bg-amber-50/80" position="bottom-[28%] left-[12%]" delay={0.6} />
        <FloatingIcon Icon={Rocket} color="text-purple-500" bgColor="bg-purple-50/80" position="bottom-[18%] right-[12%]" size="lg" delay={0.3} />
        <FloatingIcon Icon={Star} color="text-emerald-500" bgColor="bg-emerald-50/80" position="top-[48%] right-[5%]" size="sm" delay={0.7} />
      </div>

      {/* Content */}
      <div className="relative z-30 max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/80 backdrop-blur-md border shadow mb-10"
        >
          <Sparkles className="w-4 h-4 text-yellow-500" />
          <span className="text-xs font-extrabold tracking-widest text-slate-700 uppercase">Admissions Open 2024–25</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter italic uppercase text-slate-900"
        >
          Minervaa
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-2 text-4xl sm:text-7xl md:text-8xl font-black italic bg-gradient-to-r from-blue-600 via-violet-600 to-rose-500 bg-clip-text text-transparent"
        >
          Vidhya Mandhir
        </motion.h2>

        <p className="mt-8 text-lg sm:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
          Nurturing confident learners and compassionate leaders through joyful education in a world‑class learning environment.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-10 py-5 rounded-2xl bg-slate-900 text-white font-black text-lg shadow-2xl hover:bg-blue-600 hover:-translate-y-1 transition-all"
          >
            Book a Campus Visit <ArrowRight className="inline ml-2" />
          </button>

          <button className="px-10 py-5 rounded-2xl bg-white border-2 border-slate-200 font-black text-lg flex items-center gap-3 hover:bg-slate-50 transition">
            <span className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
              <Play className="w-4 h-4 fill-slate-900" />
            </span>
            Watch Our Story
          </button>
        </div>
      </div>

      {/* Scroll Hint */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 text-slate-300"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[999] flex items-start justify-center bg-black/40 backdrop-blur-md p-6 pt-[12vh]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-2xl bg-white rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <div className="bg-slate-900 p-10 text-white relative">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-6 right-6 bg-white/10 p-3 rounded-xl hover:bg-white/20"
                >
                  <X />
                </button>
                <h3 className="text-4xl font-black">Visit Our Campus</h3>
                <p className="text-slate-400 mt-2">Book a personalised school tour</p>
              </div>

              <form className="p-10 grid gap-6">
                {[User, Phone, Mail].map((Icon, i) => (
                  <div key={i} className="relative">
                    <Icon className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" />
                    <input
                      required
                      placeholder={["Parent Name", "Phone Number", "Email Address"][i]}
                      className="w-full pl-14 pr-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl font-bold focus:border-blue-500 focus:bg-white outline-none"
                    />
                  </div>
                ))}

                <div className="relative">
                  <GraduationCap className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" />
                  <select className="w-full pl-14 pr-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl font-bold">
                    {[1, 2, 3, 4, 5].map((g) => (
                      <option key={g}>Standard {g}</option>
                    ))}
                  </select>
                </div>

                <button className="mt-4 py-5 bg-slate-900 text-white font-black rounded-2xl text-xl hover:bg-blue-600 transition">
                  Confirm My Visit
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
