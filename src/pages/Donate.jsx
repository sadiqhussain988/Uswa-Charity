import PageBanner from "../components/common/PageBanner";
import DonateContent from "../components/donate/DonateContent";

const BANNER =
  "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1800&q=80";

function Donate() {
  return (
    <>
      <PageBanner
        title="Donate & Support"
        text="Your generosity helps USWA deliver health services, education support, awareness, and emergency care."
        image={BANNER}
      />
      <DonateContent />
    </>
  );
}

export default Donate;
