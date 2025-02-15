import React from "react";
import CardSkeleton from "./CardSkeleton";

const LocationsSkeleton = () => {
  return (
    <div
      className="flex justify-center items-center w-full mb-2
                flex-col space-x-0 space-y-2  
                md:flex-row md:space-x-3 md:space-y-0"
    >
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  );
};

export default LocationsSkeleton;
