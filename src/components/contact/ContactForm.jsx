import { useState } from "react";
import Button from "../common/Button";
import { site } from "../../data/site";

const contactCards = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    note: "Best for partnerships and program inquiries",
  },
  {
    label: "Phone",
    value: site.phone,
    href: `tel:${site.phone.replace(/\s/g, "")}`,
    note: "Available for donation and volunteer support",
  },
  {
    label: "Location",
    value: site.address,
    href: null,
    note: "Serving communities across Pakistan",
  },
];

const topics = [
  "General Inquiry",
  "Donation",
  "Volunteer",
  "Partnership",
  "Consultancy / Workshop",
  "Blood Collection Drive",
  "Awareness Session",
];

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="py-12">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div data-aos="fade-right">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-moss">
              Get in Touch
            </p>
            <h2 className="text-hero-title mt-3 text-ink">
              Let’s work together for community impact.
            </h2>
            <p className="text-hero-body mt-4 text-ink/70">
              For partnerships, donations, volunteering, surveys, workshops, or consultancy —
              send us a message. We respond as soon as possible.
            </p>

            <div className="mt-8 space-y-4">
              {contactCards.map((card, index) => (
                <div
                  key={card.label}
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                  className="rounded-3xl bg-cream p-5 ring-1 ring-line sm:p-6"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-moss">
                    {card.label}
                  </p>
                  {card.href ? (
                    <a
                      href={card.href}
                      className="mt-2 block text-lg font-semibold text-forest transition hover:text-amber"
                    >
                      {card.value}
                    </a>
                  ) : (
                    <p className="mt-2 text-lg font-semibold text-forest">{card.value}</p>
                  )}
                  <p className="mt-1 text-sm text-ink/60">{card.note}</p>
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            data-aos="fade-left"
            className="rounded-3xl bg-forest p-6 text-cream sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber">
              Send a Message
            </p>
            <h3 className="text-hero-title mt-3 text-cream">
              Tell us how we can help.
            </h3>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
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
                  placeholder="jahanzaibmahar18@gmail.com"
                />
              </label>
            </div>

            <label className="mt-4 block text-sm">
              <span className="mb-2 block font-medium text-mint/90">Phone (optional)</span>
              <input
                name="phone"
                type="tel"
                className="w-full rounded-md border border-white/15 bg-white/10 px-4 py-2 text-cream outline-none placeholder:text-mint/50 focus:border-amber"
                placeholder="+92 3076341312"
              />
            </label>

            <label className="mt-4 block text-sm">
              <span className="mb-2 block font-medium text-mint/90">Subject</span>
              <select
                name="subject"
                className="w-full rounded-md border border-white/15 bg-forest px-4 py-2 text-cream outline-none focus:border-amber"
                defaultValue="General Inquiry"
              >
                {topics.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
            </label>

            <label className="mt-4 block text-sm">
              <span className="mb-2 block font-medium text-mint/90">Message</span>
              <textarea
                required
                name="message"
                rows={5}
                className="w-full rounded-md border border-white/15 bg-white/10 px-4 py-2 text-cream outline-none placeholder:text-mint/50 focus:border-amber"
                placeholder="How can we help?"
              />
            </label>

            <div className="btn-row-mobile mt-6 flex flex-wrap items-center gap-3">
              <Button type="submit">Send Message</Button>
              <Button href={`mailto:${site.email}`} variant="secondary">
                Email Directly
              </Button>
            </div>

            {submitted ? (
              <p className="mt-4 text-sm text-amber">
                Thank you — your message has been recorded. Our team will respond soon.
              </p>
            ) : null}
          </form>
        </div>
      </section>

      <section className="py-12 bg-mint/40 pt-0">
        <div className="container-page">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-moss">
            How We Can Help
          </p>
          <h2 className="text-hero-title mt-3 max-w-2xl text-ink">
            Reach out for the support that fits your goal.
          </h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Donate",
                text: "Ask for campaign details or bank information.",
              },
              {
                title: "Volunteer",
                text: "Join field programs, drives, and awareness sessions.",
              },
              {
                title: "Partner",
                text: "Collaborate on community projects and workshops.",
              },
              {
                title: "Consultancy",
                text: "Request advisory support for social programs.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                data-aos="fade-up"
                data-aos-delay={index * 80}
                className="rounded-3xl bg-cream p-6 ring-1 ring-line"
              >
                <p className="text-hero-brand normal-case tracking-tight text-moss/35">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="text-hero-card mt-2 text-forest">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-ink/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactForm;
