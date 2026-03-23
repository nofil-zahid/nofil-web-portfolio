"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SearchX, Database, ChevronLeft, ShieldAlert } from "lucide-react";

interface ProjectNotFoundProps {
  requestedId?: string;
}

const ProjectNotFound: React.FC<ProjectNotFoundProps> = ({ requestedId }) => {
  const TRACE_ID = "r95-0345-0384095843-0354-430";
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 py-12">
      <div className="relative mb-10">
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-red-500/20 blur-3xl rounded-full"
        />
        <div className="relative p-6 rounded-2xl bg-background-secondary border border-red-500/30">
          <SearchX size={48} className="text-red-500" />
        </div>
      </div>

      <div className="text-center max-w-lg space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 tracking-tight">
            NODE_<span className="text-red-500">UNRESOLVED</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-gray-500 uppercase tracking-widest">
            <Database size={12} />
            <span>Project Registry Sync Failed</span>
          </div>
        </div>

        <p className="text-gray-400 leading-relaxed text-sm md:text-base">
          The project identifier &nbsp;
          <span className="text-accent font-mono bg-accent/5 px-2 py-0.5 rounded border border-accent/20">
            {requestedId || "UNKNOWN_ID"}
          </span>
          &nbsp; could not be located in the current repository. The record
          might be private, archived, or yet to be deployed.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/projects"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#16211a] border border-[#2a3c30] text-gray-300 hover:text-accent hover:border-accent/50 transition-all group"
          >
            <ChevronLeft
              size={18}
              className="group-hover:-translate-x-1 transition-transform"
            />
            BACK_TO_REGISTRY
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-transparent text-accent hover:bg-accent/5 transition-all"
          >
            <ShieldAlert size={18} />
            REPORT_ANOMALY
          </Link>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-[#2a3c30] w-full max-w-md">
        <div className="grid grid-cols-2 gap-4 text-[10px] font-mono text-gray-600">
          <div>
            <span className="block text-gray-500 mb-1">TRACE_ID</span>
            {TRACE_ID}
          </div>
          <div className="text-right">
            <span className="block text-gray-500 mb-1">RECOVERY_MODE</span>
            STRICT_ACTIVE
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectNotFound;
