"use client";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/styles/tailwind-utils";
import { routes } from "@/constants/routes";

const Breadcrumb = () => {
  const router = useRouter();
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
    >
      <div className="flex items-center font-mono text-green-500/80 overflow-x-auto whitespace-nowrap">
        <span
          className="mr-1 text-[clamp(0.75rem,2vw,1rem)] cursor-pointer hover:text-green-500 hover:underline transition-all"
          onClick={() => router.push(routes.root)}
        >
          root@nofil-web-portfolio:~$
        </span>

        {segments.map((segment, index) => {
          const urlPath = `/${segments.slice(0, index + 1).join("/")}`;
          return (
            <span
              key={index}
              className="flex items-center text-[clamp(0.75rem,2vw,1rem)]"
            >
              <span className="mx-0.5 text-gray-500">./</span>
              <span
                className={cn(
                  "cursor-pointer transition-all duration-200",
                  "hover:text-text-primary hover:underline underline-offset-4 decoration-accent/30",
                  pathname === urlPath 
                    ? "text-text-primary font-medium" 
                    : "text-text-secondary"
                )}
                onClick={() => pathname !== urlPath && router.push(urlPath)}
              >
                {segment}
              </span>
            </span>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Breadcrumb;
