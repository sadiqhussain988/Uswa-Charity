import Button from "../common/Button";
import SectionHeading from "../common/SectionHeading";

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

function DonateContent() {
  return (
    <section className="section-pad">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <SectionHeading
            eyebrow="Donate"
            title="Your contribution becomes care, education, and opportunity."
            text="Every donation helps USWA reach more families through transparent, community-centered programs."
          />
          <div className="space-y-5">
            {ways.map((way) => (
              <div key={way.title} className="border-l-2 border-moss/40 pl-5">
                <h3 className="font-display text-xl text-forest">{way.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{way.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-forest p-8 text-cream sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber">
            Ready to Help?
          </p>
          <h3 className="mt-4 font-display text-3xl leading-snug">
            Reach out to contribute or partner with USWA.
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-mint/85">
            Contact our team for bank details, campaign updates, volunteer opportunities, or
            partnership discussions.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="/contact">Contact for Donation</Button>
            <Button href="mailto:info@uswa.org" variant="secondary">
              Email USWA
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DonateContent;
