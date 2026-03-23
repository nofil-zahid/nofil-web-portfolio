"use client";
import { useEffect } from "react";

export const useDocumentEvent = <K extends keyof DocumentEventMap>(
  eventName: K,
  handler: (event: DocumentEventMap[K]) => void
) => {
  useEffect(() => {
    document.addEventListener(eventName, handler as EventListener);

    return () => {
      document.removeEventListener(eventName, handler as EventListener);
    };
  }, [eventName, handler]);
};
