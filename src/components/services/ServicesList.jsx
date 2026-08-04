import { services } from "../../data/services";
import SectionHeading from "../common/SectionHeading";

function ServicesList() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <SectionHeading
          eyebrow="Our Services"
          title="Sabh kuch — health, education, and complete community support."
          text="USWA delivers a full range of welfare and development services tailored to local needs."
        />

        <div className="space-y-6">
          {services.map((service, index) => (
            <article
              key={service.id}
              id={service.id}
              className="grid gap-4 border-t border-line py-8 md:grid-cols-[140px_1fr] md:gap-10"
            >
              <p className="font-display text-3xl text-moss/50">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div>
                <h3 className="font-display text-3xl text-ink">{service.title}</h3>
                <p className="mt-3 max-w-3xl text-base leading-relaxed text-ink/70">
                  {service.details}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesList;
