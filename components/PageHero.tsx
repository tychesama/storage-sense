type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-ink/10 bg-paper">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase text-moss">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-ink sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/70">{description}</p>
      </div>
    </section>
  );
}
