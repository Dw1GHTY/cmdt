import HomeCarousel from "@/components/Carousels/HomeCarousel";
import AboutUs from "@/components/Segments/Home/AboutUs";
import Locations from "@/components/Segments/Home/Locations";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center size-full">
      <h1 className="text-4xl md:text-7xl italic text-center text-blue-950 font-semibold font-sans mt-28 mb-8">
        Complete Mobile Drug Testing
      </h1>
      <HomeCarousel
        slides={[
          {
            imagePath: "/drug-test.jpg",
            imageAlt: "An image of a drug test",
            title: "Drug Testing",
            caption: "Efficient drug testing",
            linkPath: "drug_testing",
            buttonText: "Discover drug testing services",
          },
          {
            imagePath: "/dna-test.jpg",
            imageAlt: "An image of a dna test",
            title: "DNA paternity testing",
            linkPath: "dna_paternity_testing",
            buttonText: "View all sorts of dna paternity tests we offer",
          },
          {
            imagePath: "/background-screening.jpg",
            imageAlt: "An image of a screening process",
            title: "Background Screening",
            caption: "Pre employment background screening and more",
            linkPath: "/background_screening",
            buttonText: "Choose the exact background screening you want",
          },
        ]}
      />

      <AboutUs />

      <Locations />
    </div>
  );
};
export default page;
