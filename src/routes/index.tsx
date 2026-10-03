import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDownRight, ArrowRight, Check, Play, Sparkles } from "lucide-react";
import labImage from "@/assets/lp-software-lab.jpg";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "L&P — Build It. Ship It. Let People Use It." },
      {
        name: "description",
        content:
          "L&P is a home for Agentic products. Build with AI, publish our creation, and put it in front of real users.",
      },
      { property: "og:title", content: "L&P — Build It. Ship It. Let People Use It." },
      {
        property: "og:description",
        content: "Build with AI. Publish for real users. Turn our motivations into products.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const pipeline = ["Idea", "Plan", "Build", "Publish", "Users", "Feedback", "V2"];
const feed = [
  "Published a new build",
  "Released v0.3",
  "First user joined",
  "Shipped an AI feature",
];

function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden px-5 py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center font-display text-[28vw] font-bold text-foreground/[0.025]">
          L&P
        </div>
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12">
          <div className="animate-reveal lg:col-span-7">
            <div className="mb-7 inline-flex items-center gap-2 border border-primary/30 bg-accent px-3 py-1 font-mono text-[10px] uppercase text-primary">
              <span className="size-2 rounded-full bg-primary" />
              An Agentic platform
            </div>
            <h1 className="text-6xl font-bold leading-[.9] md:text-8xl">
              Lunar<span className="text-primary"> & </span><span> Pauer`</span>
              <br />
              <span className="text-primary">Agentic</span>
              <br />
              Platform that builds ...
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
              Build with AI. Publish for real users. Turn your experiments into products.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button asChild variant="signal" size="xl">
                <Link to="/publish">
                  Publish your build <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link to="/explore">
                  Explore products <ArrowDownRight />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative lg:col-span-5 lg:translate-x-8">
            <div className="absolute -left-7 -top-7 size-36 border border-primary bg-accent" />
            <div className="relative overflow-hidden rounded-lg border border-foreground bg-foreground p-2 shadow-2xl">
              <img
                src={labImage}
                width={1280}
                height={900}
                alt="A polished software build pipeline moving an app from code to production"
                className="aspect-[4/3] w-full rounded-sm object-cover"
              />
              <div className="flex items-center justify-between px-2 pb-1 pt-3 font-mono text-[9px] uppercase text-background/60">
                <span>Build pipeline / Live</span>
                <span className="text-primary">Ready to ship</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-background px-5">
        <div className="mx-auto flex max-w-7xl flex-wrap">
          {pipeline.map((item, index) => (
            <div
              key={item}
              className="flex min-w-32 flex-1 items-center border-r border-border px-4 py-6 last:border-r-0"
            >
              <span className="mr-3 font-mono text-[9px] text-primary">0{index + 1}</span>
              <span className="font-display text-xs font-bold uppercase">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-[40px] uppercase text-primary">
                Our First Product ...
              </p>
              <h2 className="mt-3 text-4xl font-bold md:text-5xl">Lunar & Pauer Smart TaskManager Desktop Application.</h2>
            </div>
            <Button asChild variant="outline">
              <Link to="/explore">
                View the index <ArrowRight />
              </Link>
            </Button>
          </div>
         <div className="space-y-10">
          {products.map((product, index) => (
            <div key={product.name} className="relative pl-4">
              <div
                aria-hidden="true"
                className="absolute inset-y-3 left-0 w-[3px] bg-gradient-to-b from-black via-black/70 to-transparent"
              />
              <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-foreground lg:grid-cols-[0.8fr_1.2fr]">
      {/* Product Information */}
      <div className="flex flex-col justify-between p-8 lg:p-10">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.25em] text-white/40">
              Product {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <h3 className="text-3xl font-medium tracking-tight text-white">
            {product.name}
          </h3>
          <div aria-hidden="true" className="mt-4 h-1 w-37 bg-primary" />

          <p className="mt-5 max-w-lg text-sm leading-7 text-white/55">
            {product.description}
          </p>

          {product.highlights.length > 0 && (
            <ul className="mt-6 grid gap-3 text-sm text-white/70">
              {product.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                  {highlight}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Actions */}
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={product.downloadUrl} download="l&p_taskmanager.exe"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-white/90"
          >
            <span aria-hidden="true" className="grid size-3 grid-cols-2 gap-[2px]">
              <span className="bg-black" />
              <span className="bg-black" />
              <span className="bg-black" />
              <span className="bg-black" />
            </span>
            Download For Windows
          </a>

          <a
            href={product.documentationUrl}
            className="rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/70 transition hover:border-white/30 hover:text-white"
          >
            Documentation
          </a>
        </div>
      </div>

      {/* Live Demo */}
      <div className="relative min-h-[320px] border-t border-white/10 bg-black/30 lg:min-h-[420px] lg:border-l lg:border-t-0">
        <div className="absolute left-5 top-5 z-10 flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 backdrop-blur">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-400" />
          <span className="text-[10px] uppercase tracking-[0.2em] Ftext-white/60 italic">
            L&P
          </span>
        </div>

        <video
          className="h-full min-h-[320px] w-full object-cover lg:min-h-[420px]"
          src={product.demoVideo}
          autoPlay
          muted
          loop
          playsInline
          controls
        />
      </div>
              </div>
            </div>
  ))}
</div>
        </div>

      </section>

      <section className="bg-foreground px-5 py-24 text-background">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-[10px] uppercase text-primary">L&P manifesto</p>
            <div className="mt-8 h-px w-24 bg-primary" />
          </div>
          <div className="lg:col-span-8">
            <blockquote className="font-display text-4xl font-bold leading-tight md:text-6xl">
              “Vibe coding is not a crime until you publish some real build.”
            </blockquote>
            <p className="mt-10 max-w-xl text-lg text-background/60">
              We’re not here to judge how you built it. We’re here to help you ship it.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="font-mono text-[10px] uppercase text-primary">
                From prototype to product
              </p>
              <h2 className="mt-4 text-5xl font-bold">
                Three steps.
                <br />
                No permission needed.
              </h2>
            </div>
            <div className="grid gap-px border border-border bg-border lg:col-span-7 md:grid-cols-3">
              {[
                ["01", "Build", "AI, code, no-code, caffeine, questionable architecture."],
                ["02", "Publish", "Package your project and put it in front of real people."],
                ["03", "Grow", "Listen, improve the product, and keep shipping."],
              ].map(([n, t, d]) => (
                <div key={n} className="bg-background p-8">
                  <span className="font-mono text-xs text-primary">{n}</span>
                  <h3 className="mt-12 text-2xl font-bold uppercase">{t}</h3>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted px-5 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="font-mono text-[10px] uppercase text-primary">
              Builders building in public
            </p>
            <h2 className="mt-4 text-5xl font-bold">
              A living ecosystem,
              <br />
              one release at a time.
            </h2>
            <p className="mt-6 max-w-lg text-muted-foreground">
              Demo activity shows the kind of momentum L&P is designed to make visible.
            </p>
          </div>
          <div className="border-l-2 border-primary pl-7">
            {feed.map((item, index) => (
              <div key={item} className="flex items-center gap-5 border-b border-border py-5">
                <span className="font-mono text-[9px] text-muted-foreground">
                  {String(14 - index * 2).padStart(2, "0")}:{index % 2 ? "45" : "22"}
                </span>
                <span className="size-2 rounded-full bg-primary" />
                <span className="text-sm">Demo builder {item.toLowerCase()}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="relative aspect-video overflow-hidden rounded-lg border border-foreground bg-foreground text-background">
            <div className="absolute inset-0 math-grid opacity-20" />
            <div className="relative flex h-full flex-col items-center justify-center p-8 text-center">
              <Button
                variant="outline"
                size="icon"
                className="mb-8 size-16 rounded-full border-background/30 bg-background/10 text-background"
              >
                <Play className="ml-1 size-6" />
              </Button>
              <p className="font-mono text-[10px] uppercase text-primary">Future brand film</p>
              <h2 className="mt-4 text-4xl font-bold md:text-6xl">Build something worth using.</h2>
              <p className="mt-5 text-background/60">
                One idea. One build. One real user. Then keep going.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-24">
        <div className="mx-auto grid max-w-7xl border-2 border-primary bg-background p-10 shadow-[8px_8px_0_var(--foreground)] md:grid-cols-[1fr_auto] md:items-center md:p-16">
          <div>
            <Sparkles className="mb-6 text-primary" />
            <h2 className="text-4xl font-bold md:text-6xl">Built something weird?</h2>
            <p className="mt-5 max-w-2xl text-muted-foreground">
              Good. Your first project doesn’t need to be perfect. Publish it, let someone use it,
              learn, then build the next version.
            </p>
          </div>
          <Button asChild variant="signal" size="xl" className="mt-8 md:mt-0">
            <Link to="/publish">
              Start building <Check />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
