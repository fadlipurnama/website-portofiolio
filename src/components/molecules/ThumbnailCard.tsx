import Image from "next/image";
import Link from "next/link";

// components/organisms/ThumbnailCard.tsx

export const ThumbnailCard = ({
  thumbnail,
  altImage,
  url,
  className,
  target,
  children,
}: {
  thumbnail: string;
  altImage: string;
  url: string;
  className?: string;
  target?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={`${className} flex gap-4 flex-col`}>
      <Link
        target={target}
        href={url}
        className="relative aspect-video group cursor-pointer overflow-hidden"
      >
        <Image
          // onClick={() => {
          //   router.push(`${url}`);
          // }}
          src={thumbnail}
          alt={altImage}
          sizes="(max-width: 1024px) 100vw, 50vw"
          fill
          priority
          className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:opacity-70"
        />
      </Link>

      {children}
    </div>
  );
};
