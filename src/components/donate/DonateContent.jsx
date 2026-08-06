import { useState } from "react";
import SectionHeading from "../common/SectionHeading";

function DonateContent() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const impacts = [];

  return (
    <>
      {/* Ways to Give */}
      <section className="py-5">
        <div className="container-page grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* Your existing first section code */}
        </div>
      </section>

      {/* Impact */}
      <section className="bg-mint/40 pt-0 pb-10 ">
        <div className="container-page">
          <SectionHeading
            eyebrow="Your Impact"
            title="See where generosity creates real change."
            text="Donations power food relief, education support, health outreach, and community hope."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {impacts.map((item, index) => (
              <article
                key={item.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="overflow-hidden rounded-3xl bg-cream ring-1 ring-line"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-hero-card text-forest">{item.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-ink/70">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="py-5 ">
        <div className="container-page">
          <div
            className="rounded-3xl bg-cream px-6 py-5 ring-1 ring-line sm:px-10"
            data-aos="fade-up"
          >
            <div className="grid gap-8 lg:grid-cols-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-moss">
                  Transparency
                </p>
                <h3 className="text-hero-card mt-3 text-ink">
                  Clear use of funds
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink/70">
                  Contributions are directed to community programs with accountable
                  reporting.
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-moss">
                  Local Reach
                </p>
                <h3 className="text-hero-card mt-3 text-ink">
                  Grassroots delivery
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink/70">
                  Support goes directly into field programs serving families and
                  children.
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-moss">
                  Partnership
                </p>
                <h3 className="text-hero-card mt-3 text-ink">Give your way</h3>
                <p className="mt-3 text-base leading-relaxed text-ink/70">
                  Choose one-time gifts, campaign support, or in-kind
                  contributions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default DonateContent;
