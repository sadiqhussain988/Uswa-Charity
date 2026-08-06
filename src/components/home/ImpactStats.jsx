import { impactStats } from "../../data/site";

function ImpactStats() {
  return (
    <section className="bg-forest py-12 text-cream sm:py-10">
      <div className="container-page">
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {impactStats.map((stat, index) => (
            <div
              key={stat.label}
              data-aos="fade-up"
              data-aos-delay={index * 80}
              className="rounded-2xl bg-white/[0.06] p-4 ring-1 ring-white/10 sm:p-6"
            >
              <p className="text-2xl font-bold tracking-tight text-amber sm:text-4xl md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-cream/80 sm:text-xs sm:tracking-[0.2em]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ImpactStats;
