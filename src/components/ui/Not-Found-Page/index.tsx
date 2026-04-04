'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AlertTriangle, Home, RefreshCcw } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 font-mono">
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="text-[20vw] font-bold text-accent select-none flex items-center justify-center h-full">404</div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="z-10 text-center space-y-8">
        <motion.div
          animate={{
            rotate: [0, -10, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="inline-block p-4 rounded-full bg-red-500/10 border border-red-500/20"
        >
          <AlertTriangle size={48} className="text-red-500" />
        </motion.div>

        <div className="space-y-2">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-100">
            SYSTEM_<span className="text-accent">FAILURE</span>
          </h1>
          <p className="text-gray-500 text-sm md:text-base uppercase tracking-[0.3em]">
            Error 404: Requested Node Not Found
          </p>
        </div>

        <div className="max-w-md mx-auto bg-background-secondary border border-primary p-6 rounded-xl text-left shadow-2xl">
          <div className="flex gap-2 mb-4 border-b border-primary pb-2">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <div className="w-2 h-2 rounded-full bg-yellow-500" />
            <div className="w-2 h-2 rounded-full bg-green-500" />
          </div>
          <div className="space-y-2 text-xs md:text-sm leading-relaxed">
            <p className="text-accent">$ run diagnostic --target:current_path</p>
            <p className="text-gray-400 font-mono">Searching database...</p>
            <p className="text-red-400 font-mono underline">[!] 0 nodes found at this address.</p>
            <p className="text-gray-400">
              The path may have been encrypted, moved, or deleted by a higher-level administrator.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/80 transition-all group"
          >
            <Home size={18} />
            RETURN_HOME
          </Link>

          <button
            onClick={() => window.location.reload()}
            className="flex items-center justify-center gap-2 px-8 py-3 border border-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/80 transition-all"
          >
            <RefreshCcw size={18} />
            RETRY_SYNC
          </button>
        </div>
      </motion.div>

      <div className="mt-20 flex gap-10 text-[10px] text-gray-600 font-mono">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          CORE_TEMP: CRITICAL
        </div>
        <div className="hidden md:block">Uptime: 00:00:04:04</div>
      </div>
    </div>
  );
}
