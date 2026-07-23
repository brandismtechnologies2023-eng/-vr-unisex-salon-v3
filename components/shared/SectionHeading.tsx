interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  // Pages that lead with this heading need it to be their h1; sections
  // inside a page should stay h2.
  as?: "h1" | "h2";
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  as: Heading = "h2",
}: SectionHeadingProps) {
  const alignClasses = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-6xl mb-12 ${alignClasses}`}>
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-wider text-third">
          {eyebrow}
        </span>
      )}
      <Heading className="mt-2 text-3xl sm:text-4xl font-bold text-secondary">
        {title}
      </Heading>
      {subtitle && <p className="mt-4 text-zinc-600">{subtitle}</p>}
    </div>
  );
}
