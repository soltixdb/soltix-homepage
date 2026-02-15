import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://soltixdb.com"),
  title: {
    default: "SoltixDB — Time-Series Database Built for Solar Energy",
    template: "%s | SoltixDB",
  },
  description:
    "Purpose-built TSDB for solar energy monitoring. Pre-computed aggregation across 4 levels, adaptive compression (Gorilla, Delta, Dictionary, Bitmap, Snappy), columnar storage, and sub-100ms queries. Built in Go, open source.",
  keywords: [
    "SoltixDB",
    "time-series database",
    "TSDB",
    "solar energy monitoring",
    "solar farm database",
    "inverter monitoring",
    "irradiance data",
    "power metrics",
    "pre-computed aggregation",
    "columnar storage",
    "adaptive compression",
    "Gorilla compression",
    "Delta encoding",
    "distributed database",
    "IoT database",
    "Go database",
    "open source TSDB",
    "real-time energy analytics",
    "sensor data",
    "industrial monitoring",
  ],
  authors: [{ name: "SoltixDB Team", url: "https://github.com/soltixdb" }],
  creator: "SoltixDB",
  publisher: "SoltixDB",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://soltixdb.com",
    siteName: "SoltixDB",
    title: "SoltixDB — Time-Series Database Built for Solar Energy",
    description:
      "Purpose-built TSDB for solar energy monitoring with pre-computed aggregation, adaptive compression, and sub-100ms queries. Open source, built in Go.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SoltixDB — Time-Series Database Built for Solar Energy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SoltixDB — Time-Series Database Built for Solar Energy",
    description:
      "Purpose-built TSDB for solar energy monitoring with pre-computed aggregation, adaptive compression, and sub-100ms queries.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://soltixdb.com",
  },
  category: "technology",
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
