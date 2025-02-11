"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card } from "../ui/card";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

type TSlide = {
  title?: string;
  caption?: string;
  imagePath: string;
  imageAlt: string;
  linkPath: string;
};

interface HomeCarouselProps {
  slides: Array<TSlide>;
}

const HomeCarousel: React.FC<HomeCarouselProps> = (props) => {
  const { slides } = props;
  return (
    <div className="flex flex-col items-center justify-center w-full relative">
      <Carousel
        plugins={[
          Autoplay({
            delay: 10000,
          }),
        ]}
        opts={{
          loop: true,
        }}
        className="w-full md:w-[80%] max-w-full md:max-w-8xl h-full"
      >
        {/* Controls carousel width */}
        <CarouselContent className="h-[40vh]">
          {/* Controls content height */}
          {slides.map((slide, index) => {
            return (
              <CarouselItem
                key={index}
                className="flex justify-center h-full font-sans"
              >
                <Card className="relative flex items-center justify-center size-full overflow-hidden">
                  {/* Background Image */}
                  <div className="relative w-full h-full">
                    <Image
                      alt={slide.imageAlt}
                      src={slide.imagePath}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>

                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/50 p-4 w-full">
                    {slide.title && (
                      <h2 className="text-4xl font-bold text-center w-full">
                        {slide.title}
                      </h2>
                    )}
                    {slide.caption && (
                      <p className="mt-2 text-lg text-center w-full italic">
                        {slide.caption}
                      </p>
                    )}
                    <Link
                      href={slide.linkPath}
                      className="mt-4 px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-slate-400 hover:ring-1 ring-white"
                    >
                      Learn More
                    </Link>
                  </div>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
