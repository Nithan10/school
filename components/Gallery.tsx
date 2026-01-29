"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Camera, 
  GraduationCap, 
  Trophy, 
  Palette, 
  Building2, 
  X, 
  Maximize2,
  ArrowUpRight,
  Sparkles,
  Sun
} from "lucide-react";
import { cn } from "@heroui/react";

type Category = "All" | "Academics" | "Sports" | "Arts" | "Campus" | "Events";

interface PhotoItem {
  id: number;
  src: string;
  category: Category;
  caption: string;
  featured?: boolean;
}

const galleryData: PhotoItem[] = [
  { id: 1, category: "Campus", caption: "The Main Historic Building", src: "/back.jpeg", featured: true },
  { id: 2, category: "Academics", caption: "Smart Class Learning", src: "/gal/sm.jpg" },
  { id: 3, category: "Sports", caption: "Football Championship", src: "/gal/sp.jpg" },
  { id: 4, category: "Arts", caption: "Spring Theater Production", src: "/gal/art.jpg", featured: true },
  { id: 5, category: "Events", caption: "Graduation Ceremony", src: "/gal/en.jpg" },
  { id: 6, category: "Campus", caption: "Autumn on the Quad", src: "/gal/camp4.jpg" },
  { id: 7, category: "Academics", caption: "Biology Research", src: "/gal/ad.jpg" },
  { id: 8, category: "Campus", caption: "Modern Library Wing", src: "/gal/camp5.png", featured: true },
  { id: 9, category: "Events", caption: "Cultural Festival", src: "/gal/ev3.jpg" },
  { id: 10, category: "Sports", caption: "Basketball Team", src: "/gal/sp1.jpg" },
  { id: 11, category: "Events", caption: "Dance Performance", src: "/gal/ev6.jpg" },
  { id: 12, category: "Events", caption: "Cultural Dance", src: "/gal/ev2.jpg" },
  { id: 13, category: "Campus", caption: "Student Walkway", src: "/gal/camp2.jpg" },
  { id: 14, category: "Academics", caption: "Chemistry Lab", src: "/gal/ad1.jpg" }, 
  { id: 15, category: "Events", caption: "Music Fest 2025", src: "/gal/ev4.jpg" },
  { id: 16, category: "Campus", caption: "Morning Assembly", src: "/gal/camp.jpg" },
];

