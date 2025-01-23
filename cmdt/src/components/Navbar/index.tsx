import React from "react";
import Logo from "../Logo";
import NavMenuDesktop from "./NavMenuDesktop";
import NavMenuMobile from "./NavMenuMobile";

const Navbar = () => {
  return (
    <nav
      className="fixed h-fit top-0 z-10 flex flex-row justify-between items-center md:justify-normal  w-screen 
                border-b-1 bg-slate-600 border-slate-400"
    >
      {/* //? Logo */}
      <Logo />

      {/* //? Navbar menu with links */}
      <div className="hidden md:flex">
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
              //! Only names and links for the franchises should go into mobile menu
              submenu: [
                { name: "Company1" },
                { name: "Company2" },
                { name: "Company3" },
              ],
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
