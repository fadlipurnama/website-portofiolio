"use client";

import { usePathname } from "next/navigation";
import { NavLink } from "../atoms/NavLink";
import { menuItems } from "@/store/util";

export const NavGroup = ({
  variant = "navbar",
  className = "",
  // icons,
}: {
  variant?: "navbar" | "footer" | "mobile";
  className?: string;
  // icons?: ReactNode;
}) => {
  const pathname = usePathname();

  return (
    <nav
      className={`flex flex-wrap justify-center items-center ${variant === "mobile" ? "flex-col" : ""} gap-4 h-fit ${className} ${className}`}
    >
      {menuItems.map((item) => {
        return (
          <NavLink
            key={item.href}
            href={item.href}
            isActive={pathname === item.href}
            variant={variant} 
          >
         
            {item.name}
          </NavLink>
        );
      })}
    </nav>
  );
};

{
  /* <nav
      className={`hidden lg:flex items-center gap-4 text-md px-8 h-10 font-semibold ${className}`}
    >
      {menuItems.map((item) => (
        <NavLink
          key={item.href}
          href={item.href}
          isActive={pathname === item.href}
        >
          {item.name}
        </NavLink>
      ))}
    </nav> */
}
