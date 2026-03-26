"use client";
import React, { Activity, useState } from "react";
import InitialLoader from "@/components/layout/InitialLoader";
import { ChildrenProps } from "@/types/components";
import { LoadingContext } from "@/hooks/context/loading";

export const LoadingProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  const handleFinished = () => {
    setHasLoaded(true);
    // Small delay then unmount the loader DOM entirely
    setTimeout(() => setShowLoader(false), 100);
  };

  return (
    <LoadingContext.Provider value={{ hasLoaded }}>
      <Activity mode={showLoader ? "visible" : "hidden"}>
        <InitialLoader onFinished={handleFinished} />
      </Activity>
      <div
        style={{
          visibility: hasLoaded ? "visible" : "hidden",
          height: hasLoaded ? "auto" : "100dvh",
          overflow: hasLoaded ? "visible" : "hidden",
        }}
      >
        {children}
      </div>
    </LoadingContext.Provider>
  );
};
