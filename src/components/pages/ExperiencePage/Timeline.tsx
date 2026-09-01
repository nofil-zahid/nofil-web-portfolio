'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import ExperienceCard from './Card';
import { TimelineProps } from '@/types/components';

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [nodePositions, setNodePositions] = useState<number[]>([]);
  const [activeSegmentIndex, setActiveSegmentIndex] = useState<number>(0);
  const [tipY, setTipY] = useState<number>(0);
  const [containerHeight, setContainerHeight] = useState<number>(0);

  // Measure exact Y centers for each node and total container height
  useEffect(() => {
    const calculatePositions = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setContainerHeight(rect.height);

      const positions = nodeRefs.current.map((ref) => {
        if (!ref) return 0;
        const nodeRect = ref.getBoundingClientRect();
        return nodeRect.top - rect.top + nodeRect.height / 2;
      });

      setNodePositions(positions);
    };

    calculatePositions();
    window.addEventListener('resize', calculatePositions);
    return () => window.removeEventListener('resize', calculatePositions);
  }, [items]);

  // 1. Wider viewport offset covers full range faster on scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 85%', 'end 15%'],
  });

  // 2. High stiffness + lower damping = Snappy & faster travel speed
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 20,
    restDelta: 0.001,
  });

  // 3. Track full Y tip position starting from 0 (very top) to container height
  useMotionValueEvent(smoothProgress, 'change', (latest) => {
    if (!containerHeight) return;

    // Line tip moves from 0 to full container height
    const currentY = latest * containerHeight;
    setTipY(currentY);

    // Identify active node handoff index
    if (nodePositions.length > 0) {
      let currentSegment = 0;
      for (let i = 0; i < nodePositions.length; i++) {
        if (currentY >= nodePositions[i]) {
          currentSegment = i;
        }
      }
      setActiveSegmentIndex(currentSegment);
    }
  });

  const CurrentTipIcon = items[activeSegmentIndex]?.icon || Briefcase;

  return (
    <section
      ref={containerRef}
      className="relative mx-auto w-full max-w-350 px-0 pb-[clamp(3rem,8vw,6rem)] md:px-[clamp(1rem,4vw,2rem)]"
    >
      {/* Base Track Line */}
      <div
        className="bg-border/40 absolute top-0 bottom-0 left-[calc(1.5rem)] w-0.5 -translate-x-1/2 md:left-1/2"
        aria-hidden="true"
      />

      {/* --- Active Line Starts from the VERY TOP (0px) --- */}
      <div
        style={{
          top: 0,
          height: `${tipY}px`,
        }}
        className="from-accent/10 via-accent to-accent absolute left-[calc(1.5rem)] z-0 w-0.5 -translate-x-1/2 bg-linear-to-b md:left-1/2"
        aria-hidden="true"
      />

      {/* --- Traveling Icon Box (Locked precisely to line tip) --- */}
      {containerHeight > 0 && tipY > 0 && (
        <div
          style={{
            top: `${tipY}px`,
            transform: 'translate3d(-50%, -50%, 0)',
          }}
          className="border-accent bg-background-primary text-accent absolute left-[calc(1.5rem)] z-20 flex h-[clamp(32px,4vw,40px)] w-[clamp(32px,4vw,40px)] items-center justify-center rounded-lg border shadow-[0_0_20px_var(--accent)] md:left-1/2"
        >
          {/* Corner Bracket Details */}
          <span className="border-accent/70 absolute top-0.5 left-0.5 h-1 w-1 border-t border-l" />
          <span className="border-accent/70 absolute right-0.5 bottom-0.5 h-1 w-1 border-r border-b" />

          <CurrentTipIcon size={16} className="animate-pulse" />
        </div>
      )}

      {/* Timeline Stations */}
      <div className="space-y-[clamp(2.5rem,6vw,5rem)] md:space-y-[clamp(4rem,8vw,7rem)]">
        {items.map((item, index) => {
          const isEven = index % 2 === 0;
          const NodeIcon = item?.icon || Briefcase;

          const isCurrentlyTraveling = index === activeSegmentIndex && tipY > (nodePositions[index] || 0);
          const isReached = tipY >= (nodePositions[index] || 0);

          return (
            <div key={index} className="relative flex flex-col items-start justify-between md:flex-row md:items-center">
              {/* --- Timeline Station Box --- */}
              <div
                ref={(el) => {
                  nodeRefs.current[index] = el;
                }}
                className={`bg-background-primary absolute left-[calc(1.5rem)] z-10 flex h-[clamp(32px,4vw,40px)] w-[clamp(32px,4vw,40px)] -translate-x-1/2 items-center justify-center rounded-lg border transition-all duration-300 md:left-1/2 ${
                  isReached
                    ? 'border-accent text-accent shadow-[0_0_15px_rgba(13,242,89,0.3)]'
                    : 'border-border-glow text-text-secondary'
                }`}
              >
                {/* Corner Bracket Details */}
                <span className="border-accent/70 absolute top-0.5 left-0.5 h-1 w-1 border-t border-l" />
                <span className="border-accent/70 absolute right-0.5 bottom-0.5 h-1 w-1 border-r border-b" />

                <NodeIcon
                  size={16}
                  className={`transition-opacity duration-200 ${isCurrentlyTraveling ? 'opacity-0' : 'opacity-100'}`}
                />
              </div>

              {/* Experience Card */}
              <div
                className={`w-full pl-[clamp(3rem,6vw,4rem)] md:w-[calc(50%-clamp(2rem,6vw,4rem))] md:pl-0 ${
                  isEven ? 'md:mr-auto' : 'md:ml-auto'
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                  <ExperienceCard {...item} />
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Timeline;
