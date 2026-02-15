import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { WhySoltix } from "@/components/why-soltix";
import { Features } from "@/components/features";
import { UseCases } from "@/components/use-cases";
import { Architecture } from "@/components/architecture";
import { Performance } from "@/components/performance";
import { CodeExample } from "@/components/code-example";
import { GetStarted } from "@/components/get-started";
import { Footer } from "@/components/footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "SoltixDB",
      url: "https://soltixdb.com",
      logo: "https://soltixdb.com/logo.png",
      sameAs: ["https://github.com/soltixdb/soltix"],
    },
    {
      "@type": "SoftwareApplication",
      name: "SoltixDB",
      applicationCategory: "Database",
      operatingSystem: "Linux, macOS",
      url: "https://soltixdb.com",
      description:
        "Purpose-built time-series database for solar energy monitoring with pre-computed aggregation, adaptive compression, and sub-100ms queries.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      license: "https://opensource.org/licenses/MIT",
      programmingLanguage: "Go",
      softwareVersion: "0.0.1",
    },
    {
      "@type": "WebSite",
      name: "SoltixDB",
      url: "https://soltixdb.com",
      description:
        "Official website for SoltixDB — a time-series database built for solar energy monitoring.",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <WhySoltix />
        <Features />
        <UseCases />
        <Architecture />
        <Performance />
        <CodeExample />
        <GetStarted />
        <Footer />
      </main>
    </>
  );
}
