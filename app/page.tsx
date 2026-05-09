import Link from "next/link";
import { comparisons, practices, storageTypes, tools } from "@/data/content";
import { StorageCard } from "@/components/StorageCard";
import { ToolCard } from "@/components/ToolCard";

export default function HomePage() {
  return (
    <>
      <section className="hero-bg min-h-[78svh] border-b border-ink bg-ink text-bone">
        <div className="mx-auto flex max-w-7xl flex-col justify-end px-4 pb-14 pt-28 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase text-bone/70">Storage Sense</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-none sm:text-6xl lg:text-7xl">
            Choose better storage, clean files safely, and keep backups that actually help.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-bone/75">
            A practical reference for HDDs, SSDs, cloud storage, flash drives, cleanup tools, encryption, and data loss prevention.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/storage-types" className="rounded bg-bone px-5 py-3 text-sm font-semibold text-ink transition hover:bg-steel">
              Compare storage types
            </Link>
            <Link href="/tools" className="rounded border border-bone/60 px-5 py-3 text-sm font-semibold text-bone transition hover:bg-bone hover:text-ink">
              Learn cleanup tools
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
          {[
            ["Storage types", "Understand HDDs, SSDs, cloud, flash media, discs, and legacy devices.", "/storage-types"],
            ["Management tools", "Use WizTree, AllDup, DropIt, and VeraCrypt with safer workflows.", "/tools"],
            ["Storage practices", "Build backups, protect accounts, and store physical devices correctly.", "/practices"]
          ].map(([title, body, href]) => (
            <Link key={href} href={href} className="rounded border border-ink/10 bg-bone p-6 transition hover:-translate-y-1 hover:shadow-xl">
              <h2 className="text-2xl font-semibold text-ink">{title}</h2>
              <p className="mt-4 text-sm leading-6 text-ink/70">{body}</p>
              <span className="mt-6 inline-block text-sm font-semibold text-moss">Open section</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-bone">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase text-moss">Reference Library</p>
              <h2 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight text-ink">Start with the storage device, then choose the workflow.</h2>
            </div>
            <Link href="/storage-types" className="rounded border border-ink px-5 py-3 text-sm font-semibold text-ink transition hover:bg-ink hover:text-bone">
              View all types
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {storageTypes.slice(0, 6).map((item) => (
              <StorageCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-ink text-bone">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase text-bone/60">Quick chooser</p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight">Match the storage to the job.</h2>
            <p className="mt-5 text-sm leading-6 text-bone/70">
              The right choice depends on the file, the risk, and how often you need access. These rules handle most beginner storage decisions.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {comparisons.map((item) => (
              <div key={item.title} className="rounded border border-bone/15 bg-bone/5 p-5">
                <p className="text-sm text-bone/60">{item.title}</p>
                <h3 className="mt-2 text-2xl font-semibold">{item.winner}</h3>
                <p className="mt-3 text-sm leading-6 text-bone/70">{item.reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-moss">Tool workflow</p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight text-ink">Clean up before you delete, organize before you archive.</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {tools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase text-moss">Storage habits</p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight text-ink">Good storage is a routine, not one perfect device.</h2>
            <p className="mt-5 text-sm leading-6 text-ink/70">
              Hardware fails, accounts get locked, and files get deleted by accident. These routines reduce the damage.
            </p>
          </div>
          <div className="grid gap-4">
            {practices.map((practice) => (
              <div key={practice.title} className="rounded border border-ink/10 bg-paper p-6">
                <h3 className="text-2xl font-semibold text-ink">{practice.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/70">{practice.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
