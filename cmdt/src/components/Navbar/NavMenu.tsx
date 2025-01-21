import React from "react";
import NavLink from "./NavLink";
import { TLink } from "@/types/TLink";

interface NavMenuProps {
  links: Array<TLink>;
}

const NavMenu: React.FC<NavMenuProps> = ({ links }) => {
  return (
    <div className="flex flex-row flex-grow bg-blue-500 items-center">
      {links.map((link, index) => {
        return <NavLink key={index} link={link} />;
      })}
    </div>
  );
};

export default NavMenu;
