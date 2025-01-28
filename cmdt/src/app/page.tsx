import HomeCarousel from "@/components/Carousels/HomeCarousel";
import AboutUs from "@/components/Segments/Home/AboutUs";
import Locations from "@/components/Segments/Home/Locations";
import React from "react";
const page = () => {
  return (
    <div className="flex flex-col justify-center items-center size-full">
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
      <h2 className="text-5xl italic text-center text-blue-800 font-semibold my-3">
        Welcome to Complete Mobile Drug Testing
      </h2>
      <AboutUs />
      {/* //? LOCATIONS SEGMENT */}
      <div className="flex w-full ">
        <Locations />
      </div>
      {/* //?  */}
      <div className="flex text-4xl">Segment 4</div>
    </div>
  );
};
export default page;
