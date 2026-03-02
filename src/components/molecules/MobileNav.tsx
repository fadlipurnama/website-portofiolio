"use client";

import { getMenuIcon, menuItems } from "@/store/util";
import { NavLink } from "../atoms/NavLink"; // Pakai atom NavLink yang sudah ada
import { usePathname } from "next/navigation";
import { SocialLinks } from "./SocialLinks";
import { Button } from "../atoms/Button";

export const MobileNav = ({ isOpen }: { isOpen: boolean }) => {
  const pathname = usePathname();

  return (
    <div
      className={`absolute h-screen top-0 left-0 w-full bg-main-bg border-gray-100 pt-20 -z-10 transition-all duration-300 ease-in-out lg:hidden ${
        isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      }`}
    >
      <div className="container flex flex-col justify-between h-full py-5 mx-auto px-6 lg:px-16">
        <nav className="flex flex-col gap-5">
          {menuItems.map((item) => {
            const Icon = getMenuIcon(item.name);
            return (
              <NavLink
                key={item.href}
                variant="mobile"
                href={item.href}
                isActive={pathname === item.href}
                className="flex items-center gap-3 font-medium"
              >
                <Icon className="size-6" />
                {item.name}
              </NavLink>
            );
          })}
        </nav>
        <div className="flex flex-col gap-4">
          <SocialLinks gap="gap-4" iconSize="size-8" className=""/>
          <Button size="md" variant="primary" className="w-full">
            Get In Touch
          </Button>
        </div>
      </div>
    </div>
  );
};
