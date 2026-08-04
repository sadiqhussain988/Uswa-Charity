import { Link } from "react-router-dom";
import { getServiceImage } from "../../utils/serviceImages";

function ServiceCard({ service, index }) {
  const imageSrc = getServiceImage(service);
  const number =
    typeof index === "number" ? String(index + 1).padStart(2, "0") : null;

  return (
    <Link
      to={`/services/${service.id}`}
      data-aos="fade-up"
      data-aos-delay={typeof index === "number" ? Math.min(index * 80, 320) : 0}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-cream shadow-[0_10px_30px_-18px_rgba(16,36,29,0.35)] ring-1 ring-line transition duration-500 hover:-translate-y-2 hover:shadow-[0_22px_45px_-20px_rgba(16,36,29,0.45)] hover:ring-forest/25 sm:rounded-3xl"
    >
      <div className="relative h-52 overflow-hidden sm:h-60 lg:h-64">
        <img
          src={imageSrc}
          alt={service.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/35 to-transparent opacity-90 transition duration-500 group-hover:opacity-95" />
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-forest/40 to-transparent" />

        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className="rounded-full bg-amber px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-ink shadow-sm sm:text-[11px]">
            {service.category}
          </span>
        </div>

        {number ? (
          <span className="absolute right-4 top-3 font-display text-4xl font-bold text-white/20 transition duration-500 group-hover:text-amber/50 sm:text-5xl">
            {number}
          </span>
        ) : null}

        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
          <h3 className="text-hero-card text-cream drop-shadow-sm">
            {service.title}
          </h3>
          <div className="mt-2 h-0.5 w-10 rounded-full bg-amber transition-all duration-500 group-hover:w-20" />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <p className="line-clamp-3 text-sm leading-relaxed text-ink/70 sm:text-base">
          {service.summary}
        </p>

        <div className="mt-auto flex items-center justify-between pt-5">
          <span className="text-sm font-semibold text-forest transition-colors duration-300 group-hover:text-amber-deep">
            Explore Service
          </span>

          <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-mint text-forest transition-all duration-300 group-hover:bg-forest group-hover:text-cream">
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
            <span className="pointer-events-none absolute inset-0 scale-0 rounded-full bg-amber/30 transition-transform duration-500 group-hover:scale-150" />
          </span>
        </div>
      </div>

      <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-forest via-moss to-amber transition-transform duration-500 group-hover:scale-x-100" />
    </Link>
  );
}

export default ServiceCard;
