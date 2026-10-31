'use client';
import { useState } from 'react';
import { RefreshCw } from 'lucide-react';
import { ABOUT } from '@/constants/profile';

export default function RandomQuote() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  const handleNextMotto = () => {
    setIsRotating(true);
    setQuoteIndex((prev) => (prev + 1) % ABOUT.quotes.length);
    setTimeout(() => setIsRotating(false), 500);
  };

  const currentQuote = ABOUT.quotes[quoteIndex];

  return (
    <blockquote className="border-accent bg-background-secondary/30 relative flex min-h-[140px] flex-col justify-between rounded-r-xl border-l-4 p-5 font-mono text-sm">
      <div className="flex-1 pb-4">
        <p className="leading-relaxed text-white/70 italic">&quot;{currentQuote ?? 'loading philosophy...'}&quot;</p>
      </div>

      <div className="flex items-center justify-between gap-2 border-t border-white/5 pt-3 not-italic">
        <span className="text-accent text-[clamp(0.65rem,0.9vw,0.75rem)] font-bold tracking-widest uppercase">
          — SYSTEM_MOTTO.txt
        </span>

        <button
          type="button"
          onClick={handleNextMotto}
          aria-label="Get another motto"
          className="group/btn hover:border-accent/40 hover:bg-accent/10 hover:text-accent flex cursor-pointer items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] text-gray-400 transition-all active:scale-95"
        >
          <span>SHUFFLE</span>
          <RefreshCw
            size={12}
            className={`transition-transform duration-500 ${isRotating ? 'text-accent rotate-180' : 'group-hover/btn:rotate-90'}`}
          />
        </button>
      </div>
    </blockquote>
  );
}
