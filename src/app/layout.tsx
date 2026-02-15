import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Soltix — Distributed Time-Series Database",
  description:
    "A high-performance distributed time-series database built with Go. Pre-computed aggregation, columnar storage, and sub-100ms queries for IoT, industrial monitoring, and beyond.",
  keywords: [
    "time-series database",
    "distributed database",
    "IoT",
    "industrial monitoring",
    "sensor data",
    "Go",
    "TSDB",
    "open source",
  ],
  openGraph: {
    title: "Soltix — Distributed Time-Series Database",
    description:
      "High-performance distributed time-series database with pre-computed aggregation and columnar storage.",
    url: "https://soltixdb.github.io",
    siteName: "Soltix",
    type: "website",
  },
};

// Script to set theme before paint to prevent flash
const themeScript = `
  (function() {
    try {
      var theme = localStorage.getItem('soltix-theme') || 'system';
      var resolved = theme;
      if (theme === 'system') {
        resolved = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      document.documentElement.classList.add(resolved);
    } catch(e) {
      document.documentElement.classList.add('dark');
    }
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
