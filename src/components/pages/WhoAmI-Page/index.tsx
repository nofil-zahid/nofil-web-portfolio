'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Avatar from '@/components/element/Avatar';
import SectionHeader from '@/components/shared/SectionHeader';
import { myYearsOfExperience } from '@/utils/date';
import { SectionHeading } from './SectionHeading';
import { InfoCard } from './InfoCard';
import { useResponsive } from '@/hooks/core/use-responsive';

const quotes = [
  'The best systems solve real problems, not just technical ones.',
  'Clean architecture scales. Messy code doesn’t.',
  "Performance is not optional — it's a feature.",
  'Good developers write code. Great developers design systems.',
  'Simplicity is what makes systems truly powerful.',
];

export default function WhoAmI() {
  const [quote] = useState(() => quotes[Math.floor(Math.random() * quotes.length)]);

  const { isMobile } = useResponsive();

  return (
    <section>
      <div className="grid lg:grid-cols-[1fr_auto] items-end mb-20 md:pr-30">
        <SectionHeader
          title="Who Am I?"
          tag="about-me"
          description="Full Stack Engineer specializing in scalable systems, API design, and building efficient solutions for real-world applications."
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex justify-center md:justify-start"
        >
          <Avatar
            src="/profile.png"
            size={isMobile ? 240 : 260}
            className="shadow-[0_0_50px_-12px_rgba(13,242,89,0.3)]"
          />
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-12 gap-16">
        <motion.div
          className="lg:col-span-7 space-y-12"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <section>
            <SectionHeading title="Overview" subtitle="Profile_Summary" />
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                I am a backend-focused Full Stack Engineer, delivers practical and efficient solutions for real-world
                applications. I take ownership of the systems I work on from development to deployment, approaching
                challenges with research, analysis, and hands-on implementation to build scalable and maintainable
                architectures.
              </p>
              <p>
                When a solution does not exist, I design it from the ground up by evaluating options, experimenting, and
                implementing the most effective approach. I focus on creating systems that are not only functional but
                also performant, reliable, and easy to extend.
              </p>
              <p>
                Additionally, I have developed strong design skills to ensure that the user experience complements the
                backend logic, resulting in applications that are both powerful and intuitive.
              </p>
            </div>
          </section>

          <section>
            <SectionHeading title="Development Philosophy" subtitle="Protocol_Approach" />
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-background-secondary/50 p-6 border border-white/5 rounded-xl hover:bg-accent/5 transition-colors">
                <h4 className="text-white font-bold mb-2">Scalable by Design</h4>
                <p className="text-xs text-text-secondary">
                  I build systems with growth in mind, focusing on clean architecture and modular design that can handle
                  real-world complexity.
                </p>
              </div>
              <div className="bg-background-secondary/50 p-6 border border-white/5 rounded-xl hover:bg-accent/5 transition-colors">
                <h4 className="text-white font-bold mb-2">Problem-Driven Development</h4>
                <p className="text-xs text-text-secondary">
                  I focus on solving real problems, not just writing code but ensuring performance, usability, and
                  long-term maintainability.
                </p>
              </div>
            </div>
          </section>
        </motion.div>

        <motion.div
          className="lg:col-span-5 space-y-12"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <section className="bg-background-secondary/80 md:p-8 p-5 border border-white/5 rounded-2xl">
            <SectionHeading title="Professional Overview" subtitle="Key Highlights" />
            <div className="grid grid-cols-2 gap-y-8 gap-x-4 md:pr-0 pr-8">
              <InfoCard label="Experience" value={`${myYearsOfExperience()} Years`} />
              <InfoCard label="Availability" value="Open to Opportunities" />
              <InfoCard label="Location" value="Lahore, Pakistan" />
              <InfoCard label="Focus Area" value="Enterprise & SaaS Applications" />
            </div>
          </section>

          <blockquote className="border-l-4 border-accent pl-6 py-4 italic text-white/60 font-mono text-sm leading-relaxed">
            {quote ?? 'loading philosophy...'}
            <footer className="mt-2 text-accent not-italic font-bold tracking-widest">— SYSTEM_MOTTO.txt</footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
