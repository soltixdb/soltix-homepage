const benchmarks = [
  {
    label: "Write Throughput",
    value: "10,000+",
    unit: "points/sec",
    bar: 85,
    color: "bg-sky-500",
  },
  {
    label: "Query Latency (raw)",
    value: "<100",
    unit: "ms",
    bar: 92,
    color: "bg-green-500",
  },
  {
    label: "Query Latency (aggregated)",
    value: "<10",
    unit: "ms",
    bar: 98,
    color: "bg-purple-500",
  },
  {
    label: "Compression Ratio",
    value: "3-5x",
    unit: "reduction",
    bar: 75,
    color: "bg-orange-500",
  },
];

const storageLayout: never[] = [];

export function Performance() {
  return (
    <section id="performance" className="border-t border-[var(--color-border)] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Built for <span className="gradient-text">Performance</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--color-text-secondary)]">
            Optimized at every layer — from memory cache to columnar disk format.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-2xl">
          {/* Benchmark bars */}
          <div>
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-widest text-[var(--color-text-secondary)]">
              Benchmark Results
            </h3>
            <div className="space-y-6">
              {benchmarks.map((b) => (
                <div key={b.label}>
                  <div className="mb-2 flex items-baseline justify-between">
                    <span className="text-sm font-medium">{b.label}</span>
                    <span className="text-sm font-bold">
                      {b.value} <span className="text-xs font-normal text-[var(--color-text-secondary)]">{b.unit}</span>
                    </span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-[var(--color-bg-card)]">
                    <div
                      className={`h-full rounded-full ${b.color} transition-all duration-1000`}
                      style={{ width: `${b.bar}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Aggregation levels */}
            <div className="mt-10 grid grid-cols-4 gap-3">
              {["1h", "1d", "1mo", "1y"].map((level) => (
                <div
                  key={level}
                  className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-3 py-2 text-center"
                >
                  <div className="text-sm font-bold text-sky-400">{level}</div>
                  <div className="text-[10px] text-[var(--color-text-secondary)]">Pre-computed</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
