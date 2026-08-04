import { timeline } from "../../data/site";
import SectionHeading from "../common/SectionHeading";

function Journey() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <SectionHeading
          eyebrow="Our Journey"
          title="From grassroots beginnings to broader community impact."
          text="Guided by organizational profiles spanning 2013–2019 and 2019–2021, USWA continues to grow its service footprint."
        />

        <div className="relative space-y-0 border-l border-line pl-8">
          {timeline.map((item) => (
            <article key={item.period} className="relative pb-12 last:pb-0">
              <span className="absolute -left-[2.4rem] top-1 flex h-5 w-5 items-center justify-center rounded-full bg-mint ring-4 ring-fog">
                <span className="h-2.5 w-2.5 rounded-full bg-moss" />
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-moss">
                {item.period}
              </p>
              <h3 className="mt-2 font-display text-2xl text-ink">{item.title}</h3>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink/70">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Journey;
