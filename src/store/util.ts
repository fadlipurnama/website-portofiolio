import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";

import { IoGridSharp } from "react-icons/io5";
import { FaThList, FaAddressBook } from "react-icons/fa";

import { IconType } from "react-icons";

export const formatDate = (dateString: string | null, isCurrent: boolean) => {
  if (isCurrent || !dateString) return "Present";

  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
};

export const menuItems = [
  { name: "Home", href: "/" },
  { name: "Project", href: "#selected-project" },
  { name: "Blog", href: "#" },
  { name: "About Me", href: "#about-me" },
  { name: "Contact", href: "#footer" },
];

export const getMenuIcon = (name: string): IconType => {
  const icons: Record<string, IconType> = {
    Home: AiFillHome,
    Project: IoGridSharp,
    Blog: FaThList,
    "About Me": AiFillInfoCircle,
    Contact: FaAddressBook,
  };
  return icons[name] || AiFillHome;
};
