"use client";

import { useEffect } from "react";

// Defaults live in `src/app/globals.css`. Keep this restore path aligned with the global palette.
const DEFAULT_NAVY = "#1e3a5f";
const DEFAULT_NAVY_DARK = "#2c5282";
const DEFAULT_BACKGROUND_GRADIENT = "#f7f5f0";
const DEFAULT_PRIMARY_ACCENT = "#1e3a5f";
const DEFAULT_ACCENT_HOVER = "#2c5282";
const DEFAULT_ACCENT_ACTIVE = "#173352";

const DEFAULT_GOLD = "#c9a96e";
const DEFAULT_GOLD_LIGHT = "#c9a96e";
const DEFAULT_HAIRLINE_GOLD = "rgba(201, 169, 110, 0.22)";
const DEFAULT_GOLD_LEGACY = "#c9a96e";
const DEFAULT_PREMIUM_GOLD = "#c9a96e";
const DEFAULT_TEXT_PRIMARY = "#1a2e45";
const DEFAULT_TEXT_SECONDARY = "#4a5568";

/** Homepage tokens — ivory canvas + navy anchors + brass gold (#c9a96e). */
const HOMEPAGE_NAVY = "#1e3a5f";
const HOMEPAGE_NAVY_MID = "#2c5282";
const HOMEPAGE_BACKGROUND_GRADIENT = "#f7f5f0";

const HOMEPAGE_PRIMARY_ACCENT = HOMEPAGE_NAVY;
const HOMEPAGE_ACCENT_HOVER = HOMEPAGE_NAVY_MID;
const HOMEPAGE_ACCENT_ACTIVE = "#173352";

const HOMEPAGE_GOLD = "#c9a96e";
const HOMEPAGE_GOLD_LIGHT = "#d4b87e";
const HOMEPAGE_HAIRLINE_GOLD = "rgba(201, 169, 110, 0.22)";
const HOMEPAGE_PREMIUM_GOLD = HOMEPAGE_GOLD;

export function HomeTomatoTheme() {
  useEffect(() => {
    const root = document.documentElement;
    const prevBodyBg = document.body.style.backgroundColor;

    document.body.style.backgroundColor = "#f7f5f0";

    root.style.setProperty("--color-navy", HOMEPAGE_NAVY);
    root.style.setProperty("--color-navy-dark", HOMEPAGE_NAVY_MID);
    root.style.setProperty("--color-navy-mid", HOMEPAGE_NAVY_MID);
    root.style.setProperty("--color-ivory", "#f7f5f0");
    root.style.setProperty("--color-ivory-dark", "#ede9e1");
    root.style.setProperty("--color-blue-light", "#4a7fa5");
    root.style.setProperty("--color-text-dark", "#1a2e45");
    root.style.setProperty("--color-text-body", "#4a5568");
    root.style.setProperty("--color-text-light", "#e8edf2");
    root.style.setProperty("--color-white", "#ffffff");
    root.style.setProperty("--color-gold-dark", "#a8823d");

    root.style.setProperty("--text-primary", "#1a2e45");
    root.style.setProperty("--text-secondary", "#4a5568");

    root.style.setProperty("--background-gradient", HOMEPAGE_BACKGROUND_GRADIENT);

    root.style.setProperty("--color-primary-accent", HOMEPAGE_PRIMARY_ACCENT);
    root.style.setProperty("--color-accent-hover", HOMEPAGE_ACCENT_HOVER);
    root.style.setProperty("--color-accent-active", HOMEPAGE_ACCENT_ACTIVE);

    root.style.setProperty("--color-gold", HOMEPAGE_GOLD);
    root.style.setProperty("--color-gold-light", HOMEPAGE_GOLD_LIGHT);
    root.style.setProperty("--hairline-gold", HOMEPAGE_HAIRLINE_GOLD);
    root.style.setProperty("--color-gold-legacy", HOMEPAGE_GOLD);
    root.style.setProperty("--color-premium-gold", HOMEPAGE_PREMIUM_GOLD);

    return () => {
      document.body.style.backgroundColor = prevBodyBg;

      root.style.removeProperty("--color-navy-mid");
      root.style.removeProperty("--color-ivory");
      root.style.removeProperty("--color-ivory-dark");
      root.style.removeProperty("--color-blue-light");
      root.style.removeProperty("--color-text-dark");
      root.style.removeProperty("--color-text-body");
      root.style.removeProperty("--color-text-light");
      root.style.removeProperty("--color-white");
      root.style.removeProperty("--color-gold-dark");

      root.style.setProperty("--text-primary", DEFAULT_TEXT_PRIMARY);
      root.style.setProperty("--text-secondary", DEFAULT_TEXT_SECONDARY);

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
