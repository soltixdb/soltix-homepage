# SoltixDB Homepage

The official homepage for [SoltixDB](https://github.com/soltixdb/soltix) — a high-performance distributed time-series database built for solar energy monitoring.

🌐 **Live**: [soltixdb.com](https://soltixdb.com)

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **React**: v19
- **Theme**: Dark / Light / System auto-detection

## Sections

| Section | Component | Description |
|---|---|---|
| Navbar | `navbar.tsx` | Fixed nav with logo, links, and theme toggle |
| Hero | `hero.tsx` | Headline, CTA buttons, install command, stats |
| Why Soltix | `why-soltix.tsx` | Comparison vs traditional TSDBs + benefit cards |
| Features | `features.tsx` | Feature grid grouped by category |
| Use Cases | `use-cases.tsx` | Solar, IIoT, IoT, Energy & Utilities |
| Architecture | `architecture.tsx` | ASCII diagram + storage engine details |
| Performance | `performance.tsx` | Benchmark bars + aggregation levels |
| Code Example | `code-example.tsx` | REST API write/query examples + config YAML |
| Get Started | `get-started.tsx` | 4-step quickstart guide |
| Footer | `footer.tsx` | Links, branding, copyright |

## Getting Started

```bash
# Clone
git clone https://github.com/soltixdb/soltix-homepage.git
cd soltix-homepage

# Install dependencies
npm install

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css        # Theme variables & utilities
│   ├── layout.tsx         # Root layout with ThemeProvider
│   └── page.tsx           # Main page composing all sections
├── components/
│   ├── theme-provider.tsx # Dark/Light/System theme context
│   ├── navbar.tsx
│   ├── hero.tsx
│   ├── why-soltix.tsx
│   ├── features.tsx
│   ├── use-cases.tsx
│   ├── architecture.tsx
│   ├── performance.tsx
│   ├── code-example.tsx
│   ├── get-started.tsx
│   └── footer.tsx
public/
├── logo.png               # SoltixDB logo
└── favicon.ico
```

## Theme Support

The site supports three theme modes:

- **Dark** — Default dark theme
- **Light** — Light theme with dark code blocks for readability
- **System** — Auto-follows OS preference (`prefers-color-scheme`)

Theme preference is persisted in `localStorage` and applied before first paint to prevent flash.

## License

MIT — see the main [SoltixDB repository](https://github.com/soltixdb/soltix) for details.
