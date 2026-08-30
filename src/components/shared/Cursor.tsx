'use client';
import React, { useRef, useEffect, useCallback, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

interface CyberCursorProps {
  rippleColor?: string;
  maxRadius?: number;
  duration?: number;
  children?: React.ReactNode;
}

interface Shockwave {
  x: number;
  y: number;
  code: string;
  startTime: number;
}

const HEX_CODES = ['0x00', '0xFF', '1011', 'ACK', 'SYS_OK', '>>>', 'INIT'];

const CyberCursor: React.FC<CyberCursorProps> = ({
  rippleColor = '#0df259',
  maxRadius = 50,
  duration = 500,
  children,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shockwavesRef = useRef<Shockwave[]>([]);
  const startTimeRef = useRef<number | null>(null);

  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (!mounted || window.matchMedia('(pointer: coarse)').matches) return;

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    document.body.style.cursor = 'none';
    const styleElement = document.createElement('style');
    styleElement.id = 'custom-cursor-style';
    styleElement.innerHTML = `* { cursor: none !important; }`;
    document.head.appendChild(styleElement);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'auto';
      const styleEl = document.getElementById('custom-cursor-style');
      if (styleEl) styleEl.remove();
    };
  }, [mounted]);

  const springConfig = { damping: 28, stiffness: 350 };
  const cursorX = useSpring(mousePosition.x, springConfig);
  const cursorY = useSpring(mousePosition.y, springConfig);

  useEffect(() => {
    cursorX.set(mousePosition.x);
    cursorY.set(mousePosition.y);
  }, [mousePosition, cursorX, cursorY]);

  // Canvas setup & sizing
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    let resizeTimeout: ReturnType<typeof setTimeout>;
    const resizeCanvas = () => {
      const { width, height } = parent.getBoundingClientRect();
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
    };

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeCanvas, 100);
    };

    const ro = new ResizeObserver(handleResize);
    ro.observe(parent);
    resizeCanvas();

    return () => {
      ro.disconnect();
      clearTimeout(resizeTimeout);
    };
  }, []);

  const easeOut = useCallback((t: number) => t * (2 - t), []);

  // Sonar Ripple & Code Fragment Canvas Engine
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;

    const draw = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      shockwavesRef.current = shockwavesRef.current.filter((wave: Shockwave) => {
        const elapsed = timestamp - wave.startTime;
        if (elapsed >= duration) return false;

        const progress = elapsed / duration;
        const eased = easeOut(progress);
        const radius = eased * maxRadius;
        const alpha = 1 - progress;

        ctx.save();
        ctx.strokeStyle = rippleColor;
        ctx.globalAlpha = alpha;

        // 1. Expanding Circular Pulse Ring
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(wave.x, wave.y, radius, 0, 2 * Math.PI);
        ctx.stroke();

        // 2. Expanding Square Frame
        ctx.lineWidth = 1;
        const squareSize = radius * 1.4;
        ctx.strokeRect(wave.x - squareSize / 2, wave.y - squareSize / 2, squareSize, squareSize);

        // 3. Floating Terminal Hex Code
        ctx.fillStyle = rippleColor;
        ctx.font = 'bold 10px monospace';
        ctx.fillText(wave.code, wave.x + radius + 6, wave.y - radius / 2);

        ctx.restore();
        return true;
      });

      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animationId);
  }, [rippleColor, maxRadius, duration, easeOut]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const randomCode = HEX_CODES[Math.floor(Math.random() * HEX_CODES.length)];

    shockwavesRef.current.push({
      x,
      y,
      code: randomCode,
      startTime: performance.now(),
    });
  };

  return (
    <div className="relative h-full w-full" onClick={handleClick}>
      <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 z-50" />
      {children}

      {mounted && !window.matchMedia('(pointer: coarse)').matches && (
        <>
          {/* Outer Trailing Reticle */}
          <motion.div
            className="pointer-events-none fixed top-0 left-0 z-[9999] flex h-9 w-9 items-center justify-center"
            style={{
              x: cursorX,
              y: cursorY,
              translateX: '-50%',
              translateY: '-50%',
            }}
            animate={{
              scale: isClicking ? 0.8 : isHovering ? 1.4 : 1,
              rotate: isHovering ? 90 : 0,
            }}
            transition={{ type: 'spring', ...springConfig }}
          >
            <div
              className={`absolute inset-0 border-2 transition-colors duration-200 ${
                isHovering ? 'border-accent shadow-[0_0_15px_var(--accent)]' : 'border-accent/60'
              }`}
            >
              <span className="border-accent absolute -top-1.5 -left-1.5 h-3 w-3 border-t-4 border-l-4" />
              <span className="border-accent absolute -top-1.5 -right-1.5 h-3 w-3 border-t-4 border-r-4" />
              <span className="border-accent absolute -bottom-1.5 -left-1.5 h-3 w-3 border-b-4 border-l-4" />
              <span className="border-accent absolute -right-1.5 -bottom-1.5 h-3 w-3 border-r-4 border-b-4" />
            </div>

            {isHovering && (
              <motion.span
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-background-primary text-accent border-accent absolute top-10 left-1/2 -translate-x-1/2 rounded border-2 px-1.5 py-0.5 font-mono text-[9px] font-black tracking-widest whitespace-nowrap shadow-[0_0_10px_rgba(13,242,89,0.3)]"
              >
                [TARGET]
              </motion.span>
            )}
          </motion.div>

          {/* Inner Sharp Crosshair */}
          <motion.div
            className="text-accent pointer-events-none fixed top-0 left-0 z-[10000] flex h-4 w-4 items-center justify-center"
            style={{
              x: mousePosition.x,
              y: mousePosition.y,
              translateX: '-50%',
              translateY: '-50%',
            }}
          >
            <div className="relative flex h-full w-full items-center justify-center">
              <div className="bg-accent h-2 w-2 rounded-full shadow-[0_0_10px_var(--accent)]" />
              <div className="bg-accent absolute h-0.5 w-4 shadow-[0_0_6px_var(--accent)]" />
              <div className="bg-accent absolute h-4 w-0.5 shadow-[0_0_6px_var(--accent)]" />
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default CyberCursor;
