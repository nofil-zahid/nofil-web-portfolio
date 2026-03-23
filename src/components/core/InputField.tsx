'use client'
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { InputFieldProps } from '@/types/components';
import { cn } from '@/styles/tailwind-utils';

const InputField: React.FC<InputFieldProps> = ({
  label, index, multiline = false, error, className = '', ...props
}) => {
  const inputClasses = cn(
    "w-full bg-transparent border-none py-3 text-lg text-gray-100",
    "placeholder:text-gray-500/50 focus:placeholder-accent/30",
    "focus:outline-none focus:ring-0",
    "transition-colors duration-300 terminal-cursor",
    multiline && "resize-none min-h-[100px]"
  );

  return (
    <div className={cn("group relative w-full mb-10", className)}>
      <div className="flex items-center gap-2 mb-1">
        <span className="text-xs font-mono font-bold text-accent/60 group-focus-within:text-accent">
          {String(index).padStart(2, '0')}.
        </span>
        <label className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 group-focus-within:text-accent">
          {label}
        </label>
      </div>

      <div className="relative">
        {multiline ? (
          <textarea 
            autoComplete='off'
            spellCheck={false}
            className={inputClasses} 
            {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)} 
          />
        ) : (
          <input 
            autoComplete='off'
            spellCheck={false}
            className={inputClasses} 
            {...(props as React.InputHTMLAttributes<HTMLInputElement>)} 
          />
        )}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-[#2a3c30]" />

      <div className={cn(
        "absolute bottom-0 left-0 h-px transition-all duration-500 z-10",
        error 
          ? "w-full bg-red-500 shadow-[0_0_8px_#ef4444]" 
          : "w-0 group-focus-within:w-full bg-accent shadow-[0_0_8px_#5ff07e]"
      )} />

      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            className="absolute -bottom-6 left-0 text-[10px] font-mono text-red-500 uppercase tracking-wider"
          >
            {`> ERROR: ${error}`}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InputField;
