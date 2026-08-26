'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Terminal, Copy, Check } from 'lucide-react';
import { socialLinks } from '@/constants/links';
import { cn } from '@/styles/tailwind-utils';
import { copyToClipboard } from '@/utils/clipboard';
import { showToast } from '@/utils/toaster';

const ContactCard = () => {
  const email = 'nofilzahid.se@gmail.com';
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      const success = await copyToClipboard(email);
      if (success) {
        setCopied(true);
        showToast({ text: 'EMAIL COPIED TO CLIPBOARD', type: 'success' });
        setTimeout(() => setCopied(false), 2000);
      } else {
        showToast({ text: 'FAILED TO COPY EMAIL', type: 'error' });
      }
    } catch {
      showToast({ text: 'FAILED TO COPY EMAIL', type: 'error' });
    }
  };

  return (
    <div className="w-full">
      <motion.div
        className={cn(
          'bg-background-secondary/80 w-full border border-[#2a3c30] font-sans shadow-2xl transition-all duration-300',
          'rounded-[clamp(1.2rem,3vw,2.5rem)]',
          'p-[clamp(1.2rem,4vw,2.5rem)]',
        )}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <h2 className="mb-[clamp(1.5rem,4vw,2.5rem)] text-[clamp(1.4rem,2.5vw,1.8rem)] font-bold text-gray-100">
          Contact Details
        </h2>

        <div className="space-y-[clamp(1.2rem,4vw,2rem)]">
          <div className="group/email flex min-w-0 items-center gap-[clamp(0.75rem,2vw,1.5rem)]">
            <div className="bg-accent/5 border-accent/10 group-hover/email:border-accent/40 shrink-0 rounded-xl border p-[clamp(0.6rem,1.5vw,0.75rem)] transition-colors">
              <Mail className="text-accent h-[clamp(1.1rem,2vw,1.3rem)] w-[clamp(1.1rem,2vw,1.3rem)]" />
            </div>

            <div className="flex min-w-0 flex-1 flex-col">
              <p className="mb-0.5 truncate text-[10px] font-medium tracking-[0.2em] text-gray-500 uppercase">
                Direct Protocol
              </p>
              <button
                type="button"
                onClick={handleCopy}
                className="relative flex min-w-0 cursor-pointer items-center gap-1 border-none bg-transparent p-0 text-left font-mono text-[clamp(0.9rem,1.4vw,1.05rem)] tracking-tighter text-gray-100 focus:outline-none"
                title="Click to copy email address"
              >
                <span className="text-accent/40 hidden shrink-0 text-[9px] font-bold sm:inline">copy:</span>
                <span className="relative flex flex-1 items-center gap-2 truncate">
                  <span className="truncate">{email}</span>
                  {copied ? (
                    <Check className="text-accent h-3.5 w-3.5 shrink-0 animate-pulse" />
                  ) : (
                    <Copy className="group-hover/email:text-accent h-3.5 w-3.5 shrink-0 text-gray-500 opacity-0 transition-colors group-hover/email:opacity-100" />
                  )}
                  <span className="bg-accent absolute -bottom-1 left-0 h-px w-0 shadow-[0_0_8px_#5ff07e] transition-all duration-300 group-hover/email:w-full" />
                </span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-[clamp(0.75rem,2vw,1.5rem)]">
            <div className="bg-accent/5 border-accent/10 shrink-0 rounded-xl border p-[clamp(0.6rem,1.5vw,0.75rem)]">
              <MapPin className="text-accent h-[clamp(1.1rem,2vw,1.3rem)] w-[clamp(1.1rem,2vw,1.3rem)]" />
            </div>
            <div>
              <p className="mb-0.5 text-[10px] font-medium tracking-[0.2em] text-gray-500 uppercase">Location</p>
              <p className="text-[clamp(0.9rem,1.4vw,1.05rem)] font-medium text-gray-100">Lahore, Pakistan</p>
            </div>
          </div>

          <div className="flex items-start gap-[clamp(0.75rem,2vw,1.5rem)]">
            <div className="bg-accent/5 border-accent/10 shrink-0 rounded-xl border p-[clamp(0.6rem,1.5vw,0.75rem)]">
              <Terminal className="text-accent h-[clamp(1.1rem,2vw,1.3rem)] w-[clamp(1.1rem,2vw,1.3rem)]" />
            </div>
            <div className="min-w-0">
              <p className="mb-1.5 text-[10px] font-medium tracking-[0.2em] text-gray-500 uppercase">Social</p>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-[clamp(0.85rem,1.4vw,1rem)] text-gray-100">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center font-mono transition-all"
                  >
                    <span className="text-accent -translate-x-1 text-[0.8em] opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100">
                      [
                    </span>
                    <span className="hover:text-accent transition-colors">{link.name}</span>
                    <span className="text-accent translate-x-1 text-[0.8em] opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100">
                      ]
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactCard;
