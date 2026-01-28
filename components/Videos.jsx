"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

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

// --- Sub-Component: The Cinema Modal (Lightbox) ---
const VideoModal = ({ video, onClose }) => {
  if (!video) return null;

  const { embedUrl } = getYouTubeDetails(video.src);
  const finalSrc = video.type === 'youtube' ? embedUrl : video.src;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/95 backdrop-blur-xl p-4 sm:p-8"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20 border border-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 bg-slate-900/80 hover:bg-red-500/90 text-white rounded-full transition-all duration-300 backdrop-blur-md border border-white/10 group"
        >
          <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
        </button>

        {video.type === "youtube" && embedUrl ? (
          <iframe
            src={finalSrc}
            title={video.title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-400 bg-slate-900">
            <p>Video Source Not Found</p>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

// --- Sub-Component: The Interactive Card ---
const VideoCard = ({ video, onClick }) => {
  const ytDetails = video.type === 'youtube' ? getYouTubeDetails(video.src) : null;
  const displayThumbnail = video.type === 'youtube' ? ytDetails?.thumbnailUrl : video.thumbnail;

  return (
    <motion.div
      layoutId={`card-${video.id}`}
      whileHover={{ y: -8 }}
      className="group relative cursor-pointer"
      onClick={() => onClick(video)}
    >
      {/* Card Container */}
      <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 shadow-xl transition-all duration-500 group-hover:shadow-blue-900/20 group-hover:border-blue-500/30">
        
        {/* Background Image with Zoom Effect */}
        <div className="absolute inset-0 z-0">
          <img
            src={displayThumbnail}
            alt={video.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 z-10 flex flex-col justify-end p-6">
          
          {/* Play Icon Container */}
          <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 opacity-100 group-hover:opacity-0 group-hover:scale-110">
             <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-950/50 text-white backdrop-blur-md border border-white/20 shadow-lg">
                <Play fill="currentColor" className="ml-1 h-6 w-6" />
             </div>
          </div>

          {/* Hover Play Button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
             <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/40">
                <Play fill="currentColor" className="ml-1 h-7 w-7" />
             </div>
          </div>

          {/* Text Content */}
          <div className="transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
             <div className="mb-2 flex items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-blue-500/20 px-2.5 py-0.5 text-xs font-bold text-blue-300 border border-blue-500/20 uppercase tracking-wider backdrop-blur-md">
                  {video.type === 'youtube' ? 'YouTube' : 'Event'}
                </span>
             </div>
             
             <h3 className="text-xl font-bold text-white leading-tight mb-1 line-clamp-2 group-hover:text-blue-200 transition-colors">
               {video.title}
             </h3>

             {/* Animated Line */}
             <div className="h-0.5 w-0 bg-blue-500 group-hover:w-full transition-all duration-500 ease-out mt-4 opacity-0 group-hover:opacity-100" />
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
    <section className="relative w-full bg-slate-950 py-24 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-900/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-900/20 blur-[120px] rounded-full" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="mb-20 text-center">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-block"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
                <span className="h-px w-8 bg-blue-500/50" />
                <span className="text-blue-400 text-sm font-bold uppercase tracking-widest">Video Gallery</span>
                <span className="h-px w-8 bg-blue-500/50" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
              Experience <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Our World</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-slate-400 font-light">
              Watch highlights, learning sessions, and memorable moments from our campus.
            </p>
          </motion.div>
        </div>

        {/* Video Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
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