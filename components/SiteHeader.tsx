import Link from "next/link";
import { navItems } from "@/data/content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-bone/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 font-semibold text-ink">
          <span className="grid h-9 w-9 place-items-center rounded border border-ink bg-ink text-sm text-bone">SS</span>
          <span>Storage Sense</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-ink/70 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/guides" className="rounded border border-ink px-4 py-2 text-sm font-medium text-ink transition hover:bg-ink hover:text-bone">
          Start learning
        </Link>
      </div>
    </header>
  );
}
