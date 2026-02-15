const features = [
  {
    category: "Core Capabilities",
    color: "sky",
    items: [
      {
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        ),
        title: "High Performance",
        desc: "10K+ writes/sec with sub-100ms query latency using memory cache and columnar storage.",
      },
      {
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
          </svg>
        ),
        title: "Multi-Level Aggregation",
        desc: "Pre-computed 1h / 1d / 1mo / 1y aggregates for instant analytics without re-computation.",
      },
      {
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
          </svg>
        ),
        title: "Horizontal Scalability",
        desc: "Add storage nodes to scale linearly. Consistent hashing ensures even data distribution.",
      },
      {
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3v18M3 12h18" />
            <path d="M3.6 9h16.8M3.6 15h16.8" />
          </svg>
        ),
        title: "Efficient Storage",
        desc: "Columnar format with 5 adaptive encoders (Gorilla, Delta, Dictionary, Bitmap, Snappy) and 3-tier group architecture.",
      },
    ],
  },
  {
    category: "Advanced Analytics",
    color: "purple",
    items: [
      {
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        ),
        title: "Anomaly Detection",
        desc: "Built-in Z-Score, IQR, and Moving Average algorithms with automatic detection.",
      },
      {
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
        ),
        title: "Forecasting",
        desc: "SMA, Holt-Winters, ARIMA, Prophet-style, and ML-based prediction models.",
      },
      {
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
          </svg>
        ),
        title: "Downsampling",
        desc: "LTTB, MinMax, Average, M4 algorithms for efficient large dataset visualization.",
      },
      {
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" /><line x1="4" y1="22" x2="4" y2="15" />
          </svg>
        ),
        title: "Streaming Queries",
        desc: "Server-Sent Events (SSE) for real-time large dataset streaming.",
      },
    ],
  },
  {
    category: "Infrastructure",
    color: "green",
    items: [
      {
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        ),
        title: "WAL + Batching",
        desc: "Write-ahead log for durability with batch flush for maximum write throughput.",
      },
      {
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          </svg>
        ),
        title: "Multi-Queue Support",
        desc: "Flexible message queue backends — NATS, Redis Streams, or Kafka.",
      },
      {
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
          </svg>
        ),
        title: "MapReduce Queries",
        desc: "Parallel query execution across shards with automatic result aggregation.",
      },
      {
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" />
          </svg>
        ),
        title: "API Authentication",
        desc: "API key auth with X-API-Key header or Bearer token support.",
      },
    ],
  },
];

const colorMap: Record<string, string> = {
  sky: "text-sky-400 bg-sky-500/10 border-sky-500/20",
  purple: "text-purple-400 bg-purple-500/10 border-purple-500/20",
  green: "text-green-400 bg-green-500/10 border-green-500/20",
};

export function Features() {
  return (
    <section id="features" className="border-t border-[var(--color-border)] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Everything you need for
            <span className="gradient-text"> time-series data</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--color-text-secondary)]">
            From high-speed ingestion to advanced analytics — Soltix has it all built-in.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {features.map((group) => (
            <div key={group.category}>
              <h3 className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-[var(--color-text-secondary)]">
                {group.category}
              </h3>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {group.items.map((feature) => (
                  <div
                    key={feature.title}
                    className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6 transition hover:border-sky-500/30 hover:bg-[var(--color-bg-card)]"
                  >
                    <div className={`mb-4 inline-flex rounded-lg border p-2.5 ${colorMap[group.color]}`}>
                      {feature.icon}
                    </div>
                    <h4 className="mb-2 font-semibold">{feature.title}</h4>
                    <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
