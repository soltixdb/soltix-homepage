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

export default function Home() {
  return (
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
  );
}
