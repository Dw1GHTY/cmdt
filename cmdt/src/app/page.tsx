import HomeCarousel from "@/components/Carousels/HomeCarousel";
import Locations from "@/components/Segments/Home/Locations";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center size-full">
      <h1 className="text-2xl">Carousel</h1>
      <div className="mt-24">
        <HomeCarousel />
      </div>
      {/* //? LOCATIONS SEGMENT */}
      <div className="flex border-2 border-black ">
        <Locations />
      </div>
      {/* //?  */}
      <div className="flex text-4xl">Segment 3</div>
      <div className="flex text-4xl">Segment 4</div>
    </div>
  );
};
export default page;
