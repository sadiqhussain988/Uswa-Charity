import { Link } from "react-router-dom";
import { services } from "../../data/services";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";

function ServicesPreview() {
  return (
    <section className="section-pad bg-mint/60">
      <div className="container-page">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="What We Do"
            title="Integrated services for community wellbeing."
            text="Health, education, surveys, workshops, consultancy, awareness, donations, blood collection — and more."
          />
          <Button to="/services" variant="outline" className="shrink-0 self-start sm:self-auto">
            View All Services
          </Button>
        </div>

        <div className="mt-4 grid gap-px overflow-hidden rounded-2xl bg-line sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.id}
              to="/services"
              className="group bg-cream p-6 transition duration-300 hover:bg-forest hover:text-cream"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-moss group-hover:text-amber">
                Program
              </p>
              <h3 className="mt-3 font-display text-2xl">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/65 group-hover:text-mint/85">
                {service.summary}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesPreview;
