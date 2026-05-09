import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { comparisons, storageTypes } from "@/data/content";

export const metadata: Metadata = {
  title: "Storage Comparisons",
  description: "Choose storage by price, speed, capacity, lifespan, reliability, and effort."
};

const comparisonRows = [
  ["Lowest cost per TB", "HDD", "Cloud for small plans", "SSD", "Flash drive"],
  ["Fastest daily use", "NVMe SSD", "External SSD", "SATA SSD", "HDD"],
  ["Best off-site protection", "Cloud", "External drive stored elsewhere", "NAS", "Single local drive"],
  ["Lowest effort", "Cloud sync", "External SSD", "External HDD", "Optical discs"],
  ["Best for long archives", "HDD plus cloud", "NAS plus cloud", "Optical discs for small sets", "Single flash drive"]
];

export default function ComparisonsPage() {
  return (
    <>
      <PageHero
        eyebrow="Comparisons"
        title="Choose storage by the job, not by the biggest number on the box."
        description="Speed, price, lifespan, space, and effort matter in different ways. Use this page to make practical tradeoffs."
      />

      <section className="bg-bone">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {comparisons.map((item) => (
              <div key={item.title} className="rounded border border-ink/10 bg-paper p-6">
                <p className="text-sm font-semibold text-moss">{item.title}</p>
                <h2 className="mt-3 text-3xl font-semibold text-ink">{item.winner}</h2>
                <p className="mt-4 text-sm leading-6 text-ink/70">{item.reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-semibold text-ink">Practical ranking</h2>
          <div className="mt-8 overflow-x-auto rounded border border-ink/10">
            <table className="w-full min-w-[760px] border-collapse bg-bone text-left text-sm">
              <thead className="bg-ink text-bone">
                <tr>
                  <th className="p-4 font-semibold">Need</th>
                  <th className="p-4 font-semibold">Best</th>
                  <th className="p-4 font-semibold">Good</th>
                  <th className="p-4 font-semibold">Okay</th>
                  <th className="p-4 font-semibold">Weak</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row[0]} className="border-b border-ink/10 last:border-b-0">
                    {row.map((cell) => (
                      <td key={cell} className="p-4 text-ink/75">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-bone">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-semibold text-ink">Read the device guides</h2>
          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {storageTypes.map((item) => (
              <Link key={item.slug} href={`/storage-types/${item.slug}`} className="rounded border border-ink/10 bg-paper p-5 text-sm font-semibold text-ink transition hover:bg-steel">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
