import Image from "next/image";

interface CertificateItemProps {
  src: string; // Tanda tanya (?) berarti boleh kosong
  alt: string;
}

export const CertificateItem = ({ src, alt }: CertificateItemProps) => {
  // Tentukan gambar yang akan dipakai
  //   const imageSource = src && src.length > 0 ? src : "/assets/dummy-image3.png";

  return (
    <div className="col-span-6 md:col-span-4 lg:col-span-3">
      <div className="col-span-6 md:col-span-4 lg:col-span-3">
        <Image
          src={src}
          alt={alt}
          width={400}
          height={300} // Rasio 4:3 (400x300)
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};
