import { site } from "../../data/site";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";

const images = {
  main: "https://i.pinimg.com/1200x/65/1c/c8/651cc8657bdd26652e25d131f894f436.jpg",
  side: "https://i.pinimg.com/1200x/3c/fa/09/3cfa091dac27bacace6dead1f6bb70fc.jpg",
  bottom: "https://i.pinimg.com/1200x/4f/73/4f/4f734ffab94a3e30383382460adc951a.jpg",
};

function Story() {
  return (
    <section className="py-12">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <SectionHeading
            eyebrow="Our Story"
            title={`${site.name} works where support creates lasting change.`}
            text={site.description}
          />
          <p className="text-hero-body max-w-xl text-ink/70" data-aos="fade-up" data-aos-delay="80">
            Across our organizational profiles (2013–2019 and 2019–2021), USWA has built
            practical community programs — from health and education to surveys, workshops,
            consultancy, awareness sessions, donations, and blood collection.
          </p>

          <div
            className="mt-8 flex flex-wrap items-center gap-4"
            data-aos="fade-up"
            data-aos-delay="120"
          >
            <Button to="/services" variant="dark">
              Explore Our Services
            </Button>
            <Button to="/contact" variant="outline">
              Connect With Us
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4" data-aos="fade-left">
          <div className="overflow-hidden rounded-3xl">
            <img
              src={images.main}
              alt="USWA community support in action"
              className="h-56 w-full object-cover sm:h-full sm:min-h-[360px]"
            />
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-1 sm:gap-4">
            <div className="overflow-hidden rounded-3xl">
              <img
                src={images.side}
                alt="Children supported through USWA programs"
                className="h-36 w-full object-cover sm:h-44"
              />
            </div>
            <div className="overflow-hidden rounded-3xl">
              <img
                src={images.bottom}
                alt="Joyful community members"
                className="h-36 w-full object-cover sm:h-44"
              />
            </div>
            <div className="col-span-2 rounded-3xl bg-forest px-5 py-6 text-cream sm:col-span-1">
              <p className="text-hero-brand normal-case tracking-tight text-amber">2013</p>
              <p className="mt-1 text-sm uppercase tracking-[0.16em] text-mint/80">
                Serving Communities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;
