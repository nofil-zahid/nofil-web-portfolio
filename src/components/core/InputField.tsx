'use client';
import React, { useId } from 'react';
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
  id: customId,
  ...props
}) => {
  const generatedId = useId();
  const inputId = customId || generatedId;
  const errorId = `${inputId}-error`;
  const currentLength = typeof value === 'string' ? value.length : 0;

  const inputClasses = cn(
    'w-full bg-[#030f06] border-none py-2.5 sm:py-3.5 px-2.5',
    'text-sm sm:text-base font-mono tracking-wide text-text-primary',
    'placeholder:text-slate-400/60 focus:placeholder-accent/40',
    'focus:outline-none focus:ring-0',
    'transition-colors duration-300 terminal-cursor',
    multiline && 'resize-none min-h-[90px] sm:min-h-[110px] terminal-scrollbar',
  );

  return (
    <div className={cn('group relative mb-8 w-full', className)}>
      <div className="mb-1.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {index !== undefined && (
            <span className="text-accent/90 group-focus-within:text-accent font-mono text-[10px] font-bold sm:text-xs">
              {String(index).padStart(2, '0')}.
            </span>
          )}
          <label
            htmlFor={inputId}
            className="group-focus-within:text-accent text-[11px] font-bold tracking-[0.2em] text-slate-300 uppercase sm:text-xs"
          >
            {label}
          </label>
        </div>

        {showCounter && maxLength && (
          <span
            className={cn(
              'font-mono text-[10px] transition-colors duration-300',
              currentLength >= maxLength ? 'font-bold text-red-400' : 'group-focus-within:text-accent text-slate-400',
            )}
          >
            [{currentLength}/{maxLength}]
          </span>
        )}
      </div>

      <div className="relative">
        {multiline ? (
          <textarea
            id={inputId}
            autoComplete="off"
            spellCheck={false}
            maxLength={maxLength}
            value={value}
            onChange={onChange}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? errorId : undefined}
            className={inputClasses}
            {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            id={inputId}
            autoComplete="off"
            spellCheck={false}
            maxLength={maxLength}
            value={value}
            onChange={onChange}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? errorId : undefined}
            className={inputClasses}
            {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
          />
        )}
      </div>

      <div className="absolute bottom-0 left-0 h-px w-full bg-[#2a3c30]" />

      <div
        className={cn(
          'absolute bottom-0 left-0 z-10 h-px transition-all duration-500',
          error
            ? 'w-full bg-red-500 shadow-[0_0_8px_#ef4444]'
            : 'bg-accent w-0 shadow-[0_0_8px_#5ff07e] group-focus-within:w-full',
        )}
      />

      <div className="mt-1 overflow-hidden">
        <AnimatePresence mode="wait">
          {error ? (
            <motion.div
              key={error}
              id={errorId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            >
              <p className="py-1 font-mono text-[10px] leading-relaxed tracking-wider break-words text-red-500 uppercase">
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