const categories: { label: Category; icon: React.ElementType; color: string }[] = [
  { label: "All", icon: Camera, color: "bg-slate-800" },
  { label: "Academics", icon: GraduationCap, color: "bg-blue-500" },
  { label: "Sports", icon: Trophy, color: "bg-orange-500" },
  { label: "Arts", icon: Palette, color: "bg-pink-500" },
  { label: "Campus", icon: Building2, color: "bg-green-500" },
  { label: "Events", icon: Sparkles, color: "bg-purple-500" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedImage, setSelectedImage] = useState<PhotoItem | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  const filteredPhotos = galleryData.filter((photo) => 
    activeCategory === "All" ? true : photo.category === activeCategory
  );

  if (!isMounted) return null;

  return (
    <section className="relative w-full bg-sky-50 py-12 md:py-16 lg:py-24 overflow-hidden" id="gallery">
      
      {/* Background Playful Blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-200/40 rounded-full blur-[100px] mix-blend-multiply animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-200/40 rounded-full blur-[100px] mix-blend-multiply animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-200/30 rounded-full blur-[120px] mix-blend-multiply" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 md:gap-10 mb-10 md:mb-14 lg:mb-20">
          <div className="max-w-2xl relative">
            {/* Decorative Icon */}
            <div className="absolute -top-10 -left-6 md:-left-10 text-yellow-400 animate-spin-slow opacity-80">
                <Sun size={60} />
            </div>

            <div className="inline-flex items-center gap-2 mb-3 md:mb-4 relative z-10">
              <span className="px-3 py-1 rounded-full bg-white border-2 border-slate-100 text-slate-500 text-xs md:text-sm font-bold tracking-wider uppercase shadow-sm">
                Our Gallery
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 leading-[0.9] tracking-tight">
              Capturing Moments at <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 drop-shadow-sm">
                Minerva.
              </span>
            </h1>
          </div>

          {/* Filter Tabs - Playful Pills */}
          <div className="w-full lg:w-auto overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
            <div className="flex bg-white p-1.5 rounded-2xl shadow-lg border-2 border-slate-100 gap-1 w-max">
              {categories.map(({ label, icon: Icon, color }) => (
                <button
                  key={label}
                  onClick={() => setActiveCategory(label)}
                  className={cn(
                    "relative px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all duration-300 flex items-center gap-2",
                    activeCategory === label
                      ? "text-white shadow-md scale-105"
                      : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
                  )}
                >
                  {activeCategory === label && (
                    <motion.div
                      layoutId="activeTab"
                      className={cn("absolute inset-0 rounded-xl", color)}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon size={14} className="md:w-4 md:h-4" />
                    {label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 50, rotate: index % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10, rotate: index % 2 === 0 ? 1 : -1, scale: 1.02 }}
              onClick={() => setSelectedImage(photo)}
              className={cn(
                "relative group rounded-[2rem] overflow-hidden cursor-pointer bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border-[6px] border-white",
                photo.featured ? "sm:col-span-2 sm:row-span-2" : "col-span-1 row-span-1"
              )}
            >
              {/* Image Container */}
              <div className="w-full h-full overflow-hidden rounded-[1.5rem]">
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?q=80&w=2629&auto=format&fit=crop";
                  }}
                />
              </div>
              
              {/* Colorful Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Bottom Card (Caption) */}
              <div className="absolute inset-x-4 bottom-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                <div className="bg-white rounded-2xl p-4 shadow-xl flex items-center justify-between">
                  <div className="overflow-hidden">
                    <p className={cn(
                        "text-[10px] md:text-xs font-bold uppercase tracking-wider mb-1",
                        photo.category === 'Academics' ? 'text-blue-500' : 
                        photo.category === 'Sports' ? 'text-orange-500' :
                        photo.category === 'Arts' ? 'text-pink-500' :
                        photo.category === 'Campus' ? 'text-green-500' : 'text-purple-500'
                    )}>
                      {photo.category}
                    </p>
                    <h3 className="text-slate-800 font-bold text-sm truncate">
                      {photo.caption}
                    </h3>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-yellow-400 group-hover:text-slate-900 text-slate-400 flex items-center justify-center flex-shrink-0 ml-2 transition-colors duration-300">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>

              {/* Category Badge (Top Left) */}
              <div className="absolute top-4 left-4 group-hover:opacity-0 transition-opacity duration-300">
                <div className="bg-white/90 backdrop-blur-sm text-slate-700 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm border border-slate-100">
                  {photo.category}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredPhotos.length === 0 && (
          <div className="w-full h-64 flex flex-col items-center justify-center text-slate-400 bg-white rounded-[2rem] border-4 border-dashed border-slate-200 mt-8">
            <Camera size={48} className="mb-4 text-slate-300" />
            <p className="text-lg font-bold text-slate-500">No photos found here!</p>
          </div>
        )}
      </div>

      {/* Lightbox - Clean & Bright */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-slate-900/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-4 right-4 md:top-8 md:right-8 bg-white text-slate-900 rounded-full p-3 hover:bg-yellow-400 transition-colors z-50 shadow-lg"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] bg-white shadow-2xl p-2 md:p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full aspect-video bg-slate-100 rounded-[1.5rem] overflow-hidden">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.caption}
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div className="p-6 md:p-8">
                 <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <span className={cn(
                            "inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 text-white shadow-md",
                            selectedImage.category === 'Academics' ? 'bg-blue-500' : 
                            selectedImage.category === 'Sports' ? 'bg-orange-500' :
                            selectedImage.category === 'Arts' ? 'bg-pink-500' :
                            selectedImage.category === 'Campus' ? 'bg-green-500' : 'bg-purple-500'
                        )}>
                            {selectedImage.category}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-black text-slate-900">
                            {selectedImage.caption}
                        </h3>
                    </div>
                    {/* Share/Action buttons could go here */}
                 </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}