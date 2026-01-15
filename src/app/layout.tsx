import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EA Western - Your Complete Kenya Experience",
  description: "Professional safari tours, comprehensive insurance, and reliable car hire services in Kenya",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Load Supabase config at runtime for static exports - must load before app */}
        <script src="/supabase-config.js" async></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}