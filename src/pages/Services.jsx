import PageBanner from "../components/common/PageBanner";
import ServicesGrid from "../components/services/ServicesGrid";
import CtaBanner from "../components/home/CtaBanner";
import { services } from "../data/services";

const BANNER =
  "https://i.pinimg.com/1200x/65/1c/c8/651cc8657bdd26652e25d131f894f436.jpg";

function Services() {
  return (
    <>
      <PageBanner
        title="Our Services"
        text={`Explore ${services.length} community programs — click any card for full details, impact areas, and ways to get involved.`}
        image={BANNER}
      />

      <section className="border-b border-line bg-cream">
        <div className="container-page grid grid-cols-3 gap-3 py-6 sm:gap-6 sm:py-8">
          <div>
            <p className="text-xl font-bold tracking-tight text-forest sm:text-4xl md:text-5xl">
              {services.length}+
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-ink/55 sm:text-sm sm:tracking-[0.16em]">
              Active Services
            </p>
          </div>
          <div>
            <p className="text-xl font-bold tracking-tight text-forest sm:text-4xl md:text-5xl">
              2013
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-ink/55 sm:text-sm sm:tracking-[0.16em]">
              Serving Since
            </p>
          </div>
          <div>
            <p className="text-xl font-bold tracking-tight text-forest sm:text-4xl md:text-5xl">
              100%
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-ink/55 sm:text-sm sm:tracking-[0.16em]">
              Community Focused
            </p>
          </div>
        </div>
      </section>

      <ServicesGrid />
      <CtaBanner />
    </>
  );
}

export default Services;
