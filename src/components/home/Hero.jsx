import Button from "../common/Button";
import { site } from "../../data/site";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=2000&q=80";

function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-forest">
      <img
        src={HERO_IMAGE}
        alt="Community members working together"
        className="absolute inset-0 h-full w-full scale-105 object-cover animate-fade-in"
      />
      <div className="hero-scrim absolute inset-0" />
      <div className="grain absolute inset-0 opacity-50" />

      <div className="container-page relative flex min-h-[100svh] flex-col justify-end pb-16 pt-28 sm:pb-24">
        <p className="animate-fade-up font-display text-5xl tracking-[0.08em] text-cream sm:text-7xl md:text-8xl">
          {site.name}
        </p>
        <h1 className="animate-fade-up animate-delay-1 mt-5 max-w-2xl font-display text-2xl leading-snug text-cream sm:text-3xl md:text-4xl">
          Building healthier, educated, and empowered communities.
        </h1>
        <p className="animate-fade-up animate-delay-2 mt-4 max-w-lg text-base leading-relaxed text-mint/90 sm:text-lg">
          {site.tagline}
        </p>
        <div className="animate-fade-up animate-delay-3 mt-8 flex flex-wrap gap-3">
          <Button to="/donate">Donate Now</Button>
          <Button to="/services" variant="secondary">
            Explore Services
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
