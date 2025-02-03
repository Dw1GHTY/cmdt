"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

type TSlide = {
  title?: string;
  caption?: string;
  //TODO: shadcn <AspectRatio> za slike u carousel
  imagePath: string;
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
            delay: 3500,
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
              <CarouselItem key={index} className="flex justify-center h-full">
                <Card className="flex items-center justify-center size-full overflow-hidden">
                  <CardContent className="flex items-center justify-center h-full w-full p-0">
                    <div className="relative w-full h-full">
                      <Image
                        alt="image"
                        src={slide.imagePath}
                        layout="fill" // Fills the parent div
                        objectFit="cover" // Ensures the image covers without distortion
                        className="rounded-lg"
                      />
                    </div>
                  </CardContent>
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
