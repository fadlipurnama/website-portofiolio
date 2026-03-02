"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { NavGroup } from "../molecules/NavGroup";
// import { ThemeToggle } from "../atoms/ThemeToggle";
import { MobileMenuButton } from "../atoms/MobileMenuButton";
import { MobileNav } from "../molecules/MobileNav";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [open, setOpen] = useState(false);
  // const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  useEffect(() => {
    // 1. Logika untuk mengunci scroll
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // 2. Logika untuk otomatis tutup menu saat pindah ke desktop
    const handleResize = () => {
      if (window.innerWidth >= 1024 && open) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // 3. Cleanup function (Sangat penting!)
    return () => {
      document.body.style.overflow = "unset"; // Pastikan scroll balik normal
      window.removeEventListener("resize", handleResize); // Hapus listener agar tidak berat
    };
  }, [open]);
  return (
    <header
      className={`sticky top-0 left-0 w-full h-18 z-50 transition-transform duration-300 ease-in-out bg-main-bg border-b border-gray-100 dark:border-gray-800 flex ${
        open
          ? "translate-y-0"
          : isVisible
            ? "translate-y-0"
            : "-translate-y-full"
      }`}
    >
      <div className="container px-6 lg:px-16 flex justify-between items-center mx-auto">
        <Link aria-label="Logo Fadlipurnama" href={"/"} className="w-44 h-10 relative">
          <Image
            src={"/assets/logo.png"}
            alt="Logo Fadlipurnama"
            className="object-content"
            priority
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </Link>
        <div className="flex items-center gap-4 text-md font-semibold">
          <NavGroup variant="navbar"/>
          {/* <ThemeToggle /> */}
          <MobileMenuButton isOpen={open} onClick={() => setOpen(!open)} />
          <MobileNav isOpen={open} />
        </div>
      </div>
    </header>
  );
}
