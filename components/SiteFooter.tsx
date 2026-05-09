import Link from "next/link";
import { navItems } from "@/data/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-bone">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr] lg:px-8">
        <div>
          <p className="text-xl font-semibold">Storage Sense</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-bone/70">
            Practical storage management advice for people who want cleaner files, safer backups, and fewer data loss surprises.
          </p>
          <p className="mt-5 text-sm text-bone/60">Part of joemidpan.com</p>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-bone/70 transition hover:text-bone">
              {item.label}
            </Link>
          ))}
          <Link href="/" className="text-bone/70 transition hover:text-bone">
            Home
          </Link>
        </div>
      </div>
    </footer>
  );
}
