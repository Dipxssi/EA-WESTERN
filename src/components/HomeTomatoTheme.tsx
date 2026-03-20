"use client";

import { useEffect } from "react";

// Defaults live in `src/app/globals.css`. We restore them on unmount so other pages keep the original palette.
const DEFAULT_NAVY = "#0B1F2E";
const DEFAULT_NAVY_DARK = "#0F2A3D";
const DEFAULT_BACKGROUND_GRADIENT =
  "linear-gradient(135deg, #0B1F2E 0%, #0F2A3D 60%, #091722 100%)";
const DEFAULT_PRIMARY_ACCENT = "#C62828";
const DEFAULT_ACCENT_HOVER = "#E53935";
const DEFAULT_ACCENT_ACTIVE = "#8E1B1B";

const DEFAULT_GOLD = "#C2A36B";
const DEFAULT_GOLD_LIGHT = "#C2A36B";
const DEFAULT_HAIRLINE_GOLD = "rgba(194, 163, 107, 0.15)";
const DEFAULT_GOLD_LEGACY = "#D4A017";
const DEFAULT_PREMIUM_GOLD = "#C2A36B";

// Homepage palette: Oxford Blue + "Scarlet" accents (overridden) + Golden (gold).
const HOMEPAGE_NAVY = "#0B1F2E";
const HOMEPAGE_NAVY_DARK = "#0F2A3D";
const HOMEPAGE_BACKGROUND_GRADIENT =
  "linear-gradient(135deg, #0B1F2E 0%, #0F2A3D 60%, #091722 100%)";

const HOMEPAGE_PRIMARY_ACCENT = "#C7A86C";
const HOMEPAGE_ACCENT_HOVER = "#C7A86C";
const HOMEPAGE_ACCENT_ACTIVE = "#C7A86C";

// Make "gold" tokens scarlet too (per request).
const HOMEPAGE_GOLD = HOMEPAGE_PRIMARY_ACCENT; // Scarlet base
const HOMEPAGE_GOLD_LIGHT = HOMEPAGE_ACCENT_HOVER; // Brighter Scarlet
const HOMEPAGE_HAIRLINE_GOLD = "rgba(199, 168, 108, 0.15)";
const HOMEPAGE_PREMIUM_GOLD = HOMEPAGE_PRIMARY_ACCENT;

export function HomeTomatoTheme() {
  useEffect(() => {
    const root = document.documentElement;

    // Blue (background)
    root.style.setProperty("--color-navy", HOMEPAGE_NAVY);
    root.style.setProperty("--color-navy-dark", HOMEPAGE_NAVY_DARK);
    root.style.setProperty("--background-gradient", HOMEPAGE_BACKGROUND_GRADIENT);

    // Red (scarlet accents)
    root.style.setProperty("--color-primary-accent", HOMEPAGE_PRIMARY_ACCENT);
    root.style.setProperty("--color-accent-hover", HOMEPAGE_ACCENT_HOVER);
    root.style.setProperty("--color-accent-active", HOMEPAGE_ACCENT_ACTIVE);

    // Gold (golden/brassy)
    root.style.setProperty("--color-gold", HOMEPAGE_GOLD);
    root.style.setProperty("--color-gold-light", HOMEPAGE_GOLD_LIGHT);
    root.style.setProperty("--hairline-gold", HOMEPAGE_HAIRLINE_GOLD);
    root.style.setProperty("--color-gold-legacy", HOMEPAGE_GOLD);
    root.style.setProperty("--color-premium-gold", HOMEPAGE_PREMIUM_GOLD);

    return () => {
      // Restore global defaults for other pages.
      root.style.setProperty("--color-navy", DEFAULT_NAVY);
      root.style.setProperty("--color-navy-dark", DEFAULT_NAVY_DARK);
      root.style.setProperty("--background-gradient", DEFAULT_BACKGROUND_GRADIENT);

      root.style.setProperty("--color-primary-accent", DEFAULT_PRIMARY_ACCENT);
      root.style.setProperty("--color-accent-hover", DEFAULT_ACCENT_HOVER);
      root.style.setProperty("--color-accent-active", DEFAULT_ACCENT_ACTIVE);

      root.style.setProperty("--color-gold", DEFAULT_GOLD);
      root.style.setProperty("--color-gold-light", DEFAULT_GOLD_LIGHT);
      root.style.setProperty("--hairline-gold", DEFAULT_HAIRLINE_GOLD);
      root.style.setProperty("--color-gold-legacy", DEFAULT_GOLD_LEGACY);
      root.style.setProperty("--color-premium-gold", DEFAULT_PREMIUM_GOLD);
    };
  }, []);

  return null;
}

