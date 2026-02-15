export function Architecture() {
  return (
    <section id="architecture" className="border-t border-[var(--color-border)] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Distributed <span className="gradient-text">Architecture</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--color-text-secondary)]">
            Router + Storage separation with message queues for
            reliable, horizontally scalable deployments.
          </p>
        </div>

        {/* Architecture diagram */}
        <div className="mx-auto mt-14 max-w-4xl">
          <div className="code-block overflow-x-auto p-8">
            <pre className="text-xs leading-6 text-[var(--color-text-secondary)] sm:text-sm sm:leading-7">
              <code>{`┌──────────────────────────────────────────────────┐
│              Client Applications                 │
│         (REST API / SSE / Downloads)             │
└────────────────────┬─────────────────────────────┘
                     │ HTTP
                     ▼
┌──────────────────────────────────────────────────┐
│            `}<span className="text-sky-400 font-semibold">Router Service</span>{` (HTTP API)             │
│  ┌────────────────────────────────────────────┐  │
│  │  `}<span className="text-yellow-400">ShardRouter</span>{` + `}<span className="text-yellow-400">QueryCoordinator</span>{`            │  │
│  │  • Consistent hashing (Rendezvous)         │  │
│  │  • MapReduce parallel queries              │  │
│  │  • Anomaly Detection + Forecasting         │  │
│  │  • Streaming (SSE) + Downsampling          │  │
│  └────────────────────────────────────────────┘  │
└────────────────────┬─────────────────────────────┘
                     │
           ┌─────────┴───────────┐
           │  `}<span className="text-orange-400">Message Queue</span>{`      │
           │  (NATS/Redis/Kafka) │
           └─────────┬───────────┘
                     │
        ┌────────────┼────────────┐
        │            │            │
        ▼            ▼            ▼
  ┌───────────┐┌───────────┐┌───────────┐
  │`}<span className="text-green-400">{` Storage-1 `}</span>{`││`}<span className="text-green-400">{` Storage-2 `}</span>{`││`}<span className="text-green-400">{` Storage-3 `}</span>{`│
  │ Group 0-2 ││ Group 3-5 ││ Group 6-8 │
  │ gRPC Srv  ││ gRPC Srv  ││ gRPC Srv  │
  └─────┬─────┘└─────┬─────┘└─────┬─────┘
        │            │            │
    ┌───┴───┐    ┌───┴───┐    ┌───┴───┐
    │`}<span className="text-purple-400">{` Mem   `}</span>{`│    │`}<span className="text-purple-400">{` Mem   `}</span>{`│    │`}<span className="text-purple-400">{` Mem   `}</span>{`│
    │`}<span className="text-purple-400">{`  WAL  `}</span>{`│    │`}<span className="text-purple-400">{`  WAL  `}</span>{`│    │`}<span className="text-purple-400">{`  WAL  `}</span>{`│
    │`}<span className="text-purple-400">{`  Disk `}</span>{`│    │`}<span className="text-purple-400">{`  Disk `}</span>{`│    │`}<span className="text-purple-400">{`  Disk `}</span>{`│
    └───────┘    └───────┘    └───────┘`}
            </code>
            </pre>
          </div>
        </div>

        {/* Architecture highlights */}
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6">
            <div className="mb-3 inline-flex rounded-lg bg-sky-500/10 p-2 text-sky-400">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></svg>
            </div>
            <h3 className="mb-2 font-semibold">Router Layer</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              HTTP REST API gateway with query coordination, hash-based routing, and built-in analytics.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6">
            <div className="mb-3 inline-flex rounded-lg bg-orange-500/10 p-2 text-orange-400">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" /><line x1="4" y1="22" x2="4" y2="15" /></svg>
            </div>
            <h3 className="mb-2 font-semibold">Message Queue</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Decoupled write path via NATS, Redis Streams, or Kafka for reliable data delivery.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6">
            <div className="mb-3 inline-flex rounded-lg bg-green-500/10 p-2 text-green-400">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg>
            </div>
            <h3 className="mb-2 font-semibold">Storage Layer</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              3-tier engine: Group → Device Group → Partition with columnar format and WAL.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
