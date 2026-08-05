import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navLinks, site } from "../../data/site";
import { services } from "../../data/services";
import Button from "./Button";
import uswa from "../../assets/uswa.png";
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [booksOpen, setBooksOpen] = useState(false);
  const [mobileBooksOpen, setMobileBooksOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const dropdownRef = useRef(null);
  const booksRef = useRef(null);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isServicesActive =
    location.pathname === "/services" || location.pathname.startsWith("/services/");

  const books = [
    {
      id: "education-guide",
      title: "Education Guide",
      description: "A downloadable resource to support learning and community education.",
      downloadUrl: "/docs/book1.pdf",
    },
    {
      id: "health-handbook",
      title: "Health Handbook",
      description: "A practical PDF for wellness, health awareness, and family care.",
      downloadUrl: "/docs/book2.pdf",
    },
  ];

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setBooksOpen(false);
    setMobileServicesOpen(false);
    setSelectedBook(null);
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const currentY = window.scrollY;
      const maxScroll = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight,
      );

      setScrolled(currentY > 24);
      setProgress(Math.min(100, (currentY / maxScroll) * 100));
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        setServicesOpen(false);
        setMobileServicesOpen(false);
        setBooksOpen(false);
        setMobileBooksOpen(false);
        setSelectedBook(null);
      }
    };

    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
      if (booksRef.current && !booksRef.current.contains(e.target)) {
        setBooksOpen(false);
        setSelectedBook(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const solid = scrolled || open || !isHome || servicesOpen || booksOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${solid
        ? "border-b border-white/10 bg-forest/95 shadow-lg backdrop-blur-md"
        : "border-b border-transparent bg-transparent"
        }`}
    >
      <div
        className={`container-page relative flex items-center justify-between transition-all duration-300 ${scrolled ? "h-16 sm:h-16" : "h-16 sm:h-16"
          }`}
      >
        <Link
          to="/"
          className="group z-10 flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
          onClick={() => setOpen(false)}
        >
          <span
            className={`flex items-center justify-center overflow-hidden rounded-full bg-white shadow-md transition-all duration-300 group-hover:scale-105 ${scrolled ? "h-11 w-11" : "h-12 w-12"
              }`}
          >
            <img
              src={uswa}
              alt="Uswa Charity logo"
              className="h-9 w-9 object-contain p-0.5"
            />
          </span>

          <span className="leading-tight">
            <span className="block font-display text-lg tracking-wide text-cream sm:text-xl">
              {site.name}
            </span>

            <span
              className={`hidden text-[11px] uppercase tracking-[0.18em] text-mint/80 transition-all duration-300 sm:block ${scrolled ? "h-0 overflow-hidden opacity-0" : "opacity-100"
                }`}
            >
              Community Welfare
            </span>
          </span>
        </Link>

        <nav
          className="pointer-events-none absolute inset-x-0 hidden items-center justify-center lg:flex"
          aria-label="Main Navigation"
        >
          <div className="pointer-events-auto flex items-center gap-7">
            {navLinks.map((link) => {
              if (link.path === "/services") {
                return (
                  <div
                    key={link.path}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      type="button"
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                      onClick={() => setServicesOpen((prev) => !prev)}
                      className={`group relative inline-flex items-center gap-1.5 py-1 text-sm font-medium tracking-wide transition-colors duration-200 ${isServicesActive || servicesOpen
                        ? "text-amber"
                        : "text-cream/85 hover:text-cream"
                        }`}
                    >
                      <span>Services</span>
                      <svg
                        className={`h-3.5 w-3.5 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""
                          }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                      <span
                        aria-hidden="true"
                        className={`absolute -bottom-1 left-0 h-[2px] w-full origin-left bg-amber transition-transform duration-300 ease-out ${isServicesActive || servicesOpen
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                          }`}
                      />
                    </button>

                    <div
                      className={`absolute left-1/2 top-full z-50 w-[min(92vw,34rem)] -translate-x-1/2 pt-3 transition-all duration-200 ${servicesOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-1 opacity-0 pointer-events-none"
                        }`}
                    >
                      <div className="overflow-hidden rounded-2xl border border-white/10 bg-forest shadow-2xl shadow-black/30 ring-1 ring-white/10">
                        <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
                          <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber">
                              Our Programs
                            </p>
                            <p className="mt-0.5 text-sm text-mint/80">
                              Explore community services
                            </p>
                          </div>
                          <Link
                            to="/services"
                            className="text-xs font-semibold text-cream transition hover:text-amber"
                            onClick={() => setServicesOpen(false)}
                          >
                            View All →
                          </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-1 p-2">
                          {services.map((service) => (
                            <Link
                              key={service.id}
                              to={`/services/${service.id}`}
                              onClick={() => setServicesOpen(false)}
                              className="group/item rounded-xl px-3 py-3 transition hover:bg-white/8"
                            >
                              <p className="text-sm font-semibold text-cream transition group-hover/item:text-amber">
                                {service.title}
                              </p>
                              <p className="mt-0.5 line-clamp-1 text-xs text-mint/65">
                                {service.category}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              if (link.path === "/books") {
                return (
                  <div
                    key={link.path}
                    ref={booksRef}
                    className="relative"
                    onMouseEnter={() => setBooksOpen(true)}
                    onMouseLeave={() => setBooksOpen(false)}
                  >
                    <button
                      type="button"
                      aria-expanded={booksOpen}
                      aria-haspopup="true"
                      onClick={() => setBooksOpen((prev) => !prev)}
                      className={`group relative inline-flex items-center gap-1.5 py-1 text-sm font-medium tracking-wide transition-colors duration-200 ${
                        booksOpen ? "text-amber" : "text-cream/85 hover:text-cream"
                      }`}
                    >
                      <span>Books</span>
                      <svg
                        className={`h-3.5 w-3.5 transition-transform duration-300 ${
                          booksOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    <div
                      className={`absolute left-1/2 top-full z-50 w-[min(92vw,26rem)] -translate-x-1/2 pt-3 transition-all duration-200 ${
                        booksOpen
                          ? "visible translate-y-0 opacity-100"
                          : "invisible -translate-y-1 opacity-0 pointer-events-none"
                      }`}
                    >
                      <div className="overflow-hidden rounded-2xl border border-white/10 bg-forest shadow-2xl shadow-black/30 ring-1 ring-white/10">
                        <div className="p-4">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber">
                            Downloadable PDFs
                          </p>
                          <p className="mt-1 text-sm text-mint/80">
                            Select a resource and download it.
                          </p>
                        </div>
                        <div className="space-y-1 p-2">
                          {books.map((book) => (
                            <button
                              key={book.id}
                              type="button"
                              onClick={() => setSelectedBook(book)}
                              className={`group flex w-full flex-col gap-1 rounded-xl px-4 py-3 text-left transition ${
                                selectedBook?.id === book.id
                                  ? "bg-white/8 text-amber"
                                  : "text-cream hover:bg-white/5"
                              }`}
                            >
                              <span className="text-sm font-semibold">{book.title}</span>
                              <span className="text-xs text-mint/65">{book.description}</span>
                            </button>
                          ))}
                        </div>
                        {selectedBook && (
                          <div className="border-t border-white/10 px-4 py-4">
                            <div className="mb-3 text-sm text-cream">
                              Ready to download: <span className="font-semibold text-amber">{selectedBook.title}</span>
                            </div>
                            <a
                              href={selectedBook.downloadUrl}
                              download
                              className="inline-flex items-center justify-center rounded-full bg-amber px-4 py-2 text-sm font-semibold text-ink transition hover:bg-amber/90"
                              onClick={() => setBooksOpen(false)}
                            >
                              Download PDF
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `group relative inline-flex items-center justify-center py-1 text-sm font-medium tracking-wide transition-colors duration-200 ${isActive ? "text-amber" : "text-cream/85 hover:text-cream"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.label}</span>
                      <span
                        aria-hidden="true"
                        className={`absolute -bottom-1 left-0 h-[2px] w-full origin-left bg-amber transition-transform duration-300 ease-out ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                          }`}
                      />
                    </>
                  )}
                </NavLink>
              );
            })}
          </div>
        </nav>

        <div className="z-10 hidden lg:block">
          <Button
            to="/donate"
            className="min-w-[132px] rounded-full !px-5 !py-2 hover:-translate-y-0.5"
          >
            Support Us
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="z-10 flex h-10 w-10 items-center justify-center rounded-md text-cream ring-1 ring-white/20 transition-colors hover:bg-white/5 lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <div className="relative flex flex-col items-center justify-center gap-1.5" aria-hidden="true">
            <span
              className={`block h-0.5 w-5 bg-cream transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""
                }`}
            />
            <span
              className={`block h-0.5 w-5 bg-cream transition-opacity duration-300 ${open ? "opacity-0" : "opacity-100"
                }`}
            />
            <span
              className={`block h-0.5 w-5 bg-cream transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""
                }`}
            />
          </div>
        </button>
      </div>

      <div className="h-[2px] w-full bg-white/10">
        <div
          className="h-full bg-amber transition-[width] duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div
        id="mobile-menu"
        className={`grid transition-all duration-300 ease-in-out lg:hidden ${open ? "grid-rows-[1fr] opacity-100" : "pointer-events-none grid-rows-[0fr] opacity-0"
          }`}
      >
        <div className="max-h-[80vh] overflow-y-auto border-t border-white/10 bg-forest/98 backdrop-blur-lg">
          <nav
            className="container-page flex flex-col items-stretch gap-1 py-5"
            aria-label="Mobile Navigation"
          >
            {navLinks.map((link) => {
              if (link.path === "/services") {
                return (
                  <div key={link.path} className="rounded-xl">
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen((prev) => !prev)}
                      className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-base font-medium transition ${isServicesActive || mobileServicesOpen
                        ? "bg-white/8 text-amber"
                        : "text-cream hover:bg-white/5"
                        }`}
                    >
                      <span>Services</span>
                      <svg
                        className={`h-4 w-4 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""
                          }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ${mobileServicesOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                        }`}
                    >
                      <div className="overflow-hidden">
                        <div className="space-y-1 px-2 pb-2 pt-1">
                          <Link
                            to="/services"
                            onClick={() => setOpen(false)}
                            className="block rounded-lg px-4 py-2.5 text-sm font-semibold text-amber"
                          >
                            All Services
                          </Link>
                          {services.map((service) => (
                            <Link
                              key={service.id}
                              to={`/services/${service.id}`}
                              onClick={() => setOpen(false)}
                              className="block rounded-lg px-4 py-2.5 text-sm text-mint/90 transition hover:bg-white/5 hover:text-cream"
                            >
                              {service.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              if (link.path === "/books") {
                return (
                  <div key={link.path} className="rounded-xl">
                    <button
                      type="button"
                      onClick={() =>
                        setMobileBooksOpen((prev) => {
                          if (prev) {
                            setSelectedBook(null);
                          }
                          return !prev;
                        })
                      }
                      className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-base font-medium transition ${
                        mobileBooksOpen ? "bg-white/8 text-amber" : "text-cream hover:bg-white/5"
                      }`}
                    >
                      <span>Books</span>
                      <svg
                        className={`h-4 w-4 transition-transform duration-300 ${
                          mobileBooksOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ${
                        mobileBooksOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="space-y-1 px-2 pb-2 pt-1">
                          {books.map((book) => (
                            <button
                              key={book.id}
                              type="button"
                              onClick={() => setSelectedBook(book)}
                              className={`block w-full rounded-lg px-4 py-2.5 text-left text-sm transition ${
                                selectedBook?.id === book.id ? "bg-white/8 text-amber" : "text-mint/90 hover:bg-white/5 hover:text-cream"
                              }`}
                            >
                              {book.title}
                            </button>
                          ))}
                          {selectedBook && (
                            <a
                              href={selectedBook.downloadUrl}
                              download
                              className="inline-flex w-full items-center justify-center rounded-full bg-amber px-4 py-2 text-sm font-semibold text-ink transition hover:bg-amber/90"
                              onClick={() => setOpen(false)}
                            >
                              Download {selectedBook.title}
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-base font-medium transition ${isActive
                      ? "bg-white/8 font-semibold text-amber"
                      : "text-cream hover:bg-white/5"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              );
            })}

            <Button
              to="/donate"
              className="mt-3 w-full justify-center rounded-full !px-5 !py-2"
              onClick={() => setOpen(false)}
            >
              Support Us
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
