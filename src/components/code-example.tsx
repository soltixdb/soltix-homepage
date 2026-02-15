export function CodeExample() {
  return (
    <section className="border-t border-[var(--color-border)] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Simple <span className="gradient-text">REST API</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--color-text-secondary)]">
            Ingest data with a single POST. Query with intuitive parameters.
            No query language to learn.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-6 lg:grid-cols-2">
          {/* Write example */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-flex rounded-md bg-green-500/10 px-2 py-0.5 text-xs font-semibold text-green-400">
                POST
              </span>
              <span className="text-sm text-[var(--color-text-secondary)]">
                Write data points
              </span>
            </div>
            <div className="code-block overflow-x-auto p-5">
              <pre className="text-xs leading-6 sm:text-sm">
                <code>
                  <span className="text-[var(--color-text-secondary)]"># Write a data point</span>
                  {"\n"}
                  <span className="text-sky-400">curl</span>
                  {" -X POST http://localhost:5555/v1/write \\\n"}
                  {"  -H "}
                  <span className="text-yellow-400">{'"Content-Type: application/json"'}</span>
                  {" \\\n  -d "}
                  <span className="text-green-400">{`'{
    "database": "factory_01",
    "collection": "sensors",
    "points": [{
      "id": "sensor-A1",
      "timestamp": "2026-02-15T10:30:00+09:00",
      "fields": {
        "temperature": 42.1,
        "humidity": 65.3,
        "pressure": 1013.25
      }
    }]
  }'`}</span>
                </code>
              </pre>
            </div>
          </div>

          {/* Query example */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-flex rounded-md bg-sky-500/10 px-2 py-0.5 text-xs font-semibold text-sky-400">
                GET
              </span>
              <span className="text-sm text-[var(--color-text-secondary)]">
                Query data with aggregation
              </span>
            </div>
            <div className="code-block overflow-x-auto p-5">
              <pre className="text-xs leading-6 sm:text-sm">
                <code>
                  <span className="text-[var(--color-text-secondary)]"># Query hourly aggregation</span>
                  {"\n"}
                  <span className="text-sky-400">curl</span>
                  {" http://localhost:5555/v1/query \\\n"}
                  {"  -G \\\n"}
                  {"  -d "}
                  <span className="text-yellow-400">database=factory_01</span>
                  {" \\\n  -d "}
                  <span className="text-yellow-400">collection=sensors</span>
                  {" \\\n  -d "}
                  <span className="text-yellow-400">interval=1h</span>
                  {" \\\n  -d "}
                  <span className="text-yellow-400">start=2026-02-15T00:00:00+09:00</span>
                  {" \\\n  -d "}
                  <span className="text-yellow-400">end=2026-02-15T23:59:59+09:00</span>
                  {"\n\n"}
                  <span className="text-[var(--color-text-secondary)]"># Response (pre-computed — zero re-aggregation)</span>
                  {"\n"}
                  <span className="text-green-400">{`{
  "data": [{
    "time": "2026-02-15T10:00:00+09:00",
    "device_id": "sensor-A1",
    "temperature": { "avg": 41.8, "min": 39.0, "max": 45.0, "count": 60 },
    "humidity": { "avg": 64.5, "min": 58.2, "max": 70.1, "count": 60 }
  }]
}`}</span>
                </code>
              </pre>
            </div>
          </div>
        </div>

        {/* Config example */}
        <div className="mx-auto mt-8 max-w-6xl">
          <div className="mb-3 flex items-center gap-2">
            <span className="inline-flex rounded-md bg-purple-500/10 px-2 py-0.5 text-xs font-semibold text-purple-400">
              YAML
            </span>
            <span className="text-sm text-[var(--color-text-secondary)]">
              Simple configuration
            </span>
          </div>
          <div className="code-block overflow-x-auto p-5">
            <pre className="text-xs leading-6 sm:text-sm">
              <code>
                <span className="text-[var(--color-text-secondary)]"># configs/config.yaml</span>
                {"\n"}
                <span className="text-purple-400">storage</span>
                <span className="text-[var(--color-text-secondary)]">:</span>
                {"\n  "}
                <span className="text-sky-400">timezone</span>
                <span className="text-[var(--color-text-secondary)]">:</span>
                <span className="text-green-400"> &quot;Asia/Tokyo&quot;</span>
                {"   "}
                <span className="text-[var(--color-text-secondary)]"># Timezone for aggregation boundaries</span>
                {"\n  "}
                <span className="text-sky-400">data_dir</span>
                <span className="text-[var(--color-text-secondary)]">:</span>
                <span className="text-green-400"> &quot;./data&quot;</span>
                {"\n  "}
                <span className="text-sky-400">compression</span>
                <span className="text-[var(--color-text-secondary)]">:</span>
                <span className="text-green-400"> &quot;adaptive&quot;</span>
                {"  "}
                <span className="text-[var(--color-text-secondary)]"># Gorilla|Delta|Dictionary|Bitmap|Snappy</span>
                {"\n\n"}
                <span className="text-purple-400">aggregation</span>
                <span className="text-[var(--color-text-secondary)]">:</span>
                {"\n  "}
                <span className="text-sky-400">levels</span>
                <span className="text-[var(--color-text-secondary)]">:</span>
                <span className="text-green-400"> [&quot;1h&quot;, &quot;1d&quot;, &quot;1mo&quot;, &quot;1y&quot;]</span>
                {"  "}
                <span className="text-[var(--color-text-secondary)]"># Pre-compute all 4 levels</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
