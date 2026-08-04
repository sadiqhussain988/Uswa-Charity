import PageBanner from "../components/common/PageBanner";
import DonateContent from "../components/donate/DonateContent";
import CtaBanner from "../components/home/CtaBanner";

const BANNER =
  "https://i.pinimg.com/1200x/65/1c/c8/651cc8657bdd26652e25d131f894f436.jpg";

function Donate() {
  return (
    <>
      <PageBanner
        title="Donate & Support"
        text="Your generosity helps USWA deliver health services, education support, awareness, and emergency care."
        image={BANNER}
      />

      <section className="border-b border-line bg-cream">
        <div className="container-page grid grid-cols-3 gap-3 py-6 sm:gap-6 sm:py-8">
          <div>
            <p className="text-xl font-bold tracking-tight text-forest sm:text-4xl md:text-5xl">
              100%
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-ink/55 sm:text-sm sm:tracking-[0.16em]">
              Community Focused
            </p>
          </div>
          <div>
            <p className="text-xl font-bold tracking-tight text-forest sm:text-4xl md:text-5xl">
              4
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-ink/55 sm:text-sm sm:tracking-[0.16em]">
              Ways to Give
            </p>
          </div>
          <div>
            <p className="text-xl font-bold tracking-tight text-forest sm:text-4xl md:text-5xl">
              2013
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-ink/55 sm:text-sm sm:tracking-[0.16em]">
              Trusted Since
            </p>
          </div>
        </div>
      </section>

      <DonateContent />
      <CtaBanner />
    </>
  );
}

export default Donate;
