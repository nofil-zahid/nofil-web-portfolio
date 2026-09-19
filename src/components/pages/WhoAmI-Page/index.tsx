'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Avatar from '@/components/element/Avatar';
import SectionHeader from '@/components/shared/SectionHeader';
import { myYearsOfExperience } from '@/utils/date';
import { SectionHeading } from './SectionHeading';
import { InfoCard } from './InfoCard';
import { useResponsive } from '@/hooks/core/use-responsive';
import { ABOUT, PROFILE } from '@/constants/profile';
import { RefreshCw } from 'lucide-react';

export default function WhoAmI() {
  const [quoteIndex, setQuoteIndex] = useState(() => Math.floor(Math.random() * ABOUT.quotes.length));
  const [isRotating, setIsRotating] = useState(false);

  const { isMobile } = useResponsive();

  const handleNextMotto = () => {
    setIsRotating(true);
    setQuoteIndex((prev) => (prev + 1) % ABOUT.quotes.length);
    setTimeout(() => setIsRotating(false), 500);
  };

  const currentQuote = ABOUT.quotes[quoteIndex];

  return (
    <section>
      <div className="mb-20 grid items-center gap-8 lg:grid-cols-[1fr_auto] lg:items-end lg:pr-30">
        <SectionHeader
          title="Who Am I?"
          tag="about-me"
          description={`${PROFILE.title} specializing in ${PROFILE.specialization.toLowerCase()}, and building efficient solutions for real-world applications.`}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex justify-center justify-self-center lg:justify-end lg:justify-self-end"
        >
          <Avatar
            src="/profile.png"
            size={isMobile ? 240 : 260}
            className="shadow-[0_0_50px_-12px_rgba(13,242,89,0.3)]"
          />
        </motion.div>
      </div>

      <div className="grid gap-16 lg:grid-cols-12">
        <motion.div
          className="space-y-12 lg:col-span-7"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <section>
            <SectionHeading title="Overview" subtitle="Profile_Summary" />
            <div className="text-text-secondary space-y-4 leading-relaxed">
              {ABOUT.summary.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section>
            <SectionHeading title="Development Philosophy" subtitle="Protocol_Approach" />
            <div className="grid gap-6 sm:grid-cols-2">
              {ABOUT.philosophy.map((item) => (
                <div
                  key={item.title}
                  className="bg-background-secondary/50 hover:bg-accent/5 rounded-xl border border-white/5 p-6 transition-colors"
                >
                  <h4 className="mb-2 font-bold text-white">{item.title}</h4>
                  <p className="text-text-secondary text-xs">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        </motion.div>

        <motion.div
          className="space-y-12 lg:col-span-5"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <section className="bg-background-secondary/80 rounded-2xl border border-white/5 p-5 md:p-8">
            <SectionHeading title="Professional Overview" subtitle="Key Highlights" />
            <div className="grid grid-cols-2 gap-x-4 gap-y-8 pr-8 md:pr-0">
              <InfoCard label="Experience" value={`${myYearsOfExperience()} Years`} />
              <InfoCard label="Availability" value={PROFILE.availability} />
              <InfoCard label="Location" value={PROFILE.location} />
              <InfoCard label="Focus Area" value={PROFILE.focusArea} />
            </div>
          </section>

          <blockquote className="border-accent bg-background-secondary/30 relative flex min-h-[140px] flex-col justify-between rounded-r-xl border-l-4 p-5 font-mono text-sm">
            <div className="flex-1 pb-4">
              <p className="leading-relaxed text-white/70 italic">
                &quot;{currentQuote ?? 'loading philosophy...'}&quot;
              </p>
            </div>

            <div className="flex items-center justify-between gap-2 border-t border-white/5 pt-3 not-italic">
              <span className="text-accent text-[clamp(0.65rem,0.9vw,0.75rem)] font-bold tracking-widest uppercase">
                — SYSTEM_MOTTO.txt
              </span>

              <button
                type="button"
                onClick={handleNextMotto}
                aria-label="Get another motto"
                className="group/btn hover:border-accent/40 hover:bg-accent/10 hover:text-accent flex cursor-pointer items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] text-gray-400 transition-all active:scale-95"
              >
                <span>SHUFFLE</span>
                <RefreshCw
                  size={12}
                  className={`transition-transform duration-500 ${isRotating ? 'text-accent rotate-180' : 'group-hover/btn:rotate-90'}`}
                />
              </button>
            </div>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
