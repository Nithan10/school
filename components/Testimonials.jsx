"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Star, MessageCircleHeart } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Mayur Bhatt",
    role: "Parent",
    content: "The best school as per my knowledge. They help the children to learn effectively.",
    image: "https://api.dicebear.com/9.x/initials/svg?seed=MB&backgroundColor=eab308",
    rating: 5,
  },
  {
    id: 2,
    name: "Neha Mishra",
    role: "Parent",
    content: "My daughter loves the interactive classes! The teachers are so warm and welcoming.",
    image: "https://api.dicebear.com/9.x/initials/svg?seed=NM&backgroundColor=db2777",
    rating: 5,
  },
  {
    id: 3,
    name: "Rahul Sharma",
    role: "Parent",
    content: "Impressive infrastructure and the teachers are very supportive. My child loves going to school.",
    image: "https://api.dicebear.com/9.x/initials/svg?seed=RS&backgroundColor=2563eb",
    rating: 5,
  },
  {
    id: 4,
    name: "Priya Singh",
    role: "Mother of 2",
    content: "A perfect balance of academics and extracurricular activities. Highly recommended!",
    image: "https://api.dicebear.com/9.x/initials/svg?seed=PS&backgroundColor=16a34a",
    rating: 4,
  },
];

// Define a palette of colors to cycle through
const colorThemes = [
  { border: "border-pink-200", shadow: "shadow-pink-100", icon: "text-pink-100", accent: "text-pink-600", bg: "hover:bg-pink-50" },
  { border: "border-blue-200", shadow: "shadow-blue-100", icon: "text-blue-100", accent: "text-blue-600", bg: "hover:bg-blue-50" },
  { border: "border-purple-200", shadow: "shadow-purple-100", icon: "text-purple-100", accent: "text-purple-600", bg: "hover:bg-purple-50" },
  { border: "border-orange-200", shadow: "shadow-orange-100", icon: "text-orange-100", accent: "text-orange-600", bg: "hover:bg-orange-50" },
];

const TestimonialCard = ({ data, index }) => {
  // Assign a color theme based on the index
  const theme = colorThemes[index % colorThemes.length];

  return (
    <div 
      className={`relative w-[350px] flex-shrink-0 rounded-[2rem] border-4 bg-white p-8 shadow-xl transition-all duration-300 group hover:-translate-y-2 hover:scale-[1.02] ${theme.border} ${theme.shadow} ${theme.bg}`}
    >
      
      {/* Giant Background Quote Icon */}
      <div className={`absolute right-4 top-4 transform rotate-12 transition-colors ${theme.icon}`}>
        <Quote size={80} fill="currentColor" />
      </div>

      <div className="relative z-10 flex flex-col h-full justify-between gap-6">
        <div>
          {/* Rating Stars */}
          <div className="mb-4 flex gap-1.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={18}
                fill={i < data.rating ? "#fbbf24" : "transparent"} // Yellow-400
                className={i < data.rating ? "text-yellow-400" : "text-slate-200"}
              />
            ))}
          </div>

          <p className="text-lg font-medium leading-relaxed text-slate-600">
            "{data.content}"
          </p>
        </div>

        <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
          <div className="p-1 rounded-full border-2 border-white shadow-md">
            <img
              src={data.image}
              alt={data.name}
              className="h-12 w-12 rounded-full"
            />
          </div>
          <div>
            <h4 className="font-black text-slate-800 text-base">{data.name}</h4>
            <p className={`text-xs font-bold uppercase tracking-wider ${theme.accent}`}>
              {data.role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Testimonials() {
  return (
    <section className="relative w-full overflow-hidden bg-sky-50 py-24">
      
      {/* Background Playful Blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-200/40 rounded-full blur-[100px] mix-blend-multiply animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-200/40 rounded-full blur-[100px] mix-blend-multiply animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-200/30 rounded-full blur-[120px] mix-blend-multiply" />
      
      <div className="container mx-auto px-4 mb-16 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block"
        >
          {/* Decorative Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border-2 border-red-100 shadow-[0_4px_10px_rgba(254,202,202,0.4)] mb-6 transform -rotate-2 hover:rotate-0 transition-transform">
             <MessageCircleHeart className="w-5 h-5 text-red-500 fill-red-500 animate-bounce" />
             <span className="text-sm font-bold text-red-500 uppercase tracking-wider">Happy Voices</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 mb-4">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500">Parents</span>
          </h2>
          <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">
             Hear from the families who make our community special.
          </p>
        </motion.div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative flex w-full flex-col gap-8 overflow-hidden py-4">
        
        {/* Left Fade Gradient (Matches bg-sky-50) */}
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-32 bg-gradient-to-r from-sky-50 to-transparent"></div>
        
        {/* Right Fade Gradient (Matches bg-sky-50) */}
        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-32 bg-gradient-to-l from-sky-50 to-transparent"></div>

        {/* Marquee Track */}
        <div className="flex w-full overflow-hidden">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 50, 
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex w-max gap-8 px-4 hover:[animation-play-state:paused]"
          >
            {/* We duplicate the list to create the infinite loop effect. Using index to assign colors. */}
            {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((item, idx) => (
              <TestimonialCard key={`${item.id}-${idx}`} data={item} index={idx} />
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}