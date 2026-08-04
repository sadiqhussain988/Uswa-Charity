import Button from "../common/Button";

function CtaBanner() {
  return (
    <section className="section-pad pt-0">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-leaf px-8 py-12 text-cream sm:px-12 sm:py-16">
          <div className="absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-amber/20 blur-3xl" />
          <div className="absolute -right-10 top-0 h-40 w-40 rounded-full bg-mint/10 blur-2xl" />
          <div className="relative max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber">
              Get Involved
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">
              Support health, education, and hope in communities that need it most.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-mint/90">
              Whether through donations, volunteering, or partnership — your support helps USWA
              deliver lasting change.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/donate">Make a Donation</Button>
              <Button to="/contact" variant="secondary">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaBanner;
