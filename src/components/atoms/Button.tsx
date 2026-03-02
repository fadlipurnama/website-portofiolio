// components/atoms/Button.tsx
import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outline" | "outline2" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string; // Untuk tambahan styling spesifik/luar
  type?: "button" | "submit" ;
}

export const Button = ({
  children,
  variant = "primary",
  type = "button",
  size = "md",
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "flex items-center justify-center gap-4 transition-all hover:cursor-pointer";

  const variants = {
    primary:
      "bg-brand-green border-1 border-brand-green text-white hover:bg-brand-green2",
    outline:
      "border-1 border-brand-green text-brand-green hover:bg-brand-green hover:text-white",
    outline2:
      "border-1 border-brand-gray text-white hover:bg-brand-gray2 hover:text-white",
    ghost: "bg-transparent text-main-text hover:bg-gray-100",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-3 text-base",
    lg: "px-6 py-4 text-xl",
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
