import { useState, useCallback } from 'react';

export const useBooleanToggle = (initialState: boolean = false) => {
  const [state, setState] = useState<boolean>(initialState);

  const toggle = useCallback((value?: boolean) => {
    setState((prev) => (value !== undefined ? value : !prev));
  }, []);

  const enable = useCallback(() => setState(true), []);
  const disable = useCallback(() => setState(false), []);

  return { state, toggle, enable, disable, setState };
};
