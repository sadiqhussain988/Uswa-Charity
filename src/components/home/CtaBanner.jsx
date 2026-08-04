import Button from "../common/Button";

function CtaBanner() {
  return (
    <section className="pb-6 pt-0 sm:mb-6">
      <div className="container-page">
        <div
          className="rounded-2xl bg-forest px-5 py-8 text-cream sm:rounded-3xl sm:px-12 sm:py-12"
          data-aos="zoom-in"
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber sm:text-xs sm:tracking-[0.22em]">
              Get Involved Today
            </p>

            <h2 className="text-hero-title mt-3 text-cream sm:mt-4">
              Support health, education, and hope in communities that need it most.
            </h2>

            <p className="text-hero-body mt-4 text-mint/90 sm:mt-5">
              Whether through direct donations, volunteering your expertise, or forming
              strategic partnerships — your support helps USWA deliver lasting, measurable
              change.
            </p>

            <div className="btn-row-mobile mt-6 flex flex-wrap items-center justify-center gap-3 sm:mt-8">
              <Button to="/donate">Make a Donation</Button>
              <Button to="/contact" variant="secondary">
                Become a Partner
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaBanner;
