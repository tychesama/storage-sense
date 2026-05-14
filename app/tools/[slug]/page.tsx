import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ImageLightbox } from "@/components/ImageLightbox";
import { tools } from "@/data/content";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const tool = tools.find((item) => item.slug === params.slug);

  if (!tool) {
    return {
      title: "Tool Guide"
    };
  }

  return {
    title: tool.name,
    description: tool.purpose
  };
}

export default function ToolDetailPage({ params }: PageProps) {
  const tool = tools.find((item) => item.slug === params.slug);

  if (!tool) {
    notFound();
  }

  return (
    <>
      <section className="bg-ink text-bone">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="self-end">
            <Link href="/tools" className="text-sm font-semibold text-bone/60 transition hover:text-bone">
              Storage Management Tools
            </Link>
            <div className="mt-8 flex items-center gap-4">
              <Image src={tool.logo} alt="" width={56} height={56} className="h-14 w-14 rounded border border-bone/15 bg-bone object-contain p-1" />
              <p className="text-sm font-semibold uppercase text-bone/60">Step-by-step tutorial</p>
            </div>
            <h1 className="mt-5 text-5xl font-semibold leading-tight">{tool.name}</h1>
            <p className="mt-5 text-lg leading-8 text-bone/75">{tool.purpose}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={tool.officialUrl} target="_blank" rel="noreferrer" className="rounded border border-bone/20 bg-bone px-4 py-2 text-sm font-semibold text-ink transition hover:bg-paper">
                Official page
              </Link>
              {tool.wikiUrl ? (
                <Link href={tool.wikiUrl} target="_blank" rel="noreferrer" className="rounded border border-bone/20 px-4 py-2 text-sm font-semibold text-bone transition hover:bg-bone hover:text-ink">
                  Wikipedia
                </Link>
              ) : null}
            </div>
          </div>
          <ImageLightbox src={tool.image} alt={`${tool.name} preview`} />
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <aside className="rounded border border-ink/10 bg-bone p-6">
            <h2 className="text-2xl font-semibold text-ink">Best for</h2>
            <ul className="mt-5 grid gap-3 text-sm text-ink/70">
              {tool.bestFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
          <div className="rounded border border-ink/10 bg-bone p-6">
            <h2 className="text-3xl font-semibold text-ink">Tutorial</h2>
            <ol className="mt-6 grid gap-4">
              {tool.steps.map((step, index) => (
                <li key={step} className="grid grid-cols-[2.5rem_1fr] gap-4 text-sm leading-6 text-ink/75">
                  <span className="grid h-9 w-9 place-items-center rounded bg-ink text-bone">{index + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-bone">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded border border-ink/10 bg-paper p-6">
            <h2 className="text-3xl font-semibold text-ink">Mistakes to avoid</h2>
            <ul className="mt-6 grid gap-3 text-sm leading-6 text-ink/70">
              {tool.mistakes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded border border-ink/10 bg-paper p-6">
            <h2 className="text-3xl font-semibold text-ink">Alternatives</h2>
            <ul className="mt-6 grid gap-3 text-sm leading-6 text-ink/70">
              {tool.alternatives.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} target="_blank" rel="noreferrer" className="underline decoration-ink/25 underline-offset-4 hover:decoration-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
