"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Youtube, Tv } from "lucide-react";

// --- Utility: Extract YouTube ID & Generate URLs ---
const getYouTubeDetails = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  const videoId = (match && match[2].length === 11) ? match[2] : null;

  return {
    embedUrl: videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : null,
    thumbnailUrl: videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null,
    valid: !!videoId
  };
};

// --- Sub-Component: The Bright Cinema Modal (Lightbox) ---
const VideoModal = ({ video, onClose }) => {
  if (!video) return null;

  const { embedUrl } = getYouTubeDetails(video.src);
  const finalSrc = video.type === 'youtube' ? embedUrl : video.src;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/80 backdrop-blur-md p-4 sm:p-8"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-5xl aspect-video bg-black rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-3 bg-white text-slate-900 rounded-full hover:bg-yellow-400 hover:rotate-90 transition-all duration-300 shadow-lg group"
        >
          <X size={24} className="group-hover:text-white transition-colors" />
        </button>

        {video.type === "youtube" && embedUrl ? (
          <iframe
            src={finalSrc || ""}
            title={video.title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white bg-slate-900">
            <p>Video Source Not Found</p>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

// --- Sub-Component: The Playful Interactive Card ---
const VideoCard = ({ video, onClick }) => {
  const ytDetails = video.type === 'youtube' ? getYouTubeDetails(video.src) : null;
  const displayThumbnail = video.type === 'youtube' ? ytDetails?.thumbnailUrl : video.thumbnail;

  return (
    <motion.div
      layoutId={`card-${video.id}`}
      whileHover={{ y: -10, rotate: video.id % 2 === 0 ? 1 : -1 }}
      className="group relative cursor-pointer"
      onClick={() => onClick(video)}
    >
      {/* Card Container */}
      <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] bg-white border-4 border-white shadow-xl hover:shadow-2xl transition-all duration-500">
        
        {/* Background Image with Zoom Effect */}
        <div className="absolute inset-0 z-0 overflow-hidden rounded-[1.7rem]">
          <img
            src={displayThumbnail || ""}
            alt={video.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Colorful Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 z-10 flex flex-col justify-end p-6">
          
          {/* Play Icon Container (Center) */}
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="relative">
                {/* Resting State */}
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/30 backdrop-blur-md text-white border-2 border-white shadow-lg transition-all duration-500 group-hover:scale-0 group-hover:opacity-0">
                  <Play fill="currentColor" className="ml-1 h-8 w-8" />
                </div>
                
                {/* Hover State - Big Red Button */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-20 w-20 items-center justify-center rounded-full bg-red-500 text-white shadow-xl shadow-red-500/40 scale-0 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100 animate-pulse">
                   <Play fill="currentColor" className="ml-1 h-10 w-10" />
                </div>
             </div>
          </div>

          {/* Text Content */}
          <div className="transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
             <div className="mb-2 flex items-center gap-2">
                <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-sm ${video.type === 'youtube' ? 'bg-red-100 text-red-600' : 'bg-purple-100 text-purple-600'}`}>
                  {video.type === 'youtube' ? <Youtube size={14} /> : <Tv size={14} />}
                  {video.type === 'youtube' ? 'YouTube' : 'Event'}
                </span>
             </div>
             
             <h3 className="text-xl md:text-2xl font-black text-white leading-tight mb-1 drop-shadow-md">
               {video.title}
             </h3>

             {/* Animated Line */}
             <div className="h-1.5 w-12 bg-yellow-400 rounded-full group-hover:w-full transition-all duration-500 ease-out mt-3" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- Main Component ---
export default function Videos() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    {
      id: 1,
      title: "Observational Learning",
      type: "youtube",
      src: "https://youtu.be/GK6tGFjCOAM", 
    },
    {
      id: 2,
      title: "Educational Toys for Kids",
      type: "youtube",
      src: "https://youtu.be/e4VyhryO_0c", 
    },
    {
      id: 3,
      title: "Science Experiment Day",
      type: "youtube",
      src: "https://www.youtube.com/watch?v=rV93gM0aEpk",
    },
    {
      id: 4,
      title: "School Annual Day",
      type: "youtube",
      src: "https://www.youtube.com/watch?v=Wtv-JjlTjIA&list=RDWtv-JjlTjIA&start_radio=1",
    }
  ];

  return (
    <section className="relative w-full bg-sky-50 py-24 overflow-hidden">
      
      {/* Background Playful Blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-200/40 rounded-full blur-[100px] mix-blend-multiply animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-200/40 rounded-full blur-[100px] mix-blend-multiply animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-200/30 rounded-full blur-[120px] mix-blend-multiply" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-block"
          >
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-white border-2 border-blue-100 shadow-sm">
                <span className="text-blue-500 text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                   <Tv size={16} /> Video Gallery
                </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 mb-6">
              Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Our World</span>
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-slate-600 font-medium">
              Watch highlights, learning sessions, and memorable moments from our happy campus.
            </p>
          </motion.div>
        </div>

        {/* Video Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
          {videos.map((video) => (
            <VideoCard 
              key={video.id} 
              video={video} 
              onClick={setSelectedVideo} 
            />
          ))}
        </div>
      </div>

      {/* Full Screen Player Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <VideoModal 
            video={selectedVideo} 
            onClose={() => setSelectedVideo(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}