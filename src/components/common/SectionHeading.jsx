function SectionHeading({ eyebrow, title, text, light = false, align = "left" }) {
  const alignClass =
    align === "center" ? "mx-auto text-center items-center" : "items-start text-left";

  return (
    <div className={`mb-10 flex max-w-2xl flex-col gap-3 ${alignClass}`}>
      {eyebrow ? (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.22em] ${
            light ? "text-amber" : "text-moss"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-display text-3xl leading-tight sm:text-4xl ${
          light ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {text ? (
        <p className={`text-base leading-relaxed ${light ? "text-mint/90" : "text-ink/70"}`}>
          {text}
        </p>
      ) : null}
    </div>
  );
}

export default SectionHeading;
