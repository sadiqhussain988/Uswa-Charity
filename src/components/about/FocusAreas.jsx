import { Link } from "react-router-dom";
import { extraFocus } from "../../data/services";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";

function FocusAreas() {
  return (
    <section className="bg-mint/40 py-16">
      <div className="container-page">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <SectionHeading
            eyebrow="Broader Focus"
            title="Beyond core services, we strengthen community systems."
            text="USWA also works on complementary development priorities that support long-term wellbeing."
          />

          <Button
            to="/services"
            variant="outline"
            className="shrink-0 rounded-xl px-6 py-3 lg:mt-2"
          >
            View All Services
          </Button>
        </div>

        {/* Cards */}
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {extraFocus.map((item, index) => (
            <li key={item}>
              <Link
                to="/services"
                data-aos="fade-up"
                data-aos-delay={index * 80}
                className="group flex h-full items-start gap-5 rounded-3xl bg-cream px-6 py-7 ring-1 ring-line transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-forest/20"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-mint font-bold text-forest transition-all duration-300 group-hover:bg-forest group-hover:text-cream">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="text-2xl font-bold leading-tight text-forest">
                    {item}
                  </h3>

                  <p className="mt-3 text-sm text-ink/60 transition group-hover:text-forest">
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