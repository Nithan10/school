"use client";

import React from "react";
import { Input, Textarea, Button } from "@heroui/react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Clock, ArrowRight, MessageSquare, Sun } from "lucide-react";

export default function ContactCompact() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-sky-50 py-16 px-4 overflow-hidden" id="contact">
      
      {/* BACKGROUND DECORATION */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Playful Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-yellow-200/40 rounded-full blur-[80px] mix-blend-multiply animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-pink-200/40 rounded-full blur-[80px] mix-blend-multiply animate-pulse animation-delay-2000"></div>
        <div className="absolute top-[40%] right-[30%] w-[400px] h-[400px] bg-blue-200/30 rounded-full blur-[80px] mix-blend-multiply"></div>
      </div>

      {/* MAIN COMPACT CARD */}
      <motion.div 
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-6xl bg-white border-4 border-white rounded-[2.5rem] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-5 z-10"
      >
        
        {/* LEFT PANEL: INFO (Colorful Side) */}
        <div className="lg:col-span-2 bg-gradient-to-b from-indigo-500 to-purple-600 p-8 md:p-10 flex flex-col justify-between relative overflow-hidden text-white">
          {/* Decorative Circle */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 border border-white/30 backdrop-blur-md mb-6 shadow-sm">
                <MessageSquare size={14} className="text-white" />
                <span className="text-xs font-bold uppercase tracking-wider">Contact Us</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-black mb-3">Let's Talk!</h3>
            <p className="text-indigo-100 text-sm md:text-base mb-8 leading-relaxed font-medium">
              Have questions about admissions or campus life? We're here to help!
            </p>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-white/10 rounded-2xl border border-white/20 group-hover:bg-white group-hover:text-indigo-600 transition-all shadow-sm">
                  <Phone size={20} className="text-white group-hover:text-indigo-600 transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-indigo-200 font-bold uppercase tracking-wider mb-0.5">Phone</p>
                  <a href="tel:+919994959484" className="text-base font-bold hover:text-yellow-300 transition-colors block">+91 99949 59484</a>
                  <a href="tel:+919894886733" className="text-base font-bold hover:text-yellow-300 transition-colors block">+91 98948 86733</a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-white/10 rounded-2xl border border-white/20 group-hover:bg-white group-hover:text-indigo-600 transition-all shadow-sm">
                  <Mail size={20} className="text-white group-hover:text-indigo-600 transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-indigo-200 font-bold uppercase tracking-wider mb-0.5">Email</p>
                  <a href="mailto:mvmofficepollachi@gmail.com" className="text-base font-bold hover:text-yellow-300 transition-colors block break-all">mvmofficepollachi@gmail.com</a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-white/10 rounded-2xl border border-white/20 group-hover:bg-white group-hover:text-indigo-600 transition-all shadow-sm">
                  <MapPin size={20} className="text-white group-hover:text-indigo-600 transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-indigo-200 font-bold uppercase tracking-wider mb-0.5">Visit Us</p>
                  <p className="text-base font-medium leading-relaxed text-white">
                    A21, A22 D Colony, Near water tank,<br />
                    JothiNagar, Pollachi, TN 642001
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Info Card */}
          <div className="relative z-10 mt-8">
             <div className="p-4 bg-indigo-800/40 backdrop-blur-md border border-white/10 rounded-2xl">
                <div className="flex items-center gap-2 mb-3">
                    <Clock size={16} className="text-yellow-400" />
                    <span className="text-xs font-bold text-white uppercase tracking-wide">Office Hours</span>
                </div>
                <p className="text-sm font-semibold text-indigo-100 mb-3">Mon - Sat: 9:00 AM - 4:00 PM</p>
                
                <Button 
                  size="sm" 
                  className="w-full bg-white text-indigo-700 font-bold hover:bg-yellow-300 hover:text-indigo-900 transition-colors shadow-md"
                  endContent={<ArrowRight size={14} />}
                  as="a"
                  href="https://maps.google.com"
                  target="_blank"
                >
                  Get Directions
                </Button>
             </div>
          </div>
        </div>

        {/* RIGHT PANEL: FORM (White Side) */}
        <div className="lg:col-span-3 bg-white p-8 md:p-10 lg:p-12 relative">
           {/* Decorative Background Icon */}
           <div className="absolute top-6 right-6 text-slate-100 transform rotate-12">
              <Sun size={120} />
           </div>

          <div className="max-w-xl mx-auto lg:max-w-none relative z-10">
            <div className="mb-8">
               <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-2">Get in Touch</h2>
               <p className="text-slate-500 font-medium text-base">Fill out the form below and we'll get back to you shortly.</p>
            </div>

            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Input 
                   type="text" 
                   label="Parent's Name" 
                   variant="bordered" 
                   radius="md"
                   size="lg"
                   classNames={{
                     inputWrapper: "border-slate-200 bg-slate-50 hover:border-indigo-400 focus-within:border-indigo-500 transition-colors shadow-sm",
                     label: "text-slate-500 font-medium",
                     input: "text-slate-800 font-semibold"
                   }}
                />
                 <Input 
                   type="text" 
                   label="Student's Name" 
                   variant="bordered" 
                   radius="md"
                   size="lg"
                   classNames={{
                     inputWrapper: "border-slate-200 bg-slate-50 hover:border-pink-400 focus-within:border-pink-500 transition-colors shadow-sm",
                     label: "text-slate-500 font-medium",
                     input: "text-slate-800 font-semibold"
                   }}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Input 
                   type="email" 
                   label="Email Address" 
                   variant="bordered" 
                   radius="md"
                   size="lg"
                   classNames={{
                     inputWrapper: "border-slate-200 bg-slate-50 hover:border-blue-400 focus-within:border-blue-500 transition-colors shadow-sm",
                     label: "text-slate-500 font-medium",
                     input: "text-slate-800 font-semibold"
                   }}
                />
                <Input 
                   type="tel" 
                   label="Phone Number" 
                   variant="bordered" 
                   radius="md"
                   size="lg"
                   classNames={{
                     inputWrapper: "border-slate-200 bg-slate-50 hover:border-green-400 focus-within:border-green-500 transition-colors shadow-sm",
                     label: "text-slate-500 font-medium",
                     input: "text-slate-800 font-semibold"
                   }}
                />
              </div>

              <Input 
                  type="text" 
                  label="Subject" 
                  variant="bordered" 
                  radius="md"
                  size="lg"
                  classNames={{
                    inputWrapper: "border-slate-200 bg-slate-50 hover:border-orange-400 focus-within:border-orange-500 transition-colors shadow-sm",
                    label: "text-slate-500 font-medium",
                    input: "text-slate-800 font-semibold"
                  }}
              />

              <Textarea 
                label="Message" 
                minRows={4}
                variant="bordered"
                radius="md"
                size="lg"
                placeholder="How can we help you?"
                classNames={{
                   inputWrapper: "border-slate-200 bg-slate-50 hover:border-purple-400 focus-within:border-purple-500 transition-colors shadow-sm",
                   label: "text-slate-500 font-medium",
                   input: "text-slate-800 font-semibold"
                }}
              />

              <div className="pt-4">
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all rounded-xl"
                  endContent={<Send size={18} />}
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>

      </motion.div>
    </section>
  );
}