'use client'
import { motion } from "framer-motion";
import { Mail, MapPin, Terminal } from "lucide-react";
import { socialLinks } from "@/constants/links";
import { cn } from "@/styles/tailwind-utils";

const ContactCard = () => {
  const email = 'chmnofilzahidofficial85p@gmail.com';

  return (
    <div className="w-full">
      <motion.div
        className={cn(
          "w-full bg-background-secondary/80 border border-[#2a3c30] font-sans shadow-2xl transition-all duration-300",
          "rounded-[clamp(1.2rem,3vw,2.5rem)]",
          "p-[clamp(1.2rem,4vw,2.5rem)]"
        )}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <h2 className="text-[clamp(1.4rem,2.5vw,1.8rem)] font-bold text-gray-100 mb-[clamp(1.5rem,4vw,2.5rem)]">
          Contact Details
        </h2>

        <div className="space-y-[clamp(1.2rem,4vw,2rem)]">
          
          <div className="group/email flex items-center gap-[clamp(0.75rem,2vw,1.5rem)] min-w-0">
            <div className="shrink-0 p-[clamp(0.6rem,1.5vw,0.75rem)] rounded-xl bg-accent/5 border border-accent/10 group-hover/email:border-accent/40 transition-colors">
              <Mail className="w-[clamp(1.1rem,2vw,1.3rem)] h-[clamp(1.1rem,2vw,1.3rem)] text-accent" />
            </div>

            <div className="flex flex-col min-w-0 flex-1">
              <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-gray-500 mb-0.5 truncate">
                Direct Protocol
              </p>
              <a 
                href={`mailto:${email}`} 
                className="relative text-[clamp(0.9rem,1.4vw,1.05rem)] text-gray-100 font-mono tracking-tighter flex items-center gap-1 min-w-0"
              >
                <span className="text-accent/40 text-[9px] font-bold shrink-0 hidden sm:inline">mailto:</span>
                <span className="relative flex-1 block truncate">
                  {email}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover/email:w-full shadow-[0_0_8px_#5ff07e]" />
                </span>
              </a>
            </div>
          </div>

          <div className="flex items-center gap-[clamp(0.75rem,2vw,1.5rem)]">
            <div className="shrink-0 p-[clamp(0.6rem,1.5vw,0.75rem)] rounded-xl bg-accent/5 border border-accent/10">
              <MapPin className="w-[clamp(1.1rem,2vw,1.3rem)] h-[clamp(1.1rem,2vw,1.3rem)] text-accent" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-gray-500 mb-0.5">Location</p>
              <p className="text-[clamp(0.9rem,1.4vw,1.05rem)] text-gray-100 font-medium">Lahore, Pakistan</p>
            </div>
          </div>

          <div className="flex items-start gap-[clamp(0.75rem,2vw,1.5rem)]">
            <div className="shrink-0 p-[clamp(0.6rem,1.5vw,0.75rem)] rounded-xl bg-accent/5 border border-accent/10">
              <Terminal className="w-[clamp(1.1rem,2vw,1.3rem)] h-[clamp(1.1rem,2vw,1.3rem)] text-accent" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-gray-500 mb-1.5">Social</p>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-[clamp(0.85rem,1.4vw,1rem)] text-gray-100">
                {socialLinks.map((link) => (
                  <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="group flex items-center font-mono transition-all">
                    <span className="text-accent opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0 text-[0.8em]">[</span>
                    <span className="hover:text-accent transition-colors">{link.name}</span>
                    <span className="text-accent opacity-0 group-hover:opacity-100 transition-all translate-x-1 group-hover:translate-x-0 text-[0.8em]">]</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  )
}

export default ContactCard;
