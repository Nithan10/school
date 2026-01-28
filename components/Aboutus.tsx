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
  Star 
} from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description, gradient }: { icon: React.ElementType; title: string; description: string; gradient: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    whileHover={{ y: -4, scale: 1.02 }}
    className="relative group"
  >
    {/* Hover Glow Effect */}
    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 rounded-xl md:rounded-2xl blur-xl transition-opacity duration-500`} />
    
    {/* Card Content */}
    <div className="relative bg-slate-900/50 backdrop-blur-md p-4 md:p-6 rounded-xl md:rounded-2xl border border-white/10 hover:border-white/20 shadow-xl transition-all duration-500 h-full">
      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-3 md:mb-4 shadow-lg shadow-purple-900/20`}>
        <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </div>
      <h4 className="text-base md:text-lg font-bold text-white mb-1 md:mb-2">{title}</h4>
      <p className="text-xs md:text-sm text-slate-400 leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const StatCard = ({ value, label, icon: Icon }: { value: string; label: string; icon: React.ElementType }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    whileHover={{ scale: 1.05, y: -5 }}
    className="relative group"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl md:rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative bg-slate-900/80 backdrop-blur-sm p-4 md:p-6 rounded-xl md:rounded-2xl border border-white/5 group-hover:border-purple-500/30 shadow-lg text-center transition-colors">
      <div className="flex items-center justify-center mb-2 md:mb-3">
        <Icon className="w-6 h-6 md:w-8 md:h-8 text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
      </div>
      <h4 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-1">{value}</h4>
      <p className="text-xs text-slate-400 font-semibold uppercase tracking-wide">{label}</p>
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
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Award,
      title: "Expert Educators",
      description: "Certified teachers with passion for nurturing young minds and fostering creativity.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Heart,
      title: "Safe Environment",
      description: "Secure, inspiring spaces designed for exploration, growth, and joyful learning.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Zap,
      title: "Holistic Development",
      description: "Focus on academic, social, emotional, and physical growth for well-rounded students.",
      gradient: "from-green-500 to-emerald-500"
    },
  ];

  return (
    <section className="relative w-full flex items-center justify-center bg-slate-950 overflow-hidden py-12 md:py-16 lg:py-24" id="about">
      
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Subtle dark grid texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-64 h-64 md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-64 h-64 md:w-[400px] md:h-[400px] bg-gradient-to-tr from-blue-900/20 to-cyan-900/20 rounded-full blur-[100px]" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-24 items-center mb-12 md:mb-16 lg:mb-20">
            
            {/* LEFT: Content */}
            <div className="flex-1 space-y-6 md:space-y-8">
              {/* Badge */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-slate-900/80 border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                  <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-purple-400" />
                  <span className="text-purple-300 text-xs font-bold uppercase tracking-wider">Who We Are</span>
                </div>
              </div>

              {/* Heading */}
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.1]">
                  Building Strong
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent filter drop-shadow-[0_0_10px_rgba(168,85,247,0.3)]">
                    Foundations
                  </span>
                </h2>
              </div>

              {/* Description */}
              <p className="text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed">
                We provide a seamless learning journey tailored for every stage of early development. From playful exploration to structured academic excellence, we focus on{" "}
                <span className="font-bold text-purple-400">holistic growth</span> and{" "}
                <span className="font-bold text-purple-400">lifelong success</span>.
              </p>

              {/* Key Points */}
              <div className="space-y-3 md:space-y-4">
                {[
                  "Individual attention for every child's unique potential",
                  "Modern facilities with latest educational technology",
                  "Strong parent-teacher partnership for success"
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 group">
                    <div className="p-1 rounded-full bg-purple-900/30 text-purple-400 border border-purple-500/20 group-hover:border-purple-500/50 group-hover:scale-110 transition-all mt-0.5">
                      <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5" strokeWidth={2.5} />
                    </div>
                    <span className="text-slate-300 font-medium text-sm md:text-base leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-2 md:pt-4">
                {isMounted && (
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-base md:text-lg px-6 md:px-8 py-4 md:py-6 rounded-xl md:rounded-2xl shadow-[0_0_20px_rgba(147,51,234,0.3)] flex items-center justify-center gap-2 md:gap-3 hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] transition-all border border-white/10"
                    endContent={<ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />}
                  >
                    Start Your Journey
                  </Button>
                )}
              </div>
            </div>

            {/* RIGHT: Image */}
            <div className="flex-1 relative w-full lg:h-[500px] flex items-center justify-center">
              <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-purple-900/20 group border border-white/10">
                <img 
                  src="/aboutus/image11.webp"
                  alt="Students learning" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              </div>

              {/* Floating Rating Card */}
              <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 lg:bottom-8 lg:-left-6 bg-slate-900/90 backdrop-blur-md p-3 md:p-4 lg:p-6 rounded-xl md:rounded-2xl lg:rounded-3xl shadow-xl border border-white/10 max-w-[180px] md:max-w-[220px] lg:max-w-[280px]">
                <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
                  <div className="bg-gradient-to-br from-orange-500 to-pink-600 p-2 md:p-3 lg:p-4 rounded-xl md:rounded-2xl text-white shadow-lg shadow-orange-500/20">
                    <Users className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" />
                  </div>
                  <div>
                    <div className="flex items-center gap-0.5 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 lg:w-4 lg:h-4 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <p className="font-black text-lg md:text-xl lg:text-2xl text-white">4.9/5</p>
                    <p className="text-[10px] md:text-xs text-slate-400 font-semibold">
                      From 500+ happy families
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Achievement Badge */}
              <div className="absolute top-2 right-2 md:top-4 md:right-4 lg:top-8 lg:-right-6 bg-gradient-to-br from-purple-600 to-pink-600 p-3 md:p-4 lg:p-6 rounded-xl md:rounded-2xl lg:rounded-3xl shadow-xl shadow-purple-900/30 border border-white/10">
                <div className="text-center">
                  <Award className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white mx-auto mb-1 md:mb-2 drop-shadow-md" />
                  <p className="font-black text-xl md:text-2xl lg:text-3xl text-white drop-shadow-sm">12+</p>
                  <p className="text-[10px] md:text-xs text-white/90 font-bold uppercase tracking-wide">
                    Years Excellence
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16 lg:mb-20">
            <StatCard value="500+" label="Happy Students" icon={Users} />
            <StatCard value="25+" label="Expert Faculty" icon={Award} />
            <StatCard value="98%" label="Success Rate" icon={TrendingUp} />
          </div>

          {/* Features Grid */}
          <div className="space-y-6 md:space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 md:mb-4">
                Why Choose <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Our School</span>
              </h3>
              <p className="text-sm md:text-base lg:text-lg text-slate-400">
                Discover what makes us the perfect choice for your child's educational journey
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
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