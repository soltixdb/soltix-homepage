export function WhySoltix() {
  return (
    <section className="relative border-t border-[var(--color-border)] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Why <span className="gradient-text">Soltix</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--color-text-secondary)]">
            Soltix is purpose-built for solar plant monitoring — a domain where every
            installation is physically fixed at a single geographic location with a permanent timezone.
          </p>
        </div>

        {/* Comparison table */}
        <div className="mx-auto mt-14 max-w-4xl">
          <div className="grid gap-0 md:grid-cols-2">
            {/* Traditional TSDB */}
            <div className="rounded-t-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-8 md:rounded-l-xl md:rounded-tr-none">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-400">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
                Traditional TSDB
              </div>
              <ul className="space-y-4 text-sm text-[var(--color-text-secondary)]">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-red-400">✗</span>
                  Re-aggregate at every query request
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-red-400">✗</span>
                  High query latency at scale
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-red-400">✗</span>
                  Complex query language required
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-red-400">✗</span>
                  Heavy resource usage for analytics
                </li>
              </ul>
            </div>

            {/* Soltix */}
            <div className="gradient-border rounded-b-xl p-8 md:rounded-r-xl md:rounded-bl-none" style={{ background: "var(--color-bg-card)" }}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                Soltix
              </div>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-green-400">✓</span>
                  Pre-computed aggregates — zero re-aggregation
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-green-400">✓</span>
                  Sub-100ms queries at any scale
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-green-400">✓</span>
                  Simple REST API — no query language needed
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-green-400">✓</span>
                  5 adaptive encoders — Gorilla, Delta, Dictionary, Bitmap &amp; Snappy
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Benefit cards */}
        <div className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: "⚡",
              title: "Zero Re-aggregation",
              desc: "Hourly, daily, monthly, yearly rollups pre-computed at write time — queries read directly",
            },
            {
              icon: "📁",
              title: "Adaptive Compression",
              desc: "Gorilla XOR for floats, Delta-Zigzag for timestamps, Dictionary for strings, Bitmap for bools, Snappy at block level",
            },
            {
              icon: "🔀",
              title: "Distributed by Design",
              desc: "Hash-based sharding, replication, and MapReduce queries across nodes",
            },
            {
              icon: "🚀",
              title: "Simple REST API",
              desc: "Write and query with standard HTTP — no proprietary query language needed",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6 transition hover:border-sky-500/30"
            >
              <div className="mb-3 text-2xl">{item.icon}</div>
              <h3 className="mb-2 text-sm font-semibold">{item.title}</h3>
              <p className="text-xs leading-relaxed text-[var(--color-text-secondary)]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
