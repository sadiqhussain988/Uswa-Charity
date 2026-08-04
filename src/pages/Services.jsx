import PageBanner from "../components/common/PageBanner";
import ServicesList from "../components/services/ServicesList";
import CtaBanner from "../components/home/CtaBanner";

const BANNER =
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1800&q=80";

function Services() {
  return (
    <>
      <PageBanner
        title="Our Services"
        text="Health, Education, Survey, Workshops, Consultancy, Awareness Sessions, Donations, Blood Collection — and more."
        image={BANNER}
      />
      <ServicesList />
      <CtaBanner />
    </>
  );
}

export default Services;
