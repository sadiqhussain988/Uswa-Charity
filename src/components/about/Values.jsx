import { missionVision } from "../../data/site";
import SectionHeading from "../common/SectionHeading";

function Values() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <SectionHeading
          eyebrow="Our Values"
          title="Principles that guide every program and partnership."
          text="These values shape how USWA serves communities with care, honesty, and lasting impact."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {missionVision.values.map((value, index) => (
            <div
              key={value.title}
              data-aos="fade-up"
              data-aos-delay={index * 80}
              className="rounded-3xl bg-cream p-6 ring-1 ring-line transition duration-300 hover:-translate-y-1 hover:ring-forest/20 sm:p-7"
            >
              <p className="text-hero-brand normal-case tracking-tight text-moss/35">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="text-hero-card mt-2 text-forest">{value.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-ink/70">{value.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Values;
