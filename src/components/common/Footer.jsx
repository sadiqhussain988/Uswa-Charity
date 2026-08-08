import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { navLinks, site } from "../../data/site";
import { services } from "../../data/services";
import uswa from "../../assets/uswa.png";
import Button from "./Button";

function Footer() {
  return (
    <footer className="bg-forest text-cream">
      {/* Top */}
      <div className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Logo */}
          <div className="lg:col-span-4">
            <Link
              to="/"
              className="inline-flex items-center gap-4 group"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 transition group-hover:scale-105">
                <img
                  src={uswa}
                  alt="USWA"
                  className="h-16 w-16 object-contain rounded-full"
                />
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold">
                  {site.name}
                </h2>

                <p className="text-xs uppercase tracking-[4px] text-mint/70">
                  Together We Change Lives
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-sm leading-7 text-mint/80">
              {site.tagline}
            </p>

            <Button to="/donate" className="mt-7">
              Donate Now
            </Button>

            {/* Social */}
            <div className="mt-8 flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-amber hover:text-forest transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-amber hover:text-forest transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-amber hover:text-forest transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[3px] text-amber">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {navLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-cream/80 hover:text-amber transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="lg:col-span-3">
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[3px] text-amber">
              Our Programs
            </h3>

            <ul className="space-y-4">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    to="/services"
                    className="text-sm text-cream/80 hover:text-amber transition"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[3px] text-amber">
              Contact Us
            </h3>

            <div className="space-y-6 text-sm">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-amber" />
                <p className="leading-6 text-cream/80">
                  {site.address}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-amber" />
                <a
                  href={`mailto:${site.email}`}
                  className="hover:text-amber transition"
                >
                  {site.email}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-amber" />
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="hover:text-amber transition"
                >
                  {site.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-4 py-5 text-center text-sm text-mint/70 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.fullName}. All Rights Reserved.
          </p>

          <div className="flex justify-center gap-6">
            <Link
              to="/privacy"
              className="hover:text-amber transition"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="hover:text-amber transition"
            >
              Terms & Conditions
            </Link>

            <Link
              to="/contact"
              className="hover:text-amber transition"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;