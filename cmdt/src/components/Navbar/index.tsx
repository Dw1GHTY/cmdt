"use client";
import React from "react";
import Logo from "../Logo";
import NavMenuDesktop from "./NavMenuDesktop";
import NavMenuMobile from "./NavMenuMobile";
import { useQuery } from "@tanstack/react-query";
import NavbarSekeleton from "../Skeletons/NavbarSekeleton";
import { TCompany } from "@/types/TCompany";

const Navbar = () => {
  const { data, isLoading, isError } = useQuery({
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
    refetchInterval: false,
    queryKey: ["companies"],
    queryFn: async () => {
      const url = `${window.location.origin}/api/companies`;
      const response = await fetch(url, { method: "GET" });
      const data = await response.json();
      return await data;
    },
  });
  if (isLoading) return <NavbarSekeleton />;
  if (isError)
    return <span className="text-red-600">Sorry There was an Error</span>;

  //! Generated submenu for NavMenuMobile
  const franchiseSubmenu = data?.map((company: TCompany) => ({
    name: company.LOCATION,
    path: company.LINK,
  }));
  return (
    <nav
      className="fixed h-fit top-0 z-10 flex flex-row justify-between items-center md:justify-normal w-screen 
                border-b-2 border-b-blue-800 
                shadow-sm shadow-blue-900 
                bg-gradient-to-r from-blue-700 to-slate-400
                backdrop-filter backdrop-blur-lg bg-opacity-5"
    >
      {/* //? Logo */}
      <Logo />

      {/* //? Navbar menu with links */}
      <div className="hidden md:flex">
        <NavMenuDesktop
          //!Pass fetched data from DB
          companies={data}
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

      {/* //? Mobile burger menu */}
      <div className="md:hidden flex justify-center size-20 p-2">
        <NavMenuMobile
          //!Pass fetched data from db
          links={[
            {
              name: "Home",
              path: "/",
            },
            {
              name: "Franchises",
              submenu: franchiseSubmenu,
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
    </nav>
  );
};

export default Navbar;
