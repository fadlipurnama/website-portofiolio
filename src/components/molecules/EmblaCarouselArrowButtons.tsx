import { ComponentPropsWithRef, useCallback, useEffect, useState } from "react";
import { EmblaCarouselType } from "embla-carousel";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  selectedIndex: number;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined,
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
      setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    const timeoutId = setTimeout(() => {
      onSelect(emblaApi);
    }, 0);

    emblaApi.on("reInit", onSelect).on("select", onSelect);
    return () => clearTimeout(timeoutId);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    selectedIndex,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

type PropType = ComponentPropsWithRef<"button">;

// Tombol Kiri (Prev)
export const PrevButton = ({ className, disabled, ...restProps }: PropType) => {
  return (
    <button
      className={`flex items-center justify-center transition-all  duration-300 disabled:opacity-30 ${className}`}
      type="button"
      disabled={disabled}
      {...restProps}
    >
      <MdOutlineKeyboardArrowLeft className="size-full" />
    </button>
  );
};

// Tombol Kanan (Next)
export const NextButton = ({ className, disabled, ...restProps }: PropType) => {
  return (
    <button
      className={`flex items-center justify-center transition-all duration-300 disabled:opacity-30 ${className}`}
      type="button"
      disabled={disabled}
      {...restProps}
    >
      <MdOutlineKeyboardArrowRight className="size-full" />
    </button>
  );
};