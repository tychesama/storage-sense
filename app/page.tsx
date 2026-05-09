import Link from "next/link";
import { comparisons, practices, storageTypes, tools } from "@/data/content";

const audiences = [
  {
    label: "Students",
    title: "Keep school files findable.",
    body: "Separate subjects, protect assignments, and avoid losing projects to one full laptop drive.",
    tone: "border-teal-400 bg-teal-950/45 text-teal-100"
  },
  {
    label: "PC and phone users",
    title: "Clean space without panic.",
    body: "Find large folders, sort downloads, back up photos, and stop guessing which files are safe.",
    tone: "border-slate-400 bg-slate-800/55 text-slate-100"
  },
  {
    label: "Beginner developers",
    title: "Archive work with context.",
    body: "Store code, exports, screenshots, installers, and backups so old projects still make sense later.",
    tone: "border-amber-500 bg-amber-950/50 text-amber-100"
  }
];

const platformCards = [
  {
    eyebrow: "Storage media",
    title: "Know what each device is built to survive.",
    body: "HDDs, SSDs, cloud, flash storage, and discs all fail in different ways. Choose based on the job, not just capacity.",
    href: "/storage-types",
    accent: "bg-sky-500"
  },
  {
    eyebrow: "Cleanup workflow",
    title: "Inspect first. Delete last.",
    body: "Use WizTree, AllDup, DropIt, and VeraCrypt with a safer order: scan, confirm, organize, protect, then remove.",
    href: "/tools",
    accent: "bg-teal-400"
  },
  {
    eyebrow: "Backup habits",
    title: "A backup is useful only after it restores.",
    body: "Use multiple copies, protect cloud accounts, label physical drives, and test files before trusting the plan.",
    href: "/practices",
    accent: "bg-amber-500"
  }
];

