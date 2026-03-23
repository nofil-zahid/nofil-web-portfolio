'use client';
import { useEffect, useState } from "react";

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState(() => {
    if (typeof window !== "undefined") {
      return { width: window.innerWidth, height: window.innerHeight };
    }
    return { width: 0, height: 0 };
  });

  useEffect(() => {
    let frameId: number;

    const handleResize = () => {
      frameId = requestAnimationFrame(() => {
        setScreenSize({ width: window.innerWidth, height: window.innerHeight });
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
};
