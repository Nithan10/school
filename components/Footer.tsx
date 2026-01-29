"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button, Input } from "@heroui/react";
import { Send, Instagram, Twitter, Linkedin, Facebook, MapPin, Phone, Mail, ChevronRight, ChevronDown, Heart, Sparkles, Sun, Stars } from "lucide-react";
import { Logo } from "@/components/icons"; 

// --- Theme Colors ---
const THEME = {
  primary: {
    light: "#6039DB",
    DEFAULT: "#6039DB",
    dark: "#5029c9",
    gradient: "from-[#6039DB] to-[#FF4D8D]",
  },
  secondary: {
    light: "#00C9FF",
    DEFAULT: "#00C9FF",
    dark: "#00A3CC",
    gradient: "from-[#00C9FF] to-[#92FE9D]",
  },
  accent: {
    light: "#FF9A00",
    DEFAULT: "#FF9A00",
    dark: "#CC7A00",
    gradient: "from-[#FF9A00] to-[#FFD700]",
  },
  background: {
    dark: "bg-gradient-to-br from-[#0a0a0a] via-[#1a0f2e] to-[#0a1a2a]",
    gradient: "bg-gradient-to-br from-[#0a0a0a] via-[#1a0f2e] to-[#0a1a2a]",
  },
  social: {
    instagram: "from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]",
    twitter: "from-[#1DA1F2] to-[#1DA1F2]",
    linkedin: "from-[#0077B5] to-[#00A0DC]",
    facebook: "from-[#1877F2] to-[#1877F2]",
  }
};

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Social media icons with their respective gradients
  const socialIcons = [
    { Icon: Instagram, gradient: THEME.social.instagram, label: "Instagram" },
    { Icon: Twitter, gradient: THEME.social.twitter, label: "Twitter" },
    { Icon: Linkedin, gradient: THEME.social.linkedin, label: "LinkedIn" },
    { Icon: Facebook, gradient: THEME.social.facebook, label: "Facebook" },
  ];

  // Smooth scroll handler
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId?: string) => {
    if (targetId) {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <footer className={`relative ${THEME.background.gradient} text-white pt-12 md:pt-16 lg:pt-20 pb-8 md:pb-10 overflow-hidden`}>
      
      {/* Multi-color Gradient Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Purple Gradient */}
        <div className="absolute top-[-10%] left-[-5%] w-64 h-64 md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] bg-gradient-to-br from-purple-900/30 via-[#6039DB]/20 to-pink-900/10 rounded-full blur-[80px] md:blur-[100px] lg:blur-[120px] animate-pulse"></div>
        
        {/* Blue Gradient */}
        <div className="absolute bottom-[-10%] right-[-5%] w-64 h-64 md:w-[300px] md:h-[300px] lg:w-[500px] lg:h-[500px] bg-gradient-to-br from-blue-900/20 via-[#00C9FF]/20 to-cyan-900/10 rounded-full blur-[80px] md:blur-[100px] lg:blur-[120px] animate-pulse" 
             style={{animationDelay: "1s"}}></div>
        
        {/* Orange Gradient - Middle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-orange-900/10 via-[#FF9A00]/15 to-yellow-900/5 rounded-full blur-[100px] animate-pulse"
             style={{animationDelay: "2s"}}></div>

        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-[#6039DB] to-[#00C9FF]"
              initial={{ 
                y: Math.random() * 100 + "%", 
                x: Math.random() * 100 + "%",
                opacity: 0
              }}
              animate={{ 
                y: ["0%", "-100%", "0%"],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        {/* Header with animated gradient text */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-4">
            <Sparkles className="w-4 h-4 text-[#FF9A00] animate-pulse" />
            <span className="text-sm font-bold bg-gradient-to-r from-[#6039DB] via-[#00C9FF] to-[#FF9A00] bg-clip-text text-transparent">
              Connect With Us
            </span>
            <Sparkles className="w-4 h-4 text-[#FF4D8D] animate-pulse" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#6039DB] via-[#00C9FF] to-[#FF9A00] bg-clip-text text-transparent animate-gradient">
              Let&apos;s Shape The Future
            </span>
            <br />
            <span className="text-white">Together</span>
          </h2>
          
          <div className="flex justify-center gap-2">
            <Heart className="w-5 h-5 text-[#FF4D8D] fill-[#FF4D8D] animate-bounce" />
            <Sun className="w-5 h-5 text-[#FF9A00] fill-[#FF9A00] animate-spin-slow" />
            <Stars className="w-5 h-5 text-[#00C9FF] fill-[#00C9FF] animate-pulse" />
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 mb-12 md:mb-14 lg:mb-16"
        >
          {/* --- COLUMN 1: BRANDING --- */}
          <motion.div variants={itemVariants} className="space-y-4 md:space-y-6">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#6039DB] to-[#FF4D8D] rounded-full blur-sm opacity-50"></div>
                <div className="text-white flex-shrink-0 relative">
                  <Logo size={32} className="md:w-10 md:h-10" />
                </div>
              </div>
              <span className="text-lg md:text-xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Minervaa Vidhya Mandhir
              </span>
            </div>

            <p className="text-gray-300 leading-relaxed text-sm md:text-base bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              Empowering students with knowledge and character in the heart of Pollachi.
              <span className="block mt-2 text-[#00C9FF] font-medium">Inspiring Excellence Since 2024</span>
            </p>

            <div className="flex gap-2 md:gap-3 lg:gap-4 pt-2">
              {socialIcons.map((social, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group p-2 rounded-full overflow-hidden"
                  aria-label={`Follow us on ${social.label}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${social.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-full p-2 group-hover:border-transparent transition-all duration-300">
                    <social.Icon size={16} className="md:w-4 md:h-4 lg:w-5 lg:h-5 text-gray-300 group-hover:text-white transition-colors" />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* --- COLUMN 2: USEFUL LINKS --- */}
          <motion.div variants={itemVariants} className="space-y-4 md:space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-[#6039DB] to-[#FF4D8D] rounded-full"></div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Links</h4>
            </div>
            <ul className="space-y-2 md:space-y-3">
              {[
                { label: "Privacy Policy", href: "#privacy", color: "from-[#6039DB] to-[#FF4D8D]" },
                { label: "Our Programs", href: "#programs", color: "from-[#00C9FF] to-[#92FE9D]" },
                { label: "Why Choose Us", href: "#about", color: "from-[#FF9A00] to-[#FFD700]" },
                { label: "Photo Gallery", href: "#gallery", color: "from-[#6039DB] to-[#00C9FF]" }
              ].map((link, index) => (
                <motion.li 
                  key={link.label}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <a 
                    href={link.href} 
                    onClick={(e) => handleScroll(e, link.href.replace('#', ''))}
                    className="group flex items-center gap-2 py-2"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${link.color} group-hover:scale-125 transition-transform`}></div>
                    <span className="text-gray-300 group-hover:text-white transition-colors text-sm md:text-base font-medium flex-1">
                      {link.label}
                    </span>
                    <ChevronRight size={12} className="text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* --- COLUMN 3: NAVIGATION --- */}
          <motion.div variants={itemVariants} className="space-y-4 md:space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-[#00C9FF] to-[#92FE9D] rounded-full"></div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Explore More</h4>
            </div>
            <ul className="space-y-2 md:space-y-3">
              {[
                { label: "Home", href: "#home", color: "text-[#6039DB]" },
                { label: "About School", href: "#about", color: "text-[#00C9FF]" },
                { label: "Video Tours", href: "#videos", color: "text-[#FF9A00]" },
                { label: "Disclosures", href: "#disclosure", color: "text-[#FF4D8D]" }
              ].map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    onClick={(e) => handleScroll(e, link.href.replace('#', ''))}
                    className={`group flex items-center justify-between py-2 ${link.color} hover:text-white transition-colors`}
                  >
                    <span className="text-sm md:text-base font-medium">
                      {link.label}
                    </span>
                    <div className="flex items-center gap-1">
                      {link.label === "Disclosures" && (
                        <div className="px-2 py-0.5 bg-gradient-to-r from-[#FF9A00] to-[#FFD700] text-black text-xs rounded-full font-bold">
                          NEW
                        </div>
                      )}
                      <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* --- COLUMN 4: CONTACT --- */}
          <motion.div variants={itemVariants} className="space-y-4 md:space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-[#FF9A00] to-[#FFD700] rounded-full"></div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Get In Touch</h4>
            </div>
            <ul className="space-y-3 md:space-y-4">
              <motion.li 
                className="group flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#6039DB]/50 transition-all cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-2 rounded-full bg-gradient-to-r from-[#6039DB] to-[#FF4D8D]">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-gray-300 group-hover:text-white text-xs md:text-sm leading-relaxed">
                    A21, A22 D Colony, Near Northside to water tank,<br />
                    JothiNagar, Pollachi HO,<br />
                    <span className="text-[#00C9FF] font-semibold">Tamil Nadu - 642001</span>
                  </p>
                </div>
              </motion.li>

              <motion.li 
                className="group flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00C9FF]/50 transition-all cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-2 rounded-full bg-gradient-to-r from-[#00C9FF] to-[#92FE9D]">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <a 
                  href="tel:+919994959484" 
                  className="text-gray-300 group-hover:text-white transition-colors text-xs md:text-sm font-medium hover:underline"
                >
                  +91-9994959484
                </a>
              </motion.li>

              <motion.li 
                className="group flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#FF9A00]/50 transition-all cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-2 rounded-full bg-gradient-to-r from-[#FF9A00] to-[#FFD700]">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <a 
                  href="mailto:minervaavidhyamandhir@gmail.com" 
                  className="text-gray-300 group-hover:text-white transition-colors text-xs md:text-sm font-medium hover:underline break-all"
                >
                  minervaavidhyamandhir@gmail.com
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Animated Gradient Divider */}
        <motion.div 
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="relative h-1 mb-6 md:mb-8 overflow-hidden rounded-full"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#6039DB] via-[#00C9FF] via-[#FF9A00] to-transparent animate-gradient-x"></div>
        </motion.div>

        {/* Bottom Section with Multi-color Theme */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 relative z-10">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-xs md:text-sm text-center md:text-left"
          >
            © {currentYear} Minervaa Vidhya Mandhir. 
            <span className="ml-2 bg-gradient-to-r from-[#6039DB] via-[#00C9FF] to-[#FF9A00] bg-clip-text text-transparent font-bold">
              All rights reserved.
            </span>
          </motion.p>
          
          <div className="flex gap-3 md:gap-4 text-xs md:text-sm">
            {[
              { label: "Terms of Service", href: "#terms", color: "text-[#6039DB] hover:text-[#FF4D8D]" },
              { label: "Privacy Policy", href: "#privacy", color: "text-[#00C9FF] hover:text-[#92FE9D]" },
              { label: "Cookie Policy", href: "#cookies", color: "text-[#FF9A00] hover:text-[#FFD700]" },
            ].map((item, index) => (
              <React.Fragment key={item.label}>
                <a 
                  href={item.href} 
                  onClick={(e) => handleScroll(e, item.href.replace('#', ''))}
                  className={`${item.color} transition-colors px-1 py-0.5 font-medium`}
                >
                  {item.label}
                </a>
                {index < 2 && (
                  <span className="text-gray-600">•</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Floating Action Buttons */}
        <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col gap-2">
          {/* Back to Top */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-3 rounded-full bg-gradient-to-r from-[#6039DB] to-[#FF4D8D] text-white shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Scroll to top"
          >
            <ChevronDown className="w-5 h-5 rotate-180" />
          </motion.button>

          {/* Quick Contact */}
          <motion.a
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.1 }}
            href="tel:+919994959484"
            className="p-3 rounded-full bg-gradient-to-r from-[#00C9FF] to-[#92FE9D] text-white shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Call us"
          >
            <Phone className="w-5 h-5" />
          </motion.a>
        </div>

        {/* Multi-color Watermark */}
        <div className="hidden lg:block absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none opacity-[0.03]">
          <div className="relative">
            <h1 className="text-[8vw] font-black leading-[0.8] tracking-tighter text-center">
              <span className="bg-gradient-to-r from-[#6039DB] via-[#00C9FF] to-[#FF9A00] bg-clip-text text-transparent animate-gradient-x">
                MINERVAA
              </span>
            </h1>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
          </div>
        </div>

        {/* Decorative Corner Elements */}
        <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#6039DB]/30 rounded-tl-lg"></div>
        <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[#00C9FF]/30 rounded-tr-lg"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-[#FF9A00]/30 rounded-bl-lg"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#FF4D8D]/30 rounded-br-lg"></div>
      </div>

      {/* Global Animations */}
      <style jsx global>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-gradient-x {
          background-size: 200% 100%;
          animation: gradient 2s ease infinite;
        }
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </footer>
  );
}