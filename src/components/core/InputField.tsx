'use client'
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { InputFieldProps } from '@/types/components';
import { cn } from '@/styles/tailwind-utils';

const InputField: React.FC<InputFieldProps> = ({
  label, 
  index, 
  multiline = false, 
  error, 
  className = '', 
  maxLength, 
  showCounter = false,
  value,
  onChange,
  ...props
}) => {
  const currentLength = typeof value === 'string' ? value.length : 0;

  const inputClasses = cn(
    "w-full bg-transparent border-none py-2 sm:py-3",
    "text-sm sm:text-base font-mono tracking-wide text-gray-400",
    "placeholder:text-gray-500/50 focus:placeholder-accent/30",
    "focus:outline-none focus:ring-0",
    "transition-colors duration-300 terminal-cursor",
    multiline && "resize-none min-h-[80px] sm:min-h-[100px] terminal-scrollbar"
  );

  return (
    <div className={cn("group relative w-full mb-10", className)}>
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          <span className="text-[10px] sm:text-xs font-mono font-bold text-accent/60 group-focus-within:text-accent">
            {String(index).padStart(2, '0')}.
          </span>
          <label className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-gray-500 group-focus-within:text-accent">
            {label}
          </label>
        </div>

        {showCounter && maxLength && (
          <span className={cn(
            "text-[9px] font-mono transition-colors duration-300",
            currentLength >= maxLength ? "text-red-500" : "text-gray-600 group-focus-within:text-accent/50"
          )}>
            [{currentLength}/{maxLength}]
          </span>
        )}
      </div>

      <div className="relative">
        {multiline ? (
          <textarea 
            autoComplete="off"
            spellCheck={false}
            maxLength={maxLength}
            value={value}
            onChange={onChange}
            className={inputClasses} 
            {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)} 
          />
        ) : (
          <input 
            autoComplete="off"
            spellCheck={false}
            maxLength={maxLength}
            value={value}
            onChange={onChange}
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

      <div className="mt-1 overflow-hidden"> 
        <AnimatePresence mode="wait">
          {error ? (
            <motion.div
              key={error}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            >
              <p className="text-[10px] font-mono text-red-500 uppercase tracking-wider leading-relaxed break-words py-1">
                {`> ERROR: ${error}`}
              </p>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default InputField;
