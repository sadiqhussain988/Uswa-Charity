import { missionVision } from "../../data/site";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";

function MissionStrip() {
  return (
    <section className="section-pad">
      <div className="container-page grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionHeading
            eyebrow="Who We Are"
            title="A welfare organization rooted in service and community trust."
            text={missionVision.mission}
          />
          <Button to="/about" variant="dark">
            Learn About USWA
          </Button>
        </div>
        <div className="relative overflow-hidden rounded-2xl bg-forest p-8 text-cream sm:p-10">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-moss/30 blur-2xl" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber">Our Vision</p>
          <p className="relative mt-4 font-display text-2xl leading-snug sm:text-3xl">
            {missionVision.vision}
          </p>
        </div>
      </div>
    </section>
  );
}

export default MissionStrip;
