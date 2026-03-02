"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ThumbnailCard } from "../molecules/ThumbnailCard";
import { IoArrowForward } from "react-icons/io5";
import { NavLink } from "../atoms/NavLink";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "../molecules/EmblaCarouselArrowButtons";
import ClassNames from "embla-carousel-class-names";
import { useEffect, useState } from "react";

export default function ProductCarousel({
  title,
  data,
}: {
  title: string;
  data: {
    id: number | string;
    name: string;
    image: string;
    category: string[];
    url: {
      figma?: string;
      github?: string;
    };
  }[];
}) {
  const [isReady, setIsReady] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
    },
    [ClassNames()],
  );

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    selectedIndex,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  const safeId = title
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Spasi jadi -
    .replace(/[^\w-]+/g, ""); // Hapus karakter aneh (simbol, dll)

  const headingId = `${safeId}`;

  // Gunakan useEffect untuk set ready setelah komponen naik (mount)
  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <section
      id="products-carousel"
      aria-labelledby={headingId}
      className="section-container"
      style={{}}
    >
      <h2
        id={headingId}
        className="relative w-fit text-3xl lg:text-4xl mb-20 text-main-text font-medium after:absolute after:-bottom-5 after:left-0 after:h-1 after:w-2/5 after:lg:w-2/4 after:bg-brand-green2 after:content-['']"
      >
        {title}
      </h2>
      {/* Viewport Slider */}
      <div className={`relative ${isReady ? "block" : "hidden"}`}>
        <div
          className="cursor-grab select-none overflow-hidden active:cursor-grabbing"
          ref={emblaRef}
        >
          <div className="flex touch-pan-y touch-pinch-zoom">
            {data?.map((project, index) => {
              // Cek judul Carousel-nya mengandung kata apa
              const isWebCarousel = title.toLowerCase().includes("web");
              const isUIUXCarousel = title.toLowerCase().includes("ui ux");

              // Tentukan prioritas URL berdasarkan jenis Carousel
              let targetUrl = "#";

              if (isWebCarousel && project.url.github) {
                targetUrl = project.url.github; // Prioritas GitHub untuk Carousel Web
              } else if (isUIUXCarousel && project.url.figma) {
                targetUrl = project.url.figma; // Prioritas Figma untuk Carousel UI/UX
              } else {
                // Fallback jika tidak sesuai kata kunci di atas
                targetUrl = project.url.figma || project.url.github || "#";
              }
              return (
                <div
                  key={project.id}
                  className={"flex-[0_0_100%] lg:flex-[0_0_40%] min-w-0"}
                >
                  <ThumbnailCard
                    url={targetUrl}
                    target="_blank"
                    altImage={project.name}
                    thumbnail={project.image}
                    className={`lg:-ml-12 transition-all duration-500 ease-in-out ${
                      index === selectedIndex
                        ? "scale-100 opacity-100 z-10"
                        : "scale-70 opacity-40 blur-[1px]"
                    }`}
                  >
                    <div className="flex justify-between mt-0">
                      <h3 className="text-xl font-medium">{project.name}</h3>
                      <NavLink
                        target="_blank"
                        variant="normal"
                        href={targetUrl}
                        className="flex items-center gap-1 text-sm lg:text-lg"
                      >
                        View
                        <IoArrowForward className="size-5 lg:size-6" />
                      </NavLink>
                    </div>
                  </ThumbnailCard>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigasi Melayang (Absolute) */}
        <PrevButton
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
          className="absolute left-2 lg:left-10 top-1/2 -translate-y-1/2 z-30 size-12 lg:size-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white transition-all border border-white/10 hover:cursor-pointer"
        />

        <NextButton
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
          className="absolute right-2 lg:right-10 top-1/2 -translate-y-1/2 z-30 size-12 lg:size-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white transition-all border border-white/10 hover:cursor-pointer"
        />
      </div>
    </section>
  );
}
