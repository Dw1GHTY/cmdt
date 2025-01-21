import React from "react";
import NavMenu from "./NavMenu";
import Logo from "../Logo";
import NavMenuMobile from "./NavMenuMobile";

const Navbar = () => {
  return (
    <nav
      className="sticky flex flex-row w-screen h-fit top-0 z-10 
                border-b-1 bg-slate-600 border-slate-400"
    >
      {/* //? Logo */}
      <Logo />

      {/* //? Navbar menu with links */}
      <div className="hidden md:flex">
        <NavMenu
          links={[
            {
              name: "Home",
              path: "/",
            },
            {
              name: "Franchises",
              path: "",
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
      <div className="flex md:hidden">
        <NavMenuMobile links={[{ name: "test", path: "test" }]} />
      </div>
    </nav>
  );
};

export default Navbar;
