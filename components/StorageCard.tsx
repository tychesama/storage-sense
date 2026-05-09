import Link from "next/link";
import Image from "next/image";
import type { StorageType } from "@/data/content";

export function StorageCard({ item }: { item: StorageType }) {
  return (
    <Link href={`/storage-types/${item.slug}`} className="group overflow-hidden rounded border border-ink/10 bg-bone transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-48 w-full">
        <Image src={item.image} alt="" fill sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
      </div>
      <div className="p-5">
        <p className="text-sm font-semibold text-moss">{item.shortName}</p>
        <h2 className="mt-2 text-2xl font-semibold text-ink">{item.name}</h2>
        <p className="mt-3 text-sm leading-6 text-ink/70">{item.summary}</p>
      </div>
    </Link>
  );
}
