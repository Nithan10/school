"use client";

import React from "react";
import { Button, Card, CardBody, Accordion, AccordionItem } from "@heroui/react";
import { motion } from "framer-motion";
import { 
  FileCheck, 
  CalendarDays, 
  School, 
  ClipboardList, 
  Download, 
  ArrowRight, 
  CheckCircle2,
  HelpCircle,
  Sparkles,
  Star,
  Sun
} from "lucide-react";

const processSteps = [
  {
    title: "Inquiry",
    desc: "Fill the online form or visit campus.",
    icon: CalendarDays,
    color: "from-blue-400 to-cyan-400",
    shadow: "shadow-blue-200",
    border: "border-blue-100"
  },
  {
    title: "Campus Tour",
    desc: "See our facilities & meet teachers.",
    icon: School,
    color: "from-violet-500 to-purple-500",
    shadow: "shadow-violet-200",
    border: "border-violet-100"
  },
  {
    title: "Apply",
    desc: "Submit application with docs.",
    icon: FileCheck,
    color: "from-pink-500 to-rose-500",
    shadow: "shadow-pink-200",
    border: "border-pink-100"
  },
  {
    title: "Interact",
    desc: "Student assessment & parent meet.",
    icon: ClipboardList,
    color: "from-orange-400 to-amber-500",
    shadow: "shadow-orange-200",
    border: "border-orange-100"
  },
  {
    title: "Success",
    desc: "Pay fees & confirm admission.",
    icon: CheckCircle2,
    color: "from-emerald-400 to-green-500",
    shadow: "shadow-emerald-200",
    border: "border-emerald-100"
  }
];

