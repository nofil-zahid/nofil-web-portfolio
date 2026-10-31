import { useId } from 'react';
import { motion } from 'framer-motion';
import { Plus, X } from 'lucide-react';
import { AccordionProps } from '@/types/components';
import { cn } from '@/styles/tailwind-utils';

const Accordion = ({ question, answer, isOpen, onClick }: AccordionProps) => {
  const id = useId();
  const buttonId = `faq-btn-${id}`;
  const panelId = `faq-panel-${id}`;

  return (
    <motion.div
      layout
      transition={{ layout: { duration: 0.25 } }}
      className={cn(
        'mb-[clamp(0.75rem,1.5vw,1.25rem)] rounded-[clamp(0.75rem,1vw,1rem)] border',
        'bg-background-secondary border-border-glow overflow-hidden transition-colors',
        'hover:border-accent/40',
      )}
    >
      <h2 className="w-full">
        <button
          type="button"
          id={buttonId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onClick}
          className={cn(
            'group flex w-full cursor-pointer items-center justify-between text-left',
            'px-[clamp(1rem,2vw,1.5rem)] py-[clamp(0.9rem,1.8vw,1.4rem)]',
            'focus-visible:ring-accent focus-visible:ring-2 focus-visible:outline-none',
          )}
        >
          <span className="text-text-primary font-sans text-[clamp(0.95rem,1.2vw,1.125rem)] font-semibold tracking-tight">
            {question}
          </span>

          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
            className="text-accent ml-[clamp(0.75rem,1vw,1rem)] shrink-0"
            aria-hidden="true"
          >
            {isOpen ? <X size={20} /> : <Plus size={20} />}
          </motion.div>
        </button>
      </h2>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!isOpen}
        className={cn(
          'grid transition-all duration-300 ease-in-out',
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        )}
      >
        <div className="overflow-hidden">
          <motion.div layout className="px-[clamp(1rem,2vw,1.5rem)] pb-[clamp(1rem,2vw,1.5rem)]">
            <p
              className={cn(
                'text-text-secondary font-sans text-[clamp(0.9rem,1.05vw,1rem)] leading-relaxed',
                'border-border-glow border-t pt-[clamp(0.75rem,1.5vw,1rem)]',
              )}
            >
              {answer}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Accordion;
