import Link from "next/link";
import Image from "next/image";
import type { ToolGuide } from "@/data/content";

export function ToolCard({ tool }: { tool: ToolGuide }) {
  return (
    <Link href={`/tools#${tool.slug}`} className="group flex h-full flex-col rounded border border-ink/10 bg-bone p-5 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-center gap-4">
        <Image src={tool.logo} alt="" width={48} height={48} className="h-12 w-12 rounded border border-ink/10 object-contain" />
        <div>
          <h2 className="text-2xl font-semibold text-ink">{tool.name}</h2>
          <p className="text-sm text-moss">{tool.bestFor[0]}</p>
        </div>
      </div>
      <p className="mt-5 text-sm leading-6 text-ink/70">{tool.purpose}</p>
      <span className="mt-auto pt-5 text-sm font-semibold text-ink">Read tutorial</span>
    </Link>
  );
}
