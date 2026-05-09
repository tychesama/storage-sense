import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { StorageCard } from "@/components/StorageCard";
import { storageTypes } from "@/data/content";

export const metadata: Metadata = {
  title: "Storage Types",
  description: "Compare HDDs, SSDs, cloud storage, flash drives, SD cards, optical discs, and legacy storage."
};

export default function StorageTypesPage() {
  return (
    <>
      <PageHero
        eyebrow="Storage Types"
        title="Understand what each storage device is good at before trusting it with important files."
        description="Every storage type has a job. Some are fast, some are cheap, some are portable, and some are best kept as a second or third copy."
      />
      <section className="bg-bone">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 py-16 sm:px-6 md:grid-cols-2 xl:grid-cols-3 lg:px-8">
          {storageTypes.map((item) => (
            <StorageCard key={item.slug} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}
