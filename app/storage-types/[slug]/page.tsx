import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { storageTypes } from "@/data/content";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return storageTypes.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const item = storageTypes.find((storage) => storage.slug === params.slug);

  if (!item) {
    return {
      title: "Storage Type"
    };
  }

  return {
    title: item.name,
    description: item.summary
  };
}

export default function StorageTypeDetailPage({ params }: PageProps) {
  const item = storageTypes.find((storage) => storage.slug === params.slug);

  if (!item) {
    notFound();
  }

  return (
    <>
      <section className="bg-ink text-bone">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="self-end">
            <Link href="/storage-types" className="text-sm font-semibold text-bone/60 transition hover:text-bone">
              Storage Types
            </Link>
            <p className="mt-6 text-sm font-semibold uppercase text-bone/60">{item.shortName}</p>
            <h1 className="mt-3 text-5xl font-semibold leading-tight">{item.name}</h1>
            <p className="mt-5 text-lg leading-8 text-bone/75">{item.summary}</p>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded">
            <Image src={item.image} alt="" fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {Object.entries(item.practicality).map(([key, value]) => (
            <div key={key} className="rounded border border-ink/10 bg-bone p-5">
              <p className="text-sm font-semibold capitalize text-moss">{key}</p>
              <p className="mt-3 text-sm leading-6 text-ink/70">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-bone">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <h2 className="text-3xl font-semibold text-ink">Use cases</h2>
            <ul className="mt-6 grid gap-3">
              {item.bestFor.map((entry) => (
                <li key={entry} className="rounded border border-ink/10 bg-paper p-4 text-sm text-ink/75">
                  {entry}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-ink">Things to avoid</h2>
            <ul className="mt-6 grid gap-3">
              {item.avoid.map((entry) => (
                <li key={entry} className="rounded border border-ink/10 bg-paper p-4 text-sm text-ink/75">
                  {entry}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-paper">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded border border-ink/10 bg-bone p-6">
            <h2 className="text-3xl font-semibold text-ink">Strengths</h2>
            <ul className="mt-6 grid gap-3 text-sm leading-6 text-ink/70">
              {item.strengths.map((entry) => (
                <li key={entry}>{entry}</li>
              ))}
            </ul>
          </div>
          <div className="rounded border border-ink/10 bg-bone p-6">
            <h2 className="text-3xl font-semibold text-ink">Weaknesses</h2>
            <ul className="mt-6 grid gap-3 text-sm leading-6 text-ink/70">
              {item.weaknesses.map((entry) => (
                <li key={entry}>{entry}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-bone">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          {item.sections.map((section) => (
            <article key={section.title} className="border-b border-ink/10 py-8 last:border-b-0">
              <h2 className="text-3xl font-semibold text-ink">{section.title}</h2>
              <p className="mt-4 text-base leading-8 text-ink/70">{section.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
