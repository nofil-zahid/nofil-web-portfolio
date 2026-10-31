'use client';
import { motion } from 'framer-motion';
import Avatar from '@/components/element/Avatar';
import SectionHeader from '@/components/shared/SectionHeader';
import { myYearsOfExperience } from '@/utils/date';
import { SectionHeading } from './SectionHeading';
import { InfoCard } from './InfoCard';
import { ABOUT, PROFILE } from '@/constants/profile';
import RandomQuote from './RandomQuote';

export default function WhoAmI() {
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
            className="h-60 w-60 shadow-[0_0_50px_-12px_rgba(13,242,89,0.3)] lg:h-65 lg:w-65"
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
                  <h3 className="mb-2 text-sm font-bold text-white">{item.title}</h3>
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

          <RandomQuote />
        </motion.div>
      </div>
    </section>
  );
}
