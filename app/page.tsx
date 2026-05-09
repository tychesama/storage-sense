import Image from "next/image";
import Link from "next/link";
import { comparisons, practices, storageTypes, tools } from "@/data/content";

const reliabilityTopics = [
  {
    label: "Practicality",
    title: "Cost, effort, upkeep.",
    body: "A storage choice is practical when the cost, setup time, maintenance, and daily effort match the value of the files.",
    tone: "border-teal-400 bg-teal-950/45 text-teal-100"
  },
  {
    label: "Storage Space",
    title: "Usable room over time.",
    body: "Capacity matters, but usable space also depends on file growth, duplicate copies, backup versions, and free space for healthy operation.",
    tone: "border-slate-400 bg-slate-800/55 text-slate-100"
  },
  {
    label: "Reliability",
    title: "Failure points and protection.",
    body: "Reliable storage planning accounts for device failure, accidental deletion, lost accounts, damaged media, and missing recovery steps.",
    tone: "border-sky-400 bg-sky-950/45 text-sky-100"
  },
  {
    label: "Efficiency",
    title: "Fast finding and recovery.",
    body: "Efficient storage is organized enough that cleanup, search, transfer, backup, and recovery do not become separate emergencies.",
    tone: "border-amber-500 bg-amber-950/50 text-amber-100"
  }
];

export default function HomePage() {
  return (
    <>
      <section className="hero-bg border-b section-line text-bone">
        <div className="section-content mx-auto grid min-h-[84svh] max-w-7xl content-end gap-12 px-4 pb-24 pt-32 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase text-[#8bbcff]">Made by Joem Idpan</p>
            <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-none sm:text-6xl lg:text-7xl">
              A practical guide to storage, files, and backups.
            </h1>
          </div>
          <div className="self-end lg:pb-3">
            <p className="max-w-xl text-lg leading-8 text-bone/78">
              Learn how storage devices work, how cleanup tools should be used, and how to protect files before something fails.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#storage-types" className="border border-[#8bbcff] bg-[#8bbcff] px-5 py-3 text-sm font-semibold text-[#071424] transition hover:bg-bone">
                Learn storage types
              </Link>
              <Link href="#tools" className="border border-bone/50 px-5 py-3 text-sm font-semibold text-bone transition hover:bg-bone hover:text-[#071424]">
                Learn cleanup tools
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="comparisons" className="blueprint-bg blueprint-glow section-transition scroll-mt-24 border-b section-line text-bone">
        <div className="section-content mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8 xl:py-32">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-xs font-semibold uppercase text-[#8bbcff]">Common situations</p>
              <h2 className="mt-6 max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
                What storage management helps you <span className="serif-italic font-normal">notice.</span>
              </h2>
            </div>
            <p className="self-end text-base leading-7 text-bone/70">
              These examples show how the same files can become easier to understand when copies, devices, and cleanup steps have clear roles.
            </p>
          </div>

          <div className="mt-20 grid gap-10 lg:grid-cols-2">
            <div className="blueprint-card p-8">
              <h3 className="text-3xl font-semibold">
                <span className="serif-italic font-normal text-red-300">Common</span> confusion
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
                Learning check - identify the risk
              </div>
            </div>

            <div className="blueprint-card border-teal-400/60 bg-teal-950/25 p-8">
              <h3 className="text-3xl font-semibold">
                <span className="serif-italic font-normal text-teal-300">Clearer</span> habit
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
                Learning check - explain the safer habit
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="storage-reliability" className="blueprint-bg scroll-mt-24 border-b section-line text-bone">
        <div className="section-content mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8 xl:py-32">
          <div className="text-center">
              <p className="text-xs font-semibold uppercase text-[#8bbcff]">Storage Reliability</p>
              <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
              Reliability has <span className="serif-italic font-normal">four parts.</span>
              </h2>
            <p className="mt-5 text-sm text-bone/68">These four ideas make storage choices easier to compare without guessing.</p>
          </div>

          <div className="mt-20 grid gap-10 md:grid-cols-2 xl:grid-cols-4">
            {reliabilityTopics.map((item) => (
              <article key={item.label} className={`blueprint-card min-h-[330px] p-7 ${item.tone}`}>
                <div className="grid h-10 w-10 place-items-center border border-current font-mono text-sm">/</div>
                <p className="mt-8 text-sm font-semibold">{item.label}</p>
                <h3 className="mt-4 text-2xl font-semibold leading-tight">{item.title}</h3>
                <p className="mt-6 text-sm leading-6 text-current/80">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="storage-types" className="blueprint-bg scroll-mt-24 border-b section-line text-bone">
        <div className="section-content mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8 xl:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs font-semibold uppercase text-[#8bbcff]">Types of Storage</p>
              <h2 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl">
                Learn each storage type <span className="serif-italic font-normal">by role.</span>
              </h2>
            </div>
            <p className="max-w-xl justify-self-start text-base leading-7 text-bone/70 lg:justify-self-end">
              Each device has different limits for speed, space, lifespan, price, and care. Start with the type, then compare the tradeoffs.
            </p>
          </div>

          <div className="mt-20 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {storageTypes.map((item) => (
              <article key={item.slug} className="blueprint-card min-h-[300px] p-6">
                <p className="font-mono text-xs uppercase text-[#8bbcff]">{item.shortName}</p>
                <h3 className="mt-6 text-2xl font-semibold leading-tight">{item.name}</h3>
                <p className="mt-5 text-sm leading-6 text-bone/70">{item.summary}</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {item.bestFor.slice(0, 2).map((useCase) => (
                    <span key={useCase} className="border border-[#8bbcff]/30 bg-[#0a1a2b]/70 px-3 py-1 text-xs text-bone/75">
                      {useCase}
                    </span>
                  ))}
                </div>
                <Link href={`/storage-types#${item.slug}`} className="mt-8 inline-block text-sm font-semibold text-[#8bbcff]">
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="tools" className="blueprint-bg scroll-mt-24 border-b section-line text-bone">
        <div className="section-content mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8 xl:py-32">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase text-[#8bbcff]">Tool workflow</p>
            <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">
              Learn the purpose of each cleanup tool <span className="serif-italic font-normal">before using it.</span>
            </h2>
          </div>
          <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {tools.map((tool) => (
              <Link key={tool.slug} href={`/tools#${tool.slug}`} className="blueprint-card min-h-[360px] p-7 transition hover:bg-[#0f2944]">
                <div className="flex items-center gap-4">
                  <Image src={tool.logo} alt="" width={56} height={56} className="h-14 w-14 border border-[#8bbcff]/40 bg-bone object-contain p-1" />
                  <div>
                    <p className="font-mono text-xs uppercase text-[#8bbcff]">{tool.name}</p>
                    <p className="mt-1 text-xs text-bone/55">{tool.bestFor[0]}</p>
                  </div>
                </div>
                <h3 className="mt-10 text-3xl font-semibold leading-tight">{tool.name}</h3>
                <p className="mt-5 text-sm leading-7 text-bone/70">{tool.purpose}</p>
                <span className="mt-10 inline-block text-sm font-semibold text-[#8bbcff]">Read tutorial →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="practices" className="blueprint-bg scroll-mt-24 text-bone">
        <div className="section-content mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8 xl:py-32">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase text-[#8bbcff]">Storage habits</p>
            <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">
              Good storage habits are easier when the reason is <span className="serif-italic font-normal">clear.</span>
            </h2>
          </div>

          <div className="mt-20 grid border section-line md:grid-cols-3">
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

          <div className="mt-20 grid gap-4 md:grid-cols-5">
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
