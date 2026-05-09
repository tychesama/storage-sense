import Link from "next/link";
import { navItems } from "@/data/content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b section-line bg-[#071424]/92 text-bone backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-semibold text-bone" aria-label="Storage Sense home">
          <span className="grid h-9 w-9 place-items-center border border-[#8bbcff] bg-[#0b2138] text-sm text-bone">SS</span>
          <span className="hidden border border-[#8bbcff]/80 px-3 py-2 text-sm leading-none sm:inline-block">
            Storage<span className="text-[#8bbcff]">Sense</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-bone/78 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-bone">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="https://portfolio.joemidpan.com"
          className="border border-[#8bbcff] px-4 py-2 text-sm font-medium text-bone transition hover:bg-[#8bbcff] hover:text-[#071424]"
        >
          Contact Me
        </Link>
      </div>
    </header>
  );
}
