import { services } from "../../data/services";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";
import ServiceCard from "../services/ServiceCard";

function ServicesPreview() {
  return (
    <section className="py-12 bg-mint/40">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Our Services"
            title="Empowering communities through meaningful services."
            text="Health, education, surveys, workshops, consultancy, awareness, donations, blood collection, and more — click a card to explore."
          />
          <Button to="/services" variant="outline" className="shrink-0">
            View All Services
          </Button>
        </div>

        <div className="mt-2 grid gap-4 sm:mt-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesPreview;
