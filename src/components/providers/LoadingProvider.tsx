"use client";
import React from "react";
import { AnimatePresence } from "framer-motion";
import InitialLoader from "@/components/layout/InitialLoader";
import { useBooleanToggle } from "@/hooks/core/use-boolean-toggle";
import { ChildrenProps } from "@/types/components";
import { LoadingContext } from "@/hooks/context/loading";

export const LoadingProvider: React.FC<ChildrenProps> = ({ children }) => {
  const { state: hasLoaded, toggle } = useBooleanToggle(false);

  return (
    <LoadingContext.Provider value={{ hasLoaded }}>
      <AnimatePresence mode="wait">
        {!hasLoaded && (
          <InitialLoader key="loader" onFinished={() => toggle(true)} />
        )}
      </AnimatePresence>
      <div
        style={{
          visibility: hasLoaded ? "visible" : "hidden",
          height: hasLoaded ? "auto" : "100vh",
          overflow: hasLoaded ? "visible" : "hidden",
        }}
      >
        {children}
      </div>
    </LoadingContext.Provider>
  );
};
