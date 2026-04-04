import { useState, useCallback } from 'react';

export const useModalToggle = <T extends Record<string, boolean>>(register: T) => {
  const [state, setState] = useState<T>(() => register);

  const toggle = useCallback(
    (key: keyof T, value: boolean = !state[key]) => {
      setState((prev) => ({ ...prev, [key]: value }));
    },
    [state],
  );

  const open = useCallback((key: keyof T) => toggle(key, true), [toggle]);
  const close = useCallback((key: keyof T) => toggle(key, false), [toggle]);
  const reset = useCallback(() => setState(register), [register]);
  const isTrue = useCallback((key: keyof T) => state[key], [state]);

  return { modalsMap: state, toggle, open, close, reset, isTrue };
};
