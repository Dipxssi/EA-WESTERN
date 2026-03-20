"use client";

import { Navigation } from "@/components/Navigation";

export function NavBar({ locale = "en" }: { locale?: string }) {
  return <Navigation locale={locale} />;
}