export default function AdmissionsPage() {
  return (
    <div className="relative w-full min-h-screen bg-sky-50 overflow-hidden pt-20 md:pt-24 pb-12 md:pb-20" id="admissions">
      
      {/* BACKGROUND DECORATION */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Playful Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-yellow-200/40 rounded-full blur-[80px] animate-blob mix-blend-multiply"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-pink-200/40 rounded-full blur-[80px] animate-blob animation-delay-2000 mix-blend-multiply"></div>
        <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-cyan-200/40 rounded-full blur-[80px] animate-blob animation-delay-4000 mix-blend-multiply"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl relative z-10">
        
        {/* HERO HEADER */}
        <div className="text-center mb-16 md:mb-20 lg:mb-24 space-y-6 max-w-4xl mx-auto relative">
           {/* Decorative Floating Icon */}
           <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
             className="absolute -top-10 right-0 md:-right-10 text-yellow-400 opacity-80 hidden md:block"
           >
             <Sun size={80} />
           </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
             <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border-2 border-indigo-100 shadow-[0_4px_10px_rgba(99,102,241,0.2)] mb-4">
               <Sparkles className="w-4 h-4 text-indigo-500 fill-indigo-500 animate-pulse" />
               <span className="text-sm font-bold text-indigo-600 uppercase tracking-wider">Admissions Open 2024-25</span>
             </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight"
          >
            Start Your Journey <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-pink-500 to-orange-500 drop-shadow-sm">
              at Minerva Vidhya
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            We nurture curious minds and kind hearts. Join a community dedicated to holistic growth, creative learning, and global excellence.
          </motion.p>
          
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.3 }}
             className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4"
          >
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold text-base px-8 py-6 rounded-2xl shadow-xl shadow-violet-200 hover:shadow-2xl hover:scale-105 transition-all"
              endContent={<ArrowRight className="w-5 h-5" />}
            >
              Apply Online Now
            </Button>
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-white border-2 border-violet-200 text-violet-700 font-bold text-base px-8 py-6 rounded-2xl hover:bg-violet-50 shadow-lg shadow-slate-100"
              startContent={<Download className="w-5 h-5" />}
            >
              Download Brochure
            </Button>
          </motion.div>
        </div>

        {/* ADMISSION PROCESS (Steps) */}
        <section className="mb-20 md:mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-3">Simple Admission Process</h2>
            <p className="text-lg text-slate-500 font-medium">Your five colorful steps to joining our family</p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-blue-200 via-pink-200 to-green-200 -z-10 rounded-full"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {processSteps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="flex flex-col items-center text-center group cursor-pointer"
                >
                  <div className={`w-24 h-24 rounded-3xl flex items-center justify-center mb-6 shadow-xl ${step.shadow} bg-gradient-to-br ${step.color} transform transition-all duration-300 group-hover:rotate-6 border-4 border-white`}>
                    <step.icon className="w-10 h-10 text-white drop-shadow-md" />
                  </div>
                  <div className={`bg-white px-4 py-4 rounded-2xl border-2 ${step.border} shadow-sm w-full h-full hover:shadow-md transition-shadow`}>
                    <h3 className="font-bold text-lg text-slate-800 mb-1">{step.title}</h3>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ELIGIBILITY & DOCUMENTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 mb-20 items-start">
          
          {/* Left: Age Criteria Table */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="flex items-center gap-3 mb-6">
               <div className="p-3 bg-violet-100 text-violet-600 rounded-2xl">
                 <CalendarDays className="w-6 h-6" />
               </div>
               <h3 className="text-3xl font-black text-slate-900">Age Eligibility</h3>
            </div>

            <Card className="border-none shadow-xl shadow-violet-100 bg-white rounded-[2rem] overflow-hidden border-4 border-white ring-1 ring-violet-50">
              <CardBody className="p-0">
                <div className="bg-violet-500 p-5">
                   <div className="grid grid-cols-2">
                      <span className="text-white font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                         <School size={16} /> Grade Level
                      </span>
                      <span className="text-white font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                         <Star size={16} /> Required Age
                      </span>
                   </div>
                </div>
                <div className="divide-y divide-violet-100">
                  {[
                    { grade: "Grade 1", age: "5 Years + 6 Months" },
                    { grade: "Grade 2", age: "6 Years + 6 Months" },
                    { grade: "Grade 3", age: "7 Years + 6 Months" },
                    { grade: "Grade 4", age: "8 Years + 6 Months" },
                    { grade: "Grade 5", age: "9 Years + 6 Months" },
                  ].map((row, i) => (
                    <div key={i} className="grid grid-cols-2 p-4 md:p-5 hover:bg-violet-50 transition-colors">
                      <span className="font-bold text-violet-900 text-base">{row.grade}</span>
                      <span className="font-semibold text-slate-600 text-base">{row.age}</span>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
            
            <div className="mt-4 flex items-start gap-3 text-sm text-slate-500 bg-white p-4 rounded-2xl border border-violet-100 shadow-sm">
                <HelpCircle className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                <p>Age relaxation of up to 30 days may be considered based on the entrance assessment results.</p>
            </div>
          </motion.div>

          {/* Right: Documents Required */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="flex items-center gap-3 mb-6">
               <div className="p-3 bg-rose-100 text-rose-600 rounded-2xl">
                 <ClipboardList className="w-6 h-6" />
               </div>
               <h3 className="text-3xl font-black text-slate-900">Documents Needed</h3>
            </div>

            <Card className="shadow-xl shadow-rose-100 bg-white border-4 border-white rounded-[2rem] ring-1 ring-rose-50">
              <CardBody className="p-6 md:p-8">
                <ul className="space-y-4">
                  {[
                    "Original Birth Certificate (for verification)",
                    "Transfer Certificate (from previous school)",
                    "Passport size photographs of student (4 copies)",
                    "Passport size photographs of parents (2 copies)",
                    "Copy of Aadhar Card (Student & Parents)",
                    "Previous year's Report Card / Mark Sheet"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 p-3 rounded-xl bg-rose-50/50 hover:bg-rose-50 transition-colors group">
                      <div className="p-1.5 rounded-full bg-emerald-100 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-colors flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="font-bold text-slate-700 text-base">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-rose-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-slate-500 font-bold text-sm">Need checklist help?</div>
                    <Button 
                      size="sm"
                      className="bg-rose-100 text-rose-700 font-bold rounded-xl px-4 hover:bg-rose-200"
                      endContent={<ArrowRight size={16} />}
                    >
                      Contact Office
                    </Button>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>

        {/* FAQS */}
        <section className="max-w-3xl mx-auto mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">Frequently Asked Questions</h2>
            <p className="text-slate-500 text-lg">Everything you need to know about joining us</p>
          </div>
          
          <Accordion 
            variant="splitted" 
            className="gap-4"
            itemClasses={{
              base: "group bg-white shadow-md border-l-4 border-l-orange-400 rounded-xl px-2",
              title: "font-bold text-slate-800 text-lg group-hover:text-orange-500 transition-colors",
              trigger: "py-4",
              content: "text-slate-600 font-medium pb-6 pt-0 text-base",
              indicator: "text-orange-400"
            }}
          >
            <AccordionItem key="1" aria-label="Admission Start" title="When does the admission process start?">
              Admissions for the upcoming academic year typically open in <span className="bg-orange-100 text-orange-700 px-1 rounded">November</span>. We recommend applying early as seats are limited.
            </AccordionItem>
            <AccordionItem key="2" aria-label="Transportation" title="Is transportation available for students?">
              Yes, Minerva provides safe and GPS-tracked bus transportation covering a <span className="bg-orange-100 text-orange-700 px-1 rounded">25km radius</span> around the campus.
            </AccordionItem>
            <AccordionItem key="3" aria-label="Student-Teacher Ratio" title="What is the student-teacher ratio?">
              To ensure personal attention, we maintain a strict student-teacher ratio of <span className="bg-orange-100 text-orange-700 px-1 rounded">25:1</span> in all primary grades.
            </AccordionItem>
            <AccordionItem key="4" aria-label="Entrance Exam" title="Is there an entrance exam?">
              For Grade 1 and above, there is a basic interaction/assessment to understand the child's current learning level in English and Mathematics.
            </AccordionItem>
          </Accordion>
        </section>

      </div>
    </div>
  );
}