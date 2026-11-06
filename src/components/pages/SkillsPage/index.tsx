'use client';

import React from 'react';
import { CapabilityCard } from './CapabilityCard';
import { CAPABILITIES } from '@/constants/capabilities';
import { TECHNICAL_TOOLKIT } from '@/constants/expertise';
import SectionHeader from '@/components/shared/SectionHeader';

export const SkillsPage: React.FC = () => {
  return (
    <section>
      {/* Primary Section Header */}
      <SectionHeader
        title="Engineering Capabilities"
        tag="SYSTEMS_ENGINEERED_FOR_REAL_WORLD"
        description="Architecting full-stack web applications, multi-tenant backend systems, and automated deployment pipelines focused on reliability and business requirements."
      />

      {/* Main Capabilities Grid */}
      <div className="mb-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
        {CAPABILITIES.map((capability, index) => (
          <CapabilityCard key={capability.id} capability={capability} index={index} />
        ))}
      </div>

      {/* Secondary Toolkit Section Header */}
      <div className="mb-8 border-t border-white/10 pt-12">
        <h3 className="mb-2 text-2xl font-bold tracking-tight text-white md:text-3xl">Technical Inventory</h3>
        <p className="font-mono text-xs text-gray-400 md:text-sm">
          A structured breakdown of technologies applied across enterprise software environments and development
          workflows.
        </p>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {Object.entries(TECHNICAL_TOOLKIT).map(([category, items]) => (
          <div key={category} className="rounded-xl border border-white/5 bg-[#061a0a]/30 p-5 backdrop-blur-sm">
            <h4 className="mb-4 border-b border-white/5 pb-2 font-mono text-xs font-bold tracking-wider text-[#0df259] uppercase">
              {category}
            </h4>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-1.5 rounded-md border border-white/10 bg-[#030f06] px-2.5 py-1 font-mono text-xs text-gray-300"
                >
                  <span>{item.name}</span>
                  {item.category === 'production' ? (
                    <span
                      title="Used in commercial software projects"
                      className="h-1.5 w-1.5 rounded-full bg-[#0df259]"
                      aria-label="Commercial experience indicator"
                    />
                  ) : (
                    <span
                      title="Used in projects & hands-on exploration"
                      className="h-1.5 w-1.5 rounded-full bg-yellow-400"
                      aria-label="Active development indicator"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Legend Footer */}
      <div className="mt-6 flex items-center justify-end gap-4 font-mono text-xs text-gray-400">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#0df259]" />
          <span>Commercial Production</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-yellow-400" />
          <span>Projects & Exploration</span>
        </div>
      </div>
    </section>
  );
};
