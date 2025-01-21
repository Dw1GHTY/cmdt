import React from "react";
import NavMenu from "./NavMenu";
import Logo from "../Logo";

const Navbar = () => {
  return (
    <nav className="flex flex-row">
      <Logo />
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
            path: "contact",
          },
        ]}
      />
    </nav>
  );
};

export default Navbar;
