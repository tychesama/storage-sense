import type { Metadata } from "next";
import Link from "next/link";
import { storageTypes } from "@/data/content";

export const metadata: Metadata = {
  title: "Types of Storage",
  description: "Learn HDDs, SSDs, cloud storage, flash drives, SD cards, optical discs, and legacy storage in one reference page."
};

export default function StorageTypesPage() {
  return (
    <>
      <section className="blueprint-bg border-b section-line text-bone">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-24 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase text-[#8bbcff]">Types of Storage</p>
            <h1 className="mt-6 text-5xl font-semibold leading-tight sm:text-6xl">
              Storage media, explained by <span className="serif-italic font-normal">use and risk.</span>
            </h1>
          </div>
          <div className="self-end">
            <p className="max-w-2xl text-base leading-8 text-bone/72">
              This page lists the main storage types in one place. Use it as a reference for what each type is good at, what can go wrong, and what to avoid.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {storageTypes.map((item) => (
                <Link key={item.slug} href={`#${item.slug}`} className="border section-line bg-[#0a1a2b]/70 px-4 py-3 text-sm font-semibold text-bone transition hover:border-[#8bbcff]">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="blueprint-bg text-bone">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {storageTypes.map((item, index) => (
              <article key={item.slug} id={item.slug} className="scroll-mt-28 border section-line bg-[#071424]/78">
                <div className="grid border-b section-line lg:grid-cols-[0.38fr_0.62fr]">
                  <div className="border-b section-line p-7 lg:border-b-0 lg:border-r">
                    <p className="font-mono text-xs uppercase text-[#8bbcff]">
                      {String(index + 1).padStart(2, "0")} / {item.shortName}
                    </p>
                    <h2 className="mt-5 text-4xl font-semibold leading-tight">{item.name}</h2>
                    <p className="mt-5 text-sm leading-7 text-bone/70">{item.summary}</p>
                    <Link href={`/storage-types/${item.slug}`} className="mt-7 inline-block text-sm font-semibold text-[#8bbcff]">
                      Open focused guide →
                    </Link>
                  </div>

                  <div className="grid gap-px bg-[rgba(103,158,216,0.28)] md:grid-cols-5">
                    {Object.entries(item.practicality).map(([key, value]) => (
                      <div key={key} className="bg-[#071424] p-5">
                        <p className="font-mono text-xs uppercase text-[#8bbcff]">{key}</p>
                        <p className="mt-3 text-sm leading-6 text-bone/68">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-px bg-[rgba(103,158,216,0.28)] lg:grid-cols-2">
                  <div className="bg-[#071424] p-7">
                    <h3 className="text-2xl font-semibold">Good use cases</h3>
                    <ul className="mt-5 grid gap-3 text-sm leading-6 text-bone/72">
                      {item.bestFor.map((entry) => (
                        <li key={entry}>{entry}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-[#071424] p-7">
                    <h3 className="text-2xl font-semibold">Things to avoid</h3>
                    <ul className="mt-5 grid gap-3 text-sm leading-6 text-bone/72">
                      {item.avoid.map((entry) => (
                        <li key={entry}>{entry}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="grid gap-px bg-[rgba(103,158,216,0.28)] lg:grid-cols-2">
                  <div className="bg-[#071424] p-7">
                    <h3 className="text-2xl font-semibold">Strengths</h3>
                    <ul className="mt-5 grid gap-3 text-sm leading-6 text-bone/72">
                      {item.strengths.map((entry) => (
                        <li key={entry}>{entry}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-[#071424] p-7">
                    <h3 className="text-2xl font-semibold">Weaknesses</h3>
                    <ul className="mt-5 grid gap-3 text-sm leading-6 text-bone/72">
                      {item.weaknesses.map((entry) => (
                        <li key={entry}>{entry}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="grid gap-px bg-[rgba(103,158,216,0.28)] lg:grid-cols-2">
                  {item.sections.map((section) => (
                    <div key={section.title} className="bg-[#071424] p-7">
                      <h3 className="text-2xl font-semibold">{section.title}</h3>
                      <p className="mt-5 text-sm leading-7 text-bone/72">{section.body}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
