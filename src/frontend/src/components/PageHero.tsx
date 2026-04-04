interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-islamic-green islamic-pattern">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-white">{title}</h1>
        {subtitle && (
          <p className="mt-3 text-green-100 text-sm sm:text-base max-w-lg mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
