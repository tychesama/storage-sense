import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { guideIdeas } from "@/data/content";

export const metadata: Metadata = {
  title: "Guides",
  description: "Planned practical storage guides for cleaning drives, organizing files, and protecting data."
};

export default function GuidesPage() {
  return (
    <>
      <PageHero
        eyebrow="Guides"
        title="Practical articles for common storage problems."
        description="These guide topics are the next layer of the site: short, direct walkthroughs for real cleanup and backup tasks."
      />
      <section className="bg-bone">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 py-16 sm:px-6 md:grid-cols-2 lg:px-8">
          {guideIdeas.map((guide) => (
            <article key={guide} className="rounded border border-ink/10 bg-paper p-6">
              <p className="text-sm font-semibold text-moss">Planned guide</p>
              <h2 className="mt-3 text-2xl font-semibold text-ink">{guide}</h2>
              <p className="mt-4 text-sm leading-6 text-ink/70">
                This topic should become a focused article with steps, warnings, and links to the relevant storage or tool page.
              </p>
            </article>
          ))}
        </div>
      </section>
      <section className="border-t border-ink/10 bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-semibold text-ink">Suggested article format</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {["Problem", "Before you start", "Steps", "Check your result"].map((item) => (
              <div key={item} className="rounded border border-ink/10 bg-bone p-5">
                <h3 className="text-xl font-semibold text-ink">{item}</h3>
              </div>
            ))}
          </div>
          <Link href="/tools" className="mt-8 inline-block rounded bg-ink px-5 py-3 text-sm font-semibold text-bone">
            See tool tutorials
          </Link>
        </div>
      </section>
    </>
  );
}
