import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import Button from "../common/Button";
import { site } from "../../data/site";

const slides = [
  {
    id: 1,
    image: "https://i.pinimg.com/1200x/65/1c/c8/651cc8657bdd26652e25d131f894f436.jpg",
    brand: site.name,
    title: "Building healthier, educated, and empowered communities.",
    text: site.tagline,
    primary: { label: "Donate Now", to: "/donate" },
    secondary: { label: "Explore Services", to: "/services" },
  },
  {
    id: 2,
    image: "https://i.pinimg.com/1200x/3c/fa/09/3cfa091dac27bacace6dead1f6bb70fc.jpg",
    brand: site.name,
    title: "Health, education, and awareness that reach every household.",
    text: "From medical camps to learning support — practical care for families who need it most.",
    primary: { label: "Our Services", to: "/services" },
    secondary: { label: "About USWA", to: "/about" },
  },
  {
    id: 3,
    image: "https://i.pinimg.com/1200x/4f/73/4f/4f734ffab94a3e30383382460adc951a.jpg",
    brand: site.name,
    title: "Your support fuels hope, relief, and lasting change.",
    text: "Join donation drives, blood collection campaigns, and community programs that save lives.",
    primary: { label: "Support USWA", to: "/donate" },
    secondary: { label: "Contact Us", to: "/contact" },
  },
];

function Hero() {
  return (
    <section className="hero-swiper relative h-dvh max-h-dvh w-full overflow-hidden bg-forest">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        loop
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        className="!h-full !w-full !overflow-hidden"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id} className="!h-full !overflow-hidden">
            {({ isActive }) => (
              <div className="relative flex h-full min-h-0 w-full items-center justify-center overflow-hidden">
                {/* Background Image with Ken Burns Zoom Effect */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  loading={index === 0 ? "eager" : "lazy"}
                  {...(index === 0 && { fetchpriority: "high" })}
                  className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[7000ms] ease-out ${
                    isActive ? "scale-110" : "scale-100"
                  }`}
                />

                {/* Overlays */}
                <div className="hero-scrim absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
                <div className="grain absolute inset-0 opacity-40 pointer-events-none" />

                {/* Content Container */}
                <div className="container-page relative z-10 flex w-full max-w-5xl flex-col items-center px-4 pb-24 pt-28 text-center sm:px-5 sm:pb-24">
                  {/* Subhead / Brand */}
                  <span
                    className={`text-hero-brand text-white transition-all duration-700 delay-100 ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    {slide.brand}
                  </span>

                  {/* Main Title */}
                  <h1
                    className={`text-hero-title mt-4 max-w-3xl text-white sm:mt-6 transition-all duration-700 delay-200 ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    {slide.title}
                  </h1>

                  {/* Body Text */}
                  <p
                    className={`text-hero-body mt-3 max-w-xl text-mint/90 sm:mt-5 transition-all duration-700 delay-300 ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    {slide.text}
                  </p>

                  {/* Action Buttons */}
                  <div
                    className={`btn-row-mobile mt-6 flex max-w-md flex-wrap items-center justify-center gap-3 sm:mt-10 sm:max-w-none sm:gap-4 transition-all duration-700 delay-400 ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    <Button to={slide.primary.to}>
                      {slide.primary.label}
                    </Button>
                    <Button to={slide.secondary.to} variant="secondary">
                      {slide.secondary.label}
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Hero;