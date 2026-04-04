import { useEffect, useRef } from 'react';

type Step = {
  delay: number;
  callback: () => void;
};

export function useSequenceDelay(steps: Step[]) {
  const timers = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    let totalDelay = 0;

    steps.forEach((step) => {
      totalDelay += step.delay;
      const timer = setTimeout(() => {
        step.callback();
      }, totalDelay);
      timers.current.push(timer);
    });

    return () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
  }, [steps]);
}
