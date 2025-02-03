import HomeCarousel from "@/components/Carousels/HomeCarousel";
import AboutUs from "@/components/Segments/Home/AboutUs";
import Locations from "@/components/Segments/Home/Locations";
import { Separator } from "@/components/ui/separator";
import React from "react";
const page = () => {
  return (
    <div className="flex flex-col justify-center items-center size-full">
      <h1 className="text-4xl md:text-7xl italic text-center text-blue-950 font-semibold font-sans mt-28 mb-8">
        Welcome to Complete Mobile Drug Testing
      </h1>
      <HomeCarousel
        slides={[
          {
            imagePath: "/stock1.jpg",
          },
          {
            imagePath: "/stock2.jpg",
          },
          {
            imagePath: "/stock3.jpg",
          },
        ]}
      />

      <AboutUs />
      {/* //? LOCATIONS SEGMENT */}
      <Separator
        className="
      bg-blue-400 h-1 w-3/4 mt-6 rounded-md 
      ring-1 ring-sky-400 
      shadow-md shadow-cyan-300
       animate-pulse"
      />
      <Locations />

      {/* //?  */}
      <div className="flex text-4xl">Segment 4</div>
    </div>
  );
};
export default page;
