'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SearchX, Database, ChevronLeft, ShieldAlert } from 'lucide-react';

interface ProjectNotFoundProps {
  requestedId?: string;
}

const ProjectNotFound: React.FC<ProjectNotFoundProps> = ({ requestedId }) => {
  const TRACE_ID = 'r95-0345-0384095843-0354-430';
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-12">
      <div className="relative mb-10">
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full bg-red-500/20 blur-3xl"
        />
        <div className="bg-background-secondary relative rounded-2xl border border-red-500/30 p-6">
          <SearchX size={48} className="text-red-500" />
        </div>
      </div>

      <div className="max-w-lg space-y-6 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-gray-100 md:text-4xl">
            NODE_<span className="text-red-500">UNRESOLVED</span>
          </h2>
          <div className="flex items-center justify-center gap-2 font-mono text-xs tracking-widest text-gray-500 uppercase">
            <Database size={12} />
            <span>Project Registry Sync Failed</span>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-gray-400 md:text-base">
          The project identifier &nbsp;
          <span className="text-accent bg-accent/5 border-accent/20 rounded border px-2 py-0.5 font-mono">
            {requestedId || 'UNKNOWN_ID'}
          </span>
          &nbsp; could not be located in the current repository. The record might be private, archived, or yet to be
          deployed.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
          <Link
            href="/projects"
            className="hover:text-accent hover:border-accent/50 group flex w-full items-center justify-center gap-2 rounded-xl border border-[#2a3c30] bg-[#16211a] px-6 py-3 text-gray-300 transition-all sm:w-auto"
          >
            <ChevronLeft size={18} className="transition-transform group-hover:-translate-x-1" />
            BACK_TO_REGISTRY
          </Link>

          <Link
            href="/contact"
            className="text-accent hover:bg-accent/5 flex w-full items-center justify-center gap-2 rounded-xl border border-transparent px-6 py-3 transition-all sm:w-auto"
          >
            <ShieldAlert size={18} />
            REPORT_ANOMALY
          </Link>
        </div>
      </div>

      <div className="mt-16 w-full max-w-md border-t border-[#2a3c30] pt-8">
        <div className="grid grid-cols-2 gap-4 font-mono text-[10px] text-gray-600">
          <div>
            <span className="mb-1 block text-gray-500">TRACE_ID</span>
            {TRACE_ID}
          </div>
          <div className="text-right">
            <span className="mb-1 block text-gray-500">RECOVERY_MODE</span>
            STRICT_ACTIVE
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectNotFound;
