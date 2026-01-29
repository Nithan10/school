import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Sparkles, Palette, Rocket, BookOpen, Sun, Star, Heart, Cloud } from "lucide-react";

// --- Utility for class merging ---
function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

// --- Type Definitions ---
interface CardType {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  accent: string;
  shadowColor: string;
  badge: string;
  stats: string;
  particles: string[];
  gradient: string;
  borderColor: string;
}

// --- Rainbow Streamer Animation (Replaces Quantum Wave) ---
const RainbowStreamers = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
      <svg className="w-full h-full" viewBox="0 0 1200 800">
        <defs>
          <linearGradient id="rainbowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FB7185" /> {/* Pink */}
            <stop offset="33%" stopColor="#FBBF24" /> {/* Yellow */}
            <stop offset="66%" stopColor="#34D399" /> {/* Green */}
            <stop offset="100%" stopColor="#60A5FA" /> {/* Blue */}
          </linearGradient>
        </defs>
        
        {/* Confetti Particles */}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.circle
            key={i}
            cx={Math.random() * 1200}
            cy={Math.random() * 800}
            r={Math.random() * 6 + 2}
            fill={["#F472B6", "#FBBF24", "#60A5FA", "#A78BFA"][Math.floor(Math.random() * 4)]}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0],
              y: [0, -100, 0], // Float up
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Wavy Streamers */}
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.path
            key={`streamer-${i}`}
            d={`M -100,${100 + i * 150} Q 300,${50 + i * 150} 600,${200 + i * 150} T 1300,${100 + i * 150}`}
            stroke="url(#rainbowGradient)"
            strokeWidth="3"
            strokeDasharray="10 20"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1]
            }}
            transition={{
              duration: 10 + i,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </svg>
    </div>
  );
};

// --- Playful Doodle Background (Replaces Holographic Grid) ---
const PlayfulDoodles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
       {/* Soft Gradient Blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-200/40 rounded-full blur-[100px] mix-blend-multiply animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-200/40 rounded-full blur-[100px] mix-blend-multiply animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-200/30 rounded-full blur-[120px] mix-blend-multiply" />
      
      {/* Floating Shapes */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
           <motion.div
            key={i}
            className="absolute opacity-20"
            style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
            }}
            animate={{
                y: [0, -40, 0],
                rotate: [0, 20, -20, 0],
                scale: [1, 1.1, 1]
            }}
            transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                ease: "easeInOut"
            }}
           >
               {i % 3 === 0 ? <Cloud size={60} className="text-sky-400" /> : 
                i % 3 === 1 ? <Star size={40} className="text-yellow-400" /> :
                <Heart size={40} className="text-pink-400" />}
           </motion.div>
        ))}
      </div>
    </div>
  );
};

// --- Crayon Flight Paths (Replaces Neural Synapses) ---
const CrayonPaths = ({ activeIndex }: { activeIndex: number | null }) => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 1200 800">
        {/* Dashed Flight Lines */}
        {[0, 1, 2].map((i) => {
          const x1 = 200 + (i * 300);
          const x2 = 1000 - (i * 300);
          return (
            <motion.path
              key={`path-${i}`}
              d={`M ${x1},200 Q 600,500 ${x2},600`}
              stroke={activeIndex === i ? "#F472B6" : "#CBD5E1"} // Pink when active, Slate when inactive
              strokeWidth="4"
              strokeDasharray="15 15"
              fill="none"
              strokeLinecap="round"
              animate={{ 
                strokeDashoffset: [0, -30],
                strokeOpacity: activeIndex === i ? 1 : 0.3,
                strokeWidth: activeIndex === i ? 5 : 3
              }}
              transition={{ duration: 1, ease: "linear", repeat: Infinity }}
            />
          );
        })}
      </svg>
    </div>
  );
};

