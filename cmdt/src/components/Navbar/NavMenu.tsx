import React from "react";
import NavLink from "./NavLink";
import { TLink } from "@/types/TLink";
import NavFranchises from "./NavFranchises";

interface NavMenuProps {
  links: Array<TLink>;
}

const NavMenu: React.FC<NavMenuProps> = ({ links }) => {
  return (
    <div className="flex flex-row flex-grow items-center py-2">
      <NavFranchises />
      {links.map((link, index) => {
        return <NavLink key={index} link={link} />;
      })}
    </div>
  );
};

export default NavMenu;
