"use client";

import { useTheme } from "next-themes";
// import { useThemeStore } from "@/store/useThemeStore";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  // const themeState = useThemeStore((state) => state.theme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handle = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(handle);
  }, []);
  
  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 transition-all duration-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-none"
      aria-label="Toggle Theme"
    >
      {/* Kita bisa gunakan theme dari next-themes atau themeState dari Zustand di sini */}
      {theme === "dark" ? (
        <MdOutlineLightMode className="w-6 h-6 text-yellow-400" />
      ) : (
        <MdOutlineDarkMode className="w-6 h-6 text-gray-700" />
      )}
    </button>
  );
};
