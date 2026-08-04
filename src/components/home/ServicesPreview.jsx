import { Link } from "react-router-dom";
import { services } from "../../data/services";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";

const serviceImageModules = import.meta.glob("../../assets/*.{jpg,png}", {
  eager: true,
});
const serviceImageMap = Object.fromEntries(
  Object.entries(serviceImageModules).map(([path, module]) => [
    path.split("/").pop(),
    module.default,
  ])
);

function ServicesPreview() {
  return (
    <section className="py-20 bg-linear-to-b from-[#F9FCF8] via-[#F4FAF5] to-[#EEF7F0]">
      <div className="container-page">

        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionHeading
            eyebrow="Our Services"
            title="Empowering Communities Through Meaningful Services"
            text="We provide healthcare, education, surveys, workshops, consultancy, awareness sessions, donations, blood collection, and many other community welfare initiatives."
          />

          <Button
            to="/services"
            variant="outline"
            className="self-start border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white transition-all duration-300"
          >
            View All Services
          </Button>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.id}
              to="/services"
              className="group overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden bg-slate-100">
                <img
                  src={serviceImageMap[service.image] ?? serviceImageMap["health.jpg"]}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                {/* Badge */}
                <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-emerald-700 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-lg">
                  Our Service
                </span>
              </div>

              {/* Content */}
              <div className="p-7">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.32em] text-emerald-700">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-700"></span>
                  <span>{service.title}</span>
                </div>

                <h3 className="mt-4 text-2xl font-semibold text-slate-950 transition-colors duration-300 group-hover:text-emerald-700">
                  {service.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7 text-[15px]">
                  {service.summary}
                </p>

                <div className="w-full h-px bg-slate-200 my-6"></div>

                <div className="flex items-center justify-between">
                  <span className="font-semibold text-emerald-700">Learn More</span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 transition-all duration-300 group-hover:bg-emerald-700 group-hover:text-white">
                    <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ServicesPreview;