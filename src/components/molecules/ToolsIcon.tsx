import Image from "next/image";

export const ToolIcon = ({
  src,
  alt,
}: {
  src: string;
  alt: string;
  sizes?: string;
}) => (
  <div className="rounded-lg flex items-center justify-center bg-brand-gray2 p-4 aspect-square hover:border hover:border-brand-green2 transition-all group">
    <Image
      src={src}
      alt={alt}
      width={100}
      height={100}
      className="object-contain group-hover:scale-110 transition-transform"
    />
  </div>
);
