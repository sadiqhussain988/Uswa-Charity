import { missionVision } from "../../data/site";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";

const images = {
  main: "https://i.pinimg.com/1200x/2c/26/27/2c262773e214e186120f5c0e52f8d92f.jpg",
  education:
    "https://i.pinimg.com/1200x/8d/f1/a7/8df1a73790a5e1003590a1155337eb89.jpg",
  health:
    "https://i.pinimg.com/1200x/e8/16/5f/e8165f2319cebc257a3f8530981e3035.jpg",
};

function MissionStrip() {
  return (
    <section className="py-12">
      <div className="container-page grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
        {/* Left Content */}
        <div>
          <SectionHeading
            eyebrow="Who We Are"
            title="A welfare organization rooted in service and community trust."
            text={missionVision.mission}
          />

          <div
            className="btn-row-mobile mt-2 flex max-w-sm flex-wrap items-center gap-3 sm:max-w-none sm:gap-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Button to="/about" variant="dark">
              Learn About USWA
            </Button>

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/45">
              Since 2013
            </span>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-2 sm:mt-10 sm:gap-4">
            {/* Education */}
            <div
              className="group relative overflow-hidden rounded-2xl"
              data-aos="fade-right"
            >
              <img
                src={images.education}
                alt="Children learning through education programs"
                className="h-28 w-full object-cover transition-all duration-700 group-hover:scale-110 sm:h-44"
              />

              {/* Glass Shine */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -left-[150%] top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent transition-all duration-2000 group-hover:left-[160%]" />
              </div>
            </div>

            {/* Health */}
            <div
              className="group relative overflow-hidden rounded-2xl"
              data-aos="fade-left"
            >
              <img
                src={images.health}
                alt="Community health and support activities"
                className="h-28 w-full object-cover transition-all duration-700 group-hover:scale-110 sm:h-44"
              />

              {/* Glass Shine */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -left-[150%] top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent transition-all duration-2000 group-hover:left-[160%]" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Main Image */}
        <div
          className="group relative overflow-hidden rounded-2xl sm:rounded-3xl"
          data-aos="fade-left"
        >
          <img
            src={images.main}
            alt="USWA community volunteers serving together"
            className="h-[240px] w-full object-cover transition-all duration-700 group-hover:scale-105 sm:h-[420px] lg:h-[560px]"
          />

          {/* Glass Shine */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -left-[150%] top-0 h-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent transition-all duration-2000 group-hover:left-[170%]" />
          </div>

          {/* Soft Glass Overlay */}
          <div className="absolute inset-0 bg-white/0 transition-all duration-500 group-hover:bg-white/5" />
        </div>
      </div>
    </section>
  );
}

export default MissionStrip;