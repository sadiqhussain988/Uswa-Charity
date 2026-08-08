import PageBanner from "../components/common/PageBanner";
import Story from "../components/about/Story";
import MissionVision from "../components/about/MissionVision";
import Values from "../components/about/Values";
import FocusAreas from "../components/about/FocusAreas";
import Journey from "../components/home/Journey";
import CtaBanner from "../components/home/CtaBanner";
import { impactStats } from "../data/site";

const BANNER =
  "https://i.pinimg.com/1200x/3c/fa/09/3cfa091dac27bacace6dead1f6bb70fc.jpg";

function About() {
  return (
    <>
      <PageBanner
        title="About USWA"
        text="A community welfare organization dedicated to health, education, and social development since 2013."
        image={BANNER}
      />
      <section className="border-b border-line bg-cream">
        <div className="container-page grid grid-cols-2 gap-4 py-6 sm:gap-6 sm:py-8 lg:grid-cols-4">
          {impactStats.map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold tracking-tight text-forest sm:text-4xl md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-ink/55 sm:text-sm sm:tracking-[0.16em]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Story />
      <MissionVision />
      <Values />
      <FocusAreas />
      <Journey />
      <CtaBanner />
    </>
  );
}

export default About;
