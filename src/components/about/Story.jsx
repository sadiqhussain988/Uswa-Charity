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
        {/* Left Content */}
        <div>
          <SectionHeading
            eyebrow="Our Story"
            title={`${site.name} works where support creates lasting change.`}
            text={site.description}
          />

          <p
            className="max-w-xl text-hero-body text-ink/70"
            data-aos="fade-up"
            data-aos-delay="80"
          >
            Across our organizational profiles (2013–2019 and 2019–2021), USWA
            has built practical community programs — from health and education
            to surveys, workshops, consultancy, awareness sessions, donations,
            and blood collection.
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

        {/* Right Images */}
        <div
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4"
          data-aos="fade-left"
        >
          {/* Main Image */}
          <div className="group relative overflow-hidden rounded-3xl shadow-xl">
            <img
              src={images.main}
              alt="USWA community support in action"
              className="h-56 w-full object-cover sm:h-full sm:min-h-[360px]"
            />

            {/* Glass Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>

            {/* Shine Effect */}
            <div className="absolute -left-[120%] top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent transition-all duration-1000 group-hover:left-[150%] pointer-events-none"></div>
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-1 sm:gap-4">
            {/* Side Image */}
            <div className="group relative overflow-hidden rounded-3xl shadow-xl">
              <img
                src={images.side}
                alt="Children supported through USWA programs"
                className="h-36 w-full object-cover sm:h-44"
              />

              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>

              <div className="absolute -left-[120%] top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent transition-all duration-1000 group-hover:left-[150%] pointer-events-none"></div>
            </div>

            {/* Bottom Image */}
            <div className="group relative overflow-hidden rounded-3xl shadow-xl">
              <img
                src={images.bottom}
                alt="Joyful community members"
                className="h-36 w-full object-cover sm:h-44"
              />

              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>

              <div className="absolute -left-[120%] top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent transition-all duration-1000 group-hover:left-[150%] pointer-events-none"></div>
            </div>

            {/* Year Card */}
            <div className="col-span-2 rounded-3xl bg-forest px-5 py-6 text-cream shadow-xl sm:col-span-1">
              <p className="text-hero-brand normal-case tracking-tight text-amber">
                2013
              </p>
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