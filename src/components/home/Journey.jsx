import { timeline } from "../../data/site";
import SectionHeading from "../common/SectionHeading";

function Journey() {
  return (
    <section className="py-10 relative overflow-hidden bg-mint/30">
      <div className="container-page relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            align="center"
            eyebrow="Our Journey"
            title="From Grassroots Beginnings to Community Impact"
            text="Guided by our vision and commitment since 2013, USWA has continued expanding its services and creating meaningful change in communities."
          />
        </div>

        <div className="relative mt-8 grid grid-cols-1 gap-4 sm:mt-12 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Subtle Horizontal Connecting Line for Desktop */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 right-0 top-12 hidden h-0.5 bg-gradient-to-r from-emerald-500/20 via-emerald-500/40 to-emerald-500/20 lg:block"
          />

          {timeline.map((item, index) => {
            const stepNumber = String(index + 1).padStart(2, "0");

            return (
              <div
                key={item.period || index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-cream p-5 ring-1 ring-line transition-all duration-500 hover:-translate-y-1 hover:ring-forest/20 sm:rounded-3xl sm:p-8"
              >
                {/* Top Accent Gradient Border */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-emerald-600 via-teal-500 to-amber-500 opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Decorative Background Step Index Watermark */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-4 -top-6 select-none font-display text-8xl font-black text-slate-100/60 transition-transform duration-700 group-hover:scale-110 group-hover:text-emerald-50"
                >
                  {stepNumber}
                </span>

                <div className="relative z-10">
                  {/* Step Badge & Period */}
                  <div className="flex items-center justify-between">
                    {/* Circle Milestone Badge */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-700 font-display text-base font-bold text-white shadow-md shadow-emerald-700/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-amber group-hover:text-ink">
                      {stepNumber}
                    </div>

                    {/* Period Tag */}
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-800 ring-1 ring-emerald-600/10">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                      {item.period}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-hero-card mt-6 text-ink transition-colors duration-300 group-hover:text-forest">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-hero-body mt-3 text-ink/70">
                    {item.text}
                  </p>
                </div>

                {/* Footer Progress Line */}
                <div className="relative z-10 mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-widest text-emerald-800">
                    Milestone Reached
                  </span>

                  {/* Interactive Action Circle */}
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 transition-all duration-300 group-hover:bg-emerald-700 group-hover:text-white group-hover:shadow-md">
                    <svg
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Journey;