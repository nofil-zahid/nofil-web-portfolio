'use client';
import { useEffect } from "react";
import { useResponsive } from "@/hooks/core/use-responsive";
import NextTopLoader from "nextjs-toploader";
import { useBooleanToggle } from "@/hooks/core/use-boolean-toggle";

export default function TopLoader() {
  const { isMobile } = useResponsive();
  const { state: mounted, enable } = useBooleanToggle(false);

  useEffect(() => {
    enable();
  }, [enable]);

  if (!mounted) return null;

  return (
    <NextTopLoader
      color="#0df259"
      initialPosition={0.08}
      crawlSpeed={2000}
      height={(mounted && isMobile) ? 5 : 3}
      crawl={true}
      showSpinner={false}
      easing="ease-in-out"
      speed={300}
      shadow="0 0 8px #9ACD32,0 0 4px #2299DD"
    />
  )
}
