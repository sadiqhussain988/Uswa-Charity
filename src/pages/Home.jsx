import Hero from "../components/home/Hero";
import MissionStrip from "../components/home/MissionStrip";
import ServicesPreview from "../components/home/ServicesPreview";
import ImpactStats from "../components/home/ImpactStats";
import Journey from "../components/home/Journey";
import CtaBanner from "../components/home/CtaBanner";

function Home() {
  return (
    <>
      <Hero />
      <MissionStrip />
      <ServicesPreview />
      <ImpactStats />
      <Journey />
      <CtaBanner />
    </>
  );
}

export default Home;
