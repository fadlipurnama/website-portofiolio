// atoms/NavLink.tsx
import Link from "next/link";

const VARIANTS = {
  navbar: {
    base: "text-main-text hover:text-brand-green font-semibold hidden lg:block",
    active: "border-b-2 border-brand-green",
  },
  footer: {
    base: " hover:text-brand-green font-medium tracking-widest",
    active: "font-semibold text-brand-green",
  },
  mobile: {
    base: "flex items-center gap-3 hover:text-brand-green w-full block lg:hidden",
    active: "text-brand-green",
  },
  normal: {
    base: "text-brand-green text-main-text hover:text-brand-green",
    active: "",

  },
};

export const NavLink = ({
  href,
  children,
  isActive=false,
  ariaLabel,
  variant = "normal",
  className = "", 
  target
}: {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  ariaLabel?: string;
  variant?: "navbar" | "footer" | "mobile" | "normal";
  className?: string; 
  target?: string
}) => {
  const styles = VARIANTS[variant];

  return (
    <Link
      aria-label={ariaLabel}
      href={href}
      className={`transition-all duration-300 ${styles.base} ${isActive ? styles?.active : ""} ${className}`}
      target={target}
    >
      {children}
    </Link>
  );
};
// <Link
//   href={href}
//   aria-label={ariaLabel}
//   target={target}
//   className={`${className} transition-all duration-300 ${
//     isActive
//       ? "text-brand-green lg:border-b-2 border-brand-green"
//       : "text-main-text hover:text-brand-green2"
//   }`}
// >
//   {children}
// </Link>
