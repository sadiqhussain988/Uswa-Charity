function PageBanner({ title, text, image }) {
  return (
    <section  className="relative min-h-[48vh] overflow-hidden bg-forest sm:min-h-[42vh]">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover animate-fade-in"
      />
      <div className="hero-scrim absolute inset-0" />
      <div className="grain absolute inset-0 opacity-40" />
      <div className="container-page relative flex min-h-[36vh] flex-col justify-end pb-8 pt-24 sm:min-h-[42vh] sm:pb-12 sm:pt-28">
        <p
          data-aos="fade-up"
          className="text-[11px] font-semibold uppercase tracking-[0.22em] text-amber sm:text-xs sm:tracking-[0.24em]"
        >
          USWA
        </p>
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-hero-title mt-2 max-w-3xl text-cream sm:mt-3"
        >
          {title}
        </h1>
        {text ? (
          <p
            data-aos="fade-up"
            data-aos-delay="180"
            className="text-hero-body mt-3 max-w-xl text-mint/90 sm:mt-4"
          >
            {text}
          </p>
        ) : null}
      </div>
    </section>
  );
}

export default PageBanner;
