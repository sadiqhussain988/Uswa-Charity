import { Link } from "react-router-dom";
import { extraFocus } from "../../data/services";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";

function FocusAreas() {
  return (
    <section className="section-pad bg-mint/40">
      <div className="container-page">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Broader Focus"
            title="Beyond core services, we strengthen community systems."
            text="USWA also works on complementary development priorities that support long-term wellbeing."
          />
          <Button to="/services" variant="outline" className="shrink-0">
            View All Services
          </Button>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {extraFocus.map((item, index) => (
            <li key={item}>
              <Link
                to="/services"
                data-aos="fade-up"
                data-aos-delay={index * 80}
                className="group flex h-full items-start gap-4 rounded-3xl bg-cream px-5 py-6 ring-1 ring-line transition duration-300 hover:-translate-y-1 hover:ring-forest/25"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mint text-sm font-bold text-forest transition group-hover:bg-forest group-hover:text-cream">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-hero-card text-forest">{item}</h3>
                  <p className="mt-2 text-sm text-ink/60 transition group-hover:text-forest">
                    Explore related programs →
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default FocusAreas;
