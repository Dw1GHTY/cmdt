"use client";
import React from "react";
import LocationCard from "@/components/Cards/LocationCard";
import { useQuery } from "@tanstack/react-query";
import { TCompany } from "@/types/TCompany";

const Locations: React.FC = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["companies"],
    queryFn: async () => {
      const url = `${window.location.origin}/api/companies`;
      const response = await fetch(url, { method: "GET" });
      const data = await response.json();
      return await data;
    },
  });
  if (isLoading) return <span className="text-white">Loading locations</span>;
  if (isError)
    return <span className="text-white">Sorry There was an Error</span>;
  return (
    <section className="flex flex-col w-full">
      <h1 className="text-4xl text-center my-2">
        Complete Mobile Drug Testing
        <span className="text-blue-900 font-bold"> Locations</span>
      </h1>
      <div className="flex flex-row justify-center items-center flex-wrap md:flex-row w-full">
        {/* //! Fetched companies here */}
        {data.map((company: TCompany, index: number) => {
          return <LocationCard key={index} />;
        })}
      </div>
    </section>
  );
};

export default Locations;
