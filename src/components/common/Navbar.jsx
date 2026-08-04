import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks, site } from "../../data/site";
import Button from "./Button";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-forest/95 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between sm:h-20">
        <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber font-display text-lg font-bold text-ink transition group-hover:scale-105">
            U
          </span>
          <span className="leading-tight">
            <span className="block font-display text-xl tracking-wide text-cream">
              {site.name}
            </span>
            <span className="hidden text-[11px] uppercase tracking-[0.18em] text-mint/80 sm:block">
              Community Welfare
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative text-sm font-medium tracking-wide transition ${
                  isActive ? "text-amber" : "text-cream/85 hover:text-cream"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Button to="/donate" className="!px-4 !py-2.5">
            Support Us
          </Button>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-md text-cream ring-1 ring-white/20 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-5 bg-cream transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`block h-0.5 w-5 bg-cream transition ${open ? "opacity-0" : ""}`} />
            <span
              className={`block h-0.5 w-5 bg-cream transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-forest lg:hidden">
          <nav className="container-page flex flex-col gap-2 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-3 py-3 text-base ${
                    isActive ? "bg-white/10 text-amber" : "text-cream"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Button to="/donate" className="mt-2" onClick={() => setOpen(false)}>
              Support Us
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;
