import PageBanner from "../components/common/PageBanner";
import ContactForm from "../components/contact/ContactForm";

const BANNER =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1800&q=80";

function Contact() {
  return (
    <>
      <PageBanner
        title="Contact USWA"
        text="Reach out for donations, volunteering, consultancy, workshops, or partnership opportunities."
        image={BANNER}
      />
      <ContactForm />
    </>
  );
}

export default Contact;
