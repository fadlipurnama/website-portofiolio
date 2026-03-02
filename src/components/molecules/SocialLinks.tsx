// components/molecules/SocialLinks.tsx
import { NavLink } from "@/components/atoms/NavLink";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaGithubSquare,
} from "react-icons/fa";

// export const SocialLinks = () => (
//   <div className="flex flex-col w-max gap-1">
//     <div className="flex gap-1 items-center">
//

//     </div>
//     <p className="flex gap-2 items-center">
//       <NavLink href="/" variant="normal">
//         Download
//       </NavLink>
//       Curriculum Vitae
//     </p>
//   </div>
// );

// components/SocialLinks.tsx

// Import icon sosmed kamu di sini (misal dari lucide-react atau react-icons)

interface SocialLinksProps {
  iconSize?: string; // Contoh: "size-5" atau "size-6"
  gap?: string; // Contoh: "gap-4" atau "gap-6"
  showCV?: boolean; // Kontrol munculnya teks Download CV
  className?: string;
}

export const SocialLinks = ({
  iconSize = "size-12", // Default ukuran
  gap = "gap-1",
  showCV = false, // Default tidak muncul
  className = "",
}: SocialLinksProps) => {
  return (
    <div className={`flex w-fit flex-col gap-1 ${className}`}>
      {/* Container Icon Sosmed */}
      <div className={`flex items-center ${gap}`}>
        <NavLink
          ariaLabel="Kunjungi Instagram Muhammad Fadli Purnama"
          href="#"
        >
          <FaInstagramSquare className={iconSize} />
        </NavLink>
        <NavLink
          ariaLabel="Kunjungi Linkedin Muhammad Fadli Purnama"
          href="https://www.linkedin.com/in/fadli-purnama/"
          target="_blank"
        >
          <FaLinkedin className={iconSize} />
        </NavLink>
        <NavLink
          ariaLabel="Kunjungi Github Muhammad Fadli Purnama"
          href="https://github.com/fadlipurnama/"
          target="_blank"
        >
          <FaGithubSquare className={iconSize} />
        </NavLink>
        <NavLink ariaLabel="Kunjungi Facebook Muhammad Fadli Purnama" href="#">
          <FaFacebookSquare className={iconSize} />
        </NavLink>
      </div>

      {/* Logic Tampilkan CV */}
      {showCV && (
        <p className="flex gap-2 items-center text-sm font-medium">
          <NavLink target="_blank" href="https://drive.google.com/file/d/1UInz5CJOk4VWhdQmrCdUU1vRrfYZBVlC/view?usp=sharing" variant="normal">
            Download
          </NavLink>
          Curriculum Vitae
        </p>
      )}
    </div>
  );
};
