import { Link } from "react-router-dom";
import { navLinks, site } from "../../data/site";
import { services } from "../../data/services";
import uswa from "../../assets/uswa.png";
import Button from "./Button";

function Footer() {
  return (
    <footer className="bg-forest text-cream">
      <div className="container-page py-14 sm:py-16" data-aos="fade-up">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link to="/" className="group inline-flex items-center gap-3">
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 transition-transform duration-200 group-hover:scale-105">
                <img
                  src={uswa}
                  alt="Uswa Charity logo"
                  className="h-16 w-16 rounded-full object-contain"
                />
              </span>
              <span className="leading-tight">
                <span className="block font-display text-xl tracking-wide text-cream">
                  {site.name}
                </span>
                <span className="block text-[11px] uppercase tracking-[0.18em] text-mint/80">
                  Community Welfare
                </span>
              </span>
            </Link>

            <p className="text-hero-body mt-5 max-w-sm text-mint/80">
              {site.tagline}
            </p>

            <Button to="/donate" className="mt-6">
              Support Us
            </Button>
          </div>

          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber">
              Explore
            </p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-cream/85 transition-colors duration-200 hover:text-amber"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber">
              Key Programs
            </p>
            <ul className="mt-5 space-y-3">
              {services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    to="/services"
                    className="text-sm text-cream/85 transition-colors duration-200 hover:text-amber"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber">
              Get in Touch
            </p>
            <ul className="mt-5 space-y-4 text-sm text-cream/85">
              <li>
                <p className="text-[11px] uppercase tracking-[0.16em] text-mint/70">
                  Address
                </p>
                <p className="mt-1 leading-relaxed">{site.address}</p>
              </li>
              <li>
                <p className="text-[11px] uppercase tracking-[0.16em] text-mint/70">
                  Email
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-1 inline-block transition-colors duration-200 hover:text-amber"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <p className="text-[11px] uppercase tracking-[0.16em] text-mint/70">
                  Phone
                </p>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="mt-1 inline-block transition-colors duration-200 hover:text-amber"
                >
                  {site.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-5 text-xs text-mint/70 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.fullName}. All rights reserved.
          </p>
          <Link
            to="/contact"
            className="transition-colors duration-200 hover:text-amber"
          >
            Contact USWA
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
