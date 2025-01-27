import React from "react";
import LocationCard from "@/components/Cards/LocationCard";
// import { TCompany } from "@/types/TCompany";

// interface LocationsProps {
//   companies: Array<TCompany>;
// }

const Locations: React.FC = () => {
  return (
    <section className="flex flex-col w-full">
      <h1 className="text-4xl text-center my-2">
        Complete Mobile Drug Testing
        <span className="text-blue-900 font-bold"> Locations</span>
      </h1>
      <div className="flex flex-row items-center flex-wrap md:flex-row">
        {/* //! Fetched companies here */}
        <LocationCard />
        <LocationCard />
        <LocationCard />
        <LocationCard />
        <LocationCard />
        <LocationCard />
      </div>
    </section>
  );
};

export default Locations;
