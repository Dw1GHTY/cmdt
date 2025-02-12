import React from "react";
import NavLink from "./NavLink";
import { TLink } from "@/types/TLink";
interface NavMenuProps {
  links: Array<TLink>;
}

const NavMenuDesktop: React.FC<NavMenuProps> = (props) => {
  const { links } = props;
  return (
    <div className="flex flex-row flex-grow items-center py-2">
      {links.map((link, index) => {
        return <NavLink key={index} link={link} />;
      })}
    </div>
  );
};

export default NavMenuDesktop;