export default function HomePage() {
  return (
    <>
      <section className="hero-bg border-b section-line text-bone">
        <div className="mx-auto grid min-h-[78svh] max-w-7xl content-end gap-10 px-4 pb-16 pt-28 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase text-[#8bbcff]">Storage Sense</p>
            <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-none sm:text-6xl lg:text-7xl">
              Storage advice that helps your files <span className="serif-italic font-normal">stay useful.</span>
            </h1>
          </div>
          <div className="self-end lg:pb-3">
            <p className="max-w-xl text-lg leading-8 text-bone/78">
              Compare storage types, clean up drives safely, organize files, encrypt sensitive data, and build backups that still work when something fails.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#storage-types" className="border border-[#8bbcff] bg-[#8bbcff] px-5 py-3 text-sm font-semibold text-[#071424] transition hover:bg-bone">
                Compare storage
              </Link>
              <Link href="#tools" className="border border-bone/50 px-5 py-3 text-sm font-semibold text-bone transition hover:bg-bone hover:text-[#071424]">
                Cleanup workflow
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="comparisons" className="blueprint-bg scroll-mt-24 border-b section-line text-bone">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-xs font-semibold uppercase text-[#8bbcff]">Before and after</p>
              <h2 className="mt-6 max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
                What actually changes <span className="serif-italic font-normal">when storage is managed.</span>
              </h2>
            </div>
            <p className="self-end text-base leading-7 text-bone/70">
              The difference between a pile of devices and a storage system is knowing where files live, how they are protected, and what each copy is for.
            </p>
          </div>

          <div className="mt-12 grid gap-7 lg:grid-cols-2">
            <div className="blueprint-card p-8">
              <h3 className="text-3xl font-semibold">
                <span className="serif-italic font-normal text-red-300">Without</span> Storage Sense
              </h3>
              <ul className="mt-8 grid gap-5 text-sm font-medium text-bone/85">
                {[
                  "Old downloads, photos, and installers pile up without context",
                  "Duplicates get deleted by guessing instead of checking",
                  "Cloud sync is mistaken for a full backup plan",
                  "Flash drives become the only copy of important files",
                  "Passwords and recovery codes are scattered or forgotten",
                  "Old drives are kept without health checks or labels"
                ].map((item) => (
                  <li key={item} className="flex gap-4">
                    <span className="grid h-6 w-6 shrink-0 place-items-center border border-red-400 text-red-300">x</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 border-t border-red-300/30 bg-red-950/30 p-5 font-mono text-xs uppercase text-bone/80">
                Backup confidence - unknown
              </div>
            </div>

            <div className="blueprint-card border-teal-400/60 bg-teal-950/25 p-8">
              <h3 className="text-3xl font-semibold">
                <span className="serif-italic font-normal text-teal-300">With</span> Storage Sense
              </h3>
              <ul className="mt-8 grid gap-5 text-sm font-medium text-bone/90">
                {[
                  "Storage types are chosen by speed, cost, lifespan, and effort",
                  "Large files are found before anything gets deleted",
                  "Duplicates are previewed and moved before permanent removal",
                  "Sensitive files are encrypted with recoverable routines",
                  "Backups use local and off-site copies",
                  "Drives are labeled, stored safely, and checked occasionally"
                ].map((item) => (
                  <li key={item} className="flex gap-4">
                    <span className="grid h-6 w-6 shrink-0 place-items-center border border-teal-300 text-teal-200">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 border-t border-teal-300/30 bg-teal-950/45 p-5 font-mono text-xs uppercase text-bone/80">
                Restore readiness - improving
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="guides" className="blueprint-bg scroll-mt-24 border-b section-line text-bone">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase text-[#8bbcff]">Who it is for</p>
            <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
              Built for people who need files to <span className="serif-italic font-normal">just work.</span>
            </h2>
            <p className="mt-5 text-sm text-bone/68">Three common groups rely on Storage Sense.</p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {audiences.map((item) => (
              <article key={item.label} className={`blueprint-card min-h-[330px] p-7 ${item.tone}`}>
                <div className="grid h-10 w-10 place-items-center border border-current font-mono text-sm">/</div>
                <p className="mt-8 text-sm font-semibold">{item.label}</p>
                <h3 className="mt-4 text-2xl font-semibold leading-tight">{item.title}</h3>
                <p className="mt-6 text-sm leading-6 text-current/80">{item.body}</p>
                <Link href="/guides" className="mt-10 inline-block text-sm font-semibold">
                  Explore guides →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="storage-types" className="blueprint-bg scroll-mt-24 border-b section-line text-bone">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs font-semibold uppercase text-[#8bbcff]">Platform</p>
              <h2 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl">
                One library. <span className="serif-italic font-normal">Clear tradeoffs.</span>
              </h2>
            </div>
            <p className="max-w-xl justify-self-start text-base leading-7 text-bone/70 lg:justify-self-end">
              Most file problems come from using the wrong storage for the wrong job. Start with the device, then choose the cleanup and backup workflow.
            </p>
          </div>

          <div className="mt-12 grid border section-line md:grid-cols-3">
            {platformCards.map((item) => (
              <article key={item.title} className="min-h-[470px] border-b section-line p-6 md:border-b-0 md:border-r md:last:border-r-0">
                <div className="h-40 border border-[#1d4d78]/70 bg-[#0a1a2b]/70" />
                <div className="mt-12">
                  <span className="inline-flex border border-[#8bbcff]/70 bg-[#0d3357] px-3 py-2 text-xs font-semibold text-bone">
                    {item.eyebrow}
                  </span>
                  <h3 className="mt-6 text-2xl font-semibold leading-tight">{item.title}</h3>
                  <p className="mt-5 text-sm leading-6 text-bone/70">{item.body}</p>
                  <Link href={item.href} className="mt-8 inline-block text-sm font-semibold text-[#8bbcff]">
                    Explore →
                  </Link>
                </div>
                <div className={`mt-10 h-2 ${item.accent}`} />
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {storageTypes.map((item) => (
              <Link key={item.slug} href={`/storage-types/${item.slug}`} className="border section-line bg-[#0a1a2b]/70 p-5 text-sm font-semibold text-bone transition hover:border-[#8bbcff]">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="tools" className="blueprint-bg scroll-mt-24 border-b section-line text-bone">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase text-[#8bbcff]">Tool workflow</p>
            <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">
              Clean, deduplicate, organize, and encrypt <span className="serif-italic font-normal">in the right order.</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {tools.map((tool) => (
              <Link key={tool.slug} href={`/tools/${tool.slug}`} className="blueprint-card min-h-[270px] p-6 transition hover:bg-[#0f2944]">
                <p className="font-mono text-xs uppercase text-[#8bbcff]">{tool.name}</p>
                <h3 className="mt-8 text-2xl font-semibold leading-tight">{tool.bestFor[0]}</h3>
                <p className="mt-5 text-sm leading-6 text-bone/70">{tool.purpose}</p>
                <span className="mt-8 inline-block text-sm font-semibold text-[#8bbcff]">Read tutorial →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="practices" className="blueprint-bg scroll-mt-24 text-bone">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase text-[#8bbcff]">Storage habits</p>
            <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">
              A storage setup is only good if it survives <span className="serif-italic font-normal">normal mistakes.</span>
            </h2>
          </div>

          <div className="mt-12 grid border section-line md:grid-cols-3">
            {practices.map((practice) => (
              <article key={practice.title} className="border-b section-line p-7 md:border-b-0 md:border-r md:last:border-r-0">
                <h3 className="text-2xl font-semibold">{practice.title}</h3>
                <p className="mt-5 text-sm leading-6 text-bone/68">{practice.summary}</p>
                <ul className="mt-7 grid gap-3 text-sm text-bone/78">
                  {practice.steps.slice(0, 3).map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-12 grid gap-3 md:grid-cols-5">
            {comparisons.map((item) => (
              <div key={item.title} className="border section-line p-5 text-center">
                <p className="text-xs text-bone/50">{item.title}</p>
                <p className="mt-3 text-lg font-semibold">{item.winner}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
