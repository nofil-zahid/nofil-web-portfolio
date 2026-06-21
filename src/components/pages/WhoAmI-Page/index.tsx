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
      <div className="mb-20 grid items-end md:pr-30 lg:grid-cols-[1fr_auto]">
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
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="bg-background-secondary/50 hover:bg-accent/5 rounded-xl border border-white/5 p-6 transition-colors">
                <h4 className="mb-2 font-bold text-white">Scalable by Design</h4>
                <p className="text-text-secondary text-xs">
                  I build systems with growth in mind, focusing on clean architecture and modular design that can handle
                  real-world complexity.
                </p>
              </div>
              <div className="bg-background-secondary/50 hover:bg-accent/5 rounded-xl border border-white/5 p-6 transition-colors">
                <h4 className="mb-2 font-bold text-white">Problem-Driven Development</h4>
                <p className="text-text-secondary text-xs">
                  I focus on solving real problems, not just writing code but ensuring performance, usability, and
                  long-term maintainability.
                </p>
              </div>
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
              <InfoCard label="Availability" value="Open to Opportunities" />
              <InfoCard label="Location" value="Lahore, Pakistan" />
              <InfoCard label="Focus Area" value="Enterprise & SaaS Applications" />
            </div>
          </section>

          <blockquote className="border-accent border-l-4 py-4 pl-6 font-mono text-sm leading-relaxed text-white/60 italic">
            {quote ?? 'loading philosophy...'}
            <footer className="text-accent mt-2 font-bold tracking-widest not-italic">— SYSTEM_MOTTO.txt</footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
