"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@heroui/react";
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Users, 
  Award, 
  Heart, 
  Target, 
  Zap, 
  TrendingUp,
  Star,
  Sun
} from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description, color, shadowColor }: { icon: React.ElementType; title: string; description: string; color: string; shadowColor: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    whileHover={{ y: -8, scale: 1.02 }}
    className="relative group h-full"
  >
    {/* Card Content */}
    <div className={`relative bg-white p-6 rounded-[2rem] border-4 border-white shadow-xl ${shadowColor} transition-all duration-300 h-full overflow-hidden`}>
      {/* Decorative Gradient Blob */}
      <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${color} opacity-10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`} />
      
      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 shadow-lg text-white transform group-hover:rotate-12 transition-transform duration-300`}>
        <Icon className="w-7 h-7" />
      </div>
      <h4 className="text-xl font-black text-slate-800 mb-2">{title}</h4>
      <p className="text-sm text-slate-500 font-medium leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const StatCard = ({ value, label, icon: Icon, color }: { value: string; label: string; icon: React.ElementType; color: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    whileHover={{ scale: 1.05, rotate: -2 }}
    className="relative group"
  >
    <div className={`relative bg-white p-6 rounded-[2rem] border-4 border-white shadow-xl hover:shadow-2xl transition-all`}>
      <div className="flex items-center justify-center mb-3">
        <div className={`p-3 rounded-full bg-${color}-100 text-${color}-500`}>
             <Icon className={`w-8 h-8 ${color === 'yellow' ? 'text-yellow-500' : color === 'pink' ? 'text-pink-500' : 'text-blue-500'}`} />
        </div>
      </div>
      <h4 className={`text-4xl font-black mb-1 bg-gradient-to-r ${color === 'yellow' ? 'from-yellow-400 to-orange-500' : color === 'pink' ? 'from-pink-400 to-rose-500' : 'from-blue-400 to-cyan-500'} bg-clip-text text-transparent`}>
        {value}
      </h4>
      <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">{label}</p>
    </div>
  </motion.div>
);

export default function AboutUsPremium() {
  const [isMounted, setIsMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const features = [
    {
      icon: Target,
      title: "Personalized Learning",
      description: "Tailored education paths that adapt to each child's unique learning style and pace.",
      color: "from-purple-400 to-purple-600",
      shadowColor: "hover:shadow-purple-200"
    },
    {
      icon: Award,
      title: "Expert Educators",
      description: "Certified teachers with passion for nurturing young minds and fostering creativity.",
      color: "from-blue-400 to-blue-600",
      shadowColor: "hover:shadow-blue-200"
    },
    {
      icon: Heart,
      title: "Safe Environment",
      description: "Secure, inspiring spaces designed for exploration, growth, and joyful learning.",
      color: "from-pink-400 to-rose-600",
      shadowColor: "hover:shadow-pink-200"
    },
    {
      icon: Zap,
      title: "Holistic Development",
      description: "Focus on academic, social, emotional, and physical growth for well-rounded students.",
      color: "from-yellow-400 to-orange-500",
      shadowColor: "hover:shadow-orange-200"
    },
  ];

  return (
    <section className="relative w-full flex items-center justify-center bg-sky-50 overflow-hidden py-16 md:py-24" id="about">
      
      {/* Background Playful Elements */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Soft Blobs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-200/40 rounded-full blur-[100px] mix-blend-multiply animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-200/40 rounded-full blur-[100px] mix-blend-multiply animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-200/30 rounded-full blur-[120px] mix-blend-multiply" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-24 items-center mb-20">
            
            {/* LEFT: Content */}
            <div className="flex-1 space-y-8">
              {/* Badge */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-yellow-400 shadow-[4px_4px_0px_0px_rgba(250,204,21,1)]"
              >
                <Sun className="w-5 h-5 text-yellow-500 animate-spin-slow" />
                <span className="text-slate-700 text-sm font-bold uppercase tracking-wider">Who We Are</span>
              </motion.div>

              {/* Heading */}
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.1]">
                  Building Strong
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500">
                    Foundations
                  </span>
                </h2>
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
                We provide a seamless learning journey tailored for every stage of early development. From playful exploration to structured academic excellence, we focus on{" "}
                <span className="bg-yellow-100 text-yellow-800 px-1 rounded font-bold">holistic growth</span> and{" "}
                <span className="bg-sky-100 text-sky-800 px-1 rounded font-bold">lifelong success</span>.
              </p>

              {/* Key Points */}
              <div className="space-y-4">
                {[
                  "Individual attention for every child's unique potential",
                  "Modern facilities with latest educational technology",
                  "Strong parent-teacher partnership for success"
                ].map((point, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="p-1.5 rounded-full bg-green-100 text-green-600 group-hover:bg-green-500 group-hover:text-white transition-colors mt-0.5 shadow-sm">
                      <CheckCircle2 className="w-5 h-5" strokeWidth={3} />
                    </div>
                    <span className="text-slate-700 font-bold text-base md:text-lg">{point}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-4">
                {isMounted && (
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-bold text-lg px-8 py-7 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3 group"
                    endContent={<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                  >
                    Start Your Journey
                  </Button>
                )}
              </div>
            </div>

            {/* RIGHT: Image & Floating Elements */}
            <div className="flex-1 relative w-full lg:h-[600px] flex items-center justify-center">
              
              {/* Main Image with Sticker Border */}
              <motion.div 
                whileHover={{ scale: 1.02, rotate: 1 }}
                className="relative w-full h-[350px] sm:h-[450px] lg:h-[550px] rounded-[3rem] overflow-hidden shadow-2xl border-[8px] border-white z-10"
              >
               
                <img 
                  src="/aboutus/image11.webp"
                  alt="Students learning" 
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating Rating Card - Bouncy */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 left-0 md:-left-8 bg-white p-4 rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border-4 border-white z-20 max-w-[200px]"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-yellow-100 p-3 rounded-2xl text-yellow-600">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-0.5 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-orange-400 text-orange-400" />
                      ))}
                    </div>
                    <p className="font-black text-xl text-slate-800">4.9/5</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase">500+ Families</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Achievement Badge - Rotating */}
              <motion.div 
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 right-0 md:-right-8 bg-gradient-to-br from-purple-500 to-indigo-600 p-5 rounded-3xl shadow-xl shadow-purple-200 z-20 border-4 border-white text-center transform rotate-3"
              >
                <Award className="w-10 h-10 text-white mx-auto mb-1" />
                <p className="font-black text-3xl text-white">12+</p>
                <p className="text-[10px] text-white/90 font-bold uppercase tracking-wide">Years Excellence</p>
              </motion.div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
            <StatCard value="500+" label="Happy Students" icon={Users} color="yellow" />
            <StatCard value="25+" label="Expert Faculty" icon={Award} color="pink" />
            <StatCard value="98%" label="Success Rate" icon={TrendingUp} color="blue" />
          </div>

          {/* Features Grid */}
          <div className="space-y-10">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
                Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Our School?</span>
              </h3>
              <p className="text-lg text-slate-500 font-medium">
                Discover what makes us the perfect choice for your child's educational adventure
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, idx) => (
                <FeatureCard key={idx} {...feature} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}