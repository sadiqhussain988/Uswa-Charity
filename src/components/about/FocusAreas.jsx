import { extraFocus } from "../../data/services";
import SectionHeading from "../common/SectionHeading";

function FocusAreas() {
  return (
    <section className="section-pad bg-mint/50">
      <div className="container-page">
        <SectionHeading
          eyebrow="Broader Focus"
          title="Beyond core services, we strengthen community systems."
          text="USWA also works on complementary development priorities that support long-term wellbeing."
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {extraFocus.map((item) => (
            <li
              key={item}
              className="rounded-xl bg-cream px-5 py-6 font-display text-xl text-forest ring-1 ring-line"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default FocusAreas;
