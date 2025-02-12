"use client";
import React from "react";
import Logo from "../Logo";
import NavMenuDesktop from "./NavMenuDesktop";
import NavMenuMobile from "./NavMenuMobile";
import NavFranchises from "./NavFranchises";
import { useQuery } from "@tanstack/react-query";
import { TFranchise } from "@/types/TFranchise";
import { Button } from "../ui/button";

const Navbar = () => {
  const { data, isLoading, isError } = useQuery({
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
    refetchInterval: false,
    queryKey: ["franchises"],
    queryFn: async () => {
      const url = `${window.location.origin}/api/franchises`;
      const response = await fetch(url, { method: "GET" });
      const data = await response.json();
      return await data;
    },
  });
  if (isError)
    return <span className="text-red-600">Sorry There was an Error</span>;

  const franchiseSubmenu = data?.map((franchise: TFranchise) => ({
    name: franchise.LOCATION,
    path: franchise.LINK,
  }));
  return (
    <nav
      className="fixed h-fit top-0 z-10 flex flex-row justify-between items-center md:justify-normal w-screen 
                border-b-2 border-b-blue-800 
                shadow-sm shadow-blue-900 
                bg-gradient-to-r from-blue-700 to-slate-400
                backdrop-filter backdrop-blur-lg bg-opacity-5"
    >
      <Logo />

      {/* //TODO: OVDE SI STAO */}
      <div className="hidden md:flex">
        {isLoading ? (
          <Button className="bg-white text-black mt-0.5 mx-1" disabled>
            Franchises
          </Button>
        ) : (
          <NavFranchises franchises={data} />
        )}

        <NavMenuDesktop
          //!Pass fetched data from DB
          links={[
            {
              name: "Home",
              path: "/",
            },
            {
              name: "Capability Statement",
              path: "/capability_statement",
            },
            {
              name: "Drug Testing",
              path: "/drug_testing",
            },
            {
              name: "Background Screening",
              path: "/background_screening",
            },
            {
              name: "DNA/Paternity Testing",
              path: "/dna_paternity_testing",
            },
            {
              name: "Contact Us",
              path: "/contact",
            },
          ]}
        />
      </div>

      <div className="md:hidden flex justify-center size-20 p-2">
        <NavMenuMobile
          links={[
            { name: "Home", path: "/" },
            {
              name: "Franchises",
              submenu: {
                links: franchiseSubmenu || [],
                isDynamic: true, // Mark as dynamic
              },
            },
            { name: "Capability Statement", path: "/capability_statement" },
            { name: "Drug Testing", path: "/drug_testing" },
            { name: "Background Screening", path: "/background_screening" },
            { name: "DNA/Paternity Testing", path: "/dna_paternity_testing" },
            { name: "Contact Us", path: "/contact" },
          ]}
          isLoading={isLoading} // Pass isLoading state
        />
      </div>
    </nav>
  );
};

export default Navbar;
