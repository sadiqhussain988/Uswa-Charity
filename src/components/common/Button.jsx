import { Link } from "react-router-dom";

const variants = {
  primary:
    "bg-amber- text-ink hover:bg-amber-deep shadow-[0_10px_30px_-12px_rgba(199,146,42,0.7)]",
  secondary:
    "bg-white/10 text-white ring-1 ring-white/35 hover:bg-white/18 backdrop-blur-sm",
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
  const classes = `inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold tracking-wide transition duration-300 ${variants[variant]} ${className}`;

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
