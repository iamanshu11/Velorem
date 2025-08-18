"use client";
import { useTheme } from "@/app/providers/ThemeProvider";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Star } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [stars, setStars] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    delay: number;
  }>>([]);

  useEffect(() => {
    setMounted(true);
    // Generate random stars for dark mode
    const starPositions = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 2,
    }));
    setStars(starPositions);
  }, []);

  if (!mounted) {
    return <div className="w-20 h-10" />;
  }

  const isDark = theme === "dark";

  return (
    <div className="relative">
      <motion.button
        onClick={toggleTheme}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="relative overflow-hidden w-20 h-10 rounded-full border-2 
                   border-gray-200 dark:border-gray-600 transition-all duration-500
                   hover:shadow-lg hover:shadow-yellow-500/25 dark:hover:shadow-blue-500/25
                   focus:outline-none focus:ring-4 focus:ring-yellow-500/30 dark:focus:ring-blue-500/30"
        whileTap={{ scale: 0.95 }}
        animate={{
          background: isDark 
            ? "linear-gradient(135deg, #1e293b, #0f172a, #020617)" 
            : "linear-gradient(135deg, #87ceeb, #98d8e8, #b0e6ff)",
        }}
      >
        {/* Animated background elements */}
        <AnimatePresence>
          {isDark ? (
            // Night sky with stars
            <motion.div
              key="night"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
            >
              {stars.map((star) => (
                <motion.div
                  key={star.id}
                  className="absolute bg-white rounded-full"
                  style={{
                    left: `${star.x}%`,
                    top: `${star.y}%`,
                    width: `${star.size}px`,
                    height: `${star.size}px`,
                  }}
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: star.delay,
                  }}
                />
              ))}
              {/* Shooting star effect on hover */}
              {isHovered && (
                <motion.div
                  className="absolute w-px h-px bg-white shadow-sm"
                  initial={{ x: -10, y: 5, opacity: 0 }}
                  animate={{ x: 70, y: 25, opacity: [0, 1, 0] }}
                  transition={{ duration: 0.8 }}
                />
              )}
            </motion.div>
          ) : (
            // Day sky with clouds
            <motion.div
              key="day"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
            >
              {/* Floating cloud particles */}
              <motion.div
                className="absolute w-3 h-2 bg-white/40 rounded-full"
                style={{ left: "10%", top: "30%" }}
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute w-2 h-1 bg-white/30 rounded-full"
                style={{ left: "70%", top: "20%" }}
                animate={{ x: [0, -3, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main celestial body (Sun/Moon) */}
        <motion.div
          className="absolute top-1/2 z-10"
          animate={{
            left: isDark ? "calc(100% - 32px - 4px)" : "4px",
            y: "-50%",
          }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 25,
            duration: 0.6 
          }}
        >
          <motion.div
            className={`w-8 h-8 rounded-full flex items-center justify-center relative
                       ${isDark 
                         ? "bg-gradient-to-br from-slate-300 to-slate-100 shadow-lg shadow-blue-500/20" 
                         : "bg-gradient-to-br from-yellow-400 to-yellow-300 shadow-lg shadow-yellow-500/40"
                       }`}
            animate={{ rotate: isDark ? 0 : 360 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            whileHover={{ scale: 1.1 }}
          >
            {isDark ? (
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <Moon className="w-5 h-5 text-slate-700" />
                {/* Moon craters */}
                <div className="absolute top-1 right-1 w-1 h-1 bg-slate-400 rounded-full opacity-60" />
                <div className="absolute bottom-1.5 left-1.5 w-0.5 h-0.5 bg-slate-400 rounded-full opacity-40" />
              </motion.div>
            ) : (
              <motion.div
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="relative"
              >
                <Sun className="w-5 h-5 text-yellow-700" />
                {/* Sun rays */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-0.5 h-1 bg-yellow-400 rounded-full"
                    style={{
                      left: "50%",
                      top: "50%",
                      transformOrigin: "center",
                      transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-12px)`,
                    }}
                    animate={{
                      scaleY: isHovered ? [1, 1.5, 1] : 1,
                      opacity: isHovered ? [0.7, 1, 0.7] : 0.7,
                    }}
                    transition={{
                      duration: 1,
                      repeat: isHovered ? Infinity : 0,
                      delay: i * 0.1,
                    }}
                  />
                ))}
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        {/* Ripple effect on click */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-current opacity-0"
          animate={isHovered ? { 
            scale: [1, 1.2], 
            opacity: [0, 0.3, 0] 
          } : {}}
          transition={{ duration: 1, repeat: Infinity }}
        />

        {/* Glow effect */}
        <motion.div
          className={`absolute inset-0 rounded-full ${
            isDark 
              ? "shadow-inner shadow-blue-500/20" 
              : "shadow-inner shadow-yellow-500/20"
          }`}
          animate={{
            boxShadow: isHovered
              ? isDark
                ? "inset 0 0 20px rgba(59, 130, 246, 0.4), 0 0 20px rgba(59, 130, 246, 0.2)"
                : "inset 0 0 20px rgba(234, 179, 8, 0.4), 0 0 20px rgba(234, 179, 8, 0.2)"
              : isDark
                ? "inset 0 0 10px rgba(59, 130, 246, 0.2)"
                : "inset 0 0 10px rgba(234, 179, 8, 0.2)",
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Particle burst effect on toggle */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-1 h-1 rounded-full ${
                    isDark ? "bg-blue-400" : "bg-yellow-400"
                  }`}
                  style={{
                    left: "50%",
                    top: "50%",
                  }}
                  animate={{
                    x: Math.cos((i * Math.PI * 2) / 6) * 30,
                    y: Math.sin((i * Math.PI * 2) / 6) * 30,
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Theme label */}
      <motion.div
        className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 
                   text-xs font-medium text-gray-600 dark:text-gray-400"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {isDark ? "Dark" : "Light"}
      </motion.div>
    </div>
  );
}