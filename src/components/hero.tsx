"use client";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 left-1/4 h-[500px] w-[500px] rounded-full bg-sky-500/5 blur-[128px]" />
        <div className="absolute top-40 right-1/4 h-[400px] w-[400px] rounded-full bg-purple-500/5 blur-[128px]" />
        <div className="absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-green-500/5 blur-[128px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-4 py-1.5 text-sm">
          <span className="inline-block h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[var(--color-text-secondary)]">v0.0.1 — Open Source &amp; Free</span>
        </div>

        {/* Heading */}
        <h1 className="mx-auto max-w-4xl text-5xl leading-tight font-extrabold tracking-tight md:text-7xl md:leading-[1.1]">
          The Time-Series Database
          <br />
          <span className="gradient-text">Built for Solar</span>
        </h1>

        {/* Subheading */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-text-secondary)] md:text-xl">
          Purpose-built TSDB for solar energy monitoring — pre-computed aggregation
          across 4 levels, columnar storage optimized for irradiance &amp; power metrics,
          and sub-100ms queries at scale. Built in Go for solar farms, inverters, and
          real-time energy analytics.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#get-started"
            className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition hover:bg-sky-400 hover:shadow-sky-400/30"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            Get Started
          </a>
          <a
            href="https://github.com/soltixdb/soltix"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] px-7 py-3.5 text-sm font-semibold transition hover:border-sky-500/40 hover:bg-[var(--color-bg-card)]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View on GitHub
          </a>
        </div>

        {/* Install command */}
        <div className="mx-auto mt-12 max-w-lg">
          <div className="code-block flex items-center gap-3 px-5 py-3.5">
            <span className="text-[var(--color-text-secondary)]">$</span>
            <code className="flex-1 text-sm text-green-400">
              git clone https://github.com/soltixdb/soltix.git
            </code>
            <button
              className="text-[var(--color-text-secondary)] transition hover:text-[var(--color-text-hover)]"
              title="Copy"
              onClick={() => {
                navigator.clipboard?.writeText("git clone https://github.com/soltixdb/soltix.git");
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
              </svg>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            { value: "10K+", label: "Metrics/sec" },
            { value: "<100ms", label: "Query latency" },
            { value: "4-Level", label: "Pre-Aggregation" },
            { value: "Solar", label: "Optimized" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-sky-400 md:text-3xl">{stat.value}</div>
              <div className="mt-1 text-xs text-[var(--color-text-secondary)] uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
