"use client";

import { useState } from "react";
import Image from "next/image";
import { useTheme } from "./theme-provider";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const cycle = () => {
    const next = theme === "system" ? "light" : theme === "light" ? "dark" : "system";
    setTheme(next);
  };

  return (
    <button
      onClick={cycle}
      className="flex items-center gap-1.5 rounded-lg border border-[var(--color-border)] px-3 py-2 text-sm transition hover:border-sky-500/50 hover:bg-sky-500/5"
      title={`Theme: ${theme}`}
    >
      {theme === "dark" && (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      )}
      {theme === "light" && (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      )}
      {theme === "system" && (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )}
    </button>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg-primary)]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5" aria-label="SoltixDB Home">
          <Image src="/logo.png" alt="SoltixDB logo" width={32} height={32} className="rounded-lg" />
          <span className="text-lg font-bold tracking-tight">Soltix</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm text-[var(--color-text-secondary)] transition hover:text-[var(--color-text-hover)]">Features</a>
          <a href="#architecture" className="text-sm text-[var(--color-text-secondary)] transition hover:text-[var(--color-text-hover)]">Architecture</a>
          <a href="#performance" className="text-sm text-[var(--color-text-secondary)] transition hover:text-[var(--color-text-hover)]">Performance</a>
          <a href="https://docs.soltixdb.com" className="text-sm text-[var(--color-text-secondary)] transition hover:text-[var(--color-text-hover)]">Docs</a>
        </div>

        {/* CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href="https://github.com/soltixdb/soltix"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-[var(--color-border)] px-4 py-2 text-sm transition hover:border-sky-500/50 hover:bg-sky-500/5"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
          <a
            href="#get-started"
            className="rounded-lg bg-sky-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-sky-400"
          >
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-[var(--color-border)] bg-[var(--color-bg-primary)] px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <a href="#features" className="text-sm text-[var(--color-text-secondary)]" onClick={() => setMobileOpen(false)}>Features</a>
            <a href="#architecture" className="text-sm text-[var(--color-text-secondary)]" onClick={() => setMobileOpen(false)}>Architecture</a>
            <a href="#performance" className="text-sm text-[var(--color-text-secondary)]" onClick={() => setMobileOpen(false)}>Performance</a>
            <a href="https://docs.soltixdb.com" className="text-sm text-[var(--color-text-secondary)]">Docs</a>
            <a href="https://github.com/soltixdb/soltix" className="text-sm text-[var(--color-text-secondary)]">GitHub</a>
            <div className="pt-2 border-t border-[var(--color-border)]">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
