import { Link } from "react-router-dom";
import { navLinks, site } from "../../data/site";
import { services } from "../../data/services";

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-cream">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(61,139,110,0.18),transparent_40%),radial-gradient(circle_at_90%_80%,rgba(199,146,42,0.12),transparent_35%)]" />
      <div className="container-page relative grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <p className="font-display text-3xl tracking-wide">{site.name}</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-mint/80">
            {site.tagline}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber">Explore</p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-sm text-mint/85 transition hover:text-cream">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber">Programs</p>
          <ul className="mt-4 space-y-2">
            {services.slice(0, 5).map((service) => (
              <li key={service.id}>
                <Link
                  to="/services"
                  className="text-sm text-mint/85 transition hover:text-cream"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-mint/85">
            <li>{site.address}</li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-cream">
                {site.email}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-cream">
                {site.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-page relative border-t border-white/10 py-6 text-sm text-mint/60">
        <p>© {new Date().getFullYear()} {site.fullName}. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
