import { Link } from "react-router-dom";
import Button from "../common/Button";
import ServiceCard from "./ServiceCard";
import { getServiceImage } from "../../utils/serviceImages";

const processSteps = [
  {
    title: "Assess Needs",
    text: "We listen to communities and identify the most urgent local priorities.",
  },
  {
    title: "Design Support",
    text: "Programs are planned with practical steps, partners, and clear outcomes.",
  },
  {
    title: "Deliver Impact",
    text: "We implement on-ground support and stay accountable to community results.",
  },
];

function ServiceDetail({ service, related = [] }) {
  const imageSrc = getServiceImage(service);

  return (
    <>
      <section className="relative min-h-[48vh] overflow-hidden bg-forest sm:min-h-[58vh]">
        <img
          src={imageSrc}
          alt={service.title}
          className="absolute inset-0 h-full w-full scale-105 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/85 to-forest/35" />

        <div className="container-page relative flex min-h-[48vh] flex-col justify-end pb-8 pt-24 sm:min-h-[58vh] sm:pb-14 sm:pt-28">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-xs text-mint/85 sm:mb-5 sm:gap-3 sm:text-sm">
            <Link to="/" className="transition hover:text-amber">
              Home
            </Link>
            <span>/</span>
            <Link to="/services" className="transition hover:text-amber">
              Services
            </Link>
            <span>/</span>
            <span className="text-amber">{service.title}</span>
          </div>

          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber sm:text-xs sm:tracking-[0.22em]">
            {service.category}
          </p>
          <h1 className="text-hero-title mt-2 max-w-3xl text-cream sm:mt-3">{service.title}</h1>
          <p className="text-hero-body mt-3 max-w-2xl text-mint/90 sm:mt-4">{service.summary}</p>

          <div className="btn-row-mobile mt-6 flex max-w-md flex-wrap gap-3 sm:mt-8 sm:max-w-none">
            <Button to="/donate">Support This Work</Button>
            <Button to="/contact" variant="secondary">
              Partner With Us
            </Button>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div data-aos="fade-right">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-moss">
              About This Service
            </p>
            <h2 className="text-hero-title mt-3 text-ink">
              How USWA delivers {service.title.toLowerCase()} support.
            </h2>
            <p className="text-hero-body mt-5 text-ink/70">{service.details}</p>

            <div className="mt-10 overflow-hidden rounded-3xl">
              <img
                src={imageSrc}
                alt={`${service.title} program`}
                className="h-64 w-full object-cover sm:h-80"
              />
            </div>
          </div>

          <aside className="space-y-6" data-aos="fade-left">
            <div className="rounded-3xl bg-forest p-7 text-cream sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber">
                What We Offer
              </p>
              <ul className="mt-6 space-y-4">
                {(service.highlights || []).map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber text-xs font-bold text-ink">
                      ✓
                    </span>
                    <span className="text-base leading-relaxed text-mint/95">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-mint/60 p-7 ring-1 ring-line sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-moss">
                Get Involved
              </p>
              <p className="mt-3 text-base leading-relaxed text-ink/70">
                Donate, volunteer, or partner with USWA to expand this program in more
                communities.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Button to="/donate" variant="dark">
                  Make a Donation
                </Button>
                <Button to="/contact" variant="outline">
                  Contact Our Team
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-pad bg-mint/40 pt-0">
        <div className="container-page">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-moss" data-aos="fade-up">
            How It Works
          </p>
          <h2 className="text-hero-title mt-3 max-w-2xl text-ink" data-aos="fade-up">
            A simple process focused on community outcomes.
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="rounded-3xl bg-cream p-6 ring-1 ring-line sm:p-7"
              >
                <p className="text-hero-brand normal-case tracking-tight text-moss/40">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="text-hero-card mt-2 text-ink">{step.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-ink/70">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="section-pad pt-0">
          <div className="container-page">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-moss">
                  Related Services
                </p>
                <h2 className="text-hero-title mt-3 text-ink">Explore more of our work</h2>
              </div>
              <Button to="/services" variant="outline">
                All Services
              </Button>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item, index) => (
                <ServiceCard key={item.id} service={item} index={index} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}

export default ServiceDetail;
