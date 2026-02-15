const useCases = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
    ),
    title: "Solar & Renewable Energy",
    desc: "Monitor inverter output, panel efficiency, and energy yield. Pre-computed daily and monthly aggregates make production reports instant.",
    tags: ["Power output", "Irradiance", "Yield tracking"],
    color: "text-yellow-400 bg-yellow-500/10",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20" />
        <path d="M5 20V8l5-4 5 4v12" />
        <path d="M10 20v-4h5v4" />
        <path d="M15 20V12l5-2v10" />
        <rect x="7" y="10" width="2" height="2" />
        <rect x="11" y="10" width="2" height="2" />
      </svg>
    ),
    title: "Smart Factory & IIoT",
    desc: "Track machine vibration, temperature, pressure, and throughput across production lines. Pre-computed aggregation makes shift reports and OEE dashboards instant.",
    tags: ["Machine health", "OEE metrics", "Predictive maintenance"],
    color: "text-sky-400 bg-sky-500/10",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: "IoT Sensor Networks",
    desc: "Ingest data from thousands of sensors — temperature, humidity, motion, air quality. Designed for high-cardinality device IDs at scale.",
    tags: ["Environmental", "Smart building", "Agriculture"],
    color: "text-purple-400 bg-purple-500/10",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: "Energy & Utilities",
    desc: "Monitor power grids, water systems, and gas pipelines. Pre-computed aggregation delivers instant daily consumption reports and trend analysis.",
    tags: ["Smart meters", "Grid monitoring", "Consumption"],
    color: "text-cyan-400 bg-cyan-500/10",
  },
];

export function UseCases() {
  return (
    <section className="border-t border-[var(--color-border)] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Built for <span className="gradient-text">Every Time-Series Workload</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--color-text-secondary)]">
            From solar farms to smart factories — Soltix handles any
            time-series data at scale.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-2">
          {useCases.map((uc, i) => (
            <div
              key={uc.title}
              className="group relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-7 transition-all duration-300 hover:border-sky-500/30 hover:bg-[var(--color-bg-card)] hover:shadow-lg hover:shadow-sky-500/5"
            >
              {/* Subtle gradient accent on hover */}
              <div className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full bg-sky-500/0 blur-3xl transition-all duration-500 group-hover:bg-sky-500/5" />

              <div className="relative">
                <div className="mb-5 flex items-center gap-4">
                  <div className={`inline-flex rounded-xl p-3 ${uc.color}`}>
                    {uc.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{uc.title}</h3>
                </div>
                <p className="mb-5 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {uc.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {uc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-primary)]/50 px-3 py-1 text-[11px] font-medium text-[var(--color-text-secondary)] transition group-hover:border-sky-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
