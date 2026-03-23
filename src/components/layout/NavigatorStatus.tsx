'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function NavigatorStatus() {
  const [hoveredUrl, setHoveredUrl] = useState<string | null>(null);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (target) {
        setHoveredUrl(target.getAttribute('href'));
      }
    };

    const handleMouseOut = () => setHoveredUrl(null);

    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);
    return () => {
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-9999 pointer-events-none">
      <AnimatePresence>
        {hoveredUrl && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="bg-[#16211a] border border-[#2a3c30] px-3 py-1 rounded-md shadow-2xl"
          >
            <p className="text-[10px] font-mono text-[#5ff07e] tracking-widest">
              <span className="opacity-50">READY_TO_NAVIGATE:</span> {hoveredUrl}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
