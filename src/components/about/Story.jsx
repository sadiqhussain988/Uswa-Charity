import { missionVision, site } from "../../data/site";
import SectionHeading from "../common/SectionHeading";

function Story() {
  return (
    <section className="section-pad">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Our Story"
            title={`${site.name} works where support creates lasting change.`}
            text={site.description}
          />
          <p className="max-w-xl text-base leading-relaxed text-ink/70">
            Across the years documented in our organizational profiles (2013–2019 and 2019–2021),
            USWA has focused on practical community programs — from health and education to surveys,
            workshops, consultancy, awareness sessions, donations, and blood collection.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {missionVision.values.map((value) => (
            <div key={value.title} className="border-t border-line pt-5">
              <h3 className="font-display text-xl text-forest">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{value.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Story;
