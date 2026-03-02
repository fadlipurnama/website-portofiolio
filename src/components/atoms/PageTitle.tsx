"use client";

import { usePathname } from "next/navigation";

export const PageTitle = () => {
  const pathname = usePathname();

  // Mengambil kata terakhir dari URL
  // Contoh: /about -> about, /projects/web -> web
  const currentPath = pathname.split("/").filter(Boolean).pop() || "home";

  return (
    <span className="capitalize font-bold text-brand-green">
      {currentPath.replace(/-/g, " ")}
    </span>
  );
};
