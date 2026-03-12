import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import {
  Variant,
  getOrAssignVariant,
  setVariant as persistVariant,
  trackEvent,
  startSession,
  getSessionDuration,
  seedDemoData,
} from "../lib/abTesting";

interface ABContextValue {
  variant: Variant;
  setVariant: (v: Variant) => void;
  track: (type: Parameters<typeof trackEvent>[0], value?: number | string) => void;
}

const ABContext = createContext<ABContextValue>({
  variant: "beige",
  setVariant: () => {},
  track: () => {},
});

export const useAB = () => useContext(ABContext);

export const ABProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [variant, setVariantState] = useState<Variant>("beige");

  useEffect(() => {
    // Seed demo data on first visit
    seedDemoData();
    // Assign/restore variant
    const v = getOrAssignVariant();
    setVariantState(v);
    // Start session timer
    startSession();
    // Track pageview
    trackEvent("pageview", v);

    // Track time on page when user leaves
    const handleUnload = () => {
      trackEvent("time_on_page", v, getSessionDuration());
    };
    window.addEventListener("beforeunload", handleUnload);

    // Track scroll depth
    let maxScroll = 0;
    const handleScroll = () => {
      const scrolled = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      if (scrolled > maxScroll) {
        maxScroll = scrolled;
        if (maxScroll % 25 === 0) {
          trackEvent("scroll_depth", v, maxScroll);
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("beforeunload", handleUnload);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const setVariant = useCallback((v: Variant) => {
    persistVariant(v);
    setVariantState(v);
    trackEvent("pageview", v);
  }, []);

  const track = useCallback(
    (type: Parameters<typeof trackEvent>[0], value?: number | string) => {
      trackEvent(type, variant, value);
    },
    [variant]
  );

  return (
    <ABContext.Provider value={{ variant, setVariant, track }}>
      {children}
    </ABContext.Provider>
  );
};
