import { useMemo, useState } from "react";
import { services } from "../../data/services";
import SectionHeading from "../common/SectionHeading";
import ServiceCard from "./ServiceCard";

function ServicesGrid({
  eyebrow = "Our Services",
  title = "Programs that serve communities with care and purpose.",
  text = "Explore each service to learn how USWA supports health, education, awareness, and social welfare.",
  showHeading = true,
  showFilter = true,
}) {
  const categories = useMemo(
    () => ["All", ...new Set(services.map((service) => service.category))],
    [],
  );
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? services
        : services.filter((service) => service.category === active),
    [active],
  );

  return (
    <section className="section-pad">
      <div className="container-page">
        {showHeading ? (
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading eyebrow={eyebrow} title={title} text={text} />
            <p className="shrink-0 text-sm font-semibold uppercase tracking-[0.16em] text-moss">
              {filtered.length} Programs
            </p>
          </div>
        ) : null}

        {showFilter ? (
          <div className="-mx-4 mb-6 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:mb-8 sm:flex-wrap sm:overflow-visible sm:px-0">
            {categories.map((category) => {
              const isActive = active === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActive(category)}
                  className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold transition duration-300 sm:px-4 sm:py-2 sm:text-sm ${
                    isActive
                      ? "bg-forest text-cream"
                      : "bg-mint text-forest hover:bg-forest/10"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        ) : null}

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {filtered.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesGrid;
