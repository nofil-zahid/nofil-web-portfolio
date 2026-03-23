"use client";

import { motion } from "framer-motion";
import Avatar from "@/components/element/Avatar";
import SectionHeader from "@/components/shared/SectionHeader";
import { myYearsOfExperience } from "@/utils/date";
import { SectionHeading } from "./SectionHeading";
import { InfoCard } from "./InfoCard";

export default function WhoAmI() {
  return (
    <section>
      <div className="grid lg:grid-cols-[1fr_auto] items-end mb-20 md:pr-30">
        <SectionHeader
          title="Who Am I?"
          tag="about-me"
          description="I am a Full Stack developer. I specialize in building high-performance frontend ecosystems. I bridge the gap between complex backend logic and intuitive user experiences."
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex justify-center md:justify-start"
        >
          <Avatar
            src="/profile.png"
            size={280}
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
            <SectionHeading title="The Journey" subtitle="Background_Log" />
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Started my journey in &nbsp;
                <span className="text-white font-medium">2021</span> with a
                curiosity for how the web works. What began as tweaking CSS for
                fun evolved into a professional pursuit of software engineering.
              </p>
              <p>
                Since then, I&apos;ve navigated through various tech stacks,
                eventually finding my home in the
                <span className="text-accent/80 font-mono">
                  &nbsp;React & Next.js ecosystem
                </span>
                . I focus on creating products that are not just visually
                striking, but structurally sound.
              </p>
            </div>
          </section>

          <section>
            <SectionHeading
              title="Development Philosophy"
              subtitle="Protocol_Approach"
            />
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-background-secondary/50 p-6 border border-white/5 rounded-xl hover:bg-accent/5 transition-colors">
                <h4 className="text-white font-bold mb-2">Scalability First</h4>
                <p className="text-xs text-text-secondary">
                  Code should be built to grow. I prioritize modular
                  architectures that dont crumble under new features.
                </p>
              </div>
              <div className="bg-background-secondary/50 p-6 border border-white/5 rounded-xl hover:bg-accent/5 transition-colors">
                <h4 className="text-white font-bold mb-2">User Centric</h4>
                <p className="text-xs text-text-secondary">
                  Performance is a feature. If its slow or confusing, the code
                  hasnt fulfilled its purpose.
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
          <section className="bg-background-secondary/80 p-8 border border-white/5 rounded-2xl">
            <SectionHeading title="System Specs" subtitle="Data_Overview" />
            <div className="grid grid-cols-2 gap-y-8 gap-x-4">
              <InfoCard
                label="Exp_Level"
                value={`${myYearsOfExperience()} Years`}
              />
              <InfoCard label="Availability" value="Open for Work" />
              <InfoCard label="Location" value="Lahore, Pakistan" />
              <InfoCard label="Current_Focus" value="Enterprise Apps" />
            </div>
          </section>

          <blockquote className="border-l-4 border-accent pl-6 py-4 italic text-white/60 font-mono text-sm leading-relaxed">
            The most effective code is the code that eventually becomes
            invisible, leaving only a seamless experience behind
            <footer className="mt-2 text-accent not-italic font-bold tracking-widest">
              — SYSTEM_MOTTO.txt
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
