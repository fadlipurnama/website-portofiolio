import { MdOutlineEmail } from "react-icons/md";
import { Button } from "../atoms/Button";
import { SocialLinks } from "../molecules/SocialLinks";
import Image from "next/image";
import Link from "next/link";

function Heroes() {
  return (
    <section id="heroes" className="section-container">
      <div className="grid mt-10  lg:mt-20 xl:mt-10 2xl:mt-0 lg:gap-x-10 xl:gap-x-20 grid-cols-12">
        {/* Kolom Kiri */}
        <div className="col-span-12 lg:col-span-6 xl:col-span-7 gap-y-8 flex flex-col py-10 h-full order-2 lg:order-1">
          <h1 className="text-main-text text-3xl font-bold p-10 sr-only">
            Home Page
          </h1>
          <div className="flex flex-col my-auto gap-2">
            <h2 className="text-xl lg:text-3xl text-brand-green2 font-semibold tracking-widest">
              Hi, I&apos;m Muhammad Fadli Purnama
            </h2>
            <h3 className="text-3xl lg:text-5xl text-main-text font-bold leading-tight">
              Web Developer | Front-end Developer
            </h3>
            <p className="text-lg lg:text-xl text-main-text leading-relaxed">
              A passionate Web Developer with 1 year of experience specializing
              in building responsive, websites using modern technologies like
              React and Next.js.
            </p>

            <Button variant="primary" size="md" className="w-max text-lg">
              <Link
                href={"mailto:fadlypurnama@gmail.com"}
                className="flex items-center gap-2"
              >
                Let&apos;s Talk
                <MdOutlineEmail className="size-6" />
              </Link>
            </Button>
          </div>

          <SocialLinks showCV />
        </div>

        {/* Content Kanan (Foto) */}
        <div className="col-span-12 h-[80%] lg:col-span-6 xl:col-span-5 relative order-1 lg:order-2">
          <div className="relative w-full max-w-full aspect-4/3  lg:aspect-3/4">
            <div className="size-full lg:h-134 lg:w-86 lg:right-10 bottom-0 z-10 absolute">
              <Image
                src="/assets/heroes/black-rectangle3.jpg"
                alt="black rectangle"
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
            <div className="z-30 size-64 sm:size-96 md:size-125 lg:h-125 lg:w-110 left-0 right-0 mx-auto lg:left-auto bottom-0 absolute">
              <Image
                src="/assets/heroes/fadli-photo4.png"
                alt="Foto Fadli Purnama"
                fill
                priority
                fetchPriority="high"
                className="object-contain object-bottom"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Heroes;
