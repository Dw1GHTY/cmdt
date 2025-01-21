import { TLink } from "@/types/TLink";
import Link from "next/link";
import React from "react";

interface NavLinkProps {
  link: TLink;
}

const NavLink: React.FC<NavLinkProps> = ({ link }) => {
  return (
    <Link
      className="flex justify-center items-center size-fit p-1 mx-2 text-center bg-white rounded-md hover:bg-blue-300"
      href={`${link.path}`}
    >
      {link.name}
    </Link>
  );
};

export default NavLink;
