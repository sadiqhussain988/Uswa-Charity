import { missionVision } from "../../data/site";

function MissionVision() {
  return (
    <section className="section-pad bg-mint/40 pt-0">
      <div className="container-page grid gap-5 lg:grid-cols-2">
        <div className="rounded-3xl bg-forest p-8 text-cream sm:p-10" data-aos="fade-right">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber">
            Our Mission
          </p>
          <h2 className="text-hero-title mt-4 text-cream">Why we exist</h2>
          <p className="text-hero-body mt-5 text-mint/90">{missionVision.mission}</p>
        </div>

        <div className="rounded-3xl bg-cream p-8 ring-1 ring-line sm:p-10" data-aos="fade-left">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-moss">
            Our Vision
          </p>
          <h2 className="text-hero-title mt-4 text-ink">Where we are headed</h2>
          <p className="text-hero-body mt-5 text-ink/70">{missionVision.vision}</p>
        </div>
      </div>
    </section>
  );
}

export default MissionVision;
