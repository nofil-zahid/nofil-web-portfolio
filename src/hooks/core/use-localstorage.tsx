import { useCallback } from "react";
import { showToast } from "@/utils/toaster";
import { envVars } from "@/config/env";

const safeJSONParser = (json: string | null) => {
  try {
    return json ? JSON.parse(json) : null;
  } catch (err) {
    console.error("safeJSONParser: ", err);
    return json;
  }
};

export const useStorage = () => {
  const getItem = useCallback((key: string) => {
    return safeJSONParser(localStorage.getItem(key));
  }, []);

  const setItem = useCallback((key: string, value: unknown) => {
    if (!value) {
      if (envVars.NEXT_PUBLIC_NODE_ENV === "development") {
        showToast({ text: "Value is falsy", type: "warning" });
      }
    }
    localStorage.setItem(key, JSON.stringify(value));
  }, []);

  const removeItem = useCallback((key: string) => {
    localStorage.removeItem(key);
  }, []);

  const clear = useCallback(() => {
    localStorage.clear();
  }, []);

  return {
    getItem,
    setItem,
    removeItem,
    clear,
  };
};
