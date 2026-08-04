import PageBanner from "../components/common/PageBanner";
import ContactForm from "../components/contact/ContactForm";
import CtaBanner from "../components/home/CtaBanner";

const BANNER =
  "https://i.pinimg.com/1200x/4f/73/4f/4f734ffab94a3e30383382460adc951a.jpg";

function Contact() {
  return (
    <>
      <PageBanner
        title="Contact USWA"
        text="Reach out for donations, volunteering, consultancy, workshops, or partnership opportunities."
        image={BANNER}
      />

      <section className="border-b border-line bg-cream">
        <div className="container-page grid grid-cols-3 gap-3 py-6 sm:gap-6 sm:py-8">
          <div>
            <p className="text-xl font-bold tracking-tight text-forest sm:text-4xl md:text-5xl">
              Fast
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-ink/55 sm:text-sm sm:tracking-[0.16em]">
              Response Support
            </p>
          </div>
          <div>
            <p className="text-xl font-bold tracking-tight text-forest sm:text-4xl md:text-5xl">
              Open
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-ink/55 sm:text-sm sm:tracking-[0.16em]">
              For Partnerships
            </p>
          </div>
          <div>
            <p className="text-xl font-bold tracking-tight text-forest sm:text-4xl md:text-5xl">
              2013
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-ink/55 sm:text-sm sm:tracking-[0.16em]">
              Serving Communities
            </p>
          </div>
        </div>
      </section>

      <ContactForm />
      <CtaBanner />
    </>
  );
}

export default Contact;
