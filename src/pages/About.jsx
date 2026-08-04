import PageBanner from "../components/common/PageBanner";
import Story from "../components/about/Story";
import FocusAreas from "../components/about/FocusAreas";
import Journey from "../components/home/Journey";
import CtaBanner from "../components/home/CtaBanner";

const BANNER =
  "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1800&q=80";

function About() {
  return (
    <>
      <PageBanner
        title="About USWA"
        text="A community welfare organization dedicated to health, education, and social development."
        image={BANNER}
      />
      <Story />
      <FocusAreas />
      <Journey />
      <CtaBanner />
    </>
  );
}

export default About;
