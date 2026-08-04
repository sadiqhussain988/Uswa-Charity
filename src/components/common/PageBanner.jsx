function PageBanner({ title, text, image }) {
  return (
    <section className="relative min-h-[42vh] overflow-hidden bg-forest">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover animate-fade-in"
      />
      <div className="hero-scrim absolute inset-0" />
      <div className="grain absolute inset-0 opacity-40" />
      <div className="container-page relative flex min-h-[42vh] flex-col justify-end pb-12 pt-28">
        <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.24em] text-amber">
          USWA
        </p>
        <h1 className="animate-fade-up animate-delay-1 mt-3 max-w-3xl font-display text-4xl text-cream sm:text-5xl">
          {title}
        </h1>
        {text ? (
          <p className="animate-fade-up animate-delay-2 mt-4 max-w-xl text-base leading-relaxed text-mint/90">
            {text}
          </p>
        ) : null}
      </div>
    </section>
  );
}

export default PageBanner;
