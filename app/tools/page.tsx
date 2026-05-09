import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { tools } from "@/data/content";

export const metadata: Metadata = {
  title: "Storage Management Tools",
  description: "One-page tutorials for WizTree, AllDup, DropIt, VeraCrypt, and related alternatives."
};

export default function ToolsPage() {
  return (
    <>
      <section className="blueprint-bg border-b section-line text-bone">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-24 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase text-[#8bbcff]">Tool Workflow</p>
            <h1 className="mt-6 text-5xl font-semibold leading-tight sm:text-6xl">
              Cleanup tools in one <span className="serif-italic font-normal">safe order.</span>
            </h1>
          </div>
          <div className="self-end">
            <p className="max-w-2xl text-base leading-8 text-bone/72">
              These tools solve different storage problems. Start by finding what is taking space, then check duplicates, organize files, and encrypt sensitive data.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {tools.map((tool) => (
                <Link key={tool.slug} href={`#${tool.slug}`} className="flex items-center gap-3 border section-line bg-[#0a1a2b]/70 px-4 py-3 text-sm font-semibold text-bone transition hover:border-[#8bbcff]">
                  <Image src={tool.logo} alt="" width={32} height={32} className="h-8 w-8 bg-bone object-contain p-1" />
                  {tool.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="blueprint-bg text-bone">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {tools.map((tool, index) => (
              <article key={tool.slug} id={tool.slug} className="scroll-mt-28 border section-line bg-[#071424]/78">
                <div className="grid border-b section-line lg:grid-cols-[0.36fr_0.64fr]">
                  <div className="border-b section-line p-7 lg:border-b-0 lg:border-r">
                    <div className="flex items-center gap-4">
                      <Image src={tool.logo} alt="" width={64} height={64} className="h-16 w-16 border border-[#8bbcff]/40 bg-bone object-contain p-1" />
                      <div>
                        <p className="font-mono text-xs uppercase text-[#8bbcff]">{String(index + 1).padStart(2, "0")} / Tool</p>
                        <h2 className="mt-2 text-4xl font-semibold leading-tight">{tool.name}</h2>
                      </div>
                    </div>
                    <p className="mt-6 text-sm leading-7 text-bone/72">{tool.purpose}</p>
                  </div>

                  <div className="grid gap-px bg-[rgba(103,158,216,0.28)] md:grid-cols-3">
                    {tool.bestFor.map((item) => (
                      <div key={item} className="bg-[#071424] p-5">
                        <p className="font-mono text-xs uppercase text-[#8bbcff]">Best for</p>
                        <p className="mt-3 text-sm leading-6 text-bone/72">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-px bg-[rgba(103,158,216,0.28)] lg:grid-cols-[0.62fr_0.38fr]">
                  <div className="bg-[#071424] p-7">
                    <h3 className="text-2xl font-semibold">Step-by-step tutorial</h3>
                    <ol className="mt-6 grid gap-4">
                      {tool.steps.map((step, stepIndex) => (
                        <li key={step} className="grid grid-cols-[2.5rem_1fr] gap-4 text-sm leading-6 text-bone/75">
                          <span className="grid h-9 w-9 place-items-center border border-[#8bbcff]/55 bg-[#0a1a2b] font-mono text-xs text-[#8bbcff]">{stepIndex + 1}</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="grid gap-px bg-[rgba(103,158,216,0.28)]">
                    <div className="bg-[#071424] p-7">
                      <h3 className="text-2xl font-semibold">Mistakes to avoid</h3>
                      <ul className="mt-5 grid gap-3 text-sm leading-6 text-bone/72">
                        {tool.mistakes.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-[#071424] p-7">
                      <h3 className="text-2xl font-semibold">Alternatives</h3>
                      <ul className="mt-5 flex flex-wrap gap-2 text-sm text-bone/75">
                        {tool.alternatives.map((item) => (
                          <li key={item} className="border border-[#8bbcff]/30 bg-[#0a1a2b]/70 px-3 py-1">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
