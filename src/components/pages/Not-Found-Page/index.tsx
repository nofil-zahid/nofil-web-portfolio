'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AlertTriangle, Home, RefreshCcw } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center p-6 font-mono">
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-5">
        <div className="text-accent flex h-full items-center justify-center text-[20vw] font-bold select-none">404</div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="z-10 space-y-8 text-center">
        <motion.div
          animate={{
            rotate: [0, -10, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="inline-block rounded-full border border-red-500/20 bg-red-500/10 p-4"
        >
          <AlertTriangle size={48} className="text-red-500" />
        </motion.div>

        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-gray-100 md:text-6xl">
            SYSTEM_<span className="text-accent">FAILURE</span>
          </h1>
          <p className="text-sm tracking-[0.3em] text-gray-500 uppercase md:text-base">
            Error 404: Requested Node Not Found
          </p>
        </div>

        <div className="bg-background-secondary border-primary mx-auto max-w-md rounded-xl border p-6 text-left shadow-2xl">
          <div className="border-primary mb-4 flex gap-2 border-b pb-2">
            <div className="h-2 w-2 rounded-full bg-red-500" />
            <div className="h-2 w-2 rounded-full bg-yellow-500" />
            <div className="h-2 w-2 rounded-full bg-green-500" />
          </div>
          <div className="space-y-2 text-xs leading-relaxed md:text-sm">
            <p className="text-accent">$ run diagnostic --target:current_path</p>
            <p className="font-mono text-gray-400">Searching database...</p>
            <p className="font-mono text-red-400 underline">[!] 0 nodes found at this address.</p>
            <p className="text-gray-400">
              The path may have been encrypted, moved, or deleted by a higher-level administrator.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-4 pt-4 md:flex-row">
          <Link
            href="/"
            className="bg-primary text-primary-foreground hover:bg-primary/80 group flex items-center justify-center gap-2 rounded-lg px-8 py-3 font-bold transition-all"
          >
            <Home size={18} />
            RETURN_HOME
          </Link>

          <button
            onClick={() => window.location.reload()}
            className="border-primary text-primary-foreground hover:bg-primary/80 flex items-center justify-center gap-2 rounded-lg border px-8 py-3 font-bold transition-all"
          >
            <RefreshCcw size={18} />
            RETRY_SYNC
          </button>
        </div>
      </motion.div>

      <div className="mt-20 flex gap-10 font-mono text-[10px] text-gray-600">
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
          CORE_TEMP: CRITICAL
        </div>
        <div className="hidden md:block">Uptime: 00:00:04:04</div>
      </div>
    </div>
  );
}