// --- 3D Bouncing Bubble (Replaces Holographic Orb) ---
const BouncingBubble = ({ color = "bg-blue-400" }) => {
  return (
    <motion.div
      className="relative w-full h-full"
      animate={{
        y: [0, -20, 0],
        scale: [1, 1.05, 1]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <div className={`absolute inset-0 rounded-full ${color} opacity-20 blur-xl`} />
      <div className={`absolute inset-4 rounded-full ${color} opacity-30 backdrop-blur-sm border-2 border-white/50 shadow-inner`} />
      <div className="absolute top-1/4 right-1/4 w-4 h-4 rounded-full bg-white opacity-60" /> {/* Highlight */}
    </motion.div>
  );
};

// --- 3D Floating Card (Re-skinned) ---
interface AdvancedCardProps {
  children: React.ReactNode;
  className?: string;
  shadowColor?: string;
  borderColor?: string;
  hoverIntensity?: number;
  index?: number;
}

const PlayfulCard = ({ 
    children, 
    className, 
    shadowColor = "shadow-blue-200", 
    borderColor = "border-blue-200", 
    hoverIntensity = 15, 
    index = 0 
}: AdvancedCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotationX = useMotionValue(0);
  const rotationY = useMotionValue(0);
  const isHovering = useMotionValue(0);

  const hoverSpring = useSpring(isHovering, { stiffness: 200, damping: 10 }); // Bouncier damping
  const rotateXSpring = useSpring(rotationX, { stiffness: 300, damping: 30 });
  const rotateYSpring = useSpring(rotationY, { stiffness: 300, damping: 30 });

  const transform = useMotionTemplate`
    perspective(1000px)
    rotateX(${rotateXSpring}deg)
    rotateY(${rotateYSpring}deg)
    scale(${useMotionTemplate`calc(1 + ${hoverSpring} * 0.03)`})
  `;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
    isHovering.set(1);
    const rotateY = ((e.clientX - centerX) / rect.width) * hoverIntensity;
    const rotateX = ((centerY - e.clientY) / rect.height) * hoverIntensity;
    rotationX.set(rotateX);
    rotationY.set(rotateY);
  };

  const handleMouseLeave = () => {
    rotationX.set(0);
    rotationY.set(0);
    isHovering.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: "preserve-3d", transform }}
      className={cn(
        "group relative h-full rounded-[2.5rem]",
        "bg-white",
        "shadow-xl",
        shadowColor, // Dynamic colored shadow
        "border-4",
        borderColor, // Dynamic colored border
        "transition-all duration-500",
        className
      )}
    >
      {/* Inner Content */}
      <div className="relative h-full w-full rounded-[2.2rem] overflow-hidden bg-white z-10 flex flex-col">
        {children}
      </div>
    </motion.div>
  );
};

