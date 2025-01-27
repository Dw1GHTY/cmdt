import React from "react";
import NavLink from "./NavLink";
import { TLink } from "@/types/TLink";
import NavFranchises from "./NavFranchises";
import { TCompany } from "@/types/TCompany";

interface NavMenuProps {
  links: Array<TLink>;
  companies: Array<TCompany>;
}

const NavMenuDesktop: React.FC<NavMenuProps> = ({ links, companies }) => {
  return (
    <div className="flex flex-row flex-grow items-center py-2">
      <NavFranchises companies={companies} />
      {links.map((link, index) => {
        return <NavLink key={index} link={link} />;
      })}
    </div>
  );
};

export default NavMenuDesktop;
