function SectionHeading({
  eyebrow,
  title,
  text,
  light = false,
  align = "left",
  aos = "fade-up",
}) {
  const alignClass =
    align === "center" ? "mx-auto text-center items-center" : "items-start text-left";

  return (
    <div
      className={`mb-6 flex max-w-3xl flex-col gap-2 sm:mb-10 sm:gap-3 ${alignClass}`}
      data-aos={aos}
    >
      {eyebrow ? (
        <p
          className={`text-[11px] font-semibold uppercase tracking-[0.18em] sm:text-xs sm:tracking-[0.22em] ${
            light ? "text-amber" : "text-moss"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`text-hero-title ${light ? "text-cream" : "text-ink"}`}>
        {title}
      </h2>
      {text ? (
        <p className={`text-hero-body ${light ? "text-mint/90" : "text-ink/70"}`}>
          {text}
        </p>
      ) : null}
    </div>
  );
}

export default SectionHeading;
