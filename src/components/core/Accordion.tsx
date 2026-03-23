import { motion } from "framer-motion";
import { Plus, X } from "lucide-react";
import { AccordionProps } from "@/types/components";
import { cn } from "@/styles/tailwind-utils";

const Accordion = ({ question, answer, isOpen, onClick }: AccordionProps) => {
  return (
    <motion.div
      layout
      transition={{ layout: { duration: 0.25 } }}
      className={cn(
        "border rounded-[clamp(0.75rem,1vw,1rem)] mb-[clamp(0.75rem,1.5vw,1.25rem)]",
        "transition-colors overflow-hidden bg-background-secondary border-border-glow",
        "hover:border-accent/40"
      )}
    >
      <button
        type="button"
        onClick={onClick}
        className={cn(
          "w-full flex items-center justify-between text-left group cursor-pointer",
          "px-[clamp(1rem,2vw,1.5rem)] py-[clamp(0.9rem,1.8vw,1.4rem)]"
        )}
      >
        <span className="font-sans font-semibold tracking-tight text-text-primary text-[clamp(0.95rem,1.2vw,1.125rem)]">
          {question}
        </span>

        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 text-accent ml-[clamp(0.75rem,1vw,1rem)]"
        >
          {isOpen ? <X size={20} /> : <Plus size={20} />}
        </motion.div>
      </button>

      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <motion.div
            layout
            className="px-[clamp(1rem,2vw,1.5rem)] pb-[clamp(1rem,2vw,1.5rem)]"
          >
            <p
              className={cn(
                "font-sans leading-relaxed text-text-secondary text-[clamp(0.9rem,1.05vw,1rem)]",
                "pt-[clamp(0.75rem,1.5vw,1rem)] border-t border-border-glow"
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
