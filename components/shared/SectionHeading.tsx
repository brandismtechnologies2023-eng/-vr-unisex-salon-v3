interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const alignClasses = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl mb-12 ${alignClasses}`}>
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-wider text-rose-600">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-zinc-900">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-zinc-600">{subtitle}</p>}
    </div>
  );
}
