import { missionVision } from "../../data/site";
import SectionHeading from "../common/SectionHeading";

function Values() {
  return (
    <section className="py-12">
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
              className="
                rounded-3xl
                bg-cream
                p-6
                shadow-lg
                ring-1
                ring-line
                transition-all
                duration-500
                hover:-translate-y-1
                hover:bg-white
                hover:shadow-2xl
                hover:ring-forest/20
                sm:p-7
              "
            >
              <p className="text-hero-brand normal-case tracking-tight text-moss/35">
                {String(index + 1).padStart(2, "0")}
              </p>

              <h3 className="mt-2 text-hero-card text-forest">
                {value.title}
              </h3>

              <p className="mt-3 text-base leading-relaxed text-ink/70">
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Values;