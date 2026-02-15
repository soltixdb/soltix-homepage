export function GetStarted() {
  const steps = [
    {
      step: "1",
      title: "Clone & Build",
      code: `git clone https://github.com/soltixdb/soltix.git
cd soltix
make build`,
    },
    {
      step: "2",
      title: "Start Infrastructure",
      code: `# Start etcd + NATS
docker-compose up -d etcd nats`,
    },
    {
      step: "3",
      title: "Run Services",
      code: `# Start storage node
./bin/storage -config configs/config.yaml

# Start router (in another terminal)
./bin/router -config configs/config.yaml`,
    },
    {
      step: "4",
      title: "Write & Query",
      code: `# Write data
curl -X POST http://localhost:5555/v1/write \\
  -H "Content-Type: application/json" \\
  -d '{"database":"mydb","collection":"sensors","points":[...]}'

# Query data
curl http://localhost:5555/v1/query?database=mydb&collection=sensors`,
    },
  ];

  return (
    <section id="get-started" className="border-t border-[var(--color-border)] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Get Started in <span className="gradient-text">Minutes</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--color-text-secondary)]">
            From clone to first query in under 5 minutes.
            No complex setup, no external dependencies beyond etcd.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-3xl space-y-6">
          {steps.map((s) => (
            <div key={s.step} className="flex gap-5">
              {/* Step number */}
              <div className="flex flex-col items-center">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-500 text-sm font-bold text-white">
                  {s.step}
                </div>
                {s.step !== "4" && (
                  <div className="mt-2 w-px flex-1 bg-[var(--color-border)]" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-8">
                <h3 className="mb-3 font-semibold">{s.title}</h3>
                <div className="code-block overflow-x-auto p-4">
                  <pre className="text-xs leading-5 text-green-400 sm:text-sm">
                    <code>{s.code}</code>
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Prerequisites */}
        <div className="mx-auto mt-10 max-w-3xl rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6">
          <h3 className="mb-4 text-sm font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider">
            Prerequisites
          </h3>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { name: "Go 1.25+", icon: "🔧" },
              { name: "etcd 3.5+", icon: "🗄️" },
              { name: "NATS / Redis / Kafka", icon: "📨" },
            ].map((p) => (
              <div key={p.name} className="flex items-center gap-2 text-sm">
                <span>{p.icon}</span>
                <span>{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
