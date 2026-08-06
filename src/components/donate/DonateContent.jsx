import { useState } from "react";
import Button from "../common/Button";
import SectionHeading from "../common/SectionHeading";
import { site } from "../../data/site";

const ways = [
  {
    title: "General Donation",
    text: "Support USWA’s overall mission across health, education, and community welfare programs.",
  },
  {
    title: "Health & Blood Drives",
    text: "Help fund health camps, awareness sessions, and blood collection campaigns.",
  },
  {
    title: "Education Support",
    text: "Contribute toward learning sessions, workshops, and educational access for underserved families.",
  },
  {
    title: "In-Kind Support",
    text: "Donate supplies, venue support, or professional expertise for community programs.",
  },
];

const impacts = [
  {
    title: "Food & Relief",
    text: "Ration support and essentials for vulnerable families.",
    image:
      "https://i.pinimg.com/1200x/65/1c/c8/651cc8657bdd26652e25d131f894f436.jpg",
  },
  {
    title: "Children & Hope",
    text: "Learning support and care that builds brighter futures.",
    image:
      "https://i.pinimg.com/1200x/3c/fa/09/3cfa091dac27bacace6dead1f6bb70fc.jpg",
  },
  {
    title: "Community Joy",
    text: "Programs that restore dignity, confidence, and belonging.",
    image:
      "https://i.pinimg.com/1200x/4f/73/4f/4f734ffab94a3e30383382460adc951a.jpg",
  },
];

function DonateContent() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="py-12">
        <div className="container-page grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Ways to Give"
              title="Your contribution becomes care, education, and opportunity."
              text="Every donation helps USWA reach more families through transparent, community-centered programs."
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {ways.map((way, index) => (
                <div
                  key={way.title}
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                  className="rounded-3xl bg-cream p-6 ring-1 ring-line transition duration-300 hover:-translate-y-1 hover:ring-forest/20"
                >
                  <p className="text-hero-brand normal-case tracking-tight text-moss/35">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-hero-card mt-2 text-forest">{way.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-ink/70">{way.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-forest p-7 text-cream sm:p-8" data-aos="fade-left">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber">
              Donation Inquiry
            </p>
            <h3 className="text-hero-title mt-3 text-cream">
              Tell us how you’d like to support USWA.
            </h3>
            <p className="mt-3 text-base leading-relaxed text-mint/85">
              Share your details and our team will send bank information, campaign options,
              or partnership guidance.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-4">
              <label className="block text-sm">
                <span className="mb-2 block font-medium text-mint/90">Full Name</span>
                <input
                  required
                  name="name"
                  type="text"
                  className="w-full rounded-md border border-white/15 bg-white/10 px-4 py-2 text-cream outline-none placeholder:text-mint/50 focus:border-amber"
                  placeholder="Your name"
                />
              </label>

              <label className="block text-sm">
                <span className="mb-2 block font-medium text-mint/90">Email</span>
                <input
                  required
                  name="email"
                  type="email"
                  className="w-full rounded-md border border-white/15 bg-white/10 px-4 py-2 text-cream outline-none placeholder:text-mint/50 focus:border-amber"
                  placeholder="you@email.com"
                />
              </label>

              <label className="block text-sm">
                <span className="mb-2 block font-medium text-mint/90">Support Type</span>
                <select
                  name="type"
                  className="w-full rounded-md border border-white/15 bg-forest px-4 py-2 text-cream outline-none focus:border-amber"
                  defaultValue="General Donation"
                >
                  {ways.map((way) => (
                    <option key={way.title} value={way.title}>
                      {way.title}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block text-sm">
                <span className="mb-2 block font-medium text-mint/90">Message</span>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full rounded-md border border-white/15 bg-white/10 px-4 py-2 text-cream outline-none placeholder:text-mint/50 focus:border-amber"
                  placeholder="Tell us how you want to help..."
                />
              </label>

              <div className="btn-row-mobile flex flex-wrap items-center gap-3 pt-1">
                <Button type="submit">Send Inquiry</Button>
                <Button href={`mailto:${site.email}`} variant="secondary">
                  Email Directly
                </Button>
              </div>

              {submitted ? (
                <p className="text-sm text-amber">
                  Thank you — your donation inquiry has been received. We’ll contact you soon.
                </p>
              ) : null}
            </form>

            <div className="mt-8 border-t border-white/10 pt-6 text-sm text-mint/85">
              <p>
                <span className="text-amber">Email:</span>{" "}
                <a href={`mailto:${site.email}`} className="hover:text-cream">
                  {site.email}
                </a>
              </p>
              <p className="mt-2">
                <span className="text-amber">Phone:</span>{" "}
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="hover:text-cream"
                >
                  {site.phone}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-mint/40 pt-0">
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
                  <p className="mt-2 text-base leading-relaxed text-ink/70">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="container-page">
          <div
            className="rounded-3xl bg-cream px-6 py-10 ring-1 ring-line sm:px-10"
            data-aos="fade-up"
          >
            <div className="grid gap-8 lg:grid-cols-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-moss">
                  Transparency
                </p>
                <h3 className="text-hero-card mt-3 text-ink">Clear use of funds</h3>
                <p className="mt-3 text-base leading-relaxed text-ink/70">
                  Contributions are directed to community programs with accountable reporting.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-moss">
                  Local Reach
                </p>
                <h3 className="text-hero-card mt-3 text-ink">Grassroots delivery</h3>
                <p className="mt-3 text-base leading-relaxed text-ink/70">
                  Support goes directly into field programs serving families and children.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-moss">
                  Partnership
                </p>
                <h3 className="text-hero-card mt-3 text-ink">Give your way</h3>
                <p className="mt-3 text-base leading-relaxed text-ink/70">
                  Choose one-time gifts, campaign support, or in-kind contributions.
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
