import { useState } from "react";
import Button from "../common/Button";
import { site } from "../../data/site";

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section-pad">
      <div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-moss">Contact</p>
          <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
            Let’s work together for community impact.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/70">
            For partnerships, donations, volunteering, surveys, workshops, or consultancy — send us
            a message.
          </p>

          <ul className="mt-8 space-y-5 text-sm">
            <li>
              <p className="uppercase tracking-[0.16em] text-moss">Email</p>
              <a href={`mailto:${site.email}`} className="mt-1 block text-lg text-forest">
                {site.email}
              </a>
            </li>
            <li>
              <p className="uppercase tracking-[0.16em] text-moss">Phone</p>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="mt-1 block text-lg text-forest"
              >
                {site.phone}
              </a>
            </li>
            <li>
              <p className="uppercase tracking-[0.16em] text-moss">Location</p>
              <p className="mt-1 text-lg text-forest">{site.address}</p>
            </li>
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl bg-cream p-6 ring-1 ring-line sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="mb-2 block font-medium text-ink/80">Full Name</span>
              <input
                required
                name="name"
                type="text"
                className="w-full rounded-md border border-line bg-fog px-4 py-3 outline-none transition focus:border-moss"
                placeholder="Your name"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-2 block font-medium text-ink/80">Email</span>
              <input
                required
                name="email"
                type="email"
                className="w-full rounded-md border border-line bg-fog px-4 py-3 outline-none transition focus:border-moss"
                placeholder="you@email.com"
              />
            </label>
          </div>

          <label className="mt-5 block text-sm">
            <span className="mb-2 block font-medium text-ink/80">Subject</span>
            <select
              name="subject"
              className="w-full rounded-md border border-line bg-fog px-4 py-3 outline-none transition focus:border-moss"
              defaultValue="General Inquiry"
            >
              <option>General Inquiry</option>
              <option>Donation</option>
              <option>Volunteer</option>
              <option>Partnership</option>
              <option>Consultancy / Workshop</option>
            </select>
          </label>

          <label className="mt-5 block text-sm">
            <span className="mb-2 block font-medium text-ink/80">Message</span>
            <textarea
              required
              name="message"
              rows={5}
              className="w-full rounded-md border border-line bg-fog px-4 py-3 outline-none transition focus:border-moss"
              placeholder="How can we help?"
            />
          </label>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Button type="submit" variant="dark">
              Send Message
            </Button>
            {submitted ? (
              <p className="text-sm text-leaf">
                Thank you — your message has been recorded. Our team will respond soon.
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
