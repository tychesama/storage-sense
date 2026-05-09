import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ToolCard } from "@/components/ToolCard";
import { tools } from "@/data/content";

export const metadata: Metadata = {
  title: "Storage Management Tools",
  description: "Step-by-step tutorials for WizTree, AllDup, DropIt, VeraCrypt, and related alternatives."
};

export default function ToolsPage() {
  return (
    <>
      <PageHero
        eyebrow="Storage Management Tools"
        title="Use tools to inspect first, then clean, organize, and protect files safely."
        description="Storage cleanup should be deliberate. These guides focus on avoiding accidental deletion while still making real space and order."
      />
      <section className="bg-bone">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 py-16 sm:px-6 md:grid-cols-2 xl:grid-cols-4 lg:px-8">
          {tools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>
    </>
  );
}
