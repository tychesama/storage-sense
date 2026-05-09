import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase text-moss">Page not found</p>
        <h1 className="mt-4 text-5xl font-semibold text-ink">This storage shelf is empty.</h1>
        <p className="mt-5 text-ink/70">The page may have moved, or the guide has not been created yet.</p>
        <Link href="/" className="mt-8 inline-block rounded bg-ink px-5 py-3 text-sm font-semibold text-bone">
          Go home
        </Link>
      </div>
    </section>
  );
}