// --- Animated Skipping Rope (Replaces DNA Helix) ---
const SkippingRopeAnimation = () => {
  return (
    <div className="absolute left-1/2 top-0 -translate-x-1/2 w-64 h-32 opacity-100">
      <svg className="w-full h-full" viewBox="0 0 200 100">
        <motion.path
          d="M 10,50 Q 100,10 190,50"
          stroke="#FBBF24" // Yellow
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          animate={{ d: ["M 10,50 Q 100,-20 190,50", "M 10,50 Q 100,120 190,50", "M 10,50 Q 100,-20 190,50"] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M 10,50 Q 100,90 190,50"
          stroke="#60A5FA" // Blue
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="10 10"
          fill="none"
          animate={{ d: ["M 10,50 Q 100,120 190,50", "M 10,50 Q 100,-20 190,50", "M 10,50 Q 100,120 190,50"] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
        />
      </svg>
    </div>
  );
};

// --- Main Component ---
export default function WhyUsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // New Bright Theme Palette
  const cards: CardType[] = [
    {
      title: "Holistic Growth",
      description: "We water every seed of potential! Our approach helps mind, body, and heart grow together in a sunny environment.",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1000&auto=format&fit=crop",
      icon: <Palette className="w-full h-full" />,
      accent: "text-purple-500",
      shadowColor: "shadow-purple-200",
      borderColor: "border-purple-200",
      badge: "Whole Child",
      stats: "Happy Kids",
      particles: ["🎨", "🤸", "❤️"],
      gradient: "from-purple-400 to-pink-400",
    },
    {
      title: "Active Learning",
      description: "Learning is an adventure! We use hands-on projects and exciting experiments to make every lesson stick.",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1000&auto=format&fit=crop",
      icon: <Rocket className="w-full h-full" />,
      accent: "text-sky-500",
      shadowColor: "shadow-sky-200",
      borderColor: "border-sky-200",
      badge: "Future Ready",
      stats: "Super Skills",
      particles: ["🚀", "⭐", "🔬"],
      gradient: "from-sky-400 to-blue-500",
    },
    {
      title: "Curious Minds",
      description: "Questions are encouraged here! We spark curiosity and let students lead the way to new discoveries.",
      image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1000&auto=format&fit=crop",
      icon: <BookOpen className="w-full h-full" />,
      accent: "text-orange-500",
      shadowColor: "shadow-orange-200",
      borderColor: "border-orange-200",
      badge: "Explorers",
      stats: "Big Dreams",
      particles: ["🔍", "📚", "💡"],
      gradient: "from-orange-400 to-amber-400",
    }
  ];

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-screen py-32 overflow-hidden bg-sky-50" // Light Sky Background
    >
      {/* Background Effects */}
      <PlayfulDoodles />
      <RainbowStreamers />
      <CrayonPaths activeIndex={activeIndex} />
      
      {/* Floating Bubbles */}
      <motion.div className="absolute top-20 left-[10%] w-40 h-40">
        <BouncingBubble color="bg-pink-400" />
      </motion.div>
      <motion.div className="absolute bottom-40 right-[10%] w-32 h-32">
        <BouncingBubble color="bg-yellow-400" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 relative"
        >
          <SkippingRopeAnimation />
          
          {/* Fun Badge */}
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 3 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border-2 border-yellow-400 shadow-[4px_4px_0px_0px_rgba(251,191,36,1)] mb-8"
          >
            <Sun className="w-5 h-5 text-yellow-500 animate-spin-slow" />
            <span className="text-sm font-bold text-slate-700 tracking-wide uppercase">
              Where Learning Comes Alive
            </span>
          </motion.div>
          
          {/* Main Title - Colorful Gradient */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight text-slate-800">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-500 to-sky-500">Choose Us?</span>
          </h1>
          
          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-slate-600 font-medium leading-relaxed">
            Where <span className="text-purple-600 font-bold">imagination takes flight</span> and 
            <span className="text-sky-600 font-bold"> every day is a new adventure</span> in learning, 
            friendship, and discovery.
          </p>
        </motion.div>

        {/* 3D Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              className="h-[550px] relative"
            >
              <PlayfulCard 
                shadowColor={card.shadowColor} 
                borderColor={card.borderColor}
                index={index}
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden group/image">
                  <div className={`absolute inset-0 bg-gradient-to-tr ${card.gradient} opacity-20 z-10`} />
                  <motion.img 
                    src={card.image} 
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-110"
                  />
                  
                  {/* Floating Particles in Image */}
                  <div className="absolute inset-0 z-20">
                    {card.particles.map((particle, i) => (
                      <motion.div
                        key={i}
                        className="absolute text-4xl"
                        style={{ left: `${20 + i * 30}%`, top: '50%' }}
                        animate={{ y: [0, -20, 0], opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
                        transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                      >
                        {particle}
                      </motion.div>
                    ))}
                  </div>

                  {/* Icon Bubble */}
                  <div className="absolute -bottom-10 left-8 z-30">
                    <motion.div 
                      className={`w-20 h-20 rounded-full bg-white border-4 border-white shadow-lg flex items-center justify-center p-4 ${card.accent}`}
                      whileHover={{ scale: 1.1, rotate: 15 }}
                    >
                      {card.icon}
                    </motion.div>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-4 right-4 z-30">
                    <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur text-sm font-bold shadow-md text-slate-700 border border-slate-100">
                      {card.badge}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 p-8 pt-12 flex flex-col bg-white">
                  <h3 className={`text-3xl font-black mb-4 ${card.accent}`}>
                    {card.title}
                  </h3>
                  <p className="text-slate-500 font-medium leading-relaxed mb-6 text-lg">
                    {card.description}
                  </p>

                  <div className="mt-auto pt-6 border-t-2 border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Result</div>
                      <div className={`text-2xl font-black ${card.accent}`}>{card.stats}</div>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-5 py-2 rounded-xl font-bold text-white bg-gradient-to-r ${card.gradient} shadow-md`}
                    >
                      Explore →
                    </motion.button>
                  </div>
                </div>
              </PlayfulCard>
            </motion.div>
          ))}
        </div>

        {/* Playful Stats Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-24 p-8 md:p-12 rounded-[3rem] bg-white border-4 border-slate-100 shadow-2xl relative overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-400 via-yellow-400 to-sky-400" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Years of Fun", value: "25+", color: "text-pink-500", bg: "bg-pink-100" },
              { label: "Happy Parents", value: "98%", color: "text-yellow-500", bg: "bg-yellow-100" },
              { label: "Student Ratio", value: "1:15", color: "text-sky-500", bg: "bg-sky-100" },
              { label: "Great Grades", value: "100%", color: "text-purple-500", bg: "bg-purple-100" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${stat.bg} flex items-center justify-center`}>
                    <Sparkles className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className={`text-4xl md:text-5xl font-black mb-1 ${stat.color}`}>{stat.value}</div>
                <div className="text-slate-400 font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Button */}
        <div className="mt-20 text-center">
             <motion.button
                whileHover={{ scale: 1.05, rotate: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative group px-12 py-6 rounded-full bg-slate-900 text-white font-bold text-xl shadow-2xl overflow-hidden"
             >
                 <span className="relative z-10 flex items-center gap-3">
                     Schedule a Visit <Star className="fill-yellow-400 text-yellow-400" />
                 </span>
                 <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
             </motion.button>
        </div>
      </div>
    </section>
  );
}