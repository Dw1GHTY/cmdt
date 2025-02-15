"use client";
import React from "react";
import FranchiseCard from "@/components/Cards/FranchiseCard";
import { useQuery } from "@tanstack/react-query";
import { TFranchise } from "@/types/TFranchise";
import LocationsSkeleton from "@/components/Skeletons/LocationsSkeleton";

const Locations: React.FC = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["franchises"],
    queryFn: async () => {
      const url = `${window.location.origin}/api/franchises`;
      const response = await fetch(url, { method: "GET" });
      const data = await response.json();
      return await data;
    },
  });
  if (isError)
    return (
      <span className="text-red">
        Sorry There was an Error while loading locations
      </span>
    );
  return (
    <div
      className="
      flex w-full my-6 font-sans
      border-y-2
      bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/locations-bg.jpg')",
      }}
    >
      <section className="flex flex-col w-full">
        <div className="flex justify-center items-center my-3 ">
          <h2
            className="
            flex flex-col p-2
            text-4xl text-center text-blue-900
            bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 "
          >
            <span className=" font-semibold">Complete Mobile Drug Testing</span>
            <span className="text-center text-3xl md:text-6xl font-bold italic">
              Locations
            </span>
          </h2>
        </div>
        <div
          className="flex justify-center items-center w-full mb-2 px-9
          flex-col space-x-0 space-y-2  
          md:flex-row md:space-x-9 md:space-y-0"
        >
          {isLoading ? (
            <LocationsSkeleton />
          ) : (
            data.map((franchise: TFranchise, index: number) => {
              return <FranchiseCard key={index} franchise={franchise} />;
            })
          )}
        </div>
      </section>
    </div>
  );
};

export default Locations;
