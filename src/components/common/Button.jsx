import { Link } from "react-router-dom";

const variants = {
  primary:
    "bg-amber text-ink hover:bg-amber-deep shadow-[0_8px_24px_-10px_rgba(199,146,42,0.75)] hover:shadow-[0_12px_28px_-10px_rgba(199,146,42,0.85)]",
  secondary:
    "bg-white/10 text-cream ring-1 ring-white/40 hover:bg-white/20 hover:ring-white/60 backdrop-blur-sm",
  dark: "bg-forest text-cream hover:bg-leaf",
  outline:
    "bg-transparent text-forest ring-1 ring-forest/25 hover:bg-mint",
};

function Button({
  children,
  to,
  href,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-md px-5 py-2 text-sm font-semibold tracking-wide transition-all duration-300 ${variants[variant] || variants.primary} ${className}`;

  if (to) {
    return (
      <Link to={to} onClick={onClick} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

export default Button;
