import { FaLinkedinIn } from "react-icons/fa";
import { CertificateItem } from "../molecules/CertificateItem";
import { NavLink } from "../atoms/NavLink";
import Image from "next/image";

export const CertificateGallery = ({
  data,
}: {
  data: { id: string | number; image: string; name: string }[];
}) => {
  const TOTAL_SLOTS = 8;

  // 1. Ambil data asli dari API (maksimal 8 agar tidak berlebih)
  const actualData = data.slice(0, TOTAL_SLOTS);

  // 2. Hitung berapa sisa kotak yang kosong
  const emptySlotsCount = TOTAL_SLOTS - actualData.length;

  // 3. Buat array dummy untuk mengisi sisa yang kosong
  const emptySlots = Array.from({ length: emptySlotsCount }).map(
    (_, index) => ({
      id: `empty-${index}`,
      image: "/assets/dummy-image.png",
      name: "Coming Soon",
    }),
  );

  // 4. Gabungkan keduanya
  const finalDisplayData = [...actualData, ...emptySlots];
  return (
    <section
      id="cert-gallery-section"
      aria-labelledby="certificate-gallery"
      className="relative py-10 px-5 flex items-center justify-center "
    >
      <div className="absolute inset-0 z-0 after:content-[''] after:absolute after:inset-0 after:bg-linear-to-b after:from-[#3E3D3D]/60 after:to-[#343436]/80">
        <Image
          src="/assets/certificate/bg-wisuda.png"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
      </div>
 

      <div className="relative container z-30">
        <div className="grid grid-cols-12 lg:mx-14 xl:mx-36 gap-6">
          <div className="col-span-12">
            <h2
              id="certificate-gallery"
              className="relative w-fit text-3xl font-medium lg:text-3xl text-main-text after:absolute after:-bottom-5 after:left-1/2 after:-translate-x-1/2  after:h-1 after:w-2/5 after:lg:w-3/4 after:bg-brand-green2 after:content-[''] mb-8 mx-auto"
            >
              Certificate Gallery
            </h2>
          </div>

          {finalDisplayData.map((item) => (
            <CertificateItem
              key={item.id}
              src={item.image} // Ini data dari API kamu
              alt={item.name || "Certificate Thumbnail"}
            />
          ))}

          <div className="col-span-12 mt-14">
            <NavLink
              target="_blank"
              href="https://www.linkedin.com/in/fadli-purnama/"
              variant="normal"
              className="text-md w-fit mx-auto flex items-center gap-2"
            >
              <FaLinkedinIn className="size-4" />
              See on Linkedin
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};
