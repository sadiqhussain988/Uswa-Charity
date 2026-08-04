import { impactStats } from "../../data/site";

function ImpactStats() {
  return (
    <section className="relative overflow-hidden bg-forest py-16 text-cream sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(199,146,42,0.18),transparent_40%)]" />
      <div className="container-page relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {impactStats.map((stat) => (
          <div key={stat.label} className="border-l border-white/15 pl-5">
            <p className="font-display text-4xl text-amber sm:text-5xl">{stat.value}</p>
            <p className="mt-2 text-sm uppercase tracking-[0.16em] text-mint/80">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ImpactStats;
