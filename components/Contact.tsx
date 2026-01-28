"use client";

import React from "react";
import { Input, Textarea, Button } from "@heroui/react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Clock, ArrowRight } from "lucide-react";

export default function ContactCompact() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-slate-950 py-8 md:py-12 px-4 overflow-hidden" id="contact">
      
      {/* BACKGROUND DECORATION */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Dark Grid Texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="absolute top-[-10%] left-[-10%] w-64 h-64 md:w-[400px] md:h-[400px] bg-purple-900/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 md:w-[400px] md:h-[400px] bg-pink-900/20 rounded-full blur-[100px]" />
      </div>

      {/* MAIN COMPACT CARD */}
      <motion.div 
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-6xl bg-slate-900 border border-slate-800 rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-5 z-10"
      >
        
        {/* LEFT PANEL: INFO */}
        <div className="lg:col-span-2 bg-slate-950/80 backdrop-blur-md p-6 md:p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden border-r border-slate-800">
          <div className="relative z-10">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Contact Information</h3>
            <p className="text-slate-400 text-xs md:text-sm mb-6 md:mb-8">
              Fill up the form and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-4 md:space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-3 md:gap-4 group">
                <div className="p-2 bg-purple-500/10 rounded-lg border border-purple-500/20 group-hover:bg-purple-500 group-hover:border-purple-500 transition-all flex-shrink-0">
                  <Phone size={18} className="text-purple-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Phone</p>
                  <a href="tel:+919994959484" className="text-sm font-semibold text-slate-300 hover:text-purple-400 transition-colors block mt-0.5">+91 99949 59484</a>
                  <a href="tel:+919894886733" className="text-sm font-semibold text-slate-300 hover:text-purple-400 transition-colors block">+91 98948 86733</a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3 md:gap-4 group">
                <div className="p-2 bg-pink-500/10 rounded-lg border border-pink-500/20 group-hover:bg-pink-500 group-hover:border-pink-500 transition-all flex-shrink-0">
                  <Mail size={18} className="text-pink-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Email</p>
                  <a href="mailto:mvmofficepollachi@gmail.com" className="text-sm font-semibold text-slate-300 hover:text-pink-400 transition-colors block mt-0.5 truncate">mvmofficepollachi@gmail.com</a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 md:gap-4 group">
                <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20 group-hover:bg-blue-500 group-hover:border-blue-500 transition-all flex-shrink-0">
                  <MapPin size={18} className="text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Location</p>
                  <p className="text-sm font-medium leading-relaxed mt-0.5 text-slate-300">
                    A21, A22 D Colony, Near water tank,<br />
                    JothiNagar, Pollachi, TN 642001
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Info */}
          <div className="relative z-10 mt-6 md:mt-8">
             <div className="p-3 md:p-4 bg-slate-900 border border-slate-800 rounded-xl md:rounded-2xl">
                <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                    <Clock size={14} className="text-yellow-500" />
                    <span className="text-xs font-semibold text-slate-400">Mon - Sat: 9:00 AM - 4:00 PM</span>
                </div>
                <Button 
                  size="sm" 
                  className="w-full bg-slate-800 text-white font-bold hover:bg-slate-700 text-xs md:text-sm border border-slate-700"
                  endContent={<ArrowRight size={12} />}
                  as="a"
                  href="https://maps.google.com"
                  target="_blank"
                >
                  View on Google Maps
                </Button>
             </div>
          </div>
        </div>

        {/* RIGHT PANEL: FORM */}
        <div className="lg:col-span-3 bg-slate-900 p-6 md:p-8 lg:p-10 relative">
          <div className="max-w-md mx-auto lg:max-w-none">
            <div className="mb-6 md:mb-8">
               <h2 className="text-2xl md:text-3xl font-bold text-white">Get in Touch</h2>
               <p className="text-slate-400 mt-1 text-sm md:text-base">We'd love to hear from you. Send us a message!</p>
            </div>

            <form className="space-y-4 md:space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                <Input 
                   type="text" 
                   label="Parent's Name" 
                   variant="bordered" 
                   radius="sm"
                   size="sm"
                   classNames={{
                     inputWrapper: "border-slate-700 bg-slate-950/50 hover:border-purple-500 focus-within:border-purple-500 transition-colors h-10 md:h-12",
                     label: "text-slate-500 group-data-[filled=true]:text-slate-400",
                     input: "text-white"
                   }}
                />
                 <Input 
                   type="text" 
                   label="Student's Name" 
                   variant="bordered" 
                   radius="sm"
                   size="sm"
                   classNames={{
                     inputWrapper: "border-slate-700 bg-slate-950/50 hover:border-purple-500 focus-within:border-purple-500 transition-colors h-10 md:h-12",
                     label: "text-slate-500 group-data-[filled=true]:text-slate-400",
                     input: "text-white"
                   }}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                <Input 
                   type="email" 
                   label="Email Address" 
                   variant="bordered" 
                   radius="sm"
                   size="sm"
                   classNames={{
                     inputWrapper: "border-slate-700 bg-slate-950/50 hover:border-purple-500 focus-within:border-purple-500 transition-colors h-10 md:h-12",
                     label: "text-slate-500 group-data-[filled=true]:text-slate-400",
                     input: "text-white"
                   }}
                />
                <Input 
                   type="tel" 
                   label="Phone Number" 
                   variant="bordered" 
                   radius="sm"
                   size="sm"
                   classNames={{
                     inputWrapper: "border-slate-700 bg-slate-950/50 hover:border-purple-500 focus-within:border-purple-500 transition-colors h-10 md:h-12",
                     label: "text-slate-500 group-data-[filled=true]:text-slate-400",
                     input: "text-white"
                   }}
                />
              </div>

              <Input 
                 type="text" 
                 label="Subject" 
                 variant="bordered" 
                 radius="sm"
                 size="sm"
                 classNames={{
                   inputWrapper: "border-slate-700 bg-slate-950/50 hover:border-purple-500 focus-within:border-purple-500 transition-colors h-10 md:h-12",
                   label: "text-slate-500 group-data-[filled=true]:text-slate-400",
                   input: "text-white"
                 }}
              />

              <Textarea 
                label="Message" 
                minRows={3}
                variant="bordered"
                radius="sm"
                size="sm"
                placeholder="How can we help you?"
                classNames={{
                   inputWrapper: "border-slate-700 bg-slate-950/50 hover:border-purple-500 focus-within:border-purple-500 transition-colors",
                   label: "text-slate-500 group-data-[filled=true]:text-slate-400",
                   input: "text-white"
                }}
              />

              <div className="pt-2">
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-sm md:text-base shadow-lg shadow-purple-900/30 hover:shadow-purple-900/50 transition-all border border-purple-500/50"
                  endContent={<Send size={16} />}
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