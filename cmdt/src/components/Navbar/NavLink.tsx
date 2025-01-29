import { TLink } from "@/types/TLink";
import Link from "next/link";
import React from "react";

interface NavLinkProps {
  link: TLink;
}

const NavLink: React.FC<NavLinkProps> = ({ link }) => {
  return (
    <Link
      className="flex justify-center items-center h-full p-1 mx-2 
      text-white text-center 
      rounded-md transition delay-100 hover:bg-cyan-500"
      href={`${link.path}`}
    >
      {link.name}
    </Link>
  );
};

export default NavLink;
