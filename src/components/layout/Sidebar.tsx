"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Menu, X, Code2 } from "lucide-react";
import { useBooleanToggle } from "@/hooks/core/use-boolean-toggle";
import { navLinks, socialLinks } from "@/constants/links";
import { containerVariants, itemVariants } from "@/styles/motion-framer-utils";
import { cn } from "@/styles/tailwind-utils";
import { useInitialLoading } from "@/hooks/context/loading";
import { useRouter } from "next/navigation";
import { routes } from "@/constants/routes";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { state: isOpen, toggle } = useBooleanToggle();
  
  const { hasLoaded } = useInitialLoading();
  if (!hasLoaded) return null;

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "circOut" }}
    >
      <div
        className={`
          fixed z-40 flex items-center justify-between bg-background-secondary border-border-glow
          transition-all duration-300 top-0 left-0 right-0 h-[clamp(60px,8vw,70px)] px-6
          flex-row md:flex md:flex-col md:top-0 md:left-0 md:h-screen md:w-[clamp(60px,6vw,90px)] md:py-[clamp(1rem,3vh,2rem)] md:px-0
          md:border-r
        `}
      >
        <button
          onClick={() => toggle()}
          className="md:hidden text-[clamp(1.5rem,2vw,2rem)] text-accent hover:scale-110 transition cursor-pointer"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={`
            text-text-secondary font-medium text-[clamp(0.8rem,1.5vw,1.25rem)]
            tracking-[clamp(0.15em,0.5vw,0.25em)]
            md:absolute md:top-1/2 md:-translate-y-1/2 md:-rotate-90 md:whitespace-nowrap
            transition-colors duration-200
            active:text-accent active:scale-95 cursor-pointer
          `}
          onClick={() => router.push(routes.root)}
        >
          Nofil Zahid
        </div>

        <div className="text-accent text-xl"><Code2 onClick={() => router.push(routes.root)} /></div>
      </div>

      <aside
        className={cn(
          "fixed z-30 flex flex-col justify-between w-full h-screen",
          "bg-background-primary text-text-primary border-r border-border-glow",
          "transition-transform duration-300",
          "px-[clamp(1.5rem,3vw,3rem)] py-[clamp(2rem,4vh,4rem)]",
          "md:hidden md:w-[clamp(260px,30vw,340px)] md:h-screen",
          isOpen
            ? "translate-x-0 md:translate-x-[clamp(60px,6vw,90px)]"
            : "-translate-x-full md:-translate-x-full"
        )}
      >
        <nav className="mt-16 flex flex-col gap-[clamp(1rem,3vh,2rem)] font-mono">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => toggle()}
                className="group relative flex items-center py-1 transition-colors duration-300"
              >
                <div className="absolute -left-6 flex items-center justify-center w-4">
                  {active && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="h-6 w-[2px] bg-accent shadow-[0_0_12px_rgba(13,242,89,0.8)]"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </div>

                <span
                  className={cn(
                    "text-[clamp(0.9rem,1.2vw,1.1rem)] uppercase tracking-widest transition-all duration-300",
                    active
                      ? "text-accent translate-x-2"
                      : "text-text-secondary group-hover:text-text-primary group-hover:translate-x-1"
                  )}
                >
                  /{link.name}
                </span>

                {active && (
                  <span className="absolute inset-0 -z-10 bg-accent/5 blur-xl rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        <motion.div
          className="flex flex-col gap-3 text-sm text-text-secondary"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <motion.div key={link.name} variants={itemVariants}>
                <Link
                  href={link.href}
                  target="_blank"
                  className="flex items-center gap-2 group transition-colors duration-200"
                >
                  <Icon
                    className="w-4 h-4 text-text-secondary group-hover:text-accent transition-colors duration-200"
                  />
                  <motion.span
                    whileHover={{ x: 5 }}
                    className="text-text-secondary group-hover:text-accent transition-colors duration-200 font-mono"
                  >
                    {link.name}
                  </motion.span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </aside>
    </motion.div>
  );
}
