"use client";
import React from "react";
import FranchiseCard from "@/components/Cards/FranchiseCard";
import { useQuery } from "@tanstack/react-query";
import { TFranchise } from "@/types/TFranchise";

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
  if (isLoading) return <span className="text-white">Loading locations</span>;
  if (isError)
    return <span className="text-white">Sorry There was an Error</span>;
  return (
    <div className="flex w-full bg-blue-950 shadow-md shadow-sky-300 my-6 font-sans">
      <section className="flex flex-col w-full">
        <h1 className="text-4xl text-center text-white my-2">
          Complete Mobile Drug Testing
        </h1>
        <span className="text-white text-center text-6xl font-bold">
          Locations
        </span>
        <div className="flex flex-col justify-center items-center md:flex-row w-full">
          {/* //! Fetched franchises here */}
          {data.map((franchise: TFranchise, index: number) => {
            return <FranchiseCard key={index} franchise={franchise} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Locations;
