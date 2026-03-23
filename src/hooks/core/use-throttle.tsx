import { useCallback, useRef } from "react";

export function useThrottled<T extends (...args: unknown[]) => void>(
  callback: T,
  delay: number,
) {
  const lastExecutedRef = useRef<number>(0);

  return useCallback(
    (...args: Parameters<T>) => {
      const now = Date.now();

      if (now - lastExecutedRef.current >= delay) {
        lastExecutedRef.current = now;
        callback(...args);
      }
    },
    [callback, delay],
  );
}
