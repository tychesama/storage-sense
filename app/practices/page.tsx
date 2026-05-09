import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { practices } from "@/data/content";

export const metadata: Metadata = {
  title: "Storage Practices",
  description: "Simple routines for backups, cloud account safety, and physical storage care."
};

export default function PracticesPage() {
  return (
    <>
      <PageHero
        eyebrow="Storage Practices"
        title="Avoid data loss with simple routines that do not depend on one perfect device."
        description="Good storage management is mostly about copies, labels, passwords, and checking that your files still open."
      />
      <section className="bg-bone">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 lg:px-8">
          {practices.map((practice) => (
            <article key={practice.title} className="rounded border border-ink/10 bg-paper p-6">
              <h2 className="text-3xl font-semibold text-ink">{practice.title}</h2>
              <p className="mt-4 max-w-3xl text-sm leading-6 text-ink/70">{practice.summary}</p>
              <ol className="mt-6 grid gap-4 md:grid-cols-2">
                {practice.steps.map((step, index) => (
                  <li key={step} className="grid grid-cols-[2.5rem_1fr] gap-4 text-sm leading-6 text-ink/75">
                    <span className="grid h-9 w-9 place-items-center rounded bg-ink text-bone">{index + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
